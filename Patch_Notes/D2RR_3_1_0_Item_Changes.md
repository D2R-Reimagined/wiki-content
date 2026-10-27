---
title: D2R Reimagined Patch 3.1.0 Item Changes
description: A list of item changes additions and removals in patch 3.1.0
published: true
date: 2026-10-27T10:26:22.376Z
tags: patch, item changes
editor: markdown
dateCreated: 2026-10-27T02:09:31.599Z
---

hi del# Item patch notes

## Change counts

| Category | Added | Removed | Modified | Unchanged | Nested changes |
|---|---:|---:|---:|---:|---|
| Uniques | 3 | 1 | 332 | 1107 | — |
| Sets | 0 | 0 | 57 | 50 | 0 added, 0 removed, 84 modified |
| Runewords | 6 | 0 | 134 | 79 | — |
| Base armor | 0 | 0 | 45 | 172 | 0 added, 0 removed, 60 modified |
| Base weapons | 0 | 0 | 6 | 291 | 0 added, 0 removed, 0 modified |
| Magic prefixes | 8 | 4 | 15 | 1056 | — |
| Magic suffixes | 2 | 0 | 21 | 745 | — |

English translations: old snapshot available (manifest-verified); new snapshot available (manifest-verified).
Keyed names or properties needing review (fallback or unsupported template): 18.
Comparison diagnostics: 0 errors, 0 warnings.

Only comparator-reported changes are listed. Unpaired property lines remain additions and removals; no buff or nerf classification is inferred.

## Uniques

<details>
<summary>Uniques — 3 added, 1 removed, 332 modified</summary>

<details>
<summary>Amazon Bow (2 changed: 2 modified)</summary>

#### Modified

<!-- changes.json: uniques / Abyssal Torment -->
##### Abyssal Torment

- Property changes:
  - Lines:
    - Changed: 5% Chance to cast level 10 Dim Vision on striking (was 10%)

<!-- changes.json: uniques / Wintershock -->
##### Wintershock

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 30 Winter's Pulse on striking (was 15%)
    - Changed: 10% Chance to cast level 30 Storm Pulse on striking (was 15%)
    - Changed: Level (15-20) Holy Shock Aura When Equipped (was Level 20)

</details>

<details>
<summary>Amazon Spear (2 changed: 2 modified)</summary>

#### Modified

<!-- changes.json: uniques / Amanda's Point -->
##### Amanda's Point

- Property changes:
  - Lines:
    - Changed: +10% Chance of Crushing Blow (was +(15-20)%)

<!-- changes.json: uniques / Vile Temptress -->
##### Vile Temptress

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 1 Arc on attack
    - Removed: 12% Chance to cast level 1 Arc on striking

</details>

<details>
<summary>Amulet (1 changed: 1 modified)</summary>

#### Modified

<!-- changes.json: uniques / Entropy Locket -->
##### Entropy Locket

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 25 Miasma Chain on attack
    - Removed: 9% Chance to cast level 25 Miasma Chain on striking

</details>

<details>
<summary>Armor (17 changed: 17 modified)</summary>

#### Modified

<!-- changes.json: uniques / Anaconda Skin -->
##### Anaconda Skin

- Property changes:
  - Lines:
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Breastplate of Gond -->
##### Breastplate of Gond

- Changed details:
  - Code: urs (was brs)
  - Base Item: Great Hauberk \[E\] (was Breast Plate \[N\])
  - Item Level: 105 (was 10)
  - Required Level: 90 (was 25)
- Other data changes (review):
  - DamageArmorEnhanced: true (was false)
- Property changes:
  - Lines:
    - Changed: -(15-20)% to Enemy Lightning Resistance (was -(10-15)%)
    - Changed: +(20-30)% to Lightning Skill Damage (was +(10-15)%)
    - Changed: +(8-12)% Lightning Damage Absorbed (was +(10-15)%)
    - Added: +1 to Fade (oskill)
    - Added: +(300-400)% Enhanced Defense
    - Added: +(3-5)% to Maximum Lightning Resistance
    - Added: +(10-20)% Physical Damage Reduction
    - Added: Socketed (0-4)
    - Added: +(2-3) to Lightning Skills
    - Removed: Adds 1-75 Weapon Lightning Damage
    - Removed: +(180-200) Defense
    - Removed: +(40-60)% Lightning Resistance
  - Equipment Lines:
    - Changed: Defense: 2008-2510 (was 245-268)
    - Changed: Required Strength: 118 (was 30)

<!-- changes.json: uniques / Cold Comfort -->
##### Cold Comfort

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 8 Chilling Armor when struck (was 15%)

<!-- changes.json: uniques / Ghostly Chainmail -->
##### Ghostly Chainmail

- Changed details:
  - Code: uhn (was chn)
  - Base Item: Boneweave \[E\] (was Chain Mail \[N\])
  - Item Level: 105 (was 8)
  - Required Level: 90 (was 23)
- Other data changes (review):
  - DamageArmorEnhanced: true (was false)
- Property changes:
  - Lines:
    - Changed: -(15-20)% to Enemy Cold Resistance (was -10%)
    - Changed: +(20-30)% to Cold Skill Damage (was +10%)
    - Added: +(2-3) to Cold Skills
    - Added: +5 to Frozen Armor (oskill)
    - Added: +(300-400)% Enhanced Defense
    - Added: +(3-5)% to Maximum Cold Resistance
    - Added: +(8-12)% Cold Damage Absorbed
    - Added: +(10-20)% Physical Damage Reduction
    - Added: Socketed (0-4)
    - Removed: +(155-175) Defense
    - Removed: +(30-50)% Cold Resistance
    - Removed: Repairs 1 durability in 25 seconds
    - Removed: strethereal \[1\] (translation template unsupported; review)
  - Equipment Lines:
    - Changed: Defense: 2024-2530 (was 263-287)
    - Changed: Required Strength: 158 (was 48)

<!-- changes.json: uniques / Gillian's Brazier -->
##### Gillian's Brazier

- Changed details:
  - Code: uul (was xui)
  - Base Item: Shadow Plate \[E\] (was Ghost Armor \[X\])
  - Item Level: 83 (was 25)
  - Required Level: 75 (was 41)
- Property changes:
  - Lines:
    - Changed: +(20-30)% Faster Cast Rate (was +25%)
    - Changed: +(100-200)% Enhanced Defense (was +(90-125)%)
    - Added: +(1-2) to Fire Skills
    - Added: +(20-30)% Faster Run/Walk Speed
    - Added: +(20-30)% to Fire Skill Damage
    - Added: +(10-20)% to Dexterity
    - Added: +(10-20)% to Energy
    - Removed: +(1-2) to Amazon Skill Levels
    - Removed: +(1-2) to Assassin Skill Levels
    - Removed: +(1-2) to Sorceress Skill Levels
    - Removed: +25 to Strength
    - Removed: +35 to Dexterity
  - Equipment Lines:
    - Changed: Defense: 1116-1674 (was 224-265)
    - Changed: Durability: 70 of 70 (was 20 of 20)
    - Changed: Required Strength: 230 (was 38)

<!-- changes.json: uniques / Gloomform -->
##### Gloomform

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 2 Dim Vision when struck (was 7%)

<!-- changes.json: uniques / Lachdanan's Heart -->
##### Lachdanan's Heart

- Changed details:
  - Item Level: 105 (was 85)
- Property changes:
  - Lines:
    - Changed: +(2-3) to All Skills (was +1)
    - Changed: +(250-350)% Enhanced Weapon Damage (was +(200-250)%)
    - Changed: +(300-400)% Enhanced Defense (was +(250-300)%)
    - Added: -(15-30)% to Enemy Physical Damage Resistance
    - Added: +10% to Vitality
    - Added: +10% to Strength
    - Removed: +30 to Vitality
    - Removed: +(5-10)% Physical Damage Reduction
    - Removed: Requirements Increased By 20%
  - Equipment Lines:
    - Changed: Defense: 2168-2710 (was 1897-2168)
    - Changed: Required Strength: 208 (was 249)

<!-- changes.json: uniques / Legacy of the Eternals -->
##### Legacy of the Eternals

- Changed details:
  - Item Level: 105 (was 85)
- Property changes:
  - Lines:
    - Changed: +(2-3) to All Skills (was +(1-2))
    - Changed: +(250-300)% Enhanced Defense (was +(75-100)%)
    - Changed: +(25-30)% Increased Maximum Mana (was +25%)
    - Changed: +(3-5)% to All Maximum Resistances (was +5%)
    - Changed: +(5-10)% Cold Damage Absorbed (was +5%)
    - Changed: +(5-10)% Lightning Damage Absorbed (was +5%)
    - Changed: +(5-10)% Fire Damage Absorbed (was +5%)
    - Added: -(15-20)% to All Enemy Elemental Resistances
    - Added: +(5-10)% Magic Damage Absorbed
    - Removed: 20% Increased Chance of Blocking
  - Equipment Lines:
    - Changed: Defense: 1837-2100 (was 918-1050)

<!-- changes.json: uniques / Lilt of the Dryad -->
##### Lilt of the Dryad

- Property changes:
  - Lines:
    - Removed: Slows Target by 15%

<!-- changes.json: uniques / Rattlecage -->
##### Rattlecage

- Property changes:
  - Lines:
    - Changed: +50 to Attack Rating (was +45)
    - Changed: +15% Hits Cause Monsters to Flee (was +40%)
    - Added: +20% Faster Run/Walk Speed
    - Removed: +15% Chance of Crushing Blow

<!-- changes.json: uniques / Red Dragon Scales -->
##### Red Dragon Scales

- Changed details:
  - Code: upl (was scl)
  - Base Item: Balrog Skin \[E\] (was Scale Mail \[N\])
  - Item Level: 105 (was 6)
  - Required Level: 90 (was 21)
- Other data changes (review):
  - DamageArmorEnhanced: true (was false)
- Property changes:
  - Lines:
    - Changed: -(15-20)% to Enemy Fire Resistance (was -10%)
    - Changed: +(20-30)% to Fire Skill Damage (was +10%)
    - Changed: +(8-12)% Fire Damage Absorbed (was +10%)
    - Changed: +(10-20)% Physical Damage Reduction (was +10%)
    - Added: +(2-3) to Fire Skills
    - Added: +5 to Warmth (oskill)
    - Added: +(300-400)% Enhanced Defense
    - Added: +(3-5)% to Maximum Fire Resistance
    - Added: Socketed (0-4)
    - Removed: +(130-150) Defense
    - Removed: +(20-40)% Fire Resistance
  - Equipment Lines:
    - Changed: Defense: 2072-2590 (was 187-210)
    - Changed: Durability: 30 of 30 (was 36 of 36)
    - Changed: Required Strength: 165 (was 44)

<!-- changes.json: uniques / Royal Plate -->
##### Royal Plate

- Property changes:
  - Lines:
    - Removed: Vendor Prices Reduced By (5-10)%

<!-- changes.json: uniques / Scars of the Forefathers -->
##### Scars of the Forefathers

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 10 Life Tap on attack
    - Removed: 10% Chance to cast level 12 Life Tap on striking

<!-- changes.json: uniques / Shadowtrick -->
##### Shadowtrick

- Changed details:
  - Item Level: 105 (was 84)
- Property changes:
  - Lines:
    - Changed: Level (8-10) Conviction Aura When Equipped (was Level (4-8))
    - Changed: +(2-3) to All Skills (was +(1-2))
    - Changed: +(10-15)% to All Elemental Skill Damage (was +10%)
    - Changed: +(200-300)% Enhanced Defense (was +(150-200)%)
  - Equipment Lines:
    - Changed: Defense: 1674-2232 (was 1395-1674)

<!-- changes.json: uniques / Shambling Mound -->
##### Shambling Mound

- Changed details:
  - Code: uth (was xul)
  - Base Item: Lacquered Plate \[E\] (was Chaos Armor \[X\])
  - Item Level: 82 (was 60)
  - Required Level: 82 (was 69)
- Property changes:
  - Lines:
    - Changed: +(25-50)% to Poison Skill Damage (was +(15-20)%)
    - Changed: +(50-100)% Poison Resistance (was +(40-70)%)
    - Changed: Socketed (1-4) (was (2))
    - Changed: +(2-3) to Poison Skills (was +2)
    - Added: +(10-20)% Physical Damage Reduction
    - Removed: +(10-20)% Faster Run/Walk Speed
  - Equipment Lines:
    - Changed: Defense: 1494-1584 to 1494-1584 (was 1031-1186 to 1031-1186)
    - Changed: Durability: 55 of 55 (was 70 of 70)
    - Changed: Required Strength: 208 (was 140)

<!-- changes.json: uniques / Shattering Blow -->
##### Shattering Blow

- Property changes:
  - Lines:
    - Added: +15% Chance of Open Wounds
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Tesla's Cuirass -->
##### Tesla's Cuirass

- Changed details:
  - Code: utp (was xrs)
  - Base Item: Archon Plate \[E\] (was Cuirass \[X\])
  - Item Level: 84 (was 43)
  - Required Level: 84 (was 47)
- Property changes:
  - Lines:
    - Changed: +(150-210)% Enhanced Defense (was +(160-210)%)
    - Added: 10% Chance to cast level 10 Arc on attack
    - Added: 15% Chance to cast level 10 Arc when struck
    - Added: -(15-30)% to Enemy Lightning Resistance
    - Added: +(3-5)% to Maximum Lightning Resistance
    - Added: +(50-100)% Lightning Resistance
    - Removed: +15% Faster Run/Walk Speed
    - Removed: +0.25 to Maximum Weapon Damage (Based on Character Level)
    - Removed: -(10-15)% Target Defense
    - Removed: +4% Life stolen per hit
    - Removed: Socketed (2)
  - Equipment Lines:
    - Changed: Defense: 1312-1627 (was 527-629)
    - Changed: Durability: 60 of 60 (was 50 of 50)
    - Changed: Required Strength: 103 (was 65)

</details>

<details>
<summary>Assassin Claw (12 changed: 12 modified)</summary>

#### Modified

<!-- changes.json: uniques / Adamantine Razors -->
##### Adamantine Razors

- Property changes:
  - Lines:
    - Added: +25% Chance of Open Wounds
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Androsphinx -->
##### Androsphinx

- Property changes:
  - Lines:
    - Added: +15% Deadly Strike
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Avalanche Strike -->
##### Avalanche Strike

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 5 Hailstorm on attack
    - Removed: 15% Chance to cast level 5 Hailstorm on striking

<!-- changes.json: uniques / Bladespan -->
##### Bladespan

- Property changes:
  - Lines:
    - Removed: +1 to Assassin Skill Levels
    - Removed: Slows Target by 20%

<!-- changes.json: uniques / Dark Demesne -->
##### Dark Demesne

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 4 Dim Vision when struck (was 25%)

<!-- changes.json: uniques / Firelizard's Talons -->
##### Firelizard's Talons

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Infernal Orb on attack
    - Removed: 10% Chance to cast level 5 Infernal Orb on striking

<!-- changes.json: uniques / Full Suffering -->
##### Full Suffering

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Amplify Damage on attack
    - Removed: 20% Chance to cast level 5 Amplify Damage on striking

<!-- changes.json: uniques / Martial Law -->
##### Martial Law

- Property changes:
  - Lines:
    - Added: +15% Chance of Open Wounds
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Shadow Killer -->
##### Shadow Killer

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 20 Winter's Pulse on attack
    - Removed: 15% Chance to cast level 20 Winter's Pulse on striking

<!-- changes.json: uniques / Skaadi's Claws -->
##### Skaadi's Claws

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 12 Glacial Spike on attack
    - Removed: 18% Chance to cast level 12 Glacial Spike on striking

<!-- changes.json: uniques / Storm Demon's Glare -->
##### Storm Demon's Glare

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 1 Storm Pulse on attack
    - Removed: 10% Chance to cast level 1 Storm Pulse on striking

<!-- changes.json: uniques / Troll's Touch -->
##### Troll's Touch

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 1 Decrepify on attack
    - Removed: 10% Chance to cast level 1 Decrepify on striking

</details>

<details>
<summary>Axe (30 changed: 30 modified)</summary>

#### Modified

<!-- changes.json: uniques / Beholder -->
##### Beholder

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 10 Decrepify on attack
    - Removed: 10% Chance to cast level 1 Decrepify on striking

<!-- changes.json: uniques / Boneslayer Blade -->
##### Boneslayer Blade

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 30 Holy Bolt on attack
    - Added: +1 to Sanctuary (oskill)
    - Removed: 25% Chance to cast level 30 Holy Bolt when struck
    - Removed: Level 20 Fist of the Heavens (200/200 Charges)

<!-- changes.json: uniques / Broken Earth -->
##### Broken Earth

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 15 Fissure on attack
    - Removed: 12% Chance to cast level 15 Fissure on striking

<!-- changes.json: uniques / Coldkill -->
##### Coldkill

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 10 Ice Blast on attack
    - Removed: 10% Chance to cast level 10 Ice Blast on striking

<!-- changes.json: uniques / Curseweaver -->
##### Curseweaver

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 5 Decrepify on attack
    - Removed: 12% Chance to cast level 5 Decrepify on striking

<!-- changes.json: uniques / Elder Tojanida -->
##### Elder Tojanida

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 10 Infernal Orb on attack
    - Added: 15% Chance to cast level 5 Cinderstorm on attack
    - Removed: 15% Chance to cast level 10 Infernal Orb on striking
    - Removed: 10% Chance to cast level 5 Cinderstorm on striking

<!-- changes.json: uniques / Executioner's Justice -->
##### Executioner's Justice

- Property changes:
  - Lines:
    - Changed: +10% Chance of Crushing Blow (was +(20-25)%)

<!-- changes.json: uniques / Frost Wyrm -->
##### Frost Wyrm

- Changed details:
  - Item Level: 105 (was 80)
- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 30 Winter's Pulse on attack
    - Added: 10% Chance to cast level 15 Comet on attack
    - Added: -(15-25)% to Enemy Cold Resistance
    - Removed: 15% Chance to cast level 30 Winter's Pulse on striking
    - Removed: 10% Chance to cast level 15 Comet on striking
    - Removed: +50% Cold Resistance

<!-- changes.json: uniques / Grandiose Dreams -->
##### Grandiose Dreams

- Property changes:
  - Lines:
    - Added: +(50-80)% Extra Gold from Monsters
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Groundshatter -->
##### Groundshatter

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 30 Fissure on attack
    - Removed: 12% Chance to cast level 30 Fissure on striking

<!-- changes.json: uniques / Guardian Naga -->
##### Guardian Naga

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 1 Blightburst on attack
    - Removed: 11% Chance to cast level 1 Blightburst on striking

<!-- changes.json: uniques / Hellslayer -->
##### Hellslayer

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 5 Infernal Orb on attack
    - Removed: 15% Chance to cast level 5 Infernal Orb on striking

<!-- changes.json: uniques / Humongous -->
##### Humongous

- Property changes:
  - Lines:
    - Added: +10% Deadly Strike
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Islestrike -->
##### Islestrike

- Changed details:
  - Equipment Damage Types Average Damage: 70 (was 71)
- Property changes:
  - Lines:
    - Changed: +(150-200)% Enhanced Weapon Damage (was +(170-190)%)
    - Added: +(10-20)% Increased Attack Speed
    - Added: +10% Life stolen per hit
    - Added: +10 to all Attributes
    - Removed: +10% Chance of Crushing Blow
    - Removed: +(1-2) to Maul (Druid Only)
    - Removed: +(1-2) to Fury (Druid Only)
    - Removed: +50 Defense vs. Missile
    - Removed: +10 to Strength
    - Removed: +10 to Dexterity
    - Removed: +10 to Vitality
    - Removed: +10 to Energy
  - Base damage type 1 properties:
    - Changed: Damage: 32-39 to 95-114 (was 35-37 to 102-110)

<!-- changes.json: uniques / Long Suffering -->
##### Long Suffering

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 1 Decrepify on attack
    - Removed: 10% Chance to cast level 1 Decrepify on striking

<!-- changes.json: uniques / Lungreaver -->
##### Lungreaver

- Property changes:
  - Lines:
    - Added: +15% Chance of Open Wounds
    - Removed: Slows Target by 10%

<!-- changes.json: uniques / Nameless Horror -->
##### Nameless Horror

- Changed details:
  - Rarity: 2 (was 1)
- Property changes:
  - Lines:
    - Changed: +10 to Blood Golem (oskill) (was +8)
    - Changed: Adds 400-400 Weapon Poison Damage over 4 seconds (was Adds 500-500 Weapon Poison Damage over 5)
    - Added: 10% Chance to cast level 50 Howl on attack
    - Removed: 20% Chance to cast level 50 Howl when struck
    - Removed: +5 to Golem Mastery (oskill)

