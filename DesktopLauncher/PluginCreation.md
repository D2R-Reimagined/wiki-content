---
title: Plugin Authoring Guide
description: A guide for how to write plugins for the D2R Reimagined Desktop launcher and GitHub Discussions plugins page.
published: true
date: 2026-04-23T08:09:22.773Z
tags: desktop launcher, launcher, desktop, plugin, plugin guide
editor: markdown
dateCreated: 2026-04-07T08:34:46.134Z
---


# Plugin Authoring Guide: From Concept to Chaos

Welcome to the Reimagined Launcher's plugin system. A plugin is a small zip archive that tells the launcher how to tweak the game's `.txt` data files and string `.JSON` files at launch time. This guide covers the manifest, the operation format, how to identify the row you're targeting for every supported file, the separate schema used for string JSON targets, and a handful of worked examples.

---

## 1. The Architectural Blueprint (`plugininfo.json`)

Every plugin requires a manifest file named `plugininfo.json`. It defines the plugin's identity, the user-facing "knobs" (parameters), and the operation files the launcher will run.

### The Anatomy of a Manifest
```json
{
  "name": "Kinetic Overdrive",
  "version": "1.1.0",
  "modVersion": "3.0.7",
  "author": "YourName",
  "description": "Recalibrates skill dynamics for maximum efficiency (and slightly more explosions).",
  "files": ["skill-overrides.json"],
  "parameters": [
    {
      "key": "damageMultiplier",
      "name": "Damage Multiplier",
      "defaultValue": "1.5"
    },
    {
      "key": "globalMaxLevel",
      "name": "Global Max Level",
      "defaultValue": "20"
    },
    {
      "key": "manaCost",
      "name": "Mana Cost Override",
      "defaultValue": "5"
    },
    {
      "key": "globalDurationScalar",
      "name": "Duration Multiplier",
      "defaultValue": "2.0"
    }
  ]
}
```

- **`name`**: **Required.** Plugin display name.
- **`version`**: **Required.** Plugin version.
- **`modVersion`**: **Required.** The mod version this plugin targets, in `#.#.#` format (e.g. `3.0.7`). Plugins without a valid `modVersion` are rejected.
- **`author`**: Optional. Displayed in the launcher.
- **`description`**: Optional. Short description shown in the launcher.
- **`files`**: **Required.** Relative paths to the JSON files containing your operations.
- **`parameters`**: Optional. Defines the UI knobs the user will see. Each parameter needs `key`, `name`, and `defaultValue`. The `key` is what you reference from operations.

---

## 2. The Instruction Set (`*.json`)

Your operation file can be either a single object or an array of objects. **Two target kinds are supported**, each with its own schema:

