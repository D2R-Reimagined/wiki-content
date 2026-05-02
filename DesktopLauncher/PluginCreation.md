---
title: Plugin Authoring Guide
description: A guide for how to write plugins for the D2R Reimagined Desktop launcher and GitHub Discussions plugins page.
published: true
date: 2026-05-02T00:00:00.000Z
tags: desktop launcher, launcher, desktop, plugin, plugin guide
editor: markdown
dateCreated: 2026-04-07T08:34:46.134Z
---

# Welcome!

This guide walks you through writing your own plugin for the **Reimagined Launcher**. You don't need to be a programmer — if you can edit a text file and you know what a JSON object looks like, you can build a plugin.

## What is a plugin, in plain English?

A plugin is just a **zip file** that the launcher unpacks and reads. Inside that zip you describe:

1. **Who you are** — your plugin's name, version, and a short description.
2. **What options you want the player to see** — text boxes, checkboxes, or other player-facing settings. The launcher calls these *parameters*.
3. **What you want to change in the game** — for example, "double the damage of Fire Bolt", "rename the Doom rune", or "swap the gem pickup sound".

The launcher applies your changes when the game launches and never edits the game's original files directly — it builds a fresh, modified copy each time.

## The four kinds of changes you can make

Plugins can do four things, and you can mix any of them in a single plugin:

- **Edit excel `.txt` files** — these are the spreadsheet-like data files (`skills.txt`, `weapons.txt`, etc.) that drive most game behavior.
- **Edit string `.json` files** — these are the in-game text/translation files (`item-runes.json`, `ui.json`, etc.).
- **Edit `missiles.json`** — the single JSON object at `data/hd/missiles/missiles.json` that maps missile keys to asset paths.
- **Edit `monsters.json`** — the single JSON object at `data/hd/character/monsters.json` that maps monster keys to asset paths. It uses the same flat layout as `missiles.json`.
- **Replace asset files** — sounds, textures, icons, anything binary.