<!-- changes.json: uniques / Night Hag -->
##### Night Hag

- Changed details:
  - Code: 7wa (was bax)
  - Base Item: Berserker Axe \[E\] (was Broad Axe \[N\])
  - Item Level: 85 (was 15)
  - Required Level: 80 (was 23)
- Property changes:
  - Lines:
    - Changed: +(20-30)% Increased Attack Speed (was +15%)
    - Changed: +(200-300)% Enhanced Weapon Damage (was +(70-100)%)
    - Changed: +(5-10)% Life stolen per hit (was +7%)
    - Added: 15% Chance to cast level 5 Blightburst on attack
    - Added: +(50-100) to Maximum Weapon Damage
    - Added: -(10-15)% to Enemy Physical Damage Resistance
    - Added: -(10-15)% to Enemy Poison Resistance
    - Removed: Adds 10-20 to 40-50 Damage
    - Removed: Adds 39-39 Weapon Poison Damage over 3 seconds
    - Removed: ModStr6d \[1\] (translation template unsupported; review)
  - Base damage type 1 properties:
    - Added: Damage: 72-96 to 263-384
    - Removed: Two-Hand Damage: 27-40 to 70-86
  - Base damage type 2 properties:
    - Removed: Elemental Damage: 13 to 13
  - Equipment Lines:
    - Changed: Required Strength: 138 (was 48)
    - Added: Required Dexterity: 59

<!-- changes.json: uniques / Nova Spine -->
##### Nova Spine

- Changed details:
  - Equipment Damage Types Average Damage: 33 (was 15.5)
- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 1 Storm Pulse on attack
    - Added: Adds 10-25 Weapon Cold Damage
    - Added: Cold Length: 2 seconds
    - Removed: 15% Chance to cast level 1 Storm Pulse on striking
    - Removed: +5% to Maximum Cold Resistance
  - Base damage type 2 properties:
    - Changed: Elemental Damage: 11 to 55 (was 1 to 30)

<!-- changes.json: uniques / Ogre's Breath -->
##### Ogre's Breath

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 10 Decrepify when struck (was 7% Chance to cast level 30)

<!-- changes.json: uniques / Pompeii's Wrath -->
##### Pompeii's Wrath

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 30 Volcano on attack
    - Added: -10% to Enemy Fire Resistance
    - Removed: 12% Chance to cast level 30 Volcano on striking
    - Removed: Slows Target by 50%

<!-- changes.json: uniques / Ravid's Bite -->
##### Ravid's Bite

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 10 Rabies on attack
    - Added: -10% to Enemy Poison Resistance
    - Removed: 12% Chance to cast level 10 Rabies on striking
    - Removed: Slows Target by 10%

<!-- changes.json: uniques / Stormrider -->
##### Stormrider

- Property changes:
  - Lines:
    - Added: 12% Chance to cast level 1 Arc on attack
    - Added: 15% Chance to cast level 5 Storm Shard on attack
    - Removed: 9% Chance to cast level 1 Arc on striking
    - Removed: 10% Chance to cast level 5 Storm Shard on striking

<!-- changes.json: uniques / Taskmaster's Curse -->
##### Taskmaster's Curse

- Property changes:
  - Lines:
    - Added: Level (1-2) Vigor Aura When Equipped
    - Removed: 4% Chance to cast level 2 Attract on striking

<!-- changes.json: uniques / Tendriculos -->
##### Tendriculos

- Property changes:
  - Lines:
    - Added: +(5-10)% Life stolen per hit
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / The Gnasher -->
##### The Gnasher

- Property changes:
  - Lines:
    - Changed: +15 to Strength (was +8)
    - Removed: +5% Chance of Crushing Blow

<!-- changes.json: uniques / The Minotaur1 -->
##### The Minotaur

- Changed details:
  - Equipment Damage Types Average Damage: 210.75 (was 207.75)
- Property changes:
  - Lines:
    - Changed: +(150-200)% Enhanced Weapon Damage (was +(140-200)%)
    - Added: +20% Deadly Strike
    - Removed: +10% Chance of Crushing Blow
    - Removed: Slows Target by (10-15)%
  - Base damage type 1 properties:
    - Changed: Two-Hand Damage: 127-149 to 262-305 (was 123-149 to 254-305)

<!-- changes.json: uniques / Tonstrike -->
##### Tonstrike

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 15 Molten Boulder on attack
    - Removed: 10% Chance to cast level 15 Molten Boulder on striking

<!-- changes.json: uniques / Winter Wolf -->
##### Winter Wolf

- Property changes:
  - Lines:
    - Changed: 15% Chance to cast level 5 Shiver Armor when struck (was 6% Chance to cast level 4)
    - Added: Adds 10-50 Weapon Cold Damage
    - Added: Cold Length: 2 seconds
    - Removed: +(70-80)% Enhanced Weapon Damage
  - Base damage type 1 properties:
    - Changed: Two-Hand Damage: 35-48 to 106-135 (was 41-55 to 127-159)
  - Base damage type 2 properties:
    - Added: Elemental Damage: 10 to 50

<!-- changes.json: uniques / Woodland Beast -->
##### Woodland Beast

- Property changes:
  - Lines:
    - Changed: +(1-2) to Summoning Skills ((Druid Only)) (was +(1-3))
    - Changed: +(1-3) to Druid Skill Levels (was +(2-3))
    - Added: -(8-12)% to Enemy Physical Damage Resistance
    - Removed: +0.25% Chance of Crushing Blow (Based on Character Level)

</details>

<details>
<summary>Barbarian Primal Helm (4 changed: 4 modified)</summary>

#### Modified

<!-- changes.json: uniques / Archon's Ache -->
##### Archon's Ache

- Property changes:
  - Lines:
    - Changed: +(20-30)% Increased Attack Speed (was +20%)
    - Changed: +(200-250)% Enhanced Defense (was +(180-210)%)
    - Added: +(20-50)% Chance of Open Wounds
    - Added: +(10-20)% to Strength
    - Added: +(50-100)% Chance Items Roll Magic or Better
    - Removed: +15% Chance of Crushing Blow
    - Removed: +0.5% Chance of Open Wounds (Based on Character Level)
    - Removed: Level 15 Decrepify (33/33 Charges)
  - Equipment Lines:
    - Changed: Defense: 507-591 (was 473-523)

<!-- changes.json: uniques / Conscience of the King -->
##### Conscience of the King

- Property changes:
  - Lines:
    - Removed: Slows Target by 10%

<!-- changes.json: uniques / Insight of the Ancients -->
##### Insight of the Ancients

- Changed details:
  - Item Level: 105 (was 86)
- Property changes:
  - Lines:
    - Changed: +(2-3) to All Skills (was +2)
    - Changed: +(80-100)% Enhanced Weapon Damage (was +(50-75)%)
    - Changed: +(100-200) to Attack Rating (was +(50-100))
    - Changed: +(20-30) to all Attributes (was +20)
    - Changed: Repairs 1 durability in 20 seconds (was Repairs 1 durability in 50)
    - Added: +100% Damage to Demons

<!-- changes.json: uniques / Wasteland Visage -->
##### Wasteland Visage

- Property changes:
  - Lines:
    - Removed: +0.25% Chance of Crushing Blow (Based on Character Level)

</details>

<details>
<summary>Belt (30 changed: 30 modified)</summary>

#### Modified

<!-- changes.json: uniques / Arachnid Mesh -->
##### Arachnid Mesh

- Property changes:
  - Lines:
    - Changed: +(10-20)% Increased Maximum Mana (was +20%)
    - Added: +(5-10)% to Energy
    - Added: +(3-5) Mana after each Kill
    - Removed: Slows Target by 10%
    - Removed: Level 3 Venom (11/11 Charges)
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: uniques / Assassin Vine -->
##### Assassin Vine

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: uniques / Cincture of Falling Grace -->
##### Cincture of Falling Grace

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 25 Fist of the Heavens on striking (was 15%)
    - Added: Adds 10-50 Weapon Magic Damage
    - Added: -(5-10)% to Enemy Magic Resistance
    - Removed: Adds 1-100 Weapon Lightning Damage
    - Removed: -10% to Enemy Lightning Resistance
    - Removed: +10% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: uniques / Dreadfury -->
##### Dreadfury

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: uniques / Duskwreath -->
##### Duskwreath

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: uniques / Ecstacy of Ishtar -->
##### Ecstacy of Ishtar

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: uniques / Fortune's Fool -->
##### Fortune's Fool

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: uniques / Gheed's Wager -->
##### Gheed's Wager

- Property changes:
  - Lines:
    - Changed: Vendor Prices Reduced By (-10-10)% (was 10%)
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: uniques / Gloom's Trap -->
##### Gloom's Trap

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: uniques / Ivywrap -->
##### Ivywrap

- Property changes:
  - Lines:
    - Added: +10% Increased Attack Speed
    - Removed: Slows Target by 5%

<!-- changes.json: uniques / Kashya's Ward -->
##### Kashya's Ward

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: uniques / Lachdanan's Wrap -->
##### Lachdanan's Wrap

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: uniques / Megaladon Wrap -->
##### Megaladon Wrap

- Property changes:
  - Lines:
    - Added: +15% Chance of Open Wounds
    - Removed: +10% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: uniques / Meshif's Coil -->
##### Meshif's Coil

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: uniques / Nosferatu's Coil -->
##### Nosferatu's Coil

- Property changes:
  - Lines:
    - Added: +10% Chance of Open Wounds
    - Removed: Slows Target by (5-10)%
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: uniques / Ogre's Embrace -->
##### Ogre's Embrace

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: uniques / Razortail -->
##### Razortail

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: uniques / Shattered Dreams -->
##### Shattered Dreams

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: uniques / Snowclash -->
##### Snowclash

- Property changes:
  - Lines:
    - Changed: +(3-5)% to Maximum Cold Resistance (was +5%)
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: uniques / String of Ears -->
##### String of Ears

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 22 of 22)

<!-- changes.json: uniques / The Art of War -->
##### The Art of War

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: uniques / The Saboteur's Bandolier -->
##### The Saboteur's Bandolier

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: uniques / Thundergod's Vigor -->
##### Thundergod's Vigor

- Property changes:
  - Lines:
    - Changed: +(3-5)% to Maximum Lightning Resistance (was +5%)
    - Added: 15% Chance to cast level 10 Storm Pulse when struck
    - Removed: 15% Chance to cast level 25 Fist of the Heavens when struck
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: uniques / Verdungo's Hearty Cord -->
##### Verdungo's Hearty Cord

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: uniques / Warriv's Snakeskin -->
##### Warriv's Snakeskin

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: uniques / Wave Whipper -->
##### Wave Whipper

- Property changes:
  - Lines:
    - Changed: +(10-15)% Deadly Strike (was +15%)
    - Added: +(10-15)% Faster Hit Recovery
    - Removed: +(5-10)% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: uniques / Weakling's Whimper -->
##### Weakling's Whimper

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: uniques / Wisdom's Wrap -->
##### Wisdom's Wrap

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: uniques / Wreath of Suffering -->
##### Wreath of Suffering

- Property changes:
  - Lines:
    - Changed: Drain -5 Life per 10 Seconds (was Drain -2)
    - Added: +(2-5)% Life stolen per hit
    - Removed: +(5-10)% Chance of Crushing Blow

<!-- changes.json: uniques / Xenophobe -->
##### Xenophobe

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

</details>

<details>
<summary>Boots (29 changed: 29 modified)</summary>

#### Modified

<!-- changes.json: uniques / Asheara's Slippers -->
##### Asheara's Slippers

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: uniques / Bonemesh -->
##### Bonemesh

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: uniques / Cain's Stride -->
##### Cain's Stride

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: uniques / Dance of the Cobra -->
##### Dance of the Cobra

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: uniques / Deepwander -->
##### Deepwander

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: uniques / Doubtraiser -->
##### Doubtraiser

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: uniques / Goblin Toe -->
##### Goblin Toe

- Property changes:
  - Lines:
    - Changed: +20% Faster Run/Walk Speed (was +10%)
    - Added: +15% Chance of Open Wounds
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Gore Rider -->
##### Gore Rider

- Property changes:
  - Lines:
    - Added: +25% Enhanced Weapon Damage
    - Removed: +10% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 38 of 38 (was 34 of 34)

<!-- changes.json: uniques / Grimleaper -->
##### Grimleaper

- Property changes:
  - Lines:
    - Changed: 5% Chance to cast level 10 Bone Armor when struck (was 5% Chance to cast level 8)

<!-- changes.json: uniques / Halbu's Gift -->
##### Halbu's Gift

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: uniques / Hollowed Ground -->
##### Hollowed Ground

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: uniques / Hooves of Satan -->
##### Hooves of Satan

- Property changes:
  - Lines:
    - Changed: +(20-30)% Faster Cast Rate (was +30%)
    - Added: +(20-25)% Faster Run/Walk Speed
    - Removed: Slows Target by (10-15)%
    - Removed: -5 to Dexterity
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: uniques / Infernostride -->
##### Infernostride

- Property changes:
  - Lines:
    - Changed: +(3-5)% to Maximum Fire Resistance (was +5%)
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: uniques / Lustwander -->
##### Lustwander

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: uniques / Marrowwalk -->
##### Marrowwalk

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: uniques / River Stalker -->
##### River Stalker

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: uniques / Sandstorm Trek -->
##### Sandstorm Trek

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: uniques / Shadow Dancer -->
##### Shadow Dancer

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: uniques / Silkweave -->
##### Silkweave

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: uniques / Stairway to Heaven -->
##### Stairway to Heaven

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: uniques / Stallion Hooves -->
##### Stallion Hooves

- Property changes:
  - Lines:
    - Added: -10% to Enemy Physical Damage Resistance
    - Removed: +(10-15)% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: uniques / Thoqqua's Slipper -->
##### Thoqqua's Slipper

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: uniques / War Traveler -->
##### War Traveler

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 52 of 52 (was 48 of 48)

<!-- changes.json: uniques / Waterwalk -->
##### Waterwalk

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: uniques / Whirling Dervish -->
##### Whirling Dervish

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: uniques / Wild Horses -->
##### Wild Horses

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: uniques / Wraithstep -->
##### Wraithstep

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: uniques / Zebrastride -->
##### Zebrastride

- Property changes:
  - Lines:
    - Added: +10% Faster Hit Recovery
    - Removed: +10% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: uniques / Zero Effect -->
##### Zero Effect

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

</details>

<details>
<summary>Bow (7 changed: 7 modified)</summary>

#### Modified

<!-- changes.json: uniques / Final Flight -->
##### Final Flight

- Property changes:
  - Lines:
    - Changed: +(300-380)% Enhanced Weapon Damage (was +333%)
    - Added: -(10-15)% to Enemy Physical Damage Resistance
    - Added: +10% Chance of Crushing Blow
    - Removed: Adds 222-333 Weapon Cold Damage
    - Removed: Cold Length: 1 seconds
    - Removed: -(20-30)% to Enemy Cold Resistance
  - Base damage type 1 properties:
    - Changed: Two-Hand Damage: 132-158 to 260-392 (was 142-142 to 273-373)
  - Base damage type 2 properties:
    - Removed: Elemental Damage: 222 to 333

<!-- changes.json: uniques / Golgomere -->
##### Golgomere

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 30 Lightning Bolt on striking (was 15%)

<!-- changes.json: uniques / Hailstrike -->
##### Hailstrike

- Property changes:
  - Lines:
    - Added: Cold Length: 8 seconds

<!-- changes.json: uniques / Iceweaver -->
##### Iceweaver

- Property changes:
  - Lines:
    - Changed: 5% Chance to cast level 3 Winter's Pulse on striking (was 10% Chance to cast level 2)

<!-- changes.json: uniques / Nine Lives Stealer -->
##### Nine Lives Stealer

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 20 Arc on striking (was 15%)

<!-- changes.json: uniques / Razor Strike -->
##### Razor Strike

- Property changes:
  - Lines:
    - Added: -10% to Enemy Physical Damage Resistance
    - Removed: +20% Chance of Crushing Blow

<!-- changes.json: uniques / Telena's War Bow -->
##### Telena's War Bow

- Property changes:
  - Lines:
    - Added: +15% Piercing Attack
    - Removed: +10% Chance of Crushing Blow

</details>

<details>
<summary>Bow Quiver (3 changed: 3 modified)</summary>

#### Modified

<!-- changes.json: uniques / Enfeeblement Arrows -->
##### Enfeeblement Arrows

- Property changes:
  - Lines:
    - Removed: Slows Target by 20%

<!-- changes.json: uniques / Rogue Scout Arrows -->
##### Rogue Scout Arrows

- Property changes:
  - Lines:
    - Changed: 5% Chance to cast level 1 Dim Vision on striking (was 10%)

<!-- changes.json: uniques / Siege Beast Arrows -->
##### Siege Beast Arrows

- Changed details:
  - Item Level: 105 (was 90)
- Property changes:
  - Lines:
    - Changed: +(2-3) to All Skills (was +(1-2))
    - Changed: +(20-30)% Increased Attack Speed (was +20%)
    - Changed: +(20-30)% Piercing Attack (was +20%)
    - Changed: Adds 30-50 to 50-100 Damage (was Adds 30-50 to 50-80)
    - Changed: -(15-20)% to Enemy Physical Damage Resistance (was -(10-20)%)

</details>

<details>
<summary>Circlet (1 changed: 1 modified)</summary>

#### Modified

<!-- changes.json: uniques / Blindsight -->
##### Blindsight

- Property changes:
  - Lines:
    - Added: 5% Chance to cast level 10 Dim Vision on attack
    - Removed: 18% Chance to cast level 18 Dim Vision on striking

</details>

<details>
<summary>Club (3 changed: 3 modified)</summary>

#### Modified

<!-- changes.json: uniques / Fleshrender -->
##### Fleshrender

- Property changes:
  - Lines:
    - Removed: +10% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 250 of 250 (was 270 of 270)

<!-- changes.json: uniques / Gladiator's Strike -->
##### Gladiator's Strike

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 1 Storm Pulse on attack
    - Removed: 15% Chance to cast level 1 Storm Pulse on striking

<!-- changes.json: uniques / Nord's Tenderizer -->
##### Nord's Tenderizer

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 2 Hailstorm on attack
    - Removed: 12% Chance to cast level 2 Hailstorm on striking

</details>

<details>
<summary>Crossbow (6 changed: 6 modified)</summary>

#### Modified

<!-- changes.json: uniques / Ashira's Stunbeam -->
##### Ashira's Stunbeam

- Property changes:
  - Lines:
    - Changed: 8% Chance to cast level 5 Storm Shard on striking (was 15%)

<!-- changes.json: uniques / Grey Render -->
##### Grey Render

- Changed details:
  - Item Level: 85 (was 56)
  - Required Level: 85 (was 64)
- Property changes:
  - Lines:
    - Changed: +10% Chance of Crushing Blow (was +(15-20)%)
    - Added: -10% to Enemy Physical Damage Resistance
    - Removed: +(35-60) to Mana

<!-- changes.json: uniques / King's Nail -->
##### King's Nail

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 3 Decrepify on striking (was 15%)

<!-- changes.json: uniques / Spikethrower -->
##### Spikethrower

- Property changes:
  - Lines:
    - Added: +(10-15)% Piercing Attack
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Thor's Bolt -->
##### Thor's Bolt

- Property changes:
  - Lines:
    - Changed: 15% Chance to cast level 30 Lightning Bolt on striking (was 20%)

<!-- changes.json: uniques / Wightslayer -->
##### Wightslayer

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 35 Toxic Whirl on striking (was 15%)

</details>

<details>
<summary>Crossbow Quiver (1 changed: 1 modified)</summary>

#### Modified

<!-- changes.json: uniques / Echoes of Harrogath -->
##### Echoes of Harrogath

- Changed details:
  - Item Level: 105 (was 90)
- Property changes:
  - Lines:
    - Changed: +(2-3) to All Skills (was +(1-2))
    - Changed: +(15-20)% Increased Attack Speed (was +15%)
    - Changed: +(30-40)% Piercing Attack (was +35%)
    - Changed: Adds 30-300 Weapon Fire Damage (was Adds 25-250)
    - Changed: Adds 30-300 Weapon Lightning Damage (was Adds 25-250)
    - Changed: Adds 30-300 Weapon Cold Damage (was Adds 25-250)
    - Changed: -(20-30)% to All Enemy Elemental Resistances (was -(15-20)%)

</details>

<details>
<summary>Druid Pelt (3 changed: 3 modified)</summary>

#### Modified

<!-- changes.json: uniques / Centaur's Sight -->
##### Centaur's Sight

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Inner Sight on attack
    - Removed: 10% Chance to cast level 5 Inner Sight on striking

<!-- changes.json: uniques / Dire Wolf Might -->
##### Dire Wolf Might

