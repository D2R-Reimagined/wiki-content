---
title: D2R Reimagined 3.1.0 Recipe Chages
description: Don't mark this one visible yet either K thx
published: false
date: 2026-10-27T03:21:51.938Z
tags: patch, recipe changes
editor: markdown
dateCreated: 2026-10-27T03:21:35.592Z
---

# Recipe patch notes

## Summary

| Crafting category | Confirmed matched modifications | Added definitions | Removed definitions |
|---|---:|---:|---:|
| Force Ethereal Recipe | 0 | 4 | 4 |
| Item Crafting Recipe | 2 | 137 | 105 |
| Item Enchantment Recipe | 0 | 278 | 341 |
| Jewel Upgrade Recipe | 1 | 0 | 0 |
| Orb of Corruption Recipe | 7 | 0 | 0 |
| Reroll Item Recipe | 0 | 0 | 1 |
| Socket Punch Recipe | 0 | 0 | 40 |
| Sunder Item Crafting Recipe | 0 | 13 | 12 |
| Uber Charm Upgrade Recipe | 4 | 6 | 10 |
| Other recipes | 1 | 39 | 0 |

## Recipe changes

<details>
<summary>Force Ethereal Recipe — 0 modified, 4 added, 4 removed</summary>

<details>
<summary>Added recipe definitions (4)</summary>