1. **Excel (`.txt`) targets** — any `.txt` file in the base excel folder except `itemstatcost.txt`.
2. **Strings (`.json`) targets** — any `.json` file under `data/local/lng/strings` (e.g. `item-runes.json`). See [Section 5](#5-string-json-files) for the flat d2rr-style layout.

### Excel target fields

| Field | Required | Purpose |
|---|---|---|
| `file` | yes | Target `.txt` file from the base excel folder (e.g. `skills.txt`). All files are supported except `itemstatcost.txt`. |
| `rowIdentifier` | yes | Identifies **which row** to change. Contents depend on the file — see [Row Identification Rules](#3-row-identification-rules-per-file) below. |
| `column` | yes | The property name of the column to modify. Must match a public property on the target entry type (case-insensitive). In practice, it's the header name with spaces and punctuation stripped, PascalCase. |
| `operation` | no | `replace` (default) or `multiplyExisting`. |
| `updatedValue` | when replacing or multiplying without a `parameterKey` | The new value, the multiplier, or a template string containing parameter tokens. |
| `parameterKey` | no | References a parameter declared in `plugininfo.json`. For `replace`, the parameter value becomes the new value. For `multiplyExisting`, it becomes the multiplier. |

### Parameter Tokens
`updatedValue` supports tokens in the form `{{parameter:key}}` (or `{{ parameter:key }}`). They are resolved at runtime from the user-supplied parameter values.

```json
{
  "file": "skills.txt",
  "rowIdentifier": "Teleport",
  "column": "Mana",
  "operation": "replace",
  "updatedValue": "{{parameter:manaCost}}"
}
```

---

## 3. Row Identification Rules Per File

The launcher looks up rows in one of two ways:

1. **Column lookup** (most files) — `rowIdentifier` must match the value of a specific column on the row you want to change. Matching is case-insensitive. **The match must be unique within the file**; if the value appears in multiple rows, every match is updated.
2. **Row-ID lookup** (a handful of files whose natural identifier columns contain duplicates) — `rowIdentifier` is a **0-based numeric index** into the data rows, in file order.

### The `−2` rule for Row-ID lookup

Every file that uses numeric Row-ID lookup follows the same mapping between the AFJ Sheet (or any tab-separated editor that shows a header row) and the launcher:

```
RowId = editor_row − 2
```

- Editor row 1 is the header row (not counted).
- Editor row 2 is the first data row → `RowId = 0`.
- Editor row N → `RowId = N − 2`.

The `Expansion` separator row that appears in a few files is a normal entry: it consumes one Row-ID, so the `−2` rule still holds with no extra off-by-one.

### File-by-file requirements

The column listed in **Identifier** is the exact value a plugin must place in `rowIdentifier`. For Row-ID files, use a numeric string; the **Display column** is listed only for context (what you'd actually *see* in that row in an editor).

#### Column-lookup files

| File | Identifier column | Example `rowIdentifier` | Notes |
|---|---|---|---|
| `actinfo.txt` | `Act` | `1` | Act number as a string. |
| `armor.txt` | `Code` | `cap` | 3–4 letter item code. |
| `automagic.txt` | `Name` | `Fletcher's` | Affix display name. |
| `charstats.txt` | `Class` | `Amazon` | Class name. |
| `cubemod.txt` | `CubeModifierTypeName` | *(file-dependent)* | Modifier-type name. |
| `difficultylevels.txt` | `Name` | `Normal` | `Normal` / `Nightmare` / `Hell`. |
| `experience.txt` | `Level` | `MaxLvl` | The row label column (e.g. `MaxLvl`, `Expansion`). |
| `gamble.txt` | `Name` | `amulet` | Item base name. |
| `gems.txt` | `Name` | `Chipped Amethyst` | Gem display name. |
| `inventory.txt` | `Class` | `Amazon` | Class name (inventory layout per class). |
| `itemtypes.txt` | `Code` | `amul` | 3–4 letter item-type code. |
| `itemuicategories.txt` | `Name` | *(category name)* | UI category name. |
| `levelgroups.txt` | `LevelGroupId` | *(numeric group id)* | Stored as a number but looked up as text. |
| `levels.txt` | `Name` | *(level name)* | Internal level name. |
| `lvlwarp.txt` | `Name` | `Act 1 Wilderness to Cave Cliff L` | Warp display name. |
| `misc.txt` | `Code` | `elx` | Item code. |
| `missiles.txt` | `MissileName` | *(missile name)* | Missile identifier. |
| `monequip.txt` → see RowId section | | | |
| `monlvl.txt` | `Level` | `1` | Level number. |
| `monpet.txt` | `Monster` | `roguehire` | Monster id. |
| `monprop.txt` | `Id` | `baboon6` | Monster prop id. |
| `monstats.txt` | `Id` | `skeleton1` | Monster id. |
| `monstats2.txt` | `Id` | `skeleton1` | Monster id. |
| `montype.txt` | `Type` | `undead` | Monster type. |
| `monumod.txt` | `UniqueModId` | *(unique mod id)* | |
| `npc.txt` | `NpcName` | *(npc name)* | NPC internal name. |
| `pettype.txt` | `PetTypeId` | *(pet type id)* | |
| `properties.txt` | `Code` | `ac` | Property code. |
| `propertygroups.txt` | `Code` | `skilltab-war` | Group code. |
| `runes.txt` | `Name` | `Friendship` | Runeword name. |
| `setitems.txt` | `Index` | `Civerb's Ward` | Set-item index. |
| `sets.txt` | `Index` | `Civerb's Vestments` | Set index. |
| `shrines.txt` | `Name` | `None` | Shrine name (include `None` rows if they appear). |
| `skillcalc.txt` | `Code` | `ln12` | Skill calc code. |
| `skilldesc.txt` | `SkillName` | *(skilldesc name)* | Must match the `skilldesc` column value, not the in-game skill name. |
| `skills.txt` | `Skill` | `Attack` | Skill name. |
| `sounds.txt` | `Sound` | `cursor_pass` | Sound id. |
| `states.txt` | `StateId` | *(state id)* | |
| `storepage.txt` | `StorePageName` | *(page name)* | |
| `superuniques.txt` | `Superunique` | `Bishibosh` | Super-unique id. |
| `treasureclassex.txt` | `TreasureClassName` | *(tc name)* | |
| `uniqueitems.txt` | `Index` | `The Gnasher` | Unique item index. |
| `weapons.txt` | `Code` | `hax` | Weapon code. |
| `overlay.txt` | `OverlayName` | *(overlay name)* | Overlay record name. |

#### Row-ID files (numeric `rowIdentifier`, `−2` rule applies)

These files use numeric indices because their natural identifier columns contain duplicates or are not unique enough.

| File | `rowIdentifier` | Display column (for context only) | Why Row-ID |
|---|---|---|---|
| `automap.txt` | `0` … `N-1` | `LevelName` (plus `*Type1` etc.) | `*Type1` has hundreds of duplicates (`Rock2` ×130, `WTLL` ×101, …). |
| `cubemain.txt` | `0` … `N-1` | `description` | ~11 duplicate recipe descriptions. |
| `hireling.txt` | `0` … `N-1` | `Hireling` | Only 4 distinct hirelings across hundreds of rows. |
| `lvlmaze.txt` | `0` … `N-1` | `Name` | `Act 5 - Baal 1` ×4. |
| `lvlprest.txt` | `0` … `N-1` | `Name` | Duplicate barricade-ruin variants. |
| `magicprefix.txt` | `0` … `N-1` | `Name` | Hundreds of duplicate affix names. |
| `magicsuffix.txt` | `0` … `N-1` | `Name` | Hundreds of duplicate affix names. |
| `monequip.txt` | `0` … `N-1` | `monster` | Duplicates across shadowmaster/valkyrie/etc. |
| `monpreset.txt` | `0` … `N-1` | `Act` | Values are just act numbers 1–5. |
| `objects.txt` | `0` … `N-1` | `Name` | 65+ duplicate object display names. |

> Tip: if you're staring at the file in AFJ Sheet and see the row you want on **row 42**, your `rowIdentifier` is `"40"`.
{.is-info}


### `itemstatcost.txt` is not supported

The launcher intentionally rejects `itemstatcost.txt`. Attempts to target it will fail validation.

---

## 4. Power Techniques: Key Reuse

Efficiency matters. You don't need a separate parameter for every single field — map one UI knob to many operations.

#### Example 1: The "Master Balance" Multiplier
Scale both min and max damage of a skill with a single slider:

```json
[
  {
    "file": "skills.txt",
    "rowIdentifier": "Fire Bolt",
    "column": "EMin",
    "operation": "multiplyExisting",
    "parameterKey": "damageMultiplier"
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "Fire Bolt",
    "column": "EMax",
    "operation": "multiplyExisting",
    "parameterKey": "damageMultiplier"
  }
]
```

#### Example 2: Uniform Level Caps
Set the same `maxlvl` for several skills through one parameter:

```json
[
  {
    "file": "skills.txt",
    "rowIdentifier": "Magic Arrow",
    "column": "maxlvl",
    "operation": "replace",
    "parameterKey": "globalMaxLevel"
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "Fire Arrow",
    "column": "maxlvl",
    "operation": "replace",
    "parameterKey": "globalMaxLevel"
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "Inner Sight",
    "column": "maxlvl",
    "operation": "replace",
    "parameterKey": "globalMaxLevel"
  }
]
```

#### Example 3: Multi-file plugin with parameter tokens

A single operations file can touch multiple target files. The example below buffs one weapon and one armor piece, changes a skill, and tweaks a magic prefix by Row-ID:

```json
[
  {
    "file": "weapons.txt",
    "rowIdentifier": "hax",
    "column": "MinDam",
    "operation": "multiplyExisting",
    "updatedValue": "{{parameter:damageMultiplier}}"
  },
  {
    "file": "weapons.txt",
    "rowIdentifier": "hax",
    "column": "MaxDam",
    "operation": "multiplyExisting",
    "updatedValue": "{{parameter:damageMultiplier}}"
  },
  {
    "file": "armor.txt",
    "rowIdentifier": "cap",
    "column": "MinAc",
    "operation": "replace",
    "updatedValue": "10"
  },
  {
    "file": "armor.txt",
    "rowIdentifier": "cap",
    "column": "MaxAc",
    "operation": "replace",
    "updatedValue": "15"
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "Teleport",
    "column": "Mana",
    "operation": "replace",
    "parameterKey": "manaCost"
  },
  {
    "file": "magicprefix.txt",
    "rowIdentifier": "86",
    "column": "Spawnable",
    "operation": "replace",
    "updatedValue": "0"
  }
]
```

---

## 5. String JSON Files

In addition to excel `.txt` files, plugins can patch D2R's string tables — any `.json` file that lives under `data/local/lng/strings` (e.g. `item-runes.json`, `item-nameaffixes.json`, `ui.json`). The launcher resolves the strings directory automatically, alongside the excel folder.

### Flat d2rr-style layout

String entries do **not** use `rowIdentifier` / `column` / `operation` / `updatedValue`. Instead, each entry is a flat object listing the target file, the D2R entry `Key`, and one or more language fields with the replacement text:

```json
{
  "file": "item-runes.json",
  "Key": "DoomStaff",
  "enUS": "NoDoom",
  "ptBR": "SemFatalidade",
  "frFR": "PasDeDévastation"
}
```

### Fields

| Field | Required | Purpose |
|---|---|---|
| `file` | yes | A `.json` file name that exists under `data/local/lng/strings`. |
| `Key` | yes | The D2R entry `Key` to match inside that file. |
| Language fields | at least one | Any of the 13 recognized language codes (see below) with the replacement string. |

### Supported language codes

`enUS`, `zhTW`, `deDE`, `esES`, `frFR`, `itIT`, `koKR`, `plPL`, `esMX`, `jaJP`, `ptBR`, `ruRU`, `zhCN`.

### Replacement semantics

- Only the language fields you list on the entry are overwritten on the matched D2R entry.
- Every other language on that same entry — and every other entry in the file — is left completely untouched.
- Any field that is not one of the recognized language codes (and is not `file` or `Key`) is ignored. This is intentional so plugin authors can leave notes without breaking the format.
- Parameter tokens (`{{parameter:key}}`) are **not** resolved inside string JSON values today — provide the final replacement text directly.

### Example

```json
[
  {
    "file": "item-runes.json",
    "Key": "DoomStaff",
    "enUS": "NoDoom"
  },
  {
    "file": "item-runes.json",
    "Key": "DoomStaff",
    "enUS": "NoDoom",
    "ptBR": "SemFatalidade",
    "frFR": "PasDeDévastation"
  }
]
```

---

## 6. Sharing on GitHub Discussions

To share your plugin through the launcher's **User Plugins** page, create a post in the [Plugins discussion category](https://github.com/D2R-Reimagined/reimagined-launcher/discussions/categories/plugins) on GitHub. The launcher scrapes discussion posts and requires specific fields in the post body:

- **`Title:`** Your Plugin Name — displayed as the plugin title in the launcher.
- **`Desc:`** or **`Description:`** A short summary — displayed under the title.
- **`Mod:`** / **`ModVer:`** / **`ModVersion:`** followed by a version in `#.#.#` format — displayed next to the title. Posts without a valid mod version are not loaded.
- **`.zip` attachment**: Attach the plugin zip file to the post. Posts without a `.zip` attachment are not loaded.

The `.zip` must still contain a valid `plugininfo.json` with all required fields (`name`, `version`, `modVersion`, `files`). The launcher validates the archive on install.

---

## 7. Authoring Checklist

1. **Manifest First**: Ensure your `plugininfo.json` is valid JSON and lists all your operation files.
2. **modVersion**: Include a `modVersion` field in `#.#.#` format matching the mod version your plugin targets. This is required.
3. **Row identification (excel)**: Use the identifier column from [Section 3](#3-row-identification-rules-per-file). For Row-ID files, remember the `−2` rule.
4. **Column names (excel)**: `column` must match a property name on the target entry (case-insensitive). Header names with spaces or punctuation (e.g. `Min ac`) map to PascalCase property names (e.g. `MinAc`).
5. **Strings schema**: For `.json` files under `data/local/lng/strings`, use the flat `{ file, Key, <languageCode>: "…" }` layout from [Section 5](#5-string-json-files). Only listed language fields are overwritten.
6. **Key Consistency**: Match your `parameterKey` exactly to the `key` in the manifest.
7. **Validation**: The launcher rejects plugins that reference unknown files, columns, or parameters; it also rejects file paths that traverse outside the plugin archive. Read the error list it produces.

Now go forth and break — I mean, *enhance* — the game responsibly. 🚀