- Property changes:
  - Lines:
    - Added: Level (1-3) Might Aura When Equipped
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Phoenix Fall -->
##### Phoenix Fall

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Starfall on attack
    - Removed: 5% Chance to cast level 5 Starfall on striking

</details>

<details>
<summary>Gloves (27 changed: 27 modified)</summary>

#### Modified

<!-- changes.json: uniques / Askarian Grips -->
##### Askarian Grips

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: uniques / Black Lotus -->
##### Black Lotus

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: uniques / Blinded by Faith -->
##### Blinded by Faith

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: uniques / Bloodyearn -->
##### Bloodyearn

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: uniques / Burning Soul -->
##### Burning Soul

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: uniques / Conspiracy of Thieves -->
##### Conspiracy of Thieves

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: uniques / Devil's Invocation -->
##### Devil's Invocation

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: uniques / Dracul's Grasp -->
##### Dracul's Grasp

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 10 Life Tap on attack
    - Removed: 5% Chance to cast level 10 Life Tap on striking
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: uniques / Ghoulhide -->
##### Ghoulhide

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: uniques / Gravepalm -->
##### Gravepalm

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: uniques / Gravewood Grasp -->
##### Gravewood Grasp

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: uniques / Griefspawn -->
##### Griefspawn

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: uniques / Grip of the Faithful -->
##### Grip of the Faithful

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: uniques / Gryphon's Claw -->
##### Gryphon's Claw

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: uniques / Hellhunger -->
##### Hellhunger

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: uniques / Hellmouth -->
##### Hellmouth

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 3 Starfall on attack
    - Added: 15% Chance to cast level 1 Cinderstorm on attack
    - Removed: 8% Chance to cast level 3 Starfall on striking
    - Removed: 12% Chance to cast level 1 Cinderstorm on striking
  - Equipment Lines:
    - Changed: Durability: 43 of 43 (was 39 of 39)

<!-- changes.json: uniques / Lachdanan's Bracers -->
##### Lachdanan's Bracers

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 16 of 16)

<!-- changes.json: uniques / Lava Gout -->
##### Lava Gout

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 3 Scorchveil on attack
    - Removed: 15% Chance to cast level 2 Scorchveil on striking
  - Equipment Lines:
    - Changed: Durability: 42 of 42 (was 38 of 38)

<!-- changes.json: uniques / Marauder's Claw -->
##### Marauder's Claw

- Property changes:
  - Lines:
    - Changed: -10% Target Defense (was -5%)
    - Added: +(20-25)% Chance Items Roll Magic or Better
    - Removed: +10% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: uniques / Mephisto's Claw -->
##### Mephisto's Claw

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: uniques / Rapturous Blessings -->
##### Rapturous Blessings

- Changed details:
  - Item Level: 80 (was 60)
- Property changes:
  - Lines:
    - Changed: +(10-20)% Faster Cast Rate (was +10%)
    - Added: +(25-50)% Chance Items Roll Magic or Better
    - Removed: +(3-5)% to All Maximum Resistances
    - Removed: +(10-15)% to All Resistances
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: uniques / Soul Drainer -->
##### Soul Drainer

- Property changes:
  - Lines:
    - Added: 12% Chance to cast level 5 Weaken on attack
    - Removed: 12% Chance to cast level 5 Weaken on striking
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 16 of 16)

<!-- changes.json: uniques / Spikefiend Bracers -->
##### Spikefiend Bracers

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: uniques / Steelrend -->
##### Steelrend

- Property changes:
  - Lines:
    - Added: -(5-10)% to Enemy Physical Damage Resistance
    - Removed: +(10-15)% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: uniques / Threat of Retribution -->
##### Threat of Retribution

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: uniques / Venom Grip -->
##### Venom Grip

- Property changes:
  - Lines:
    - Removed: +5% Chance of Crushing Blow
    - Removed: +5% to Maximum Poison Resistance
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: uniques / Viridian Gloves -->
##### Viridian Gloves

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

</details>

<details>
<summary>Grand Charm (3 changed: 1 added, 2 modified)</summary>

#### Added

<!-- changes.json: uniques / Relic of the Ancients -->
##### Relic of the Ancients

- Rarity: 1
- Item Level: 99
- Required Level: 80
- Base Item: Grand Charm
- Required Class: None
- Properties:
  - Lines:
    - Charm Weight: 3
    - boss\_kill\_str \[1\] (translation template unsupported; review)
    - +1 to (Random Class) Skill Levels (selection=stat: item\_addclassskills; min: 0; max: 7)
    - +5% Increased Maximum Life
    - +10% Increased Maximum Mana
    - +50% Extra Gold from Monsters
    - +25% Chance Items Roll Magic or Better

#### Modified

<!-- changes.json: uniques / Gheed's Fortune -->
##### Gheed's Fortune

- Property changes:
  - Lines:
    - Changed: Vendor Prices Reduced By (5-10)% (was 10%)

<!-- changes.json: uniques / Obsidian Beacon -->
##### Obsidian Beacon

- Property changes:
  - Lines:
    - Changed: +3 to All Skills (was +4)
    - Changed: +20% Faster Run/Walk Speed (was +25%)
    - Changed: +20 to all Attributes (was +25)
    - Changed: +20% to All Resistances (was +25%)
    - Added: +2 to Light Radius

</details>

<details>
<summary>Hammer (15 changed: 15 modified)</summary>

#### Modified

<!-- changes.json: uniques / Bloodtree Stump -->
##### Bloodtree Stump

- Property changes:
  - Lines:
    - Added: +20% Deadly Strike
    - Removed: +(10-15)% Chance of Crushing Blow

<!-- changes.json: uniques / Bonesnap -->
##### Bonesnap

- Property changes:
  - Lines:
    - Added: +10% Increased Attack Speed
    - Added: +10% Physical Damage Reduction
    - Removed: +10% Chance of Crushing Blow
    - Removed: +30% Cold Resistance
    - Removed: +30% Fire Resistance

<!-- changes.json: uniques / Earth Shifter -->
##### Earth Shifter

- Changed details:
  - Item Level: 85 (was 77)
  - Rarity: 1 (was 2)
- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 30 Fissure on attack
    - Added: Socketed (1-4)
    - Removed: 10% Chance to cast level 30 Fissure on striking
    - Removed: +20% Chance of Crushing Blow

<!-- changes.json: uniques / Earthshaker -->
##### Earthshaker

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 15 Fissure on attack
    - Removed: 10% Chance to cast level 15 Fissure on striking

<!-- changes.json: uniques / Famorian's Club -->
##### Famorian's Club

- Property changes:
  - Lines:
    - Added: +(5-10)% Life stolen per hit
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Gnat Sting -->
##### Gnat Sting

- Property changes:
  - Lines:
    - Removed: Slows Target by 10%

<!-- changes.json: uniques / Hammer of Jholm -->
##### Hammer of Jholm

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 30 Fist of the Heavens on attack
    - Added: -10% to Enemy Magic Resistance
    - Removed: 15% Chance to cast level 30 Fist of the Heavens on striking
    - Removed: +(10-15)% Chance of Crushing Blow

<!-- changes.json: uniques / Hill Giant's Bludgeon -->
##### Hill Giant's Bludgeon

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 10 Tectonic Slam on attack
    - Removed: 10% Chance to cast level 10 Tectonic Slam on striking

<!-- changes.json: uniques / Readiness for War -->
##### Readiness for War

- Property changes:
  - Lines:
    - Added: +(10-20)% Faster Hit Recovery
    - Removed: +(10-15)% Chance of Crushing Blow

<!-- changes.json: uniques / Schaefer's Hammer -->
##### Schaefer's Hammer

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 10 Static Field on attack
    - Removed: 10% Chance to cast level 10 Static Field on striking

<!-- changes.json: uniques / Stone Crusher -->
##### Stone Crusher

- Property changes:
  - Lines:
    - Added: -10% to Enemy Physical Damage Resistance
    - Removed: +15% Chance of Crushing Blow

<!-- changes.json: uniques / Stunhummer -->
##### Stunhummer

- Property changes:
  - Lines:
    - Changed: Slows Target by (5-10)% (was 10%)
    - Removed: +(2-3) to Bash (oskill)

<!-- changes.json: uniques / The Cranium Basher -->
##### The Cranium Basher

- Changed details:
  - Equipment Damage Types Average Damage: 500.75 (was 527.5)
- Property changes:
  - Lines:
    - Changed: +(250-350)% Enhanced Weapon Damage (was +(300-350)%)
    - Changed: +10% Chance of Crushing Blow (was +(20-25)%)
    - Added: 10% Chance to cast level 10 Amplify Damage on attack
    - Removed: 10% Chance to cast level 5 Amplify Damage on striking
  - Base damage type 1 properties:
    - Changed: Two-Hand Damage: 215-348 to 630-810 (was 232-348 to 720-810)

<!-- changes.json: uniques / Vilifier -->
##### Vilifier

- Changed details:
  - Code: 7gm (was gma)
  - Equipment Damage Types Average Damage: 346 (was 137.75)
  - Base Item: Thunder Maul \[E\] (was Great Maul \[N\])
  - Item Level: 85 (was 22)
  - Rarity: 3 (was 1)
  - Required Level: 70 (was 33)
- Property changes:
  - Lines:
    - Changed: +(200-250)% Enhanced Weapon Damage (was +(175-200)%)
    - Added: 5% Chance to cast level 10 Battle Orders when you Kill an Enemy
    - Added: +(20-30)% Increased Attack Speed
    - Added: -(10-15)% to Enemy Physical Damage Resistance
    - Added: +10% Life stolen per hit
    - Added: Slows Target by 15%
    - Removed: +25% Lightning Resistance
    - Removed: +25% Fire Resistance
    - Removed: +1% Chance Items Roll Magic or Better (Based on Character Level)
    - Removed: Repairs 1 durability in 4 seconds
    - Removed: Socketed (1-2)
  - Base damage type 1 properties:
    - Changed: Two-Hand Damage: 99-115 to 540-630 (was 104-114 to 159-174)
  - Equipment Lines:
    - Changed: Required Strength: 253 (was 99)

<!-- changes.json: uniques / Windhammer -->
##### Windhammer

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 50 Twister on attack
    - Added: Adds 50-200 Weapon Cold Damage
    - Added: Cold Length: 4 seconds
    - Added: -(10-20)% to Enemy Cold Resistance
    - Removed: 15% Chance to cast level 50 Twister on striking
    - Removed: +(15-20)% Chance of Crushing Blow
  - Base damage type 2 properties:
    - Added: Elemental Damage: 50 to 200

</details>

<details>
<summary>Helm (6 changed: 6 modified)</summary>

#### Modified

<!-- changes.json: uniques / Blackhorn's Face -->
##### Blackhorn's Face

- Property changes:
  - Lines:
    - Added: +(10-15)% to Lightning Skill Damage
    - Removed: Slows Target by 10%

<!-- changes.json: uniques / Crown of Thorns -->
##### Crown of Thorns

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 5 Cyclone Armor when struck (was 15%)
    - Changed: 10% Chance to cast level 5 Frozen Armor when struck (was 10% Chance to cast level 3)

<!-- changes.json: uniques / Hushmaker -->
##### Hushmaker

- Property changes:
  - Lines:
    - Added: +10% to Lightning Skill Damage
    - Removed: Slows Target by 5%

<!-- changes.json: uniques / Lie Spreader -->
##### Lie Spreader

- Property changes:
  - Lines:
    - Changed: Vendor Prices Reduced By 5% (was (5-10)%)

<!-- changes.json: uniques / Trickster's Guise -->
##### Trickster's Guise

- Property changes:
  - Lines:
    - Changed: 20% Chance to cast level 5 Charged Bolt when struck (was 27% Chance to cast level 3)

<!-- changes.json: uniques / Veil of Steel -->
##### Veil of Steel

- Property changes:
  - Lines:
    - Changed: +(150-200) Defense (was +140)
    - Added: +(10-15) to all Attributes
    - Added: +(10-20)% Physical Damage Reduction
    - Removed: +15 to Strength
    - Removed: +15 to Vitality
  - Equipment Lines:
    - Changed: Defense: 470-600 (was 460-540)
    - Changed: Durability: 40 of 40 (was 60 of 60)

</details>

<details>
<summary>Javelin (3 changed: 3 modified)</summary>

#### Modified

<!-- changes.json: uniques / Clockwork Horror -->
##### Clockwork Horror

- Property changes:
  - Lines:
    - Added: -10% to Enemy Physical Damage Resistance
    - Removed: +20% Chance of Crushing Blow

<!-- changes.json: uniques / Killing Spree -->
##### Killing Spree

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 25 Burst of Speed when you Kill an Enemy
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Warbreeder -->
##### Warbreeder

- Property changes:
  - Lines:
    - Removed: Slows Target by (5-10)%

</details>

<details>
<summary>Jewel (2 changed: 2 modified)</summary>

#### Modified

<!-- changes.json: uniques / Jade Facet -->
##### Jade Facet

- Changed details:
  - Item Level: 85 (was 58)
  - Rarity: 1 (was 2)
  - Required Level: 49 (was 58)
- Property changes:
  - Lines:
    - Added: -(3-5)% to Enemy Magic Resistance
    - Added: +(3-5)% to Magic Skill Damage
    - Removed: Adds 10-15 to 25-30 Damage
    - Removed: +(3-5)% Chance of Open Wounds

<!-- changes.json: uniques / Tiger Eye -->
##### Tiger Eye

- Changed details:
  - Rarity: 2 (was 1)
- Property changes:
  - Lines:
    - Changed: +(25-30)% Enhanced Weapon Damage (was +40%)
    - Added: +(3-5)% Deadly Strike
    - Added: +(3-5)% Chance of Open Wounds
    - Removed: Adds 10-20 Weapon Damage

</details>

<details>
<summary>Knife (7 changed: 7 modified)</summary>

#### Modified

<!-- changes.json: uniques / Basilisk's Touch -->
##### Basilisk's Touch

- Property changes:
  - Lines:
    - Changed: Slows Target by 10% (was 25%)
    - Added: 5% Chance to cast level 5 Dim Vision on attack
    - Removed: 10% Chance to cast level 5 Dim Vision on striking

<!-- changes.json: uniques / Blackbog's Sharp -->
##### Blackbog's Sharp

- Property changes:
  - Lines:
    - Changed: Slows Target by 10% (was (10-15)%)

<!-- changes.json: uniques / Chimera's Claw -->
##### Chimera's Claw

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 15 Lightning on attack
    - Added: 10% Chance to cast level 15 Fissure on attack
    - Added: 10% Chance to cast level 15 Ice Blast on attack
    - Removed: 10% Chance to cast level 15 Lightning on striking
    - Removed: 10% Chance to cast level 15 Fissure on striking
    - Removed: 10% Chance to cast level 15 Ice Blast on striking

<!-- changes.json: uniques / Deathprick -->
##### Deathprick

- Property changes:
  - Lines:
    - Added: +(3-5)% Life stolen per hit
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Fleshripper -->
##### Fleshripper

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 5 Spine Piercer on striking (was 15%)
    - Added: ModStr3y \[1\] (translation template unsupported; review)
    - Removed: +(10-15)% Chance of Crushing Blow

<!-- changes.json: uniques / Rattlesnake Bite -->
##### Rattlesnake Bite

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Decrepify on attack
    - Removed: 10% Chance to cast level 5 Decrepify on striking

<!-- changes.json: uniques / Zenkiller -->
##### Zenkiller

- Property changes:
  - Lines:
    - Added: +(3-8)% Life stolen per hit
    - Removed: Slows Target by 10%

</details>

<details>
<summary>Large Charm (1 changed: 1 modified)</summary>

#### Modified

<!-- changes.json: uniques / Hellfire Torch -->
##### Hellfire Torch

- Property changes:
  - Lines:
    - Added: +1 to Light Radius

</details>

<details>
<summary>Mace (11 changed: 11 modified)</summary>

#### Modified

<!-- changes.json: uniques / Baezil's Vortex -->
##### Baezil's Vortex

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 1 Storm Pulse on attack
    - Removed: 13% Chance to cast level 1 Storm Pulse on striking

<!-- changes.json: uniques / Baranar's Star -->
##### Baranar's Star

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 10 Scorchveil on attack
    - Removed: 15% Chance to cast level 10 Scorchveil on striking

<!-- changes.json: uniques / Comet's Tail -->
##### Comet's Tail

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 3 Comet on attack
    - Removed: 15% Chance to cast level 3 Comet on striking

<!-- changes.json: uniques / Crushflange -->
##### Crushflange

- Property changes:
  - Lines:
    - Added: Adds 10-20 Weapon Fire Damage
    - Removed: +10% Chance of Crushing Blow
  - Base damage type 2 properties:
    - Added: Elemental Damage: 10 to 20

<!-- changes.json: uniques / Efreeti's Eye -->
##### Efreeti's Eye

- Property changes:
  - Lines:
    - Added: +15% Chance of Open Wounds
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Endless Sleep -->
##### Endless Sleep

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 2 Weaken on attack
    - Removed: 8% Chance to cast level 2 Weaken on striking

<!-- changes.json: uniques / Horizon's Tornado -->
##### Horizon's Tornado

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 40 Tornado on attack
    - Removed: 15% Chance to cast level 40 Tornado on striking
    - Removed: Slows Target by 15%

<!-- changes.json: uniques / Moonfall -->
##### Moonfall

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 2 Starfall on attack
    - Removed: 20% Chance to cast level 2 Starfall on striking

<!-- changes.json: uniques / Star Dust -->
##### Star Dust

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 30 War Cry on attack
    - Removed: 15% Chance to cast level 30 War Cry on striking

<!-- changes.json: uniques / Stormlash -->
##### Stormlash

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 10 Static Field on attack
    - Added: 15% Chance to cast level 7 Dust Devils on attack
    - Added: -10% to Enemy Lightning Resistance
    - Removed: 5% Chance to cast level 10 Static Field on striking
    - Removed: 15% Chance to cast level 7 Dust Devils on striking
    - Removed: +15% Chance of Crushing Blow

<!-- changes.json: uniques / The General's Tan Do Li Ga -->
##### The General's Tan Do Li Ga

- Property changes:
  - Lines:
    - Added: +5% Life stolen per hit
    - Removed: Slows Target by 10%

</details>

<details>
<summary>Necromancer Head (5 changed: 5 modified)</summary>

#### Modified

<!-- changes.json: uniques / Chiaroscuro Visage -->
##### Chiaroscuro Visage

- Property changes:
  - Lines:
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Heartbane -->
##### Heartbane

- Changed details:
  - Code: ned (was xng)
  - Base Item: Overseer Skull \[E\] (was Linked Mail \[X\])
  - Item Level: 75 (was 35)
  - Required Level: 75 (was 41)
  - Type: Necromancer Head (was Armor)
- Other data changes (review):
  - Equipment Required Class: Necromancer (was None)
- Property changes:
  - Lines:
    - Changed: +(100-150)% Enhanced Defense (was +(135-185)%)
    - Added: +3 to Max Skeleton Warriors
    - Added: +(1-2) to Summoning Skills ((Necromancer Only))
    - Added: +(2-3) to Necromancer Skill Levels
    - Removed: ModStr4a \[1\] (translation template unsupported; review)
    - Removed: +15 to Dexterity
    - Removed: +15 to Energy
    - Removed: Magic Damage Reduced By (10-15)
    - Removed: +(5-9) Life after each Kill
    - Removed: +3% to Experience Gained
  - Equipment Lines:
    - Changed: Defense: 286-357 (was 406-493)
    - Changed: Durability: 20 of 20 (was 26 of 26)
    - Changed: Required Strength: 91 (was 74)
    - Added: Chance to Block: 8%
    - Added: (Necromancer Only)

<!-- changes.json: uniques / Jondars Horde -->
##### Jondar's Horde

- Changed details:
  - Item Level: 105 (was 70)
  - Required Level: 85 (was 75)

<!-- changes.json: uniques / Mehtans Choice -->
##### Mehtan's Choice

- Changed details:
  - Item Level: 105 (was 70)
  - Required Level: 85 (was 75)

<!-- changes.json: uniques / Nightcrawler -->
##### Nightcrawler

- Changed details:
  - Code: nee (was xth)
  - Base Item: Succubus Skull \[E\] (was Embossed Plate \[X\])
  - Item Level: 75 (was 43)
  - Required Level: 75 (was 56)
  - Type: Necromancer Head (was Armor)
- Other data changes (review):
  - DamageArmorEnhanced: true (was false)
  - Equipment Required Class: Necromancer (was None)