<details>
<summary>1 × 1H Weapons + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f07ebf2ad9fed986 -->
- Source: `cr-f07ebf2ad9fed986`, row 551.
- Required ingredients:
  - 1 × 1H Weapons
    - Ingredient requirement: Not Ethereal
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ohm Rune (#27)
- Results:
  - A: 1 × Return Exact Input Item
    - strethereal \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=17, Param=152, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Armor + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-865908c1a0bd7910 -->
- Source: `cr-865908c1a0bd7910`, row 550.
- Required ingredients:
  - 1 × Any Armor
    - Ingredient requirement: Not Ethereal
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ohm Rune (#27)
- Results:
  - A: 1 × Return Exact Input Item
    - strethereal \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=17, Param=152, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8df62ecd9cb08ef2 -->
- Source: `cr-8df62ecd9cb08ef2`, row 552.
- Required ingredients:
  - 1 × Slam Weapons
    - Ingredient requirement: Not Ethereal
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ohm Rune (#27)
- Results:
  - A: 1 × Return Exact Input Item
    - strethereal \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=17, Param=152, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d645c9696bc04c38 -->
- Source: `cr-d645c9696bc04c38`, row 553.
- Required ingredients:
  - 1 × Spears and Polearms
    - Ingredient requirement: Not Ethereal
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ohm Rune (#27)
- Results:
  - A: 1 × Return Exact Input Item
    - strethereal \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=17, Param=152, Value=1) are present; their gameplay meaning has not been verified.

</details>

</details>

<details>
<summary>Removed recipe definitions (4)</summary>

<details>
<summary>1 × 1H Weapons + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0e02d4d7180dd542 -->
- Source: `cr-0e02d4d7180dd542`, row 575.
- Required ingredients:
  - 1 × 1H Weapons
    - Ingredient requirement: Not Ethereal
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ohm Rune (#27)
- Results:
  - A: 1 × Return Exact Input Item
    - strethereal \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=17, Param=152, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Armor + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-12ffad3eb728ac58 -->
- Source: `cr-12ffad3eb728ac58`, row 574.
- Required ingredients:
  - 1 × Any Armor
    - Ingredient requirement: Not Ethereal
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ohm Rune (#27)
- Results:
  - A: 1 × Return Exact Input Item
    - strethereal \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=17, Param=152, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-24874e1ee4ef992e -->
- Source: `cr-24874e1ee4ef992e`, row 576.
- Required ingredients:
  - 1 × Slam Weapons
    - Ingredient requirement: Not Ethereal
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ohm Rune (#27)
- Results:
  - A: 1 × Return Exact Input Item
    - strethereal \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=17, Param=152, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b922bcc06edf2e80 -->
- Source: `cr-b922bcc06edf2e80`, row 577.
- Required ingredients:
  - 1 × Spears and Polearms
    - Ingredient requirement: Not Ethereal
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ohm Rune (#27)
- Results:
  - A: 1 × Return Exact Input Item
    - strethereal \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=17, Param=152, Value=1) are present; their gameplay meaning has not been verified.

</details>

</details>

</details>

<details>
<summary>Item Crafting Recipe — 2 modified, 137 added, 105 removed</summary>

<details>
<summary>Confirmed matched modifications (2)</summary>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Um Rune (#22) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-3f76f6d2abcc940b -->
- Source: `cr-3f76f6d2abcc940b`, row 387.
- Output property (A): +20% to All Resistances (was +(20-25)%)
- Output property (A): 20% Increased Chance of Blocking (was (20-30)%)
- Output property (A): +(20-30)% Faster Hit Recovery (was +30%)

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Ral Rune (#8) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-7ace18051adfaf9a -->
- Source: `cr-7ace18051adfaf9a`, row 336.
- Added output property (A): +50% Enhanced Defense

</details>

</details>

<details>
<summary>Added recipe definitions (137)</summary>

<details>
<summary>1 × 1H Weapons + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Dem Rune (#38) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b7746d48785441d2 -->
- Source: `cr-b7746d48785441d2`, row 407.
- Required ingredients:
  - 1 × 1H Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
  - 1 × Dem Rune (#38)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(150-200)% Enhanced Weapon Damage
    - -10% to Enemy Physical Damage Resistance

</details>

<details>
<summary>1 × 1H Weapons + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e8e3ab386ba00f92 -->
- Source: `cr-e8e3ab386ba00f92`, row 395.
- Required ingredients:
  - 1 × 1H Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
  - 1 × Ohm Rune (#27)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(150-200)% Enhanced Weapon Damage
    - +(20-30)% Increased Attack Speed

</details>

<details>
<summary>1 × 1H Weapons + 1 × Jewel + 1 × Hev Rune (#39) + 1 × Myr Rune (#36) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-10269b3eb0c714b5 -->
- Source: `cr-10269b3eb0c714b5`, row 415.
- Required ingredients:
  - 1 × 1H Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Hev Rune (#39)
  - 1 × Myr Rune (#36)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - -(10-15)% to Enemy Magic Resistance

</details>

<details>
<summary>1 × 1H Weapons + 1 × Jewel + 1 × Myr Rune (#36) + 1 × Zod Rune (#33) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-46ddbc15ceb9fa87 -->
- Source: `cr-46ddbc15ceb9fa87`, row 403.
- Required ingredients:
  - 1 × 1H Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Myr Rune (#36)
  - 1 × Zod Rune (#33)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(15-20)% to Magic Skill Damage

</details>

<details>
<summary>1 × 1H Weapons + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-d95260bbd6a71c05 -->
- Source: `cr-d95260bbd6a71c05`, row 399.
- Required ingredients:
  - 1 × 1H Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
  - 1 × Cham Rune (#32)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(10-15)% to All Elemental Skill Damage

</details>

<details>
<summary>1 × 1H Weapons + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Grit Rune (#37) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-d983c92e677f770c -->
- Source: `cr-d983c92e677f770c`, row 411.
- Required ingredients:
  - 1 × 1H Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
  - 1 × Grit Rune (#37)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - -(10-15)% to All Enemy Elemental Resistances

</details>

<details>
<summary>1 × Amulet + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-4e88f430f00fbd68 -->
- Source: `cr-4e88f430f00fbd68`, row 288.
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 4 Battle Orders when you Level-Up

</details>

<details>
<summary>1 × Amulet + 1 × Jewel + 1 × Amn Rune (#11) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-456172c86072c18e -->
- Source: `cr-456172c86072c18e`, row 494.
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Amn Rune (#11)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-4)% Life stolen per hit
    - +(10-20) to Life
    - +(5-10)% Faster Run/Walk Speed

</details>

<details>
<summary>1 × Amulet + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Vex Rune (#26) + 1 × Skull → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-6cf2db35ff0e0b7b -->
- Source: `cr-6cf2db35ff0e0b7b`, row 292.
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
  - 1 × Vex Rune (#26)
  - 1 × Skull
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - Adds 25-35 Weapon Damage

</details>

<details>
<summary>1 × Amulet + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-eafdb94a7b3991a3 -->
- Source: `cr-eafdb94a7b3991a3`, row 503.
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ral Rune (#8)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(4-10)% Mana Regeneration
    - +(10-20) to Mana
    - +(5-10)% Faster Cast Rate

</details>

<details>
<summary>1 × Amulet + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-f5cbe626ff5d2e4c -->
- Source: `cr-f5cbe626ff5d2e4c`, row 512.
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Thul Rune (#10)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - Physical Damage Reduced By (1-4)
    - Magic Damage Reduced By (1-2)
    - (1-10)% Increased Chance of Blocking

</details>

<details>
<summary>1 × Amulet + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-5813e67a70f41de2 -->
- Source: `cr-5813e67a70f41de2`, row 485.
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Thul Rune (#10)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - 5% Chance to cast level 4 Frost Nova when struck
    - Attacker Takes Damage of (3-10)
    - +(3-11)% Hits Cause Monsters to Flee

</details>

<details>
<summary>1 × Amulet + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a45e5ee323e5c8c0 -->
- Source: `cr-a45e5ee323e5c8c0`, row 293.
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
  - 1 × Vex Rune (#26)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +10% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Any Shield + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-246c51c12fc15664 -->
- Source: `cr-246c51c12fc15664`, row 377.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 4 Holy Shield when you Level-Up
    - +5 to all Attributes

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Um Rune (#22) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-0eeca94e5440c245 -->
- Source: `cr-0eeca94e5440c245`, row 388.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Um Rune (#22)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(30-40)% to All Resistances
    - +10% Physical Damage Reduction

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Eth Rune (#5) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-f40b1cde8ff7e1be -->
- Source: `cr-f40b1cde8ff7e1be`, row 501.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Eth Rune (#5)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(4-10)% Mana Regeneration
    - +(10-20) to Mana
    - (5-10)% Increased Chance of Blocking

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Eth Rune (#5) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-7c7c5c051da924f8 -->
- Source: `cr-7c7c5c051da924f8`, row 483.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Eth Rune (#5)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - 5% Chance to cast level 4 Frost Nova when struck
    - Attacker Takes Damage of (3-10)
    - (5-10)% Increased Chance of Blocking

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Ith Rune (#6) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ef79e5c60fe4caee -->
- Source: `cr-ef79e5c60fe4caee`, row 492.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-3)% Life stolen per hit
    - +(10-20) to Life
    - Attacker Takes Damage of (4-7)

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Nef Rune (#4) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-fc9b1f43f82397f3 -->
- Source: `cr-fc9b1f43f82397f3`, row 510.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Nef Rune (#4)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - Physical Damage Reduced By (1-4)
    - Magic Damage Reduced By (1-2)
    - +(5-10)% Magic Resistance
    - +(10-30)% Enhanced Defense

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ba3b0e2473d456e3 -->
- Source: `cr-ba3b0e2473d456e3`, row 389.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Ohm Rune (#27)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(50-100)% Enhanced Weapon Damage

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Zeph Rune (#35) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b41ce230c83a3306 -->
- Source: `cr-b41ce230c83a3306`, row 390.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Zeph Rune (#35)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(15-20)% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Any Weapon + 1 × Jewel + 1 × Ort Rune (#9) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-9e23f069fda0736f -->
- Source: `cr-9e23f069fda0736f`, row 496.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ort Rune (#9)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-4)% Life stolen per hit
    - +(10-20) to Life
    - +(35-60)% Enhanced Weapon Damage

</details>

<details>
<summary>1 × Any Weapon + 1 × Jewel + 1 × Sol Rune (#12) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-547c36ab0cbaa134 -->
- Source: `cr-547c36ab0cbaa134`, row 514.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Sol Rune (#12)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - Physical Damage Reduced By (1-4)
    - Magic Damage Reduced By (1-2)
    - +(5-10)% Enhanced Defense

</details>

<details>
<summary>1 × Any Weapon + 1 × Jewel + 1 × Tir Rune (#3) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b4ddcb5b699b40ca -->
- Source: `cr-b4ddcb5b699b40ca`, row 505.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tir Rune (#3)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(4-10)% Mana Regeneration
    - +(10-20) to Mana
    - +(1-5)% Increased Maximum Mana

</details>

<details>
<summary>1 × Any Weapon + 1 × Jewel + 1 × Tir Rune (#3) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b2da8b49be60c36c -->
- Source: `cr-b2da8b49be60c36c`, row 487.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tir Rune (#3)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - 5% Chance to cast level 4 Frost Nova when struck
    - Attacker Takes Damage of (3-7)
    - +(35-60)% Enhanced Weapon Damage

</details>

<details>
<summary>1 × Armor + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-447df96efb78aa47 -->
- Source: `cr-447df96efb78aa47`, row 357.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 5 Oak Sage when you Level-Up

</details>

<details>
<summary>1 × Armor + 1 × Jewel + 1 × Eth Rune (#5) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-aa61ecd1960e49d3 -->
- Source: `cr-aa61ecd1960e49d3`, row 511.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Eth Rune (#5)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - Physical Damage Reduced By (1-4)
    - Magic Damage Reduced By (1-2)
    - ModStr4b \[1\] (translation template unsupported; review)
    - +(10-30)% Enhanced Defense
    - **Review:** one or more output properties retain untranslated keys or arguments.

</details>

<details>
<summary>1 × Armor + 1 × Jewel + 1 × Nef Rune (#4) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-6f8a86fdfcc472d8 -->
- Source: `cr-6f8a86fdfcc472d8`, row 484.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Nef Rune (#4)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - 5% Chance to cast level 4 Frost Nova when struck
    - Attacker Takes Damage of (3-10)
    - +(10-20)% Faster Hit Recovery

</details>

<details>
<summary>1 × Armor + 1 × Jewel + 1 × Tal Rune (#7) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-6535666b58bd25f9 -->
- Source: `cr-6535666b58bd25f9`, row 502.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tal Rune (#7)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(4-10)% Mana Regeneration
    - +(10-20) to Mana
    - +(1-3) Mana after each Kill

</details>

<details>
<summary>1 × Armor + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a9470e478efbd0a6 -->
- Source: `cr-a9470e478efbd0a6`, row 493.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Thul Rune (#10)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-3)% Life stolen per hit
    - +(10-20) to Life
    - +(1-3) Life after each Demon Kill

</details>

<details>
<summary>1 × Armor + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Ber Rune (#30) + 1 × Um Rune (#22) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-f2059d9389c49b6f -->
- Source: `cr-f2059d9389c49b6f`, row 376.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Ber Rune (#30)
  - 1 × Um Rune (#22)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(150-175)% Enhanced Defense
    - +(20-30)% to All Resistances
    - +(7-10)% Physical Damage Reduction

</details>

<details>
<summary>1 × Belt + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-187a8c9a1aed6766 -->
- Source: `cr-187a8c9a1aed6766`, row 301.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Frozen Armor when you Level-Up

</details>

<details>
<summary>1 × Belt + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Zod Rune (#33) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-d5ed080afd5907e0 -->
- Source: `cr-d5ed080afd5907e0`, row 306.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
  - 1 × Zod Rune (#33)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - Adds 20-30 Weapon Damage

</details>

<details>
<summary>1 × Belt + 1 × Jewel + 1 × Cham Rune (#32) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-1ef101d7c3d2f30d -->
- Source: `cr-1ef101d7c3d2f30d`, row 305.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Cham Rune (#32)
  - 1 × Jah Rune (#31)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - ModStr5z \[1\] (translation template unsupported; review)
    - +(10-15)% Increased Maximum Life
    - **Review:** one or more output properties retain untranslated keys or arguments.

</details>

<details>
<summary>1 × Belt + 1 × Jewel + 1 × Ith Rune (#6) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-be7fed8370931bf3 -->
- Source: `cr-be7fed8370931bf3`, row 500.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(4-10)% Mana Regeneration
    - +(10-20) to Mana
    - +(5-10)% Faster Cast Rate

</details>

<details>
<summary>1 × Belt + 1 × Jewel + 1 × Tal Rune (#7) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-5169209e1183c3ee -->
- Source: `cr-5169209e1183c3ee`, row 509.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tal Rune (#7)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - Physical Damage Reduced By (1-4)
    - Magic Damage Reduced By (1-2)
    - +(5-10)% Poison Resistance
    - +(10-30)% Enhanced Defense

</details>

<details>
<summary>1 × Belt + 1 × Jewel + 1 × Tal Rune (#7) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-0d9d210acb075111 -->
- Source: `cr-0d9d210acb075111`, row 491.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tal Rune (#7)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-3)% Life stolen per hit
    - +(10-20) to Life
    - +(5-10)% Chance of Open Wounds

</details>

<details>
<summary>1 × Belt + 1 × Jewel + 1 × Tal Rune (#7) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-8e31e113a047f440 -->
- Source: `cr-8e31e113a047f440`, row 482.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tal Rune (#7)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - 5% Chance to cast level 4 Frost Nova when struck
    - Attacker Takes Damage of (3-7)
    - +(5-10)% Damage Taken Added To Mana

</details>

<details>
<summary>1 × Belt + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Zod Rune (#33) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-dd24cbb786ca1f1c -->
- Source: `cr-dd24cbb786ca1f1c`, row 307.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
  - 1 × Zod Rune (#33)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - +10% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Boots + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-7c9a65c44a8908bf -->
- Source: `cr-7c9a65c44a8908bf`, row 308.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Magic Item
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - +10% Faster Run/Walk Speed

</details>

<details>
<summary>1 × Boots + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-8c2b77b4d66940d9 -->
- Source: `cr-8c2b77b4d66940d9`, row 309.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Burst of Speed when you Level-Up

</details>

<details>
<summary>1 × Boots + 1 × Jewel + 1 × Eth Rune (#5) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-07a5d07ed5a0a6e6 -->
- Source: `cr-07a5d07ed5a0a6e6`, row 489.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Eth Rune (#5)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-3)% Life stolen per hit
    - +(10-20) to Life
    - Replenish +(5-10) Life per 10 Seconds

</details>

<details>
<summary>1 × Boots + 1 × Jewel + 1 × Ort Rune (#9) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a0bf9adc416f82e5 -->
- Source: `cr-a0bf9adc416f82e5`, row 507.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ort Rune (#9)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - Physical Damage Reduced By (1-4)
    - Magic Damage Reduced By (1-2)
    - +(5-10)% Fire Resistance
    - +(10-30)% Enhanced Defense

</details>

<details>
<summary>1 × Boots + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-967dcff56038ce5e -->
- Source: `cr-967dcff56038ce5e`, row 480.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ral Rune (#8)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - 5% Chance to cast level 4 Frost Nova when struck
    - Attacker Takes Damage of (3-7)
    - +(25-60) Defense vs. Melee

</details>

<details>
<summary>1 × Boots + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-4e2f9f9978f911b7 -->
- Source: `cr-4e2f9f9978f911b7`, row 498.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Thul Rune (#10)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(4-10)% Mana Regeneration
    - +(10-20) to Mana
    - +(2-5)% Increased Maximum Mana

</details>

<details>
<summary>1 × Boots + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Brak Rune (#34) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a31d7709ee0a0caa -->
- Source: `cr-a31d7709ee0a0caa`, row 312.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Brak Rune (#34)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - Adds 20-30 Weapon Damage
    - +(20-30)% Faster Run/Walk Speed

</details>

<details>
<summary>1 × Boots + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Zeph Rune (#35) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-eece3f9244cf7b07 -->
- Source: `cr-eece3f9244cf7b07`, row 313.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Zeph Rune (#35)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - +10% to All Elemental Skill Damage
    - +(20-30)% Faster Run/Walk Speed

</details>

<details>
<summary>1 × Gloves + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b605c5f9233a5e13 -->
- Source: `cr-b605c5f9233a5e13`, row 314.
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 4 Battle Command when you Level-Up

</details>

<details>
<summary>1 × Gloves + 1 × Jewel + 1 × Nef Rune (#4) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-4c9d64b377a1c73d -->
- Source: `cr-4c9d64b377a1c73d`, row 490.
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Nef Rune (#4)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-3)% Life stolen per hit
    - +(10-20) to Life

</details>

<details>
<summary>1 × Gloves + 1 × Jewel + 1 × Ort Rune (#9) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-91127cda976908cb -->
- Source: `cr-91127cda976908cb`, row 499.
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ort Rune (#9)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(4-10)% Mana Regeneration
    - +(10-20) to Mana
    - +(1-3) Mana after each Kill

</details>

<details>
<summary>1 × Gloves + 1 × Jewel + 1 × Ort Rune (#9) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-8d8b7dd3b22dc00d -->
- Source: `cr-8d8b7dd3b22dc00d`, row 481.
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ort Rune (#9)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - 5% Chance to cast level 4 Frost Nova when struck
    - Attacker Takes Damage of (3-7)
    - ModStr1y \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.

</details>

<details>
<summary>1 × Gloves + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-002459c4d64f1d96 -->
- Source: `cr-002459c4d64f1d96`, row 508.
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ral Rune (#8)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - Physical Damage Reduced By (1-4)
    - Magic Damage Reduced By (1-2)
    - +(5-10)% Cold Resistance
    - +(10-30)% Enhanced Defense

</details>

<details>
<summary>1 × Gloves + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Brak Rune (#34) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-6c4f05be340afc9b -->
- Source: `cr-6c4f05be340afc9b`, row 333.
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Brak Rune (#34)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - Adds 20-40 Weapon Damage

</details>

<details>
<summary>1 × Gloves + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Zeph Rune (#35) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-d20a68d110b8acb7 -->
- Source: `cr-d20a68d110b8acb7`, row 334.
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Zeph Rune (#35)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - +10% to All Elemental Skill Damage
    - +(10-20)% Faster Cast Rate

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-80e94a6665e6769f -->
- Source: `cr-80e94a6665e6769f`, row 440.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Vex Rune (#26)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 0; max: 2; (Amazon Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Chaos Onyx → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-6ee5b8665b808489 -->
- Source: `cr-6ee5b8665b808489`, row 442.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Vex Rune (#26)
  - 1 × Chaos Onyx
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 56; max: 58; (Warlock Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Diamond → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-32655966394570dc -->
- Source: `cr-32655966394570dc`, row 441.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Vex Rune (#26)
  - 1 × Diamond
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 24; max: 26; (Paladin Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-3b6742663e78a047 -->
- Source: `cr-3b6742663e78a047`, row 438.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Vex Rune (#26)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 40; max: 42; (Druid Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b9649b65f4cf4982 -->
- Source: `cr-b9649b65f4cf4982`, row 436.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Vex Rune (#26)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 32; max: 34; (Barbarian Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-c18d0465f949aead -->
- Source: `cr-c18d0465f949aead`, row 437.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Vex Rune (#26)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 8; max: 10; (Sorceress Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Skull → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-92139c666f940b35 -->
- Source: `cr-92139c666f940b35`, row 439.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Vex Rune (#26)
  - 1 × Skull
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 16; max: 18; (Necromancer Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Topaz → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a83a4965eb21b4ec -->
- Source: `cr-a83a4965eb21b4ec`, row 435.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Vex Rune (#26)
  - 1 × Topaz
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 48; max: 50; (Assassin Only))

</details>

<details>
<summary>1 × Helm + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-9f6fc5edde028dad -->
- Source: `cr-9f6fc5edde028dad`, row 335.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Shout when you Level-Up

</details>

<details>
<summary>1 × Helm + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-36aadd1f3d5bb840 -->
- Source: `cr-36aadd1f3d5bb840`, row 354.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Jah Rune (#31)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(5-10)% Physical Damage Reduction
    - +(5-10)% Increased Maximum Life

</details>

<details>
<summary>1 × Helm + 1 × Jewel + 1 × Ith Rune (#6) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-c0132295fba831e2 -->
- Source: `cr-c0132295fba831e2`, row 506.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - Physical Damage Reduced By (1-4)
    - Magic Damage Reduced By (1-2)
    - +(5-10)% Lightning Resistance
    - +(10-30)% Enhanced Defense

</details>

<details>
<summary>1 × Helm + 1 × Jewel + 1 × Ith Rune (#6) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-5dcb22428a11424c -->
- Source: `cr-5dcb22428a11424c`, row 479.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - 5% Chance to cast level 4 Frost Nova when struck
    - Attacker Takes Damage of (3-7)
    - +(25-50) Defense vs. Missile

</details>

<details>
<summary>1 × Helm + 1 × Jewel + 1 × Nef Rune (#4) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-9dc6f2a2992f7a10 -->
- Source: `cr-9dc6f2a2992f7a10`, row 497.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Nef Rune (#4)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(4-10)% Mana Regeneration
    - +(10-20) to Mana
    - +(1-4)% Mana stolen per hit

</details>

<details>
<summary>1 × Helm + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-006c0afdb2d98023 -->
- Source: `cr-006c0afdb2d98023`, row 488.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ral Rune (#8)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-3)% Life stolen per hit
    - +(10-20) to Life
    - +(5-10)% Deadly Strike

</details>

<details>
<summary>1 × Helm + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-3956af4cdc6fccfe -->
- Source: `cr-3956af4cdc6fccfe`, row 355.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-2) to All Skills
    - +50% Enhanced Weapon Damage

</details>

<details>
<summary>1 × Helm + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-417f184ce0ea3229 -->
- Source: `cr-417f184ce0ea3229`, row 356.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-2) to All Skills
    - +10% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Missile Weapon + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Dem Rune (#38) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-47eb947f52d6d301 -->
- Source: `cr-47eb947f52d6d301`, row 406.
- Required ingredients:
  - 1 × Missile Weapon
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
  - 1 × Dem Rune (#38)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(200-250)% Enhanced Weapon Damage
    - -15% to Enemy Physical Damage Resistance

</details>

<details>
<summary>1 × Missile Weapon + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-c67f8eea6de59531 -->
- Source: `cr-c67f8eea6de59531`, row 394.
- Required ingredients:
  - 1 × Missile Weapon
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
  - 1 × Ohm Rune (#27)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(200-250)% Enhanced Weapon Damage
    - +(30-40)% Increased Attack Speed

</details>

<details>
<summary>1 × Missile Weapon + 1 × Jewel + 1 × Hev Rune (#39) + 1 × Myr Rune (#36) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-16092e47cd85c366 -->
- Source: `cr-16092e47cd85c366`, row 414.
- Required ingredients:
  - 1 × Missile Weapon
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Hev Rune (#39)
  - 1 × Myr Rune (#36)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - -(15-20)% to Enemy Magic Resistance

</details>

<details>
<summary>1 × Missile Weapon + 1 × Jewel + 1 × Myr Rune (#36) + 1 × Zod Rune (#33) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a554850d184f857c -->
- Source: `cr-a554850d184f857c`, row 402.
- Required ingredients:
  - 1 × Missile Weapon
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Myr Rune (#36)
  - 1 × Zod Rune (#33)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(20-25)% to Magic Skill Damage

</details>

<details>
<summary>1 × Missile Weapon + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-476bde033cdae0f6 -->
- Source: `cr-476bde033cdae0f6`, row 398.
- Required ingredients:
  - 1 × Missile Weapon
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
  - 1 × Cham Rune (#32)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(20-30)% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Missile Weapon + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Grit Rune (#37) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-c0ca19d259c14317 -->
- Source: `cr-c0ca19d259c14317`, row 410.
- Required ingredients:
  - 1 × Missile Weapon
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
  - 1 × Grit Rune (#37)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - -(20-30)% to All Enemy Elemental Resistances

</details>

<details>
<summary>1 × Ring + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-0d95231dbfd434fc -->
- Source: `cr-0d95231dbfd434fc`, row 294.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Fade when you Level-Up

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Amn Rune (#11) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e0a5033f3e143b75 -->
- Source: `cr-e0a5033f3e143b75`, row 504.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Amn Rune (#11)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(4-10)% Mana Regeneration
    - +(10-20) to Mana
    - +(1-5) to Energy

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Amn Rune (#11) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-4010438103b7e36d -->
- Source: `cr-4010438103b7e36d`, row 513.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Amn Rune (#11)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - Physical Damage Reduced By (1-4)
    - Magic Damage Reduced By (1-2)
    - +(1-5) to Vitality

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Amn Rune (#11) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a3dc02c9af4f9e63 -->
- Source: `cr-a3dc02c9af4f9e63`, row 486.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Amn Rune (#11)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - 5% Chance to cast level 4 Frost Nova when struck
    - Attacker Takes Damage of (3-6)
    - +(1-5) to Dexterity

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Sol Rune (#12) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b4b028ef109b62bd -->
- Source: `cr-b4b028ef109b62bd`, row 495.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Sol Rune (#12)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-3)% Life stolen per hit
    - +(10-20) to Life
    - +(1-5) to Strength

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Sur Rune (#29) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-4b5bfd2e73be829b -->
- Source: `cr-4b5bfd2e73be829b`, row 298.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Sur Rune (#29)
  - 1 × Jah Rune (#31)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(5-8)% Increased Maximum Life
    - +(5-8)% Increased Maximum Mana

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Brak Rune (#34) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-9d9f671eee7fd892 -->
- Source: `cr-9d9f671eee7fd892`, row 299.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Brak Rune (#34)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - Adds 15-25 Weapon Damage

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Zeph Rune (#35) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-1cf0e931449f9f8e -->
- Source: `cr-1cf0e931449f9f8e`, row 300.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Zeph Rune (#35)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - +5% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Topaz → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-c4257665b7251094 -->
- Source: `cr-c4257665b7251094`, row 296.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Topaz
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +20% Chance Items Roll Magic or Better

</details>

<details>
<summary>1 × Slam Weapons + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Dem Rune (#38) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-2521a422be46f792 -->
- Source: `cr-2521a422be46f792`, row 404.
- Required ingredients:
  - 1 × Slam Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
  - 1 × Dem Rune (#38)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(200-250)% Enhanced Weapon Damage
    - -15% to Enemy Physical Damage Resistance

</details>

<details>
<summary>1 × Slam Weapons + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-3fff47d9107e9d52 -->
- Source: `cr-3fff47d9107e9d52`, row 392.
- Required ingredients:
  - 1 × Slam Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
  - 1 × Ohm Rune (#27)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(200-250)% Enhanced Weapon Damage
    - +(30-40)% Increased Attack Speed

</details>

<details>
<summary>1 × Slam Weapons + 1 × Jewel + 1 × Hev Rune (#39) + 1 × Myr Rune (#36) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-0ee40d5d1e3c9475 -->
- Source: `cr-0ee40d5d1e3c9475`, row 412.
- Required ingredients:
  - 1 × Slam Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Hev Rune (#39)
  - 1 × Myr Rune (#36)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - -(15-20)% to Enemy Magic Resistance

</details>

<details>
<summary>1 × Slam Weapons + 1 × Jewel + 1 × Myr Rune (#36) + 1 × Zod Rune (#33) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ef162e39242e2547 -->
- Source: `cr-ef162e39242e2547`, row 400.
- Required ingredients:
  - 1 × Slam Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Myr Rune (#36)
  - 1 × Zod Rune (#33)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(20-25)% to Magic Skill Damage

</details>

<details>
<summary>1 × Slam Weapons + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-86f2fd579386fec5 -->
- Source: `cr-86f2fd579386fec5`, row 396.
- Required ingredients:
  - 1 × Slam Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
  - 1 × Cham Rune (#32)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(20-30)% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Slam Weapons + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Grit Rune (#37) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-41dd085ee32ebdcc -->
- Source: `cr-41dd085ee32ebdcc`, row 408.
- Required ingredients:
  - 1 × Slam Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
  - 1 × Grit Rune (#37)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - -(20-30)% to All Enemy Elemental Resistances

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Dem Rune (#38) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ac34edec3dbf07d8 -->
- Source: `cr-ac34edec3dbf07d8`, row 405.
- Required ingredients:
  - 1 × Spears and Polearms
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
  - 1 × Dem Rune (#38)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(200-250)% Enhanced Weapon Damage
    - -15% to Enemy Physical Damage Resistance

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e64d4bd9c0879fcc -->
- Source: `cr-e64d4bd9c0879fcc`, row 393.
- Required ingredients:
  - 1 × Spears and Polearms
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
  - 1 × Ohm Rune (#27)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(200-250)% Enhanced Weapon Damage
    - +(30-40)% Increased Attack Speed

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Jewel + 1 × Hev Rune (#39) + 1 × Myr Rune (#36) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-22ab3d19a02bbc6f -->
- Source: `cr-22ab3d19a02bbc6f`, row 413.
- Required ingredients:
  - 1 × Spears and Polearms
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Hev Rune (#39)
  - 1 × Myr Rune (#36)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - -(15-20)% to Enemy Magic Resistance

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Jewel + 1 × Myr Rune (#36) + 1 × Zod Rune (#33) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-abfa7ccaa37465e5 -->
- Source: `cr-abfa7ccaa37465e5`, row 401.
- Required ingredients:
  - 1 × Spears and Polearms
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Myr Rune (#36)
  - 1 × Zod Rune (#33)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(20-25)% to Magic Skill Damage

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-86f787711deb21cf -->
- Source: `cr-86f787711deb21cf`, row 397.
- Required ingredients:
  - 1 × Spears and Polearms
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
  - 1 × Cham Rune (#32)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - +(20-30)% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Grit Rune (#37) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-386e7cda059269ae -->
- Source: `cr-386e7cda059269ae`, row 409.
- Required ingredients:
  - 1 × Spears and Polearms
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
  - 1 × Grit Rune (#37)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(2-3) to All Skills
    - -(20-30)% to All Enemy Elemental Resistances

</details>

<details>
<summary>Amazon-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-cca30bb3d01e8151 -->
- Source: `cr-cca30bb3d01e8151`, row 380.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Thul Rune (#10)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Amazon Skill Levels

</details>

<details>
<summary>Amazon-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-40ca7cb03c82ae0e -->
- Source: `cr-40ca7cb03c82ae0e`, row 369.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Amazon Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Amazon-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-1eccf08ef4bd7955 -->
- Source: `cr-1eccf08ef4bd7955`, row 361.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Amazon Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Amazon-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-c2520bbc3fe79881 -->
- Source: `cr-c2520bbc3fe79881`, row 347.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Dol Rune (#14)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Amazon Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Amazon-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-373604ff4285e96b -->
- Source: `cr-373604ff4285e96b`, row 339.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Shael Rune (#13)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Amazon Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Assassin-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-60e01786338bbe45 -->
- Source: `cr-60e01786338bbe45`, row 384.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Thul Rune (#10)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Assassin Skill Levels

</details>

<details>
<summary>Assassin-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-95b16d0a82ba0a32 -->
- Source: `cr-95b16d0a82ba0a32`, row 373.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Assassin Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Assassin-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ce13751c6cffe1e1 -->
- Source: `cr-ce13751c6cffe1e1`, row 365.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Assassin Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Assassin-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-9bee4319a39ae115 -->
- Source: `cr-9bee4319a39ae115`, row 351.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Dol Rune (#14)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Assassin Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Assassin-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-1edd9c31f24f5fa7 -->
- Source: `cr-1edd9c31f24f5fa7`, row 343.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Shael Rune (#13)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Assassin Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Barbarian-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-375fc2260469f985 -->
- Source: `cr-375fc2260469f985`, row 378.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Thul Rune (#10)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Barbarian Skill Levels

</details>

<details>
<summary>Barbarian-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a5b59ac3e3eac4f2 -->
- Source: `cr-a5b59ac3e3eac4f2`, row 367.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Barbarian Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Barbarian-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-de17a2d5ce309ca1 -->
- Source: `cr-de17a2d5ce309ca1`, row 359.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Barbarian Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Barbarian-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b6fa89f748fed7d5 -->
- Source: `cr-b6fa89f748fed7d5`, row 345.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Dol Rune (#14)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Barbarian Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Barbarian-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-7923b84e81e43767 -->
- Source: `cr-7923b84e81e43767`, row 337.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Shael Rune (#13)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Barbarian Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Druid-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-81063ed375104f3d -->
- Source: `cr-81063ed375104f3d`, row 383.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Thul Rune (#10)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Druid Skill Levels

</details>

<details>
<summary>Druid-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-5de346e4ed5f1fca -->
- Source: `cr-5de346e4ed5f1fca`, row 372.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Druid Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Druid-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-82148d3c03261af9 -->
- Source: `cr-82148d3c03261af9`, row 364.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Druid Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Druid-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b6344e68d21e64dd -->
- Source: `cr-b6344e68d21e64dd`, row 350.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Dol Rune (#14)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Druid Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Druid-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-4b0e6c7faf9250cf -->
- Source: `cr-4b0e6c7faf9250cf`, row 342.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Shael Rune (#13)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Druid Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Necromancer-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-5a1e137586b5d642 -->
- Source: `cr-5a1e137586b5d642`, row 381.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Thul Rune (#10)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Necromancer Skill Levels

</details>

<details>
<summary>Necromancer-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-6ed4edbd556da64f -->
- Source: `cr-6ed4edbd556da64f`, row 370.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Necromancer Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Necromancer-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ed2626897fe2067c -->
- Source: `cr-ed2626897fe2067c`, row 362.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Necromancer Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Necromancer-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-eb7ef875942cc492 -->
- Source: `cr-eb7ef875942cc492`, row 348.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Dol Rune (#14)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Necromancer Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Necromancer-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b491ef1679350d1c -->
- Source: `cr-b491ef1679350d1c`, row 340.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Shael Rune (#13)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Necromancer Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Paladin-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-645684aaa8a12c5d -->
- Source: `cr-645684aaa8a12c5d`, row 382.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Thul Rune (#10)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Paladin Skill Levels

</details>

<details>
<summary>Paladin-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-24fb2fd8100950ea -->
- Source: `cr-24fb2fd8100950ea`, row 371.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Paladin Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Paladin-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-83b7b1783551c119 -->
- Source: `cr-83b7b1783551c119`, row 363.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Paladin Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Paladin-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-459f1dddbd11b7fd -->
- Source: `cr-459f1dddbd11b7fd`, row 349.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Dol Rune (#14)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Paladin Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Paladin-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-96c5280e611e0eef -->
- Source: `cr-96c5280e611e0eef`, row 341.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Shael Rune (#13)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Paladin Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Sorceress-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-503b42e1cd3c6714 -->
- Source: `cr-503b42e1cd3c6714`, row 379.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Thul Rune (#10)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Sorceress Skill Levels

</details>

<details>
<summary>Sorceress-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-4db7dccfc4f7a02d -->
- Source: `cr-4db7dccfc4f7a02d`, row 368.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Sorceress Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Sorceress-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-96d0a642ad147d86 -->
- Source: `cr-96d0a642ad147d86`, row 360.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Sorceress Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Sorceress-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-5b4d601cf3a3cb34 -->
- Source: `cr-5b4d601cf3a3cb34`, row 346.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Dol Rune (#14)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Sorceress Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Sorceress-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-9f8820a01edbe782 -->
- Source: `cr-9f8820a01edbe782`, row 338.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Shael Rune (#13)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Sorceress Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Warlock-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-264bcce3dfe374da -->
- Source: `cr-264bcce3dfe374da`, row 385.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Thul Rune (#10)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Warlock Skills

</details>

<details>
<summary>Warlock-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-9f630760eb943127 -->
- Source: `cr-9f630760eb943127`, row 374.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Warlock Skills
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Warlock-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-d76e047c0c568fb4 -->
- Source: `cr-d76e047c0c568fb4`, row 366.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Hel Rune (#15)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Warlock Skills
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Warlock-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b7011f71b1128b5a -->
- Source: `cr-b7011f71b1128b5a`, row 352.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Dol Rune (#14)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Warlock Skills
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Warlock-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-cd63264dd466a584 -->
- Source: `cr-cd63264dd466a584`, row 344.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Shael Rune (#13)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Warlock Skills
    - +(10-15)% Increased Attack Speed

</details>

</details>

<details>
<summary>Removed recipe definitions (105)</summary>

<details>
<summary>1 × 1H Weapons + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-d82b56779b3964b4 -->
- Source: `cr-d82b56779b3964b4`, row 462.
- Required ingredients:
  - 1 × 1H Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Cham Rune (#32)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(10-15)% to All Elemental Skill Damage
    - -(8-12)% to All Enemy Elemental Resistances

</details>

<details>
<summary>1 × 1H Weapons + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-cb6c1ecd66f19f16 -->
- Source: `cr-cb6c1ecd66f19f16`, row 458.
- Required ingredients:
  - 1 × 1H Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Ohm Rune (#27)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(150-200)% Enhanced Weapon Damage
    - Adds 30-60 Weapon Damage

</details>

<details>
<summary>1 × Amulet + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-86ad9f757672edb4 -->
- Source: `cr-86ad9f757672edb4`, row 289.
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 4 Battle Orders when you Level-Up

</details>

<details>
<summary>1 × Amulet + 1 × Jewel + 1 × Vex Rune (#26) + 1 × Lo Rune (#28) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-97efa4494fdf728e -->
- Source: `cr-97efa4494fdf728e`, row 294.
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Vex Rune (#26)
  - 1 × Lo Rune (#28)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +10% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Amulet + 1 × Jewel + 1 × Vex Rune (#26) + 1 × Lo Rune (#28) + 1 × Skull → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-dd71ac49774d48e6 -->
- Source: `cr-dd71ac49774d48e6`, row 293.
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Vex Rune (#26)
  - 1 × Lo Rune (#28)
  - 1 × Skull
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - Adds 25-35 Weapon Damage

</details>

<details>
<summary>1 × Any Shield + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-3a7b03847d4fef98 -->
- Source: `cr-3a7b03847d4fef98`, row 414.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 4 Holy Shield when you Level-Up
    - +5 to all Attributes

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Um Rune (#22) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b98da0a0d80e22f9 -->
- Source: `cr-b98da0a0d80e22f9`, row 441.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Um Rune (#22)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(30-40)% to All Resistances
    - +(5-10)% Physical Damage Reduction

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Ohm Rune (#27) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b0904fed91d337c6 -->
- Source: `cr-b0904fed91d337c6`, row 442.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ohm Rune (#27)
  - 1 × Cham Rune (#32)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(50-80)% Enhanced Weapon Damage

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Mal Rune (#23) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-1a30e285050b4b2b -->
- Source: `cr-1a30e285050b4b2b`, row 443.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Mal Rune (#23)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(10-15)% to All Elemental Skill Damage
    - -(10-15)% to All Enemy Elemental Resistances

</details>

<details>
<summary>1 × Any Weapon + 1 × Jewel + 1 × Lem Rune (#20) + 1 × El Rune (#1) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a76560643da2bcee -->
- Source: `cr-a76560643da2bcee`, row 453.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Lem Rune (#20)
  - 1 × El Rune (#1)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to All Skills
    - +(125-150)% Enhanced Weapon Damage
    - +30% Increased Attack Speed

</details>

<details>
<summary>1 × Any Weapon + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-095432cb9120b76b -->
- Source: `cr-095432cb9120b76b`, row 454.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to All Skills
    - -10% to All Enemy Elemental Resistances
    - +20% Faster Cast Rate

</details>

<details>
<summary>1 × Any Weapon + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-0d8a3bb5fc60f26a -->
- Source: `cr-0d8a3bb5fc60f26a`, row 450.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ral Rune (#8)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - +85% Enhanced Weapon Damage
    - +20% Increased Attack Speed

</details>

<details>
<summary>1 × Any Weapon + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-8c1bfbad266784fb -->
- Source: `cr-8c1bfbad266784fb`, row 451.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Ral Rune (#8)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - +5% to All Elemental Skill Damage
    - +15% Faster Cast Rate

</details>

<details>
<summary>1 × Armor + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-51dc1daa3f62441b -->
- Source: `cr-51dc1daa3f62441b`, row 388.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 5 Oak Sage when you Level-Up

</details>

<details>
<summary>1 × Armor + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Ber Rune (#30) + 1 × Um Rune (#22) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-4a3ab0029693b5d9 -->
- Source: `cr-4a3ab0029693b5d9`, row 407.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Ber Rune (#30)
  - 1 × Um Rune (#22)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(150-175)% Enhanced Defense
    - +(20-30)% to All Resistances
    - +(7-10)% Physical Damage Reduction

</details>

<details>
<summary>1 × Belt + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-388560ecd027d83a -->
- Source: `cr-388560ecd027d83a`, row 315.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Frozen Armor when you Level-Up

</details>

<details>
<summary>1 × Belt + 1 × Jewel + 1 × Cham Rune (#32) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-587deaca2a4d6625 -->
- Source: `cr-587deaca2a4d6625`, row 319.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Cham Rune (#32)
  - 1 × Jah Rune (#31)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - ModStr5z \[1\] (translation template unsupported; review)
    - +(10-15)% Increased Maximum Life
    - **Review:** one or more output properties retain untranslated keys or arguments.

</details>

<details>
<summary>1 × Belt + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-283226654babc473 -->
- Source: `cr-283226654babc473`, row 320.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - Adds 20-30 Weapon Damage

</details>

<details>
<summary>1 × Belt + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-2009fd654731cc08 -->
- Source: `cr-2009fd654731cc08`, row 321.
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - +(5-10)% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Boots + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-470e519e46806c6d -->
- Source: `cr-470e519e46806c6d`, row 322.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Burst of Speed when you Level-Up

</details>

<details>
<summary>1 × Boots + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-488412fc20be2754 -->
- Source: `cr-488412fc20be2754`, row 325.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Ohm Rune (#27)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - Adds 20-30 Weapon Damage
    - +(20-30)% Faster Run/Walk Speed

</details>

<details>
<summary>1 × Boots + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-12472c68f7ae1199 -->
- Source: `cr-12472c68f7ae1199`, row 326.
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - +(5-10)% to All Elemental Skill Damage
    - +(20-30)% Faster Run/Walk Speed

</details>

<details>
<summary>1 × Gloves + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-59278bee00690c3f -->
- Source: `cr-59278bee00690c3f`, row 333.
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 4 Battle Command when you Level-Up

</details>

<details>
<summary>1 × Gloves + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-85de973a630f818e -->
- Source: `cr-85de973a630f818e`, row 352.
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - Adds 20-40 Weapon Damage
    - +0.125% Chance of Crushing Blow (Based on Character Level)

</details>

<details>
<summary>1 × Gloves + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-8ee0403a68424439 -->
- Source: `cr-8ee0403a68424439`, row 353.
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - +(5-10)% to All Elemental Skill Damage
    - +(10-20)% Faster Cast Rate

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Amethyst → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-4a004e39db870438 -->
- Source: `cr-4a004e39db870438`, row 510.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Thul Rune (#10)
  - 1 × Vex Rune (#26)
  - 1 × Amethyst
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 0; max: 2; (Amazon Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Chaos Onyx → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-38d63c39d1d9dc62 -->
- Source: `cr-38d63c39d1d9dc62`, row 512.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Thul Rune (#10)
  - 1 × Vex Rune (#26)
  - 1 × Chaos Onyx
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 56; max: 58; (Warlock Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Diamond → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-97aaff3a076fac7b -->
- Source: `cr-97aaff3a076fac7b`, row 511.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Thul Rune (#10)
  - 1 × Vex Rune (#26)
  - 1 × Diamond
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 24; max: 26; (Paladin Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Emerald → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-8f82963a02f54750 -->
- Source: `cr-8f82963a02f54750`, row 508.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Thul Rune (#10)
  - 1 × Vex Rune (#26)
  - 1 × Emerald
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 40; max: 42; (Druid Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ee57593a388b1769 -->
- Source: `cr-ee57593a388b1769`, row 506.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Thul Rune (#10)
  - 1 × Vex Rune (#26)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 32; max: 34; (Barbarian Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e62ef03a3410b23e -->
- Source: `cr-e62ef03a3410b23e`, row 507.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Thul Rune (#10)
  - 1 × Vex Rune (#26)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 8; max: 10; (Sorceress Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Skull → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-1681d839be7f1ff6 -->
- Source: `cr-1681d839be7f1ff6`, row 509.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Thul Rune (#10)
  - 1 × Vex Rune (#26)
  - 1 × Skull
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 16; max: 18; (Necromancer Only))

</details>

<details>
<summary>1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Topaz → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-22af4f3a564bc5eb -->
- Source: `cr-22af4f3a564bc5eb`, row 505.
- Required ingredients:
  - 1 × Grand Charm
    - Ingredient requirement: Magic Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Thul Rune (#10)
  - 1 × Vex Rune (#26)
  - 1 × Topaz
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 Random Skill Tab (selection=stat: item\_addskill\_tab; min: 48; max: 50; (Assassin Only))

</details>

<details>
<summary>1 × Helm + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-921161b29a188719 -->
- Source: `cr-921161b29a188719`, row 360.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Shout when you Level-Up

</details>

<details>
<summary>1 × Helm + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-0dd083c0842f6b2e -->
- Source: `cr-0dd083c0842f6b2e`, row 381.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Jah Rune (#31)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(5-10)% Physical Damage Reduction
    - +(5-10)% Increased Maximum Life

</details>

<details>
<summary>1 × Helm + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-19add2e7da50aa2c -->
- Source: `cr-19add2e7da50aa2c`, row 379.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-2) to All Skills
    - +(20-30)% Enhanced Weapon Damage

</details>

<details>
<summary>1 × Helm + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-21d63be7decb0f57 -->
- Source: `cr-21d63be7decb0f57`, row 380.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(1-2) to All Skills
    - +(5-10)% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Missile Weapon + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-6cffb30cc08c02b1 -->
- Source: `cr-6cffb30cc08c02b1`, row 461.
- Required ingredients:
  - 1 × Missile Weapon
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Cham Rune (#32)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(15-20)% to All Elemental Skill Damage
    - -(12-16)% to All Enemy Elemental Resistances

</details>

<details>
<summary>1 × Missile Weapon + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-483e271fee1c97cf -->
- Source: `cr-483e271fee1c97cf`, row 457.
- Required ingredients:
  - 1 × Missile Weapon
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Ohm Rune (#27)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(220-250)% Enhanced Weapon Damage
    - Adds 60-100 Weapon Damage

</details>

<details>
<summary>1 × Ring + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-7100926e4b28aa70 -->
- Source: `cr-7100926e4b28aa70`, row 301.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Fade when you Level-Up

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Sur Rune (#29) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-111f15e7b150f71f -->
- Source: `cr-111f15e7b150f71f`, row 305.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Sur Rune (#29)
  - 1 × Jah Rune (#31)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +(5-8)% Increased Maximum Life
    - +(5-8)% Increased Maximum Mana

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Gul Rune (#25) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-1591ea69330495ad -->
- Source: `cr-1591ea69330495ad`, row 306.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Gul Rune (#25)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - +10% Increased Attack Speed
    - +10% Faster Cast Rate

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-55a93397644468a5 -->
- Source: `cr-55a93397644468a5`, row 307.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - Adds 15-25 Weapon Damage

</details>

<details>
<summary>1 × Ring + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-4d810a975fca703a -->
- Source: `cr-4d810a975fca703a`, row 308.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
  - 1 × Vex Rune (#26)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +1 to All Skills
    - +5% to All Elemental Skill Damage

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-2bdef2dbfa4f8bf1 -->
- Source: `cr-2bdef2dbfa4f8bf1`, row 303.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Amn Rune (#11)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +20% Chance Items Roll Magic or Better

</details>

<details>
<summary>1 × Slam Weapons + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ae203e8846832f74 -->
- Source: `cr-ae203e8846832f74`, row 459.
- Required ingredients:
  - 1 × Slam Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Cham Rune (#32)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(15-20)% to All Elemental Skill Damage
    - -(12-16)% to All Enemy Elemental Resistances

</details>

<details>
<summary>1 × Slam Weapons + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-5c2ddc416e3316d6 -->
- Source: `cr-5c2ddc416e3316d6`, row 455.
- Required ingredients:
  - 1 × Slam Weapons
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Ohm Rune (#27)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(220-250)% Enhanced Weapon Damage
    - Adds 60-100 Weapon Damage

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ffb6c45aef13280a -->
- Source: `cr-ffb6c45aef13280a`, row 460.
- Required ingredients:
  - 1 × Spears and Polearms
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Cham Rune (#32)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(15-20)% to All Elemental Skill Damage
    - -(12-16)% to All Enemy Elemental Resistances

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-da7a82de6a420904 -->
- Source: `cr-da7a82de6a420904`, row 456.
- Required ingredients:
  - 1 × Spears and Polearms
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Ber Rune (#30)
  - 1 × Ohm Rune (#27)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Crafted Item
    - +2 to All Skills
    - +(220-250)% Enhanced Weapon Damage
    - Adds 60-100 Weapon Damage

</details>

<details>
<summary>Amazon-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-27b4bd7d34488188 -->
- Source: `cr-27b4bd7d34488188`, row 435.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Amazon Skill Levels
    - +(5-8)% to All Elemental Skill Damage
    - -(5-8)% to All Enemy Elemental Resistances

</details>

<details>
<summary>Amazon-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a8672634ceba8e93 -->
- Source: `cr-a8672634ceba8e93`, row 427.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Amazon Skill Levels
    - +(20-30)% Enhanced Weapon Damage

</details>

<details>
<summary>Amazon-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-af85b50f0e73de92 -->
- Source: `cr-af85b50f0e73de92`, row 417.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Amn Rune (#11)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Amazon Skill Levels

</details>

<details>
<summary>Amazon-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-c9646c4e5904202f -->
- Source: `cr-c9646c4e5904202f`, row 401.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Amazon Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Amazon-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-98d27a9d340e1d5c -->
- Source: `cr-98d27a9d340e1d5c`, row 393.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Amazon Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Amazon-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-c6b00d9386e8503a -->
- Source: `cr-c6b00d9386e8503a`, row 365.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Amazon Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Amazon-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ced836938b6248a5 -->
- Source: `cr-ced836938b6248a5`, row 373.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Amazon Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Assassin-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-2911a6ea521c1204 -->
- Source: `cr-2911a6ea521c1204`, row 439.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Assassin Skill Levels
    - +(5-8)% to All Elemental Skill Damage
    - -(5-8)% to All Enemy Elemental Resistances

</details>

<details>
<summary>Assassin-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ebb2b22567164477 -->
- Source: `cr-ebb2b22567164477`, row 431.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Assassin Skill Levels
    - +(20-30)% Enhanced Weapon Damage

</details>

<details>
<summary>Assassin-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-0ec4be9eefa3af46 -->
- Source: `cr-0ec4be9eefa3af46`, row 421.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Amn Rune (#11)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Assassin Skill Levels

</details>

<details>
<summary>Assassin-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-5b7603729b76e1db -->
- Source: `cr-5b7603729b76e1db`, row 405.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Assassin Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Assassin-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-f12341cfb3533570 -->
- Source: `cr-f12341cfb3533570`, row 397.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Assassin Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Assassin-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-35f6c661a6236e96 -->
- Source: `cr-35f6c661a6236e96`, row 369.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Assassin Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Assassin-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-3e1f2f61aa9dd3c1 -->
- Source: `cr-3e1f2f61aa9dd3c1`, row 377.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Assassin Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Barbarian-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-85a261f8a1df2cc4 -->
- Source: `cr-85a261f8a1df2cc4`, row 433.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Barbarian Skill Levels
    - +(5-8)% to All Elemental Skill Damage
    - -(5-8)% to All Enemy Elemental Resistances

</details>

<details>
<summary>Barbarian-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-9eb43a6031b26b37 -->
- Source: `cr-9eb43a6031b26b37`, row 425.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Barbarian Skill Levels
    - +(20-30)% Enhanced Weapon Damage

</details>

<details>
<summary>Barbarian-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-80fc93d67c8b9286 -->
- Source: `cr-80fc93d67c8b9286`, row 415.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Amn Rune (#11)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Barbarian Skill Levels

</details>

<details>
<summary>Barbarian-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-74ced748f397f49b -->
- Source: `cr-74ced748f397f49b`, row 399.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Barbarian Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Barbarian-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ab9c6ab62ee9a830 -->
- Source: `cr-ab9c6ab62ee9a830`, row 391.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Barbarian Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Barbarian-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e6c1e2794db99b56 -->
- Source: `cr-e6c1e2794db99b56`, row 363.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Barbarian Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Barbarian-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-eeea4b7952340081 -->
- Source: `cr-eeea4b7952340081`, row 371.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Barbarian Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Druid-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-6cd4b12f61e336ac -->
- Source: `cr-6cd4b12f61e336ac`, row 438.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Druid Skill Levels
    - +(5-8)% to All Elemental Skill Damage
    - -(5-8)% to All Enemy Elemental Resistances

</details>

<details>
<summary>Druid-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-49f91414de20ad7f -->
- Source: `cr-49f91414de20ad7f`, row 430.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Druid Skill Levels
    - +(20-30)% Enhanced Weapon Damage

</details>

<details>
<summary>Druid-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-fa315acdd0dabe5e -->
- Source: `cr-fa315acdd0dabe5e`, row 420.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Amn Rune (#11)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Druid Skill Levels

</details>

<details>
<summary>Druid-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-d5661bb6a4cc9a53 -->
- Source: `cr-d5661bb6a4cc9a53`, row 404.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Druid Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Druid-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-eb17e5ecfc20c648 -->
- Source: `cr-eb17e5ecfc20c648`, row 396.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Druid Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Druid-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-38ae07f7c6454a1e -->
- Source: `cr-38ae07f7c6454a1e`, row 368.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Druid Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Druid-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-40d670f7cabfaf49 -->
- Source: `cr-40d670f7cabfaf49`, row 376.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Druid Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Necromancer-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-182e93a2ab057759 -->
- Source: `cr-182e93a2ab057759`, row 436.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Necromancer Skill Levels
    - +(5-8)% to All Elemental Skill Damage
    - -(5-8)% to All Enemy Elemental Resistances

</details>

<details>
<summary>Necromancer-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-b41e1a58bb79982a -->
- Source: `cr-b41e1a58bb79982a`, row 428.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Necromancer Skill Levels
    - +(20-30)% Enhanced Weapon Damage

</details>

<details>
<summary>Necromancer-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-712c62877c433c41 -->
- Source: `cr-712c62877c433c41`, row 418.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Amn Rune (#11)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Necromancer Skill Levels

</details>

<details>
<summary>Necromancer-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ae6719facba62186 -->
- Source: `cr-ae6719facba62186`, row 402.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Necromancer Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Necromancer-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-654e5087e389442d -->
- Source: `cr-654e5087e389442d`, row 394.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Necromancer Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Necromancer-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-9940cdc1f3910a51 -->
- Source: `cr-9940cdc1f3910a51`, row 366.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Necromancer Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Necromancer-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-903ee4c1ee5ddae6 -->
- Source: `cr-903ee4c1ee5ddae6`, row 374.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Necromancer Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Paladin-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-23040fe48b5411cc -->
- Source: `cr-23040fe48b5411cc`, row 437.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Paladin Skill Levels
    - +(5-8)% to All Elemental Skill Damage
    - -(5-8)% to All Enemy Elemental Resistances

</details>

<details>
<summary>Paladin-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-a9a372ceef90339f -->
- Source: `cr-a9a372ceef90339f`, row 429.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Paladin Skill Levels
    - +(20-30)% Enhanced Weapon Damage

</details>

<details>
<summary>Paladin-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e2d5984eceaf0a7e -->
- Source: `cr-e2d5984eceaf0a7e`, row 419.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Amn Rune (#11)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Paladin Skill Levels

</details>

<details>
<summary>Paladin-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-ada9e96dfedfdbf3 -->
- Source: `cr-ada9e96dfedfdbf3`, row 403.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Paladin Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Paladin-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-d9ed4dddf7482fe8 -->
- Source: `cr-d9ed4dddf7482fe8`, row 395.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Paladin Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Paladin-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-3b9857de02cd09be -->
- Source: `cr-3b9857de02cd09be`, row 367.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Paladin Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Paladin-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-43c0c0de07476ee9 -->
- Source: `cr-43c0c0de07476ee9`, row 375.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Paladin Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Sorceress-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-31279467d2137277 -->
- Source: `cr-31279467d2137277`, row 434.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Sorceress Skill Levels
    - +(5-8)% to All Elemental Skill Damage
    - -(5-8)% to All Enemy Elemental Resistances

</details>

<details>
<summary>Sorceress-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-6e86892cbd194004 -->
- Source: `cr-6e86892cbd194004`, row 426.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Sorceress Skill Levels
    - +(20-30)% Enhanced Weapon Damage

</details>

<details>
<summary>Sorceress-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e9ad2e9781814f8b -->
- Source: `cr-e9ad2e9781814f8b`, row 416.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Amn Rune (#11)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Sorceress Skill Levels

</details>

<details>
<summary>Sorceress-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-567a116ddd5a1f38 -->
- Source: `cr-567a116ddd5a1f38`, row 400.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Sorceress Skill Levels
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Sorceress-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e70e4f300b83ce83 -->
- Source: `cr-e70e4f300b83ce83`, row 392.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Sorceress Skill Levels
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Sorceress-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-834b562e3b58bc6f -->
- Source: `cr-834b562e3b58bc6f`, row 364.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Sorceress Skill Levels
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Sorceress-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-7a496d2e36258d04 -->
- Source: `cr-7a496d2e36258d04`, row 372.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Sorceress Skill Levels
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Warlock-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e39ae592408d1d81 -->
- Source: `cr-e39ae592408d1d81`, row 440.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Warlock Skills
    - +(5-8)% to All Elemental Skill Damage
    - -(5-8)% to All Enemy Elemental Resistances

</details>

<details>
<summary>Warlock-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-eb2c4341cd3472d2 -->
- Source: `cr-eb2c4341cd3472d2`, row 432.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Mal Rune (#23)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +(1-2) to Warlock Skills
    - +(20-30)% Enhanced Weapon Damage

</details>

<details>
<summary>Warlock-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-d99b4ade346c6af9 -->
- Source: `cr-d99b4ade346c6af9`, row 422.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Amn Rune (#11)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Warlock Skills

</details>

<details>
<summary>Warlock-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-6eea7bafc15e803e -->
- Source: `cr-6eea7bafc15e803e`, row 406.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Dol Rune (#14)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Warlock Skills
    - +(30-50) to Mana
    - +(10-15)% Faster Cast Rate

</details>

<details>
<summary>Warlock-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e571b29896e4d585 -->
- Source: `cr-e571b29896e4d585`, row 398.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × Shael Rune (#13)
  - 1 × Gem
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Warlock Skills
    - +(30-50) to Life
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Warlock-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-e05ed8cefdab9219 -->
- Source: `cr-e05ed8cefdab9219`, row 370.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Ruby
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Warlock Skills
    - +(10-15)% Increased Attack Speed

</details>

<details>
<summary>Warlock-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-d75d2fcef878cf6e -->
- Source: `cr-d75d2fcef878cf6e`, row 378.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Rare Item
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Pul Rune (#21)
  - 1 × El Rune (#1)
  - 1 × Sapphire
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +1 to Warlock Skills
    - +(10-15)% Faster Cast Rate

</details>

</details>

</details>

<details>
<summary>Item Enchantment Recipe — 0 modified, 278 added, 341 removed</summary>

<details>
<summary>Added recipe definitions (278)</summary>

<details>
<summary>1 × Amulet + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-227e1cae24258395 -->
- Source: `cr-227e1cae24258395`, row 712.
- Required ingredients:
  - 1 × Amulet
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 Random Amazon Skill (selection=stat: item\_singleskill; min: 6; max: 35)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Amethyst → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b650016c0532ea1e -->
- Source: `cr-b650016c0532ea1e`, row 701.
- Required ingredients:
  - 1 × Amulet
  - 1 × Amethyst
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Chaos Onyx + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1c0e82360d805fd7 -->
- Source: `cr-1c0e82360d805fd7`, row 714.
- Required ingredients:
  - 1 × Amulet
  - 1 × Chaos Onyx
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 Random Warlock Skill (selection=stat: item\_singleskill; min: 373; max: 402)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-294e5500dddd8c61 -->
- Source: `cr-294e5500dddd8c61`, row 706.
- Required ingredients:
  - 1 × Amulet
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c5c92b2cf23a5c9a -->
- Source: `cr-c5c92b2cf23a5c9a`, row 713.
- Required ingredients:
  - 1 × Amulet
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 Random Paladin Skill (selection=stat: item\_singleskill; min: 96; max: 125)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Emerald + 1 × Jewel + 1 × Shael Rune (#13) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7a40038e38337ad3 -->
- Source: `cr-7a40038e38337ad3`, row 715.
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Shael Rune (#13)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2e19cfcce0d2946d -->
- Source: `cr-2e19cfcce0d2946d`, row 710.
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 Random Druid Skill (selection=stat: item\_singleskill; min: 221; max: 250)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7fcce8f3c9e086bd -->
- Source: `cr-7fcce8f3c9e086bd`, row 705.
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Emerald → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c760741a3452f496 -->
- Source: `cr-c760741a3452f496`, row 699.
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Brak Rune (#34) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-18804fe57540ff87 -->
- Source: `cr-18804fe57540ff87`, row 733.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to All Skills
    - -5% to Enemy Physical Damage Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Grit Rune (#37) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-71930ffebc753f94 -->
- Source: `cr-71930ffebc753f94`, row 736.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to All Skills
    - -5% to All Enemy Elemental Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Hev Rune (#39) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4937500f2dafa572 -->
- Source: `cr-4937500f2dafa572`, row 737.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +50% Enhanced Weapon Damage
    - -5% to Enemy Physical Damage Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Myr Rune (#36) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f0248ff5e67b6565 -->
- Source: `cr-f0248ff5e67b6565`, row 735.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Myr Rune (#36)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to All Skills
    - -5% to Enemy Magic Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Zeph Rune (#35) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6f8fcfed113ac236 -->
- Source: `cr-6f8fcfed113ac236`, row 734.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to All Skills
    - +5% to All Elemental Skill Damage
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Zod Rune (#33) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9711cfdc9f472558 -->
- Source: `cr-9711cfdc9f472558`, row 732.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zod Rune (#33)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to All Skills
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bee1460f3747a801 -->
- Source: `cr-bee1460f3747a801`, row 723.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Diamond
  - 1 × Um Rune (#22)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Fal Rune (#19) + 1 × Amethyst → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-774685a186c2b232 -->
- Source: `cr-774685a186c2b232`, row 721.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Fal Rune (#19)
  - 1 × Amethyst
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Strength
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Fal Rune (#19) + 1 × Emerald → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bcc8cda1ae30f54a -->
- Source: `cr-bcc8cda1ae30f54a`, row 720.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Fal Rune (#19)
  - 1 × Emerald
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Dexterity
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Fal Rune (#19) + 1 × Sapphire → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-209a2ba155a74744 -->
- Source: `cr-209a2ba155a74744`, row 722.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Fal Rune (#19)
  - 1 × Sapphire
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Energy
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Ruby → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8150e3deb96e800f -->
- Source: `cr-8150e3deb96e800f`, row 718.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Ruby
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40 to Life
    - +4 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Sapphire → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-02bf23e78f67ed7e -->
- Source: `cr-02bf23e78f67ed7e`, row 719.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Sapphire
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40 to Mana
    - +4 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Topaz → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a9ac63ce4833ad71 -->
- Source: `cr-a9ac63ce4833ad71`, row 717.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Topaz
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +25% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d585a62e0f44b3b8 -->
- Source: `cr-d585a62e0f44b3b8`, row 708.
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 Random Barbarian Skill (selection=stat: item\_singleskill; min: 126; max: 155)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9435520049a14af4 -->
- Source: `cr-9435520049a14af4`, row 702.
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Ruby → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-23390fc05a27c82d -->
- Source: `cr-23390fc05a27c82d`, row 697.
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Sapphire + 1 × Jewel + 1 × Dol Rune (#14) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-dc1f5cf8d495242a -->
- Source: `cr-dc1f5cf8d495242a`, row 716.
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Dol Rune (#14)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-56113b890816490b -->
- Source: `cr-56113b890816490b`, row 709.
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 Random Sorceress Skill (selection=stat: item\_singleskill; min: 36; max: 65)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ed1a988c1d2c5747 -->
- Source: `cr-ed1a988c1d2c5747`, row 703.
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Sapphire → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cb108625ff19caf4 -->
- Source: `cr-cb108625ff19caf4`, row 698.
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8bc375b45363bd63 -->
- Source: `cr-8bc375b45363bd63`, row 711.
- Required ingredients:
  - 1 × Amulet
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 Random Necromancer Skill (selection=stat: item\_singleskill; min: 66; max: 95)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Skull → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-dacbbae9bba88cec -->
- Source: `cr-dacbbae9bba88cec`, row 700.
- Required ingredients:
  - 1 × Amulet
  - 1 × Skull
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-baac41877e9ed76a -->
- Source: `cr-baac41877e9ed76a`, row 707.
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 Random Assassin Skill (selection=stat: item\_singleskill; min: 251; max: 280)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0d1b9f759be8c0fa -->
- Source: `cr-0d1b9f759be8c0fa`, row 704.
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Topaz → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d532c98dc320c5df -->
- Source: `cr-d532c98dc320c5df`, row 696.
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f5c3333454c17e4b -->
- Source: `cr-f5c3333454c17e4b`, row 885.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-aa7dc5a555534703 -->
- Source: `cr-aa7dc5a555534703`, row 891.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-da0015d22300b6f3 -->
- Source: `cr-da0015d22300b6f3`, row 884.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-28a3a0c201b40d1f -->
- Source: `cr-28a3a0c201b40d1f`, row 890.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ea004ead39c9bb79 -->
- Source: `cr-ea004ead39c9bb79`, row 892.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-896e70e4a80a8828 -->
- Source: `cr-896e70e4a80a8828`, row 893.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Damage Taken Added To Mana
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Conversion + 1 × Grit Rune (#37) + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-581e81209944639a -->
- Source: `cr-581e81209944639a`, row 908.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Conversion
  - 1 × Grit Rune (#37)
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - 15% Increased Chance of Blocking
    - +15% Faster Block Rate
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c7846ac6ab9d76e0 -->
- Source: `cr-c7846ac6ab9d76e0`, row 901.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Strength
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9fd57f8f88f25c8f -->
- Source: `cr-9fd57f8f88f25c8f`, row 905.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - Physical Damage Reduced By 10
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Chaos Onyx + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-de52444b3525fdf5 -->
- Source: `cr-de52444b3525fdf5`, row 904.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Chaos Onyx
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - Magic Damage Reduced By 10
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Diamond + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d2a960be0d215c40 -->
- Source: `cr-d2a960be0d215c40`, row 907.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - 10% Increased Chance of Blocking
    - +15% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8b036db5fbf96a88 -->
- Source: `cr-8b036db5fbf96a88`, row 900.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Dexterity
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-abe0584c4c31d8e2 -->
- Source: `cr-abe0584c4c31d8e2`, row 898.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Faster Hit Recovery
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0c22d25cb3ff2a2f -->
- Source: `cr-0c22d25cb3ff2a2f`, row 903.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Diamond
  - 1 × Um Rune (#22)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Ruby + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5c4c3a2a169e7983 -->
- Source: `cr-5c4c3a2a169e7983`, row 897.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Faster Block Rate
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-239b3e32a0cdea7e -->
- Source: `cr-239b3e32a0cdea7e`, row 902.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Energy
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-fc705579b0d4560e -->
- Source: `cr-fc705579b0d4560e`, row 896.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Amn Rune (#11)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - Attacker Takes Damage of 100
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a26fbdfd5a5bbdd8 -->
- Source: `cr-a26fbdfd5a5bbdd8`, row 899.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40% Mana Regeneration
    - +10 to Energy
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e94b0f4731260e99 -->
- Source: `cr-e94b0f4731260e99`, row 906.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +30% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-855331e644198842 -->
- Source: `cr-855331e644198842`, row 887.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bb563129ae68a955 -->
- Source: `cr-bb563129ae68a955`, row 888.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-48f3b7b2b8668a3d -->
- Source: `cr-48f3b7b2b8668a3d`, row 886.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Sol Rune (#12) + 1 × Jewel + 1 × Amethyst → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5b44594e07d7e2c4 -->
- Source: `cr-5b44594e07d7e2c4`, row 894.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Amethyst
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - Physical Damage Reduced By 5
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Sol Rune (#12) + 1 × Jewel + 1 × Chaos Onyx → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-839fd93d969d1026 -->
- Source: `cr-839fd93d969d1026`, row 895.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Chaos Onyx
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - Physical Damage Reduced By 5
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1ca33ad627343590 -->
- Source: `cr-1ca33ad627343590`, row 883.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-937c81b6662fe19c -->
- Source: `cr-937c81b6662fe19c`, row 889.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4fe47d24c53c8cd9 -->
- Source: `cr-4fe47d24c53c8cd9`, row 937.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +100 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1e5b02d7d6bcfb9e -->
- Source: `cr-1e5b02d7d6bcfb9e`, row 942.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +4 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4ce9ee955835f161 -->
- Source: `cr-4ce9ee955835f161`, row 939.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Nef Rune (#4) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e46aa8e86066fc65 -->
- Source: `cr-e46aa8e86066fc65`, row 953.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Nef Rune (#4)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +50% Enhanced Weapon Damage
    - +200 to Attack Rating
    - ModStr1y \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-372dee4a1ebb9953 -->
- Source: `cr-372dee4a1ebb9953`, row 952.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +50% Enhanced Weapon Damage
    - +200 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f73797494134b1ea -->
- Source: `cr-f73797494134b1ea`, row 945.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +25% Enhanced Weapon Damage
    - +100 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ca7fec9605e734da -->
- Source: `cr-ca7fec9605e734da`, row 944.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Lem Rune (#20)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +200 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-df021fbfc30b0e75 -->
- Source: `cr-df021fbfc30b0e75`, row 947.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +25% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Diamond + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4d8d39ecf90d29a7 -->
- Source: `cr-4d8d39ecf90d29a7`, row 951.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Lo Rune (#28)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - Adds 20-200 Weapon Fire Damage
    - Adds 20-200 Weapon Cold Damage
    - Adds 20-200 Weapon Lightning Damage
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-743a8be7a0cf13a1 -->
- Source: `cr-743a8be7a0cf13a1`, row 950.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Ohm Rune (#27)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +30 to Minimum Weapon Damage
    - +50 to Maximum Weapon Damage
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Amethyst + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-29a22c08680567d6 -->
- Source: `cr-29a22c08680567d6`, row 954.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Amethyst
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to All Skills
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Chaos Onyx + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-06f820f1b021dd60 -->
- Source: `cr-06f820f1b021dd60`, row 959.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Chaos Onyx
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to Magic Skill Damage
    - -5% to Enemy Magic Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Emerald + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a2998f6a8b640cbe -->
- Source: `cr-a2998f6a8b640cbe`, row 958.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Emerald
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to Poison Skill Damage
    - -5% to Enemy Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Ruby + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3792e8f83660db9b -->
- Source: `cr-3792e8f83660db9b`, row 955.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Ruby
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to Fire Skill Damage
    - -5% to Enemy Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Sapphire + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bfd4769690c836e4 -->
- Source: `cr-bfd4769690c836e4`, row 956.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Sapphire
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to Cold Skill Damage
    - -5% to Enemy Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Skull + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-078bbdc0fc4f064c -->
- Source: `cr-078bbdc0fc4f064c`, row 960.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Skull
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +50% Enhanced Weapon Damage
    - -5% to Enemy Physical Damage Resistance
    - +200 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Topaz + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-79b212e305e98855 -->
- Source: `cr-79b212e305e98855`, row 957.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Topaz
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to Lightning Skill Damage
    - -5% to Enemy Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-12c2185d7eb4c1e3 -->
- Source: `cr-12c2185d7eb4c1e3`, row 946.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +25% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9b58a569da146b30 -->
- Source: `cr-9b58a569da146b30`, row 949.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Vex Rune (#26)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +8% Mana stolen per hit
    - +8% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9aef1e51c820f4bb -->
- Source: `cr-9aef1e51c820f4bb`, row 948.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +30% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Shadows + 1 × Orb of Conversion + 1 × Brak Rune (#34) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e580eef25c3ae575 -->
- Source: `cr-e580eef25c3ae575`, row 961.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Shadows
  - 1 × Orb of Conversion
  - 1 × Brak Rune (#34)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +100% Enhanced Weapon Damage
    - -10% to Enemy Physical Damage Resistance
    - +300 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Shadows + 1 × Orb of Conversion + 1 × Myr Rune (#36) + 1 × Hev Rune (#39) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1dfea168187b6c50 -->
- Source: `cr-1dfea168187b6c50`, row 963.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Shadows
  - 1 × Orb of Conversion
  - 1 × Myr Rune (#36)
  - 1 × Hev Rune (#39)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% to Magic Skill Damage
    - -10% to Enemy Magic Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Shadows + 1 × Orb of Conversion + 1 × Zeph Rune (#35) + 1 × Grit Rune (#37) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3848ea8a569222eb -->
- Source: `cr-3848ea8a569222eb`, row 962.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Orb of Shadows
  - 1 × Orb of Conversion
  - 1 × Zeph Rune (#35)
  - 1 × Grit Rune (#37)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% to All Elemental Skill Damage
    - -10% to All Enemy Elemental Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0515614163230354 -->
- Source: `cr-0515614163230354`, row 941.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +4 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d5de8f90f197db47 -->
- Source: `cr-d5de8f90f197db47`, row 938.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9169326f007fbeaf -->
- Source: `cr-9169326f007fbeaf`, row 940.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +4% Mana stolen per hit
    - +4% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3067dfd18b74482b -->
- Source: `cr-3067dfd18b74482b`, row 943.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Minimum Weapon Damage
    - +25 to Maximum Weapon Damage
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Weapon + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7ef543ad1ec597ae -->
- Source: `cr-7ef543ad1ec597ae`, row 936.
- Required ingredients:
  - 1 × Any Weapon
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f84175ad1155b6ea -->
- Source: `cr-f84175ad1155b6ea`, row 911.
- Required ingredients:
  - 1 × Armor
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-780fc4c640a786b8 -->
- Source: `cr-780fc4c640a786b8`, row 917.
- Required ingredients:
  - 1 × Armor
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-521a094592680f92 -->
- Source: `cr-521a094592680f92`, row 910.
- Required ingredients:
  - 1 × Armor
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-860abd3cc2278f52 -->
- Source: `cr-860abd3cc2278f52`, row 916.
- Required ingredients:
  - 1 × Armor
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c986d24f86cda30c -->
- Source: `cr-c986d24f86cda30c`, row 918.
- Required ingredients:
  - 1 × Armor
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0010c1cafbf1db1d -->
- Source: `cr-0010c1cafbf1db1d`, row 919.
- Required ingredients:
  - 1 × Armor
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Damage Taken Added To Mana
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Conversion + 1 × Grit Rune (#37) + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8d59156cbbed98d1 -->
- Source: `cr-8d59156cbbed98d1`, row 935.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Conversion
  - 1 × Grit Rune (#37)
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1% to All Maximum Resistances
    - +5% to All Attributes
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d19e3a223b25828d -->
- Source: `cr-d19e3a223b25828d`, row 925.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Strength
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2c61e548cb4ea3d6 -->
- Source: `cr-2c61e548cb4ea3d6`, row 929.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - Physical Damage Reduced By 10
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d9c03f731778577a -->
- Source: `cr-d9c03f731778577a`, row 934.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +100% Enhanced Defense
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Chaos Onyx + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-eb6a34818bdab810 -->
- Source: `cr-eb6a34818bdab810`, row 928.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Chaos Onyx
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - Magic Damage Reduced By 10
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Diamond + 1 × Ber Rune (#30) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5225cd8c5f94f7ec -->
- Source: `cr-5225cd8c5f94f7ec`, row 932.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Ber Rune (#30)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-11af9bde3a048985 -->
- Source: `cr-11af9bde3a048985`, row 924.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Dexterity
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-73b93e06751e076b -->
- Source: `cr-73b93e06751e076b`, row 922.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Faster Hit Recovery
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9f76297784d2aede -->
- Source: `cr-9f76297784d2aede`, row 927.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Diamond
  - 1 × Um Rune (#22)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f993f349e14ed553 -->
- Source: `cr-f993f349e14ed553`, row 933.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-29af47cc4a1d310f -->
- Source: `cr-29af47cc4a1d310f`, row 926.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Energy
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f6f9cda5f79c0c5d -->
- Source: `cr-f6f9cda5f79c0c5d`, row 931.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Increased Maximum Mana
    - +80% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-edad3c2fe742cdbd -->
- Source: `cr-edad3c2fe742cdbd`, row 923.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40% Mana Regeneration
    - +10 to Energy
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0e8c8ca52bbc611c -->
- Source: `cr-0e8c8ca52bbc611c`, row 930.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +30% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ba20d8f795bb080f -->
- Source: `cr-ba20d8f795bb080f`, row 913.
- Required ingredients:
  - 1 × Armor
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5249a4ef86a23a5c -->
- Source: `cr-5249a4ef86a23a5c`, row 914.
- Required ingredients:
  - 1 × Armor
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-131ada53a1fb9338 -->
- Source: `cr-131ada53a1fb9338`, row 912.
- Required ingredients:
  - 1 × Armor
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Sol Rune (#12) + 1 × Jewel + 1 × Amethyst → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a6cd6b8f16f0c047 -->
- Source: `cr-a6cd6b8f16f0c047`, row 920.
- Required ingredients:
  - 1 × Armor
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Amethyst
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - Physical Damage Reduced By 5
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Sol Rune (#12) + 1 × Jewel + 1 × Chaos Onyx → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7e71ab9f882b2625 -->
- Source: `cr-7e71ab9f882b2625`, row 921.
- Required ingredients:
  - 1 × Armor
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Chaos Onyx
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - Physical Damage Reduced By 5
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-601350d3b6dc6315 -->
- Source: `cr-601350d3b6dc6315`, row 909.
- Required ingredients:
  - 1 × Armor
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7a235462cedb0215 -->
- Source: `cr-7a235462cedb0215`, row 915.
- Required ingredients:
  - 1 × Armor
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b8726af8bfd9cc49 -->
- Source: `cr-b8726af8bfd9cc49`, row 764.
- Required ingredients:
  - 1 × Belt
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-820d614fd86258dd -->
- Source: `cr-820d614fd86258dd`, row 766.
- Required ingredients:
  - 1 × Belt
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c55dcaf49c841711 -->
- Source: `cr-c55dcaf49c841711`, row 763.
- Required ingredients:
  - 1 × Belt
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8124a48c0bde195f -->
- Source: `cr-8124a48c0bde195f`, row 767.
- Required ingredients:
  - 1 × Belt
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6858e6d74c9caaf5 -->
- Source: `cr-6858e6d74c9caaf5`, row 778.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Ber Rune (#30)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d09b5aa5477637de -->
- Source: `cr-d09b5aa5477637de`, row 781.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +50 to Life
    - +50 to Mana
    - +50% Enhanced Defense
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-dcc3a5946cfcb2fa -->
- Source: `cr-dcc3a5946cfcb2fa`, row 771.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Strength
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-060e09da0f267882 -->
- Source: `cr-060e09da0f267882`, row 770.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Dexterity
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e1fce323504f6828 -->
- Source: `cr-e1fce323504f6828`, row 768.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Faster Hit Recovery
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-930492329cc897f5 -->
- Source: `cr-930492329cc897f5`, row 775.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Diamond
  - 1 × Um Rune (#22)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7e7a19e3b655222f -->
- Source: `cr-7e7a19e3b655222f`, row 779.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b4c23e48ee63ff47 -->
- Source: `cr-b4c23e48ee63ff47`, row 773.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40 to Life
    - +4 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-dd78b0f74a743394 -->
- Source: `cr-dd78b0f74a743394`, row 772.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Energy
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-72006efca3d3ce42 -->
- Source: `cr-72006efca3d3ce42`, row 774.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40 to Mana
    - +4 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c3b54f126ba417ed -->
- Source: `cr-c3b54f126ba417ed`, row 777.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Increased Maximum Mana
    - +80% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1aa120d858b71a12 -->
- Source: `cr-1aa120d858b71a12`, row 769.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40% Mana Regeneration
    - +10 to Energy
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8c7bd3723655016b -->
- Source: `cr-8c7bd3723655016b`, row 780.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Chance Items Roll Magic or Better
    - +40% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-da3d790d413101eb -->
- Source: `cr-da3d790d413101eb`, row 776.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b2f87e05ddbf01a4 -->
- Source: `cr-b2f87e05ddbf01a4`, row 761.
- Required ingredients:
  - 1 × Belt
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f87a3ec1c59385d7 -->
- Source: `cr-f87a3ec1c59385d7`, row 762.
- Required ingredients:
  - 1 × Belt
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3faf3a0627c15edf -->
- Source: `cr-3faf3a0627c15edf`, row 765.
- Required ingredients:
  - 1 × Belt
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-547075158ca37a7e -->
- Source: `cr-547075158ca37a7e`, row 760.
- Required ingredients:
  - 1 × Belt
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9600e2d942bbf9ac -->
- Source: `cr-9600e2d942bbf9ac`, row 795.
- Required ingredients:
  - 1 × Boots
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-38bf6d64de8776ee -->
- Source: `cr-38bf6d64de8776ee`, row 797.
- Required ingredients:
  - 1 × Boots
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3953649763c21774 -->
- Source: `cr-3953649763c21774`, row 794.
- Required ingredients:
  - 1 × Boots
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-fdf1f2db9f44a31e -->
- Source: `cr-fdf1f2db9f44a31e`, row 798.
- Required ingredients:
  - 1 × Boots
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Nef Rune (#4) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-58c4596fe62db5da -->
- Source: `cr-58c4596fe62db5da`, row 790.
- Required ingredients:
  - 1 × Boots
  - 1 × Nef Rune (#4)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Faster Run/Walk Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d1b7b87f43e5fbf3 -->
- Source: `cr-d1b7b87f43e5fbf3`, row 803.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Strength
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5e8cebed4bb9fedd -->
- Source: `cr-5e8cebed4bb9fedd`, row 800.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Faster Hit Recovery
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-76ee0c52e9ceffcc -->
- Source: `cr-76ee0c52e9ceffcc`, row 812.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Increased Maximum Life
    - +10% Increased Maximum Mana
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-78d5faa1c0c7e5cb -->
- Source: `cr-78d5faa1c0c7e5cb`, row 802.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Dexterity
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2e5136544b7603e5 -->
- Source: `cr-2e5136544b7603e5`, row 799.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Faster Run/Walk Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0f5f5ecbf13a8598 -->
- Source: `cr-0f5f5ecbf13a8598`, row 807.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Diamond
  - 1 × Um Rune (#22)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7df2cc25f1ff194e -->
- Source: `cr-7df2cc25f1ff194e`, row 810.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d47ea31e745449cc -->
- Source: `cr-d47ea31e745449cc`, row 805.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40 to Life
    - +4 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-73183cb4930b6629 -->
- Source: `cr-73183cb4930b6629`, row 804.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Energy
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f0ce6a3b03ddb6a9 -->
- Source: `cr-f0ce6a3b03ddb6a9`, row 806.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40 to Mana
    - +4 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5e58417936e5f2f0 -->
- Source: `cr-5e58417936e5f2f0`, row 809.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Increased Maximum Mana
    - +80% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ae6ee505cbebec63 -->
- Source: `cr-ae6ee505cbebec63`, row 801.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40% Mana Regeneration
    - +10 to Energy
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3e310ac8408cb074 -->
- Source: `cr-3e310ac8408cb074`, row 811.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +25% Faster Run/Walk Speed
    - +25% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2eb078b2f33e645a -->
- Source: `cr-2eb078b2f33e645a`, row 808.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2b681135d5005381 -->
- Source: `cr-2b681135d5005381`, row 792.
- Required ingredients:
  - 1 × Boots
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-04e997e92eeef83e -->
- Source: `cr-04e997e92eeef83e`, row 793.
- Required ingredients:
  - 1 × Boots
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2b81be0a988090e6 -->
- Source: `cr-2b81be0a988090e6`, row 796.
- Required ingredients:
  - 1 × Boots
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c9793cbcfd9be297 -->
- Source: `cr-c9793cbcfd9be297`, row 791.
- Required ingredients:
  - 1 × Boots
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c9836419abc52512 -->
- Source: `cr-c9836419abc52512`, row 825.
- Required ingredients:
  - 1 × Gloves
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f4aa220c105b0e40 -->
- Source: `cr-f4aa220c105b0e40`, row 827.
- Required ingredients:
  - 1 × Gloves
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Emerald + 1 × Jewel + 1 × Shael Rune (#13) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-533a1c6a64428296 -->
- Source: `cr-533a1c6a64428296`, row 829.
- Required ingredients:
  - 1 × Gloves
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Shael Rune (#13)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6faad0812ab2cc6a -->
- Source: `cr-6faad0812ab2cc6a`, row 824.
- Required ingredients:
  - 1 × Gloves
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-77e01afc1d3f1914 -->
- Source: `cr-77e01afc1d3f1914`, row 828.
- Required ingredients:
  - 1 × Gloves
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3d77cc852c090f35 -->
- Source: `cr-3d77cc852c090f35`, row 833.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Strength
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Diamond + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-61e190158a8193d2 -->
- Source: `cr-61e190158a8193d2`, row 841.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Piercing Attack
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Emerald + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1715732b2a26fa07 -->
- Source: `cr-1715732b2a26fa07`, row 840.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Chance of Open Wounds
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c59822eb9664167d -->
- Source: `cr-c59822eb9664167d`, row 832.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Dexterity
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3ed5e23675d1a176 -->
- Source: `cr-3ed5e23675d1a176`, row 835.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Diamond
  - 1 × Um Rune (#22)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bacbdd38a1dcf324 -->
- Source: `cr-bacbdd38a1dcf324`, row 838.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2ac6e2fe13c21d05 -->
- Source: `cr-2ac6e2fe13c21d05`, row 839.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Deadly Strike
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-716d2740a73d3307 -->
- Source: `cr-716d2740a73d3307`, row 834.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Energy
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2c3ec814f03c2e46 -->
- Source: `cr-2c3ec814f03c2e46`, row 837.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Increased Maximum Mana
    - +80% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0c71a5a94c785595 -->
- Source: `cr-0c71a5a94c785595`, row 831.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40% Mana Regeneration
    - +10 to Energy
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0365fa50699d3694 -->
- Source: `cr-0365fa50699d3694`, row 836.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8c1469b37b4817bb -->
- Source: `cr-8c1469b37b4817bb`, row 822.
- Required ingredients:
  - 1 × Gloves
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Sapphire + 1 × Jewel + 1 × Dol Rune (#14) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e91103b0b7f41007 -->
- Source: `cr-e91103b0b7f41007`, row 830.
- Required ingredients:
  - 1 × Gloves
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Dol Rune (#14)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f0c38329405e9968 -->
- Source: `cr-f0c38329405e9968`, row 823.
- Required ingredients:
  - 1 × Gloves
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-87b37b3381b7bba0 -->
- Source: `cr-87b37b3381b7bba0`, row 826.
- Required ingredients:
  - 1 × Gloves
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e3185ec68ce6896d -->
- Source: `cr-e3185ec68ce6896d`, row 821.
- Required ingredients:
  - 1 × Gloves
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e324cd948a7f9a08 -->
- Source: `cr-e324cd948a7f9a08`, row 854.
- Required ingredients:
  - 1 × Helm
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0673aa13c75f7fe2 -->
- Source: `cr-0673aa13c75f7fe2`, row 856.
- Required ingredients:
  - 1 × Helm
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-db9c57e68764d470 -->
- Source: `cr-db9c57e68764d470`, row 853.
- Required ingredients:
  - 1 × Helm
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-18d5470cbab622aa -->
- Source: `cr-18d5470cbab622aa`, row 857.
- Required ingredients:
  - 1 × Helm
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Amethyst + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3ed09c0b49b7733c -->
- Source: `cr-3ed09c0b49b7733c`, row 866.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Ber Rune (#30)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-abe4dd06a8ed9e3f -->
- Source: `cr-abe4dd06a8ed9e3f`, row 861.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Strength
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Amethyst + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-107295701f33a6d9 -->
- Source: `cr-107295701f33a6d9`, row 858.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Faster Hit Recovery
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Diamond + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-534846dfe81d417f -->
- Source: `cr-534846dfe81d417f`, row 873.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Magic Skills
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b7e0b9ea00aeea58 -->
- Source: `cr-b7e0b9ea00aeea58`, row 872.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Poison Skills
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c97e0395be081c27 -->
- Source: `cr-c97e0395be081c27`, row 860.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Dexterity
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-49fda488c6edcf13 -->
- Source: `cr-49fda488c6edcf13`, row 868.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - ModStr3y \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7abed8ec1cf97ad4 -->
- Source: `cr-7abed8ec1cf97ad4`, row 863.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Diamond
  - 1 × Um Rune (#22)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Ruby + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3383c8a13a8281b9 -->
- Source: `cr-3383c8a13a8281b9`, row 869.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Fire Skills
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2979a87e1fafc3d2 -->
- Source: `cr-2979a87e1fafc3d2`, row 867.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f9a8432fc700ecea -->
- Source: `cr-f9a8432fc700ecea`, row 870.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Cold Skills
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1f92c0a193a6991d -->
- Source: `cr-1f92c0a193a6991d`, row 862.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15 to Energy
    - +15 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4a1abac2e47d85f4 -->
- Source: `cr-4a1abac2e47d85f4`, row 865.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Increased Maximum Mana
    - +80% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5d798619defb021f -->
- Source: `cr-5d798619defb021f`, row 859.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40% Mana Regeneration
    - +10 to Energy
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Skull + 1 × Zod Rune (#33) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c5b2f99f9d812519 -->
- Source: `cr-c5b2f99f9d812519`, row 874.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to All Skills
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bcc817fa4d7525cf -->
- Source: `cr-bcc817fa4d7525cf`, row 871.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Lightning Skills
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0771ed693c30e36e -->
- Source: `cr-0771ed693c30e36e`, row 864.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7cb9cc099786ae05 -->
- Source: `cr-7cb9cc099786ae05`, row 851.
- Required ingredients:
  - 1 × Helm
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-54aaca7348feafb2 -->
- Source: `cr-54aaca7348feafb2`, row 852.
- Required ingredients:
  - 1 × Helm
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-63a83a0be14db43a -->
- Source: `cr-63a83a0be14db43a`, row 855.
- Required ingredients:
  - 1 × Helm
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7a32b706277c8553 -->
- Source: `cr-7a32b706277c8553`, row 850.
- Required ingredients:
  - 1 × Helm
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-65d7b018bb686045 -->
- Source: `cr-65d7b018bb686045`, row 965.
- Required ingredients:
  - 1 × Missile
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +50 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7894ee8ca38c33ca -->
- Source: `cr-7894ee8ca38c33ca`, row 967.
- Required ingredients:
  - 1 × Missile
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance of Open Wounds
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bf5acaee37c7e6dd -->
- Source: `cr-bf5acaee37c7e6dd`, row 966.
- Required ingredients:
  - 1 × Missile
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile + 1 × Orb of Infusion + 1 × Amethyst + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-54e5d4eb5b67d7c8 -->
- Source: `cr-54e5d4eb5b67d7c8`, row 973.
- Required ingredients:
  - 1 × Missile
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Lo Rune (#28)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +150 to Attack Rating
    - +15% Deadly Strike
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6c8fec48f15b5e3d -->
- Source: `cr-6c8fec48f15b5e3d`, row 969.
- Required ingredients:
  - 1 × Missile
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Um Rune (#22)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Chance of Open Wounds
    - +100 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-659e86fdcaed9625 -->
- Source: `cr-659e86fdcaed9625`, row 972.
- Required ingredients:
  - 1 × Missile
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Ohm Rune (#27)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +150 to Attack Rating
    - +20% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-85a13af8d2f1435c -->
- Source: `cr-85a13af8d2f1435c`, row 971.
- Required ingredients:
  - 1 × Missile
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Vex Rune (#26)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +8% Mana stolen per hit
    - +8% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-640540b634acff3f -->
- Source: `cr-640540b634acff3f`, row 970.
- Required ingredients:
  - 1 × Missile
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +30% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3c26346fc8425193 -->
- Source: `cr-3c26346fc8425193`, row 964.
- Required ingredients:
  - 1 × Missile
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +4% Mana stolen per hit
    - +4% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0628163c2f71717a -->
- Source: `cr-0628163c2f71717a`, row 968.
- Required ingredients:
  - 1 × Missile
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Emerald + 1 × Jewel + 1 × Shael Rune (#13) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5e0e0bf2bcb9934f -->
- Source: `cr-5e0e0bf2bcb9934f`, row 747.
- Required ingredients:
  - 1 × Ring
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Shael Rune (#13)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1276ca2e5509c1e9 -->
- Source: `cr-1276ca2e5509c1e9`, row 744.
- Required ingredients:
  - 1 × Ring
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Conversion + 1 × Jewel + 1 × Brak Rune (#34) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5d9eb7e4f888c9c3 -->
- Source: `cr-5d9eb7e4f888c9c3`, row 755.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Brak Rune (#34)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - -3% to Enemy Physical Damage Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Conversion + 1 × Jewel + 1 × Grit Rune (#37) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b6b177fe3fbd09d0 -->
- Source: `cr-b6b177fe3fbd09d0`, row 758.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - -3% to All Enemy Elemental Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Conversion + 1 × Jewel + 1 × Hev Rune (#39) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-048bf7cbb15489b6 -->
- Source: `cr-048bf7cbb15489b6`, row 759.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Enhanced Weapon Damage
    - -3% to Enemy Physical Damage Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Conversion + 1 × Jewel + 1 × Myr Rune (#36) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-354337f569c39c61 -->
- Source: `cr-354337f569c39c61`, row 757.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Myr Rune (#36)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - -3% to Enemy Magic Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Conversion + 1 × Jewel + 1 × Zeph Rune (#35) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-de3377edcdc96cf2 -->
- Source: `cr-de3377edcdc96cf2`, row 756.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Conversion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Zeph Rune (#35)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +3% to All Elemental Skill Damage
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4ce163c409a46981 -->
- Source: `cr-4ce163c409a46981`, row 751.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Um Rune (#22)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8e1794ccdb2138df -->
- Source: `cr-8e1794ccdb2138df`, row 754.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-dbad56d3c06d3a77 -->
- Source: `cr-dbad56d3c06d3a77`, row 749.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40 to Life
    - +4 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Sapphire + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-490f128ba426c52c -->
- Source: `cr-490f128ba426c52c`, row 746.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Amn Rune (#11)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Mana stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9e72da4c33c0e3f2 -->
- Source: `cr-9e72da4c33c0e3f2`, row 750.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +40 to Mana
    - +4 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4f015d874224585d -->
- Source: `cr-4f015d874224585d`, row 753.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Increased Maximum Mana
    - +80% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-784559f892294784 -->
- Source: `cr-784559f892294784`, row 745.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Amn Rune (#11)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bdb7afc5d83c3b9b -->
- Source: `cr-bdb7afc5d83c3b9b`, row 752.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-be6af3de322dc9f8 -->
- Source: `cr-be6af3de322dc9f8`, row 741.
- Required ingredients:
  - 1 × Ring
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Ruby → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5c0a92309389f699 -->
- Source: `cr-5c0a92309389f699`, row 739.
- Required ingredients:
  - 1 × Ring
  - 1 × Ruby
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Sapphire + 1 × Jewel + 1 × Dol Rune (#14) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-eba684e84baa8a36 -->
- Source: `cr-eba684e84baa8a36`, row 748.
- Required ingredients:
  - 1 × Ring
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Dol Rune (#14)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d2ba7a401bc1bb4b -->
- Source: `cr-d2ba7a401bc1bb4b`, row 742.
- Required ingredients:
  - 1 × Ring
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Sapphire → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-01b38aabc5325360 -->
- Source: `cr-01b38aabc5325360`, row 740.
- Required ingredients:
  - 1 × Ring
  - 1 × Sapphire
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-79b301b7736cecc6 -->
- Source: `cr-79b301b7736cecc6`, row 743.
- Required ingredients:
  - 1 × Ring
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Topaz → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1ce680c1b859c583 -->
- Source: `cr-1ce680c1b859c583`, row 738.
- Required ingredients:
  - 1 × Ring
  - 1 × Topaz
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Amazon-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7202dd249632a783 -->
- Source: `cr-7202dd249632a783`, row 729.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Amazon Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Amazon-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c0618cfe2fa201f6 -->
- Source: `cr-c0618cfe2fa201f6`, row 787.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Amazon Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Amazon-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6a98eb44b16a8a0d -->
- Source: `cr-6a98eb44b16a8a0d`, row 818.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Amazon Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Amazon-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-871b9d4427495ecf -->
- Source: `cr-871b9d4427495ecf`, row 847.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Amazon Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Amazon-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-152dcce1da28a5a5 -->
- Source: `cr-152dcce1da28a5a5`, row 880.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Amazon Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Assassin-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-303733787988876f -->
- Source: `cr-303733787988876f`, row 724.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Assassin Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Assassin-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f7a101a83d3e8752 -->
- Source: `cr-f7a101a83d3e8752`, row 782.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Assassin Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Assassin-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0c96e4a6c2352949 -->
- Source: `cr-0c96e4a6c2352949`, row 813.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Assassin Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Assassin-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-262b22ab6776be83 -->
- Source: `cr-262b22ab6776be83`, row 842.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Assassin Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Assassin-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-907250df8e52b491 -->
- Source: `cr-907250df8e52b491`, row 875.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Assassin Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Barbarian-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9c33fb5700e72caf -->
- Source: `cr-9c33fb5700e72caf`, row 725.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Barbarian Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Barbarian-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3249f1d6e17f3c92 -->
- Source: `cr-3249f1d6e17f3c92`, row 783.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Barbarian Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Barbarian-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-46b3f206ad99b989 -->
- Source: `cr-46b3f206ad99b989`, row 814.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Barbarian Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Barbarian-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-78a2d4ad22f6d0c3 -->
- Source: `cr-78a2d4ad22f6d0c3`, row 843.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Barbarian Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Barbarian-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-614b6ed33d2ebcd1 -->
- Source: `cr-614b6ed33d2ebcd1`, row 876.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Barbarian Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Druid-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6fa6f1c51fce7d47 -->
- Source: `cr-6fa6f1c51fce7d47`, row 727.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Druid Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Druid-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-640818756ad3201a -->
- Source: `cr-640818756ad3201a`, row 785.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Druid Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Druid-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5376faf88de44821 -->
- Source: `cr-5376faf88de44821`, row 816.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Druid Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Druid-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-fa9c92073ac3817b -->
- Source: `cr-fa9c92073ac3817b`, row 845.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Druid Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Druid-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b87c127a388bc959 -->
- Source: `cr-b87c127a388bc959`, row 878.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Druid Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Necromancer-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9103cf736a75cee8 -->
- Source: `cr-9103cf736a75cee8`, row 728.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Necromancer Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Necromancer-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a566abc940e7585b -->
- Source: `cr-a566abc940e7585b`, row 786.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Necromancer Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Necromancer-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cf1fa80f8a520088 -->
- Source: `cr-cf1fa80f8a520088`, row 817.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Necromancer Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Necromancer-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-81143f22ecfe6e96 -->
- Source: `cr-81143f22ecfe6e96`, row 846.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Necromancer Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Necromancer-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-05f5aeed5b85c54c -->
- Source: `cr-05f5aeed5b85c54c`, row 879.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Necromancer Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Paladin-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cce4791815b51ae7 -->
- Source: `cr-cce4791815b51ae7`, row 730.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Paladin Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Paladin-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-717183aef4a77bba -->
- Source: `cr-717183aef4a77bba`, row 788.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Paladin Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Paladin-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4c2cf6b4a991c4c1 -->
- Source: `cr-4c2cf6b4a991c4c1`, row 819.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Paladin Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Paladin-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b8da035102e02a1b -->
- Source: `cr-b8da035102e02a1b`, row 848.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Paladin Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Paladin-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-fc45062cefe646f9 -->
- Source: `cr-fc45062cefe646f9`, row 881.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Paladin Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Sorceress-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7ec7f4a6e8f32eca -->
- Source: `cr-7ec7f4a6e8f32eca`, row 726.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Sorceress Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Sorceress-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-fc533423ecdba165 -->
- Source: `cr-fc533423ecdba165`, row 784.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Sorceress Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Sorceress-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-67f9618dda67581a -->
- Source: `cr-67f9618dda67581a`, row 815.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Sorceress Skill Levels
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Sorceress-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1805343278234f08 -->
- Source: `cr-1805343278234f08`, row 844.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Sorceress Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Sorceress-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d6571baeaa9968a2 -->
- Source: `cr-d6571baeaa9968a2`, row 877.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Sorceress Skill Levels
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Warlock-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-048bb42bf78a6ae0 -->
- Source: `cr-048bb42bf78a6ae0`, row 731.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Warlock Skills
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Warlock-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c18e2f3f424dca03 -->
- Source: `cr-c18e2f3f424dca03`, row 789.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Warlock Skills
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Warlock-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2a298fcfb52f1c80 -->
- Source: `cr-2a298fcfb52f1c80`, row 820.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Warlock Skills
    - +5% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Warlock-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-30976d40bb9dab4e -->
- Source: `cr-30976d40bb9dab4e`, row 849.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +1 to Warlock Skills
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Warlock-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-429c9248c6d9db14 -->
- Source: `cr-429c9248c6d9db14`, row 882.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Conversion
  - 1 × Zod Rune (#33)
  - 1 × Dem Rune (#38)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +2 to Warlock Skills
    - ModStre9s \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

</details>

</details>

<details>
<summary>Removed recipe definitions (341)</summary>

<details>
<summary>1 × 1H Weapons + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cce505cce6071c5f -->
- Source: `cr-cce505cce6071c5f`, row 1013.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-91275c45ec7b9034 -->
- Source: `cr-91275c45ec7b9034`, row 1014.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3b2f5795c7d7c3a7 -->
- Source: `cr-3b2f5795c7d7c3a7`, row 1011.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +7% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d4684d0ceff15acd -->
- Source: `cr-d4684d0ceff15acd`, row 1015.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +6% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Nef Rune (#4) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-aedda5c2338aad3b -->
- Source: `cr-aedda5c2338aad3b`, row 1029.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Nef Rune (#4)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +30% Enhanced Weapon Damage
    - +30 to Attack Rating
    - ModStr1y \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-249e42f6a93bcf41 -->
- Source: `cr-249e42f6a93bcf41`, row 1028.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +30% Enhanced Weapon Damage
    - +30 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2b7d07c453690348 -->
- Source: `cr-2b7d07c453690348`, row 1021.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15% Enhanced Weapon Damage
    - +15 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5a9d0d7acf0a0cb3 -->
- Source: `cr-5a9d0d7acf0a0cb3`, row 1023.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Diamond + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-acfd37d20a2a99b1 -->
- Source: `cr-acfd37d20a2a99b1`, row 1027.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Lo Rune (#28)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - Adds 63-511 Weapon Fire Damage
    - Adds 63-511 Weapon Cold Damage
    - Adds 63-511 Weapon Lightning Damage
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Emerald + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a16bfcee84c73cd0 -->
- Source: `cr-a16bfcee84c73cd0`, row 1020.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Lem Rune (#20)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +150 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9ddcba9906bd97cf -->
- Source: `cr-9ddcba9906bd97cf`, row 1026.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Ohm Rune (#27)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15 to Minimum Weapon Damage
    - +30 to Maximum Weapon Damage
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Chaos Onyx + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1fa5d8d0709995c0 -->
- Source: `cr-1fa5d8d0709995c0`, row 1034.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Chaos Onyx
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% to Magic Skill Damage
    - -2% to Enemy Magic Resistance
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Emerald + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d12c77b119e072c6 -->
- Source: `cr-d12c77b119e072c6`, row 1033.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Emerald
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% to Poison Skill Damage
    - -2% to Enemy Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Ruby + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-58882305d999bf31 -->
- Source: `cr-58882305d999bf31`, row 1030.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Ruby
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% to Fire Skill Damage
    - -2% to Enemy Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Sapphire + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-95887719bb7f90bc -->
- Source: `cr-95887719bb7f90bc`, row 1031.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Sapphire
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% to Cold Skill Damage
    - -2% to Enemy Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Topaz + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7075f7c9e1c5d043 -->
- Source: `cr-7075f7c9e1c5d043`, row 1032.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Topaz
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% to Lightning Skill Damage
    - -2% to Enemy Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Ruby + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c72465ae9d1a880b -->
- Source: `cr-c72465ae9d1a880b`, row 1018.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +50% Damage to Demons
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5af74b70c2602625 -->
- Source: `cr-5af74b70c2602625`, row 1022.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-712a705a88b1e91c -->
- Source: `cr-712a705a88b1e91c`, row 1019.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +50% Damage to Undead
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0dd5d23411c484fa -->
- Source: `cr-0dd5d23411c484fa`, row 1025.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Vex Rune (#26)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +5% Mana stolen per hit
    - +5% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Topaz + 1 × Io Rune (#16) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bb6cd3fe8e4368be -->
- Source: `cr-bb6cd3fe8e4368be`, row 1017.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Io Rune (#16)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - Attacker Takes Damage of 100
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4e372188b2fdc635 -->
- Source: `cr-4e372188b2fdc635`, row 1024.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +30% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e1a640dc4ae937fe -->
- Source: `cr-e1a640dc4ae937fe`, row 1009.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +75 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-174692ff9f115041 -->
- Source: `cr-174692ff9f115041`, row 1010.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +7% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-45a836bf7e1f89c9 -->
- Source: `cr-45a836bf7e1f89c9`, row 1012.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% Mana stolen per hit
    - +2% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-511a81389b8cec35 -->
- Source: `cr-511a81389b8cec35`, row 1016.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +6 to Minimum Weapon Damage
    - +10 to Maximum Weapon Damage
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × 1H Weapons + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-402e49cc9c04bf24 -->
- Source: `cr-402e49cc9c04bf24`, row 1008.
- Required ingredients:
  - 1 × 1H Weapons
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Amethyst + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-532b00e1bf4e0c85 -->
- Source: `cr-532b00e1bf4e0c85`, row 718.
- Required ingredients:
  - 1 × Amulet
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Orb of Infusion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +12 to Strength
    - +12 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1a8122a9097da5da -->
- Source: `cr-1a8122a9097da5da`, row 710.
- Required ingredients:
  - 1 × Amulet
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +2 Random Amazon Skill (selection=stat: item\_singleskill; min: 6; max: 35)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Amethyst → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9820297e1467458f -->
- Source: `cr-9820297e1467458f`, row 699.
- Required ingredients:
  - 1 × Amulet
  - 1 × Amethyst
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Chaos Onyx + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7021538fbc73779c -->
- Source: `cr-7021538fbc73779c`, row 712.
- Required ingredients:
  - 1 × Amulet
  - 1 × Chaos Onyx
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +2 Random Warlock Skill (selection=stat: item\_singleskill; min: 373; max: 402)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Diamond + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5c41cf4847bc1690 -->
- Source: `cr-5c41cf4847bc1690`, row 719.
- Required ingredients:
  - 1 × Amulet
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Orb of Infusion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +12% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-358a3e8f84fcefe8 -->
- Source: `cr-358a3e8f84fcefe8`, row 704.
- Required ingredients:
  - 1 × Amulet
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +5% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d52f782af2cbc7d5 -->
- Source: `cr-d52f782af2cbc7d5`, row 711.
- Required ingredients:
  - 1 × Amulet
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +2 Random Paladin Skill (selection=stat: item\_singleskill; min: 96; max: 125)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Emerald + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ddea436896cb675d -->
- Source: `cr-ddea436896cb675d`, row 716.
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Orb of Infusion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +12 to Dexterity
    - +12 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e4ba4f8623c77dc2 -->
- Source: `cr-e4ba4f8623c77dc2`, row 708.
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +2 Random Druid Skill (selection=stat: item\_singleskill; min: 221; max: 250)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ac0026b9374c0342 -->
- Source: `cr-ac0026b9374c0342`, row 703.
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Emerald → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5e05f4b91dd86c17 -->
- Source: `cr-5e05f4b91dd86c17`, row 697.
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Ruby + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6227006203c1257e -->
- Source: `cr-6227006203c1257e`, row 714.
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Orb of Infusion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +50 to Life
    - +6 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4b8275481f6019f3 -->
- Source: `cr-4b8275481f6019f3`, row 706.
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +2 Random Barbarian Skill (selection=stat: item\_singleskill; min: 126; max: 155)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4f509594f4e6881f -->
- Source: `cr-4f509594f4e6881f`, row 700.
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Ruby → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-099289de34db577c -->
- Source: `cr-099289de34db577c`, row 695.
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +25 to Life
    - +4 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Sapphire + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-572e0a86c4f34af3 -->
- Source: `cr-572e0a86c4f34af3`, row 715.
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Orb of Infusion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +50 to Mana
    - +6 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-254e5444e3b674e0 -->
- Source: `cr-254e5444e3b674e0`, row 707.
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +2 Random Sorceress Skill (selection=stat: item\_singleskill; min: 36; max: 65)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c7add7acf222536c -->
- Source: `cr-c7add7acf222536c`, row 701.
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Sapphire → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8e4851643d32a575 -->
- Source: `cr-8e4851643d32a575`, row 696.
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +25 to Mana
    - +4 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Skull + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-383619d2a4783a6b -->
- Source: `cr-383619d2a4783a6b`, row 717.
- Required ingredients:
  - 1 × Amulet
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Orb of Infusion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +12 to Energy
    - +12 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-eb5be8285b6ba4a8 -->
- Source: `cr-eb5be8285b6ba4a8`, row 709.
- Required ingredients:
  - 1 × Amulet
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +2 Random Necromancer Skill (selection=stat: item\_singleskill; min: 66; max: 95)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Skull → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e6faa2fd04dc931d -->
- Source: `cr-e6faa2fd04dc931d`, row 698.
- Required ingredients:
  - 1 × Amulet
  - 1 × Skull
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Topaz + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-29684b5e9e71cd00 -->
- Source: `cr-29684b5e9e71cd00`, row 713.
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Orb of Infusion
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +25% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-81be98c107884d25 -->
- Source: `cr-81be98c107884d25`, row 705.
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +2 Random Assassin Skill (selection=stat: item\_singleskill; min: 251; max: 280)
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2f4cea75ec3129a5 -->
- Source: `cr-2f4cea75ec3129a5`, row 702.
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Amulet + 1 × Topaz → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bc0d0e49b6f6e5ae -->
- Source: `cr-bc0d0e49b6f6e5ae`, row 694.
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +12% Chance Items Roll Magic or Better
    - +25% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-86262fc0139e1841 -->
- Source: `cr-86262fc0139e1841`, row 872.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +7 to Strength
    - +7 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7969f2e558d47bd6 -->
- Source: `cr-7969f2e558d47bd6`, row 874.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8e16c93c54870a39 -->
- Source: `cr-8e16c93c54870a39`, row 871.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +7 to Dexterity
    - +7 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-58768978e72d6917 -->
- Source: `cr-58768978e72d6917`, row 875.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +4% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ef6824801ead0fc2 -->
- Source: `cr-ef6824801ead0fc2`, row 876.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +6% Damage Taken Added To Mana
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9093ada6f2bd7e52 -->
- Source: `cr-9093ada6f2bd7e52`, row 887.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +12 to Strength
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Diamond + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b36dcc68e0f870c8 -->
- Source: `cr-b36dcc68e0f870c8`, row 889.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Pul Rune (#21)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +6 to all Attributes
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Diamond + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bb19505dbf334d34 -->
- Source: `cr-bb19505dbf334d34`, row 880.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +50% Enhanced Defense
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-64c3c8745d9ef739 -->
- Source: `cr-64c3c8745d9ef739`, row 890.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Um Rune (#22)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +6% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Diamond + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ad28868183c96702 -->
- Source: `cr-ad28868183c96702`, row 896.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +1% to All Maximum Resistances
    - +3% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-368d221db9c96c0a -->
- Source: `cr-368d221db9c96c0a`, row 886.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +12 to Dexterity
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-64c066aceaa53fa0 -->
- Source: `cr-64c066aceaa53fa0`, row 883.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +7% Faster Hit Recovery
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Ruby + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-291e8988444cf958 -->
- Source: `cr-291e8988444cf958`, row 894.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Ber Rune (#30)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +6% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-50fe5d0044f2a9ac -->
- Source: `cr-50fe5d0044f2a9ac`, row 884.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Dol Rune (#14)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +30 to Life
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e2e93d1fb4ef6597 -->
- Source: `cr-e2e93d1fb4ef6597`, row 895.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +6% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Ruby + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d7ca8cc124e35665 -->
- Source: `cr-d7ca8cc124e35665`, row 881.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +5% Faster Block Rate
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-613313895f9d223c -->
- Source: `cr-613313895f9d223c`, row 888.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +12 to Energy
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9c5d00bcf74678c0 -->
- Source: `cr-9c5d00bcf74678c0`, row 878.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +30 to Mana
    - +3 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a89ed306e87a71fb -->
- Source: `cr-a89ed306e87a71fb`, row 891.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - Magic Damage Reduced By 4
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8e6e64c5ab6d6c46 -->
- Source: `cr-8e6e64c5ab6d6c46`, row 882.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - 5% Increased Chance of Blocking
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6795ed923e4c64e5 -->
- Source: `cr-6795ed923e4c64e5`, row 893.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +6% Increased Maximum Mana
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1c5d4e742f0f1b9c -->
- Source: `cr-1c5d4e742f0f1b9c`, row 879.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Amn Rune (#11)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - Attacker Takes Damage of 100
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5c3caa74ddab483a -->
- Source: `cr-5c3caa74ddab483a`, row 885.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +10% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-52931df4766574b3 -->
- Source: `cr-52931df4766574b3`, row 892.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +30% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5c795de698c4206c -->
- Source: `cr-5c795de698c4206c`, row 869.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15 to Life
    - +4 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3bc4a28d5a93e45f -->
- Source: `cr-3bc4a28d5a93e45f`, row 870.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f48fa748f8660b57 -->
- Source: `cr-f48fa748f8660b57`, row 873.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +7 to Energy
    - +7 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-71ed6f1cafcbbc53 -->
- Source: `cr-71ed6f1cafcbbc53`, row 877.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - Physical Damage Reduced By 3
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Any Shield + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-975655fce5e91aa6 -->
- Source: `cr-975655fce5e91aa6`, row 868.
- Required ingredients:
  - 1 × Any Shield
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +7% Chance Items Roll Magic or Better
    - +10% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bc03fc341a308af8 -->
- Source: `cr-bc03fc341a308af8`, row 901.
- Required ingredients:
  - 1 × Armor
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +7 to Strength
    - +7 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e281cac723be86f3 -->
- Source: `cr-e281cac723be86f3`, row 903.
- Required ingredients:
  - 1 × Armor
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +3% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bc4da9c3e814e1e0 -->
- Source: `cr-bc4da9c3e814e1e0`, row 900.
- Required ingredients:
  - 1 × Armor
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +7 to Dexterity
    - +7 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ca8cf861858fc03a -->
- Source: `cr-ca8cf861858fc03a`, row 904.
- Required ingredients:
  - 1 × Armor
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +5% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-91dc3f55f3bc272f -->
- Source: `cr-91dc3f55f3bc272f`, row 905.
- Required ingredients:
  - 1 × Armor
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +10% Damage Taken Added To Mana
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-16ec30dafb7c1ed7 -->
- Source: `cr-16ec30dafb7c1ed7`, row 922.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% Fire Damage Absorbed
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5d81486bde86f88f -->
- Source: `cr-5d81486bde86f88f`, row 913.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15 to Strength
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-42b0d7bd08eae7e0 -->
- Source: `cr-42b0d7bd08eae7e0`, row 926.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +1% to All Maximum Resistances
    - +5% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Diamond + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3b28401bef1e3be3 -->
- Source: `cr-3b28401bef1e3be3`, row 920.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Ber Rune (#30)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +8% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Diamond + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-453174d5d655ad89 -->
- Source: `cr-453174d5d655ad89`, row 915.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Pul Rune (#21)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +6 to all Attributes
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bb2bb1a53c8fe298 -->
- Source: `cr-bb2bb1a53c8fe298`, row 916.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Um Rune (#22)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +6% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3eaabda3faa5c537 -->
- Source: `cr-3eaabda3faa5c537`, row 912.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15 to Dexterity
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-af7133e826867de1 -->
- Source: `cr-af7133e826867de1`, row 909.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +10% Faster Run/Walk Speed
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f6588076da41335d -->
- Source: `cr-f6588076da41335d`, row 910.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Dol Rune (#14)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +30 to Life
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-28c848a4e3d13002 -->
- Source: `cr-28c848a4e3d13002`, row 921.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +8% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ab59853cd5c4524d -->
- Source: `cr-ab59853cd5c4524d`, row 923.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% Cold Damage Absorbed
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-05703ac1cf8f4a0d -->
- Source: `cr-05703ac1cf8f4a0d`, row 914.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15 to Energy
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0fc027ac301c7a79 -->
- Source: `cr-0fc027ac301c7a79`, row 907.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +30 to Mana
    - +3 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6033e5e85fb86b56 -->
- Source: `cr-6033e5e85fb86b56`, row 917.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - Magic Damage Reduced By 5
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b0da940d2ae92d24 -->
- Source: `cr-b0da940d2ae92d24`, row 919.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +8% Increased Maximum Mana
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a7d86622fda76f4d -->
- Source: `cr-a7d86622fda76f4d`, row 908.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Amn Rune (#11)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - Attacker Takes Damage of 150
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Skull + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0d582da67d7f5c75 -->
- Source: `cr-0d582da67d7f5c75`, row 925.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% Magic Damage Absorbed
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-49354ea64707e12f -->
- Source: `cr-49354ea64707e12f`, row 911.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +10% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-13e8ef12ed7921d8 -->
- Source: `cr-13e8ef12ed7921d8`, row 924.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +2% Lightning Damage Absorbed
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-42f93988427bf39e -->
- Source: `cr-42f93988427bf39e`, row 918.
- Required ingredients:
  - 1 × Armor
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +30% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6c2ecda9f72a34d5 -->
- Source: `cr-6c2ecda9f72a34d5`, row 898.
- Required ingredients:
  - 1 × Armor
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7bb9a5052825eac2 -->
- Source: `cr-7bb9a5052825eac2`, row 899.
- Required ingredients:
  - 1 × Armor
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b55b78799fdab7aa -->
- Source: `cr-b55b78799fdab7aa`, row 902.
- Required ingredients:
  - 1 × Armor
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +7 to Energy
    - +7 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-777ae25642e9ea06 -->
- Source: `cr-777ae25642e9ea06`, row 906.
- Required ingredients:
  - 1 × Armor
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - Physical Damage Reduced By 5
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Armor + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6b73515cc873faa3 -->
- Source: `cr-6b73515cc873faa3`, row 897.
- Required ingredients:
  - 1 × Armor
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 5
    - +15% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=394, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-750f06d558db39aa -->
- Source: `cr-750f06d558db39aa`, row 752.
- Required ingredients:
  - 1 × Belt
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d8717c9bc4e73c25 -->
- Source: `cr-d8717c9bc4e73c25`, row 754.
- Required ingredients:
  - 1 × Belt
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +2% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1aceacf384311f52 -->
- Source: `cr-1aceacf384311f52`, row 751.
- Required ingredients:
  - 1 × Belt
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-025009b9dcc7eacc -->
- Source: `cr-025009b9dcc7eacc`, row 755.
- Required ingredients:
  - 1 × Belt
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5ef225ec91ed38dd -->
- Source: `cr-5ef225ec91ed38dd`, row 756.
- Required ingredients:
  - 1 × Belt
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Damage Taken Added To Mana
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cfc3d711d37225da -->
- Source: `cr-cfc3d711d37225da`, row 771.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Ber Rune (#30)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-27aca3addcb7098d -->
- Source: `cr-27aca3addcb7098d`, row 775.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +50 to Life
    - +50 to Mana
    - +50% Enhanced Defense
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bd2d8eef5edcf34d -->
- Source: `cr-bd2d8eef5edcf34d`, row 763.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Strength
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Diamond + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-39ec7c7a39f40b3f -->
- Source: `cr-39ec7c7a39f40b3f`, row 766.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Pul Rune (#21)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4 to all Attributes
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1d742958fb6db2ca -->
- Source: `cr-1d742958fb6db2ca`, row 767.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Um Rune (#22)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-827521c4fbc36245 -->
- Source: `cr-827521c4fbc36245`, row 762.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Dexterity
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-43dd26dc6ab42a2b -->
- Source: `cr-43dd26dc6ab42a2b`, row 759.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +7% Faster Hit Recovery
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ef02112f99e52ba7 -->
- Source: `cr-ef02112f99e52ba7`, row 760.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Dol Rune (#14)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +30 to Life
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-66c7d38f3833828c -->
- Source: `cr-66c7d38f3833828c`, row 772.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-eec34f829e90fc17 -->
- Source: `cr-eec34f829e90fc17`, row 773.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6 to all Attributes
    - +6% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e5841b096571ebcf -->
- Source: `cr-e5841b096571ebcf`, row 764.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Energy
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6daf59b92530fd27 -->
- Source: `cr-6daf59b92530fd27`, row 758.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +30 to Mana
    - +3 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-35a40e807d682dbc -->
- Source: `cr-35a40e807d682dbc`, row 768.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Magic Damage Reduced By 3
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-abc4be4789cf215e -->
- Source: `cr-abc4be4789cf215e`, row 770.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5% Increased Maximum Mana
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Skull + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-418b6f096653d2e3 -->
- Source: `cr-418b6f096653d2e3`, row 765.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lem Rune (#20)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +50% Enhanced Defense
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c2ba977eecf7fe7d -->
- Source: `cr-c2ba977eecf7fe7d`, row 761.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +8% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7bbd7e95687d0876 -->
- Source: `cr-7bbd7e95687d0876`, row 774.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +20% Chance Items Roll Magic or Better
    - +40% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d95c7dd1570f14dc -->
- Source: `cr-d95c7dd1570f14dc`, row 769.
- Required ingredients:
  - 1 × Belt
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +20% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2b26dfb881747ca3 -->
- Source: `cr-2b26dfb881747ca3`, row 749.
- Required ingredients:
  - 1 × Belt
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +15 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e4d87e26e0f28790 -->
- Source: `cr-e4d87e26e0f28790`, row 750.
- Required ingredients:
  - 1 × Belt
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +15 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7bb78a8fd3310cf8 -->
- Source: `cr-7bb78a8fd3310cf8`, row 753.
- Required ingredients:
  - 1 × Belt
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7a9e7387cc007cdc -->
- Source: `cr-7a9e7387cc007cdc`, row 757.
- Required ingredients:
  - 1 × Belt
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Physical Damage Reduced By 3
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Belt + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2be25c05b02ab6d5 -->
- Source: `cr-2be25c05b02ab6d5`, row 748.
- Required ingredients:
  - 1 × Belt
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +7% Chance Items Roll Magic or Better
    - +10% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cda55ea1c8af79cb -->
- Source: `cr-cda55ea1c8af79cb`, row 780.
- Required ingredients:
  - 1 × Boots
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8bae203c5b450d60 -->
- Source: `cr-8bae203c5b450d60`, row 782.
- Required ingredients:
  - 1 × Boots
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +2% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b1e2413f96eeb273 -->
- Source: `cr-b1e2413f96eeb273`, row 779.
- Required ingredients:
  - 1 × Boots
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c1e27a1aadb7b6f9 -->
- Source: `cr-c1e27a1aadb7b6f9`, row 784.
- Required ingredients:
  - 1 × Boots
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-61509c521bf883a8 -->
- Source: `cr-61509c521bf883a8`, row 785.
- Required ingredients:
  - 1 × Boots
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Damage Taken Added To Mana
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Nef Rune (#4) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7a8d636f4b592296 -->
- Source: `cr-7a8d636f4b592296`, row 783.
- Required ingredients:
  - 1 × Boots
  - 1 × Nef Rune (#4)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5% Faster Run/Walk Speed
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f48d51aecf9f7660 -->
- Source: `cr-f48d51aecf9f7660`, row 793.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Strength
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3a8c9262f28f5fca -->
- Source: `cr-3a8c9262f28f5fca`, row 789.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +7% Faster Hit Recovery
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5a45df3db1b48f37 -->
- Source: `cr-5a45df3db1b48f37`, row 805.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +8% Increased Maximum Life
    - +8% Increased Maximum Mana
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Diamond + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8e8c1415e774c85f -->
- Source: `cr-8e8c1415e774c85f`, row 804.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +100% Enhanced Defense
    - Attacker Takes Damage of 100
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Diamond + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2992243759c13d4e -->
- Source: `cr-2992243759c13d4e`, row 796.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Pul Rune (#21)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4 to all Attributes
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1bcbb31675353e73 -->
- Source: `cr-1bcbb31675353e73`, row 797.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Um Rune (#22)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b80c549e1ffb6a08 -->
- Source: `cr-b80c549e1ffb6a08`, row 792.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Dexterity
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Emerald + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b187341fa0a80ebd -->
- Source: `cr-b187341fa0a80ebd`, row 788.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10% Faster Run/Walk Speed
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Ruby + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ee795fefa208c2fa -->
- Source: `cr-ee795fefa208c2fa`, row 801.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Ber Rune (#30)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% to Experience Gained
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d250202835d921ae -->
- Source: `cr-d250202835d921ae`, row 790.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Dol Rune (#14)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +30 to Life
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ce07d423ad76c141 -->
- Source: `cr-ce07d423ad76c141`, row 802.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-50a4251ac4cfe9fe -->
- Source: `cr-50a4251ac4cfe9fe`, row 794.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Energy
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f916a52cb28dadce -->
- Source: `cr-f916a52cb28dadce`, row 787.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +30 to Mana
    - +3 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a5d7f7b50a386719 -->
- Source: `cr-a5d7f7b50a386719`, row 798.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Magic Damage Reduced By 3
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6db0b385d10a52cf -->
- Source: `cr-6db0b385d10a52cf`, row 800.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Increased Maximum Mana
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Skull + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4bfa051fc812e226 -->
- Source: `cr-4bfa051fc812e226`, row 795.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lem Rune (#20)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +50% Enhanced Defense
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cf78a4e57e5dbd58 -->
- Source: `cr-cf78a4e57e5dbd58`, row 791.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +8% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6f480f1e0e3ef04f -->
- Source: `cr-6f480f1e0e3ef04f`, row 803.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +15% Faster Run/Walk Speed
    - +12% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1653f62f55280e19 -->
- Source: `cr-1653f62f55280e19`, row 799.
- Required ingredients:
  - 1 × Boots
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +20% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4b1a1b7d9b561642 -->
- Source: `cr-4b1a1b7d9b561642`, row 777.
- Required ingredients:
  - 1 × Boots
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +15 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3b8f44226a5a6055 -->
- Source: `cr-3b8f44226a5a6055`, row 778.
- Required ingredients:
  - 1 × Boots
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +15 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-20d5e3202c5485bd -->
- Source: `cr-20d5e3202c5485bd`, row 781.
- Required ingredients:
  - 1 × Boots
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e11e9de921978369 -->
- Source: `cr-e11e9de921978369`, row 786.
- Required ingredients:
  - 1 × Boots
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Physical Damage Reduced By 3
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Boots + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f48566439b223110 -->
- Source: `cr-f48566439b223110`, row 776.
- Required ingredients:
  - 1 × Boots
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +7% Chance Items Roll Magic or Better
    - +10% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2f7003c54e77b01d -->
- Source: `cr-2f7003c54e77b01d`, row 810.
- Required ingredients:
  - 1 × Gloves
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e83708ae9db10332 -->
- Source: `cr-e83708ae9db10332`, row 812.
- Required ingredients:
  - 1 × Gloves
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +2% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-10460a44ec390185 -->
- Source: `cr-10460a44ec390185`, row 809.
- Required ingredients:
  - 1 × Gloves
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-29a0ce43d25364b3 -->
- Source: `cr-29a0ce43d25364b3`, row 813.
- Required ingredients:
  - 1 × Gloves
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bb12796ae693100e -->
- Source: `cr-bb12796ae693100e`, row 814.
- Required ingredients:
  - 1 × Gloves
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Damage Taken Added To Mana
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-262032b30443641e -->
- Source: `cr-262032b30443641e`, row 823.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Strength
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Amethyst + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-966bedcbdc520a7f -->
- Source: `cr-966bedcbdc520a7f`, row 818.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +7% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Diamond + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-49c79d30c33ad3e5 -->
- Source: `cr-49c79d30c33ad3e5`, row 834.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Piercing Attack
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1df87b0807e10ba5 -->
- Source: `cr-1df87b0807e10ba5`, row 826.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Um Rune (#22)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Emerald + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a2233d032c2d35a6 -->
- Source: `cr-a2233d032c2d35a6`, row 833.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +3% Chance of Open Wounds
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-42485052c8813bf6 -->
- Source: `cr-42485052c8813bf6`, row 822.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Dexterity
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Ruby + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d0129779b6c23257 -->
- Source: `cr-d0129779b6c23257`, row 831.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +3% Chance of Crushing Blow
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e533161d8d8b7cb8 -->
- Source: `cr-e533161d8d8b7cb8`, row 820.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Dol Rune (#14)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +30 to Life
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0c5466a8e5845fbb -->
- Source: `cr-0c5466a8e5845fbb`, row 830.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1452d45bc0b5a360 -->
- Source: `cr-1452d45bc0b5a360`, row 832.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +3% Deadly Strike
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0917c94705bcb280 -->
- Source: `cr-0917c94705bcb280`, row 824.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Energy
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7c9a55253314ee5c -->
- Source: `cr-7c9a55253314ee5c`, row 816.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +30 to Mana
    - +3 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-562200841ea5c96a -->
- Source: `cr-562200841ea5c96a`, row 819.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Shael Rune (#13)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +7% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f2642ba029454079 -->
- Source: `cr-f2642ba029454079`, row 829.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Increased Maximum Mana
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-076cbd5829bcab10 -->
- Source: `cr-076cbd5829bcab10`, row 817.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Amn Rune (#11)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Attacker Takes Damage of 75
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Skull + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cd0f55b1a8bf3558 -->
- Source: `cr-cd0f55b1a8bf3558`, row 836.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - ModStr6d \[10\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8ce0a0c634788ce6 -->
- Source: `cr-8ce0a0c634788ce6`, row 821.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +8% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Skull + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c2cece087e6981a7 -->
- Source: `cr-c2cece087e6981a7`, row 827.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Magic Damage Reduced By 3
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c67e944538c56ff5 -->
- Source: `cr-c67e944538c56ff5`, row 835.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Slows Target by 10%
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b727b06e3bf8e2e7 -->
- Source: `cr-b727b06e3bf8e2e7`, row 828.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +20% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Infusion + 1 × Topaz + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3f206a1f64135774 -->
- Source: `cr-3f206a1f64135774`, row 825.
- Required ingredients:
  - 1 × Gloves
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Pul Rune (#21)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4 to all Attributes
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6f289621dc1727f0 -->
- Source: `cr-6f289621dc1727f0`, row 807.
- Required ingredients:
  - 1 × Gloves
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +15 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f574d3ef936f1c83 -->
- Source: `cr-f574d3ef936f1c83`, row 808.
- Required ingredients:
  - 1 × Gloves
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +15 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-985016031dd330ab -->
- Source: `cr-985016031dd330ab`, row 811.
- Required ingredients:
  - 1 × Gloves
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-685f07f007994917 -->
- Source: `cr-685f07f007994917`, row 815.
- Required ingredients:
  - 1 × Gloves
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Physical Damage Reduced By 3
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gloves + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1631adc6d5c9e8a2 -->
- Source: `cr-1631adc6d5c9e8a2`, row 806.
- Required ingredients:
  - 1 × Gloves
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +7% Chance Items Roll Magic or Better
    - +10% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-98039c83f5ee1a83 -->
- Source: `cr-98039c83f5ee1a83`, row 841.
- Required ingredients:
  - 1 × Helm
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-193fd46441b0eb88 -->
- Source: `cr-193fd46441b0eb88`, row 843.
- Required ingredients:
  - 1 × Helm
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +2% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9fd2612ea385cedb -->
- Source: `cr-9fd2612ea385cedb`, row 840.
- Required ingredients:
  - 1 × Helm
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5ec3004eb191b9f1 -->
- Source: `cr-5ec3004eb191b9f1`, row 844.
- Required ingredients:
  - 1 × Helm
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4ed293800b343f00 -->
- Source: `cr-4ed293800b343f00`, row 845.
- Required ingredients:
  - 1 × Helm
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Damage Taken Added To Mana
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Amethyst + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7cc2a21359869ad3 -->
- Source: `cr-7cc2a21359869ad3`, row 860.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Ber Rune (#30)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-882adc20fbfebcd8 -->
- Source: `cr-882adc20fbfebcd8`, row 853.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Strength
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Diamond + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-fb8997479b28c067 -->
- Source: `cr-fb8997479b28c067`, row 866.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +2 to Magic Skills
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Diamond + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1098ef48c6cac516 -->
- Source: `cr-1098ef48c6cac516`, row 855.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Pul Rune (#21)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4 to all Attributes
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-181060e68abfe9db -->
- Source: `cr-181060e68abfe9db`, row 856.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Um Rune (#22)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +4% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6972f6e506bdf8b0 -->
- Source: `cr-6972f6e506bdf8b0`, row 865.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +2 to Poison Skills
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c2073793b6f9df70 -->
- Source: `cr-c2073793b6f9df70`, row 852.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Dexterity
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Thul Rune (#10) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1df5fff999c74ea3 -->
- Source: `cr-1df5fff999c74ea3`, row 848.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Thul Rune (#10)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - ModStr3y \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Ruby + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4c85457c775b0f95 -->
- Source: `cr-4c85457c775b0f95`, row 862.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +2 to Fire Skills
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-dd6037c0ebb36fa6 -->
- Source: `cr-dd6037c0ebb36fa6`, row 850.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Dol Rune (#14)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +30 to Life
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ee547afe59d60dc9 -->
- Source: `cr-ee547afe59d60dc9`, row 861.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e628b69e5ced15d6 -->
- Source: `cr-e628b69e5ced15d6`, row 863.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +2 to Cold Skills
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5f404912f1ad6746 -->
- Source: `cr-5f404912f1ad6746`, row 854.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +10 to Energy
    - +10 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f3b2323de953ba06 -->
- Source: `cr-f3b2323de953ba06`, row 847.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +30 to Mana
    - +3 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-588d425e357c6261 -->
- Source: `cr-588d425e357c6261`, row 857.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Magic Damage Reduced By 3
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1e41709e963537e7 -->
- Source: `cr-1e41709e963537e7`, row 859.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +6% Increased Maximum Mana
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6e4618c618daf376 -->
- Source: `cr-6e4618c618daf376`, row 849.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Amn Rune (#11)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Attacker Takes Damage of 75
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ad9c1376c102bea0 -->
- Source: `cr-ad9c1376c102bea0`, row 851.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +8% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Skull + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-172b348505273995 -->
- Source: `cr-172b348505273995`, row 867.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +1 to All Skills
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8754d353dadbf3f7 -->
- Source: `cr-8754d353dadbf3f7`, row 864.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +2 to Lightning Skills
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-355918583b578b41 -->
- Source: `cr-355918583b578b41`, row 858.
- Required ingredients:
  - 1 × Helm
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +20% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9f79e495f6dabd0a -->
- Source: `cr-9f79e495f6dabd0a`, row 838.
- Required ingredients:
  - 1 × Helm
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +15 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d1fecc59b0f6ae1d -->
- Source: `cr-d1fecc59b0f6ae1d`, row 839.
- Required ingredients:
  - 1 × Helm
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +15 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-39fac0b8b21984b5 -->
- Source: `cr-39fac0b8b21984b5`, row 842.
- Required ingredients:
  - 1 × Helm
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ef4784382c5a88e1 -->
- Source: `cr-ef4784382c5a88e1`, row 846.
- Required ingredients:
  - 1 × Helm
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - Physical Damage Reduced By 3
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Helm + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e7ca6542730c2ed8 -->
- Source: `cr-e7ca6542730c2ed8`, row 837.
- Required ingredients:
  - 1 × Helm
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 3
    - +7% Chance Items Roll Magic or Better
    - +10% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=393, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ecc6585610c23faa -->
- Source: `cr-ecc6585610c23faa`, row 986.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5028ce1c7cce4225 -->
- Source: `cr-5028ce1c7cce4225`, row 987.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9285fe743c182552 -->
- Source: `cr-9285fe743c182552`, row 984.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +7% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7a075b3a94aef0cc -->
- Source: `cr-7a075b3a94aef0cc`, row 988.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +6% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Nef Rune (#4) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-db3ead70413b5f44 -->
- Source: `cr-db3ead70413b5f44`, row 1002.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Nef Rune (#4)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +30% Enhanced Weapon Damage
    - +30 to Attack Rating
    - ModStr1y \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-93bd31eb18171750 -->
- Source: `cr-93bd31eb18171750`, row 1001.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +30% Enhanced Weapon Damage
    - +30 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bfed6fdfa5f1494d -->
- Source: `cr-bfed6fdfa5f1494d`, row 994.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Enhanced Weapon Damage
    - +15 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-db7745c74be98996 -->
- Source: `cr-db7745c74be98996`, row 996.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Diamond + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3a98fe9e4fe35ad8 -->
- Source: `cr-3a98fe9e4fe35ad8`, row 1000.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Lo Rune (#28)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - Adds 63-511 Weapon Fire Damage
    - Adds 63-511 Weapon Cold Damage
    - Adds 63-511 Weapon Lightning Damage
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Emerald + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-93ed067dc381bc25 -->
- Source: `cr-93ed067dc381bc25`, row 993.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Lem Rune (#20)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +150 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7232a69e44b78b82 -->
- Source: `cr-7232a69e44b78b82`, row 999.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Ohm Rune (#27)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15 to Minimum Weapon Damage
    - +30 to Maximum Weapon Damage
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Chaos Onyx + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5fed0fc27ffe63a3 -->
- Source: `cr-5fed0fc27ffe63a3`, row 1007.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Chaos Onyx
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Magic Skill Damage
    - -2% to Enemy Magic Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Emerald + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9e20728db4687325 -->
- Source: `cr-9e20728db4687325`, row 1006.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Emerald
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Poison Skill Damage
    - -2% to Enemy Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Ruby + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1859fbe6ac3a93e2 -->
- Source: `cr-1859fbe6ac3a93e2`, row 1003.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Ruby
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Fire Skill Damage
    - -2% to Enemy Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Sapphire + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-04e2f9da1c09c98f -->
- Source: `cr-04e2f9da1c09c98f`, row 1004.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Sapphire
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Cold Skill Damage
    - -2% to Enemy Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Topaz + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-96262eeb26393920 -->
- Source: `cr-96262eeb26393920`, row 1005.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Topaz
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Lightning Skill Damage
    - -2% to Enemy Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Ruby + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6a9b4e3c207878de -->
- Source: `cr-6a9b4e3c207878de`, row 991.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +50% Damage to Demons
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3863ef70c47c83bc -->
- Source: `cr-3863ef70c47c83bc`, row 995.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c57a786f340c547d -->
- Source: `cr-c57a786f340c547d`, row 992.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +50% Damage to Undead
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3e5f7930e240f487 -->
- Source: `cr-3e5f7930e240f487`, row 998.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Vex Rune (#26)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +5% Mana stolen per hit
    - +5% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Topaz + 1 × Io Rune (#16) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-73079696b754bac3 -->
- Source: `cr-73079696b754bac3`, row 990.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Io Rune (#16)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - Attacker Takes Damage of 100
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-dc1c5ec19e236adc -->
- Source: `cr-dc1c5ec19e236adc`, row 997.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +30% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a2de3139395b82a3 -->
- Source: `cr-a2de3139395b82a3`, row 982.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +75 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5c8fcfa798d98d90 -->
- Source: `cr-5c8fcfa798d98d90`, row 983.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +7% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f36edc108b1812f8 -->
- Source: `cr-f36edc108b1812f8`, row 985.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% Mana stolen per hit
    - +2% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f255c50883e782dc -->
- Source: `cr-f255c50883e782dc`, row 989.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +6 to Minimum Weapon Damage
    - +10 to Maximum Weapon Damage
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Missile Weapon + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a399ad866811bcd5 -->
- Source: `cr-a399ad866811bcd5`, row 981.
- Required ingredients:
  - 1 × Missile Weapon
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-079fbbb804247b66 -->
- Source: `cr-079fbbb804247b66`, row 734.
- Required ingredients:
  - 1 × Ring
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Amethyst + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9bbd5892307eb9a6 -->
- Source: `cr-9bbd5892307eb9a6`, row 746.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Ber Rune (#30)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +4% Physical Damage Reduction
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-67af2c3355d81466 -->
- Source: `cr-67af2c3355d81466`, row 739.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Um Rune (#22)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +5% to All Resistances
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Emerald + 1 × Gul Rune (#25) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3959547c8fbb70fc -->
- Source: `cr-3959547c8fbb70fc`, row 743.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Gul Rune (#25)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +8% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Emerald + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e07e8fb9b7bff227 -->
- Source: `cr-e07e8fb9b7bff227`, row 744.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Lo Rune (#28)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +8% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Emerald + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-358448a16975ebdd -->
- Source: `cr-358448a16975ebdd`, row 741.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Vex Rune (#26)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +6 to all Attributes
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ecf1c09a6f1d98b3 -->
- Source: `cr-ecf1c09a6f1d98b3`, row 736.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Dol Rune (#14)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +30 to Life
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-58eacfc750a03a20 -->
- Source: `cr-58eacfc750a03a20`, row 747.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Jah Rune (#31)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +6% Increased Maximum Life
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a54e7dc043ce1993 -->
- Source: `cr-a54e7dc043ce1993`, row 735.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Ith Rune (#6)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +30 to Mana
    - +3 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2d4ff1164a8c4692 -->
- Source: `cr-2d4ff1164a8c4692`, row 745.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +6% Increased Maximum Mana
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Skull + 1 × Io Rune (#16) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9f9b0314a38bd2ce -->
- Source: `cr-9f9b0314a38bd2ce`, row 737.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Io Rune (#16)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +5% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a23d9ed56b37a009 -->
- Source: `cr-a23d9ed56b37a009`, row 738.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +5% Mana stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-21b0d338c496ee20 -->
- Source: `cr-21b0d338c496ee20`, row 740.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +20% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Orb of Infusion + 1 × Topaz + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6cbb0bd2e42c58b1 -->
- Source: `cr-6cbb0bd2e42c58b1`, row 742.
- Required ingredients:
  - 1 × Ring
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ohm Rune (#27)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +4% to Experience Gained
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c6533014d70706f7 -->
- Source: `cr-c6533014d70706f7`, row 729.
- Required ingredients:
  - 1 × Ring
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +20 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-95a9a5745357f49b -->
- Source: `cr-95a9a5745357f49b`, row 731.
- Required ingredients:
  - 1 × Ring
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-25da15fb901a9fc4 -->
- Source: `cr-25da15fb901a9fc4`, row 730.
- Required ingredients:
  - 1 × Ring
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +20 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ed314269570b5108 -->
- Source: `cr-ed314269570b5108`, row 732.
- Required ingredients:
  - 1 × Ring
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ba1a65e386691061 -->
- Source: `cr-ba1a65e386691061`, row 728.
- Required ingredients:
  - 1 × Ring
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a063842ee5c15089 -->
- Source: `cr-a063842ee5c15089`, row 733.
- Required ingredients:
  - 1 × Ring
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-7d60b8d5d1aaa007 -->
- Source: `cr-7d60b8d5d1aaa007`, row 932.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b70c6a7e8b3057cc -->
- Source: `cr-b70c6a7e8b3057cc`, row 933.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3b78b2a89d2264bf -->
- Source: `cr-3b78b2a89d2264bf`, row 930.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +7% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ae7ff17beefb7d75 -->
- Source: `cr-ae7ff17beefb7d75`, row 934.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +6% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Nef Rune (#4) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e0be21b81c82c3b3 -->
- Source: `cr-e0be21b81c82c3b3`, row 948.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Nef Rune (#4)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +30% Enhanced Weapon Damage
    - +30 to Attack Rating
    - ModStr1y \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8c157ea1e944df49 -->
- Source: `cr-8c157ea1e944df49`, row 947.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +30% Enhanced Weapon Damage
    - +30 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-766f72c39a05181c -->
- Source: `cr-766f72c39a05181c`, row 940.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Enhanced Weapon Damage
    - +15 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cd5193590dfac3db -->
- Source: `cr-cd5193590dfac3db`, row 942.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Diamond + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-936fce129c39a1b9 -->
- Source: `cr-936fce129c39a1b9`, row 946.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Lo Rune (#28)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - Adds 63-511 Weapon Fire Damage
    - Adds 63-511 Weapon Cold Damage
    - Adds 63-511 Weapon Lightning Damage
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Emerald + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cc848ea49ff12018 -->
- Source: `cr-cc848ea49ff12018`, row 939.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Lem Rune (#20)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +150 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-485ccf9e6216db47 -->
- Source: `cr-485ccf9e6216db47`, row 945.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Ohm Rune (#27)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15 to Minimum Weapon Damage
    - +30 to Maximum Weapon Damage
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Chaos Onyx + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0226f1fd011c7158 -->
- Source: `cr-0226f1fd011c7158`, row 953.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Chaos Onyx
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Magic Skill Damage
    - -2% to Enemy Magic Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Emerald + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-265be7398d016a6e -->
- Source: `cr-265be7398d016a6e`, row 952.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Emerald
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Poison Skill Damage
    - -2% to Enemy Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Ruby + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-da12e0ed4bebdc39 -->
- Source: `cr-da12e0ed4bebdc39`, row 949.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Ruby
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Fire Skill Damage
    - -2% to Enemy Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Sapphire + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d7fe1c43e16cfdc4 -->
- Source: `cr-d7fe1c43e16cfdc4`, row 950.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Sapphire
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Cold Skill Damage
    - -2% to Enemy Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Topaz + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c1ec30d08343b0eb -->
- Source: `cr-c1ec30d08343b0eb`, row 951.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Topaz
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Lightning Skill Damage
    - -2% to Enemy Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Ruby + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e79974938b4aa9f3 -->
- Source: `cr-e79974938b4aa9f3`, row 937.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +50% Damage to Demons
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-600ab7b5620e1d5d -->
- Source: `cr-600ab7b5620e1d5d`, row 941.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-42752a84813addf4 -->
- Source: `cr-42752a84813addf4`, row 938.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +50% Damage to Undead
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-576e38289e07d422 -->
- Source: `cr-576e38289e07d422`, row 944.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Vex Rune (#26)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +5% Mana stolen per hit
    - +5% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Topaz + 1 × Io Rune (#16) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-426d13200c17b3e6 -->
- Source: `cr-426d13200c17b3e6`, row 936.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Io Rune (#16)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - Attacker Takes Damage of 100
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0ca4b925c2c4cb6d -->
- Source: `cr-0ca4b925c2c4cb6d`, row 943.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +30% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9f3741b6c1ed6b36 -->
- Source: `cr-9f3741b6c1ed6b36`, row 928.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +75 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8dcad95797158a99 -->
- Source: `cr-8dcad95797158a99`, row 929.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +7% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9192aa1f03b24571 -->
- Source: `cr-9192aa1f03b24571`, row 931.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% Mana stolen per hit
    - +2% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-839312426826733d -->
- Source: `cr-839312426826733d`, row 935.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +6 to Minimum Weapon Damage
    - +10 to Maximum Weapon Damage
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Slam Weapons + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-04bb4dbc3257813c -->
- Source: `cr-04bb4dbc3257813c`, row 927.
- Required ingredients:
  - 1 × Slam Weapons
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5fa7b887da4795f1 -->
- Source: `cr-5fa7b887da4795f1`, row 959.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Amethyst
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +3 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1a4a234b4c87f506 -->
- Source: `cr-1a4a234b4c87f506`, row 960.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Diamond
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e482b15a86837829 -->
- Source: `cr-e482b15a86837829`, row 957.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Emerald
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +7% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0aa8cd6175d5d567 -->
- Source: `cr-0aa8cd6175d5d567`, row 961.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Eth Rune (#5)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +6% Mana Regeneration
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Nef Rune (#4) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3aa170a723bc55cd -->
- Source: `cr-3aa170a723bc55cd`, row 975.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
  - 1 × Nef Rune (#4)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +30% Enhanced Weapon Damage
    - +50 to Attack Rating
    - ModStr1y \[1\] (translation template unsupported; review)
    - **Review:** one or more output properties retain untranslated keys or arguments.
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-845d3f258633208b -->
- Source: `cr-845d3f258633208b`, row 974.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Cham Rune (#32)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +30% Enhanced Weapon Damage
    - +50 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c183cdbb9c31f362 -->
- Source: `cr-c183cdbb9c31f362`, row 967.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Fal Rune (#19)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Enhanced Weapon Damage
    - +25 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-63bef0df0666228d -->
- Source: `cr-63bef0df0666228d`, row 969.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Amethyst
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Increased Attack Speed
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Diamond + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-486b054e8b40cb7f -->
- Source: `cr-486b054e8b40cb7f`, row 973.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Diamond
  - 1 × Lo Rune (#28)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - Adds 63-511 Weapon Fire Damage
    - Adds 63-511 Weapon Cold Damage
    - Adds 63-511 Weapon Lightning Damage
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Emerald + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8a34dab9a61fc98a -->
- Source: `cr-8a34dab9a61fc98a`, row 966.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Lem Rune (#20)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +150 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-54062a99a5f49669 -->
- Source: `cr-54062a99a5f49669`, row 972.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Emerald
  - 1 × Ohm Rune (#27)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15 to Minimum Weapon Damage
    - +30 to Maximum Weapon Damage
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Chaos Onyx + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1cd37770a743c97a -->
- Source: `cr-1cd37770a743c97a`, row 980.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Chaos Onyx
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Magic Skill Damage
    - -2% to Enemy Magic Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Emerald + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-293e84ecc72b1094 -->
- Source: `cr-293e84ecc72b1094`, row 979.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Emerald
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Poison Skill Damage
    - -2% to Enemy Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Ruby + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-523bb67fe97495ab -->
- Source: `cr-523bb67fe97495ab`, row 976.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Ruby
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Fire Skill Damage
    - -2% to Enemy Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Sapphire + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5e529fbd2448901e -->
- Source: `cr-5e529fbd2448901e`, row 977.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Sapphire
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Cold Skill Damage
    - -2% to Enemy Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Topaz + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-97cea5cdbe03adf9 -->
- Source: `cr-97cea5cdbe03adf9`, row 978.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Orb of Conversion
  - 1 × Topaz
  - 1 × Zod Rune (#33)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% to Lightning Skill Damage
    - -2% to Enemy Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Ruby + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3d31160f740be5a9 -->
- Source: `cr-3d31160f740be5a9`, row 964.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Ruby
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +50% Damage to Demons
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c42a0bee254137ab -->
- Source: `cr-c42a0bee254137ab`, row 968.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Sapphire
  - 1 × Mal Rune (#23)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-80b1bae1fbde994a -->
- Source: `cr-80b1bae1fbde994a`, row 965.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Lum Rune (#17)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +50% Damage to Undead
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d5bf6f8434cfd268 -->
- Source: `cr-d5bf6f8434cfd268`, row 971.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Skull
  - 1 × Vex Rune (#26)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +5% Mana stolen per hit
    - +5% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Topaz + 1 × Io Rune (#16) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5e2a2516df0b2290 -->
- Source: `cr-5e2a2516df0b2290`, row 963.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Io Rune (#16)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - Attacker Takes Damage of 100
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3183831d0072e0e3 -->
- Source: `cr-3183831d0072e0e3`, row 970.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Orb of Infusion
  - 1 × Topaz
  - 1 × Ist Rune (#24)
  - 1 × Jewel
    - Ingredient requirement: Rare Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +30% Chance Items Roll Magic or Better
    - +50% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d2d05c2508ecd1bc -->
- Source: `cr-d2d05c2508ecd1bc`, row 955.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Ruby
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +75 to Attack Rating
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c8b5c0b6f9a501ef -->
- Source: `cr-c8b5c0b6f9a501ef`, row 956.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Sapphire
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +7% Faster Cast Rate
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4b75c73ea83ff087 -->
- Source: `cr-4b75c73ea83ff087`, row 958.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Skull
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +2% Mana stolen per hit
    - +2% Life stolen per hit
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a6b28b2cd7793ce3 -->
- Source: `cr-a6b28b2cd7793ce3`, row 962.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Sol Rune (#12)
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +6 to Minimum Weapon Damage
    - +10 to Maximum Weapon Damage
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Spears and Polearms + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6d4c501f9882bbb6 -->
- Source: `cr-6d4c501f9882bbb6`, row 954.
- Required ingredients:
  - 1 × Spears and Polearms
  - 1 × Topaz
  - 1 × Jewel
    - Ingredient requirement: Magic Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 10
    - +15% Chance Items Roll Magic or Better
    - +30% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=395, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Amazon-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-56d058573ac4420a -->
- Source: `cr-56d058573ac4420a`, row 725.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +1 to Amazon Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Assassin-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8a4be0c8e1c76436 -->
- Source: `cr-8a4be0c8e1c76436`, row 720.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +1 to Assassin Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Barbarian-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f6d0335b29fabb76 -->
- Source: `cr-f6d0335b29fabb76`, row 721.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +1 to Barbarian Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Druid-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-196e83fe639d752e -->
- Source: `cr-196e83fe639d752e`, row 723.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +1 to Druid Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Necromancer-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f57ce83f8a3ef33f -->
- Source: `cr-f57ce83f8a3ef33f`, row 724.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +1 to Necromancer Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Paladin-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0804a07f72b4af4e -->
- Source: `cr-0804a07f72b4af4e`, row 726.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +1 to Paladin Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Sorceress-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-568bacb498c13395 -->
- Source: `cr-568bacb498c13395`, row 722.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +1 to Sorceress Skill Levels
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>Warlock-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0f157e4dc4501f17 -->
- Source: `cr-0f157e4dc4501f17`, row 727.
- Required ingredients:
  - 1 × Amulet
  - 1 × Orb of Infusion
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +1 to Warlock Skills
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

</details>

</details>

</details>

<details>
<summary>Jewel Upgrade Recipe — 1 modified, 0 added, 0 removed</summary>

<details>
<summary>Confirmed matched modifications (1)</summary>

<details>
<summary>6 × Jewel → 1 × Jewel</summary>

<!-- changes.json: cube-recipes / cr-b0cdc5e06b82ab55 -->
- Source: `cr-b0cdc5e06b82ab55`, row 616.
- **Review:** The comparison reports a modification but no player-readable difference could be isolated; review this recipe's source record.

</details>

</details>

</details>

<details>
<summary>Orb of Corruption Recipe — 7 modified, 0 added, 0 removed</summary>

<details>
<summary>Confirmed matched modifications (7)</summary>

<details>
<summary>1 × Any Shield + 1 × Orb of Corruption → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d2e8d3b75e809c3a -->
- Source: `cr-d2e8d3b75e809c3a`, row 189.
- Output property (A): +40% Mana Regeneration (was +20%)

</details>

<details>
<summary>1 × Any Weapon + 1 × Orb of Corruption → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ff58ea4d48e0ee1a -->
- Source: `cr-ff58ea4d48e0ee1a`, row 214.
- Removed output property (A): +10% Deadly Strike

</details>

<details>
<summary>1 × Armor + 1 × Orb of Corruption → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e52bbabc922aebe1 -->
- Source: `cr-e52bbabc922aebe1`, row 202.
- Output property (A): +40% Mana Regeneration (was +20%)

</details>

<details>
<summary>1 × Belt + 1 × Orb of Corruption → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-672841b01742a032 -->
- Source: `cr-672841b01742a032`, row 123.
- Output property (A): +40% Mana Regeneration (was +20%)

</details>

<details>
<summary>1 × Boots + 1 × Orb of Corruption → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bd031ea2c02c6715 -->
- Source: `cr-bd031ea2c02c6715`, row 138.
- Output property (A): +(20-40)% Mana Regeneration (was +(10-20)%)

</details>

<details>
<summary>1 × Gloves + 1 × Orb of Corruption → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-681df9664751c4df -->
- Source: `cr-681df9664751c4df`, row 146.
- Output property (A): +10% Deadly Strike (was +5%)
- Added output property (A): +10% Chance of Open Wounds
- Removed output property (A): +5% Chance of Crushing Blow

</details>

<details>
<summary>1 × Helm + 1 × Orb of Corruption → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-15f469aa298b03ed -->
- Source: `cr-15f469aa298b03ed`, row 162.
- Output property (A): +40% Mana Regeneration (was +20%)

</details>

</details>

</details>

<details>
<summary>Reroll Item Recipe — 0 modified, 0 added, 1 removed</summary>

<details>
<summary>Removed recipe definitions (1)</summary>

<details>
<summary>1 × Gem Bag + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Jewel</summary>

<!-- changes.json: cube-recipes / cr-69ee15d680294f57 -->
- Source: `cr-69ee15d680294f57`, row 626.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -50
  - B: 1 × Jewel
    - Result requirement: Unique Item
- **Review:** Recipe operation fields (Op=15, Param=386, Value=50) are present; their gameplay meaning has not been verified.

</details>

</details>

</details>

<details>
<summary>Socket Punch Recipe — 0 modified, 0 added, 40 removed</summary>

<details>
<summary>Removed recipe definitions (40)</summary>

<details>
<summary>1 × Any Shield + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e6acd36e58906fa2 -->
- Source: `cr-e6acd36e58906fa2`, row 15828.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Unique Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

</details>

<details>
<summary>1 × Any Shield + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ec1630c7e8120415 -->
- Source: `cr-ec1630c7e8120415`, row 15826.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Crafted Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

</details>

<details>
<summary>1 × Any Shield + 2 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-422cbad35ea42225 -->
- Source: `cr-422cbad35ea42225`, row 15836.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Unique Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

</details>

<details>
<summary>1 × Any Shield + 2 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d62663b55c3930d6 -->
- Source: `cr-d62663b55c3930d6`, row 15834.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Crafted Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

</details>

<details>
<summary>1 × Any Shield + 3 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-8468e1ca64f69ea6 -->
- Source: `cr-8468e1ca64f69ea6`, row 15844.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Unique Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

</details>

<details>
<summary>1 × Any Shield + 3 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e28d0b9099c71195 -->
- Source: `cr-e28d0b9099c71195`, row 15842.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Crafted Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

</details>

<details>
<summary>1 × Any Shield + 4 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4fd913b5d216d7cb -->
- Source: `cr-4fd913b5d216d7cb`, row 15852.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Unique Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

</details>

<details>
<summary>1 × Any Shield + 4 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a78a09e865d36704 -->
- Source: `cr-a78a09e865d36704`, row 15850.
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Crafted Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

</details>

<details>
<summary>1 × Any Weapon + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2b24bdc35fd57313 -->
- Source: `cr-2b24bdc35fd57313`, row 15858.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

</details>

<details>
<summary>1 × Any Weapon + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-83126415a3bc31d8 -->
- Source: `cr-83126415a3bc31d8`, row 15860.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

</details>

<details>
<summary>1 × Any Weapon + 2 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a6e9324795b61780 -->
- Source: `cr-a6e9324795b61780`, row 15866.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

</details>

<details>
<summary>1 × Any Weapon + 2 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-fb5ccc1629c721ff -->
- Source: `cr-fb5ccc1629c721ff`, row 15868.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

</details>

<details>
<summary>1 × Any Weapon + 3 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-746880144bf2c9b7 -->
- Source: `cr-746880144bf2c9b7`, row 15874.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

</details>

<details>
<summary>1 × Any Weapon + 3 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-dde5f18cbd19a388 -->
- Source: `cr-dde5f18cbd19a388`, row 15876.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

</details>

<details>
<summary>1 × Any Weapon + 4 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-aab2953993ba3d3a -->
- Source: `cr-aab2953993ba3d3a`, row 15882.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

</details>

<details>
<summary>1 × Any Weapon + 4 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ee9646f811cd6101 -->
- Source: `cr-ee9646f811cd6101`, row 15884.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

</details>

<details>
<summary>1 × Any Weapon + 5 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0519a34fc44544c2 -->
- Source: `cr-0519a34fc44544c2`, row 15892.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 5 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (5)

</details>

<details>
<summary>1 × Any Weapon + 5 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b87307b2eb229f39 -->
- Source: `cr-b87307b2eb229f39`, row 15890.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 5 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (5)

</details>

<details>
<summary>1 × Any Weapon + 6 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-129715cf532a4ed4 -->
- Source: `cr-129715cf532a4ed4`, row 15898.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 6 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (6)

</details>

<details>
<summary>1 × Any Weapon + 6 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9094bc52c7cbdf53 -->
- Source: `cr-9094bc52c7cbdf53`, row 15900.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 6 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (6)

</details>

<details>
<summary>1 × Armor + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-90bd7f700223f228 -->
- Source: `cr-90bd7f700223f228`, row 15778.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

</details>

<details>
<summary>1 × Armor + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f1d15ad68b571e7b -->
- Source: `cr-f1d15ad68b571e7b`, row 15780.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

</details>

<details>
<summary>1 × Armor + 2 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e851af8dd8bb7caf -->
- Source: `cr-e851af8dd8bb7caf`, row 15786.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

</details>

<details>
<summary>1 × Armor + 2 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-fdd2608fbba35238 -->
- Source: `cr-fdd2608fbba35238`, row 15788.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

</details>

<details>
<summary>1 × Armor + 3 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f1c89faa5b0ffb78 -->
- Source: `cr-f1c89faa5b0ffb78`, row 15794.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

</details>

<details>
<summary>1 × Armor + 3 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f45b7073394ed36f -->
- Source: `cr-f45b7073394ed36f`, row 15796.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

</details>

<details>
<summary>1 × Armor + 4 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-00a36c8d2410b971 -->
- Source: `cr-00a36c8d2410b971`, row 15802.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

</details>

<details>
<summary>1 × Armor + 4 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-29cbc598805d0ff2 -->
- Source: `cr-29cbc598805d0ff2`, row 15804.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

</details>

<details>
<summary>1 × Armor + 5 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0cad2d7284a41031 -->
- Source: `cr-0cad2d7284a41031`, row 15812.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 5 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (5)

</details>

<details>
<summary>1 × Armor + 5 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-1dc204b31fc9b932 -->
- Source: `cr-1dc204b31fc9b932`, row 15810.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 5 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (5)

</details>

<details>
<summary>1 × Armor + 6 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2e66465a19bdb903 -->
- Source: `cr-2e66465a19bdb903`, row 15818.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 6 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (6)

</details>

<details>
<summary>1 × Armor + 6 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-682b062d0686410c -->
- Source: `cr-682b062d0686410c`, row 15820.
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 6 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (6)

</details>

<details>
<summary>1 × Helm + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0f6a2466e864ef12 -->
- Source: `cr-0f6a2466e864ef12`, row 15746.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Crafted Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

</details>

<details>
<summary>1 × Helm + 1 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-367993d0f2c74895 -->
- Source: `cr-367993d0f2c74895`, row 15748.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Unique Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

</details>

<details>
<summary>1 × Helm + 2 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-089c8b78e8cbb0b5 -->
- Source: `cr-089c8b78e8cbb0b5`, row 15754.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Crafted Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

</details>

<details>
<summary>1 × Helm + 2 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-e876b510ee107156 -->
- Source: `cr-e876b510ee107156`, row 15756.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Unique Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

</details>

<details>
<summary>1 × Helm + 3 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4767fd14a420ec76 -->
- Source: `cr-4767fd14a420ec76`, row 15762.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Crafted Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

</details>

<details>
<summary>1 × Helm + 3 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f4dd5cec2b9e5215 -->
- Source: `cr-f4dd5cec2b9e5215`, row 15764.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Unique Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

</details>

<details>
<summary>1 × Helm + 4 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b9da5b43f7aaa784 -->
- Source: `cr-b9da5b43f7aaa784`, row 15772.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Unique Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

</details>

<details>
<summary>1 × Helm + 4 × Jewel → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-eb10a45a2185f15b -->
- Source: `cr-eb10a45a2185f15b`, row 15770.
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Crafted Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

</details>

</details>

</details>

<details>
<summary>Sunder Item Crafting Recipe — 0 modified, 13 added, 12 removed</summary>

<details>
<summary>Added recipe definitions (13)</summary>

<details>
<summary>1 × Gem Bag + 1 × Latent Black Cleft + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Jade Facet</summary>

<!-- changes.json: cube-recipes / cr-4e164a33023e71f2 -->
- Source: `cr-4e164a33023e71f2`, row 448.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Black Cleft
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Jade Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Black Cleft + 2 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Heaven Facet</summary>

<!-- changes.json: cube-recipes / cr-bcb070790715d5fb -->
- Source: `cr-bcb070790715d5fb`, row 449.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Black Cleft
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Heaven Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Bone Break + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Star Facet</summary>

<!-- changes.json: cube-recipes / cr-192f27b85b9cba54 -->
- Source: `cr-192f27b85b9cba54`, row 447.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Bone Break
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Star Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Cold Rupture + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Winter Facet</summary>

<!-- changes.json: cube-recipes / cr-f7949138a6767562 -->
- Source: `cr-f7949138a6767562`, row 443.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Cold Rupture
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Winter Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Crack of the Heavens + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Spring Facet</summary>

<!-- changes.json: cube-recipes / cr-7a1678d8e3b412ef -->
- Source: `cr-7a1678d8e3b412ef`, row 445.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Crack of the Heavens
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Spring Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Flame Rift + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Summer Facet</summary>

<!-- changes.json: cube-recipes / cr-b5d89e46692f34a9 -->
- Source: `cr-b5d89e46692f34a9`, row 444.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Flame Rift
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Summer Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Rotting Fissure + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Autumn Facet</summary>

<!-- changes.json: cube-recipes / cr-4ebafc239d50af51 -->
- Source: `cr-4ebafc239d50af51`, row 446.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Rotting Fissure
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Autumn Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Latent Black Cleft + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Southern Worldstone Shard + 1 × Deep Worldstone Shard + 1 × Northern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Black Cleft</summary>

<!-- changes.json: cube-recipes / cr-db805b37c905704b -->
- Source: `cr-db805b37c905704b`, row 421.
- Required ingredients:
  - 1 × Latent Black Cleft
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Southern Worldstone Shard
  - 1 × Deep Worldstone Shard
  - 1 × Northern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Black Cleft

</details>

<details>
<summary>1 × Latent Bone Break + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Northern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Bone Break</summary>

<!-- changes.json: cube-recipes / cr-c47b187a735332d8 -->
- Source: `cr-c47b187a735332d8`, row 420.
- Required ingredients:
  - 1 × Latent Bone Break
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Northern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Bone Break

</details>

<details>
<summary>1 × Latent Cold Rupture + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Eastern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Cold Rupture</summary>

<!-- changes.json: cube-recipes / cr-feea0ae3eded2543 -->
- Source: `cr-feea0ae3eded2543`, row 417.
- Required ingredients:
  - 1 × Latent Cold Rupture
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Eastern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Cold Rupture

</details>

<details>
<summary>1 × Latent Crack of the Heavens + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Southern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Crack of the Heavens</summary>

<!-- changes.json: cube-recipes / cr-8fbfd52d8f62a9e5 -->
- Source: `cr-8fbfd52d8f62a9e5`, row 418.
- Required ingredients:
  - 1 × Latent Crack of the Heavens
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Southern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Crack of the Heavens

</details>

<details>
<summary>1 × Latent Flame Rift + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Deep Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Flame Rift</summary>

<!-- changes.json: cube-recipes / cr-4a5288ad23a14d1a -->
- Source: `cr-4a5288ad23a14d1a`, row 419.
- Required ingredients:
  - 1 × Latent Flame Rift
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Deep Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Flame Rift

</details>

<details>
<summary>1 × Latent Rotting Fissure + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Western Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Rotting Fissure</summary>

<!-- changes.json: cube-recipes / cr-2ffaaa0c091a21db -->
- Source: `cr-2ffaaa0c091a21db`, row 416.
- Required ingredients:
  - 1 × Latent Rotting Fissure
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Western Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Rotting Fissure

</details>

</details>

<details>
<summary>Removed recipe definitions (12)</summary>

<details>
<summary>1 × Gem Bag + 1 × Latent Black Cleft + 2 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Heaven Facet</summary>

<!-- changes.json: cube-recipes / cr-8700e732566389c3 -->
- Source: `cr-8700e732566389c3`, row 518.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Black Cleft
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Heaven Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Bone Break + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Star Facet</summary>

<!-- changes.json: cube-recipes / cr-90171cfe7f9fd0f0 -->
- Source: `cr-90171cfe7f9fd0f0`, row 517.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Bone Break
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Star Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Cold Rupture + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Winter Facet</summary>

<!-- changes.json: cube-recipes / cr-9d840edf79f3a7da -->
- Source: `cr-9d840edf79f3a7da`, row 513.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Cold Rupture
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Winter Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Crack of the Heavens + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Spring Facet</summary>

<!-- changes.json: cube-recipes / cr-2cac9428c66b8559 -->
- Source: `cr-2cac9428c66b8559`, row 515.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Crack of the Heavens
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Spring Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Flame Rift + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Summer Facet</summary>

<!-- changes.json: cube-recipes / cr-921ce6cf84c09abf -->
- Source: `cr-921ce6cf84c09abf`, row 514.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Flame Rift
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Summer Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Gem Bag + 1 × Latent Rotting Fissure + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Autumn Facet</summary>

<!-- changes.json: cube-recipes / cr-470c12b114b7dbc7 -->
- Source: `cr-470c12b114b7dbc7`, row 516.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Latent Rotting Fissure
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -100
  - B: 1 × Autumn Facet
- **Review:** Recipe operation fields (Op=15, Param=386, Value=100) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Latent Black Cleft + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Southern Worldstone Shard + 1 × Deep Worldstone Shard + 1 × Northern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Black Cleft</summary>

<!-- changes.json: cube-recipes / cr-5e92e67c91d609a5 -->
- Source: `cr-5e92e67c91d609a5`, row 491.
- Required ingredients:
  - 1 × Latent Black Cleft
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Southern Worldstone Shard
  - 1 × Deep Worldstone Shard
  - 1 × Northern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Black Cleft

</details>

<details>
<summary>1 × Latent Bone Break + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Northern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Bone Break</summary>

<!-- changes.json: cube-recipes / cr-90c07dea8279432e -->
- Source: `cr-90c07dea8279432e`, row 490.
- Required ingredients:
  - 1 × Latent Bone Break
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Northern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Bone Break

</details>

<details>
<summary>1 × Latent Cold Rupture + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Eastern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Cold Rupture</summary>

<!-- changes.json: cube-recipes / cr-300049d782618ef9 -->
- Source: `cr-300049d782618ef9`, row 487.
- Required ingredients:
  - 1 × Latent Cold Rupture
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Eastern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Cold Rupture

</details>

<details>
<summary>1 × Latent Crack of the Heavens + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Southern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Crack of the Heavens</summary>

<!-- changes.json: cube-recipes / cr-8c03d254fd1705a1 -->
- Source: `cr-8c03d254fd1705a1`, row 488.
- Required ingredients:
  - 1 × Latent Crack of the Heavens
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Southern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Crack of the Heavens

</details>

<details>
<summary>1 × Latent Flame Rift + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Deep Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Flame Rift</summary>

<!-- changes.json: cube-recipes / cr-e92c2df263624022 -->
- Source: `cr-e92c2df263624022`, row 489.
- Required ingredients:
  - 1 × Latent Flame Rift
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Deep Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Flame Rift

</details>

<details>
<summary>1 × Latent Rotting Fissure + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Western Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Rotting Fissure</summary>

<!-- changes.json: cube-recipes / cr-9faed0b3028a9357 -->
- Source: `cr-9faed0b3028a9357`, row 486.
- Required ingredients:
  - 1 × Latent Rotting Fissure
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Western Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Rotting Fissure

</details>

</details>

</details>

<details>
<summary>Uber Charm Upgrade Recipe — 4 modified, 6 added, 10 removed</summary>

<details>
<summary>Confirmed matched modifications (4)</summary>

<details>
<summary>1 × Annihilus + 3 × Orb of Assemblage → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-61f6b76e87210df4 -->
- Source: `cr-61f6b76e87210df4`, row 633.
- Additional notes: Item Enchantment Recipe / Socket Item
- Removed output property (A): +1% to Experience Gained

</details>

<details>
<summary>1 × Annihilus + 3 × Orb of Conversion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ed745f89d6411d14 -->
- Source: `cr-ed745f89d6411d14`, row 635.
- Additional notes: Item Enchantment Recipe / Socket Item
- Removed output property (A): +1% to Experience Gained

</details>

<details>
<summary>1 × Annihilus + 3 × Orb of Corruption → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-69ce8debb478e519 -->
- Source: `cr-69ce8debb478e519`, row 634.
- Additional notes: Item Enchantment Recipe / Socket Item
- Removed output property (A): +1% to Experience Gained

</details>

<details>
<summary>1 × Annihilus + 3 × Orb of Infusion → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a3e9b657e7805847 -->
- Source: `cr-a3e9b657e7805847`, row 632.
- Additional notes: Item Enchantment Recipe / Socket Item
- Removed output property (A): +1% to Experience Gained

</details>

</details>

<details>
<summary>Added recipe definitions (6)</summary>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Obsidian Beacon</summary>

<!-- changes.json: cube-recipes / cr-a6fde749ac7aa932 -->
- Source: `cr-a6fde749ac7aa932`, row 630.
- Additional notes: Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Obsidian Beacon
- **Review:** Recipe operation fields (Op=18, Param=419, Value=5) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-22c6bf2f19ba1ea7 -->
- Source: `cr-22c6bf2f19ba1ea7`, row 625.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 6
    - +2 to all Attributes
    - +2% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=419, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4df473077ba1fbd6 -->
- Source: `cr-4df473077ba1fbd6`, row 626.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 6
    - +2 to all Attributes
    - +2% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=419, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-919ab3cac2754a29 -->
- Source: `cr-919ab3cac2754a29`, row 627.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 6
    - +2 to all Attributes
    - +2% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=419, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9e39b29639ece900 -->
- Source: `cr-9e39b29639ece900`, row 628.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 6
    - +2 to all Attributes
    - +2% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=419, Value=3) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d8d6aa7e2cd89b23 -->
- Source: `cr-d8d6aa7e2cd89b23`, row 629.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 6
    - +2 to all Attributes
    - +2% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=419, Value=4) are present; their gameplay meaning has not been verified.

</details>

</details>

<details>
<summary>Removed recipe definitions (10)</summary>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Obsidian Beacon</summary>

<!-- changes.json: cube-recipes / cr-4ef9cbd5a1ebb612 -->
- Source: `cr-4ef9cbd5a1ebb612`, row 658.
- Additional notes: Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Obsidian Beacon
- **Review:** Recipe operation fields (Op=18, Param=420, Value=9) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-12c2e73d2e74ecbf -->
- Source: `cr-12c2e73d2e74ecbf`, row 653.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 10
    - +1 to All Skills
    - +1 to all Attributes
    - +1% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=420, Value=4) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-389c4ac43ddbaa5b -->
- Source: `cr-389c4ac43ddbaa5b`, row 649.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 10
    - +1 to all Attributes
    - +1% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=420, Value=0) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-4b3e3485ce0cacfd -->
- Source: `cr-4b3e3485ce0cacfd`, row 651.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 10
    - +1 to all Attributes
    - +1% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=420, Value=2) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5d1a77195ed91f03 -->
- Source: `cr-5d1a77195ed91f03`, row 657.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 10
    - +1 to all Attributes
    - +1% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=420, Value=8) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-5e3172ef5aa49ce1 -->
- Source: `cr-5e3172ef5aa49ce1`, row 655.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 10
    - +1 to all Attributes
    - +1% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=420, Value=6) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-a9b183358fd6c418 -->
- Source: `cr-a9b183358fd6c418`, row 656.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 10
    - +1 to all Attributes
    - +1% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=420, Value=7) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c6d033a352bb218e -->
- Source: `cr-c6d033a352bb218e`, row 654.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 10
    - +1 to all Attributes
    - +1% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=420, Value=5) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d1ccbe75b41cace4 -->
- Source: `cr-d1ccbe75b41cace4`, row 652.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 10
    - +1 to all Attributes
    - +1% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=420, Value=3) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-f02f2573aa57998a -->
- Source: `cr-f02f2573aa57998a`, row 650.
- Additional notes: Item Enchantment Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Return Exact Input Item
    - Upgrades: 1 / 10
    - +1 to all Attributes
    - +1% to All Resistances
- **Review:** Recipe operation fields (Op=18, Param=420, Value=1) are present; their gameplay meaning has not been verified.

</details>

</details>

</details>

<details>
<summary>Other recipes — 1 modified, 39 added, 0 removed</summary>

<details>
<summary>Confirmed matched modifications (1)</summary>

<details>
<summary>1 × Amulet + 1 × Amethyst + 1 × Topaz + 1 × Sapphire + 1 × Emerald + 1 × Ruby + 1 × Diamond → 1 × Amulet</summary>

<!-- changes.json: cube-recipes / cr-89cb53ab93f59a36 -->
- Source: `cr-89cb53ab93f59a36`, row 470.
- Added result requirement (A): Force Prefix (381)
- Removed result requirement (A): Force Prefix (387)

</details>

</details>

<details>
<summary>Added recipe definitions (39)</summary>

<details>
<summary>1 × Any Weapon + 1 × Ruby + 4 × Healing Potion → 1 × Use Input Item Type</summary>

<!-- changes.json: cube-recipes / cr-eb912f164b3d580d -->
- Source: `cr-eb912f164b3d580d`, row 478.
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Magic Item
  - 1 × Ruby
  - 4 × Healing Potion
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - Result requirement: Force Suffix (101)

</details>

<details>
<summary>1 × Axe [N] + 1 × Knife → 1 × Throwing Axe [N]</summary>

<!-- changes.json: cube-recipes / cr-d1c7d1a4540fc357 -->
- Source: `cr-d1c7d1a4540fc357`, row 475.
- Required ingredients:
  - 1 × Axe \[N\]
  - 1 × Knife
- Results:
  - A: 1 × Throwing Axe \[N\]
    - Result requirement: Normal Item

</details>

<details>
<summary>1 × Gem Bag + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Jewel</summary>

<!-- changes.json: cube-recipes / cr-0ce01d6a9a6ff61f -->
- Source: `cr-0ce01d6a9a6ff61f`, row 602.
- Required ingredients:
  - 1 × Gem Bag
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Gem Bag, Update Gem Credits
    - Result requirement: Keep Modifiers
    - Gems: -50
  - B: 1 × Jewel
    - Result requirement: Unique Item
- **Review:** Recipe operation fields (Op=15, Param=386, Value=50) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Knife + 1 × Diamond + 1 × Staff + 1 × Belt → 1 × Polearm</summary>

<!-- changes.json: cube-recipes / cr-a372dddc34a796e6 -->
- Source: `cr-a372dddc34a796e6`, row 477.
- Required ingredients:
  - 1 × Knife
  - 1 × Diamond
  - 1 × Staff
  - 1 × Belt
- Results:
  - A: 1 × Polearm
    - Result requirement: Magic Item
    - Result requirement: Force Prefix (5)

</details>

<details>
<summary>1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Dem Rune (#38)</summary>

<!-- changes.json: cube-recipes / cr-310c44ef3f7155f8 -->
- Source: `cr-310c44ef3f7155f8`, row 647.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
  - B: 1 × Orb of Shadows
  - C: 1 × Dem Rune (#38)
- **Review:** Recipe operation fields (Op=15, Param=37, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Dem Rune (#38)</summary>

<!-- changes.json: cube-recipes / cr-8990e74651091c7f -->
- Source: `cr-8990e74651091c7f`, row 648.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
  - B: 1 × Orb of Shadows
  - C: 1 × Dem Rune (#38)
- **Review:** Recipe operation fields (Op=4, Param=438, Value=999) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Grit Rune (#37)</summary>

<!-- changes.json: cube-recipes / cr-51c845edffb08e29 -->
- Source: `cr-51c845edffb08e29`, row 638.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
  - B: 1 × Orb of Shadows
  - C: 1 × Grit Rune (#37)
- **Review:** Recipe operation fields (Op=4, Param=438, Value=499) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Grit Rune (#37)</summary>

<!-- changes.json: cube-recipes / cr-db35b745d80cbd7b -->
- Source: `cr-db35b745d80cbd7b`, row 637.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
  - B: 1 × Orb of Shadows
  - C: 1 × Grit Rune (#37)
- **Review:** Recipe operation fields (Op=15, Param=76, Value=6) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Hev Rune (#39)</summary>

<!-- changes.json: cube-recipes / cr-05822107b6436d5c -->
- Source: `cr-05822107b6436d5c`, row 658.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
  - B: 1 × Orb of Shadows
  - C: 1 × Hev Rune (#39)
- **Review:** Recipe operation fields (Op=4, Param=438, Value=2999) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Hev Rune (#39)</summary>

<!-- changes.json: cube-recipes / cr-f33e96e5e9049545 -->
- Source: `cr-f33e96e5e9049545`, row 657.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
  - B: 1 × Orb of Shadows
  - C: 1 × Hev Rune (#39)
- **Review:** Recipe operation fields (Op=15, Param=40, Value=1) are present; their gameplay meaning has not been verified.

</details>

<details>
<summary>1 × Ring + 1 × Emerald + 1 × Antidote Potion → 1 × Ring</summary>

<!-- changes.json: cube-recipes / cr-6a8e3f20e71664cc -->
- Source: `cr-6a8e3f20e71664cc`, row 474.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Emerald
  - 1 × Antidote Potion
- Results:
  - A: 1 × Ring
    - Result requirement: Magic Item
    - Result requirement: Force Prefix (373)

</details>

<details>
<summary>1 × Ring + 1 × Ruby + 1 × Exploding Potion → 1 × Ring</summary>

<!-- changes.json: cube-recipes / cr-8c6c50c60700233d -->
- Source: `cr-8c6c50c60700233d`, row 471.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Ruby
  - 1 × Exploding Potion
- Results:
  - A: 1 × Ring
    - Result requirement: Magic Item
    - Result requirement: Force Prefix (357)

</details>

<details>
<summary>1 × Ring + 1 × Sapphire + 1 × Thawing Potion → 1 × Ring</summary>

<!-- changes.json: cube-recipes / cr-628aec07d7247a4d -->
- Source: `cr-628aec07d7247a4d`, row 472.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Sapphire
  - 1 × Thawing Potion
- Results:
  - A: 1 × Ring
    - Result requirement: Magic Item
    - Result requirement: Force Prefix (350)

</details>

<details>
<summary>1 × Ring + 1 × Topaz + 1 × rvs [] (translation template unsupported; review) (Review: translation unavailable or unsupported.) → 1 × Ring</summary>

<!-- changes.json: cube-recipes / cr-11df7400a1def6f8 -->
- Source: `cr-11df7400a1def6f8`, row 473.
- **Review: translation unavailable or unsupported.**
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Topaz
  - 1 × rvs \[\] (translation template unsupported; review) (**Review: translation unavailable or unsupported.**)
- Results:
  - A: 1 × Ring
    - Result requirement: Magic Item
    - Result requirement: Force Prefix (365)

</details>

<details>
<summary>1 × Spear + 1 × Arrows → 1 × Javelin [N]</summary>

<!-- changes.json: cube-recipes / cr-88202d9134faf824 -->
- Source: `cr-88202d9134faf824`, row 476.
- Required ingredients:
  - 1 × Spear
  - 1 × Arrows
- Results:
  - A: 1 × Javelin \[N\]
    - Result requirement: Normal Item

</details>

<details>
<summary>Amazon-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2b5931682be51c22 -->
- Source: `cr-2b5931682be51c22`, row 649.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Amazon Skill Levels
    - +5% Magic Resistance

</details>

<details>
<summary>Amazon-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-abba872038c3f663 -->
- Source: `cr-abba872038c3f663`, row 639.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Amazon Skill Levels
    - +5% Increased Maximum Life

</details>

<details>
<summary>Amazon-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-14724f56354ab885 -->
- Source: `cr-14724f56354ab885`, row 659.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Amazon Skill Levels
    - +5% to All Maximum Resistances

</details>

<details>
<summary>Assassin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ee550d4942ca9a76 -->
- Source: `cr-ee550d4942ca9a76`, row 655.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Assassin Skill Levels
    - +5% Magic Resistance

</details>

<details>
<summary>Assassin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-c69b79a0cef7d6ef -->
- Source: `cr-c69b79a0cef7d6ef`, row 645.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Assassin Skill Levels
    - +5% Increased Maximum Life

</details>

<details>
<summary>Assassin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d6192d4cd99f5b19 -->
- Source: `cr-d6192d4cd99f5b19`, row 665.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Assassin Skill Levels
    - +5% to All Maximum Resistances

</details>

<details>
<summary>Barbarian-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-9bc546aac10e36b6 -->
- Source: `cr-9bc546aac10e36b6`, row 653.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Barbarian Skill Levels
    - +5% Magic Resistance

</details>

<details>
<summary>Barbarian-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-740bb3024d3b732f -->
- Source: `cr-740bb3024d3b732f`, row 643.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Barbarian Skill Levels
    - +5% Increased Maximum Life

</details>

<details>
<summary>Barbarian-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-838966ae57e2f759 -->
- Source: `cr-838966ae57e2f759`, row 663.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Barbarian Skill Levels
    - +5% to All Maximum Resistances

</details>

<details>
<summary>Druid-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-80dbea30849ef79e -->
- Source: `cr-80dbea30849ef79e`, row 654.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Druid Skill Levels
    - +5% Magic Resistance

</details>

<details>
<summary>Druid-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-114d860ef4f8ea07 -->
- Source: `cr-114d860ef4f8ea07`, row 644.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Druid Skill Levels
    - +5% Increased Maximum Life

</details>

<details>
<summary>Druid-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3f96881d54055601 -->
- Source: `cr-3f96881d54055601`, row 664.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Druid Skill Levels
    - +5% to All Maximum Resistances

</details>

<details>
<summary>Necromancer-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-cd2f480f66f2d777 -->
- Source: `cr-cd2f480f66f2d777`, row 651.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Necromancer Skill Levels
    - +5% Magic Resistance

</details>

<details>
<summary>Necromancer-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-3e12ea1b692a2d8e -->
- Source: `cr-3e12ea1b692a2d8e`, row 641.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Necromancer Skill Levels
    - +5% Increased Maximum Life

</details>

<details>
<summary>Necromancer-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-0fc9e80d0a1dc194 -->
- Source: `cr-0fc9e80d0a1dc194`, row 661.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Necromancer Skill Levels
    - +5% to All Maximum Resistances

</details>

<details>
<summary>Paladin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-6e037132c1e7e5be -->
- Source: `cr-6e037132c1e7e5be`, row 652.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Paladin Skill Levels
    - +5% Magic Resistance

</details>

<details>
<summary>Paladin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-fe750d113241d827 -->
- Source: `cr-fe750d113241d827`, row 642.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Paladin Skill Levels
    - +5% Increased Maximum Life

</details>

<details>
<summary>Paladin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-2cbe0f1f914e4421 -->
- Source: `cr-2cbe0f1f914e4421`, row 662.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Paladin Skill Levels
    - +5% to All Maximum Resistances

</details>

<details>
<summary>Sorceress-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-bed008cc7005f9ed -->
- Source: `cr-bed008cc7005f9ed`, row 650.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Sorceress Skill Levels
    - +5% Magic Resistance

</details>

<details>
<summary>Sorceress-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-b8d2ace0dd9f0bf8 -->
- Source: `cr-b8d2ace0dd9f0bf8`, row 640.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Sorceress Skill Levels
    - +5% Increased Maximum Life

</details>

<details>
<summary>Sorceress-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-016a68ca1330774a -->
- Source: `cr-016a68ca1330774a`, row 660.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Sorceress Skill Levels
    - +5% to All Maximum Resistances

</details>

<details>
<summary>Warlock-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-d727f1b5b831739f -->
- Source: `cr-d727f1b5b831739f`, row 656.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Warlock Skills
    - +5% Magic Resistance

</details>

<details>
<summary>Warlock-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-fcb30773b8ba9126 -->
- Source: `cr-fcb30773b8ba9126`, row 646.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Warlock Skills
    - +5% Increased Maximum Life

</details>

<details>
<summary>Warlock-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item</summary>

<!-- changes.json: cube-recipes / cr-ed3553c7ae130cfc -->
- Source: `cr-ed3553c7ae130cfc`, row 666.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Warlock Skills
    - +5% to All Maximum Resistances

</details>

</details>

</details>

