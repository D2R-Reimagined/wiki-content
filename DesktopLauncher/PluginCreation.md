---
title: Plugin Authoring Guide
description: A guide for how to write plugins for the D2R Reimagined Desktop launcher and GitHub Discussions plugins page.
published: true
date: 2026-04-25T23:39:00.000Z
tags: desktop launcher, launcher, desktop, plugin, plugin guide
editor: markdown
dateCreated: 2026-04-07T08:34:46.134Z
---

Welcome to the Reimagined Launcher's plugin system. A plugin is a small zip archive that tells the launcher how to tweak the game's `.txt` data files and string `.json` files at launch time. This guide covers the manifest, the operation format, how to identify the row you're targeting for every supported file, the separate schema used for string JSON targets, and a handful of worked examples.

---

# 1. The Architectural Blueprint (`plugininfo.json`)

Every plugin requires a manifest file named `plugininfo.json`. It defines the plugin's identity, the user-facing "knobs" (parameters), and the operation files the launcher will run.

## The Anatomy of a Manifest
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

# 2. The Instruction Set (`*.json`)

Your operation file can be either a single object or an array of objects. **Two target kinds are supported**, each with its own schema:

1. **Excel (`.txt`) targets** — any `.txt` file in the base excel folder except `itemstatcost.txt`.
2. **Strings (`.json`) targets** — any `.json` file under `data/local/lng/strings` (e.g. `item-runes.json`). See [Section 6](#6-string-json-files) for the flat d2rr-style layout.

## Excel target fields

| Field | Required | Purpose |
|---|---|---|
| `file` | yes | Target `.txt` file from the base excel folder (e.g. `skills.txt`). All files are supported except `itemstatcost.txt`. |
| `rowIdentifier` | yes | Identifies **which row** to change. Contents depend on the file — see [Row Identification Rules](#3-row-identification-rules-per-file) below. Also accepts a numeric index range `"start-end"` (inclusive, 0-based) to target many rows at once — see [Row Ranges](#row-ranges-multiple-rows-with-one-operation). Also accepts an **object** of `{column: expectedValue}` pairs to override the default match logic with multiple columns — see [Multi-column rowIdentifier override](#multi-column-rowidentifier-override). |
| `column` | yes (unless `columns` is provided) | The property name of the column to modify. Must match a public property on the target entry type (case-insensitive). In practice, it's the header name with spaces and punctuation stripped, PascalCase. |
| `columns` | no | An array of `{ column, updatedValue, parameterKey, operation }` objects to update **multiple columns on the same matched row(s)** with a single `rowIdentifier`. Each entry inherits `operation` / `updatedValue` / `parameterKey` from the parent operation when omitted. See [Multi-column updates](#multi-column-updates-one-rowidentifier-many-columns). |
| `operation` | no | `replace` (default), `multiplyExisting`, `append`, or `addRow`. |
| `updatedValue` | when replacing, multiplying, or appending without a `parameterKey` | The new value, the multiplier, the text to append, or a template string containing parameter tokens. |
| `parameterKey` | no | References a parameter declared in `plugininfo.json`. For `replace`, the parameter value becomes the new value. For `multiplyExisting`, it becomes the multiplier. For `append`, it becomes the text appended after the existing value. |

## Operation semantics

- **`replace`** — Overwrites the target column with `updatedValue` (or the resolved `parameterKey` value).
- **`multiplyExisting`** — Parses the existing column value as a decimal and multiplies it by `updatedValue` / the `parameterKey` value. Requires a numeric current value.
- **`append`** — Wraps the existing column value in parentheses and concatenates your text. For example, if the current value is `ln12` and your `updatedValue` is `+10*20`, the resulting value is `(ln12)+10*20`. Useful for extending skill `calc` expressions without rewriting them.
- **`addRow`** — Creates a brand-new row in the target `.txt` file. Omit `rowIdentifier` (or leave it empty) to **append** at the end of the file, or provide a numeric **0-based index** (e.g. `"5"`) to **insert** at that position. The new row's column values come from the `columns` array (preferred) or from a single top-level `column` / `updatedValue`. Columns you do not list keep their default value, so be sure to populate any required identifier columns the downstream parser expects. See [Adding new rows](#adding-new-rows-with-addrow).

## Parameter Tokens
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

# 3. Row Identification Rules Per File

The launcher looks up rows in one of four ways:

1. **Column lookup** (most files) — `rowIdentifier` must match the value of a specific column on the row you want to change. Matching is case-insensitive. **The match must be unique within the file**; if the value appears in multiple rows, every match is updated.
2. **Row-ID lookup** (a handful of files whose natural identifier columns contain duplicates) — `rowIdentifier` is a **0-based numeric index** into the data rows, in file order.
3. **Row-range lookup** (any supported `.txt` file) — `rowIdentifier` is a `"start-end"` string that applies one operation across every data row in the inclusive 0-based range. See [Row Ranges](#row-ranges-multiple-rows-with-one-operation).
4. **Multi-column override** (any supported `.txt` file) — `rowIdentifier` is an **object** listing one or more `{column: expectedValue}` pairs. A row only matches when **every** listed column equals its expected value (case-insensitive). See [Multi-column rowIdentifier override](#multi-column-rowidentifier-override).

## The `−2` rule for Row-ID lookup

Every file that uses numeric Row-ID lookup follows the same mapping between the AFJ Sheet (or any tab-separated editor that shows a header row) and the launcher:

```
RowId = editor_row − 2
```

- Editor row 1 is the header row (not counted).
- Editor row 2 is the first data row → `RowId = 0`.
- Editor row N → `RowId = N − 2`.

The `Expansion` separator row that appears in a few files is a normal entry: it consumes one Row-ID, so the `−2` rule still holds with no extra off-by-one.

## File-by-file requirements

The column listed in **Identifier** is the exact value a plugin must place in `rowIdentifier`. For Row-ID files, use a numeric string; the **Display column** is listed only for context (what you'd actually *see* in that row in an editor).

### Column-lookup files

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

### Row-ID files (numeric `rowIdentifier`, `−2` rule applies)

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


## Multi-column `rowIdentifier` override

In addition to the default column / Row-ID / range matching, `rowIdentifier` also accepts an **object** that lists one or more `{column: expectedValue}` pairs. The launcher matches a row only when **every** listed column equals its expected value (case-insensitive), bypassing the file's default identifier column entirely.

- Works on **every supported `.txt` file**, including Row-ID files.
- Column names follow the same rules as the `column` field — header names with spaces / punctuation map to PascalCase property names (e.g. `Min ac` → `MinAc`).
- Unknown columns are rejected at validation time.
- A dedicated `rowIdentifiers` (plural) property is also accepted as an alias if you prefer to keep `rowIdentifier` reserved for the legacy string form.
- On **Row-ID files** (the duplicate-identifier files listed above), the launcher emits a **warning** if you list fewer than 2 identifier columns, because a single column is unlikely to uniquely match the intended row. The operation still runs — it's a heads-up, not an error.

### Example: target a specific monstats row by name + hardcore index

```json
{
  "file": "monstats.txt",
  "rowIdentifier": { "NameStr": "Skeleton", "HcIdx": "86" },
  "column": "MinHP",
  "operation": "replace",
  "updatedValue": "50"
}
```

### Example: pin down a specific magicprefix row by name + group

```json
{
  "file": "magicprefix.txt",
  "rowIdentifiers": { "Name": "Stout", "Group": "1" },
  "column": "Spawnable",
  "operation": "replace",
  "updatedValue": "0"
}
```

> When targeting a Row-ID file with the object form, list at least two columns to make the match unambiguous. The launcher will warn you when only one is provided.
{.is-warning}

## Row Ranges (multiple rows with one operation)

In addition to a single identifier value or a single numeric Row-ID, `rowIdentifier` also accepts a **numeric index range** in the form `"start-end"`. The bounds are **inclusive** and **0-based data row indices** (the same `−2` rule as Row-ID lookup — editor row N → index `N − 2`).

- Ranges work for **every supported `.txt` file**, including column-lookup files. A range always targets rows by data-row index and bypasses the identifier column entirely.
- `start` and `end` can be given in either order; inverted ranges (e.g. `"100-50"`) are auto-normalized.
- Out-of-bounds ranges (beyond the file's row count) are rejected with a descriptive error.
- Whitespace around the numbers and the dash is tolerated, so `"50-100"` and `" 50 - 100 "` are equivalent.

### Examples

Zero out the `Cel1` column on rows 50 through 100 of `automap.txt`:

```json
{
  "file": "automap.txt",
  "rowIdentifier": "50-100",
  "column": "Cel1",
  "operation": "replace",
  "updatedValue": "0"
}
```

Double the `manacost` across rows 300–400 of `skills.txt` using a parameter:

```json
{
  "file": "skills.txt",
  "rowIdentifier": "300-400",
  "column": "Mana",
  "operation": "multiplyExisting",
  "parameterKey": "manaCost"
}
```

> Ranges are validated the same way as regular operations — `column`, `operation`, and `parameterKey` / `updatedValue` still have to be valid for the target file.
{.is-info}

## `itemstatcost.txt` is not supported

The launcher intentionally rejects `itemstatcost.txt`. Attempts to target it will fail validation.

---

# 4. Multi-Column Updates and New Rows

## Multi-column updates: one `rowIdentifier`, many columns

When you need to change several columns on the **same row** (or row range), you no longer need to repeat `file` / `rowIdentifier` for each column. Provide a `columns` array on a single operation — every entry in the array is applied to **every matched row** sharing that `rowIdentifier`.

Each `columns` entry supports the following fields:

| Field | Required | Purpose |
|---|---|---|
| `column` | yes | Target column name on the row. |
| `updatedValue` | no | Per-column override of the parent `updatedValue` (or the literal value for `addRow`). |
| `parameterKey` | no | Per-column override of the parent `parameterKey`. |
| `operation` | no | Per-column override of the parent `operation` (e.g. mix `replace` and `multiplyExisting` in one block). |

When a per-column field is omitted, the value from the parent operation is used. This means the most common case — "apply the same `multiplyExisting` with the same `parameterKey` to a handful of damage columns" — collapses to a very small block.

### Example: scale all damage fields of a skill with one parameter

```json
{
  "file": "skills.txt",
  "rowIdentifier": "amazonlightningfury",
  "operation": "multiplyExisting",
  "parameterKey": "damageMultiplier",
  "columns": [
    { "column": "EMin" },
    { "column": "EMax" },
    { "column": "EMinLev" },
    { "column": "EMaxLev" }
  ]
}
```

### Example: mix operations on the same row

```json
{
  "file": "skills.txt",
  "rowIdentifier": "Teleport",
  "columns": [
    { "column": "Mana", "operation": "replace", "parameterKey": "manaCost" },
    { "column": "reqlevel", "operation": "replace", "updatedValue": "10" },
    { "column": "calc1", "operation": "append", "updatedValue": "+5*lvl" }
  ]
}
```

> Each `columns` entry must reference a known column on the target file. Per-column `parameterKey` / `updatedValue` overrides the parent value when both are present.
{.is-info}

## Adding new rows with `addRow`

The `addRow` operation inserts a brand-new row into a target `.txt` file.

- Omit `rowIdentifier` (or leave it empty) to **append** the new row at the end of the file.
- Provide a numeric, **0-based** `rowIdentifier` (e.g. `"5"`) to **insert** at that position. Valid range is `0` to `rowCount` inclusive (`rowCount` is equivalent to appending). Out-of-range or non-numeric identifiers are rejected at validation time.
- New row column values come from the `columns` array (preferred) or from top-level `column` / `updatedValue`. At least one column must be provided.
- Columns you do not list keep their default value. **Always populate any required identifier columns** (e.g. `Skill` on `skills.txt`, `Code` on `weapons.txt`) so downstream parsers and saves don't reject the row.
- Per-column `operation` overrides are honored, but `addRow` defaults to `replace` semantics for each assignment (the row starts empty).

### Example: append a new skill

```json
{
  "file": "skills.txt",
  "operation": "addRow",
  "columns": [
    { "column": "Skill",     "updatedValue": "MyNewSkill" },
    { "column": "charclass", "updatedValue": "ama" },
    { "column": "reqlevel",  "updatedValue": "30" },
    { "column": "manacost",  "updatedValue": "10" }
  ]
}
```

### Example: insert a cube recipe at a specific row index

```json
{
  "file": "cubemain.txt",
  "rowIdentifier": "10",
  "operation": "addRow",
  "columns": [
    { "column": "Description", "updatedValue": "My Custom Recipe" },
    { "column": "NumInputs",   "updatedValue": "2" },
    { "column": "Output",      "updatedValue": "ssp" }
  ]
}
```

---

# 5. Power Techniques: Key Reuse

Efficiency matters. You don't need a separate parameter for every single field — map one UI knob to many operations.

## Example 1: The "Master Balance" Multiplier
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

## Example 2: Uniform Level Caps
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

## Example 3: Multi-file plugin with parameter tokens

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
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "amazonlightningfury",
    "column": "calc1",
    "operation": "append",
    "updatedValue": "+10*20"
  }
]
```

---

# 6. String JSON Files

In addition to excel `.txt` files, plugins can patch D2R's string tables — any `.json` file that lives under `data/local/lng/strings` (e.g. `item-runes.json`, `item-nameaffixes.json`, `ui.json`). The launcher resolves the strings directory automatically, alongside the excel folder.

## Flat d2rr-style layout

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

## Fields

| Field | Required | Purpose |
|---|---|---|
| `file` | yes | A `.json` file name that exists under `data/local/lng/strings`. |
| `Key` | yes | The D2R entry `Key` to match inside that file. |
| Language fields | at least one | Any of the 13 recognized language codes (see below) with the replacement string. |

## Supported language codes

`enUS`, `zhTW`, `deDE`, `esES`, `frFR`, `itIT`, `koKR`, `plPL`, `esMX`, `jaJP`, `ptBR`, `ruRU`, `zhCN`.

## Replacement semantics

- Only the language fields you list on the entry are overwritten on the matched D2R entry.
- Every other language on that same entry — and every other entry in the file — is left completely untouched.
- Any field that is not one of the recognized language codes (and is not `file` or `Key`) is ignored. This is intentional so plugin authors can leave notes without breaking the format.
- Parameter tokens (`{{parameter:key}}`) are **not** resolved inside string JSON values today — provide the final replacement text directly.

## Example

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

# 7. Sharing on GitHub Discussions

To share your plugin through the launcher's **User Plugins** page, create a post in the [Plugins discussion category](https://github.com/D2R-Reimagined/reimagined-launcher/discussions/categories/plugins) on GitHub. The launcher scrapes discussion posts and requires specific fields in the post body:

- **`Title:`** Your Plugin Name — displayed as the plugin title in the launcher.
- **`Desc:`** or **`Description:`** A short summary — displayed under the title.
- **`Mod:`** / **`ModVer:`** / **`ModVersion:`** followed by a version in `#.#.#` format — displayed next to the title. Posts without a valid mod version are not loaded.
- **`.zip` attachment**: Attach the plugin zip file to the post. Posts without a `.zip` attachment are not loaded.

The `.zip` must still contain a valid `plugininfo.json` with all required fields (`name`, `version`, `modVersion`, `files`). The launcher validates the archive on install.

---

# 8. Authoring Checklist

1. **Manifest First**: Ensure your `plugininfo.json` is valid JSON and lists all your operation files.
2. **modVersion**: Include a `modVersion` field in `#.#.#` format matching the mod version your plugin targets. This is required.
3. **Row identification (excel)**: Use the identifier column from [Section 3](#3-row-identification-rules-per-file). For Row-ID files, remember the `−2` rule. For bulk edits, use a `"start-end"` range (e.g. `"50-100"`) to target many rows with a single operation. To override the default match logic, supply an object `rowIdentifier` listing `{column: expectedValue}` pairs — list at least two columns on Row-ID files or you'll get a warning.
4. **Column names (excel)**: `column` must match a property name on the target entry (case-insensitive). Header names with spaces or punctuation (e.g. `Min ac`) map to PascalCase property names (e.g. `MinAc`).
5. **Strings schema**: For `.json` files under `data/local/lng/strings`, use the flat `{ file, Key, <languageCode>: "…" }` layout from [Section 6](#6-string-json-files). Only listed language fields are overwritten.
6. **Multi-column updates**: When changing several columns on the same row, prefer a single operation with a `columns` array over many duplicated operations — it's terser and shares one `rowIdentifier`.
7. **New rows**: Use `"operation": "addRow"` to append (no `rowIdentifier`) or insert at a 0-based index. Make sure to populate the file's identifier column(s) in the `columns` array.
8. **Key Consistency**: Match your `parameterKey` exactly to the `key` in the manifest.
9. **Validation**: The launcher rejects plugins that reference unknown files, columns, or parameters; it also rejects file paths that traverse outside the plugin archive. Read the error list it produces.

Now go forth and break — I mean, *enhance* — the game responsibly. 🚀