- Property changes:
  - Lines:
    - Added: +3 to Max Skeletal Mages
    - Added: +(1-2) to Summoning Skills ((Necromancer Only))
    - Added: +(2-3) to Necromancer Skill Levels
    - Added: +(100-150)% Enhanced Defense
    - Added: +(10-15)% Physical Damage Reduction
    - Removed: +(2-4) to Fade (oskill)
    - Removed: ModitemSMRIP \[1\] (translation template unsupported; review)
    - Removed: +(300-500) Defense
    - Removed: Requirements Reduced By 35%
    - Removed: Socketed (4)
  - Equipment Lines:
    - Changed: Defense: 294-367 (was 582-803)
    - Changed: Durability: 20 of 20 (was 55 of 55)
    - Changed: Required Strength: 95 (was 81)
    - Added: Chance to Block: 10%
    - Added: (Necromancer Only)

</details>

<details>
<summary>Paladin Auric Shield (7 changed: 7 modified)</summary>

#### Modified

<!-- changes.json: uniques / Dreamscape -->
##### Dreamscape

- Changed details:
  - Code: pae (was fld)
  - Base Item: Zakarum Shield \[E\] (was Field Plate \[N\])
  - Item Level: 82 (was 17)
  - Required Level: 75 (was 25)
  - Type: Paladin Auric Shield (was Armor)
- Other data changes (review):
  - DamageArmorEnhanced: true (was false)
  - Equipment Required Class: Paladin (was None)
- Property changes:
  - Lines:
    - Changed: (20-30)% Increased Chance of Blocking (was 15%)
    - Added: Level (10-15) Holy Shock Aura When Equipped
    - Added: +(1-3) to Paladin Skill Levels
    - Added: +(15-20)% to Lightning Skill Damage
    - Added: +(150-250)% Enhanced Defense
    - Added: +(30-50)% Lightning Resistance
    - Removed: +30% Faster Block Rate
    - Removed: ModStr6d \[2\] (translation template unsupported; review)
    - Removed: +(260-300) Defense
    - Removed: +20 to Vitality
    - Removed: Socketed (1-2)
  - Equipment Lines:
    - Changed: Defense: 485-679 (was 361-405)
    - Changed: Durability: 65 of 65 (was 48 of 48)
    - Changed: Required Strength: 142 (was 55)
    - Added: Chance to Block: 22%
    - Added: Smite Damage: 46 to 46
    - Added: (Paladin Only)

<!-- changes.json: uniques / Fortress of Morpheus -->
##### Fortress of Morpheus

- Changed details:
  - Item Level: 105 (was 84)
- Property changes:
  - Lines:
    - Changed: +(150-200)% Enhanced Defense (was +175%)
    - Added: +5 to Max Shield Throw Hits
    - Added: -(10-20)% to Enemy Physical Damage Resistance
    - Removed: Socketed (4)
  - Equipment Lines:
    - Added: Defense: 565-678
    - Removed: Defense: 621

<!-- changes.json: uniques / God's Word -->
##### God's Word

- Changed details:
  - Item Level: 105 (was 75)
- Property changes:
  - Lines:
    - Changed: +(25-40)% Faster Cast Rate (was +20%)
    - Added: +(2-3) to Summoning Skills ((Necromancer Only))
    - Added: +(20-30)% to Magic Skill Damage
    - Removed: +(2-3) to Holy Bolt (Paladin Only)
    - Removed: +(3-5) to Fist of the Heavens (Paladin Only)

<!-- changes.json: uniques / Grip of the Gorgon -->
##### Grip of the Gorgon

- Property changes:
  - Lines:
    - Changed: +21% Hits Cause Monsters to Flee (was +50%)
    - Changed: Slows Target by 10% (was 15%)

<!-- changes.json: uniques / Scavanger's Carapace -->
##### Scavanger's Carapace

- Changed details:
  - Code: paf (was xea)
  - Base Item: Vortex Shield \[E\] (was Serpentskin Armor \[X\])
  - Item Level: 85 (was 25)
  - Required Level: 75 (was 34)
  - Type: Paladin Auric Shield (was Armor)
- Other data changes (review):
  - Equipment Required Class: Paladin (was None)
- Property changes:
  - Lines:
    - Changed: +(100-200)% Enhanced Defense (was +(95-130)%)
    - Added: +2 to Paladin Skill Levels
    - Added: +1 to Find Item (oskill)
    - Added: +(20-30)% Faster Cast Rate
    - Added: (20-30)% Increased Chance of Blocking
    - Added: +(50-100)% Damage to Undead
    - Added: +(25-35)% to All Resistances
    - Added: +(25-100)% Chance Items Roll Magic or Better
    - Removed: +3% Damage to Undead (Based on Character Level)
    - Removed: +1.25 Defense (Based on Character Level)
    - Removed: +5% to Maximum Cold Resistance
    - Removed: +(35-50)% Cold Resistance
    - Removed: +10% Physical Damage Reduction
    - Removed: Repairs 1 durability in 20 seconds
  - Equipment Lines:
    - Changed: Durability: 90 of 90 (was 24 of 24)
    - Changed: Required Strength: 148 (was 43)
    - Added: Chance to Block: 19%
    - Added: Defense: 452-678
    - Added: Smite Damage: 5 to 87
    - Added: (Paladin Only)
    - Removed: Defense: 289-372 to 334-417

<!-- changes.json: uniques / Valorsong -->
##### Valorsong

- Property changes:
  - Lines:
    - Added: +2 to Paladin Skill Levels
    - Removed: +2 to All Skills

<!-- changes.json: uniques / Voice of the Prophet -->
##### Voice of the Prophet

- Property changes:
  - Lines:
    - Changed: Level 10 Shout (10/10 Charges) (was Level 30)
    - Changed: Level 10 Battle Orders (10/10 Charges) (was Level 30)
    - Changed: Level 10 Battle Command (10/10 Charges) (was Level 30)

</details>

<details>
<summary>Polearm (10 changed: 10 modified)</summary>

#### Modified

<!-- changes.json: uniques / Bonehew -->
##### Bonehew

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 50 Bone Spear on attack
    - Removed: 20% Chance to cast level 50 Bone Spear on striking

<!-- changes.json: uniques / Kritchan's Ire -->
##### Kritchan's Ire

- Property changes:
  - Lines:
    - Added: 12% Chance to cast level 3 Spine Piercer on attack
    - Removed: 12% Chance to cast level 3 Spine Piercer on striking

<!-- changes.json: uniques / Kydra's Judgement -->
##### Kydra's Judgement

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 30 Ice Blast on attack
    - Removed: 20% Chance to cast level 30 Ice Blast on striking

<!-- changes.json: uniques / Ogre Chieftain's Law -->
##### Ogre Chieftain's Law

- Property changes:
  - Lines:
    - Added: -(10-15)% to Enemy Physical Damage Resistance
    - Removed: +(10-15)% Chance of Crushing Blow

<!-- changes.json: uniques / Rebuker -->
##### Rebuker

- Property changes:
  - Lines:
    - Added: +(5-10)% Life stolen per hit
    - Added: healperhit \[2, 3\] (translation template unsupported; review)
    - Removed: ModStr6d \[2\] (translation template unsupported; review)
    - Removed: Slows Target by 10%

<!-- changes.json: uniques / Snowy Sky -->
##### Snowy Sky

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 1 Hailstorm on attack
    - Removed: 10% Chance to cast level 1 Hailstorm on striking

<!-- changes.json: uniques / Stormspire -->
##### Stormspire

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 40 Chain Lightning on attack
    - Added: 15% Chance to cast level 20 Storm Shard on attack
    - Removed: 15% Chance to cast level 40 Chain Lightning on striking
    - Removed: 15% Chance to cast level 20 Storm Shard on striking

<!-- changes.json: uniques / Sunderblight -->
##### Sunderblight

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 3 Decrepify on attack
    - Removed: 10% Chance to cast level 3 Decrepify on striking

<!-- changes.json: uniques / The Reaper's Toll -->
##### The Reaper's Toll

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Decrepify on attack
    - Added: -(10-15)% to Enemy Physical Damage Resistance
    - Removed: 33% Chance to cast level 3 Decrepify on striking
    - Removed: Requirements Reduced By 25%
  - Equipment Lines:
    - Changed: Required Strength: 152 (was 114)
    - Changed: Required Dexterity: 118 (was 88)

<!-- changes.json: uniques / Woestave -->
##### Woestave

- Property changes:
  - Lines:
    - Removed: Slows Target by 10%

</details>

<details>
<summary>Ring (3 changed: 3 modified)</summary>

#### Modified

<!-- changes.json: uniques / Carrion Wind -->
##### Carrion Wind

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 25 Twister on attack
    - Removed: 10% Chance to cast level 25 Twister on striking

<!-- changes.json: uniques / Plantar Enlightenment -->
##### Plantar Enlightenment

- Property changes:
  - Lines:
    - Removed: Vendor Prices Reduced By (3-5)%

<!-- changes.json: uniques / Wisp Projector -->
##### Wisp Projector

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 10 Arc on attack
    - Removed: 10% Chance to cast level 10 Arc on striking

</details>

<details>
<summary>Scepter (9 changed: 9 modified)</summary>

#### Modified

<!-- changes.json: uniques / Astreon's Iron Ward -->
##### Astreon's Iron Ward

- Changed details:
  - Item Level: 85 (was 70)

<!-- changes.json: uniques / Celestial Judgment -->
##### Celestial Judgment

- Property changes:
  - Lines:
    - Added: 18% Chance to cast level 25 Nova on attack
    - Added: 18% Chance to cast level 25 Glacial Spike on attack
    - Added: 18% Chance to cast level 25 Fire Ball on attack
    - Removed: 18% Chance to cast level 25 Nova on striking
    - Removed: 18% Chance to cast level 25 Glacial Spike on striking
    - Removed: 18% Chance to cast level 25 Fire Ball on striking

<!-- changes.json: uniques / Hand of Blessed Light -->
##### Hand of Blessed Light

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 30 Fist of the Heavens on attack
    - Removed: 10% Chance to cast level 30 Fist of the Heavens on striking

<!-- changes.json: uniques / Heaven's Light -->
##### Heaven's Light

- Property changes:
  - Lines:
    - Added: -10% to Enemy Magic Resistance
    - Removed: +(10-15)% Chance of Crushing Blow

<!-- changes.json: uniques / Knell Striker -->
##### Knell Striker

- Property changes:
  - Lines:
    - Removed: +5% Chance of Crushing Blow

<!-- changes.json: uniques / The Fetid Sprinkler -->
##### The Fetid Sprinkler

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 1 Blightburst on attack
    - Removed: 10% Chance to cast level 1 Attract on striking

<!-- changes.json: uniques / The Redeemer -->
##### The Redeemer

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 40 Holy Bolt on attack
    - Removed: 10% Chance to cast level 40 Holy Bolt on striking

<!-- changes.json: uniques / Wrath Of Heaven -->
##### Wrath Of Heaven

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 10 Cinderstorm on attack
    - Removed: 15% Chance to cast level 10 Cinderstorm on striking

<!-- changes.json: uniques / Zakarum's Hand -->
##### Zakarum's Hand

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 1 Hailstorm on attack
    - Removed: 10% Chance to cast level 1 Hailstorm on striking

</details>

<details>
<summary>Shield (8 changed: 1 added, 1 removed, 6 modified)</summary>

#### Added

<!-- changes.json: uniques / Hratlis Warden -->
##### Hratli's Warden

- Rarity: 1
- Item Level: 17
- Required Level: 25
- Base Item: Tower Shield \[N\]
- Required Class: None
- Properties:
  - Lines:
    - +1 to All Skills
    - +(20-30)% Enhanced Weapon Damage
    - +(40-70) Defense
    - +(15-30)% to All Resistances
    - Socketed (2-3)
  - Equipment Lines:
    - Chance to Block: 24%
    - Defense: 62-95
    - Smite Damage: 1 to 5
    - Durability: 60 of 60
    - Required Strength: 75

#### Removed

<!-- changes.json: uniques / Bigby's Crushing Fist -->
##### Bigby's Crushing Fist

- Rarity: 1
- Item Level: 17
- Required Level: 25
- Base Item: Tower Shield \[N\]
- Required Class: None
- Properties:
  - Lines:
    - +1 to All Skills
    - +(20-30)% Enhanced Weapon Damage
    - +0.25% Chance of Crushing Blow (Based on Character Level)
    - +(40-70) Defense
    - Socketed (2-3)
  - Equipment Lines:
    - Chance to Block: 24%
    - Defense: 62-95
    - Smite Damage: 1 to 5
    - Durability: 60 of 60
    - Required Strength: 75

#### Modified

<!-- changes.json: uniques / Baal's Wing -->
##### Baal's Wing

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 5 Arc on attack
    - Removed: 20% Chance to cast level 5 Arc on striking

<!-- changes.json: uniques / Cry of the Wretched -->
##### Cry of the Wretched

- Property changes:
  - Lines:
    - Changed: 20% Chance to cast level 15 Lower Resist when struck (was 25% Chance to cast level 8)
    - Changed: 10% Chance to cast level 10 Lower Resist on attack (was 9% Chance to cast level 8)

<!-- changes.json: uniques / Dreadwall -->
##### Dreadwall

- Property changes:
  - Lines:
    - Changed: 25% Chance to cast level 1 Terror when struck (was 100%)

<!-- changes.json: uniques / Knight's Dawn -->
##### Knight's Dawn

- Property changes:
  - Lines:
    - Added: +(20-30)% to All Resistances
    - Removed: +(1-3) to Vengeance (oskill)

<!-- changes.json: uniques / Medusa's Gaze -->
##### Medusa's Gaze

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Decrepify on attack
    - Removed: 9% Chance to cast level 5 Decrepify on striking

<!-- changes.json: uniques / Solar Eclipse -->
##### Solar Eclipse

- Property changes:
  - Lines:
    - Added: +(15-25)% to Fire Skill Damage
    - Removed: Slows Target by 10%

</details>

<details>
<summary>Small Charm (1 changed: 1 modified)</summary>

#### Modified

<!-- changes.json: uniques / Black Soulstone -->
##### Black Soulstone

- Property changes:
  - Lines:
    - Changed: +5% to Experience Gained (was +10%)

</details>

<details>
<summary>Sorceress Orb (6 changed: 6 modified)</summary>

#### Modified

<!-- changes.json: uniques / Cyanstrike -->
##### Cyanstrike

- Property changes:
  - Lines:
    - Added: 25% Chance to cast level 10 Ice Blast on attack
    - Removed: 25% Chance to cast level 10 Ice Blast on striking

<!-- changes.json: uniques / Haven of Light -->
##### Haven of Light

- Changed details:
  - Item Level: 105 (was 85)
- Property changes:
  - Lines:
    - Changed: +(3-4) to Sorceress Skill Levels (was +3)
    - Added: +1 to Lower Resist (oskill)
    - Added: +(30-50)% Faster Cast Rate
    - Added: +(20-30)% to All Elemental Skill Damage
    - Added: -(20-30)% to All Enemy Elemental Resistances
    - Added: +(10-15)% to Energy
    - Removed: -(20-30)% to Enemy Lightning Resistance
    - Removed: -(20-30)% to Enemy Fire Resistance
    - Removed: +3 to Lightning Mastery (Sorceress Only)
    - Removed: +3 to Fire Mastery (Sorceress Only)

<!-- changes.json: uniques / Murdering Shard -->
##### Murdering Shard

- Property changes:
  - Lines:
    - Added: -(5-10)% to Enemy Physical Damage Resistance
    - Removed: Slows Target by (10-15)%

<!-- changes.json: uniques / Soul Stinger -->
##### Soul Stinger

- Property changes:
  - Lines:
    - Added: 75% Chance to cast level 5 Amplify Damage on attack
    - Removed: 75% Chance to cast level 5 Amplify Damage on striking

<!-- changes.json: uniques / The Oculus -->
##### The Oculus

- Property changes:
  - Lines:
    - Changed: 20% Chance to cast level 1 Teleport when struck (was 25%)
    - Changed: +(2-3) to Sorceress Skill Levels (was +3)
    - Changed: +(20-30)% Faster Cast Rate (was +30%)

<!-- changes.json: uniques / Zapcaster -->
##### Zapcaster

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 5 Lightning on attack
    - Removed: 15% Chance to cast level 5 Lightning on striking

</details>

<details>
<summary>Spear (11 changed: 11 modified)</summary>

#### Modified

<!-- changes.json: uniques / Arioc's Needle -->
##### Arioc's Needle

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 30 Venom on attack
    - Removed: 10% Chance to cast level 30 Venom on striking

<!-- changes.json: uniques / Dreams of Empire -->
##### Dreams of Empire

- Property changes:
  - Lines:
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Fear and Loathing -->
##### Fear and Loathing

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 3 Attract on attack
    - Removed: 10% Chance to cast level 3 Attract on striking

<!-- changes.json: uniques / Frostband Tine -->
##### Frostband Tine

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 3 Winter's Pulse on attack
    - Removed: 15% Chance to cast level 3 Winter's Pulse on striking

<!-- changes.json: uniques / Hone Sundan -->
##### Hone Sundan

- Property changes:
  - Lines:
    - Added: +10% Life stolen per hit
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Mandrake -->
##### Mandrake

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 20 Lightning on attack
    - Removed: 10% Chance to cast level 20 Lightning on striking

<!-- changes.json: uniques / Sleepthorn -->
##### Sleepthorn

- Property changes:
  - Lines:
    - Changed: ModStr6d \[1\] (translation template unsupported; review) (was ModStr6d \[3\])
    - Added: 5% Chance to cast level 5 Decrepify on attack
    - Removed: Slows Target by 10%

<!-- changes.json: uniques / Spear of Hydragoon -->
##### Spear of Hydragoon

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 1 Spine Piercer on attack
    - Removed: 10% Chance to cast level 1 Spine Piercer on striking

<!-- changes.json: uniques / Steel Pillar -->
##### Steel Pillar

- Property changes:
  - Lines:
    - Changed: +(100-150)% Enhanced Defense (was +(50-80)%)
    - Removed: +15% Chance of Crushing Blow

<!-- changes.json: uniques / Viperfork -->
##### Viperfork

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 40 Poison Volley on attack
    - Added: 10% Chance to cast level 10 Lower Resist on attack
    - Removed: 15% Chance to cast level 40 Poison Volley on striking
    - Removed: 8% Chance to cast level 10 Lower Resist on striking

<!-- changes.json: uniques / Zealot's Branch -->
##### Zealot's Branch

- Property changes:
  - Lines:
    - Added: -(10-20)% to Enemy Physical Damage Resistance
    - Removed: +15% Chance of Crushing Blow

</details>

<details>
<summary>Staff (5 changed: 1 added, 4 modified)</summary>

#### Added

<!-- changes.json: uniques / Thunderstep Test Staff -->
##### Thunderstep Test Staff

- Rarity: 1
- Item Level: 1
- Required Level: 1
- Base Item: Short Staff \[N\]
- Required Class: None
- Damage Types:
  - Damage type 1
    - Type: 1
    - Average Damage: 3
- Properties:
  - Lines:
    - teleport\_nova \[1\] (translation template unsupported; review)
    - +1 to Nova (oskill)
  - Base damage type 1 properties:
    - Two-Hand Damage: 1 to 5
  - Equipment Lines:
    - Durability: 250 of 250

#### Modified

<!-- changes.json: uniques / Everkeeper -->
##### Everkeeper

- Property changes:
  - Lines:
    - Changed: +10% Chance of Crushing Blow (was +25%)

<!-- changes.json: uniques / Grace of Isis -->
##### Grace of Isis

- Property changes:
  - Lines:
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Ribcracker -->
##### Ribcracker

- Property changes:
  - Lines:
    - Added: +50% Damage to Undead
    - Removed: +(10-15)% Chance of Crushing Blow

<!-- changes.json: uniques / Touch of Evil -->
##### Touch of Evil

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 2 Weaken on attack
    - Removed: 15% Chance to cast level 2 Weaken on striking

</details>

<details>
<summary>Sword (35 changed: 35 modified)</summary>

#### Modified

<!-- changes.json: uniques / Arctic Edge -->
##### Arctic Edge

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 20 Ice Blast on attack
    - Removed: 15% Chance to cast level 20 Ice Blast on striking

<!-- changes.json: uniques / Bing Sz Wang -->
##### Bing Sz Wang

- Property changes:
  - Lines:
    - Added: 25% Chance to cast level 30 Frozen Orb on attack
    - Removed: 10% Chance to cast level 30 Frozen Orb on striking

<!-- changes.json: uniques / Bridge of Pain -->
##### Bridge of Pain

- Property changes:
  - Lines:
    - Changed: Socketed (1-2) (was (1))
    - Added: +(5-10)% Life stolen per hit
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Call Of Heroes -->
##### Call Of Heroes

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 25 Battle Orders on attack
    - Removed: 10% Chance to cast level 25 Battle Orders on striking