This guide explains each one, with worked examples. If you ever feel stuck, jump to **[Section 11 — Authoring Checklist](#11-authoring-checklist)** for a quick recap.

---

# 1. The Manifest (`plugininfo.json`)

Every plugin **must** have a file called `plugininfo.json` at its root. Think of it as the plugin's ID card: it tells the launcher who the plugin is, what knobs to show the player, and which other files to read.

## A complete example

Here's a manifest with everything filled in. We'll break each field down right after.

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

### Required fields

These three fields **must** be present, or the launcher will refuse to load the plugin:

- **`name`** — the plugin's display name, shown in the launcher's plugin list.
- **`version`** — your plugin's own version number. Bump it whenever you publish an update.
- **`modVersion`** — the version of the mod that this plugin is built for, written as three numbers separated by dots (for example, `3.0.7`). If this is missing or malformed, the plugin is rejected.

You also need **at least one** of the following two fields to be non-empty:

- **`files`** — a list of operation files (other `.json` files in your zip) that describe the changes you want to make to excel `.txt` data. See **[Section 2](#2-the-instruction-set-json)**.
- **`assets`** — a list of binary asset replacements (sounds, textures, etc.) you want to copy into the mod. See **[Section 8](#8-asset-file-replacement)**.

If your plugin only changes excel/strings data, fill in `files` and leave `assets` as `[]`. If it only swaps assets, do the opposite. You can also do both.

### Optional fields

These improve the player's experience but aren't strictly required:

- **`author`** — your name or handle, shown in the launcher.
- **`description`** — a short, friendly sentence that explains what the plugin does.
- **`parameters`** — the player-facing knobs. Each parameter has:
  - **`key`** — an internal id you'll use to refer to the value from your operations.
  - **`name`** — the human-friendly label the player sees.
  - **`defaultValue`** — the value the parameter starts at.
  - **`description`** *(optional)* — a short help text shown next to the knob.
  - **`type`** *(optional)* — controls how the parameter is rendered. Missing or `"text"` = the existing free-form textbox; `"checkbox"` = a true/false checkbox/switch. See **[Section 9](#9-optional-parameter-types-and-conditions)** for details.

> **Tip:** keep your parameter `key` values short and lowercase (e.g. `damageMultiplier`, `manaCost`). You'll be typing them a lot.
{.is-info}

---

# 2. The Instruction Set (`*.json`)

So far the manifest has only described *who* the plugin is. The actual changes live in **operation files** — the `.json` files you listed under `files`. Each operation file is either:

- a **single operation object**, or
- an **array of operation objects** (most plugins use an array because they make several changes).

## Operation target types

There are three kinds of files you can target, and each has its own schema:

1. **Excel (`.txt`) targets** — almost any `.txt` file from the game's base excel folder. The big exception is `itemstatcost.txt`, which the launcher refuses to touch.
2. **Strings (`.json`) targets** — any `.json` file under `data/local/lng/strings`, such as `item-runes.json` or `ui.json`. Strings use a much simpler format described in **[Section 6](#6-string-json-files)** — read that one when you need to rename items, runes, or UI text.
3. **Missiles (`missiles.json`) and Monsters (`monsters.json`) targets** — the single JSON objects at `data/hd/missiles/missiles.json` and `data/hd/character/monsters.json`. They share a flat format described in **[Section 7](#7-the-missilesjson-and-monstersjson-files)** — read that one when you need to swap or add a missile or monster asset path.

The rest of this section is about **excel targets**.

## Excel target fields

Every excel operation answers three questions:

1. **Which file?** → `file`
2. **Which row(s) inside that file?** → `rowIdentifier`
3. **What change should I make?** → `column` (or `columns`) + `operation` + `updatedValue` / `parameterKey`

Here are the fields in detail. Don't worry about absorbing every option at once — the [examples in Sections 4 and 5](#4-multi-column-updates-and-new-rows) make this concrete.

| Field | Required? | What it does |
|---|---|---|
| `file` | yes | The target `.txt` file, e.g. `skills.txt`. Anything in the base excel folder works **except** `itemstatcost.txt`. |
| `rowIdentifier` | yes | Picks **which row(s)** to change. The exact value depends on the file (see [Section 3](#3-row-identification-rules-per-file)). It can also be a range like `"50-100"` for bulk edits, an object listing several columns when one column isn't unique enough, or a **list** of any of those when you want one operation to update several specific rows at once. |
| `column` | yes (unless you use `columns`) | The column you want to change. Use the header name with spaces and punctuation removed, in PascalCase (e.g. `Min ac` → `MinAc`). Matching is case-insensitive. |
| `columns` | no | Use this when you want to change **several columns on the same row(s)** in one operation. See [Multi-column updates](#multi-column-updates-one-rowidentifier-many-columns). |
| `operation` | no | What kind of change to make. Defaults to `replace`. The choices are explained right below. |
| `updatedValue` | sometimes | The new value; the multiplier, the amount to add, the amount to subtract, or the divisor when you're working with the existing number; or the text to append. Required unless you're pulling the value from a parameter via `parameterKey`. |
| `parameterKey` | no | Pulls the value from a player-facing parameter you declared in the manifest. Handy for sliders that affect many rows. |
| `condition` | no | Optional declarative condition that gates the **whole operation**. If a `columns` array is used, the condition controls whether the entire multi-column operation runs. Missing `condition` means the operation always applies. See **[Section 9](#9-optional-parameter-types-and-conditions)**. |

## The available operations

Pick one of these verbs in the `operation` field:

- **`replace`** *(the default)* — Overwrites the column with whatever you put in `updatedValue` (or the parameter value).
- **`multiplyExisting`** — Reads the current value as a number and multiplies it. Useful for "double the damage" style tweaks. The current value must already be numeric.
- **`addExisting`** — Reads the current value as a number and adds your value to it. Useful for "give every level a +5 bonus" style tweaks. The current value must already be numeric.
- **`subtractExisting`** — Reads the current value as a number and subtracts your value from it. Same numeric-only rule as `addExisting`.
- **`divideExisting`** — Reads the current value as a number and divides it by your value. Handy for halving cooldowns and the like. The current value must be numeric and your value can't be zero.
- **`append`** — Tacks your text onto the existing value, with the original wrapped in parentheses. For example, if a `calc` column reads `ln12` and your `updatedValue` is `+10*20`, the row ends up reading `(ln12)+10*20`. Mostly used to extend skill `calc` expressions without rewriting them.
- **`addRow`** — Creates a brand-new row. See **[Adding new rows](#adding-new-rows-with-addrow)** for the full story.
- **`cloneRow`** — Copies an existing row and either appends the clone to the end of the file or overwrites another row with it. See **[Cloning rows with `cloneRow`](#cloning-rows-with-clonerow)**.
- **`swapRow`** — Exchanges two rows in place, with optional column overrides applied to each row after the swap. See **[Swapping rows with `swapRow`](#swapping-rows-with-swaprow)**.

## Parameter tokens

You can also embed a parameter directly inside an `updatedValue` string by writing `{{parameter:yourKey}}`. The launcher swaps in the player-supplied value when the plugin runs.

For example, this operation lets the player decide Teleport's mana cost:

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

This is the section that trips most people up, so let's slow down. **Telling the launcher *which row* to change is the most important part of writing an operation.** The launcher offers five different ways to do it, and which one you use depends on the file you're editing and how many rows you want to touch in a single operation.

## The five ways to identify a row

1. **By a unique column value** *(the easiest, used by most files).*
   You give the value of the file's natural identifier column and the launcher finds the matching row.
   *Example:* in `skills.txt`, `"rowIdentifier": "Teleport"` matches the row whose `Skill` column equals `Teleport`.
   Matching is case-insensitive. If your value happens to appear in more than one row, **all** matching rows are updated.

2. **By numeric row index (the "Row-ID" files).**
   A handful of files have so many duplicate names that no single column is unique. For these, you give a number — the position of the row, counting from `0` — instead of a name.
   *Example:* `"rowIdentifier": "12"` targets the 13th data row.

3. **By a range of rows.**
   Want to change rows 50 through 100 in one go? Use a string like `"50-100"`. This works on **any** supported file. Details in [Row Ranges](#row-ranges-multiple-rows-with-one-operation).

4. **By matching several columns at once.**
   When even the natural identifier isn't unique, you can pass an **object** of column/value pairs — the row must match **all** of them. Details in [Multi-column rowIdentifier override](#multi-column-rowidentifier-override).

5. **By a list of rows.**
   When you want one operation to touch several specific rows that aren't next to each other, pass a **list** — each entry can be any of the four shapes above (a name, a number, a range, or a multi-column object). Details in [Lists of row identifiers](#lists-of-row-identifiers).

## The "minus two" rule for Row-ID files

If you're editing a Row-ID file, you'll usually have it open in **AFJ Sheet** or another tab-separated editor that shows a header row at the top. There's one simple formula to remember:

> **Editor row number − 2 = the number you put in `rowIdentifier`.**
{.is-info}

Why minus two?

- Editor row **1** is the header row, which doesn't count.
- Editor row **2** is the first real data row → that's index `0`.
- Editor row **N** → index `N − 2`.

> The `Expansion` separator row that some files contain counts as a normal row. The minus-two rule still works — no off-by-one to worry about.
{.is-info}

## File-by-file requirements

The two tables below tell you, for each supported file, **what to put in `rowIdentifier`**.

- The **Identifier column** tells you which column in the file the launcher matches against (or, for Row-ID files, that you use a numeric index).
- The **Display column** is purely informational — it's what you'll *see* in the row when you scroll through the file in an editor.

### Column-lookup files

These are the easy ones: just put the row's identifier value in `rowIdentifier`.

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

These files use numeric indices because their natural identifier columns contain too many duplicates to be useful for matching. For each file you'd put something like `"rowIdentifier": "0"`, `"rowIdentifier": "1"`, and so on. Remember the minus-two rule: AFJ Sheet row 42 → `"40"`.

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

Sometimes a single column isn't specific enough — for example, two rows in `magicprefix.txt` both have the name `Stout`, but they belong to different groups. In cases like that, you can pass `rowIdentifier` an **object** instead of a string, listing several columns that **all** need to match.

A row is only considered a match when **every** column you list has the value you specified (case-insensitive). The default identifier column is ignored — your list takes over.

A few things to know:

- This works on **every supported `.txt` file**, including Row-ID files.
- Column names follow the same rule as elsewhere — strip spaces and punctuation, PascalCase (e.g. `Min ac` → `MinAc`).
- Unknown columns are caught at validation time, so typos won't silently do nothing.
- If you'd prefer to keep `rowIdentifier` for the simple string form, you can use `rowIdentifiers` (plural) as an alias for the object form.
- On Row-ID files, listing only one column is rarely specific enough. The launcher will warn you if you do — the operation still runs, but it's a nudge to add another column.

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

Need to apply the same change across a whole stretch of rows? Pass a **range** like `"50-100"` to `rowIdentifier`. The two numbers are 0-based data-row indices (same minus-two rule as Row-ID files), and both ends are **inclusive** — so `"50-100"` covers 51 rows.

A few useful properties of ranges:

- They work on **every** supported `.txt` file, even ones that normally use column lookup. A range always targets rows by index, so the file's identifier column is ignored.
- The numbers can go in either direction — `"100-50"` is the same as `"50-100"`.
- Whitespace around the numbers or the dash is tolerated. `"50-100"` and `" 50 - 100 "` both work.
- If either end goes past the end of the file, the launcher rejects the operation with a clear error.

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

## Lists of row identifiers

When you want **one operation to update several rows that aren't next to each other**, hand `rowIdentifier` a **list** instead of a single value. Each item in the list is treated as its own row identifier and rows that match **any** entry in the list are included.

The list can mix and match every form you've already learned:

- A **name** like `"amazonjavazon"` — the launcher looks it up in the file's normal identifier column.
- A **row number** like `"5"` — used on Row-ID files, same minus-two rule as everywhere else.
- A **range** like `"50-55"` — the launcher includes every row in the range.
- An **object** like `{ "Class": "skeleton", "Level": "5" }` — the row must match every column you list (the same all-columns-must-match rule as the [object form](#multi-column-rowidentifier-override)).

A few things worth knowing:

- The list form is **only** for `updateRow` operations (the default `replace`, `multiplyExisting`, and `append` work just fine on top of it). `addRow`, `cloneRow`, and `swapRow` always work on a single row, so they reject lists — the launcher will tell you exactly which entry to fix.
- If a row is matched by more than one item in the list, the change is still applied to it just once. You don't have to worry about double-applying `multiplyExisting` because two list entries happened to overlap.
- If any single entry in the list finds **zero** rows, the launcher stops with a clear error pointing at that entry. That keeps typos loud instead of silent.
- An empty list, or a list whose entries all evaluate to nothing, is rejected at validation time.
- Combine the list with a `columns` array and you can change several columns on several rows in one tidy operation.

### Example: lower the level requirement on three Amazon skills at once

```json
{
  "file": "skills.txt",
  "rowIdentifier": [
    "amazonjavazon",
    "amazonbowzon",
    "amazonlightningfury"
  ],
  "column": "reqlevel",
  "operation": "replace",
  "updatedValue": "1"
}
```

### Example: bump the level on a hand-picked group of monstats rows

This one mixes all four shapes in a single list — a name, a multi-column object, and a range — to show that you don't have to pick one style:

```json
{
  "file": "monstats.txt",
  "rowIdentifier": [
    "skeleton1",
    { "Class": "zombie", "hcIdx": "12" },
    "50-55"
  ],
  "column": "Level",
  "operation": "replace",
  "updatedValue": "10"
}
```

> If the same plugin needs to update lots of rows in completely different ways, keep using separate operations — the list form shines when several rows want the **same** change, not when each row needs something different.
{.is-info}

## One file the launcher will not touch

> **Heads up:** `itemstatcost.txt` is **not** supported. Any plugin that targets it will fail validation. This is intentional — that file is too tightly coupled to the rest of the data for safe automated edits.
{.is-warning}

---

# 4. Multi-Column Updates and New Rows

So far each operation has changed exactly one column on one row. Two shortcuts make life easier when you want to change a lot at once:

- **`columns`** — change several columns on the same row(s) without repeating yourself.
- **`addRow`** — add a brand-new row to a file.
- **`cloneRow`** — duplicate an existing row, then optionally tweak a few columns.
- **`swapRow`** — swap two rows in place, with optional column overrides applied after the swap.

## Multi-column updates: one `rowIdentifier`, many columns

If you find yourself writing two operations that share the same `file` and `rowIdentifier` but only differ by `column`, stop — you can collapse them into a single operation by using a `columns` array.

Every entry in `columns` is applied to **every row matched by `rowIdentifier`**. Each entry can override the parent operation's settings if it needs to:

| Field | Required | What it does |
|---|---|---|
| `column` | yes | The column to change on the matched row. |
| `updatedValue` | no | A per-column override of the parent `updatedValue`. |
| `parameterKey` | no | A per-column override of the parent `parameterKey`. |
| `operation` | no | A per-column override of the parent `operation`, so you can mix `replace`, `multiplyExisting`, and `append` in one block. |

If you leave a field out of a `columns` entry, the value from the parent operation is used. That means the most common case — "multiply these four damage columns by the same parameter" — collapses to a very small, very tidy block.

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

`addRow` is the operation you use to insert a row that didn't exist before — for example, a brand-new skill or recipe.

How it works:

- **Append** to the end of the file by leaving `rowIdentifier` out (or empty).
- **Insert** at a specific position by giving a numeric, 0-based `rowIdentifier` like `"5"`. The valid range is `0` up to and including the file's row count (passing the row count is the same as appending). Anything else is rejected.
- The new row's values come from the `columns` array (the recommended form) or from a top-level `column` / `updatedValue` if you only need to set one column. **At least one column must be provided.**
- Any column you don't set keeps its default value. **Make sure to fill in the file's required identifier columns** — for example, `Skill` on `skills.txt` or `Code` on `weapons.txt` — otherwise the game's parser may reject the row entirely.
- `addRow` always *writes* values, so per-column `operation` overrides are honored but the default behavior is plain `replace`.

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

## Cloning rows with `cloneRow`

Reach for `cloneRow` whenever you'd otherwise hand-copy every column of an existing row just to tweak a few values. The launcher does the deep copy for you, then layers any column overrides you provide on top.

How it works:

- **`sourceRowIdentifier`** *(required)* — the row to copy from. Accepts a numeric 0-based index or a value of the file's default identifier column (case-insensitive — same matching rules as a normal `rowIdentifier`).
- **`mode`** *(optional, defaults to `"add"`)* — controls where the clone lands:
  - **`"add"`** — always appends the cloned row to the end of the file. Insertion at a specific index is **not** supported, so `rowIdentifier` must be omitted.
  - **`"replace"`** — overwrites the row at `rowIdentifier` (numeric index or default identifier column value). `rowIdentifier` is required in this mode.
- **`columns`** *(optional)* — column overrides applied on top of the clone, using the standard `replace` / `multiplyExisting` / `addExisting` / `subtractExisting` / `divideExisting` / `append` operators. Columns you don't list keep the source row's values.

> `cloneRow` does not support inserting a clone at a specific position. Use `mode: "add"` (omit `rowIdentifier`) to append, or `mode: "replace"` with a `rowIdentifier` to overwrite an existing row.
{.is-info}

### Example: clone a `monstats.txt` row and rename it

This example clones `monstats.txt` row `700`, appends the clone to the end of the file, and overrides the `Id` and `NameStr` columns on the new row:

```json
[
  {
    "file": "monstats.txt",
    "operation": "cloneRow",
    "mode": "add",
    "sourceRowIdentifier": "700",
    "columns": [
      { "column": "Id",      "updatedValue": "skeleton1" },
      { "column": "NameStr", "updatedValue": "Zombie" }
    ]
  }
]
```

### Example: replace an existing row with a clone of another

```json
{
  "file": "monstats.txt",
  "operation": "cloneRow",
  "mode": "replace",
  "sourceRowIdentifier": "700",
  "rowIdentifier": "773",
  "columns": [
    { "column": "NameStr", "updatedValue": "Skillname274" }
  ]
}
```

## Swapping rows with `swapRow`

`swapRow` exchanges the contents of two rows in place. It's handy when two rows have grown to mean each other's identity (for example, you want the row at index 0 to become what's currently at index 773 and vice versa) and you'd otherwise need to hand-copy every column twice.

How it works:

- **`rowIdentifier`** *(required)* — the first row to swap (numeric 0-based index or default identifier column value).
- **`swapRowIdentifier`** *(required)* — the second row to swap, using the same rules. The two rows must resolve to different positions; swapping a row with itself is rejected.
- **`columns`** *(optional)* — column overrides applied **after** the swap to the row that ends up at `rowIdentifier` (i.e. the row originally at `swapRowIdentifier`).
- **`swapColumns`** *(optional)* — column overrides applied **after** the swap to the row that ends up at `swapRowIdentifier` (i.e. the row originally at `rowIdentifier`). Same shape as `columns`.

> Both override blocks run *after* the rows have been swapped, so the field names describe the row that finally sits at that position — not where it started.
{.is-info}

### Example: swap two `monstats.txt` rows and rename them

This example swaps `monstats.txt` row `0` with row `773`, then sets the post-swap row 0's `NameStr` to `skeleton1` and the post-swap row 773's `NameStr` to `Skillname274`:

```json
[
  {
    "file": "monstats.txt",
    "operation": "swapRow",
    "rowIdentifier": "0",
    "swapRowIdentifier": "773",
    "columns": [
      { "column": "NameStr", "updatedValue": "skeleton1" }
    ],
    "swapColumns": [
      { "column": "NameStr", "updatedValue": "Skillname274" }
    ]
  }
]
```

---

# 5. Power Techniques: Reusing Parameters

You don't need a separate slider for every column you change. **One parameter can drive many operations** — that's how a single "Damage Multiplier" knob can scale dozens of fields at once. The examples below show common patterns.

## Example 1: one slider, both min and max damage

Scale both min and max damage of a skill with a single multiplier:

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

## Example 2: nudging numbers up, down, or in half

The `addExisting`, `subtractExisting`, and `divideExisting` verbs work just like `multiplyExisting` — they read the current number out of the file, do the math against your value (or a `parameterKey`), and write the result back. They're the natural fit when you want a flat bonus, a flat penalty, or a "halve this" tweak instead of a percentage scale.

```json
[
  {
    "file": "skills.txt",
    "rowIdentifier": "Fire Bolt",
    "column": "reqlevel",
    "operation": "addExisting",
    "updatedValue": "5"
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "Fire Bolt",
    "column": "manacost",
    "operation": "subtractExisting",
    "updatedValue": "2"
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "Fire Bolt",
    "column": "ResultFlags",
    "operation": "divideExisting",
    "updatedValue": "2"
  }
]
```

> `divideExisting` won't accept a value of zero — the launcher rejects the operation rather than producing a broken number.
{.is-info}

## Example 3: one slider, the same level cap on several skills

Set the same `maxlvl` on several skills using a single parameter:

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

## Example 4: one file, several target files

A single operations file is allowed to touch as many `.txt` files as you like. The example below buffs one weapon, one piece of armor, a skill, and a magic prefix — all in one go, mixing literal values, parameter tokens, and a Row-ID lookup:

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

Want to rename a rune, change an item description, or rephrase a UI button? That's what string files are for. They live under `data/local/lng/strings` (for example, `item-runes.json`, `item-nameaffixes.json`, `ui.json`), and the launcher finds them automatically next to the excel folder.

## A much simpler format

String operations **do not** use `rowIdentifier`, `column`, `operation`, or `updatedValue`. The format is intentionally flat: you tell the launcher which file, which D2R entry `Key` to find, and what text to put in for one or more languages.

Here's a single string entry:

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

| Field | Required | What it does |
|---|---|---|
| `file` | yes | A `.json` file name from `data/local/lng/strings` (e.g. `item-runes.json`). |
| `Key` | yes | The D2R entry `Key` to find inside that file (the same `Key` you'd see if you opened the file in a text editor). |
| Language fields | at least one | One or more language codes (see the list below) and the text you want to put in for each one. |

## Supported language codes

`enUS`, `zhTW`, `deDE`, `esES`, `frFR`, `itIT`, `koKR`, `plPL`, `esMX`, `jaJP`, `ptBR`, `ruRU`, `zhCN`.

## What gets changed (and what doesn't)

A few things are worth knowing:

- Only the language fields you list are overwritten. Every **other** language on the same entry — and every other entry in the file — is left alone.
- Any field that **isn't** a recognized language code (and isn't `file`, `Key`, lowercase `key`, or `id`) is silently ignored. This is on purpose, so you can leave yourself notes inside an entry without breaking anything. The names `file`, `Key`/`key`, and `id` are reserved.
- Language-code matching is case-insensitive, but please use the canonical casing (`enUS`, `zhTW`, …) so the file stays readable.
- Parameter tokens (`{{parameter:key}}`) are **not** substituted inside string values yet — write the final text directly.

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

# 7. The `missiles.json` and `monsters.json` Files

In addition to excel `.txt` files and string JSON files, the launcher supports edits to two single-object JSON files that map a key to a single string value (the name of an entry from the corresponding game `.txt` file — **not** a file path):

- **`missiles.json`** at `data/hd/missiles/missiles.json` — maps missile keys to a single entry name from `missiles.txt` (e.g. `safe_arrow`).
- **`monsters.json`** at `data/hd/character/monsters.json` — maps monster keys to a single entry name from `monstats.txt` (e.g. `fallen1`).

Both files share the same flat layout (a leading `dependencies` header followed by a flat `key` → `value` map), and the launcher resolves each one automatically from the mod data root. Reach for this section when you want to swap an existing missile or monster entry, or register a brand-new key.

## A flat format

Missiles and monsters operations **do not** use `rowIdentifier`, `column`, `multiplyExisting`, or `append`. Each entry is a flat object that names the file, the `Key` to find, and the value to write:

```json
{
  "file": "missiles.json",
  "Key": "FireBolt",
  "updatedValue": "safe_arrow"
}
```

```json
{
  "file": "monsters.json",
  "Key": "Skeleton1",
  "updatedValue": "fallen1"
}
```

## Fields

| Field | Required? | What it does |
|---|---|---|
| `file` | yes | Either `missiles.json` or `monsters.json`. The launcher routes each file to its own dispatcher; neither is treated as a strings translation file. |
| `Key` | yes | The missile or monster key inside the target file to update or add. Each entry must include one. |
| `updatedValue` | one of | The new value to write for `Key` — a single entry name from the corresponding `.txt` file (e.g. `safe_arrow` for `missiles.json`, `fallen1` for `monsters.json`), **not** a full file path. Supports `{{parameter:key}}` tokens. |
| `parameterKey` | one of | Pulls the value from a parameter declared in the manifest. Tokens inside the resolved parameter value are also expanded. |
| `operation` | no | `replace` *(the default)* overwrites the value for `Key`. `addRow` appends a brand-new key/value pair. No other operations are accepted. |

You must provide either `updatedValue` or `parameterKey` — without one of them the entry is rejected at validation time.

## What gets changed (and what doesn't)

A few things are worth knowing — they apply identically to both files:

- The launcher reads and rewrites the target file **in place**, preserving its original property order and surrounding entries. Only the keys you list are touched.
- `replace` requires the `Key` to already exist in the target file; otherwise the operation fails with a clear error.
- `addRow` appends a brand-new key/value pair to the file. Use it only for keys that don't already exist — for keys that are already present, use `replace` (the default).
- Even though `missiles.json` and `monsters.json` look like other JSON files in the mod, they are **not** strings files. The 13 language fields from [Section 6](#6-string-json-files) do **not** apply here — write the value as a single string.
- Each operation targets exactly one file via its `file` field; you can mix `missiles.json` and `monsters.json` operations freely inside the same plugin operation array.

## Example

```json
[
  {
    "file": "missiles.json",
    "Key": "FireBolt",
    "updatedValue": "safe_arrow"
  },
  {
    "file": "missiles.json",
    "Key": "MyNewMissile",
    "operation": "addRow",
    "parameterKey": "myMissileAssetPath"
  },
  {
    "file": "monsters.json",
    "Key": "Skeleton1",
    "updatedValue": "fallen1"
  },
  {
    "file": "monsters.json",
    "Key": "MyNewMonster",
    "operation": "addRow",
    "parameterKey": "myMonsterAssetPath"
  }
]
```

---

# 8. Asset File Replacement

Plugins aren't limited to text data. You can also ship **arbitrary files** — sounds, icons, textures, anything binary — and have the launcher copy them into the mod's folder when the plugin is applied. This is the right tool whenever you want to swap a `.flac`, `.dc6`, `.dds`, or similar file that the game loads from disk.

## How it's declared in the manifest

Asset replacements live on the `plugininfo.json` manifest, in an optional `assets` array. Each entry is at minimum a **`{ source, target }`** pair — where the file comes from inside your plugin and where it should end up in the mod folder — and may also include an optional `condition` that gates whether the copy runs.

```json
{
  "name": "Sound Plugin Test",
  "version": "1.0",
  "modVersion": "3.0.7",
  "author": "Delegus",
  "description": "Replaces the Flippy gem pickup sound with an alternate gem sound.",
  "files": [],
  "parameters": [],
  "assets": [
    {
      "source": "assets/item_gem_hd.flac",
      "target": "data/hd/global/sfx/item/item_flippy_hd.flac"
    }
  ]
}
```

| Field | Required | What it does |
|---|---|---|
| `source` | yes | Where the file lives inside your plugin zip, relative to the plugin root. Must sit under the `assets/` folder. Subfolders are fine — for example, `assets/sfx/item/foo.flac` is valid. |
| `target` | yes | Where the file should be copied to, relative to the mod root (the folder that contains `data/`). Must be a relative path. Absolute paths and any `..` segments are rejected for safety. |
| `condition` | no | Optional declarative condition that gates whether the asset is copied. Missing `condition` means the asset is always copied. See **[Section 9](#9-optional-parameter-types-and-conditions)**. |

## Replacing more than one file

The `assets` array can contain as many entries as you need. Each pair is validated on its own and applied in order:

```json
{
  "name": "Multi-Asset Example",
  "version": "1.0",
  "modVersion": "3.0.7",
  "files": [],
  "parameters": [],
  "assets": [
    {
      "source": "assets/item_gem_hd.flac",
      "target": "data/hd/global/sfx/item/item_flippy_hd.flac"
    },
    {
      "source": "assets/another_sound_hd.flac",
      "target": "data/hd/global/sfx/item/item_other_hd.flac"
    },
    {
      "source": "assets/icons/my_icon.dc6",
      "target": "data/global/ui/spells/my_icon.dc6"
    }
  ]
}
```

## What the plugin folder looks like

A plugin that ships assets should be laid out like this on disk (and inside the `.zip`):

```
my-plugin/
├── plugininfo.json
└── assets/
    ├── item_gem_hd.flac
    └── icons/
        └── my_icon.dc6
```

## What happens when the plugin is applied

A few things to keep in mind:

- If the destination folder doesn't exist yet, the launcher creates it for you.
- Each `target` is **overwritten** on every apply. If two enabled plugins point to the same `target`, the plugin **lower** in the launcher's plugin list wins (it is applied last) — so don't use duplicate targets unless you really mean it. The launcher emits a single warning per launch when it detects two or more enabled plugins claiming the same destination, identifying the losers and the load-order winner; identical-bytes overlaps are demoted to a log-only line so cooperative bundles do not produce noise.
- **When** an asset is copied depends on what the destination is. Assets that target a parser-managed file (any excel `.txt`, `missiles.json`, `monsters.json`, or anything under `data/local/lng/strings/`) are **pre-staged** before launcher tweaks and plugin parser ops run on that file, so surgical edits layer cleanly on top of your bundled file. Every other asset (binary files, JSON files outside the parser surface, brand-new paths) is copied in a single pass at the end of the launch pipeline, after all parser work is complete. The full pipeline is documented in **[Section 10](#10-loading-and-staging-order)** — give it a read if you ship asset replacements for parser-managed files.
- Everything is validated **before** any copying starts. An empty `source` or `target`, a source outside `assets/`, or a target that is absolute or contains `..` will reject the plugin with a clear error.

## The animdata pair stays in sync automatically

The two binary files at `data/global/animdata.d2` and `data/global/exanimdata.d2` are read together by the game. If your plugin replaces only one of them, the launcher copies whichever file you replaced onto the other one too, so the two stay matched on disk. You don't need to ship both copies — pick whichever path matches your authoring workflow and the launcher fills in the other side for you. If you actually want the two files to differ, list them both as separate `assets` entries (each with its own `source`) and the launcher will leave them alone.

The original contents of whichever file the launcher mirrored onto are still snapshotted before being overwritten, so disabling or removing the plugin restores both sides to their pre-plugin state.

## Asset-only plugins are fine

You don't have to ship any data edits if you don't want to. Set `files` and `parameters` to empty arrays (`[]`) and put everything in `assets`. The bundled `soundplugintest` example does exactly this.

## Combining assets with data edits

A single plugin can mix asset replacements with normal `.txt` / strings operations. The three sections of the manifest — `files`, `parameters`, and `assets` — are independent of each other and all run during the same apply pass:

- Operations from `files` are processed by the normal excel / strings pipeline, using the values from `parameters`.
- Every entry in `assets` is copied to its `target` under the mod root.
- The mod root is resolved once per plugin, asset paths are validated up front, and any failure in either phase shows up as a single plugin failure in the launcher log.

### Example: combined manifest

```json
{
  "name": "Combo Plugin",
  "version": "1.0",
  "modVersion": "3.0.7",
  "author": "Delegus",
  "description": "Tweaks skill data and swaps a sound effect.",
  "files": [
    "skill-overrides.json"
  ],
  "parameters": [
    {
      "key": "manaCost",
      "name": "Mana Cost Override",
      "defaultValue": "5"
    }
  ],
  "assets": [
    {
      "source": "assets/item_gem_hd.flac",
      "target": "data/hd/global/sfx/item/item_flippy_hd.flac"
    }
  ]
}
```

With a matching `skill-overrides.json` targeting `skills.txt`, this single plugin both rewrites excel data **and** replaces the `.flac` asset on the same launch.

### Combined plugin layout

```
my-plugin/
├── plugininfo.json
├── skill-overrides.json
└── assets/
    └── item_gem_hd.flac
```

> Asset `source` / `target` paths are **not** templated — use literal paths there. Parameter tokens (`{{parameter:key}}`) are only supported where they are explicitly documented, namely excel operation values (Sections 2–5) and `missiles.json` / `monsters.json` `updatedValue` (Section 7).
{.is-info}

---

# 9. Optional Parameter Types and Conditions

Up to here every parameter has been a free-form text box, and every operation and asset entry has been applied unconditionally. Two small, fully **backward-compatible** extensions let plugin authors expose feature toggles and skip individual operations or asset copies based on those toggles — all without introducing any scripting.

If your plugin doesn't use either of these features, you don't need to change anything: missing `type` fields and missing `condition` blocks behave exactly as the rest of this guide describes.

## Parameter Types

Every parameter declared in `plugininfo.json` may include an optional **`type`** field that controls how the launcher renders the parameter in the plugin UI.

| `type` value | Behavior |
|---|---|
| *(missing)* or `"text"` | The existing free-form textbox. The value is whatever the user typed. |
| `"checkbox"` | A checkbox / switch. The launcher persists the value as the normalized string `"true"` or `"false"`. |

For `parameterKey` lookups and `{{parameter:key}}` substitution, the **string value** of the parameter is used in both cases — nothing changes there. A checkbox parameter simply guarantees that value is `"true"` or `"false"`. Common boolean aliases (`1`/`0`, `yes`/`no`, `on`/`off`, `checked`) are accepted case-insensitively when reading older files, and the launcher normalizes them to `"true"` or `"false"` on save.

### Text parameter (existing behavior)

```json
{
  "key": "damageMultiplier",
  "name": "Damage Multiplier",
  "type": "text",
  "defaultValue": "1.25",
  "description": "Scales the chosen skill damage."
}
```

A parameter with **no** `type` field behaves identically to a `text` parameter — existing plugins do not need to be updated.

### Optional `group` (display-only)

Any parameter may also declare an optional **`group`** string. The launcher renders all parameters that share the same group under a single section heading on the Plugins page. Grouping is purely visual and never affects parameter lookup, `{{parameter:key}}` substitution, condition evaluation, saving, or apply.

```json
{
  "key": "enableCombinedSkillChanges",
  "name": "Enable Combined Skill Changes",
  "type": "checkbox",
  "group": "All Condition Example",
  "defaultValue": "false",
  "description": "Master toggle for the all-condition example."
}
```

Rules:

- `group` is optional. Missing, null, or empty means the parameter is ungrouped and renders in the default flat area.
- Groups are rendered in the order they first appear in the `parameters` array; parameter order within a group is preserved.
- If no parameter declares a group, the existing flat layout is used.
- If only one group exists, the heading is still rendered so authors can document plugin sections.
- Existing plugins without `group` continue to render exactly as before.

### Checkbox parameter

```json
{
  "key": "enableBaalPortal",
  "name": "Enable Baal Portal",
  "type": "checkbox",
  "defaultValue": "false",
  "description": "Adds a town portal to Baal."
}
```

## Conditional Operations and Assets

Any operation entry inside a plugin operation file (Section 2 / Section 6 / Section 7, including both `missiles.json` and `monsters.json` operations), and any asset entry in the manifest (Section 8), may include an optional **`condition`** block. Before the operation or asset copy runs, the launcher evaluates the condition against the current parameter values:

- if the condition evaluates to **true**, the operation/asset is applied as usual;
- if the condition evaluates to **false**, the operation/asset is **skipped**;
- if the `condition` field is **missing**, the operation/asset always applies (existing behavior).

Conditions compare against the **effective parameter value**: the launcher uses `parameter.value` if the user has set one, otherwise it falls back to `parameter.defaultValue`. Boolean-like comparisons (`"true"` / `"false"`) are case-insensitive.

> Conditions are pure **declarative JSON**. The launcher never evaluates scripts or arbitrary expressions — only the small set of shapes described below.
{.is-info}

### Conditional operation

```json
{
  "file": "skills.txt",
  "rowIdentifier": "Bind Demon",
  "column": "calc1",
  "operation": "replace",
  "updatedValue": "100",
  "condition": {
    "parameterKey": "bindDemonAlwaysSucceeds",
    "equals": "true"
  }
}
```

### Conditional asset

```json
{
  "source": "assets/town-baal-only.ds1",
  "target": "data/global/tiles/act1/town/example.ds1",
  "condition": {
    "all": [
      { "parameterKey": "enableBaalPortal",     "equals": "true"  },
      { "parameterKey": "enableTristramPortal", "equals": "false" }
    ]
  }
}
```

## Condition Syntax

A condition is a JSON object that takes one of the following shapes. They can be nested freely.

| Shape | Meaning |
|---|---|
| *(no `condition` field)* | Always apply the operation/asset (existing behavior). |
| `{ "parameterKey": "k", "equals": "v" }` | True when the effective value of parameter `k` equals `"v"` (case-insensitive for boolean-like values). |
| `{ "parameterKey": "k", "notEquals": "v" }` | True when the effective value of parameter `k` is **not** equal to `"v"`. |
| `{ "all": [ ...conditions ] }` *(AND)* | True only when **every** nested condition is true. |
| `{ "any": [ ...conditions ] }` *(OR)* | True when **at least one** nested condition is true. |
| `{ "not": { ...condition } }` | Inverts the nested condition. |

### `all` example — both portals at once

```json
{
  "all": [
    { "parameterKey": "enableBaalPortal",     "equals": "true" },
    { "parameterKey": "enableTristramPortal", "equals": "true" }
  ]
}
```

### `any` example — either toggle is on

```json
{
  "any": [
    { "parameterKey": "enableBaalPortal",     "equals": "true" },
    { "parameterKey": "enableTristramPortal", "equals": "true" }
  ]
}
```

### `not` example — only when novice mode is **off**

```json
{
  "not": { "parameterKey": "enableNoviceMode", "equals": "true" }
}
```

## Validation

The launcher validates every condition when it loads the plugin. The most common errors are:

- a `parameterKey` that doesn't match any declared parameter — the plugin is rejected with a clear error pointing at the offending key;
- an empty or malformed condition object (e.g. neither `equals`/`notEquals`, nor `all`/`any`/`not`) — the plugin is rejected with a clear error;
- nested conditions inside `all` / `any` / `not` are validated recursively using the same rules.

Missing `condition` fields are explicitly fine: omitting `condition` is the documented way to say *"always apply this operation/asset"*.

## Full Conditional Plugin Example

This is a small, self-contained plugin that uses every option introduced in this section: a text parameter, three checkbox parameters, an unconditional operation, conditional operations using `equals` / `notEquals` / `all` / `any` / `not`, and conditional assets that pick between three asset variants.

### `plugininfo.json`

```json
{
  "name": "Town Portal Options",
  "version": "1.0.0",
  "modVersion": "3.0.7",
  "author": "YourName",
  "description": "Adds optional town portal destinations.",
  "files": [
    "operations.json"
  ],
  "parameters": [
    {
      "key": "manaCost",
      "name": "Mana Cost",
      "type": "text",
      "defaultValue": "5"
    },
    {
      "key": "enableBaalPortal",
      "name": "Enable Baal Portal",
      "type": "checkbox",
      "defaultValue": "false"
    },
    {
      "key": "enableTristramPortal",
      "name": "Enable Tristram Portal",
      "type": "checkbox",
      "defaultValue": "false"
    },
    {
      "key": "enableNoviceMode",
      "name": "Novice Mode",
      "type": "checkbox",
      "defaultValue": "false"
    }
  ],
  "assets": [
    {
      "source": "assets/town-baal-only.ds1",
      "target": "data/global/tiles/act1/town/example.ds1",
      "condition": {
        "all": [
          { "parameterKey": "enableBaalPortal",     "equals": "true"  },
          { "parameterKey": "enableTristramPortal", "equals": "false" }
        ]
      }
    },
    {
      "source": "assets/town-tristram-only.ds1",
      "target": "data/global/tiles/act1/town/example.ds1",
      "condition": {
        "all": [
          { "parameterKey": "enableBaalPortal",     "equals": "false" },
          { "parameterKey": "enableTristramPortal", "equals": "true"  }
        ]
      }
    },
    {
      "source": "assets/town-baal-and-tristram.ds1",
      "target": "data/global/tiles/act1/town/example.ds1",
      "condition": {
        "all": [
          { "parameterKey": "enableBaalPortal",     "equals": "true" },
          { "parameterKey": "enableTristramPortal", "equals": "true" }
        ]
      }
    }
  ]
}
```

> If **neither** portal checkbox is enabled, none of the three conditional town assets above are copied. That is the expected *"do nothing"* behavior — a missing match across all conditional asset variants simply means no asset is replaced for that target.
{.is-info}

### `operations.json`

```json
[
  {
    "file": "skills.txt",
    "rowIdentifier": "Town Portal",
    "column": "Mana",
    "operation": "replace",
    "parameterKey": "manaCost"
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "Town Portal",
    "column": "reqlevel",
    "operation": "replace",
    "updatedValue": "1",
    "condition": {
      "parameterKey": "enableNoviceMode",
      "equals": "true"
    }
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "Town Portal",
    "column": "reqlevel",
    "operation": "replace",
    "updatedValue": "10",
    "condition": {
      "parameterKey": "enableNoviceMode",
      "notEquals": "true"
    }
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "Town Portal",
    "column": "maxlvl",
    "operation": "replace",
    "updatedValue": "20",
    "condition": {
      "any": [
        { "parameterKey": "enableBaalPortal",     "equals": "true" },
        { "parameterKey": "enableTristramPortal", "equals": "true" }
      ]
    }
  },
  {
    "file": "skills.txt",
    "rowIdentifier": "Town Portal",
    "column": "manashift",
    "operation": "replace",
    "updatedValue": "0",
    "condition": {
      "not": { "parameterKey": "enableNoviceMode", "equals": "true" }
    }
  }
]
```

## Bundled Reference Plugin for Visual Inspection

A fully-validated reference plugin called **Conditional Options Example Plugin** ships with the launcher under `Assets/Plugins/conditional-options-example/`. It appears in the launcher's bundled/official plugin list (the in-app plugins shipped with the launcher itself, not the user-submitted plugins from GitHub Discussions) with that name and is the fastest way to see every shape from this section rendered in the UI. Every checkbox in the bundled plugin is named after the operation it controls so the relationship between a parameter and the data it edits is obvious at a glance.

The bundled plugin demonstrates each condition shape against `skills.txt`. The mapping below is reproduced from the plugin's own `README.md`:

### Operation → checkbox map

| # | Operation (skills.txt) | Condition | Applies when |
|---|---|---|---|
| 1 | Fire Bolt → `Mana` ← `exampleTextValue` | *(none)* | Always. Demonstrates `parameterKey` text substitution. |
| 2 | Fire Bolt → `reqlevel` ← `{{parameter:legacyTextValue}}` | *(none)* | Always. Demonstrates `{{parameter:key}}` token substitution against a legacy (no-`type`) parameter. |
| 3 | Fire Bolt → `maxlvl` = `20` | `equals` on `enableFireBoltMaxLevel20` | The **Enable Fire Bolt Max Level 20** checkbox is checked. |
| 4 | Teleport → `Mana` = `10` | `equals` on `useReducedTeleportMana` | The **Use Reduced Teleport Mana** checkbox is checked. |
| 5 | Teleport → `reqlevel` = `12` | `notEquals "false"` on `enableTeleportLevelRequirement` | The **Enable Teleport Level Requirement** checkbox is checked. |
| 6 | Charged Bolt → `maxlvl` = `30` | `all` of `enableCombinedSkillChanges`, `requireOptionA`, `requireOptionB`, `requireOptionC` | **All four** checkboxes are checked. |
| 7 | Static Field → `reqlevel` = `5` | `any` of `enableEitherSkillChange`, `eitherOptionA`, `eitherOptionB` | **At least one** of those checkboxes is checked. |
| 8 | Frozen Orb → `maxlvl` = `25` | `not` { `disableWhenCheckedExample` `equals` `"true"` } | The **Disable When Checked** checkbox is **unchecked**. |

### Asset → checkbox map

| Source asset | Condition | Copies when |
|---|---|---|
| `always-applied.txt` | *(none)* | Always. |
| `fire-bolt-asset.txt` | `equals` on `enableFireBoltMaxLevel20` | Same checkbox as operation #3. |
| `combined-asset.txt` | `all` of `enableCombinedSkillChanges` + the three `requireOption*` | Same combination as operation #6. |
| `either-asset.txt` | `any` of `enableEitherSkillChange`, `eitherOptionA`, `eitherOptionB` | Same combination as operation #7. |
| `unchecked-asset.txt` | `not` { `disableWhenCheckedExample` `equals` `"true"` } | Same rule as operation #8 (only when unchecked). |

### File layout

```
conditional-options-example/
├── plugininfo.json           Manifest with text + checkbox params and conditional assets.
├── operations.json           Operation file with no-condition / equals / notEquals /
│                             all / any / not examples.
├── README.md                 Plain-English explanation of every condition shape.
└── assets/
    ├── always-applied.txt    Copied unconditionally.
    ├── fire-bolt-asset.txt   Copied when enableFireBoltMaxLevel20 is true.
    ├── combined-asset.txt    Copied only when enableCombinedSkillChanges AND
    │                         requireOptionA AND requireOptionB AND requireOptionC are true.
    ├── either-asset.txt      Copied when enableEitherSkillChange OR eitherOptionA OR
    │                         eitherOptionB is true.
    └── unchecked-asset.txt   Copied when disableWhenCheckedExample is NOT true.
```

> The data values written by the bundled plugin are illustrative — toggling its checkboxes is meant for **UI inspection**, not for balanced gameplay. Inspect `plugininfo.json`, `operations.json`, and `README.md` next to each other for the full schema surface area.
{.is-info}

---

# 10. Loading and Staging Order

Up to here we have covered *what* a plugin can declare. This section covers *when* and *in what order* the launcher applies it, so you can predict exactly what ends up on disk when your plugin runs alongside the launcher's own tweaks and other plugins. None of the rules below require you to do anything new — they are documented so authors can reason about layering without having to read the launcher source.

## When plugins are actually installed

Enabling or disabling a plugin in the launcher UI **does not** write anything to the mod folder. Toggling the checkbox only flips an `IsEnabled` flag in the launcher's settings. Plugins are installed onto disk **after the player clicks Start Game and before the game process is launched**, as part of the launch pipeline described below.

Disabling or deleting a plugin **does** immediately revert that plugin's tracked binary asset writes from the previous launch (so removing a plugin that swapped a sound file restores the original sound right away). Parser-managed files (excel, missiles, monsters, strings) are not reverted on toggle — they are reset to the clean copy on the next Start Game and then re-layered with whatever is still enabled.

## Clean copies

When the mod is installed or updated, the launcher captures a **clean copy** of every parser-managed file under the launcher's data directory. Today this covers:

- The full excel directory tree (`data/global/excel/**` and `data/global/excel/base/**` if present).
- `data/hd/missiles/missiles.json`.
- `data/hd/character/monsters.json`.
- The strings directory (`data/local/lng/strings/**`).
- The launcher-tweak-managed files: layouts profile HD JSON, armor tweak JSONs, `desecratedzones.json`, and the vis JSONs.

The clean copy is the launcher's recovery mechanism: every Start Game restores parser-managed files from the clean copy *before* anything else writes to them, so each launch starts from a known pristine baseline regardless of what the previous launch did. Plugin authors can rely on the fact that the file your operations see at apply time is either (a) a freshly-restored clean copy, or (b) a clean copy with another plugin's asset pre-staged on top — never leftover state from a prior session.

## The launch pipeline

When the player clicks Start Game, the launcher runs the steps below in order. Each step finishes completely before the next one starts.

1. **Restore prior asset writes.** Every binary asset write tracked from the previous launch is reverted to its pre-plugin state. Brand-new files plugins introduced are deleted; replaced files are copied back from the per-launch backup. The launcher's manifest is then cleared, so the next steps see a true pre-plugin disk state.
2. **Asset-collision warning sweep.** The launcher walks every enabled plugin's `assets` array, evaluates each entry's `condition`, and groups the surviving entries by absolute destination path. Any destination claimed by two or more plugins produces one warning identifying the losers and the load-order winner.
3. **Per-excel-directory loop.** For each excel directory that exists on disk (`excel/` and, if present, `excel/base/`), the launcher does the following — *in this order, on that directory*:
   1. Copy the clean variant of the directory over the target. Every `.txt` file is reset to its pristine state.
   2. **Pre-stage plugin asset copies** whose `target` lives directly in this excel directory. Plugins are iterated in load-order; the last enabled plugin to claim a given destination wins.
   3. Apply the launcher's own excel tweaks (charstats, skills, difficultylevels, states, properties, treasureclassex, sounds — whichever the player has toggled on).
   4. Apply every enabled plugin's excel parser ops on `.txt` files in this directory, in load-order.
4. **Restore-and-pre-stage the other parser-managed files** (mod-root scoped, runs once per launch). For each of `missiles.json`, `monsters.json`, the strings directory, the layouts profile HD JSON, the armor tweak files, `desecratedzones.json`, and the vis files:
   1. Restore the file (or directory) from its clean copy.
   2. Pre-stage any enabled plugin's asset copies that target this file. Last-writer-wins, in load-order.
   3. Apply the launcher's own tweaks for that file (where applicable).
5. **Mod-root plugin pass (single, last).** The launcher runs each enabled plugin once at mod-root scope, in load-order. This is where:
   - `missiles.json`, `monsters.json`, and strings parser operations are applied (on top of the file produced by step 4).
   - Every remaining `assets` entry — anything *not* targeting a parser-managed file — is copied. This includes binary files (sounds, textures, icons), JSON files outside the parser surface, and any brand-new path a plugin introduces. These are the assets tracked by the launcher's per-launch backup so they can be reverted on disable.
   - The `data/global/animdata.d2` ↔ `data/global/exanimdata.d2` mirror is synchronized (see [Section 8](#8-asset-file-replacement)).
6. **Game launch.** Only after every step above has succeeded does the launcher start the game executable.

## What that means for any single file

For any parser-managed file (an excel `.txt`, `missiles.json`, `monsters.json`, or a strings file), the effective layering at the moment the game reads it is:

```
clean copy  →  plugin asset (if any)  →  launcher tweaks  →  plugin parser ops
```

In plain English: a plugin asset replaces the whole file with the plugin's bundled version, the launcher's surgical tweaks then re-apply on top of that bundled file (so a player who has launcher tweaks toggled on still gets them), and finally every plugin's parser operations layer on top of that. This is the layering you should design around: if you ship a wholesale `monstats.txt` replacement and another plugin ships `updateRow` operations on `monstats.txt`, the row-level edits land on top of *your* file, in load-order.

For any file outside the parser surface (binary assets, JSON files the launcher does not parse, plugin-introduced new paths), the layering is simpler — every enabled plugin's asset copy is applied in load-order, and the last writer wins.

## Asset-vs-asset collisions

When two or more enabled plugins declare an asset copy targeting the same destination, the plugin **lower** in the launcher's plugin list wins (it is applied last). This is true for both pre-staged and post-pass asset copies. The launcher emits one warning per real collision at the start of the launch (see step 2 above) so you and your players can see which override is actually in effect.

If two plugins ship the *same bytes* at the same destination — common when one plugin re-bundles another's asset for compatibility — the warning is demoted to a log-only line, because there is no observable difference in the resulting file.

## Asset vs. parser-op precedence

Because asset copies are pre-staged in steps 3 and 4 and parser ops run after them, **parser operations always win against asset copies for the same file**. If plugin A ships an asset copy of `skills.txt` and plugin B has an `updateRow` parser op on a single column of `skills.txt`, B's edit lands on top of A's bundled file. Load order does not change this — the pipeline ordering does. If you want the entire file replaced *after* parser ops, that is not currently supported; plugin authors who need wholesale control over a parser-managed file should ship the bundled file as an asset and accept that other plugins' parser ops layer on top of it.

## Excel directories run independently

The per-directory loop in step 3 runs once for `excel/` and again for `excel/base/` if that directory exists in the mod. The two are physically distinct directories with different file contents, so each gets its own clean-copy restore, its own pre-stage pass, its own launcher tweaks, and its own pass of plugin parser ops. **Plugin asset copies, however, are not mirrored across the two directories** — an asset entry whose `target` is `data/global/excel/monstats.txt` only writes to `excel/`, not to `excel/base/`. If you actually want your file in both, declare two asset entries with two different `target` paths.

Mod-root parser-op work (`missiles.json`, `monsters.json`, strings) and binary asset copies all run exactly once per launch.

## Practical implications for plugin authors

A short list of things that fall out of the pipeline above:

- Toggling a plugin off and on without clicking Start Game has no effect on disk. Players are sometimes confused by this — when in doubt, click Start Game.
- A wholesale asset replacement of a parser-managed file is rarely the right tool. If your edits can be expressed as parser ops, prefer that — they layer cleanly with other plugins. Reserve asset copies for binary files, files outside the parser surface, or wholesale replacements where you genuinely want every other parser op to layer on top of your file.
- The launcher's surgical tweaks always re-apply on top of your asset. If you intentionally want to suppress a launcher tweak by shipping the file, expect the player's tweak toggles to override your asset's content for the columns that tweak touches. (A flag on plugins to opt out of launcher tweaks is planned but not yet shipped.)
- Plugin order matters for asset-vs-asset conflicts only. If you want your asset to win against another plugin's asset on the same path, your plugin must be lower in the load-order list than theirs. The collision warning at launch identifies who currently wins.
- Disabling a plugin reverts its tracked binary asset writes immediately, but parser-managed files only reset on the next Start Game. This is a deliberate choice — it keeps the launch pipeline the single point at which parser-managed state is rebuilt.
- The launcher writes a per-launch diagnostic log that records every restore, pre-stage, parser op, and asset copy. If a plugin appears not to be applying as expected, the log is the fastest way to see what the launcher actually did.

---

# 11. Sharing on GitHub Discussions

Once your plugin works locally, you can share it with everyone else. The launcher's **User Plugins** page reads from the [Plugins discussion category](https://github.com/D2R-Reimagined/reimagined-launcher/discussions/categories/plugins) on GitHub, so creating a post there is all it takes to publish.

For your post to be picked up, the body needs four things:

- **A title line** — `Title: Your Plugin Name`. This shows up as the plugin title in the launcher.
- **A description line** — `Desc:` or `Description:` followed by a short summary. Displayed under the title.
- **A mod version line** — `Mod:`, `ModVer:`, or `ModVersion:` followed by a version in `#.#.#` format (e.g. `3.0.7`). Posts without a valid mod version are skipped.
- **A `.zip` attachment** — drag your plugin zip into the post. Posts without a zip are skipped too.

The zip itself still has to contain a valid `plugininfo.json` with all the required fields (`name`, `version`, `modVersion`, and at least one of `files` / `assets`). The launcher validates the archive when a player installs the plugin.

---

# 12. Authoring Checklist

If you're about to publish a plugin, walk down this list. If you can tick all the boxes, you're in good shape.

1. **Manifest first.** Your `plugininfo.json` is valid JSON. It lists every operation file under `files`, every asset under `assets`, or both. At least one of `files` / `assets` is non-empty. (Pure-asset plugins are perfectly fine — see [Section 8](#8-asset-file-replacement).)
2. **`modVersion` is set.** Use `#.#.#` format and match the mod version your plugin targets. Without it, the plugin is rejected.
3. **Rows are identified correctly (excel).** You're using the right identifier column from [Section 3](#3-row-identification-rules-per-file). For Row-ID files, you've remembered the minus-two rule. For bulk edits you can use a range like `"50-100"`. For tricky rows you can use the multi-column object form — and on Row-ID files, you've listed at least two columns to avoid the warning.
4. **Column names are right (excel).** `column` matches a property on the target entry (case-insensitive). Header names with spaces or punctuation (like `Min ac`) become PascalCase (`MinAc`).
5. **Strings use the simple format.** For `.json` files under `data/local/lng/strings`, you're using the flat `{ file, Key, <languageCode>: "…" }` shape from [Section 6](#6-string-json-files). Only the language fields you list get overwritten.
6. **Missiles and monsters entries are well-formed.** For `missiles.json` and `monsters.json`, you're using the flat `{ file, Key, updatedValue|parameterKey }` shape from [Section 7](#7-the-missilesjson-and-monstersjson-files). `replace` requires the key to already exist; use `addRow` to add a new key/value pair.
7. **Asset entries are valid.** Each `assets` entry is a `{ source, target }` pair. Sources live under your `assets/` folder; targets are relative to the mod root. Multiple entries are fine. See [Section 8](#8-asset-file-replacement).
8. **Multi-column updates are tidy.** When you change several columns on the same row, you've collapsed them into a single operation with a `columns` array instead of repeating yourself.
9. **New rows are well-formed.** When using `addRow`, you've populated the file's required identifier column(s) inside the `columns` array. Skip `rowIdentifier` to append, or pass a 0-based index to insert.
10. **Cloned rows are well-formed.** When using `cloneRow`, you've supplied `sourceRowIdentifier`. With `mode: "add"` (the default) `rowIdentifier` is **omitted** — the clone is always appended. With `mode: "replace"` you've supplied a `rowIdentifier` for the row to overwrite.
11. **Swapped rows are unambiguous.** When using `swapRow`, both `rowIdentifier` and `swapRowIdentifier` are present and resolve to different rows. Remember `columns` targets the row that ends up at `rowIdentifier` after the swap, and `swapColumns` targets the row that ends up at `swapRowIdentifier`.
12. **Parameter keys match.** Every `parameterKey` you reference matches a `key` you actually declared in the manifest.
13. **Optional types and conditions are valid.** If you used `"type": "checkbox"` on any parameter, its `defaultValue` (and any saved `value`) is `"true"` or `"false"`. Every `condition` you wrote uses one of the supported shapes (`equals` / `notEquals` / `all` / `any` / `not`) and every `parameterKey` it references is declared in the manifest. Missing `type` and missing `condition` are always fine. See [Section 9](#9-optional-parameter-types-and-conditions).
14. **Listen to the validator.** The launcher rejects plugins that reference unknown files, columns, or parameters, and any path that tries to escape the plugin archive. If it does, read the error list it prints — it usually tells you exactly what to fix.

Now go forth and break — I mean, *enhance* — the game responsibly. 🚀
