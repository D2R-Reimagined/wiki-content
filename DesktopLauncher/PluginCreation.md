---
title: Plugin Example ELI5 for Delegus to Grasp
description: 
published: true
date: 2026-04-07T08:35:42.597Z
tags: 
editor: markdown
dateCreated: 2026-04-07T08:34:46.134Z
---

# Plugin Authoring Guide: From Concept to Chaos

Welcome to the Reimagined Launcher's Plugin System. If you've ever felt that game mechanics were more of a "suggestion" than a rule, you're in the right place. This guide will walk you through the architecture of our plugin system without using metaphors involving five-year-olds or toy boxes. We're all adults here (at least on paper).

---

## 1. The Architectural Blueprint (`plugininfo.json`)

Every plugin requires a manifest file named `plugininfo.json`. This isn't just metadata; it's the brain of your operation. It defines the plugin's identity, the user-facing "knobs" (parameters), and the actual instruction sets (operation files).

### The Anatomy of a Manifest
```json
{
  "name": "Kinetic Overdrive",
  "version": "1.1.0",
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

- **`files`**: An array of relative paths to JSON files containing your operations.
- **`parameters`**: Defines the UI elements the user will see. The `key` is what you'll reference in your code.

---

## 2. The Instruction Set (`*.json`)

Once you've defined your parameters, you need to actually do something with them. Your operation files (e.g., `skill-overrides.json`) tell the launcher exactly which data points to manipulate in the game files.

### Core Properties
- **`file`**: The target data file (currently only `skills.txt` is supported, because let's face it, that's where the fun is).
- **`rowIdentifier`**: The unique ID of the row (for `skills.txt`, this matches the `Skill` column).
- **`column`**: The specific header of the field you're targeting (e.g., `EMin`, `Mana`).
- **`operation`**: 
  - `replace`: Overwrites the existing value.
  - `multiplyExisting`: Scales the current numeric value by your factor.
- **`parameterKey`**: A direct reference to a key defined in `plugininfo.json`.

---

## 3. Power Techniques: Key Reuse

Efficiency is key. You don't need a separate parameter for every single field. You can map one UI "knob" to dozens of operations.

#### Example 1: The "Master Balance" Multiplier
If you want a single slider to affect both the minimum and maximum damage of a skill:

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
You can also synchronize the maximum level of multiple skills using a single parameter. For instance, to set the same `maxlvl` for Magic Arrow, Fire Arrow, and Inner Sight:

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

---

## 4. Advanced Interpolation: Parameter Tokens `{{ }}`

Sometimes, a direct mapping isn't enough. You might want to inject a parameter value into a larger string or use multiple parameters in a single field. This is where double-curly-brace tokens come in.

### The `{{ parameter:key }}` Syntax
The launcher's regex engine scans `updatedValue` for these tokens and replaces them with the current value of the specified parameter before applying the operation.

#### Use Case 1: Simple Injection
Instead of using `parameterKey`, you can explicitly place the value:
```json
{
  "file": "skills.txt",
  "rowIdentifier": "Teleport",
  "column": "Mana",
  "operation": "replace",
  "updatedValue": "{{ parameter:manaCost }}"
}
```

#### Use Case 2: Inline Math (Well, sort of)
While the launcher doesn't evaluate math inside the brackets, you can use tokens within a `multiplyExisting` operation's `updatedValue`.
```json
{
  "file": "skills.txt",
  "rowIdentifier": "Blizzard",
  "column": "Param4",
  "operation": "multiplyExisting",
  "updatedValue": "{{ parameter:globalDurationScalar }}"
}
```

---

## Authoring Checklist

1. **Manifest First**: Ensure your `plugininfo.json` is valid JSON and lists all your operation files.
2. **Key Consistency**: Match your `parameterKey` exactly to the `key` in the manifest. Case sensitivity matters (sometimes).
3. **Target Accuracy**: Double-check `rowIdentifier` and `column` names against the actual `skills.txt` structure.
4. **Validation**: The launcher will yell at you if you try to reference a non-existent parameter or a file outside the plugin folder. Listen to it.

Now go forth and break—I mean, *enhance*—the game responsibly. 🚀