<!-- changes.json: uniques / Celestial Lion -->
##### Celestial Lion

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Lower Resist on attack
    - Removed: 10% Chance to cast level 4 Lower Resist on striking

<!-- changes.json: uniques / Cloudcrack -->
##### Cloudcrack

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 3 Storm Pulse on attack
    - Added: +(15-25)% Increased Attack Speed
    - Added: +(50-100) to Attack Rating
    - Added: +(3-5) to Holy Shock (Paladin Only)
    - Removed: 15% Chance to cast level 20 Fist of the Heavens on striking
    - Removed: +(50-80) Defense
    - Removed: +5% to Maximum Lightning Resistance
    - Removed: Attacker Takes Lightning Damage of 15
    - Removed: +2 to Light Radius

<!-- changes.json: uniques / Conquistador -->
##### Conquistador

- Property changes:
  - Lines:
    - Added: Replenish +5 Life per 10 Seconds
    - Removed: +8% Chance of Crushing Blow

<!-- changes.json: uniques / Crainte Vomir -->
##### Crainte Vomir

- Property changes:
  - Lines:
    - Added: +5% Life stolen per hit
    - Removed: Slows Target by (10-15)%

<!-- changes.json: uniques / Death of a Thousand Cuts -->
##### Death of a Thousand Cuts

- Property changes:
  - Lines:
    - Added: +0.375% Deadly Strike (Based on Character Level)
    - Removed: +0.25% Chance of Crushing Blow (Based on Character Level)

<!-- changes.json: uniques / Deathlust -->
##### Deathlust

- Property changes:
  - Lines:
    - Added: +10% Life stolen per hit
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Demolisher -->
##### Demolisher

- Property changes:
  - Lines:
    - Added: +5% Mana stolen per hit
    - Added: +5% Life stolen per hit
    - Removed: +10% Chance of Crushing Blow
    - Removed: ModStr1y \[1\] (translation template unsupported; review)

<!-- changes.json: uniques / Dreadfang -->
##### Dreadfang

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 5 Amplify Damage on attack
    - Removed: 33% Chance to cast level 3 Amplify Damage on striking

<!-- changes.json: uniques / El Druin -->
##### El'Druin

- Changed details:
  - Equipment Damage Types Average Damage: 396.25 (was 373.25)
  - Equipment Damage Types Average Damage: 583 (was 539.5)
  - Equipment Damage Types Average Damage: 300 (was 281.5)
  - Item Level: 105 (was 80)
- Property changes:
  - Lines:
    - Changed: +(3-4) to All Skills (was +(1-3))
    - Changed: +(300-400)% Enhanced Weapon Damage (was +(250-350)%)
    - Added: 20% Chance to cast level 40 Fist of the Heavens on attack
    - Added: Adds 200-400 Weapon Magic Damage
    - Added: +(20-30)% to Magic Skill Damage
    - Removed: 10% Chance to cast level 30 Fist of the Heavens on striking
    - Removed: Adds 63-500 Weapon Lightning Damage
    - Removed: +(10-20)% to Lightning Skill Damage
  - Base damage type 1 properties:
    - Changed: One-Hand Damage: 210-330 to 470-575 (was 202-322 to 432-537)
  - Base damage type 2 properties:
    - Changed: Two-Hand Damage: 370-530 to 642-790 (was 342-502 to 583-731)
  - Base damage type 3 properties:
    - Changed: Elemental Damage: 200 to 400 (was 63 to 500)

<!-- changes.json: uniques / Elder Curse -->
##### Elder Curse

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 1 Amplify Damage on attack
    - Removed: 10% Chance to cast level 1 Amplify Damage on striking

<!-- changes.json: uniques / Flamebellow -->
##### Flamebellow

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 5 Cinderstorm on attack
    - Removed: 15% Chance to cast level 5 Cinderstorm on striking

<!-- changes.json: uniques / Fury of the Owlbear -->
##### Fury of the Owlbear

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 10 Amplify Damage on attack
    - Removed: 10% Chance to cast level 10 Amplify Damage on striking

<!-- changes.json: uniques / Gharbad's Cry -->
##### Gharbad's Cry

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 1 War Cry on attack
    - Removed: 11% Chance to cast level 6 Attract on striking

<!-- changes.json: uniques / Harrogaths Last Stand -->
##### Harrogath's Last Stand

- Changed details:
  - Item Level: 105 (was 85)

<!-- changes.json: uniques / Lightsabre -->
##### Lightsabre

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 50 Chain Lightning on attack
    - Removed: 15% Chance to cast level 50 Chain Lightning on striking

<!-- changes.json: uniques / Megalodon's Bite -->
##### Megalodon's Bite

- Property changes:
  - Lines:
    - Added: -(5-10)% to Enemy Physical Damage Resistance
    - Removed: +(10-15)% Chance of Crushing Blow

<!-- changes.json: uniques / Nightscape -->
##### Nightscape

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 5 Dim Vision when you Kill an Enemy (was 15%)

<!-- changes.json: uniques / No Quarter Given -->
##### No Quarter Given

- Property changes:
  - Lines:
    - Added: -(5-10)% to Enemy Physical Damage Resistance
    - Removed: +30% Faster Block Rate
    - Removed: Slows Target by (5-10)%

<!-- changes.json: uniques / Rhinoceros Strength -->
##### Rhinoceros Strength

- Changed details:
  - Equipment Damage Types Average Damage: 249 (was 294.5)
- Property changes:
  - Lines:
    - Changed: +(300-350)% Enhanced Weapon Damage (was +(350-400)%)
    - Changed: Adds 50-100 Weapon Damage (was Adds 50-150)
    - Changed: +5% Chance of Crushing Blow (was +15%)
  - Base damage type 1 properties:
    - Changed: Damage: 70-72 to 408-446 (was 72-75 to 496-535)

<!-- changes.json: uniques / Rixot's Keen -->
##### Rixot's Keen

- Property changes:
  - Lines:
    - Removed: +5% Chance of Crushing Blow

<!-- changes.json: uniques / Sahuagin -->
##### Sahuagin

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Amplify Damage on attack
    - Removed: 8% Chance to cast level 5 Amplify Damage on striking

<!-- changes.json: uniques / Shirotachi -->
##### Shirotachi

- Property changes:
  - Lines:
    - Added: +15% Increased Attack Speed
    - Removed: +15% Faster Cast Rate
    - Removed: Slows Target by 15%

<!-- changes.json: uniques / Simpering Sword -->
##### Simpering Sword

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 1 Weaken on attack
    - Removed: 10% Chance to cast level 1 Weaken on striking

<!-- changes.json: uniques / The Grandfather -->
##### The Grandfather

- Changed details:
  - Item Level: 105 (was 85)

<!-- changes.json: uniques / The Mangler -->
##### The Mangler

- Property changes:
  - Lines:
    - Changed: +65% Chance of Open Wounds (was +50%)
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: uniques / Thundercall -->
##### Thundercall

- Property changes:
  - Lines:
    - Added: 20% Chance to cast level 40 Lightning on attack
    - Added: 10% Chance to cast level 50 Chain Lightning on attack
    - Removed: 20% Chance to cast level 40 Lightning on striking
    - Removed: 10% Chance to cast level 50 Chain Lightning on striking

<!-- changes.json: uniques / Thunderclap -->
##### Thunderclap

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 30 Storm Pulse on attack
    - Removed: 15% Chance to cast level 30 Storm Pulse on striking

<!-- changes.json: uniques / Todesfaelle Flamme -->
##### Todesfaelle Flamme

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 1 Infernal Orb on attack
    - Removed: 10% Chance to cast level 1 Infernal Orb on striking

<!-- changes.json: uniques / Troglodyte -->
##### Troglodyte

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Storm Shard on attack
    - Removed: 11% Chance to cast level 5 Storm Shard on striking

<!-- changes.json: uniques / Vorpal Blade -->
##### Vorpal Blade

- Property changes:
  - Lines:
    - Added: -10% to Enemy Physical Damage Resistance
    - Removed: +(10-15)% Chance of Crushing Blow

<!-- changes.json: uniques / Wight's Touch -->
##### Wight's Touch

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 8 Weaken on attack
    - Removed: 25% Chance to cast level 8 Weaken on striking

</details>

<details>
<summary>Throwing Axe (5 changed: 5 modified)</summary>

#### Modified

<!-- changes.json: uniques / Banshee's Cry -->
##### Banshee's Cry

- Property changes:
  - Lines:
    - Removed: Slows Target by 10%

<!-- changes.json: uniques / Brainraver -->
##### Brainraver

- Property changes:
  - Lines:
    - Added: 5% Chance to cast level 1 Spine Piercer on attack
    - Removed: ModStr6d \[2\] (translation template unsupported; review)
    - Removed: Slows Target by 10%

<!-- changes.json: uniques / Instigator -->
##### Instigator

- Property changes:
  - Lines:
    - Changed: 5% Chance to cast level 5 Static Field on striking (was 11% Chance to cast level 4)

<!-- changes.json: uniques / Lacerator -->
##### Lacerator

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 10 Amplify Damage on attack
    - Removed: 15% Chance to cast level 7 Amplify Damage on striking

<!-- changes.json: uniques / Winged Serpent -->
##### Winged Serpent

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 3 Blightburst on striking (was 15%)
    - Changed: Level 1 Teleport (50/50 Charges) (was Level 1 Teleport (255/255)

</details>

<details>
<summary>Throwing Knife (3 changed: 3 modified)</summary>

#### Modified

<!-- changes.json: uniques / Subtle Slice -->
##### Subtle Slice

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 5 Fire Bolt on striking (was 15%)

<!-- changes.json: uniques / Swarming Blades -->
##### Swarming Blades

- Property changes:
  - Lines:
    - Changed: 5% Chance to cast level 1 Static Field on striking (was 8%)

<!-- changes.json: uniques / Warshrike -->
##### Warshrike

- Property changes:
  - Lines:
    - Changed: 8% Chance to cast level 20 Storm Pulse on striking (was 12%)

</details>

<details>
<summary>Warlock Grimoire (2 changed: 2 modified)</summary>

#### Modified

<!-- changes.json: uniques / Ars Tor'Baalos -->
##### Ars Tor'Baalos

- Property changes:
  - Lines:
    - Changed: 15% Chance to cast level 5 Decrepify when struck (was 15% Chance to cast level 1)

<!-- changes.json: uniques / The Bloodletters Codex -->
##### The Bloodletter’s Codex

- Property changes:
  - Lines:
    - Added: 10% Chance to cast level 5 Amplify Damage on attack
    - Removed: 8% Chance to cast level 5 Amplify Damage on striking

</details>

</details>

## Sets

<details>
<summary>Sets — 0 added, 0 removed, 57 modified</summary>

<details>
<summary>Aiel Shieldmaiden — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Aiel Shieldmaiden -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Chiad's Valor -->
##### Chiad's Valor — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)


</details>

<details>
<summary>Aldur's Watchtower — modified set</summary>

<!-- changes.json: sets / Aldur's Watchtower -->
#### Full Set Bonuses
- Changed: +15% Chance of Crushing Blow (Full set bonus) (was +20%)

</details>

<details>
<summary>Alyssa's Archery — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Alyssa's Archery -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Alyssa's Sandals -->
##### Alyssa's Sandals — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)


</details>

<details>
<summary>Amaunator's Peace — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Amaunator's Peace -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Holy Sash of Amaunator -->
##### Holy Sash of Amaunator — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


</details>

<details>
<summary>Brother Laz' Calling — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Brother Laz' Calling -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Glory of Salvation -->
##### Glory of Salvation — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


</details>

<details>
<summary>Bul-Kathos' Children — modified set</summary>

<!-- changes.json: sets / Bul-Kathos' Children -->
#### Full Set Bonuses
- Changed: +15% Chance of Crushing Blow (Full set bonus) (was +25%)

</details>

<details>
<summary>Celestial Hierarchy — modified set (3 changed pieces)</summary>

<!-- changes.json: sets / Celestial Hierarchy -->
#### Changed Set Pieces (3)
<!-- changes.json: sets / Dominion -->
##### Dominion — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: sets / Principality -->
##### Principality — modified

- Property changes:
  - Lines:
    - Added: +15% Chance of Open Wounds
    - Removed: +15% Chance of Crushing Blow

<!-- changes.json: sets / Virtue -->
##### Virtue — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


</details>

<details>
<summary>Chaos Energy — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Chaos Energy -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Treads of Energy -->
##### Treads of Energy — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)


</details>

<details>
<summary>Cleglaw's Brace — modified set</summary>

<!-- changes.json: sets / Cleglaw's Brace -->
#### Full Set Bonuses
- Added: +25% Deadly Strike (Full set bonus)
- Removed: +15% Chance of Crushing Blow (Full set bonus)

</details>

<details>
<summary>Corthala Family Heirlooms — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Corthala Family Heirlooms -->
#### Full Set Bonuses
- Changed: +15% Chance of Crushing Blow (Full set bonus) (was +35%)
#### Changed Set Pieces (2)
<!-- changes.json: sets / Lady Daan's Celeritous Jambeau -->
##### Lady Daan's Celeritous Jambeau — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: sets / Prince Gwar's Bracers -->
##### Prince Gwar's Bracers — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


</details>

<details>
<summary>Darkmage's Astral Projection — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Darkmage's Astral Projection -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Darkmage's Meteor Shower -->
##### Darkmage's Meteor Shower — modified

- Property changes:
  - Set bonuses:
    - Added: 10% Chance to cast level 50 Meteor on striking (4 Items)
    - Added: -25% to Enemy Fire Resistance (5 Items)
    - Removed: 8% Chance to cast level 12 Meteor on striking (4 Items)
    - Removed: +25% Chance of Crushing Blow (5 Items)


</details>

<details>
<summary>Darque Necromancy — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Darque Necromancy -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Dying Curses -->
##### Dying Curses — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


</details>

<details>
<summary>Death's Disguise — modified set</summary>

<!-- changes.json: sets / Death's Disguise -->
#### Full Set Bonuses
- Added: +25% Deadly Strike (Full set bonus)
- Removed: +10% Chance of Crushing Blow (Full set bonus)

</details>

<details>
<summary>Deus et Diabolus — modified set (3 changed pieces)</summary>

<!-- changes.json: sets / Deus et Diabolus -->
#### Changed Set Pieces (3)
<!-- changes.json: sets / Grasp of Lament -->
##### Grasp of Lament — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: sets / Shackles of the Veiled Belt -->
##### Shackles of the Veiled Belt — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: sets / Steps Etched in Ash -->
##### Steps Etched in Ash — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)


</details>

<details>
<summary>Forbidden Lore — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Forbidden Lore -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Death's Door -->
##### Death's Door — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)


</details>

<details>
<summary>Gweibret's Rule — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Gweibret's Rule -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Born Supremacy -->
##### Born Supremacy — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)


</details>

<details>
<summary>Hades' Underworld — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Hades' Underworld -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / The River Stix -->
##### The River Stix — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


</details>

<details>
<summary>Hannibal's Demise — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Hannibal's Demise -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Hannibal's Bending Knee -->
##### Hannibal's Bending Knee — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)


</details>

<details>
<summary>Haunted Asylum — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Haunted Asylum -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Revenant's Claw -->
##### Revenant's Claw — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


</details>

<details>
<summary>Horazon's Splendor — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Horazon's Splendor -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Horazon's Hold -->
##### Horazon's Hold — modified

- Property changes:
  - Lines:
    - Added: -(10-15)% to Enemy Fire Resistance
    - Removed: +10% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: sets / Horazon's Legacy -->
##### Horazon's Legacy — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


</details>

<details>
<summary>Immortal King — modified set (4 changed pieces)</summary>

<!-- changes.json: sets / Immortal King -->
#### Changed Set Pieces (4)
<!-- changes.json: sets / Immortal King's Detail -->
##### Immortal King's Detail — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: sets / Immortal King's Forge -->
##### Immortal King's Forge — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: sets / Immortal King's Pillar -->
##### Immortal King's Pillar — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: sets / Immortal King's Stone Crusher -->
##### Immortal King's Stone Crusher — modified

- Property changes:
  - Lines:
    - Changed: +10% Chance of Crushing Blow (was +(15-25)%)


</details>

<details>
<summary>Insight of Brother Laz — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Insight of Brother Laz -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Power of Brother Laz -->
##### Power of Brother Laz — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)


</details>

<details>
<summary>JBouley's Scion — modified set (1 changed piece)</summary>

<!-- changes.json: sets / JBouley's Scion -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Night's Caress -->
##### Night's Caress — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


</details>

<details>
<summary>Kai Lord's Valiance — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Kai Lord's Valiance -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Hallowed Greaves -->
##### Hallowed Greaves — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: sets / Helghast Waistband -->
##### Helghast Waistband — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


</details>

<details>
<summary>Kaldorn's Majesty — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Kaldorn's Majesty -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Daystar Wrap -->
##### Daystar Wrap — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: sets / Waterwyrd's Talon -->
##### Waterwyrd's Talon — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)


</details>

<details>
<summary>Knight's Gallantry — modified set</summary>

<!-- changes.json: sets / Knight's Gallantry -->
#### Partial Set Bonuses
- Added: +25% Chance of Open Wounds (3 Items)
- Removed: +20% Chance of Crushing Blow (3 Items)

</details>

<details>
<summary>M'avina's Battle Hymn — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / M'avina's Battle Hymn -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / M'avina's Icy Clutch -->
##### M'avina's Icy Clutch — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: sets / M'avina's Tenet -->
##### M'avina's Tenet — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)


</details>

<details>
<summary>Maadi's Paradox — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Maadi's Paradox -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Maadi's Silence -->
##### Maadi's Silence — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)


</details>

<details>
<summary>Marhawkman's Disguise — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Marhawkman's Disguise -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Andariel's Claw -->
##### Andariel's Claw — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: sets / Andariel's Hooves -->
##### Andariel's Hooves — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)


</details>

<details>
<summary>Mishy's Avatar — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Mishy's Avatar -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Elven Grace -->
##### Elven Grace — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: sets / Maiden's Kiss -->
##### Maiden's Kiss — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


</details>

<details>
<summary>Myhrginoc's Warbreeder — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Myhrginoc's Warbreeder -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Myhrginoc's Deathmonger -->
##### Myhrginoc's Deathmonger — modified

- Property changes:
  - Lines:
    - Removed: +25% Chance of Open Wounds
  - Set bonuses:
    - Added: +25% Chance of Open Wounds (2 Items)
    - Removed: +15% Chance of Crushing Blow (2 Items)
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)


</details>

<details>
<summary>Natalya's Odium — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Natalya's Odium -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Natalya's Soul -->
##### Natalya's Soul — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


</details>

<details>
<summary>Nefarious Ways — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Nefarious Ways -->
#### Full Set Bonuses
- Changed: +15% Chance of Crushing Blow (Full set bonus) (was +50%)
#### Changed Set Pieces (1)
<!-- changes.json: sets / Evil Reputation -->
##### Evil Reputation — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


</details>

<details>
<summary>Onyx's Primal Rage — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Onyx's Primal Rage -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Onyx's Fallen Star -->
##### Onyx's Fallen Star — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)


</details>

<details>
<summary>Orphan's Call — modified set (3 changed pieces)</summary>

<!-- changes.json: sets / Orphan's Call -->
#### Changed Set Pieces (3)
<!-- changes.json: sets / Guillaume's Face -->
##### Guillaume's Face — modified

- Property changes:
  - Set bonuses:
    - Added: -10% to Enemy Physical Damage Resistance (2 Items)
    - Removed: +15% Chance of Crushing Blow (2 Items)

<!-- changes.json: sets / Magnus' Skin -->
##### Magnus' Skin — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: sets / Wilhelm's Pride -->
##### Wilhelm's Pride — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)


</details>

<details>
<summary>Path of Bravery — modified set (3 changed pieces)</summary>

<!-- changes.json: sets / Path of Bravery -->
#### Changed Set Pieces (3)
<!-- changes.json: sets / Imperial Gauntlets -->
##### Imperial Gauntlets — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: sets / Imperial Girdle -->
##### Imperial Girdle — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: sets / Imperial Greaves -->
##### Imperial Greaves — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)


</details>

<details>
<summary>Phrozen Heart's Mysticism — modified set (4 changed pieces)</summary>

<!-- changes.json: sets / Phrozen Heart's Mysticism -->
#### Changed Set Pieces (4)
<!-- changes.json: sets / Cryptic Claws -->
##### Cryptic Claws — modified

- Property changes:
  - Set bonuses:
    - Added: +10% Chance of Crushing Blow (3 Items)
    - Removed: +20% Chance of Crushing Blow (3 Items)

<!-- changes.json: sets / Dawns Mist -->
##### Dawns Mist — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: sets / Featherfoot -->
##### Featherfoot — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: sets / Winter's Discord -->
##### Winter's Discord — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)


</details>

<details>
<summary>Red Havoc's Challenge — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Red Havoc's Challenge -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Drawing Out the Beast -->
##### Drawing Out the Beast — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


</details>

<details>
<summary>Servitude or Rebellion — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Servitude or Rebellion -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Equilibrium -->
##### Equilibrium — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


</details>

<details>
<summary>Sine's Psionics — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Sines Psionics -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Cortex Wrap -->
##### Cortex Wrap — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: sets / Phasewalker Boots -->
##### Phasewalker Boots — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)


</details>

<details>
<summary>Soldier's Cairn — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Soldier's Cairn -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Martyr's Principle -->
##### Martyr's Principle — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


</details>

<details>
<summary>Stormsigil Vestments — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Stormsigil Vestments -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Stormtwist Grasp -->
##### Stormtwist Grasp — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)


</details>

<details>
<summary>Tal Rasha's Wrappings — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Tal Rasha's Wrappings -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Tal Rasha's Fine-Spun Cloth -->
##### Tal Rasha's Fine-Spun Cloth — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


</details>

<details>
<summary>Talonrage's Fury — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Talonrage's Fury -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Shattering Fist -->
##### Shattering Fist — modified

- Property changes:
  - Lines:
    - Added: +15% Deadly Strike
    - Added: +10% Chance of Open Wounds
    - Removed: +10% Chance of Crushing Blow


</details>

<details>
<summary>Terror of the Deep — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Terror of the Deep -->
#### Full Set Bonuses
- Added: -20% to Enemy Physical Damage Resistance (Full set bonus)
- Removed: +25% Chance of Crushing Blow (Full set bonus)
#### Changed Set Pieces (2)
<!-- changes.json: sets / Hammerhead's Persistence -->
##### Hammerhead's Persistence — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: sets / Mako's Quickness -->
##### Mako's Quickness — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)


</details>

<details>
<summary>The Disciple — modified set (3 changed pieces)</summary>

<!-- changes.json: sets / The Disciple -->
#### Changed Set Pieces (3)
<!-- changes.json: sets / Credendum -->
##### Credendum — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: sets / Laying of Hands -->
##### Laying of Hands — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: sets / Rite of Passage -->
##### Rite of Passage — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


</details>

<details>
<summary>The Mysterious Spin — modified set (1 changed piece)</summary>

<!-- changes.json: sets / The Mysterious Spin -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Spin's Mystery -->
##### Spin's Mystery — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)


</details>

<details>
<summary>The Warlord of Blood — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / The Warlord of Blood -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Tortured Soul Gauntlets -->
##### Tortured Soul Gauntlets — modified

- Property changes:
  - Set bonuses:
    - Added: +20% Bonus to Attack Rating (3 Items)
    - Added: +10% Physical Damage Reduction (4 Items)
    - Added: +250 Defense (5 Items)
    - Removed: +15% Chance of Crushing Blow (3 Items)
    - Removed: +20% Bonus to Attack Rating (4 Items)
    - Removed: +10% Physical Damage Reduction (5 Items)
    - Removed: +250 Defense (6 Items)

<!-- changes.json: sets / Vengeance Unleashed -->
##### Vengeance Unleashed — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)


</details>

<details>
<summary>Tika's Request — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Tika's Request -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Gauntlets of Quietus -->
##### Gauntlets of Quietus — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: sets / Girdle of Kitthix -->
##### Girdle of Kitthix — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)


</details>

<details>
<summary>Tools of Vindication — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Tools of Vindication -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Belt of the Vindicator -->
##### Belt of the Vindicator — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


</details>

<details>
<summary>Trang-Oul's Avatar — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Trang-Oul's Avatar -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Trang-Oul's Claws -->
##### Trang-Oul's Claws — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: sets / Trang-Oul's Girth -->
##### Trang-Oul's Girth — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


</details>

<details>
<summary>Treasure Hunter — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Treasure Hunter -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Kingpin's Greaves -->
##### Kingpin's Greaves — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 52 of 52 (was 48 of 48)

<!-- changes.json: sets / Kingpin's Wrap -->
##### Kingpin's Wrap — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)


</details>

<details>
<summary>Volf's Undead Legion — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Volf's Undead Legion -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Death Knight's Demon Blade -->
##### Death Knight's Demon Blade — modified

- Property changes:
  - Set bonuses:
    - Added: Cold Length: 8 seconds (3 Items)


</details>

<details>
<summary>Warlock's Exploration — modified set (2 changed pieces)</summary>

<!-- changes.json: sets / Warlock's Exploration -->
#### Changed Set Pieces (2)
<!-- changes.json: sets / Citadel Belt -->
##### Citadel Belt — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: sets / Teleomortis' Gloves -->
##### Teleomortis' Gloves — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)


</details>

<details>
<summary>Warlord's Glory — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Warlord's Glory -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Warlord's Lust -->
##### Warlord's Lust — modified

- Property changes:
  - Set bonuses:
    - Added: +25 to Attack Rating (2 Items)


</details>

<details>
<summary>Wrath of Vengeance — modified set (3 changed pieces)</summary>

<!-- changes.json: sets / Wrath of Vengeance -->
#### Changed Set Pieces (3)
<!-- changes.json: sets / Embracing Hatred -->
##### Embracing Hatred — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: sets / Guiding Force -->
##### Guiding Force — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 16 of 16)

<!-- changes.json: sets / Harvest of Cruelty -->
##### Harvest of Cruelty — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)


</details>

<details>
<summary>Yohann's Savant — modified set (1 changed piece)</summary>

<!-- changes.json: sets / Yohann's Savant -->
#### Changed Set Pieces (1)
<!-- changes.json: sets / Gloves of Knowledge -->
##### Gloves of Knowledge — modified

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


</details>

</details>

## Runewords

<details>
<summary>Runewords — 6 added, 0 removed, 134 modified</summary>

<details>
<summary>Added (6)</summary>

<!-- changes.json: runewords / Chromaskin -->
#### Chromaskin

- Item Level: 85
- Required Level: 85
- Rune sequence: Zeph Rune (#35) → Zod Rune (#33) → Dem Rune (#38) → Jah Rune (#31)
- Variant: Merc Equip
- Properties:
  - Lines:
    - ModStre9s \[1\] (translation template unsupported; review)
    - Level (5-10) Conviction Aura When Equipped
    - +(2-3) to All Skills
    - Adds 50-100 Weapon Fire Damage
    - Adds 50-100 Weapon Lightning Damage
    - Adds 50-100 Weapon Cold Damage
    - -10% to All Enemy Elemental Resistances
    - +5% to Dexterity
    - +10% Increased Maximum Life
    - +(20-30)% to All Resistances
    - +20% Physical Damage Reduction

<!-- changes.json: runewords / Insanity -->
#### Insanity

- Item Level: 85
- Required Level: 85
- Rune sequence: Brak Rune (#34) → Zod Rune (#33) → Dem Rune (#38) → Jah Rune (#31)
- Variant: Merc Equip
- Properties:
  - Lines:
    - ModStre9s \[1\] (translation template unsupported; review)
    - Level (5-10) Fanaticism Aura When Equipped
    - +(2-3) to All Skills
    - Adds 50-100 Weapon Damage
    - -10% to Enemy Physical Damage Resistance
    - +5% to Strength
    - +10% Increased Maximum Life
    - +(20-30)% to All Resistances
    - +20% Physical Damage Reduction

<!-- changes.json: runewords / Ravage -->
#### Ravage

- Item Level: 85
- Required Level: 85
- Rune sequence: Hev Rune (#39) → Brak Rune (#34) → Dem Rune (#38) → Zod Rune (#33) → Brak Rune (#34)
- Variant: Melee Weapon
- Properties:
  - Lines:
    - 15% Chance to cast level 10 Dust Devils on attack
    - 15% Chance to cast level 20 Arc on attack
    - ModStre9s \[1\] (translation template unsupported; review)
    - +(2-3) to All Skills
    - +(30-60)% Increased Attack Speed
    - +(300-400)% Enhanced Weapon Damage
    - +30% Enhanced Weapon Damage
    - +30% Enhanced Weapon Damage
    - +75% Damage to Demons
    - +75% Damage to Undead
    - -20% to Enemy Physical Damage Resistance
    - +10% Chance of Crushing Blow

<!-- changes.json: runewords / Shatter -->
#### Shatter

- Item Level: 75
- Required Level: 75
- Rune sequence: Zeph Rune (#35) → Zeph Rune (#35) → Zeph Rune (#35)
- Variant: Weapon
- Properties:
  - Lines:
    - Level (10-15) Conviction Aura When Equipped
    - +(3-4) to All Skills
    - +(30-40)% to All Elemental Skill Damage
    - +(20-30) to Dexterity
    - +(10-15) Mana after each Kill

<!-- changes.json: runewords / Solace -->
#### Solace

- Item Level: 85
- Required Level: 85
- Rune sequence: Grit Rune (#37) → Grit Rune (#37) → Dem Rune (#38) → Hev Rune (#39)
- Variant: Armor
- Properties:
  - Lines:
    - Level (5-10) Cleansing Aura When Equipped
    - +(2-4) to All Skills
    - +(300-350)% Enhanced Weapon Damage
    - +(200-300)% Enhanced Defense
    - +10% to Vitality
    - +10% Increased Maximum Life
    - +5% to All Maximum Resistances
    - +20% Magic Resistance
    - +5% Physical Damage Reduction

<!-- changes.json: runewords / Unity -->
#### Unity

- Item Level: 80
- Required Level: 80
- Rune sequence: Brak Rune (#34) → Zeph Rune (#35) → Myr Rune (#36) → Grit Rune (#37)
- Variant: Any Armor
- Variant: Any Shield
- Properties:
  - Lines:
    - +(2-3) to All Skills
    - +300% Enhanced Defense
    - +30 to all Attributes
    - +(150-200)% Chance Items Roll Magic or Better
    - +5% to Strength (Armor)
    - +5% to Dexterity (Armor)
    - +5% to Energy (Armor)
    - +5% to Vitality (Armor)
    - +5% to Strength (Shield)
    - +5% to Dexterity (Shield)
    - +5% to Energy (Shield)
    - +5% to Vitality (Shield)

</details>

<details>
<summary>Modified (134)</summary>

<!-- changes.json: runewords / "Doom1"[Types=["axeitype","clubitype","hammitype","maceitype","poleitype"]] -->
#### Doom

- Equipment variants: `axeitype`, `clubitype`, `hammitype`, `maceitype`, `poleitype`
- Property changes:
  - Lines:
    - Changed: +20% Chance of Open Wounds (was +25%)
    - Changed: Requirements Reduced By 10% (was 20%)

<!-- changes.json: runewords / "Doom1"[Types=["stafitype"]] -->
#### Doom

- Equipment variants: `stafitype`
- Property changes:
  - Lines:
    - Changed: +20% Chance of Open Wounds (was +25%)
    - Changed: Requirements Reduced By 10% (was 20%)

<!-- changes.json: runewords / Armageddon -->
#### Armageddon

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 20%)
    - Added: +50% Damage to Demons
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: runewords / Authority -->
#### Authority

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 15%)

<!-- changes.json: runewords / Beast1 -->
#### Beast

- Property changes:
  - Lines:
    - Changed: +20% Chance of Open Wounds (was +25%)
    - Changed: Level 30 Summon Grizzly (5/5 Charges) (was Level 13)
    - Added: +50% Damage to Demons
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: runewords / Beauty -->
#### Beauty

- Property changes:
  - Lines:
    - Added: +15% Faster Cast Rate
    - Removed: +25% Hits Cause Monsters to Flee
    - Removed: Slows Target by 10%

<!-- changes.json: runewords / Black1 -->
#### Black

- Property changes:
  - Lines:
    - Added: +20% Deadly Strike
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: runewords / Blood1 -->
#### Blood

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (weapon only) (was +20%)

<!-- changes.json: runewords / Bone1 -->
#### Bone

- Property changes:
  - Lines:
    - Changed: +40% to All Resistances (was +30%)

<!-- changes.json: runewords / Bramble1 -->
#### Bramble

- Property changes:
  - Lines:
    - Changed: +10% Mana Regeneration (was +15%)

<!-- changes.json: runewords / Breath of the Dying -->
#### Breath of the Dying

- Property changes:
  - Lines:
    - Changed: +125% Damage to Undead (was +200%)
    - Changed: Requirements Reduced By 10% (was 20%)
    - Added: +2 Life after each Kill
    - Removed: +50 to Attack Rating against Undead
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Broken Promise -->
#### Broken Promise

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)
    - Changed: +5% Chance of Crushing Blow (was +20%)

<!-- changes.json: runewords / Chains of Honor -->
#### Chains of Honor

- Property changes:
  - Lines:
    - Changed: +70% to All Resistances (was +65%)
    - Added: +25 to Mana
    - Removed: Replenish +7 Life per 10 Seconds

<!-- changes.json: runewords / Chance -->
#### Chance

- Property changes:
  - Lines:
    - Changed: +10% Mana Regeneration (was +15%)

<!-- changes.json: runewords / Chaos1 -->
#### Chaos

- Property changes:
  - Lines:
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Crescent Moon -->
#### Crescent Moon

- Property changes:
  - Lines:
    - Changed: 5% Chance to cast level 13 Static Field on striking (was 15%)
    - Changed: +15% Increased Attack Speed (was +20%)
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Daylight -->
#### Daylight

- Property changes:
  - Lines:
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Death1 -->
#### Death

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 20%)
    - Removed: +(10-15)% Chance of Crushing Blow
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Deception -->
#### Deception

- Property changes:
  - Lines:
    - Added: +15% Faster Cast Rate
    - Removed: +25% Hits Cause Monsters to Flee

<!-- changes.json: runewords / Demonspine -->
#### Demonspine

- Property changes:
  - Lines:
    - Changed: +20% to All Resistances (was +22%)

<!-- changes.json: runewords / Desire -->
#### Desire

- Property changes:
  - Lines:
    - Removed: +2 to Light Radius (weapon only)
    - Removed: +2 to Light Radius (Armor)
    - Removed: +2 to Light Radius (Shield)

<!-- changes.json: runewords / Despair -->
#### Despair

- Property changes:
  - Lines:
    - Changed: +30% Increased Attack Speed (was +40%)
    - Added: 5% Chance to cast level 5 Amplify Damage on striking
    - Added: -10% to Enemy Physical Damage Resistance
    - Removed: 32% Chance to cast level 6 Weaken on striking
    - Removed: Slows Target by 20%
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Destruction -->
#### Destruction

- Property changes:
  - Lines:
    - Added: +50% Damage to Demons
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: runewords / Dragon1 -->
#### Dragon

- Property changes:
  - Lines:
    - Added: +5% Increased Maximum Mana (Shield)
    - Removed: +50 to Mana (Shield)

<!-- changes.json: runewords / Dread1 -->
#### Dread

- Property changes:
  - Lines:
    - Added: +25 to Mana
    - Removed: Replenish +7 Life per 10 Seconds
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Duress -->
#### Duress

- Property changes:
  - Lines:
    - Changed: +20% to All Resistances (was +15%)
    - Added: +25% Deadly Strike
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: runewords / Duriel's Fang -->
#### Duriel's Fang

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)

<!-- changes.json: runewords / Eclipse -->
#### Eclipse

- Property changes:
  - Lines:
    - Changed: +30% Increased Attack Speed (was +40%)
    - Changed: +25% Deadly Strike (was +10%)
    - Changed: +20% Chance of Open Wounds (was +25%)
    - Changed: +10% Physical Damage Reduction (was +5%)
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: runewords / Edge -->
#### Edge

- Property changes:
  - Lines:
    - Changed: Adds 61-61 Weapon Poison Damage over 4 seconds (was Adds 76-76 Weapon Poison Damage over 5)

<!-- changes.json: runewords / Elation -->
#### Elation

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)

<!-- changes.json: runewords / Empower -->
#### Empower

- Property changes:
  - Lines:
    - Added: Replenish +7 Life per 10 Seconds
    - Removed: Attacker Takes Damage of 14

<!-- changes.json: runewords / Eternity -->
#### Eternity

- Property changes:
  - Lines:
    - Changed: Slows Target by 10% (was 33%)
    - Changed: Replenish +25 Life per 10 Seconds (was Replenish +16)
    - Changed: +25% Mana Regeneration (was +16%)
    - Added: +50% Damage to Demons
    - Added: Adds 100-250 Weapon Cold Damage
    - Added: Cold Length: 4 seconds
    - Removed: +10% Chance of Crushing Blow
    - Removed: Level 8 Revive (88/88 Charges)

<!-- changes.json: runewords / Exile -->
#### Exile

- Property changes:
  - Lines:
    - Added: +25 to Mana
    - Removed: Replenish +7 Life per 10 Seconds

<!-- changes.json: runewords / Faith -->
#### Faith

- Property changes:
  - Lines:
    - Added: +2 Life after each Kill
    - Removed: +75% Damage to Undead
    - Removed: +50 to Attack Rating against Undead

<!-- changes.json: runewords / Fortitude -->
#### Fortitude

- Property changes:
  - Lines:
    - Added: +15% Faster Cast Rate (weapon only)
    - Added: +25 to Mana (Armor)
    - Added: +25 to Mana (Shield)
    - Removed: +25% Hits Cause Monsters to Flee (weapon only)
    - Removed: +1 to Light Radius (weapon only)
    - Removed: Replenish +7 Life per 10 Seconds (Armor)
    - Removed: +1 to Light Radius (Armor)
    - Removed: Replenish +7 Life per 10 Seconds (Shield)
    - Removed: +1 to Light Radius (Shield)

<!-- changes.json: runewords / Friendship -->
#### Friendship

- Changed details:
  - Required Level: 25 (was 30)
- Property changes:
  - Lines:
    - Changed: +(125-150)% Enhanced Weapon Damage (was +133%)
    - Changed: Requirements Reduced By 10% (was 20%)
    - Removed: +10% Chance of Crushing Blow
    - Removed: +5 to Required Level

<!-- changes.json: runewords / Full Moon -->
#### Full Moon

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Gloom -->
#### Gloom

- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 3 Dim Vision when struck (was 15%)
    - Changed: +50% to All Resistances (was +45%)

<!-- changes.json: runewords / Harvest Moon -->
#### Harvest Moon

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)
    - Changed: Adds 61-61 Weapon Poison Damage over 4 seconds (was Adds 76-76 Weapon Poison Damage over 5)
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Heart of the Oak -->
#### Heart of the Oak

- Property changes:
  - Lines:
    - Added: Adds 5-15 Weapon Fire Damage
    - Added: Adds 5-15 Weapon Lightning Damage
    - Added: Adds 5-15 Weapon Cold Damage
    - Removed: +75% Damage to Demons
    - Removed: +100 to Attack Rating against Demons

<!-- changes.json: runewords / Heaven's Will -->
#### Heaven's Will

- Property changes:
  - Lines:
    - Changed: +2 Life after each Kill (was +5)
    - Added: +25 to Mana
    - Removed: Replenish +7 Life per 10 Seconds

<!-- changes.json: runewords / Holy Tears -->
#### Holy Tears

- Property changes:
  - Lines:
    - Changed: +35% Increased Attack Speed (was +40%)
    - Removed: Slows Target by 35%

<!-- changes.json: runewords / Holy Thunder -->
#### Holy Thunder

- Property changes:
  - Lines:
    - Changed: Adds 61-61 Weapon Poison Damage over 4 seconds (was Adds 76-76 Weapon Poison Damage over 5)

<!-- changes.json: runewords / Honor -->
#### Honor

- Property changes:
  - Lines:
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Humility -->
#### Humility

- Property changes:
  - Lines:
    - Changed: +20% to All Resistances (was +15%)

<!-- changes.json: runewords / Hunger -->
#### Hunger

- Property changes:
  - Lines:
    - Changed: Drain -13 Life per 10 Seconds (was Drain -20)
    - Changed: Requirements Reduced By 10% (was 15%)
    - Removed: Attacker Takes Damage of 14

<!-- changes.json: runewords / Hysteria -->
#### Hysteria

- Property changes:
  - Lines:
    - Changed: +2 Life after each Kill (was +5)

<!-- changes.json: runewords / Ice -->
#### Ice

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)

<!-- changes.json: runewords / Infinity -->
#### Infinity

- Property changes:
  - Lines:
    - Added: +100% Damage to Demons
    - Removed: +20% Chance of Crushing Blow
    - Removed: Level 21 Cyclone Armor (30/30 Charges)

<!-- changes.json: runewords / Insight -->
#### Insight

- Property changes:
  - Lines:
    - Changed: Adds 61-61 Weapon Poison Damage over 4 seconds (was Adds 76-76 Weapon Poison Damage over 5)

<!-- changes.json: runewords / Jealousy -->
#### Jealousy

- Property changes:
  - Lines:
    - Changed: Adds 61-61 Weapon Poison Damage over 4 seconds (was Adds 76-76 Weapon Poison Damage over 5)
    - Added: +2 Life after each Kill
    - Removed: +75% Damage to Undead
    - Removed: +50 to Attack Rating against Undead

<!-- changes.json: runewords / Judgement -->
#### Judgement

- Property changes:
  - Lines:
    - Changed: +40% to All Resistances (was +30%)
    - Changed: Requirements Reduced By 10% (was 15%)

<!-- changes.json: runewords / Kingslayer -->
#### Kingslayer

- Property changes:
  - Lines:
    - Changed: +45% Chance of Open Wounds (was +50%)
    - Added: -10% to Enemy Physical Damage Resistance
    - Removed: +(10-15)% Chance of Crushing Blow

<!-- changes.json: runewords / Knight's Vigil -->
#### Knight's Vigil

- Property changes:
  - Lines:
    - Changed: +20% to All Resistances (Armor) (was +15%)
    - Changed: +20% to All Resistances (Shield) (was +22%)

<!-- changes.json: runewords / Knowledge -->
#### Knowledge

- Property changes:
  - Lines:
    - Removed: +3 to Light Radius

<!-- changes.json: runewords / Last Wish -->
#### Last Wish

- Changed details:
  - Removed: Eligible types: Name: Axe; Index: axeitype; Class: <empty>
  - Removed: Eligible types: Name: Club; Index: clubitype; Class: <empty>
  - Removed: Eligible types: Name: Hammer; Index: hammitype; Class: <empty>
  - Removed: Eligible types: Name: Mace; Index: maceitype; Class: <empty>
  - Removed: Eligible types: Name: Sword; Index: sworitype; Class: <empty>
  - Added: Eligible types: Name: Weapon; Index: weapitype; Class: <empty>
- Property changes:
  - Lines:
    - Changed: 10% Chance to cast level 20 Storm Shard on striking (was 15%)
    - Changed: +5% Chance of Crushing Blow (was +10%)
    - Added: Adds 50-100 Weapon Damage
    - Added: +50% Damage to Demons
    - Removed: Adds 40-50 to 80-100 Damage

<!-- changes.json: runewords / Law -->
#### Law

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 20% (was 40%)
    - Added: +15 to all Attributes
    - Removed: Slows Target by 30%

<!-- changes.json: runewords / Lionheart -->
#### Lionheart

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 15%)

<!-- changes.json: runewords / Love -->
#### Love

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 20%)
    - Added: Adds 5-15 Weapon Fire Damage
    - Added: Adds 5-15 Weapon Lightning Damage
    - Added: Adds 5-15 Weapon Cold Damage
    - Removed: +75% Damage to Demons
    - Removed: +100 to Attack Rating against Demons
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Loyalty -->
#### Loyalty

- Property changes:
  - Lines:
    - Added: +25 to Mana
    - Removed: Replenish +7 Life per 10 Seconds

<!-- changes.json: runewords / Lust -->
#### Lust

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)

<!-- changes.json: runewords / Madness -->
#### Madness

- Property changes:
  - Lines:
    - Changed: +10% Mana Regeneration (Armor) (was +15%)
    - Changed: +10% Mana Regeneration (Shield) (was +15%)
    - Added: +25 to Mana (Armor)
    - Added: +25 to Mana (Shield)
    - Removed: Replenish +7 Life per 10 Seconds (Armor)
    - Removed: Replenish +7 Life per 10 Seconds (Shield)

<!-- changes.json: runewords / Malice -->
#### Malice

- Property changes:
  - Lines:
    - Changed: -1 to Light Radius (was +0)

<!-- changes.json: runewords / Mania -->
#### Mania

- Property changes:
  - Lines:
    - Changed: +25% Increased Attack Speed (was +30%)
    - Added: +2 Life after each Kill
    - Removed: +75% Damage to Undead
    - Removed: +50 to Attack Rating against Undead

<!-- changes.json: runewords / Mantle of Lazarus -->
#### Mantle of Lazarus

- Property changes:
  - Lines:
    - Changed: +20% to All Resistances (was +15%)

<!-- changes.json: runewords / Melody -->
#### Melody

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)

<!-- changes.json: runewords / Metamorphosis -->
#### Metamorphosis

- Property changes:
  - Lines:
    - Added: -10% to Enemy Physical Damage Resistance
    - Removed: +15% Chance of Crushing Blow

<!-- changes.json: runewords / Mist -->
#### Mist

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)

<!-- changes.json: runewords / Morning Dew -->
#### Morning Dew

- Changed details:
  - Required Level: 69 (was 79)
- Property changes:
  - Lines:
    - Changed: +5% Chance of Crushing Blow (was +10%)
    - Added: +50% Damage to Demons
    - Removed: +10 to Required Level

<!-- changes.json: runewords / Myth -->
#### Myth

- Property changes:
  - Lines:
    - Changed: Replenish +17 Life per 10 Seconds (was Replenish +10)
    - Changed: Requirements Reduced By 10% (was 15%)
    - Removed: Attacker Takes Damage of 14

<!-- changes.json: runewords / Natalya's Shroud -->
#### Natalya's Shroud

- Property changes:
  - Lines:
    - Changed: +35% to All Resistances (was +30%)
    - Added: +25 to Mana
    - Removed: Replenish +7 Life per 10 Seconds

<!-- changes.json: runewords / Nature's Kingdom -->
#### Nature's Kingdom

- Property changes:
  - Lines:
    - Added: Replenish +7 Life per 10 Seconds
    - Removed: Attacker Takes Damage of 14

<!-- changes.json: runewords / Night1 -->
#### Night

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 15%)

<!-- changes.json: runewords / Oath -->
#### Oath

- Property changes:
  - Lines:
    - Changed: +45% Increased Attack Speed (was +50%)
    - Added: Adds 5-15 Weapon Fire Damage
    - Added: Adds 5-15 Weapon Lightning Damage
    - Added: Adds 5-15 Weapon Cold Damage
    - Removed: +75% Damage to Demons
    - Removed: +100 to Attack Rating against Demons

<!-- changes.json: runewords / Obedience -->
#### Obedience

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 20%)
    - Added: +20% Deadly Strike
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: runewords / Oblivion -->
#### Oblivion

- Property changes:
  - Lines:
    - Changed: +20% to All Resistances (was +15%)
    - Added: +15% Chance of Open Wounds
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: runewords / Old Ben's Walking Stick -->
#### Old Ben's Walking Stick

- Property changes:
  - Lines:
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Passion -->
#### Passion

- Property changes:
  - Lines:
    - Added: +15% Faster Cast Rate
    - Added: +2 Life after each Kill
    - Removed: +75% Damage to Undead
    - Removed: +50 to Attack Rating against Undead
    - Removed: +25% Hits Cause Monsters to Flee

<!-- changes.json: runewords / Patience -->
#### Patience

- Property changes:
  - Lines:
    - Changed: +2 Life after each Kill (Armor) (was +5)
    - Added: +2 Life after each Kill (weapon only)
    - Added: +2 Life after each Kill (Shield)
    - Removed: +75% Damage to Undead (weapon only)
    - Removed: +50 to Attack Rating against Undead (weapon only)
    - Removed: 7% Increased Chance of Blocking (Shield)

<!-- changes.json: runewords / Pattern -->
#### Pattern

- Property changes:
  - Lines:
    - Changed: Adds 61-61 Weapon Poison Damage over 4 seconds (was Adds 76-76 Weapon Poison Damage over 5)

<!-- changes.json: runewords / Peace -->
#### Peace

- Property changes:
  - Lines:
    - Added: Replenish +7 Life per 10 Seconds
    - Removed: Attacker Takes Damage of 14

<!-- changes.json: runewords / Peril -->
#### Peril

- Property changes:
  - Lines:
    - Added: +100% Damage to Demons
    - Removed: +20% Chance of Crushing Blow

<!-- changes.json: runewords / Pillar of Faith -->
#### Pillar of Faith

- Property changes:
  - Lines:
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Plague1 -->
#### Plague

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Praise -->
#### Praise

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)

<!-- changes.json: runewords / Prayer -->
#### Prayer

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (weapon only) (was Requirements Reduced By 20%)
    - Changed: +10% Mana Regeneration (Armor) (was +15%)
    - Changed: Requirements Reduced By 10% (Armor) (was Requirements Reduced By 15%)
    - Changed: +10% Mana Regeneration (Shield) (was +15%)
    - Changed: Requirements Reduced By 10% (Shield) (was Requirements Reduced By 15%)

<!-- changes.json: runewords / Principle -->
#### Principle

- Property changes:
  - Lines:
    - Changed: +2 Life after each Kill (was +5)

<!-- changes.json: runewords / Punishment -->
#### Punishment

- Property changes:
  - Lines:
    - Added: +15% Faster Cast Rate
    - Removed: +25% Hits Cause Monsters to Flee

<!-- changes.json: runewords / Purity -->
#### Purity

- Property changes:
  - Lines:
    - Changed: 5% Chance to cast level 10 Dim Vision on striking (was 35% Chance to cast level 8)

<!-- changes.json: runewords / Qual-Kehk's Oath -->
#### Qual-Kehk's Oath

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 15%)

<!-- changes.json: runewords / Rathma's Husk -->
#### Rathma's Husk

- Property changes:
  - Lines:
    - Changed: +35% to All Resistances (was +30%)

<!-- changes.json: runewords / Red1 -->
#### Red

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 20%)

<!-- changes.json: runewords / Revenge -->
#### Revenge

- Property changes:
  - Lines:
    - Changed: +2 Life after each Kill (Armor) (was +5)
    - Added: +2 Life after each Kill (Shield)
    - Removed: 7% Increased Chance of Blocking (Shield)

<!-- changes.json: runewords / Rhyme -->
#### Rhyme

- Property changes:
  - Lines:
    - Changed: +10% Mana Regeneration (was +15%)

<!-- changes.json: runewords / Rift1 -->
#### Rift

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 20%)

<!-- changes.json: runewords / Ruin -->
#### Ruin

- Property changes:
  - Lines:
    - Changed: +20% to All Resistances (was +22%)

<!-- changes.json: runewords / Runeword181 -->
#### Vigilance

- Property changes:
  - Lines:
    - Changed: +(45-65) to Mana (was +(20-40))
    - Removed: Replenish +7 Life per 10 Seconds

<!-- changes.json: runewords / Runeword182 -->
#### Ritual

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)

<!-- changes.json: runewords / Scout -->
#### Scout

- Property changes:
  - Lines:
    - Changed: +11 to Light Radius (was +12)

<!-- changes.json: runewords / Searing Moon -->
#### Searing Moon

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Shadow of Doubt -->
#### Shadow of Doubt

- Property changes:
  - Lines:
    - Changed: +30% Faster Cast Rate (was +15%)
    - Removed: +25% Hits Cause Monsters to Flee

<!-- changes.json: runewords / Shadow1 -->
#### Shadow

- Property changes:
  - Lines:
    - Changed: 5% Chance to cast level 12 Dim Vision when struck (was 25%)
    - Changed: +15% Increased Attack Speed (was +20%)
    - Changed: Adds 85-155 Weapon Cold Damage (was Adds 80-140)
    - Added: Adds 5-15 Weapon Fire Damage
    - Added: Adds 5-15 Weapon Lightning Damage
    - Removed: +75% Damage to Demons
    - Removed: +100 to Attack Rating against Demons

<!-- changes.json: runewords / Silence -->
#### Silence

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 20%)
    - Added: +15% Faster Cast Rate
    - Added: +2 Life after each Kill
    - Removed: +75% Damage to Undead
    - Removed: +50 to Attack Rating against Undead
    - Removed: +25% Hits Cause Monsters to Flee

<!-- changes.json: runewords / Sorrow -->
#### Sorrow

- Property changes:
  - Lines:
    - Changed: +35% Increased Attack Speed (was +40%)
    - Changed: Requirements Reduced By 10% (was 20%)

<!-- changes.json: runewords / Spirit1 -->
#### Spirit

- Property changes:
  - Lines:
    - Changed: Adds 61-61 Weapon Poison Damage over 4 seconds (weapon only) (was Adds 76-76 Weapon Poison Damage over 5)
    - Added: Replenish +7 Life per 10 Seconds (Shield)
    - Removed: Attacker Takes Damage of 14 (Shield)

<!-- changes.json: runewords / Splendor -->
#### Splendor

- Property changes:
  - Lines:
    - Changed: +10% Mana Regeneration (was +15%)

<!-- changes.json: runewords / Starlight -->
#### Starlight

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (weapon only) (was Requirements Reduced By 20%)
    - Changed: Requirements Reduced By 10% (Armor) (was Requirements Reduced By 15%)
    - Changed: Requirements Reduced By 10% (Shield) (was Requirements Reduced By 15%)
    - Removed: +1 to Light Radius (weapon only)
    - Removed: +1 to Light Radius (Armor)
    - Removed: +1 to Light Radius (Shield)

<!-- changes.json: runewords / Stealth -->
#### Stealth

- Property changes:
  - Lines:
    - Changed: +10% Mana Regeneration (was +15%)

<!-- changes.json: runewords / Steel1 -->
#### Steel

- Property changes:
  - Lines:
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Still Water -->
#### Still Water

- Property changes:
  - Lines:
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Sting -->
#### Sting

- Property changes:
  - Lines:
    - Changed: Adds 61-61 Weapon Poison Damage over 4 seconds (was Adds 76-76 Weapon Poison Damage over 5)

<!-- changes.json: runewords / Stone1 -->
#### Stone

- Property changes:
  - Lines:
    - Changed: +20% to All Resistances (was +15%)

<!-- changes.json: runewords / Storm1 -->
#### Storm

- Property changes:
  - Lines:
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Strength -->
#### Strength

- Property changes:
  - Lines:
    - Changed: +(80-100)% Enhanced Weapon Damage (was +80%)
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: runewords / Temptation -->
#### Temptation

- Property changes:
  - Lines:
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Thunder -->
#### Thunder

- Property changes:
  - Lines:
    - Changed: Adds 6-459 Weapon Lightning Damage (was Adds 1-444)
    - Added: Adds 5-15 Weapon Fire Damage
    - Added: Adds 5-15 Weapon Cold Damage
    - Removed: +75% Damage to Demons
    - Removed: +100 to Attack Rating against Demons

<!-- changes.json: runewords / Time -->
#### Time

- Property changes:
  - Lines:
    - Added: Replenish +7 Life per 10 Seconds (Armor)
    - Added: Replenish +7 Life per 10 Seconds (Shield)
    - Removed: Attacker Takes Damage of 14 (Armor)
    - Removed: Attacker Takes Damage of 14 (Shield)

<!-- changes.json: runewords / Trust -->
#### Trust

- Property changes:
  - Lines:
    - Added: Replenish +7 Life per 10 Seconds
    - Removed: Attacker Takes Damage of 14

<!-- changes.json: runewords / Unbending Will -->
#### Unbending Will

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 20%)
    - Added: +2 Life after each Kill
    - Removed: +75% Damage to Undead
    - Removed: +50 to Attack Rating against Undead
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Valor -->
#### Valor

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)
    - Changed: +20% Chance of Open Wounds (was +25%)
    - Added: +15% Faster Cast Rate
    - Removed: +25% Hits Cause Monsters to Flee

<!-- changes.json: runewords / Vengeance -->
#### Vengeance

- Property changes:
  - Lines:
    - Added: +15% Faster Cast Rate
    - Removed: +25% Hits Cause Monsters to Flee

<!-- changes.json: runewords / Venom -->
#### Venom

- Property changes:
  - Lines:
    - Added: +25 to Mana
    - Removed: Replenish +7 Life per 10 Seconds

<!-- changes.json: runewords / Voice -->
#### Voice

- Property changes:
  - Lines:
    - Changed: +20% to All Resistances (Armor) (was +15%)
    - Changed: Requirements Reduced By 10% (Armor) (was Requirements Reduced By 15%)
    - Changed: +20% to All Resistances (Shield) (was +22%)
    - Changed: Requirements Reduced By 10% (Shield) (was Requirements Reduced By 15%)
    - Added: Replenish +7 Life per 10 Seconds (Armor)
    - Added: Replenish +7 Life per 10 Seconds (Shield)
    - Removed: Attacker Takes Damage of 14 (Armor)
    - Removed: Attacker Takes Damage of 14 (Shield)

<!-- changes.json: runewords / Voice of Reason -->
#### Voice of Reason

- Property changes:
  - Lines:
    - Changed: +(280-300)% Damage to Undead (was +(355-375)%)
    - Added: +2 Life after each Kill
    - Removed: +50 to Attack Rating against Undead
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / War -->
#### War

- Property changes:
  - Lines:
    - Changed: Requirements Reduced By 10% (was 15%)

<!-- changes.json: runewords / Water -->
#### Water

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)
    - Changed: Requirements Reduced By 10% (was 20%)

<!-- changes.json: runewords / Whisper -->
#### Whisper

- Property changes:
  - Lines:
    - Changed: +45% Increased Attack Speed (was +60%)

<!-- changes.json: runewords / White -->
#### White

- Property changes:
  - Lines:
    - Added: +15% Faster Cast Rate
    - Removed: +25% Hits Cause Monsters to Flee

<!-- changes.json: runewords / Wind1 -->
#### Wind

- Property changes:
  - Lines:
    - Removed: +1 to Light Radius

<!-- changes.json: runewords / Winter Moon -->
#### Winter Moon

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)
    - Changed: +20% Chance of Open Wounds (was +25%)

<!-- changes.json: runewords / Wisdom -->
#### Wisdom

- Property changes:
  - Lines:
    - Changed: +2 Life after each Kill (was +5)

<!-- changes.json: runewords / Wonder -->
#### Wonder

- Property changes:
  - Lines:
    - Changed: +15% Increased Attack Speed (was +20%)

<!-- changes.json: runewords / Wrath1 -->
#### Wrath

- Property changes:
  - Lines:
    - Changed: +350% Damage to Demons (was +375%)
    - Changed: Adds 46-255 Weapon Lightning Damage (was Adds 41-240)
    - Added: Adds 5-15 Weapon Fire Damage
    - Added: Adds 5-15 Weapon Cold Damage
    - Removed: +100 to Attack Rating against Demons
    - Removed: +10% Chance of Crushing Blow

<!-- changes.json: runewords / Youth -->
#### Youth

- Property changes:
  - Lines:
    - Changed: +95% Mana Regeneration (was +100%)

</details>

</details>

## Base armor

<details>
<summary>Base armor — 0 added, 0 removed, 45 modified</summary>

<details>
<summary>Modified (45)</summary>

<!-- changes.json: armors / ne1 -->
#### Preserved Head \[N\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / ne2 -->
#### Zombie Head \[N\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / ne3 -->
#### Unraveller Head \[N\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / ne4 -->
#### Gargoyle Head \[N\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / ne5 -->
#### Demon Head \[N\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / ne6 -->
#### Mummified Trophy \[X\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / ne7 -->
#### Fetish Trophy \[X\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / ne8 -->
#### Sexton Trophy \[X\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / ne9 -->
#### Cantor Trophy \[X\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / nea -->
#### Hierophant Trophy \[X\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / neb -->
#### Minion Skull \[E\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / ned -->
#### Overseer Skull \[E\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / nee -->
#### Succubus Skull \[E\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / nef -->
#### Bloodlord Skull \[E\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / neg -->
#### Hellspawn Skull \[E\]

- Possible automagic group changes:
  These are possible automagic associations; they do not imply a guaranteed affix roll.
  - Modified:
<!-- changes.json: armors / of Anthrax -->
##### of Anthrax

- Property changes:
  - Lines:
    - Changed: -(16-20)% to Enemy Poison Resistance (was -20%)

<!-- changes.json: armors / of Blight -->
##### of Blight

- Property changes:
  - Lines:
    - Changed: -(1-5)% to Enemy Poison Resistance (was -5%)

<!-- changes.json: armors / of Pestilence -->
##### of Pestilence

- Property changes:
  - Lines:
    - Changed: -(11-15)% to Enemy Poison Resistance (was -15%)

<!-- changes.json: armors / of Venom -->
##### of Venom

- Property changes:
  - Lines:
    - Changed: -(6-10)% to Enemy Poison Resistance (was -10%)


<!-- changes.json: armors / uhb -->
#### Myrmidon Greaves \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: armors / uhc -->
#### Colossus Girdle \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: armors / uhg -->
#### Ogre Gauntlets \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: armors / ulb -->
#### Wyrmhide Boots \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: armors / ulc -->
#### Spiderweb Sash \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: armors / ulg -->
#### Bramble Mitts \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: armors / umb -->
#### Boneweave Boots \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: armors / umc -->
#### Mithril Coil \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: armors / umg -->
#### Vambraces \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 26 of 26 (was 16 of 16)

<!-- changes.json: armors / utb -->
#### Mirrored Boots \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: armors / utc -->
#### Troll Belt \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: armors / utg -->
#### Crusader Gauntlets \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: armors / uvb -->
#### Scarabshell Boots \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: armors / uvc -->
#### Vampirefang Belt \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: armors / uvg -->
#### Vampirebone Gloves \[E\]

- Property changes:
  - Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: armors / xhb -->
#### War Boots \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: armors / xhg -->
#### War Gauntlets \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: armors / xlb -->
#### Demonhide Boots \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: armors / xlg -->
#### Demonhide Gloves \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: armors / xmb -->
#### Mesh Boots \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: armors / xmg -->
#### Heavy Bracers \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: armors / xtb -->
#### Battle Boots \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: armors / xtg -->
#### Battle Gauntlets \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: armors / xvb -->
#### Sharkskin Boots \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: armors / xvg -->
#### Sharkskin Gloves \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: armors / zhb -->
#### War Belt \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: armors / zlb -->
#### Demonhide Sash \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: armors / zmb -->
#### Mesh Belt \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: armors / ztb -->
#### Battle Belt \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: armors / zvb -->
#### Sharkskin Belt \[X\]

- Property changes:
  - Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

</details>

</details>

## Base weapons

<details>
<summary>Base weapons — 0 added, 0 removed, 6 modified</summary>

<details>
<summary>Modified (6)</summary>

<!-- changes.json: weapons / gpl -->
#### Strangling Gas Potion

- Property changes:
  - Lines:
    - Removed: Indestructible
  - Base damage type 1 properties:
    - Added: Poison Damage: 24-24
    - Added: over 2 seconds

<!-- changes.json: weapons / gpm -->
#### Choking Gas Potion

- Property changes:
  - Lines:
    - Removed: Indestructible
  - Base damage type 1 properties:
    - Added: Poison Damage: 48-48
    - Added: over 2 seconds

<!-- changes.json: weapons / gps -->
#### Rancid Gas Potion

- Property changes:
  - Lines:
    - Removed: Indestructible
  - Base damage type 1 properties:
    - Added: Poison Damage: 72-72
    - Added: over 2 seconds

<!-- changes.json: weapons / opl -->
#### Fulminating Potion

- Property changes:
  - Lines:
    - Removed: Indestructible
  - Base damage type 1 properties:
    - Added: Throw Damage: 2 to 7
  - Base damage type 2 properties:
    - Added: Fire Damage: 3-8

<!-- changes.json: weapons / opm -->
#### Exploding Potion

- Property changes:
  - Lines:
    - Removed: Indestructible
  - Base damage type 1 properties:
    - Added: Throw Damage: 8 to 12
  - Base damage type 2 properties:
    - Added: Fire Damage: 8-18

<!-- changes.json: weapons / ops -->
#### Oil Potion

- Property changes:
  - Lines:
    - Removed: Indestructible
  - Base damage type 1 properties:
    - Added: Throw Damage: 13 to 30
  - Base damage type 2 properties:
    - Added: Fire Damage: 13-34

</details>

</details>

## Magic prefixes

<details>
<summary>Magic prefixes — 8 added, 4 removed, 15 modified</summary>

<details>
<summary>Added (8)</summary>

<!-- changes.json: magicprefix / "Fracturing1"[Group=202,Level=70,Types=["glovitype"]] -->
#### Fracturing

- Level: 70
- Required Level: 63
- Group: 202
- Eligible types: glovitype
- PType: Prefix
- Properties:
  - Lines:
    - -(5-10)% to Enemy Physical Damage Resistance

<!-- changes.json: magicprefix / "Fracturing1"[Group=214,Level=18,Types=["mchaitype"]] -->
#### Fracturing

- Level: 18
- MaxLevel: 70
- Required Level: 18
- Group: 214
- Eligible types: mchaitype
- PType: Prefix
- Properties:
  - Lines:
    - -(1-2)% to Enemy Physical Damage Resistance

<!-- changes.json: magicprefix / "Fracturing1"[Group=214,Level=50,Types=["mchaitype"]] -->
#### Fracturing

- Level: 50
- Required Level: 50
- Group: 214
- Eligible types: mchaitype
- PType: Prefix
- Properties:
  - Lines:
    - -(2-3)% to Enemy Physical Damage Resistance

<!-- changes.json: magicprefix / "Fracturing1"[Group=214,Level=81,Types=["mchaitype"]] -->
#### Fracturing

- Level: 81
- Required Level: 80
- Group: 214
- Eligible types: mchaitype
- PType: Prefix
- Properties:
  - Lines:
    - -(3-5)% to Enemy Physical Damage Resistance

<!-- changes.json: magicprefix / "Prismatic"[Group=209,Level=30,Types=["weapitype"]] -->
#### Prismatic

- Level: 30
- Required Level: 30
- Group: 209
- Eligible types: weapitype
- PType: Prefix
- Properties:
  - Lines:
    - -(3-5)% to All Enemy Elemental Resistances

<!-- changes.json: magicprefix / "Prismatic"[Group=209,Level=50,Types=["weapitype"]] -->
#### Prismatic

- Level: 50
- Required Level: 50
- Group: 209
- Eligible types: weapitype
- PType: Prefix
- Properties:
  - Lines:
    - -(6-9)% to All Enemy Elemental Resistances

<!-- changes.json: magicprefix / "Prismatic"[Group=209,Level=80,Types=["weapitype"]] -->
#### Prismatic

- Level: 80
- Required Level: 80
- Group: 209
- Eligible types: weapitype
- PType: Prefix
- Properties:
  - Lines:
    - -(10-15)% to All Enemy Elemental Resistances

<!-- changes.json: magicprefix / "rmapaffix_quality_prefix"[Group=2000,Level=1,Types=["mapiitype"]] -->
#### Charted

- Level: 1
- Required Level: 0
- Group: 2000
- Eligible types: mapiitype
- PType: Prefix

</details>

<details>
<summary>Removed (4)</summary>

<!-- changes.json: magicprefix / "Crushing1"[Group=202,Level=70,Types=["glovitype"]] -->
#### Crushing

- Level: 70
- Required Level: 63
- Group: 202
- Eligible types: glovitype
- PType: Prefix
- Properties:
  - Lines:
    - +(16-20)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Crushing1"[Group=212,Level=24,Types=["mchaitype"]] -->
#### Crushing

- Level: 24
- MaxLevel: 70
- Required Level: 18
- Group: 212
- Eligible types: mchaitype
- PType: Prefix
- Properties:
  - Lines:
    - +(3-5)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Crushing1"[Group=212,Level=55,Types=["mchaitype"]] -->
#### Crushing

- Level: 55
- Required Level: 50
- Group: 212
- Eligible types: mchaitype
- PType: Prefix
- Properties:
  - Lines:
    - +(5-7)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Crushing1"[Group=212,Level=65,Types=["mchaitype"]] -->
#### Crushing

- Level: 65
- Required Level: 60
- Group: 212
- Eligible types: mchaitype
- PType: Prefix
- Properties:
  - Lines:
    - +(7-10)% Chance of Crushing Blow

</details>

<details>
<summary>Modified (15)</summary>

<!-- changes.json: magicprefix / "Crusader\u0027s"[Group=111,Level=45,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Crusader's

- Affix variant identity: Level: 45; Required Level: 37; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -5% to Enemy Physical Damage Resistance
    - Removed: +(6-12)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Fine"[Group=111,Level=12,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Fine

- Affix variant identity: Level: 12; Required Level: 9; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -(2-3)% to Enemy Physical Damage Resistance
    - Removed: +(2-5)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Fracturing1"[Group=202,Level=45,Types=["glovitype"]] -->
#### Fracturing

- Affix variant identity: Level: 45; Required Level: 40; Group: 202; Eligible variants: `glovitype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -(3-5)% to Enemy Physical Damage Resistance
    - Removed: +(11-15)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Grandmaster\u0027s"[Group=111,Level=86,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Grandmaster's

- Affix variant identity: Level: 86; Required Level: 88; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -(10-15)% to Enemy Physical Damage Resistance
    - Removed: +(15-30)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Highmaster\u0027s"[Group=111,Level=83,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Highmaster's

- Affix variant identity: Level: 83; Required Level: 82; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -(10-15)% to Enemy Physical Damage Resistance
    - Removed: +(13-26)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Impacting1"[Group=202,Level=18,Types=["glovitype"]] -->
#### Impacting

- Affix variant identity: Level: 18; Required Level: 15; Group: 202; Eligible variants: `glovitype`
- Property changes:
  - Lines:
    - Added: -(1-3)% to Enemy Physical Damage Resistance
    - Removed: +(5-10)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "King\u0027s"[Group=111,Level=74,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### King's

- Affix variant identity: Level: 74; Required Level: 69; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -10% to Enemy Physical Damage Resistance
    - Removed: +(10-20)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Knight\u0027s"[Group=111,Level=52,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Knight's

- Affix variant identity: Level: 52; Required Level: 45; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -5% to Enemy Physical Damage Resistance
    - Removed: +(7-14)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Lord\u0027s"[Group=111,Level=65,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Lord's

- Affix variant identity: Level: 65; Required Level: 60; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -(5-10)% to Enemy Physical Damage Resistance
    - Removed: +(8-16)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Master\u0027s"[Group=111,Level=79,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Master's

- Affix variant identity: Level: 79; Required Level: 77; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -(10-15)% to Enemy Physical Damage Resistance
    - Removed: +(12-24)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Mastersmith\u0027s"[Group=111,Level=19,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Mastersmith's

- Affix variant identity: Level: 19; Required Level: 13; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -(3-4)% to Enemy Physical Damage Resistance
    - Removed: +(3-6)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Overlord\u0027s"[Group=111,Level=70,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Overlord's

- Affix variant identity: Level: 70; Required Level: 65; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -(5-10)% to Enemy Physical Damage Resistance
    - Removed: +(9-18)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Sharp"[Group=111,Level=5,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Sharp

- Affix variant identity: Level: 5; Required Level: 3; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -(1-2)% to Enemy Physical Damage Resistance
    - Removed: +(1-3)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Soldier\u0027s"[Group=111,Level=38,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Soldier's

- Affix variant identity: Level: 38; Required Level: 30; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -5% to Enemy Physical Damage Resistance
    - Removed: +(5-10)% Chance of Crushing Blow

<!-- changes.json: magicprefix / "Warrior\u0027s"[Group=111,Level=27,Types=["weapitype"],Properties="[{\u0022args\u0022:[],\u0022key\u0022:\u0022ModStr5c\u0022},{\u0022args\u0022:[],\u0022key\u0022:\u0022strModEnhancedDamage\u0022}]"] -->
#### Warrior's

- Affix variant identity: Level: 27; Required Level: 19; Group: 111; Eligible variants: `weapitype`; Eligible item types: `orbitype`, `wanditype`
- Affix variant matched using `StructuralMetadata`.
- Property changes:
  - Lines:
    - Added: -(4-5)% to Enemy Physical Damage Resistance
    - Removed: +(4-8)% Chance of Crushing Blow

</details>

</details>

## Magic suffixes

<details>
<summary>Magic suffixes — 2 added, 0 removed, 21 modified</summary>

<details>
<summary>Added (2)</summary>

<!-- changes.json: magicsuffix / "of Thunderstep"[Group=84,Level=30,Types=["amulitype","orbitype","stafitype"]] -->
#### of Thunderstep

- Level: 30
- Required Level: 30
- Group: 84
- Eligible types: orbitype, stafitype, amulitype
- PType: Suffix
- Properties:
  - Lines:
    - teleport\_nova \[1\] (translation template unsupported; review)
    - +1 to Nova (oskill)

<!-- changes.json: magicsuffix / "rmapaffix_quality_suffix"[Group=2001,Level=1,Types=["mapiitype"]] -->
#### of Exploration

- Level: 1
- Required Level: 0
- Group: 2001
- Eligible types: mapiitype
- PType: Suffix

</details>

<details>
<summary>Modified (21)</summary>

<!-- changes.json: magicsuffix / "of Autumn2"[Group=67,Level=54,Types=["amulitype","armoitype","ringitype","shlditype"]] -->
#### of Autumn

- Affix variant identity: Level: 54; Required Level: 45; Group: 67; Eligible variants: `armoitype`, `shlditype`, `ringitype`, `amulitype`
- Property changes:
  - Lines:
    - Changed: +(1-5)% to Maximum Poison Resistance (was +(1-10)%)

<!-- changes.json: magicsuffix / "of Chilling Coalescence1"[Group=3,Level=33,Types=["amulitype","ringitype","shlditype","weapitype"]] -->
#### of Chilling Coalescence

- Affix variant identity: Level: 33; Required Level: 29; Group: 3; Eligible variants: `weapitype`, `amulitype`, `ringitype`, `shlditype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(3-4)% Cold Damage Absorbed (was +(3-7)%)

<!-- changes.json: magicsuffix / "of Chilling Coalescence1"[Group=3,Level=66,Types=["amulitype","ringitype","shlditype","weapitype"]] -->
#### of Chilling Coalescence

- Affix variant identity: Level: 66; Required Level: 54; Group: 3; Eligible variants: `weapitype`, `amulitype`, `ringitype`, `shlditype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(5-7)% Cold Damage Absorbed (was +(8-15)%)

<!-- changes.json: magicsuffix / "of Chilling Coalescence1"[Group=3,Level=87,Types=["amulitype","ringitype","shlditype","weapitype"]] -->
#### of Chilling Coalescence

- Affix variant identity: Level: 87; Required Level: 80; Group: 3; Eligible variants: `weapitype`, `amulitype`, `ringitype`, `shlditype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(8-10)% Cold Damage Absorbed (was +(16-25)%)

<!-- changes.json: magicsuffix / "of Fire Coalescence1"[Group=3,Level=33,Types=["amulitype","ringitype","shlditype","weapitype"]] -->
#### of Fire Coalescence

- Affix variant identity: Level: 33; Required Level: 29; Group: 3; Eligible variants: `weapitype`, `amulitype`, `ringitype`, `shlditype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(3-4)% Fire Damage Absorbed (was +(3-7)%)

<!-- changes.json: magicsuffix / "of Fire Coalescence1"[Group=3,Level=66,Types=["amulitype","ringitype","shlditype","weapitype"]] -->
#### of Fire Coalescence

- Affix variant identity: Level: 66; Required Level: 54; Group: 3; Eligible variants: `weapitype`, `amulitype`, `ringitype`, `shlditype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(5-7)% Fire Damage Absorbed (was +(8-15)%)

<!-- changes.json: magicsuffix / "of Fire Coalescence1"[Group=3,Level=87,Types=["amulitype","ringitype","shlditype","weapitype"]] -->
#### of Fire Coalescence

- Affix variant identity: Level: 87; Required Level: 80; Group: 3; Eligible variants: `weapitype`, `amulitype`, `ringitype`, `shlditype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(8-10)% Fire Damage Absorbed (was +(16-25)%)

<!-- changes.json: magicsuffix / "of Lightning Coalescence1"[Group=3,Level=33,Types=["amulitype","ringitype","shlditype","weapitype"]] -->
#### of Lightning Coalescence

- Affix variant identity: Level: 33; Required Level: 29; Group: 3; Eligible variants: `weapitype`, `amulitype`, `ringitype`, `shlditype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(3-4)% Lightning Damage Absorbed (was +(3-7)%)

<!-- changes.json: magicsuffix / "of Lightning Coalescence1"[Group=3,Level=66,Types=["amulitype","ringitype","shlditype","weapitype"]] -->
#### of Lightning Coalescence

- Affix variant identity: Level: 66; Required Level: 54; Group: 3; Eligible variants: `weapitype`, `amulitype`, `ringitype`, `shlditype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(5-7)% Lightning Damage Absorbed (was +(8-15)%)

<!-- changes.json: magicsuffix / "of Lightning Coalescence1"[Group=3,Level=87,Types=["amulitype","ringitype","shlditype","weapitype"]] -->
#### of Lightning Coalescence

- Affix variant identity: Level: 87; Required Level: 80; Group: 3; Eligible variants: `weapitype`, `amulitype`, `ringitype`, `shlditype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(8-10)% Lightning Damage Absorbed (was +(16-25)%)

<!-- changes.json: magicsuffix / "of Spring2"[Group=67,Level=54,Types=["amulitype","armoitype","ringitype","shlditype"]] -->
#### of Spring

- Affix variant identity: Level: 54; Required Level: 45; Group: 67; Eligible variants: `armoitype`, `shlditype`, `ringitype`, `amulitype`
- Property changes:
  - Lines:
    - Changed: +(1-5)% to Maximum Lightning Resistance (was +(1-10)%)

<!-- changes.json: magicsuffix / "of Summer2"[Group=67,Level=54,Types=["amulitype","armoitype","ringitype","shlditype"]] -->
#### of Summer

- Affix variant identity: Level: 54; Required Level: 45; Group: 67; Eligible variants: `armoitype`, `shlditype`, `ringitype`, `amulitype`
- Property changes:
  - Lines:
    - Changed: +(1-5)% to Maximum Fire Resistance (was +(1-10)%)

<!-- changes.json: magicsuffix / "of Winter2"[Group=67,Level=54,Types=["amulitype","armoitype","ringitype","shlditype"]] -->
#### of Winter

- Affix variant identity: Level: 54; Required Level: 45; Group: 67; Eligible variants: `armoitype`, `shlditype`, `ringitype`, `amulitype`
- Property changes:
  - Lines:
    - Changed: +(1-5)% to Maximum Cold Resistance (was +(1-10)%)

<!-- changes.json: magicsuffix / "of the Four Seasons2"[Group=67,Level=68,Types=["amulitype","armoitype","ringitype","shlditype"]] -->
#### of the Four Seasons

- Affix variant identity: Level: 68; Required Level: 58; Group: 67; Eligible variants: `armoitype`, `shlditype`, `ringitype`, `amulitype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(1-2)% to All Maximum Resistances (was +(1-3)%)

<!-- changes.json: magicsuffix / "of the Four Seasons2"[Group=67,Level=87,Types=["amulitype","armoitype","ringitype","shlditype"]] -->
#### of the Four Seasons

- Affix variant identity: Level: 87; Required Level: 75; Group: 67; Eligible variants: `armoitype`, `shlditype`, `ringitype`, `amulitype`
- Affix variant matched using property signature.
- Property changes:
  - Lines:
    - Changed: +(3-4)% to All Maximum Resistances (was +(4-6)%)

<!-- changes.json: magicsuffix / "of the Monk"[Group=31,Level=7,Types=["mchaitype"]] -->
#### of the Monk

- Affix variant identity: Level: 7; Required Level: 10; Group: 31; Eligible variants: `mchaitype`
- Property changes:
  - Lines:
    - Changed: +(2-4) to Energy (was +4)

<!-- changes.json: magicsuffix / "of the Proud"[Group=31,Level=7,Types=["mchaitype"]] -->
#### of the Proud

- Affix variant identity: Level: 7; Required Level: 10; Group: 31; Eligible variants: `mchaitype`
- Property changes:
  - Lines:
    - Changed: +(2-4) to Energy (was +4)

<!-- changes.json: magicsuffix / "of the Rogue"[Group=31,Level=7,Types=["mchaitype"]] -->
#### of the Rogue

- Affix variant identity: Level: 7; Required Level: 10; Group: 31; Eligible variants: `mchaitype`
- Property changes:
  - Lines:
    - Changed: +(4-6) to Vitality (was +6)

<!-- changes.json: magicsuffix / "of the Stalwart"[Group=31,Level=7,Types=["mchaitype"]] -->
#### of the Stalwart

- Affix variant identity: Level: 7; Required Level: 10; Group: 31; Eligible variants: `mchaitype`
- Property changes:
  - Lines:
    - Changed: +(4-6) to Vitality (was +6)

<!-- changes.json: magicsuffix / "of the Swordsman"[Group=31,Level=7,Types=["mchaitype"]] -->
#### of the Swordsman

- Affix variant identity: Level: 7; Required Level: 10; Group: 31; Eligible variants: `mchaitype`
- Property changes:
  - Lines:
    - Changed: +(2-4) to Strength (was +4)

<!-- changes.json: magicsuffix / "of the Young"[Group=31,Level=7,Types=["mchaitype"]] -->
#### of the Young

- Affix variant identity: Level: 7; Required Level: 10; Group: 31; Eligible variants: `mchaitype`
- Property changes:
  - Lines:
    - Changed: +(4-6) to Energy (was +6)

</details>

</details>

