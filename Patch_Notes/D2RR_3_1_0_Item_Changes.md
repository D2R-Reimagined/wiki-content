---
title: Patch 3.1.0 Item and Recipe Changes
description: Don't make this visible yet K thanks Collin.
published: false
date: 2026-10-27T02:09:31.599Z
tags: patch, item changes
editor: markdown
dateCreated: 2026-10-27T02:09:31.599Z
---

# Item patch notes

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

### Added

#### Grand Charm

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

#### Shield

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

#### Staff

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

### Removed

#### Shield

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

### Modified

#### Amazon Bow

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

#### Amazon Spear

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

#### Amulet

<!-- changes.json: uniques / Entropy Locket -->
##### Entropy Locket

- Property changes:
  - Lines:
    - Added: 15% Chance to cast level 25 Miasma Chain on attack
    - Removed: 9% Chance to cast level 25 Miasma Chain on striking

#### Armor

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

#### Assassin Claw

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

#### Axe

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

#### Barbarian Primal Helm

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

#### Belt

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

#### Boots

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

#### Bow

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

#### Bow Quiver

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

#### Circlet

<!-- changes.json: uniques / Blindsight -->
##### Blindsight

- Property changes:
  - Lines:
    - Added: 5% Chance to cast level 10 Dim Vision on attack
    - Removed: 18% Chance to cast level 18 Dim Vision on striking

#### Club

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

#### Crossbow

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

#### Crossbow Quiver

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

#### Druid Pelt

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

#### Gloves

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

#### Grand Charm

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

#### Hammer

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

#### Helm

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

#### Javelin

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

#### Jewel

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

#### Knife

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

#### Large Charm

<!-- changes.json: uniques / Hellfire Torch -->
##### Hellfire Torch

- Property changes:
  - Lines:
    - Added: +1 to Light Radius

#### Mace

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

#### Necromancer Head

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

#### Paladin Auric Shield

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

#### Polearm

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

#### Ring

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

#### Scepter

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

#### Shield

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

#### Small Charm

<!-- changes.json: uniques / Black Soulstone -->
##### Black Soulstone

- Property changes:
  - Lines:
    - Changed: +5% to Experience Gained (was +10%)

#### Sorceress Orb

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

#### Spear

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

#### Staff

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

#### Sword

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

#### Throwing Axe

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

#### Throwing Knife

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

#### Warlock Grimoire

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

## Sets

### Added

*None.*

### Removed

*None.*

### Modified

<!-- changes.json: sets / Aiel Shieldmaiden -->
#### Aiel Shieldmaiden

- Set-piece changes:
<!-- changes.json: sets / Chiad's Valor -->
##### Modified: Chiad's Valor

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)


<!-- changes.json: sets / Aldur's Watchtower -->
#### Aldur's Watchtower

- Property changes:
  - Full set bonuses:
    - Changed: +15% Chance of Crushing Blow (Full set bonus) (was +20%)

<!-- changes.json: sets / Alyssa's Archery -->
#### Alyssa's Archery

- Set-piece changes:
<!-- changes.json: sets / Alyssa's Sandals -->
##### Modified: Alyssa's Sandals

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)


<!-- changes.json: sets / Amaunator's Peace -->
#### Amaunator's Peace

- Set-piece changes:
<!-- changes.json: sets / Holy Sash of Amaunator -->
##### Modified: Holy Sash of Amaunator

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


<!-- changes.json: sets / Brother Laz' Calling -->
#### Brother Laz' Calling

- Set-piece changes:
<!-- changes.json: sets / Glory of Salvation -->
##### Modified: Glory of Salvation

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


<!-- changes.json: sets / Bul-Kathos' Children -->
#### Bul-Kathos' Children

- Property changes:
  - Full set bonuses:
    - Changed: +15% Chance of Crushing Blow (Full set bonus) (was +25%)

<!-- changes.json: sets / Celestial Hierarchy -->
#### Celestial Hierarchy

- Set-piece changes:
<!-- changes.json: sets / Dominion -->
##### Modified: Dominion

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)

<!-- changes.json: sets / Principality -->
##### Modified: Principality

- Property changes:
  - Lines:
    - Added: +15% Chance of Open Wounds
    - Removed: +15% Chance of Crushing Blow

<!-- changes.json: sets / Virtue -->
##### Modified: Virtue

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


<!-- changes.json: sets / Chaos Energy -->
#### Chaos Energy

- Set-piece changes:
<!-- changes.json: sets / Treads of Energy -->
##### Modified: Treads of Energy

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)


<!-- changes.json: sets / Cleglaw's Brace -->
#### Cleglaw's Brace

- Property changes:
  - Full set bonuses:
    - Added: +25% Deadly Strike (Full set bonus)
    - Removed: +15% Chance of Crushing Blow (Full set bonus)

<!-- changes.json: sets / Corthala Family Heirlooms -->
#### Corthala Family Heirlooms

- Property changes:
  - Full set bonuses:
    - Changed: +15% Chance of Crushing Blow (Full set bonus) (was +35%)
- Set-piece changes:
<!-- changes.json: sets / Lady Daan's Celeritous Jambeau -->
##### Modified: Lady Daan's Celeritous Jambeau

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: sets / Prince Gwar's Bracers -->
##### Modified: Prince Gwar's Bracers

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


<!-- changes.json: sets / Darkmage's Astral Projection -->
#### Darkmage's Astral Projection

- Set-piece changes:
<!-- changes.json: sets / Darkmage's Meteor Shower -->
##### Modified: Darkmage's Meteor Shower

- Property changes:
  - Set bonuses:
    - Added: 10% Chance to cast level 50 Meteor on striking (4 Items)
    - Added: -25% to Enemy Fire Resistance (5 Items)
    - Removed: 8% Chance to cast level 12 Meteor on striking (4 Items)
    - Removed: +25% Chance of Crushing Blow (5 Items)


<!-- changes.json: sets / Darque Necromancy -->
#### Darque Necromancy

- Set-piece changes:
<!-- changes.json: sets / Dying Curses -->
##### Modified: Dying Curses

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


<!-- changes.json: sets / Death's Disguise -->
#### Death's Disguise

- Property changes:
  - Full set bonuses:
    - Added: +25% Deadly Strike (Full set bonus)
    - Removed: +10% Chance of Crushing Blow (Full set bonus)

<!-- changes.json: sets / Deus et Diabolus -->
#### Deus et Diabolus

- Set-piece changes:
<!-- changes.json: sets / Grasp of Lament -->
##### Modified: Grasp of Lament

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: sets / Shackles of the Veiled Belt -->
##### Modified: Shackles of the Veiled Belt

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: sets / Steps Etched in Ash -->
##### Modified: Steps Etched in Ash

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)


<!-- changes.json: sets / Forbidden Lore -->
#### Forbidden Lore

- Set-piece changes:
<!-- changes.json: sets / Death's Door -->
##### Modified: Death's Door

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)


<!-- changes.json: sets / Gweibret's Rule -->
#### Gweibret's Rule

- Set-piece changes:
<!-- changes.json: sets / Born Supremacy -->
##### Modified: Born Supremacy

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)


<!-- changes.json: sets / Hades' Underworld -->
#### Hades' Underworld

- Set-piece changes:
<!-- changes.json: sets / The River Stix -->
##### Modified: The River Stix

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


<!-- changes.json: sets / Hannibal's Demise -->
#### Hannibal's Demise

- Set-piece changes:
<!-- changes.json: sets / Hannibal's Bending Knee -->
##### Modified: Hannibal's Bending Knee

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)


<!-- changes.json: sets / Haunted Asylum -->
#### Haunted Asylum

- Set-piece changes:
<!-- changes.json: sets / Revenant's Claw -->
##### Modified: Revenant's Claw

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


<!-- changes.json: sets / Horazon's Splendor -->
#### Horazon's Splendor

- Set-piece changes:
<!-- changes.json: sets / Horazon's Hold -->
##### Modified: Horazon's Hold

- Property changes:
  - Lines:
    - Added: -(10-15)% to Enemy Fire Resistance
    - Removed: +10% Chance of Crushing Blow
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)

<!-- changes.json: sets / Horazon's Legacy -->
##### Modified: Horazon's Legacy

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


<!-- changes.json: sets / Immortal King -->
#### Immortal King

- Set-piece changes:
<!-- changes.json: sets / Immortal King's Detail -->
##### Modified: Immortal King's Detail

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: sets / Immortal King's Forge -->
##### Modified: Immortal King's Forge

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: sets / Immortal King's Pillar -->
##### Modified: Immortal King's Pillar

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: sets / Immortal King's Stone Crusher -->
##### Modified: Immortal King's Stone Crusher

- Property changes:
  - Lines:
    - Changed: +10% Chance of Crushing Blow (was +(15-25)%)


<!-- changes.json: sets / Insight of Brother Laz -->
#### Insight of Brother Laz

- Set-piece changes:
<!-- changes.json: sets / Power of Brother Laz -->
##### Modified: Power of Brother Laz

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)


<!-- changes.json: sets / JBouley's Scion -->
#### JBouley's Scion

- Set-piece changes:
<!-- changes.json: sets / Night's Caress -->
##### Modified: Night's Caress

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


<!-- changes.json: sets / Kai Lord's Valiance -->
#### Kai Lord's Valiance

- Set-piece changes:
<!-- changes.json: sets / Hallowed Greaves -->
##### Modified: Hallowed Greaves

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: sets / Helghast Waistband -->
##### Modified: Helghast Waistband

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


<!-- changes.json: sets / Kaldorn's Majesty -->
#### Kaldorn's Majesty

- Set-piece changes:
<!-- changes.json: sets / Daystar Wrap -->
##### Modified: Daystar Wrap

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)

<!-- changes.json: sets / Waterwyrd's Talon -->
##### Modified: Waterwyrd's Talon

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)


<!-- changes.json: sets / Knight's Gallantry -->
#### Knight's Gallantry

- Property changes:
  - Partial set bonuses:
    - Added: +25% Chance of Open Wounds (3 Items)
    - Removed: +20% Chance of Crushing Blow (3 Items)

<!-- changes.json: sets / M'avina's Battle Hymn -->
#### M'avina's Battle Hymn

- Set-piece changes:
<!-- changes.json: sets / M'avina's Icy Clutch -->
##### Modified: M'avina's Icy Clutch

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: sets / M'avina's Tenet -->
##### Modified: M'avina's Tenet

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)


<!-- changes.json: sets / Maadi's Paradox -->
#### Maadi's Paradox

- Set-piece changes:
<!-- changes.json: sets / Maadi's Silence -->
##### Modified: Maadi's Silence

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)


<!-- changes.json: sets / Marhawkman's Disguise -->
#### Marhawkman's Disguise

- Set-piece changes:
<!-- changes.json: sets / Andariel's Claw -->
##### Modified: Andariel's Claw

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: sets / Andariel's Hooves -->
##### Modified: Andariel's Hooves

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)


<!-- changes.json: sets / Mishy's Avatar -->
#### Mishy's Avatar

- Set-piece changes:
<!-- changes.json: sets / Elven Grace -->
##### Modified: Elven Grace

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: sets / Maiden's Kiss -->
##### Modified: Maiden's Kiss

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


<!-- changes.json: sets / Myhrginoc's Warbreeder -->
#### Myhrginoc's Warbreeder

- Set-piece changes:
<!-- changes.json: sets / Myhrginoc's Deathmonger -->
##### Modified: Myhrginoc's Deathmonger

- Property changes:
  - Lines:
    - Removed: +25% Chance of Open Wounds
  - Set bonuses:
    - Added: +25% Chance of Open Wounds (2 Items)
    - Removed: +15% Chance of Crushing Blow (2 Items)
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)


<!-- changes.json: sets / Natalya's Odium -->
#### Natalya's Odium

- Set-piece changes:
<!-- changes.json: sets / Natalya's Soul -->
##### Modified: Natalya's Soul

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


<!-- changes.json: sets / Nefarious Ways -->
#### Nefarious Ways

- Property changes:
  - Full set bonuses:
    - Changed: +15% Chance of Crushing Blow (Full set bonus) (was +50%)
- Set-piece changes:
<!-- changes.json: sets / Evil Reputation -->
##### Modified: Evil Reputation

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


<!-- changes.json: sets / Onyx's Primal Rage -->
#### Onyx's Primal Rage

- Set-piece changes:
<!-- changes.json: sets / Onyx's Fallen Star -->
##### Modified: Onyx's Fallen Star

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)


<!-- changes.json: sets / Orphan's Call -->
#### Orphan's Call

- Set-piece changes:
<!-- changes.json: sets / Guillaume's Face -->
##### Modified: Guillaume's Face

- Property changes:
  - Set bonuses:
    - Added: -10% to Enemy Physical Damage Resistance (2 Items)
    - Removed: +15% Chance of Crushing Blow (2 Items)

<!-- changes.json: sets / Magnus' Skin -->
##### Modified: Magnus' Skin

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: sets / Wilhelm's Pride -->
##### Modified: Wilhelm's Pride

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)


<!-- changes.json: sets / Path of Bravery -->
#### Path of Bravery

- Set-piece changes:
<!-- changes.json: sets / Imperial Gauntlets -->
##### Modified: Imperial Gauntlets

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: sets / Imperial Girdle -->
##### Modified: Imperial Girdle

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)

<!-- changes.json: sets / Imperial Greaves -->
##### Modified: Imperial Greaves

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)


<!-- changes.json: sets / Phrozen Heart's Mysticism -->
#### Phrozen Heart's Mysticism

- Set-piece changes:
<!-- changes.json: sets / Cryptic Claws -->
##### Modified: Cryptic Claws

- Property changes:
  - Set bonuses:
    - Added: +10% Chance of Crushing Blow (3 Items)
    - Removed: +20% Chance of Crushing Blow (3 Items)

<!-- changes.json: sets / Dawns Mist -->
##### Modified: Dawns Mist

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)

<!-- changes.json: sets / Featherfoot -->
##### Modified: Featherfoot

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: sets / Winter's Discord -->
##### Modified: Winter's Discord

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)


<!-- changes.json: sets / Red Havoc's Challenge -->
#### Red Havoc's Challenge

- Set-piece changes:
<!-- changes.json: sets / Drawing Out the Beast -->
##### Modified: Drawing Out the Beast

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


<!-- changes.json: sets / Servitude or Rebellion -->
#### Servitude or Rebellion

- Set-piece changes:
<!-- changes.json: sets / Equilibrium -->
##### Modified: Equilibrium

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


<!-- changes.json: sets / Sines Psionics -->
#### Sine's Psionics

- Set-piece changes:
<!-- changes.json: sets / Cortex Wrap -->
##### Modified: Cortex Wrap

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: sets / Phasewalker Boots -->
##### Modified: Phasewalker Boots

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)


<!-- changes.json: sets / Soldier's Cairn -->
#### Soldier's Cairn

- Set-piece changes:
<!-- changes.json: sets / Martyr's Principle -->
##### Modified: Martyr's Principle

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


<!-- changes.json: sets / Stormsigil Vestments -->
#### Stormsigil Vestments

- Set-piece changes:
<!-- changes.json: sets / Stormtwist Grasp -->
##### Modified: Stormtwist Grasp

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)


<!-- changes.json: sets / Tal Rasha's Wrappings -->
#### Tal Rasha's Wrappings

- Set-piece changes:
<!-- changes.json: sets / Tal Rasha's Fine-Spun Cloth -->
##### Modified: Tal Rasha's Fine-Spun Cloth

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


<!-- changes.json: sets / Talonrage's Fury -->
#### Talonrage's Fury

- Set-piece changes:
<!-- changes.json: sets / Shattering Fist -->
##### Modified: Shattering Fist

- Property changes:
  - Lines:
    - Added: +15% Deadly Strike
    - Added: +10% Chance of Open Wounds
    - Removed: +10% Chance of Crushing Blow


<!-- changes.json: sets / Terror of the Deep -->
#### Terror of the Deep

- Property changes:
  - Full set bonuses:
    - Added: -20% to Enemy Physical Damage Resistance (Full set bonus)
    - Removed: +25% Chance of Crushing Blow (Full set bonus)
- Set-piece changes:
<!-- changes.json: sets / Hammerhead's Persistence -->
##### Modified: Hammerhead's Persistence

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)

<!-- changes.json: sets / Mako's Quickness -->
##### Modified: Mako's Quickness

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 18 of 18 (was 14 of 14)


<!-- changes.json: sets / The Disciple -->
#### The Disciple

- Set-piece changes:
<!-- changes.json: sets / Credendum -->
##### Modified: Credendum

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 24 of 24 (was 16 of 16)

<!-- changes.json: sets / Laying of Hands -->
##### Modified: Laying of Hands

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: sets / Rite of Passage -->
##### Modified: Rite of Passage

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 16 of 16 (was 12 of 12)


<!-- changes.json: sets / The Mysterious Spin -->
#### The Mysterious Spin

- Set-piece changes:
<!-- changes.json: sets / Spin's Mystery -->
##### Modified: Spin's Mystery

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)


<!-- changes.json: sets / The Warlord of Blood -->
#### The Warlord of Blood

- Set-piece changes:
<!-- changes.json: sets / Tortured Soul Gauntlets -->
##### Modified: Tortured Soul Gauntlets

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
##### Modified: Vengeance Unleashed

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 28 of 28 (was 24 of 24)


<!-- changes.json: sets / Tika's Request -->
#### Tika's Request

- Set-piece changes:
<!-- changes.json: sets / Gauntlets of Quietus -->
##### Modified: Gauntlets of Quietus

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: sets / Girdle of Kitthix -->
##### Modified: Girdle of Kitthix

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 32 of 32 (was 24 of 24)


<!-- changes.json: sets / Tools of Vindication -->
#### Tools of Vindication

- Set-piece changes:
<!-- changes.json: sets / Belt of the Vindicator -->
##### Modified: Belt of the Vindicator

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


<!-- changes.json: sets / Trang-Oul's Avatar -->
#### Trang-Oul's Avatar

- Set-piece changes:
<!-- changes.json: sets / Trang-Oul's Claws -->
##### Modified: Trang-Oul's Claws

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)

<!-- changes.json: sets / Trang-Oul's Girth -->
##### Modified: Trang-Oul's Girth

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 18 of 18)


<!-- changes.json: sets / Treasure Hunter -->
#### Treasure Hunter

- Set-piece changes:
<!-- changes.json: sets / Kingpin's Greaves -->
##### Modified: Kingpin's Greaves

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 52 of 52 (was 48 of 48)

<!-- changes.json: sets / Kingpin's Wrap -->
##### Modified: Kingpin's Wrap

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)


<!-- changes.json: sets / Volf's Undead Legion -->
#### Volf's Undead Legion

- Set-piece changes:
<!-- changes.json: sets / Death Knight's Demon Blade -->
##### Modified: Death Knight's Demon Blade

- Property changes:
  - Set bonuses:
    - Added: Cold Length: 8 seconds (3 Items)


<!-- changes.json: sets / Warlock's Exploration -->
#### Warlock's Exploration

- Set-piece changes:
<!-- changes.json: sets / Citadel Belt -->
##### Modified: Citadel Belt

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)

<!-- changes.json: sets / Teleomortis' Gloves -->
##### Modified: Teleomortis' Gloves

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 12 of 12)


<!-- changes.json: sets / Warlord's Glory -->
#### Warlord's Glory

- Set-piece changes:
<!-- changes.json: sets / Warlord's Lust -->
##### Modified: Warlord's Lust

- Property changes:
  - Set bonuses:
    - Added: +25 to Attack Rating (2 Items)


<!-- changes.json: sets / Wrath of Vengeance -->
#### Wrath of Vengeance

- Set-piece changes:
<!-- changes.json: sets / Embracing Hatred -->
##### Modified: Embracing Hatred

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 18 of 18)

<!-- changes.json: sets / Guiding Force -->
##### Modified: Guiding Force

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 26 of 26 (was 16 of 16)

<!-- changes.json: sets / Harvest of Cruelty -->
##### Modified: Harvest of Cruelty

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 22 of 22 (was 14 of 14)


<!-- changes.json: sets / Yohann's Savant -->
#### Yohann's Savant

- Set-piece changes:
<!-- changes.json: sets / Gloves of Knowledge -->
##### Modified: Gloves of Knowledge

- Property changes:
  - Equipment Lines:
    - Changed: Durability: 20 of 20 (was 16 of 16)


## Runewords

### Added

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

### Removed

*None.*

### Modified

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

## Base armor

### Added

*None.*

### Removed

*None.*

### Modified

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

## Base weapons

### Added

*None.*

### Removed

*None.*

### Modified

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

## Magic prefixes

### Added

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

### Removed

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

### Modified

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

## Magic suffixes

### Added

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

### Removed

*None.*

### Modified

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

# Recipe patch notes

## Summary

- Old snapshot: `C:\z_GitHub\00_DocTest\Old`; manifest schema 2; Succeeded=True; Complete=True; manifest SHA-256 `640d37f036c233d6eb89d806c5ebbb6cf8e2168d4f4b3530d9294dd52f3db9fb`.
- New snapshot: `C:\z_GitHub\00_DocTest\New`; manifest schema 2; Succeeded=True; Complete=True; manifest SHA-256 `75af4d57543f3d0f1136780ce14817a6cc90b37365f131f7ab54b40f127d1286`.
- English translations (old snapshot): available (manifest-verified).
- English translations (new snapshot): available (manifest-verified).
- Recipe comparison: `Compared`.

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
| Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item | 4 | 5 | 9 |
| Uber Charm Upgrade Recipe / Socket Item | 0 | 1 | 1 |
| Other recipes | 1 | 39 | 0 |

- Total confirmed matched modifications: 15; unmatched additions: 477; unmatched removals: 513; unchanged matched recipes not listed: 495.
- Reindexed matched recipes: 325.
- Comparison diagnostics: 0 error(s), 0 warning(s).
- Untranslated or unsupported values requiring review: 39.
- Review items: 704.

## Recipe identity and unmatched definitions

Recipe IDs are derived from recipe ingredients and conditions. An ingredient or condition adjustment can therefore appear as an unmatched removal and addition. These entries are not automatically paired or described as confirmed additions or deletions; compare their source IDs and review whether the recipes were restructured.

## Force Ethereal Recipe

### Added recipe definitions

<!-- changes.json: cube-recipes / cr-f07ebf2ad9fed986 -->
#### 1 × 1H Weapons + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item

- Source: `cr-f07ebf2ad9fed986`, row 551.
- Crafting category or notes: Force Ethereal Recipe
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

<!-- changes.json: cube-recipes / cr-865908c1a0bd7910 -->
#### 1 × Any Armor + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item

- Source: `cr-865908c1a0bd7910`, row 550.
- Crafting category or notes: Force Ethereal Recipe
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

<!-- changes.json: cube-recipes / cr-8df62ecd9cb08ef2 -->
#### 1 × Slam Weapons + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item

- Source: `cr-8df62ecd9cb08ef2`, row 552.
- Crafting category or notes: Force Ethereal Recipe
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

<!-- changes.json: cube-recipes / cr-d645c9696bc04c38 -->
#### 1 × Spears and Polearms + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item

- Source: `cr-d645c9696bc04c38`, row 553.
- Crafting category or notes: Force Ethereal Recipe
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

### Removed recipe definitions

<!-- changes.json: cube-recipes / cr-0e02d4d7180dd542 -->
#### 1 × 1H Weapons + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item

- Source: `cr-0e02d4d7180dd542`, row 575.
- Crafting category or notes: Force Ethereal Recipe
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

<!-- changes.json: cube-recipes / cr-12ffad3eb728ac58 -->
#### 1 × Any Armor + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item

- Source: `cr-12ffad3eb728ac58`, row 574.
- Crafting category or notes: Force Ethereal Recipe
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

<!-- changes.json: cube-recipes / cr-24874e1ee4ef992e -->
#### 1 × Slam Weapons + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item

- Source: `cr-24874e1ee4ef992e`, row 576.
- Crafting category or notes: Force Ethereal Recipe
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

<!-- changes.json: cube-recipes / cr-b922bcc06edf2e80 -->
#### 1 × Spears and Polearms + 1 × Jewel + 1 × Ohm Rune (#27) → 1 × Return Exact Input Item

- Source: `cr-b922bcc06edf2e80`, row 577.
- Crafting category or notes: Force Ethereal Recipe
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

## Item Crafting Recipe

### Confirmed matched modifications

<!-- changes.json: cube-recipes / cr-3f76f6d2abcc940b -->
#### 1 × Any Shield + 1 × Jewel + 1 × Um Rune (#22) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-3f76f6d2abcc940b`, row 387.
- Output property (A): +20% to All Resistances (was +(20-25)%)
- Output property (A): 20% Increased Chance of Blocking (was (20-30)%)
- Output property (A): +(20-30)% Faster Hit Recovery (was +30%)

<!-- changes.json: cube-recipes / cr-7ace18051adfaf9a -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Ral Rune (#8) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-7ace18051adfaf9a`, row 336.
- Added output property (A): +50% Enhanced Defense

### Added recipe definitions

<!-- changes.json: cube-recipes / cr-b7746d48785441d2 -->
#### 1 × 1H Weapons + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Dem Rune (#38) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-b7746d48785441d2`, row 407.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-e8e3ab386ba00f92 -->
#### 1 × 1H Weapons + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-e8e3ab386ba00f92`, row 395.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-10269b3eb0c714b5 -->
#### 1 × 1H Weapons + 1 × Jewel + 1 × Hev Rune (#39) + 1 × Myr Rune (#36) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-10269b3eb0c714b5`, row 415.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-46ddbc15ceb9fa87 -->
#### 1 × 1H Weapons + 1 × Jewel + 1 × Myr Rune (#36) + 1 × Zod Rune (#33) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-46ddbc15ceb9fa87`, row 403.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-d95260bbd6a71c05 -->
#### 1 × 1H Weapons + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-d95260bbd6a71c05`, row 399.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-d983c92e677f770c -->
#### 1 × 1H Weapons + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Grit Rune (#37) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-d983c92e677f770c`, row 411.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-4e88f430f00fbd68 -->
#### 1 × Amulet + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-4e88f430f00fbd68`, row 288.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 4 Battle Orders when you Level-Up

<!-- changes.json: cube-recipes / cr-456172c86072c18e -->
#### 1 × Amulet + 1 × Jewel + 1 × Amn Rune (#11) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-456172c86072c18e`, row 494.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-6cf2db35ff0e0b7b -->
#### 1 × Amulet + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Vex Rune (#26) + 1 × Skull → 1 × Use Input Item Type

- Source: `cr-6cf2db35ff0e0b7b`, row 292.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-eafdb94a7b3991a3 -->
#### 1 × Amulet + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-eafdb94a7b3991a3`, row 503.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-f5cbe626ff5d2e4c -->
#### 1 × Amulet + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-f5cbe626ff5d2e4c`, row 512.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-5813e67a70f41de2 -->
#### 1 × Amulet + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-5813e67a70f41de2`, row 485.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a45e5ee323e5c8c0 -->
#### 1 × Amulet + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-a45e5ee323e5c8c0`, row 293.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-246c51c12fc15664 -->
#### 1 × Any Shield + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-246c51c12fc15664`, row 377.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-0eeca94e5440c245 -->
#### 1 × Any Shield + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Um Rune (#22) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-0eeca94e5440c245`, row 388.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-f40b1cde8ff7e1be -->
#### 1 × Any Shield + 1 × Jewel + 1 × Eth Rune (#5) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-f40b1cde8ff7e1be`, row 501.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-7c7c5c051da924f8 -->
#### 1 × Any Shield + 1 × Jewel + 1 × Eth Rune (#5) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-7c7c5c051da924f8`, row 483.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ef79e5c60fe4caee -->
#### 1 × Any Shield + 1 × Jewel + 1 × Ith Rune (#6) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-ef79e5c60fe4caee`, row 492.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-fc9b1f43f82397f3 -->
#### 1 × Any Shield + 1 × Jewel + 1 × Nef Rune (#4) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-fc9b1f43f82397f3`, row 510.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ba3b0e2473d456e3 -->
#### 1 × Any Shield + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ba3b0e2473d456e3`, row 389.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b41ce230c83a3306 -->
#### 1 × Any Shield + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Zeph Rune (#35) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-b41ce230c83a3306`, row 390.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-9e23f069fda0736f -->
#### 1 × Any Weapon + 1 × Jewel + 1 × Ort Rune (#9) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-9e23f069fda0736f`, row 496.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-547c36ab0cbaa134 -->
#### 1 × Any Weapon + 1 × Jewel + 1 × Sol Rune (#12) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-547c36ab0cbaa134`, row 514.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b4ddcb5b699b40ca -->
#### 1 × Any Weapon + 1 × Jewel + 1 × Tir Rune (#3) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-b4ddcb5b699b40ca`, row 505.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b2da8b49be60c36c -->
#### 1 × Any Weapon + 1 × Jewel + 1 × Tir Rune (#3) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-b2da8b49be60c36c`, row 487.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-447df96efb78aa47 -->
#### 1 × Armor + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-447df96efb78aa47`, row 357.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 5 Oak Sage when you Level-Up

<!-- changes.json: cube-recipes / cr-aa61ecd1960e49d3 -->
#### 1 × Armor + 1 × Jewel + 1 × Eth Rune (#5) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-aa61ecd1960e49d3`, row 511.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-6f8a86fdfcc472d8 -->
#### 1 × Armor + 1 × Jewel + 1 × Nef Rune (#4) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-6f8a86fdfcc472d8`, row 484.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-6535666b58bd25f9 -->
#### 1 × Armor + 1 × Jewel + 1 × Tal Rune (#7) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-6535666b58bd25f9`, row 502.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a9470e478efbd0a6 -->
#### 1 × Armor + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-a9470e478efbd0a6`, row 493.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-f2059d9389c49b6f -->
#### 1 × Armor + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Ber Rune (#30) + 1 × Um Rune (#22) → 1 × Use Input Item Type

- Source: `cr-f2059d9389c49b6f`, row 376.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-187a8c9a1aed6766 -->
#### 1 × Belt + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-187a8c9a1aed6766`, row 301.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Frozen Armor when you Level-Up

<!-- changes.json: cube-recipes / cr-d5ed080afd5907e0 -->
#### 1 × Belt + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Zod Rune (#33) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-d5ed080afd5907e0`, row 306.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-1ef101d7c3d2f30d -->
#### 1 × Belt + 1 × Jewel + 1 × Cham Rune (#32) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-1ef101d7c3d2f30d`, row 305.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-be7fed8370931bf3 -->
#### 1 × Belt + 1 × Jewel + 1 × Ith Rune (#6) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-be7fed8370931bf3`, row 500.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-5169209e1183c3ee -->
#### 1 × Belt + 1 × Jewel + 1 × Tal Rune (#7) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-5169209e1183c3ee`, row 509.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-0d9d210acb075111 -->
#### 1 × Belt + 1 × Jewel + 1 × Tal Rune (#7) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-0d9d210acb075111`, row 491.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-8e31e113a047f440 -->
#### 1 × Belt + 1 × Jewel + 1 × Tal Rune (#7) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-8e31e113a047f440`, row 482.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-dd24cbb786ca1f1c -->
#### 1 × Belt + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Zod Rune (#33) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-dd24cbb786ca1f1c`, row 307.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-7c9a65c44a8908bf -->
#### 1 × Boots + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-7c9a65c44a8908bf`, row 308.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Magic Item
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - +10% Faster Run/Walk Speed

<!-- changes.json: cube-recipes / cr-8c2b77b4d66940d9 -->
#### 1 × Boots + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-8c2b77b4d66940d9`, row 309.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Burst of Speed when you Level-Up

<!-- changes.json: cube-recipes / cr-07a5d07ed5a0a6e6 -->
#### 1 × Boots + 1 × Jewel + 1 × Eth Rune (#5) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-07a5d07ed5a0a6e6`, row 489.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a0bf9adc416f82e5 -->
#### 1 × Boots + 1 × Jewel + 1 × Ort Rune (#9) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-a0bf9adc416f82e5`, row 507.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-967dcff56038ce5e -->
#### 1 × Boots + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-967dcff56038ce5e`, row 480.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-4e2f9f9978f911b7 -->
#### 1 × Boots + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-4e2f9f9978f911b7`, row 498.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a31d7709ee0a0caa -->
#### 1 × Boots + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Brak Rune (#34) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-a31d7709ee0a0caa`, row 312.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-eece3f9244cf7b07 -->
#### 1 × Boots + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Zeph Rune (#35) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-eece3f9244cf7b07`, row 313.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b605c5f9233a5e13 -->
#### 1 × Gloves + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-b605c5f9233a5e13`, row 314.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 4 Battle Command when you Level-Up

<!-- changes.json: cube-recipes / cr-4c9d64b377a1c73d -->
#### 1 × Gloves + 1 × Jewel + 1 × Nef Rune (#4) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-4c9d64b377a1c73d`, row 490.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-91127cda976908cb -->
#### 1 × Gloves + 1 × Jewel + 1 × Ort Rune (#9) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-91127cda976908cb`, row 499.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-8d8b7dd3b22dc00d -->
#### 1 × Gloves + 1 × Jewel + 1 × Ort Rune (#9) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-8d8b7dd3b22dc00d`, row 481.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-002459c4d64f1d96 -->
#### 1 × Gloves + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-002459c4d64f1d96`, row 508.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-6c4f05be340afc9b -->
#### 1 × Gloves + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Brak Rune (#34) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-6c4f05be340afc9b`, row 333.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-d20a68d110b8acb7 -->
#### 1 × Gloves + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Zeph Rune (#35) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-d20a68d110b8acb7`, row 334.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-80e94a6665e6769f -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-80e94a6665e6769f`, row 440.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-6ee5b8665b808489 -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Chaos Onyx → 1 × Use Input Item Type

- Source: `cr-6ee5b8665b808489`, row 442.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-32655966394570dc -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Diamond → 1 × Use Input Item Type

- Source: `cr-32655966394570dc`, row 441.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-3b6742663e78a047 -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-3b6742663e78a047`, row 438.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b9649b65f4cf4982 -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-b9649b65f4cf4982`, row 436.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-c18d0465f949aead -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-c18d0465f949aead`, row 437.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-92139c666f940b35 -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Skull → 1 × Use Input Item Type

- Source: `cr-92139c666f940b35`, row 439.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a83a4965eb21b4ec -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Vex Rune (#26) + 1 × Topaz → 1 × Use Input Item Type

- Source: `cr-a83a4965eb21b4ec`, row 435.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-9f6fc5edde028dad -->
#### 1 × Helm + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-9f6fc5edde028dad`, row 335.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Shout when you Level-Up

<!-- changes.json: cube-recipes / cr-36aadd1f3d5bb840 -->
#### 1 × Helm + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-36aadd1f3d5bb840`, row 354.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-c0132295fba831e2 -->
#### 1 × Helm + 1 × Jewel + 1 × Ith Rune (#6) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-c0132295fba831e2`, row 506.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-5dcb22428a11424c -->
#### 1 × Helm + 1 × Jewel + 1 × Ith Rune (#6) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-5dcb22428a11424c`, row 479.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-9dc6f2a2992f7a10 -->
#### 1 × Helm + 1 × Jewel + 1 × Nef Rune (#4) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-9dc6f2a2992f7a10`, row 497.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-006c0afdb2d98023 -->
#### 1 × Helm + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-006c0afdb2d98023`, row 488.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-3956af4cdc6fccfe -->
#### 1 × Helm + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-3956af4cdc6fccfe`, row 355.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-417f184ce0ea3229 -->
#### 1 × Helm + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-417f184ce0ea3229`, row 356.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-47eb947f52d6d301 -->
#### 1 × Missile Weapon + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Dem Rune (#38) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-47eb947f52d6d301`, row 406.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-c67f8eea6de59531 -->
#### 1 × Missile Weapon + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-c67f8eea6de59531`, row 394.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-16092e47cd85c366 -->
#### 1 × Missile Weapon + 1 × Jewel + 1 × Hev Rune (#39) + 1 × Myr Rune (#36) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-16092e47cd85c366`, row 414.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a554850d184f857c -->
#### 1 × Missile Weapon + 1 × Jewel + 1 × Myr Rune (#36) + 1 × Zod Rune (#33) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-a554850d184f857c`, row 402.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-476bde033cdae0f6 -->
#### 1 × Missile Weapon + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-476bde033cdae0f6`, row 398.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-c0ca19d259c14317 -->
#### 1 × Missile Weapon + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Grit Rune (#37) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-c0ca19d259c14317`, row 410.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-0d95231dbfd434fc -->
#### 1 × Ring + 1 × Eld Rune (#2) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-0d95231dbfd434fc`, row 294.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Eld Rune (#2)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Fade when you Level-Up

<!-- changes.json: cube-recipes / cr-e0a5033f3e143b75 -->
#### 1 × Ring + 1 × Jewel + 1 × Amn Rune (#11) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-e0a5033f3e143b75`, row 504.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-4010438103b7e36d -->
#### 1 × Ring + 1 × Jewel + 1 × Amn Rune (#11) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-4010438103b7e36d`, row 513.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a3dc02c9af4f9e63 -->
#### 1 × Ring + 1 × Jewel + 1 × Amn Rune (#11) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-a3dc02c9af4f9e63`, row 486.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b4b028ef109b62bd -->
#### 1 × Ring + 1 × Jewel + 1 × Sol Rune (#12) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-b4b028ef109b62bd`, row 495.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-4b5bfd2e73be829b -->
#### 1 × Ring + 1 × Jewel + 1 × Sur Rune (#29) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-4b5bfd2e73be829b`, row 298.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-9d9f671eee7fd892 -->
#### 1 × Ring + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Brak Rune (#34) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-9d9f671eee7fd892`, row 299.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-1cf0e931449f9f8e -->
#### 1 × Ring + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Zeph Rune (#35) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-1cf0e931449f9f8e`, row 300.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-c4257665b7251094 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Topaz → 1 × Use Input Item Type

- Source: `cr-c4257665b7251094`, row 296.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Orb of Infusion
  - 1 × Topaz
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Rare Item
    - +20% Chance Items Roll Magic or Better

<!-- changes.json: cube-recipes / cr-2521a422be46f792 -->
#### 1 × Slam Weapons + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Dem Rune (#38) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-2521a422be46f792`, row 404.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-3fff47d9107e9d52 -->
#### 1 × Slam Weapons + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-3fff47d9107e9d52`, row 392.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-0ee40d5d1e3c9475 -->
#### 1 × Slam Weapons + 1 × Jewel + 1 × Hev Rune (#39) + 1 × Myr Rune (#36) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-0ee40d5d1e3c9475`, row 412.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ef162e39242e2547 -->
#### 1 × Slam Weapons + 1 × Jewel + 1 × Myr Rune (#36) + 1 × Zod Rune (#33) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ef162e39242e2547`, row 400.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-86f2fd579386fec5 -->
#### 1 × Slam Weapons + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-86f2fd579386fec5`, row 396.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-41dd085ee32ebdcc -->
#### 1 × Slam Weapons + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Grit Rune (#37) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-41dd085ee32ebdcc`, row 408.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ac34edec3dbf07d8 -->
#### 1 × Spears and Polearms + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Dem Rune (#38) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ac34edec3dbf07d8`, row 405.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-e64d4bd9c0879fcc -->
#### 1 × Spears and Polearms + 1 × Jewel + 1 × Brak Rune (#34) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-e64d4bd9c0879fcc`, row 393.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-22ab3d19a02bbc6f -->
#### 1 × Spears and Polearms + 1 × Jewel + 1 × Hev Rune (#39) + 1 × Myr Rune (#36) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-22ab3d19a02bbc6f`, row 413.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-abfa7ccaa37465e5 -->
#### 1 × Spears and Polearms + 1 × Jewel + 1 × Myr Rune (#36) + 1 × Zod Rune (#33) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-abfa7ccaa37465e5`, row 401.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-86f787711deb21cf -->
#### 1 × Spears and Polearms + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-86f787711deb21cf`, row 397.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-386e7cda059269ae -->
#### 1 × Spears and Polearms + 1 × Jewel + 1 × Zeph Rune (#35) + 1 × Grit Rune (#37) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-386e7cda059269ae`, row 409.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-cca30bb3d01e8151 -->
#### Amazon-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-cca30bb3d01e8151`, row 380.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-40ca7cb03c82ae0e -->
#### Amazon-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-40ca7cb03c82ae0e`, row 369.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-1eccf08ef4bd7955 -->
#### Amazon-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-1eccf08ef4bd7955`, row 361.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-c2520bbc3fe79881 -->
#### Amazon-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-c2520bbc3fe79881`, row 347.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-373604ff4285e96b -->
#### Amazon-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-373604ff4285e96b`, row 339.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-60e01786338bbe45 -->
#### Assassin-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-60e01786338bbe45`, row 384.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-95b16d0a82ba0a32 -->
#### Assassin-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-95b16d0a82ba0a32`, row 373.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ce13751c6cffe1e1 -->
#### Assassin-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ce13751c6cffe1e1`, row 365.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-9bee4319a39ae115 -->
#### Assassin-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-9bee4319a39ae115`, row 351.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-1edd9c31f24f5fa7 -->
#### Assassin-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-1edd9c31f24f5fa7`, row 343.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-375fc2260469f985 -->
#### Barbarian-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-375fc2260469f985`, row 378.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a5b59ac3e3eac4f2 -->
#### Barbarian-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-a5b59ac3e3eac4f2`, row 367.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-de17a2d5ce309ca1 -->
#### Barbarian-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-de17a2d5ce309ca1`, row 359.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b6fa89f748fed7d5 -->
#### Barbarian-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-b6fa89f748fed7d5`, row 345.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-7923b84e81e43767 -->
#### Barbarian-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-7923b84e81e43767`, row 337.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-81063ed375104f3d -->
#### Druid-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-81063ed375104f3d`, row 383.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-5de346e4ed5f1fca -->
#### Druid-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-5de346e4ed5f1fca`, row 372.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-82148d3c03261af9 -->
#### Druid-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-82148d3c03261af9`, row 364.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b6344e68d21e64dd -->
#### Druid-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-b6344e68d21e64dd`, row 350.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-4b0e6c7faf9250cf -->
#### Druid-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-4b0e6c7faf9250cf`, row 342.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-5a1e137586b5d642 -->
#### Necromancer-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-5a1e137586b5d642`, row 381.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-6ed4edbd556da64f -->
#### Necromancer-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-6ed4edbd556da64f`, row 370.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ed2626897fe2067c -->
#### Necromancer-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ed2626897fe2067c`, row 362.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-eb7ef875942cc492 -->
#### Necromancer-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-eb7ef875942cc492`, row 348.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b491ef1679350d1c -->
#### Necromancer-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-b491ef1679350d1c`, row 340.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-645684aaa8a12c5d -->
#### Paladin-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-645684aaa8a12c5d`, row 382.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-24fb2fd8100950ea -->
#### Paladin-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-24fb2fd8100950ea`, row 371.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-83b7b1783551c119 -->
#### Paladin-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-83b7b1783551c119`, row 363.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-459f1dddbd11b7fd -->
#### Paladin-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-459f1dddbd11b7fd`, row 349.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-96c5280e611e0eef -->
#### Paladin-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-96c5280e611e0eef`, row 341.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-503b42e1cd3c6714 -->
#### Sorceress-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-503b42e1cd3c6714`, row 379.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-4db7dccfc4f7a02d -->
#### Sorceress-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-4db7dccfc4f7a02d`, row 368.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-96d0a642ad147d86 -->
#### Sorceress-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-96d0a642ad147d86`, row 360.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-5b4d601cf3a3cb34 -->
#### Sorceress-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-5b4d601cf3a3cb34`, row 346.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-9f8820a01edbe782 -->
#### Sorceress-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-9f8820a01edbe782`, row 338.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-264bcce3dfe374da -->
#### Warlock-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Thul Rune (#10) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-264bcce3dfe374da`, row 385.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-9f630760eb943127 -->
#### Warlock-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-9f630760eb943127`, row 374.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-d76e047c0c568fb4 -->
#### Warlock-only recipe: 1 × Armor + 1 × Jewel + 1 × Hel Rune (#15) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-d76e047c0c568fb4`, row 366.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b7011f71b1128b5a -->
#### Warlock-only recipe: 1 × Helm + 1 × Jewel + 1 × Dol Rune (#14) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-b7011f71b1128b5a`, row 352.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-cd63264dd466a584 -->
#### Warlock-only recipe: 1 × Helm + 1 × Jewel + 1 × Shael Rune (#13) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-cd63264dd466a584`, row 344.
- Crafting category or notes: Item Crafting Recipe
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

### Removed recipe definitions

<!-- changes.json: cube-recipes / cr-d82b56779b3964b4 -->
#### 1 × 1H Weapons + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-d82b56779b3964b4`, row 462.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-cb6c1ecd66f19f16 -->
#### 1 × 1H Weapons + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-cb6c1ecd66f19f16`, row 458.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-86ad9f757672edb4 -->
#### 1 × Amulet + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-86ad9f757672edb4`, row 289.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Amulet
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 4 Battle Orders when you Level-Up

<!-- changes.json: cube-recipes / cr-97efa4494fdf728e -->
#### 1 × Amulet + 1 × Jewel + 1 × Vex Rune (#26) + 1 × Lo Rune (#28) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-97efa4494fdf728e`, row 294.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-dd71ac49774d48e6 -->
#### 1 × Amulet + 1 × Jewel + 1 × Vex Rune (#26) + 1 × Lo Rune (#28) + 1 × Skull → 1 × Use Input Item Type

- Source: `cr-dd71ac49774d48e6`, row 293.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-3a7b03847d4fef98 -->
#### 1 × Any Shield + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-3a7b03847d4fef98`, row 414.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b98da0a0d80e22f9 -->
#### 1 × Any Shield + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Um Rune (#22) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-b98da0a0d80e22f9`, row 441.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b0904fed91d337c6 -->
#### 1 × Any Shield + 1 × Jewel + 1 × Ohm Rune (#27) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-b0904fed91d337c6`, row 442.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-1a30e285050b4b2b -->
#### 1 × Any Shield + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Mal Rune (#23) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-1a30e285050b4b2b`, row 443.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a76560643da2bcee -->
#### 1 × Any Weapon + 1 × Jewel + 1 × Lem Rune (#20) + 1 × El Rune (#1) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-a76560643da2bcee`, row 453.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-095432cb9120b76b -->
#### 1 × Any Weapon + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-095432cb9120b76b`, row 454.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-0d8a3bb5fc60f26a -->
#### 1 × Any Weapon + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-0d8a3bb5fc60f26a`, row 450.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-8c1bfbad266784fb -->
#### 1 × Any Weapon + 1 × Jewel + 1 × Ral Rune (#8) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-8c1bfbad266784fb`, row 451.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-51dc1daa3f62441b -->
#### 1 × Armor + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-51dc1daa3f62441b`, row 388.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 5 Oak Sage when you Level-Up

<!-- changes.json: cube-recipes / cr-4a3ab0029693b5d9 -->
#### 1 × Armor + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Ber Rune (#30) + 1 × Um Rune (#22) → 1 × Use Input Item Type

- Source: `cr-4a3ab0029693b5d9`, row 407.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-388560ecd027d83a -->
#### 1 × Belt + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-388560ecd027d83a`, row 315.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Belt
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Frozen Armor when you Level-Up

<!-- changes.json: cube-recipes / cr-587deaca2a4d6625 -->
#### 1 × Belt + 1 × Jewel + 1 × Cham Rune (#32) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-587deaca2a4d6625`, row 319.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-283226654babc473 -->
#### 1 × Belt + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-283226654babc473`, row 320.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-2009fd654731cc08 -->
#### 1 × Belt + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-2009fd654731cc08`, row 321.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-470e519e46806c6d -->
#### 1 × Boots + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-470e519e46806c6d`, row 322.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Boots
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Burst of Speed when you Level-Up

<!-- changes.json: cube-recipes / cr-488412fc20be2754 -->
#### 1 × Boots + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-488412fc20be2754`, row 325.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-12472c68f7ae1199 -->
#### 1 × Boots + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-12472c68f7ae1199`, row 326.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-59278bee00690c3f -->
#### 1 × Gloves + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-59278bee00690c3f`, row 333.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Gloves
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 4 Battle Command when you Level-Up

<!-- changes.json: cube-recipes / cr-85de973a630f818e -->
#### 1 × Gloves + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-85de973a630f818e`, row 352.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-8ee0403a68424439 -->
#### 1 × Gloves + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-8ee0403a68424439`, row 353.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-4a004e39db870438 -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Amethyst → 1 × Use Input Item Type

- Source: `cr-4a004e39db870438`, row 510.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-38d63c39d1d9dc62 -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Chaos Onyx → 1 × Use Input Item Type

- Source: `cr-38d63c39d1d9dc62`, row 512.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-97aaff3a076fac7b -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Diamond → 1 × Use Input Item Type

- Source: `cr-97aaff3a076fac7b`, row 511.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-8f82963a02f54750 -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Emerald → 1 × Use Input Item Type

- Source: `cr-8f82963a02f54750`, row 508.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ee57593a388b1769 -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-ee57593a388b1769`, row 506.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-e62ef03a3410b23e -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-e62ef03a3410b23e`, row 507.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-1681d839be7f1ff6 -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Skull → 1 × Use Input Item Type

- Source: `cr-1681d839be7f1ff6`, row 509.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-22af4f3a564bc5eb -->
#### 1 × Grand Charm + 1 × Jewel + 1 × Thul Rune (#10) + 1 × Vex Rune (#26) + 1 × Topaz → 1 × Use Input Item Type

- Source: `cr-22af4f3a564bc5eb`, row 505.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-921161b29a188719 -->
#### 1 × Helm + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-921161b29a188719`, row 360.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Shout when you Level-Up

<!-- changes.json: cube-recipes / cr-0dd083c0842f6b2e -->
#### 1 × Helm + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-0dd083c0842f6b2e`, row 381.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-19add2e7da50aa2c -->
#### 1 × Helm + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-19add2e7da50aa2c`, row 379.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-21d63be7decb0f57 -->
#### 1 × Helm + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-21d63be7decb0f57`, row 380.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-6cffb30cc08c02b1 -->
#### 1 × Missile Weapon + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-6cffb30cc08c02b1`, row 461.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-483e271fee1c97cf -->
#### 1 × Missile Weapon + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-483e271fee1c97cf`, row 457.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-7100926e4b28aa70 -->
#### 1 × Ring + 1 × Ith Rune (#6) + 1 × El Rune (#1) → 1 × Use Input Item Type

- Source: `cr-7100926e4b28aa70`, row 301.
- Crafting category or notes: Item Crafting Recipe
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Ith Rune (#6)
  - 1 × El Rune (#1)
- Results:
  - A: 1 × Use Input Item Type
    - Result requirement: Magic Item
    - 100% Chance to cast level 1 Fade when you Level-Up

<!-- changes.json: cube-recipes / cr-111f15e7b150f71f -->
#### 1 × Ring + 1 × Jewel + 1 × Sur Rune (#29) + 1 × Jah Rune (#31) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-111f15e7b150f71f`, row 305.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-1591ea69330495ad -->
#### 1 × Ring + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Gul Rune (#25) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-1591ea69330495ad`, row 306.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-55a93397644468a5 -->
#### 1 × Ring + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-55a93397644468a5`, row 307.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-4d810a975fca703a -->
#### 1 × Ring + 1 × Jewel + 1 × Zod Rune (#33) + 1 × Vex Rune (#26) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-4d810a975fca703a`, row 308.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-2bdef2dbfa4f8bf1 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-2bdef2dbfa4f8bf1`, row 303.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ae203e8846832f74 -->
#### 1 × Slam Weapons + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ae203e8846832f74`, row 459.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-5c2ddc416e3316d6 -->
#### 1 × Slam Weapons + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-5c2ddc416e3316d6`, row 455.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ffb6c45aef13280a -->
#### 1 × Spears and Polearms + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Cham Rune (#32) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ffb6c45aef13280a`, row 460.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-da7a82de6a420904 -->
#### 1 × Spears and Polearms + 1 × Jewel + 1 × Ber Rune (#30) + 1 × Ohm Rune (#27) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-da7a82de6a420904`, row 456.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-27b4bd7d34488188 -->
#### Amazon-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-27b4bd7d34488188`, row 435.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a8672634ceba8e93 -->
#### Amazon-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-a8672634ceba8e93`, row 427.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-af85b50f0e73de92 -->
#### Amazon-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-af85b50f0e73de92`, row 417.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-c9646c4e5904202f -->
#### Amazon-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-c9646c4e5904202f`, row 401.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-98d27a9d340e1d5c -->
#### Amazon-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-98d27a9d340e1d5c`, row 393.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-c6b00d9386e8503a -->
#### Amazon-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-c6b00d9386e8503a`, row 365.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ced836938b6248a5 -->
#### Amazon-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-ced836938b6248a5`, row 373.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-2911a6ea521c1204 -->
#### Assassin-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-2911a6ea521c1204`, row 439.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ebb2b22567164477 -->
#### Assassin-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ebb2b22567164477`, row 431.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-0ec4be9eefa3af46 -->
#### Assassin-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-0ec4be9eefa3af46`, row 421.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-5b7603729b76e1db -->
#### Assassin-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-5b7603729b76e1db`, row 405.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-f12341cfb3533570 -->
#### Assassin-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-f12341cfb3533570`, row 397.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-35f6c661a6236e96 -->
#### Assassin-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-35f6c661a6236e96`, row 369.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-3e1f2f61aa9dd3c1 -->
#### Assassin-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-3e1f2f61aa9dd3c1`, row 377.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-85a261f8a1df2cc4 -->
#### Barbarian-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-85a261f8a1df2cc4`, row 433.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-9eb43a6031b26b37 -->
#### Barbarian-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-9eb43a6031b26b37`, row 425.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-80fc93d67c8b9286 -->
#### Barbarian-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-80fc93d67c8b9286`, row 415.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-74ced748f397f49b -->
#### Barbarian-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-74ced748f397f49b`, row 399.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ab9c6ab62ee9a830 -->
#### Barbarian-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ab9c6ab62ee9a830`, row 391.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-e6c1e2794db99b56 -->
#### Barbarian-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-e6c1e2794db99b56`, row 363.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-eeea4b7952340081 -->
#### Barbarian-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-eeea4b7952340081`, row 371.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-6cd4b12f61e336ac -->
#### Druid-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-6cd4b12f61e336ac`, row 438.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-49f91414de20ad7f -->
#### Druid-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-49f91414de20ad7f`, row 430.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-fa315acdd0dabe5e -->
#### Druid-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-fa315acdd0dabe5e`, row 420.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-d5661bb6a4cc9a53 -->
#### Druid-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-d5661bb6a4cc9a53`, row 404.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-eb17e5ecfc20c648 -->
#### Druid-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-eb17e5ecfc20c648`, row 396.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-38ae07f7c6454a1e -->
#### Druid-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-38ae07f7c6454a1e`, row 368.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-40d670f7cabfaf49 -->
#### Druid-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-40d670f7cabfaf49`, row 376.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-182e93a2ab057759 -->
#### Necromancer-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-182e93a2ab057759`, row 436.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b41e1a58bb79982a -->
#### Necromancer-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-b41e1a58bb79982a`, row 428.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-712c62877c433c41 -->
#### Necromancer-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-712c62877c433c41`, row 418.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ae6719facba62186 -->
#### Necromancer-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ae6719facba62186`, row 402.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-654e5087e389442d -->
#### Necromancer-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-654e5087e389442d`, row 394.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-9940cdc1f3910a51 -->
#### Necromancer-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-9940cdc1f3910a51`, row 366.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-903ee4c1ee5ddae6 -->
#### Necromancer-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-903ee4c1ee5ddae6`, row 374.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-23040fe48b5411cc -->
#### Paladin-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-23040fe48b5411cc`, row 437.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-a9a372ceef90339f -->
#### Paladin-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-a9a372ceef90339f`, row 429.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-e2d5984eceaf0a7e -->
#### Paladin-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-e2d5984eceaf0a7e`, row 419.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-ada9e96dfedfdbf3 -->
#### Paladin-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-ada9e96dfedfdbf3`, row 403.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-d9ed4dddf7482fe8 -->
#### Paladin-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-d9ed4dddf7482fe8`, row 395.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-3b9857de02cd09be -->
#### Paladin-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-3b9857de02cd09be`, row 367.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-43c0c0de07476ee9 -->
#### Paladin-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-43c0c0de07476ee9`, row 375.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-31279467d2137277 -->
#### Sorceress-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-31279467d2137277`, row 434.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-6e86892cbd194004 -->
#### Sorceress-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-6e86892cbd194004`, row 426.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-e9ad2e9781814f8b -->
#### Sorceress-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-e9ad2e9781814f8b`, row 416.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-567a116ddd5a1f38 -->
#### Sorceress-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-567a116ddd5a1f38`, row 400.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-e70e4f300b83ce83 -->
#### Sorceress-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-e70e4f300b83ce83`, row 392.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-834b562e3b58bc6f -->
#### Sorceress-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-834b562e3b58bc6f`, row 364.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-7a496d2e36258d04 -->
#### Sorceress-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-7a496d2e36258d04`, row 372.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-e39ae592408d1d81 -->
#### Warlock-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-e39ae592408d1d81`, row 440.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-eb2c4341cd3472d2 -->
#### Warlock-only recipe: 1 × Any Shield + 1 × Jewel + 1 × Mal Rune (#23) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-eb2c4341cd3472d2`, row 432.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-d99b4ade346c6af9 -->
#### Warlock-only recipe: 1 × Any Shield + 1 × Orb of Infusion + 1 × Amn Rune (#11) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-d99b4ade346c6af9`, row 422.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-6eea7bafc15e803e -->
#### Warlock-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Dol Rune (#14) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-6eea7bafc15e803e`, row 406.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-e571b29896e4d585 -->
#### Warlock-only recipe: 1 × Armor + 1 × Jewel + 1 × Pul Rune (#21) + 1 × Shael Rune (#13) + 1 × Gem → 1 × Use Input Item Type

- Source: `cr-e571b29896e4d585`, row 398.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-e05ed8cefdab9219 -->
#### Warlock-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Ruby → 1 × Use Input Item Type

- Source: `cr-e05ed8cefdab9219`, row 370.
- Crafting category or notes: Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-d75d2fcef878cf6e -->
#### Warlock-only recipe: 1 × Helm + 1 × Jewel + 1 × Pul Rune (#21) + 1 × El Rune (#1) + 1 × Sapphire → 1 × Use Input Item Type

- Source: `cr-d75d2fcef878cf6e`, row 378.
- Crafting category or notes: Item Crafting Recipe
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

## Item Enchantment Recipe

### Added recipe definitions

<!-- changes.json: cube-recipes / cr-227e1cae24258395 -->
#### 1 × Amulet + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-227e1cae24258395`, row 712.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b650016c0532ea1e -->
#### 1 × Amulet + 1 × Amethyst → 1 × Return Exact Input Item

- Source: `cr-b650016c0532ea1e`, row 701.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Amethyst
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-1c0e82360d805fd7 -->
#### 1 × Amulet + 1 × Chaos Onyx + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1c0e82360d805fd7`, row 714.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-294e5500dddd8c61 -->
#### 1 × Amulet + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-294e5500dddd8c61`, row 706.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c5c92b2cf23a5c9a -->
#### 1 × Amulet + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c5c92b2cf23a5c9a`, row 713.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7a40038e38337ad3 -->
#### 1 × Amulet + 1 × Emerald + 1 × Jewel + 1 × Shael Rune (#13) → 1 × Return Exact Input Item

- Source: `cr-7a40038e38337ad3`, row 715.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2e19cfcce0d2946d -->
#### 1 × Amulet + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2e19cfcce0d2946d`, row 710.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7fcce8f3c9e086bd -->
#### 1 × Amulet + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-7fcce8f3c9e086bd`, row 705.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-c760741a3452f496 -->
#### 1 × Amulet + 1 × Emerald → 1 × Return Exact Input Item

- Source: `cr-c760741a3452f496`, row 699.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-18804fe57540ff87 -->
#### 1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Brak Rune (#34) → 1 × Return Exact Input Item

- Source: `cr-18804fe57540ff87`, row 733.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-71930ffebc753f94 -->
#### 1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Grit Rune (#37) → 1 × Return Exact Input Item

- Source: `cr-71930ffebc753f94`, row 736.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4937500f2dafa572 -->
#### 1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Hev Rune (#39) → 1 × Return Exact Input Item

- Source: `cr-4937500f2dafa572`, row 737.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f0248ff5e67b6565 -->
#### 1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Myr Rune (#36) → 1 × Return Exact Input Item

- Source: `cr-f0248ff5e67b6565`, row 735.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6f8fcfed113ac236 -->
#### 1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Zeph Rune (#35) → 1 × Return Exact Input Item

- Source: `cr-6f8fcfed113ac236`, row 734.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9711cfdc9f472558 -->
#### 1 × Amulet + 1 × Orb of Conversion + 1 × Jewel + 1 × Zod Rune (#33) → 1 × Return Exact Input Item

- Source: `cr-9711cfdc9f472558`, row 732.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bee1460f3747a801 -->
#### 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item

- Source: `cr-bee1460f3747a801`, row 723.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-774685a186c2b232 -->
#### 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Fal Rune (#19) + 1 × Amethyst → 1 × Return Exact Input Item

- Source: `cr-774685a186c2b232`, row 721.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bcc8cda1ae30f54a -->
#### 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Fal Rune (#19) + 1 × Emerald → 1 × Return Exact Input Item

- Source: `cr-bcc8cda1ae30f54a`, row 720.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-209a2ba155a74744 -->
#### 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Fal Rune (#19) + 1 × Sapphire → 1 × Return Exact Input Item

- Source: `cr-209a2ba155a74744`, row 722.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8150e3deb96e800f -->
#### 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Ruby → 1 × Return Exact Input Item

- Source: `cr-8150e3deb96e800f`, row 718.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-02bf23e78f67ed7e -->
#### 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Sapphire → 1 × Return Exact Input Item

- Source: `cr-02bf23e78f67ed7e`, row 719.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a9ac63ce4833ad71 -->
#### 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel + 1 × Topaz → 1 × Return Exact Input Item

- Source: `cr-a9ac63ce4833ad71`, row 717.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d585a62e0f44b3b8 -->
#### 1 × Amulet + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d585a62e0f44b3b8`, row 708.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9435520049a14af4 -->
#### 1 × Amulet + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-9435520049a14af4`, row 702.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-23390fc05a27c82d -->
#### 1 × Amulet + 1 × Ruby → 1 × Return Exact Input Item

- Source: `cr-23390fc05a27c82d`, row 697.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-dc1f5cf8d495242a -->
#### 1 × Amulet + 1 × Sapphire + 1 × Jewel + 1 × Dol Rune (#14) → 1 × Return Exact Input Item

- Source: `cr-dc1f5cf8d495242a`, row 716.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-56113b890816490b -->
#### 1 × Amulet + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-56113b890816490b`, row 709.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ed1a988c1d2c5747 -->
#### 1 × Amulet + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-ed1a988c1d2c5747`, row 703.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-cb108625ff19caf4 -->
#### 1 × Amulet + 1 × Sapphire → 1 × Return Exact Input Item

- Source: `cr-cb108625ff19caf4`, row 698.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-8bc375b45363bd63 -->
#### 1 × Amulet + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8bc375b45363bd63`, row 711.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-dacbbae9bba88cec -->
#### 1 × Amulet + 1 × Skull → 1 × Return Exact Input Item

- Source: `cr-dacbbae9bba88cec`, row 700.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Skull
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-baac41877e9ed76a -->
#### 1 × Amulet + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-baac41877e9ed76a`, row 707.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0d1b9f759be8c0fa -->
#### 1 × Amulet + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-0d1b9f759be8c0fa`, row 704.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-d532c98dc320c5df -->
#### 1 × Amulet + 1 × Topaz → 1 × Return Exact Input Item

- Source: `cr-d532c98dc320c5df`, row 696.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-f5c3333454c17e4b -->
#### 1 × Any Shield + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f5c3333454c17e4b`, row 885.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-aa7dc5a555534703 -->
#### 1 × Any Shield + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-aa7dc5a555534703`, row 891.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-da0015d22300b6f3 -->
#### 1 × Any Shield + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-da0015d22300b6f3`, row 884.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-28a3a0c201b40d1f -->
#### 1 × Any Shield + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-28a3a0c201b40d1f`, row 890.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Any Shield
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-ea004ead39c9bb79 -->
#### 1 × Any Shield + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ea004ead39c9bb79`, row 892.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-896e70e4a80a8828 -->
#### 1 × Any Shield + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-896e70e4a80a8828`, row 893.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-581e81209944639a -->
#### 1 × Any Shield + 1 × Orb of Conversion + 1 × Grit Rune (#37) + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-581e81209944639a`, row 908.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c7846ac6ab9d76e0 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c7846ac6ab9d76e0`, row 901.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9fd57f8f88f25c8f -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9fd57f8f88f25c8f`, row 905.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-de52444b3525fdf5 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Chaos Onyx + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-de52444b3525fdf5`, row 904.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d2a960be0d215c40 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Diamond + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d2a960be0d215c40`, row 907.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8b036db5fbf96a88 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8b036db5fbf96a88`, row 900.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-abe0584c4c31d8e2 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-abe0584c4c31d8e2`, row 898.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0c22d25cb3ff2a2f -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item

- Source: `cr-0c22d25cb3ff2a2f`, row 903.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5c4c3a2a169e7983 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Ruby + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5c4c3a2a169e7983`, row 897.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-239b3e32a0cdea7e -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-239b3e32a0cdea7e`, row 902.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-fc705579b0d4560e -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-fc705579b0d4560e`, row 896.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a26fbdfd5a5bbdd8 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a26fbdfd5a5bbdd8`, row 899.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e94b0f4731260e99 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e94b0f4731260e99`, row 906.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-855331e644198842 -->
#### 1 × Any Shield + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-855331e644198842`, row 887.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Any Shield
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-bb563129ae68a955 -->
#### 1 × Any Shield + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-bb563129ae68a955`, row 888.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Any Shield
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-48f3b7b2b8668a3d -->
#### 1 × Any Shield + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-48f3b7b2b8668a3d`, row 886.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5b44594e07d7e2c4 -->
#### 1 × Any Shield + 1 × Sol Rune (#12) + 1 × Jewel + 1 × Amethyst → 1 × Return Exact Input Item

- Source: `cr-5b44594e07d7e2c4`, row 894.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-839fd93d969d1026 -->
#### 1 × Any Shield + 1 × Sol Rune (#12) + 1 × Jewel + 1 × Chaos Onyx → 1 × Return Exact Input Item

- Source: `cr-839fd93d969d1026`, row 895.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1ca33ad627343590 -->
#### 1 × Any Shield + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1ca33ad627343590`, row 883.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-937c81b6662fe19c -->
#### 1 × Any Shield + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-937c81b6662fe19c`, row 889.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Any Shield
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-4fe47d24c53c8cd9 -->
#### 1 × Any Weapon + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4fe47d24c53c8cd9`, row 937.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1e5b02d7d6bcfb9e -->
#### 1 × Any Weapon + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1e5b02d7d6bcfb9e`, row 942.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4ce9ee955835f161 -->
#### 1 × Any Weapon + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4ce9ee955835f161`, row 939.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e46aa8e86066fc65 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Nef Rune (#4) → 1 × Return Exact Input Item

- Source: `cr-e46aa8e86066fc65`, row 953.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-372dee4a1ebb9953 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-372dee4a1ebb9953`, row 952.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f73797494134b1ea -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f73797494134b1ea`, row 945.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ca7fec9605e734da -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ca7fec9605e734da`, row 944.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-df021fbfc30b0e75 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-df021fbfc30b0e75`, row 947.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4d8d39ecf90d29a7 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Diamond + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4d8d39ecf90d29a7`, row 951.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-743a8be7a0cf13a1 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-743a8be7a0cf13a1`, row 950.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-29a22c08680567d6 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Amethyst + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-29a22c08680567d6`, row 954.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-06f820f1b021dd60 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Chaos Onyx + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-06f820f1b021dd60`, row 959.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a2998f6a8b640cbe -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Emerald + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a2998f6a8b640cbe`, row 958.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3792e8f83660db9b -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Ruby + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3792e8f83660db9b`, row 955.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bfd4769690c836e4 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Sapphire + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bfd4769690c836e4`, row 956.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-078bbdc0fc4f064c -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Skull + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-078bbdc0fc4f064c`, row 960.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-79b212e305e98855 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Topaz + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-79b212e305e98855`, row 957.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-12c2185d7eb4c1e3 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-12c2185d7eb4c1e3`, row 946.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9b58a569da146b30 -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9b58a569da146b30`, row 949.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9aef1e51c820f4bb -->
#### 1 × Any Weapon + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9aef1e51c820f4bb`, row 948.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e580eef25c3ae575 -->
#### 1 × Any Weapon + 1 × Orb of Shadows + 1 × Orb of Conversion + 1 × Brak Rune (#34) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e580eef25c3ae575`, row 961.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1dfea168187b6c50 -->
#### 1 × Any Weapon + 1 × Orb of Shadows + 1 × Orb of Conversion + 1 × Myr Rune (#36) + 1 × Hev Rune (#39) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1dfea168187b6c50`, row 963.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3848ea8a569222eb -->
#### 1 × Any Weapon + 1 × Orb of Shadows + 1 × Orb of Conversion + 1 × Zeph Rune (#35) + 1 × Grit Rune (#37) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3848ea8a569222eb`, row 962.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0515614163230354 -->
#### 1 × Any Weapon + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0515614163230354`, row 941.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d5de8f90f197db47 -->
#### 1 × Any Weapon + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d5de8f90f197db47`, row 938.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9169326f007fbeaf -->
#### 1 × Any Weapon + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9169326f007fbeaf`, row 940.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3067dfd18b74482b -->
#### 1 × Any Weapon + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3067dfd18b74482b`, row 943.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7ef543ad1ec597ae -->
#### 1 × Any Weapon + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7ef543ad1ec597ae`, row 936.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f84175ad1155b6ea -->
#### 1 × Armor + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f84175ad1155b6ea`, row 911.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-780fc4c640a786b8 -->
#### 1 × Armor + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-780fc4c640a786b8`, row 917.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-521a094592680f92 -->
#### 1 × Armor + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-521a094592680f92`, row 910.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-860abd3cc2278f52 -->
#### 1 × Armor + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-860abd3cc2278f52`, row 916.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Armor
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-c986d24f86cda30c -->
#### 1 × Armor + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c986d24f86cda30c`, row 918.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0010c1cafbf1db1d -->
#### 1 × Armor + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0010c1cafbf1db1d`, row 919.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8d59156cbbed98d1 -->
#### 1 × Armor + 1 × Orb of Conversion + 1 × Grit Rune (#37) + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8d59156cbbed98d1`, row 935.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d19e3a223b25828d -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d19e3a223b25828d`, row 925.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2c61e548cb4ea3d6 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2c61e548cb4ea3d6`, row 929.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d9c03f731778577a -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d9c03f731778577a`, row 934.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-eb6a34818bdab810 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Chaos Onyx + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-eb6a34818bdab810`, row 928.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5225cd8c5f94f7ec -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Diamond + 1 × Ber Rune (#30) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item

- Source: `cr-5225cd8c5f94f7ec`, row 932.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-11af9bde3a048985 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-11af9bde3a048985`, row 924.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-73b93e06751e076b -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-73b93e06751e076b`, row 922.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9f76297784d2aede -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item

- Source: `cr-9f76297784d2aede`, row 927.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f993f349e14ed553 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item

- Source: `cr-f993f349e14ed553`, row 933.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-29af47cc4a1d310f -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-29af47cc4a1d310f`, row 926.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f6f9cda5f79c0c5d -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item

- Source: `cr-f6f9cda5f79c0c5d`, row 931.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-edad3c2fe742cdbd -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-edad3c2fe742cdbd`, row 923.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0e8c8ca52bbc611c -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0e8c8ca52bbc611c`, row 930.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ba20d8f795bb080f -->
#### 1 × Armor + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-ba20d8f795bb080f`, row 913.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Armor
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-5249a4ef86a23a5c -->
#### 1 × Armor + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-5249a4ef86a23a5c`, row 914.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Armor
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-131ada53a1fb9338 -->
#### 1 × Armor + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-131ada53a1fb9338`, row 912.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a6cd6b8f16f0c047 -->
#### 1 × Armor + 1 × Sol Rune (#12) + 1 × Jewel + 1 × Amethyst → 1 × Return Exact Input Item

- Source: `cr-a6cd6b8f16f0c047`, row 920.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7e71ab9f882b2625 -->
#### 1 × Armor + 1 × Sol Rune (#12) + 1 × Jewel + 1 × Chaos Onyx → 1 × Return Exact Input Item

- Source: `cr-7e71ab9f882b2625`, row 921.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-601350d3b6dc6315 -->
#### 1 × Armor + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-601350d3b6dc6315`, row 909.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7a235462cedb0215 -->
#### 1 × Armor + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-7a235462cedb0215`, row 915.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Armor
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-b8726af8bfd9cc49 -->
#### 1 × Belt + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b8726af8bfd9cc49`, row 764.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-820d614fd86258dd -->
#### 1 × Belt + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-820d614fd86258dd`, row 766.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c55dcaf49c841711 -->
#### 1 × Belt + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c55dcaf49c841711`, row 763.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8124a48c0bde195f -->
#### 1 × Belt + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8124a48c0bde195f`, row 767.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6858e6d74c9caaf5 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6858e6d74c9caaf5`, row 778.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d09b5aa5477637de -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d09b5aa5477637de`, row 781.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-dcc3a5946cfcb2fa -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-dcc3a5946cfcb2fa`, row 771.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-060e09da0f267882 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-060e09da0f267882`, row 770.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e1fce323504f6828 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e1fce323504f6828`, row 768.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-930492329cc897f5 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item

- Source: `cr-930492329cc897f5`, row 775.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7e7a19e3b655222f -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7e7a19e3b655222f`, row 779.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b4c23e48ee63ff47 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b4c23e48ee63ff47`, row 773.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-dd78b0f74a743394 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-dd78b0f74a743394`, row 772.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-72006efca3d3ce42 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-72006efca3d3ce42`, row 774.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c3b54f126ba417ed -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c3b54f126ba417ed`, row 777.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1aa120d858b71a12 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1aa120d858b71a12`, row 769.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8c7bd3723655016b -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8c7bd3723655016b`, row 780.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-da3d790d413101eb -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-da3d790d413101eb`, row 776.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b2f87e05ddbf01a4 -->
#### 1 × Belt + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b2f87e05ddbf01a4`, row 761.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f87a3ec1c59385d7 -->
#### 1 × Belt + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f87a3ec1c59385d7`, row 762.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3faf3a0627c15edf -->
#### 1 × Belt + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3faf3a0627c15edf`, row 765.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-547075158ca37a7e -->
#### 1 × Belt + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-547075158ca37a7e`, row 760.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9600e2d942bbf9ac -->
#### 1 × Boots + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9600e2d942bbf9ac`, row 795.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-38bf6d64de8776ee -->
#### 1 × Boots + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-38bf6d64de8776ee`, row 797.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3953649763c21774 -->
#### 1 × Boots + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3953649763c21774`, row 794.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-fdf1f2db9f44a31e -->
#### 1 × Boots + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-fdf1f2db9f44a31e`, row 798.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-58c4596fe62db5da -->
#### 1 × Boots + 1 × Nef Rune (#4) → 1 × Return Exact Input Item

- Source: `cr-58c4596fe62db5da`, row 790.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Boots
  - 1 × Nef Rune (#4)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Faster Run/Walk Speed
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-d1b7b87f43e5fbf3 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d1b7b87f43e5fbf3`, row 803.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5e8cebed4bb9fedd -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5e8cebed4bb9fedd`, row 800.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-76ee0c52e9ceffcc -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-76ee0c52e9ceffcc`, row 812.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-78d5faa1c0c7e5cb -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-78d5faa1c0c7e5cb`, row 802.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2e5136544b7603e5 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2e5136544b7603e5`, row 799.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0f5f5ecbf13a8598 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item

- Source: `cr-0f5f5ecbf13a8598`, row 807.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7df2cc25f1ff194e -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7df2cc25f1ff194e`, row 810.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d47ea31e745449cc -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d47ea31e745449cc`, row 805.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-73183cb4930b6629 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-73183cb4930b6629`, row 804.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f0ce6a3b03ddb6a9 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f0ce6a3b03ddb6a9`, row 806.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5e58417936e5f2f0 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5e58417936e5f2f0`, row 809.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ae6ee505cbebec63 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ae6ee505cbebec63`, row 801.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3e310ac8408cb074 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3e310ac8408cb074`, row 811.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2eb078b2f33e645a -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2eb078b2f33e645a`, row 808.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2b681135d5005381 -->
#### 1 × Boots + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2b681135d5005381`, row 792.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-04e997e92eeef83e -->
#### 1 × Boots + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-04e997e92eeef83e`, row 793.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2b81be0a988090e6 -->
#### 1 × Boots + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2b81be0a988090e6`, row 796.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c9793cbcfd9be297 -->
#### 1 × Boots + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c9793cbcfd9be297`, row 791.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c9836419abc52512 -->
#### 1 × Gloves + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c9836419abc52512`, row 825.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f4aa220c105b0e40 -->
#### 1 × Gloves + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-f4aa220c105b0e40`, row 827.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-533a1c6a64428296 -->
#### 1 × Gloves + 1 × Emerald + 1 × Jewel + 1 × Shael Rune (#13) → 1 × Return Exact Input Item

- Source: `cr-533a1c6a64428296`, row 829.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6faad0812ab2cc6a -->
#### 1 × Gloves + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6faad0812ab2cc6a`, row 824.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-77e01afc1d3f1914 -->
#### 1 × Gloves + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-77e01afc1d3f1914`, row 828.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3d77cc852c090f35 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3d77cc852c090f35`, row 833.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-61e190158a8193d2 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Diamond + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-61e190158a8193d2`, row 841.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1715732b2a26fa07 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Emerald + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1715732b2a26fa07`, row 840.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c59822eb9664167d -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c59822eb9664167d`, row 832.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3ed5e23675d1a176 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item

- Source: `cr-3ed5e23675d1a176`, row 835.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bacbdd38a1dcf324 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bacbdd38a1dcf324`, row 838.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2ac6e2fe13c21d05 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2ac6e2fe13c21d05`, row 839.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-716d2740a73d3307 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-716d2740a73d3307`, row 834.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2c3ec814f03c2e46 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2c3ec814f03c2e46`, row 837.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0c71a5a94c785595 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0c71a5a94c785595`, row 831.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0365fa50699d3694 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0365fa50699d3694`, row 836.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8c1469b37b4817bb -->
#### 1 × Gloves + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8c1469b37b4817bb`, row 822.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e91103b0b7f41007 -->
#### 1 × Gloves + 1 × Sapphire + 1 × Jewel + 1 × Dol Rune (#14) → 1 × Return Exact Input Item

- Source: `cr-e91103b0b7f41007`, row 830.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f0c38329405e9968 -->
#### 1 × Gloves + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f0c38329405e9968`, row 823.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-87b37b3381b7bba0 -->
#### 1 × Gloves + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-87b37b3381b7bba0`, row 826.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e3185ec68ce6896d -->
#### 1 × Gloves + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e3185ec68ce6896d`, row 821.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e324cd948a7f9a08 -->
#### 1 × Helm + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e324cd948a7f9a08`, row 854.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0673aa13c75f7fe2 -->
#### 1 × Helm + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-0673aa13c75f7fe2`, row 856.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-db9c57e68764d470 -->
#### 1 × Helm + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-db9c57e68764d470`, row 853.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-18d5470cbab622aa -->
#### 1 × Helm + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-18d5470cbab622aa`, row 857.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3ed09c0b49b7733c -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Amethyst + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3ed09c0b49b7733c`, row 866.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-abe4dd06a8ed9e3f -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-abe4dd06a8ed9e3f`, row 861.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-107295701f33a6d9 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Amethyst + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-107295701f33a6d9`, row 858.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-534846dfe81d417f -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Diamond + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item

- Source: `cr-534846dfe81d417f`, row 873.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b7e0b9ea00aeea58 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item

- Source: `cr-b7e0b9ea00aeea58`, row 872.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c97e0395be081c27 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c97e0395be081c27`, row 860.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-49fda488c6edcf13 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-49fda488c6edcf13`, row 868.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7abed8ec1cf97ad4 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Jewel + 1 × Diamond + 1 × Um Rune (#22) → 1 × Return Exact Input Item

- Source: `cr-7abed8ec1cf97ad4`, row 863.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3383c8a13a8281b9 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Ruby + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item

- Source: `cr-3383c8a13a8281b9`, row 869.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2979a87e1fafc3d2 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2979a87e1fafc3d2`, row 867.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f9a8432fc700ecea -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item

- Source: `cr-f9a8432fc700ecea`, row 870.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1f92c0a193a6991d -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1f92c0a193a6991d`, row 862.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4a1abac2e47d85f4 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4a1abac2e47d85f4`, row 865.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5d798619defb021f -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5d798619defb021f`, row 859.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c5b2f99f9d812519 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Skull + 1 × Zod Rune (#33) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item

- Source: `cr-c5b2f99f9d812519`, row 874.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bcc817fa4d7525cf -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Orb of Conversion → 1 × Return Exact Input Item

- Source: `cr-bcc817fa4d7525cf`, row 871.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0771ed693c30e36e -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0771ed693c30e36e`, row 864.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7cb9cc099786ae05 -->
#### 1 × Helm + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7cb9cc099786ae05`, row 851.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-54aaca7348feafb2 -->
#### 1 × Helm + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-54aaca7348feafb2`, row 852.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-63a83a0be14db43a -->
#### 1 × Helm + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-63a83a0be14db43a`, row 855.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7a32b706277c8553 -->
#### 1 × Helm + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7a32b706277c8553`, row 850.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-65d7b018bb686045 -->
#### 1 × Missile + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-65d7b018bb686045`, row 965.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7894ee8ca38c33ca -->
#### 1 × Missile + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7894ee8ca38c33ca`, row 967.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bf5acaee37c7e6dd -->
#### 1 × Missile + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bf5acaee37c7e6dd`, row 966.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-54e5d4eb5b67d7c8 -->
#### 1 × Missile + 1 × Orb of Infusion + 1 × Amethyst + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-54e5d4eb5b67d7c8`, row 973.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6c8fec48f15b5e3d -->
#### 1 × Missile + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6c8fec48f15b5e3d`, row 969.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-659e86fdcaed9625 -->
#### 1 × Missile + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-659e86fdcaed9625`, row 972.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-85a13af8d2f1435c -->
#### 1 × Missile + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-85a13af8d2f1435c`, row 971.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-640540b634acff3f -->
#### 1 × Missile + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-640540b634acff3f`, row 970.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3c26346fc8425193 -->
#### 1 × Missile + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3c26346fc8425193`, row 964.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0628163c2f71717a -->
#### 1 × Missile + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0628163c2f71717a`, row 968.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5e0e0bf2bcb9934f -->
#### 1 × Ring + 1 × Emerald + 1 × Jewel + 1 × Shael Rune (#13) → 1 × Return Exact Input Item

- Source: `cr-5e0e0bf2bcb9934f`, row 747.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1276ca2e5509c1e9 -->
#### 1 × Ring + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-1276ca2e5509c1e9`, row 744.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-5d9eb7e4f888c9c3 -->
#### 1 × Ring + 1 × Orb of Conversion + 1 × Jewel + 1 × Brak Rune (#34) → 1 × Return Exact Input Item

- Source: `cr-5d9eb7e4f888c9c3`, row 755.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b6b177fe3fbd09d0 -->
#### 1 × Ring + 1 × Orb of Conversion + 1 × Jewel + 1 × Grit Rune (#37) → 1 × Return Exact Input Item

- Source: `cr-b6b177fe3fbd09d0`, row 758.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-048bf7cbb15489b6 -->
#### 1 × Ring + 1 × Orb of Conversion + 1 × Jewel + 1 × Hev Rune (#39) → 1 × Return Exact Input Item

- Source: `cr-048bf7cbb15489b6`, row 759.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-354337f569c39c61 -->
#### 1 × Ring + 1 × Orb of Conversion + 1 × Jewel + 1 × Myr Rune (#36) → 1 × Return Exact Input Item

- Source: `cr-354337f569c39c61`, row 757.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-de3377edcdc96cf2 -->
#### 1 × Ring + 1 × Orb of Conversion + 1 × Jewel + 1 × Zeph Rune (#35) → 1 × Return Exact Input Item

- Source: `cr-de3377edcdc96cf2`, row 756.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4ce163c409a46981 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4ce163c409a46981`, row 751.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8e1794ccdb2138df -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8e1794ccdb2138df`, row 754.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-dbad56d3c06d3a77 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-dbad56d3c06d3a77`, row 749.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-490f128ba426c52c -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Sapphire + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-490f128ba426c52c`, row 746.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9e72da4c33c0e3f2 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9e72da4c33c0e3f2`, row 750.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4f015d874224585d -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4f015d874224585d`, row 753.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-784559f892294784 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-784559f892294784`, row 745.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bdb7afc5d83c3b9b -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bdb7afc5d83c3b9b`, row 752.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-be6af3de322dc9f8 -->
#### 1 × Ring + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-be6af3de322dc9f8`, row 741.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-5c0a92309389f699 -->
#### 1 × Ring + 1 × Ruby → 1 × Return Exact Input Item

- Source: `cr-5c0a92309389f699`, row 739.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Ruby
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Life
    - +2 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-eba684e84baa8a36 -->
#### 1 × Ring + 1 × Sapphire + 1 × Jewel + 1 × Dol Rune (#14) → 1 × Return Exact Input Item

- Source: `cr-eba684e84baa8a36`, row 748.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d2ba7a401bc1bb4b -->
#### 1 × Ring + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-d2ba7a401bc1bb4b`, row 742.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-01b38aabc5325360 -->
#### 1 × Ring + 1 × Sapphire → 1 × Return Exact Input Item

- Source: `cr-01b38aabc5325360`, row 740.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Sapphire
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +20 to Mana
    - +2 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-79b301b7736cecc6 -->
#### 1 × Ring + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-79b301b7736cecc6`, row 743.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +15% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-1ce680c1b859c583 -->
#### 1 × Ring + 1 × Topaz → 1 × Return Exact Input Item

- Source: `cr-1ce680c1b859c583`, row 738.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Topaz
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 1
    - +10% Chance Items Roll Magic or Better
    - +20% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=0) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-7202dd249632a783 -->
#### Amazon-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7202dd249632a783`, row 729.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c0618cfe2fa201f6 -->
#### Amazon-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c0618cfe2fa201f6`, row 787.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6a98eb44b16a8a0d -->
#### Amazon-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6a98eb44b16a8a0d`, row 818.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-871b9d4427495ecf -->
#### Amazon-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-871b9d4427495ecf`, row 847.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-152dcce1da28a5a5 -->
#### Amazon-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-152dcce1da28a5a5`, row 880.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-303733787988876f -->
#### Assassin-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-303733787988876f`, row 724.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f7a101a83d3e8752 -->
#### Assassin-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f7a101a83d3e8752`, row 782.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0c96e4a6c2352949 -->
#### Assassin-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0c96e4a6c2352949`, row 813.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-262b22ab6776be83 -->
#### Assassin-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-262b22ab6776be83`, row 842.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-907250df8e52b491 -->
#### Assassin-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-907250df8e52b491`, row 875.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9c33fb5700e72caf -->
#### Barbarian-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9c33fb5700e72caf`, row 725.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3249f1d6e17f3c92 -->
#### Barbarian-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3249f1d6e17f3c92`, row 783.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-46b3f206ad99b989 -->
#### Barbarian-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-46b3f206ad99b989`, row 814.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-78a2d4ad22f6d0c3 -->
#### Barbarian-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-78a2d4ad22f6d0c3`, row 843.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-614b6ed33d2ebcd1 -->
#### Barbarian-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-614b6ed33d2ebcd1`, row 876.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6fa6f1c51fce7d47 -->
#### Druid-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6fa6f1c51fce7d47`, row 727.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-640818756ad3201a -->
#### Druid-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-640818756ad3201a`, row 785.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5376faf88de44821 -->
#### Druid-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5376faf88de44821`, row 816.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-fa9c92073ac3817b -->
#### Druid-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-fa9c92073ac3817b`, row 845.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b87c127a388bc959 -->
#### Druid-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b87c127a388bc959`, row 878.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9103cf736a75cee8 -->
#### Necromancer-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9103cf736a75cee8`, row 728.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a566abc940e7585b -->
#### Necromancer-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a566abc940e7585b`, row 786.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-cf1fa80f8a520088 -->
#### Necromancer-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-cf1fa80f8a520088`, row 817.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-81143f22ecfe6e96 -->
#### Necromancer-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-81143f22ecfe6e96`, row 846.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-05f5aeed5b85c54c -->
#### Necromancer-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-05f5aeed5b85c54c`, row 879.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-cce4791815b51ae7 -->
#### Paladin-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-cce4791815b51ae7`, row 730.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-717183aef4a77bba -->
#### Paladin-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-717183aef4a77bba`, row 788.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4c2cf6b4a991c4c1 -->
#### Paladin-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4c2cf6b4a991c4c1`, row 819.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b8da035102e02a1b -->
#### Paladin-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b8da035102e02a1b`, row 848.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-fc45062cefe646f9 -->
#### Paladin-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-fc45062cefe646f9`, row 881.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7ec7f4a6e8f32eca -->
#### Sorceress-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7ec7f4a6e8f32eca`, row 726.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-fc533423ecdba165 -->
#### Sorceress-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-fc533423ecdba165`, row 784.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-67f9618dda67581a -->
#### Sorceress-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-67f9618dda67581a`, row 815.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1805343278234f08 -->
#### Sorceress-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1805343278234f08`, row 844.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d6571baeaa9968a2 -->
#### Sorceress-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d6571baeaa9968a2`, row 877.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-048bb42bf78a6ae0 -->
#### Warlock-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-048bb42bf78a6ae0`, row 731.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c18e2f3f424dca03 -->
#### Warlock-only recipe: 1 × Belt + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c18e2f3f424dca03`, row 789.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2a298fcfb52f1c80 -->
#### Warlock-only recipe: 1 × Boots + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2a298fcfb52f1c80`, row 820.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-30976d40bb9dab4e -->
#### Warlock-only recipe: 1 × Gloves + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-30976d40bb9dab4e`, row 849.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-429c9248c6d9db14 -->
#### Warlock-only recipe: 1 × Helm + 1 × Orb of Conversion + 1 × Zod Rune (#33) + 1 × Dem Rune (#38) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-429c9248c6d9db14`, row 882.
- Crafting category or notes: Item Enchantment Recipe
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

### Removed recipe definitions

<!-- changes.json: cube-recipes / cr-cce505cce6071c5f -->
#### 1 × 1H Weapons + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-cce505cce6071c5f`, row 1013.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-91275c45ec7b9034 -->
#### 1 × 1H Weapons + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-91275c45ec7b9034`, row 1014.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3b2f5795c7d7c3a7 -->
#### 1 × 1H Weapons + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3b2f5795c7d7c3a7`, row 1011.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d4684d0ceff15acd -->
#### 1 × 1H Weapons + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d4684d0ceff15acd`, row 1015.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-aedda5c2338aad3b -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Nef Rune (#4) → 1 × Return Exact Input Item

- Source: `cr-aedda5c2338aad3b`, row 1029.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-249e42f6a93bcf41 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-249e42f6a93bcf41`, row 1028.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2b7d07c453690348 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2b7d07c453690348`, row 1021.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5a9d0d7acf0a0cb3 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5a9d0d7acf0a0cb3`, row 1023.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-acfd37d20a2a99b1 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Diamond + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-acfd37d20a2a99b1`, row 1027.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a16bfcee84c73cd0 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Emerald + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a16bfcee84c73cd0`, row 1020.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9ddcba9906bd97cf -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9ddcba9906bd97cf`, row 1026.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1fa5d8d0709995c0 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Chaos Onyx + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1fa5d8d0709995c0`, row 1034.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d12c77b119e072c6 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Emerald + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d12c77b119e072c6`, row 1033.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-58882305d999bf31 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Ruby + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-58882305d999bf31`, row 1030.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-95887719bb7f90bc -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Sapphire + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-95887719bb7f90bc`, row 1031.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7075f7c9e1c5d043 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Topaz + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7075f7c9e1c5d043`, row 1032.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c72465ae9d1a880b -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Ruby + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c72465ae9d1a880b`, row 1018.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5af74b70c2602625 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5af74b70c2602625`, row 1022.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-712a705a88b1e91c -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-712a705a88b1e91c`, row 1019.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0dd5d23411c484fa -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0dd5d23411c484fa`, row 1025.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bb6cd3fe8e4368be -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Topaz + 1 × Io Rune (#16) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bb6cd3fe8e4368be`, row 1017.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4e372188b2fdc635 -->
#### 1 × 1H Weapons + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4e372188b2fdc635`, row 1024.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e1a640dc4ae937fe -->
#### 1 × 1H Weapons + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e1a640dc4ae937fe`, row 1009.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-174692ff9f115041 -->
#### 1 × 1H Weapons + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-174692ff9f115041`, row 1010.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-45a836bf7e1f89c9 -->
#### 1 × 1H Weapons + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-45a836bf7e1f89c9`, row 1012.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-511a81389b8cec35 -->
#### 1 × 1H Weapons + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-511a81389b8cec35`, row 1016.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-402e49cc9c04bf24 -->
#### 1 × 1H Weapons + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-402e49cc9c04bf24`, row 1008.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-532b00e1bf4e0c85 -->
#### 1 × Amulet + 1 × Amethyst + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item

- Source: `cr-532b00e1bf4e0c85`, row 718.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1a8122a9097da5da -->
#### 1 × Amulet + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1a8122a9097da5da`, row 710.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9820297e1467458f -->
#### 1 × Amulet + 1 × Amethyst → 1 × Return Exact Input Item

- Source: `cr-9820297e1467458f`, row 699.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Amethyst
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +5 to Strength
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-7021538fbc73779c -->
#### 1 × Amulet + 1 × Chaos Onyx + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7021538fbc73779c`, row 712.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5c41cf4847bc1690 -->
#### 1 × Amulet + 1 × Diamond + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item

- Source: `cr-5c41cf4847bc1690`, row 719.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-358a3e8f84fcefe8 -->
#### 1 × Amulet + 1 × Diamond + 1 × Jewel + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-358a3e8f84fcefe8`, row 704.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d52f782af2cbc7d5 -->
#### 1 × Amulet + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d52f782af2cbc7d5`, row 711.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ddea436896cb675d -->
#### 1 × Amulet + 1 × Emerald + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item

- Source: `cr-ddea436896cb675d`, row 716.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e4ba4f8623c77dc2 -->
#### 1 × Amulet + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e4ba4f8623c77dc2`, row 708.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ac0026b9374c0342 -->
#### 1 × Amulet + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-ac0026b9374c0342`, row 703.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-5e05f4b91dd86c17 -->
#### 1 × Amulet + 1 × Emerald → 1 × Return Exact Input Item

- Source: `cr-5e05f4b91dd86c17`, row 697.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Emerald
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +5 to Dexterity
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-6227006203c1257e -->
#### 1 × Amulet + 1 × Ruby + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item

- Source: `cr-6227006203c1257e`, row 714.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4b8275481f6019f3 -->
#### 1 × Amulet + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4b8275481f6019f3`, row 706.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4f509594f4e6881f -->
#### 1 × Amulet + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-4f509594f4e6881f`, row 700.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-099289de34db577c -->
#### 1 × Amulet + 1 × Ruby → 1 × Return Exact Input Item

- Source: `cr-099289de34db577c`, row 695.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Ruby
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +25 to Life
    - +4 Life after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-572e0a86c4f34af3 -->
#### 1 × Amulet + 1 × Sapphire + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item

- Source: `cr-572e0a86c4f34af3`, row 715.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-254e5444e3b674e0 -->
#### 1 × Amulet + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-254e5444e3b674e0`, row 707.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c7add7acf222536c -->
#### 1 × Amulet + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-c7add7acf222536c`, row 701.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-8e4851643d32a575 -->
#### 1 × Amulet + 1 × Sapphire → 1 × Return Exact Input Item

- Source: `cr-8e4851643d32a575`, row 696.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Sapphire
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +25 to Mana
    - +4 Mana after each Kill
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-383619d2a4783a6b -->
#### 1 × Amulet + 1 × Skull + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item

- Source: `cr-383619d2a4783a6b`, row 717.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-eb5be8285b6ba4a8 -->
#### 1 × Amulet + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-eb5be8285b6ba4a8`, row 709.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e6faa2fd04dc931d -->
#### 1 × Amulet + 1 × Skull → 1 × Return Exact Input Item

- Source: `cr-e6faa2fd04dc931d`, row 698.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Skull
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +5 to Energy
    - +5 to Vitality
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-29684b5e9e71cd00 -->
#### 1 × Amulet + 1 × Topaz + 1 × Jewel + 1 × Orb of Infusion → 1 × Return Exact Input Item

- Source: `cr-29684b5e9e71cd00`, row 713.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-81be98c107884d25 -->
#### 1 × Amulet + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-81be98c107884d25`, row 705.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2f4cea75ec3129a5 -->
#### 1 × Amulet + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-2f4cea75ec3129a5`, row 702.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-bc0d0e49b6f6e5ae -->
#### 1 × Amulet + 1 × Topaz → 1 × Return Exact Input Item

- Source: `cr-bc0d0e49b6f6e5ae`, row 694.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Amulet
  - 1 × Topaz
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +12% Chance Items Roll Magic or Better
    - +25% Extra Gold from Monsters
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-86262fc0139e1841 -->
#### 1 × Any Shield + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-86262fc0139e1841`, row 872.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7969f2e558d47bd6 -->
#### 1 × Any Shield + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7969f2e558d47bd6`, row 874.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8e16c93c54870a39 -->
#### 1 × Any Shield + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8e16c93c54870a39`, row 871.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-58768978e72d6917 -->
#### 1 × Any Shield + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-58768978e72d6917`, row 875.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ef6824801ead0fc2 -->
#### 1 × Any Shield + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ef6824801ead0fc2`, row 876.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9093ada6f2bd7e52 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9093ada6f2bd7e52`, row 887.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b36dcc68e0f870c8 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Diamond + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b36dcc68e0f870c8`, row 889.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bb19505dbf334d34 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Diamond + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bb19505dbf334d34`, row 880.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-64c3c8745d9ef739 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-64c3c8745d9ef739`, row 890.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ad28868183c96702 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Diamond + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ad28868183c96702`, row 896.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-368d221db9c96c0a -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-368d221db9c96c0a`, row 886.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-64c066aceaa53fa0 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-64c066aceaa53fa0`, row 883.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-291e8988444cf958 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Ruby + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-291e8988444cf958`, row 894.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-50fe5d0044f2a9ac -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-50fe5d0044f2a9ac`, row 884.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e2e93d1fb4ef6597 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e2e93d1fb4ef6597`, row 895.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d7ca8cc124e35665 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Ruby + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d7ca8cc124e35665`, row 881.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-613313895f9d223c -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-613313895f9d223c`, row 888.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9c5d00bcf74678c0 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9c5d00bcf74678c0`, row 878.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a89ed306e87a71fb -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a89ed306e87a71fb`, row 891.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8e6e64c5ab6d6c46 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8e6e64c5ab6d6c46`, row 882.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6795ed923e4c64e5 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6795ed923e4c64e5`, row 893.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1c5d4e742f0f1b9c -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1c5d4e742f0f1b9c`, row 879.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5c3caa74ddab483a -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5c3caa74ddab483a`, row 885.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-52931df4766574b3 -->
#### 1 × Any Shield + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-52931df4766574b3`, row 892.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5c795de698c4206c -->
#### 1 × Any Shield + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5c795de698c4206c`, row 869.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3bc4a28d5a93e45f -->
#### 1 × Any Shield + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3bc4a28d5a93e45f`, row 870.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f48fa748f8660b57 -->
#### 1 × Any Shield + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f48fa748f8660b57`, row 873.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-71ed6f1cafcbbc53 -->
#### 1 × Any Shield + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-71ed6f1cafcbbc53`, row 877.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-975655fce5e91aa6 -->
#### 1 × Any Shield + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-975655fce5e91aa6`, row 868.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bc03fc341a308af8 -->
#### 1 × Armor + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bc03fc341a308af8`, row 901.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e281cac723be86f3 -->
#### 1 × Armor + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e281cac723be86f3`, row 903.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bc4da9c3e814e1e0 -->
#### 1 × Armor + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bc4da9c3e814e1e0`, row 900.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ca8cf861858fc03a -->
#### 1 × Armor + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ca8cf861858fc03a`, row 904.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-91dc3f55f3bc272f -->
#### 1 × Armor + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-91dc3f55f3bc272f`, row 905.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-16ec30dafb7c1ed7 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-16ec30dafb7c1ed7`, row 922.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5d81486bde86f88f -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5d81486bde86f88f`, row 913.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-42b0d7bd08eae7e0 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Amethyst + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-42b0d7bd08eae7e0`, row 926.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3b28401bef1e3be3 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Diamond + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3b28401bef1e3be3`, row 920.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-453174d5d655ad89 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Diamond + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-453174d5d655ad89`, row 915.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bb2bb1a53c8fe298 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bb2bb1a53c8fe298`, row 916.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3eaabda3faa5c537 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3eaabda3faa5c537`, row 912.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-af7133e826867de1 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-af7133e826867de1`, row 909.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f6588076da41335d -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f6588076da41335d`, row 910.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-28c848a4e3d13002 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-28c848a4e3d13002`, row 921.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ab59853cd5c4524d -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ab59853cd5c4524d`, row 923.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-05703ac1cf8f4a0d -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-05703ac1cf8f4a0d`, row 914.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0fc027ac301c7a79 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0fc027ac301c7a79`, row 907.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6033e5e85fb86b56 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6033e5e85fb86b56`, row 917.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b0da940d2ae92d24 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b0da940d2ae92d24`, row 919.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a7d86622fda76f4d -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a7d86622fda76f4d`, row 908.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0d582da67d7f5c75 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Skull + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0d582da67d7f5c75`, row 925.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-49354ea64707e12f -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-49354ea64707e12f`, row 911.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-13e8ef12ed7921d8 -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-13e8ef12ed7921d8`, row 924.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-42f93988427bf39e -->
#### 1 × Armor + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-42f93988427bf39e`, row 918.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6c2ecda9f72a34d5 -->
#### 1 × Armor + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6c2ecda9f72a34d5`, row 898.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7bb9a5052825eac2 -->
#### 1 × Armor + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7bb9a5052825eac2`, row 899.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b55b78799fdab7aa -->
#### 1 × Armor + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b55b78799fdab7aa`, row 902.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-777ae25642e9ea06 -->
#### 1 × Armor + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-777ae25642e9ea06`, row 906.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6b73515cc873faa3 -->
#### 1 × Armor + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6b73515cc873faa3`, row 897.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-750f06d558db39aa -->
#### 1 × Belt + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-750f06d558db39aa`, row 752.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d8717c9bc4e73c25 -->
#### 1 × Belt + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d8717c9bc4e73c25`, row 754.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1aceacf384311f52 -->
#### 1 × Belt + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1aceacf384311f52`, row 751.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-025009b9dcc7eacc -->
#### 1 × Belt + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-025009b9dcc7eacc`, row 755.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5ef225ec91ed38dd -->
#### 1 × Belt + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5ef225ec91ed38dd`, row 756.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-cfc3d711d37225da -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-cfc3d711d37225da`, row 771.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-27aca3addcb7098d -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-27aca3addcb7098d`, row 775.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bd2d8eef5edcf34d -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bd2d8eef5edcf34d`, row 763.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-39ec7c7a39f40b3f -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Diamond + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-39ec7c7a39f40b3f`, row 766.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1d742958fb6db2ca -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1d742958fb6db2ca`, row 767.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-827521c4fbc36245 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-827521c4fbc36245`, row 762.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-43dd26dc6ab42a2b -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Emerald + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-43dd26dc6ab42a2b`, row 759.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ef02112f99e52ba7 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ef02112f99e52ba7`, row 760.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-66c7d38f3833828c -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-66c7d38f3833828c`, row 772.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-eec34f829e90fc17 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-eec34f829e90fc17`, row 773.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e5841b096571ebcf -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e5841b096571ebcf`, row 764.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6daf59b92530fd27 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6daf59b92530fd27`, row 758.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-35a40e807d682dbc -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-35a40e807d682dbc`, row 768.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-abc4be4789cf215e -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-abc4be4789cf215e`, row 770.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-418b6f096653d2e3 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Skull + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-418b6f096653d2e3`, row 765.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c2ba977eecf7fe7d -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c2ba977eecf7fe7d`, row 761.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7bbd7e95687d0876 -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7bbd7e95687d0876`, row 774.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d95c7dd1570f14dc -->
#### 1 × Belt + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d95c7dd1570f14dc`, row 769.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2b26dfb881747ca3 -->
#### 1 × Belt + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2b26dfb881747ca3`, row 749.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e4d87e26e0f28790 -->
#### 1 × Belt + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e4d87e26e0f28790`, row 750.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7bb78a8fd3310cf8 -->
#### 1 × Belt + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7bb78a8fd3310cf8`, row 753.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7a9e7387cc007cdc -->
#### 1 × Belt + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7a9e7387cc007cdc`, row 757.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2be25c05b02ab6d5 -->
#### 1 × Belt + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2be25c05b02ab6d5`, row 748.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-cda55ea1c8af79cb -->
#### 1 × Boots + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-cda55ea1c8af79cb`, row 780.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8bae203c5b450d60 -->
#### 1 × Boots + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8bae203c5b450d60`, row 782.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b1e2413f96eeb273 -->
#### 1 × Boots + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b1e2413f96eeb273`, row 779.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c1e27a1aadb7b6f9 -->
#### 1 × Boots + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c1e27a1aadb7b6f9`, row 784.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-61509c521bf883a8 -->
#### 1 × Boots + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-61509c521bf883a8`, row 785.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7a8d636f4b592296 -->
#### 1 × Boots + 1 × Nef Rune (#4) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7a8d636f4b592296`, row 783.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f48d51aecf9f7660 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f48d51aecf9f7660`, row 793.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3a8c9262f28f5fca -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3a8c9262f28f5fca`, row 789.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5a45df3db1b48f37 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Amethyst + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5a45df3db1b48f37`, row 805.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8e8c1415e774c85f -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Diamond + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8e8c1415e774c85f`, row 804.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2992243759c13d4e -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Diamond + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2992243759c13d4e`, row 796.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1bcbb31675353e73 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1bcbb31675353e73`, row 797.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b80c549e1ffb6a08 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b80c549e1ffb6a08`, row 792.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b187341fa0a80ebd -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Emerald + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b187341fa0a80ebd`, row 788.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ee795fefa208c2fa -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Ruby + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ee795fefa208c2fa`, row 801.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d250202835d921ae -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d250202835d921ae`, row 790.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ce07d423ad76c141 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ce07d423ad76c141`, row 802.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-50a4251ac4cfe9fe -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-50a4251ac4cfe9fe`, row 794.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f916a52cb28dadce -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f916a52cb28dadce`, row 787.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a5d7f7b50a386719 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a5d7f7b50a386719`, row 798.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6db0b385d10a52cf -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6db0b385d10a52cf`, row 800.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4bfa051fc812e226 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Skull + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4bfa051fc812e226`, row 795.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-cf78a4e57e5dbd58 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-cf78a4e57e5dbd58`, row 791.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6f480f1e0e3ef04f -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6f480f1e0e3ef04f`, row 803.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1653f62f55280e19 -->
#### 1 × Boots + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1653f62f55280e19`, row 799.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4b1a1b7d9b561642 -->
#### 1 × Boots + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4b1a1b7d9b561642`, row 777.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3b8f44226a5a6055 -->
#### 1 × Boots + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3b8f44226a5a6055`, row 778.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-20d5e3202c5485bd -->
#### 1 × Boots + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-20d5e3202c5485bd`, row 781.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e11e9de921978369 -->
#### 1 × Boots + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e11e9de921978369`, row 786.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f48566439b223110 -->
#### 1 × Boots + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f48566439b223110`, row 776.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2f7003c54e77b01d -->
#### 1 × Gloves + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2f7003c54e77b01d`, row 810.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e83708ae9db10332 -->
#### 1 × Gloves + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e83708ae9db10332`, row 812.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-10460a44ec390185 -->
#### 1 × Gloves + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-10460a44ec390185`, row 809.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-29a0ce43d25364b3 -->
#### 1 × Gloves + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-29a0ce43d25364b3`, row 813.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bb12796ae693100e -->
#### 1 × Gloves + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bb12796ae693100e`, row 814.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-262032b30443641e -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-262032b30443641e`, row 823.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-966bedcbdc520a7f -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Amethyst + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-966bedcbdc520a7f`, row 818.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-49c79d30c33ad3e5 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Diamond + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-49c79d30c33ad3e5`, row 834.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1df87b0807e10ba5 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1df87b0807e10ba5`, row 826.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a2233d032c2d35a6 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Emerald + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a2233d032c2d35a6`, row 833.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-42485052c8813bf6 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-42485052c8813bf6`, row 822.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d0129779b6c23257 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Ruby + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d0129779b6c23257`, row 831.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e533161d8d8b7cb8 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e533161d8d8b7cb8`, row 820.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0c5466a8e5845fbb -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0c5466a8e5845fbb`, row 830.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1452d45bc0b5a360 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1452d45bc0b5a360`, row 832.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0917c94705bcb280 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0917c94705bcb280`, row 824.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7c9a55253314ee5c -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7c9a55253314ee5c`, row 816.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-562200841ea5c96a -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Shael Rune (#13) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-562200841ea5c96a`, row 819.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f2642ba029454079 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f2642ba029454079`, row 829.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-076cbd5829bcab10 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-076cbd5829bcab10`, row 817.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-cd0f55b1a8bf3558 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Skull + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-cd0f55b1a8bf3558`, row 836.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8ce0a0c634788ce6 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8ce0a0c634788ce6`, row 821.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c2cece087e6981a7 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Skull + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c2cece087e6981a7`, row 827.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c67e944538c56ff5 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c67e944538c56ff5`, row 835.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b727b06e3bf8e2e7 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b727b06e3bf8e2e7`, row 828.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3f206a1f64135774 -->
#### 1 × Gloves + 1 × Orb of Infusion + 1 × Topaz + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3f206a1f64135774`, row 825.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6f289621dc1727f0 -->
#### 1 × Gloves + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6f289621dc1727f0`, row 807.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f574d3ef936f1c83 -->
#### 1 × Gloves + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f574d3ef936f1c83`, row 808.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-985016031dd330ab -->
#### 1 × Gloves + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-985016031dd330ab`, row 811.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-685f07f007994917 -->
#### 1 × Gloves + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-685f07f007994917`, row 815.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1631adc6d5c9e8a2 -->
#### 1 × Gloves + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1631adc6d5c9e8a2`, row 806.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-98039c83f5ee1a83 -->
#### 1 × Helm + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-98039c83f5ee1a83`, row 841.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-193fd46441b0eb88 -->
#### 1 × Helm + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-193fd46441b0eb88`, row 843.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9fd2612ea385cedb -->
#### 1 × Helm + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9fd2612ea385cedb`, row 840.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5ec3004eb191b9f1 -->
#### 1 × Helm + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5ec3004eb191b9f1`, row 844.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4ed293800b343f00 -->
#### 1 × Helm + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4ed293800b343f00`, row 845.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7cc2a21359869ad3 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Amethyst + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7cc2a21359869ad3`, row 860.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-882adc20fbfebcd8 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-882adc20fbfebcd8`, row 853.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-fb8997479b28c067 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Diamond + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-fb8997479b28c067`, row 866.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1098ef48c6cac516 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Diamond + 1 × Pul Rune (#21) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1098ef48c6cac516`, row 855.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-181060e68abfe9db -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-181060e68abfe9db`, row 856.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6972f6e506bdf8b0 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6972f6e506bdf8b0`, row 865.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c2073793b6f9df70 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c2073793b6f9df70`, row 852.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1df5fff999c74ea3 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Emerald + 1 × Thul Rune (#10) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1df5fff999c74ea3`, row 848.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4c85457c775b0f95 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Ruby + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4c85457c775b0f95`, row 862.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-dd6037c0ebb36fa6 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-dd6037c0ebb36fa6`, row 850.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ee547afe59d60dc9 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ee547afe59d60dc9`, row 861.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e628b69e5ced15d6 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e628b69e5ced15d6`, row 863.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5f404912f1ad6746 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5f404912f1ad6746`, row 854.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f3b2323de953ba06 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f3b2323de953ba06`, row 847.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-588d425e357c6261 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-588d425e357c6261`, row 857.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1e41709e963537e7 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1e41709e963537e7`, row 859.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6e4618c618daf376 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Skull + 1 × Amn Rune (#11) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6e4618c618daf376`, row 849.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ad9c1376c102bea0 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ad9c1376c102bea0`, row 851.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-172b348505273995 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Skull + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-172b348505273995`, row 867.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8754d353dadbf3f7 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Topaz + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8754d353dadbf3f7`, row 864.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-355918583b578b41 -->
#### 1 × Helm + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-355918583b578b41`, row 858.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9f79e495f6dabd0a -->
#### 1 × Helm + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9f79e495f6dabd0a`, row 838.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d1fecc59b0f6ae1d -->
#### 1 × Helm + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d1fecc59b0f6ae1d`, row 839.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-39fac0b8b21984b5 -->
#### 1 × Helm + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-39fac0b8b21984b5`, row 842.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ef4784382c5a88e1 -->
#### 1 × Helm + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ef4784382c5a88e1`, row 846.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e7ca6542730c2ed8 -->
#### 1 × Helm + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e7ca6542730c2ed8`, row 837.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ecc6585610c23faa -->
#### 1 × Missile Weapon + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ecc6585610c23faa`, row 986.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5028ce1c7cce4225 -->
#### 1 × Missile Weapon + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5028ce1c7cce4225`, row 987.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9285fe743c182552 -->
#### 1 × Missile Weapon + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9285fe743c182552`, row 984.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7a075b3a94aef0cc -->
#### 1 × Missile Weapon + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7a075b3a94aef0cc`, row 988.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-db3ead70413b5f44 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Nef Rune (#4) → 1 × Return Exact Input Item

- Source: `cr-db3ead70413b5f44`, row 1002.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-93bd31eb18171750 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-93bd31eb18171750`, row 1001.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-bfed6fdfa5f1494d -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-bfed6fdfa5f1494d`, row 994.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-db7745c74be98996 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-db7745c74be98996`, row 996.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3a98fe9e4fe35ad8 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Diamond + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3a98fe9e4fe35ad8`, row 1000.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-93ed067dc381bc25 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Emerald + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-93ed067dc381bc25`, row 993.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-7232a69e44b78b82 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7232a69e44b78b82`, row 999.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5fed0fc27ffe63a3 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Chaos Onyx + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5fed0fc27ffe63a3`, row 1007.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9e20728db4687325 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Emerald + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9e20728db4687325`, row 1006.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1859fbe6ac3a93e2 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Ruby + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1859fbe6ac3a93e2`, row 1003.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-04e2f9da1c09c98f -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Sapphire + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-04e2f9da1c09c98f`, row 1004.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-96262eeb26393920 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Topaz + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-96262eeb26393920`, row 1005.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6a9b4e3c207878de -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Ruby + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6a9b4e3c207878de`, row 991.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3863ef70c47c83bc -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3863ef70c47c83bc`, row 995.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c57a786f340c547d -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c57a786f340c547d`, row 992.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3e5f7930e240f487 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3e5f7930e240f487`, row 998.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-73079696b754bac3 -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Topaz + 1 × Io Rune (#16) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-73079696b754bac3`, row 990.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-dc1c5ec19e236adc -->
#### 1 × Missile Weapon + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-dc1c5ec19e236adc`, row 997.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a2de3139395b82a3 -->
#### 1 × Missile Weapon + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a2de3139395b82a3`, row 982.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5c8fcfa798d98d90 -->
#### 1 × Missile Weapon + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5c8fcfa798d98d90`, row 983.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f36edc108b1812f8 -->
#### 1 × Missile Weapon + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f36edc108b1812f8`, row 985.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f255c50883e782dc -->
#### 1 × Missile Weapon + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f255c50883e782dc`, row 989.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a399ad866811bcd5 -->
#### 1 × Missile Weapon + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a399ad866811bcd5`, row 981.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-079fbbb804247b66 -->
#### 1 × Ring + 1 × Emerald + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-079fbbb804247b66`, row 734.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Emerald
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Poison Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-9bbd5892307eb9a6 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Amethyst + 1 × Ber Rune (#30) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9bbd5892307eb9a6`, row 746.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-67af2c3355d81466 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Diamond + 1 × Um Rune (#22) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-67af2c3355d81466`, row 739.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3959547c8fbb70fc -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Emerald + 1 × Gul Rune (#25) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3959547c8fbb70fc`, row 743.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e07e8fb9b7bff227 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Emerald + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e07e8fb9b7bff227`, row 744.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-358448a16975ebdd -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Emerald + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-358448a16975ebdd`, row 741.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ecf1c09a6f1d98b3 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Ruby + 1 × Dol Rune (#14) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ecf1c09a6f1d98b3`, row 736.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-58eacfc750a03a20 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Ruby + 1 × Jah Rune (#31) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-58eacfc750a03a20`, row 747.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a54e7dc043ce1993 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Sapphire + 1 × Ith Rune (#6) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a54e7dc043ce1993`, row 735.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-2d4ff1164a8c4692 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Sapphire + 1 × Sur Rune (#29) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2d4ff1164a8c4692`, row 745.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9f9b0314a38bd2ce -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Skull + 1 × Io Rune (#16) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9f9b0314a38bd2ce`, row 737.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a23d9ed56b37a009 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a23d9ed56b37a009`, row 738.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-21b0d338c496ee20 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-21b0d338c496ee20`, row 740.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6cbb0bd2e42c58b1 -->
#### 1 × Ring + 1 × Orb of Infusion + 1 × Topaz + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6cbb0bd2e42c58b1`, row 742.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c6533014d70706f7 -->
#### 1 × Ring + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c6533014d70706f7`, row 729.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-95a9a5745357f49b -->
#### 1 × Ring + 1 × Ruby + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-95a9a5745357f49b`, row 731.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Ruby
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Fire Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-25da15fb901a9fc4 -->
#### 1 × Ring + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-25da15fb901a9fc4`, row 730.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ed314269570b5108 -->
#### 1 × Ring + 1 × Sapphire + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-ed314269570b5108`, row 732.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Sapphire
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Cold Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-ba1a65e386691061 -->
#### 1 × Ring + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ba1a65e386691061`, row 728.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a063842ee5c15089 -->
#### 1 × Ring + 1 × Topaz + 1 × Tir Rune (#3) → 1 × Return Exact Input Item

- Source: `cr-a063842ee5c15089`, row 733.
- Crafting category or notes: Item Enchantment Recipe
- Required ingredients:
  - 1 × Ring
  - 1 × Topaz
  - 1 × Tir Rune (#3)
- Results:
  - A: 1 × Return Exact Input Item
    - Enchantments: 1 / 2
    - +10% Lightning Resistance
- **Review:** Recipe operation fields (Op=16, Param=392, Value=1) are present; their gameplay meaning has not been verified.

<!-- changes.json: cube-recipes / cr-7d60b8d5d1aaa007 -->
#### 1 × Slam Weapons + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-7d60b8d5d1aaa007`, row 932.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-b70c6a7e8b3057cc -->
#### 1 × Slam Weapons + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b70c6a7e8b3057cc`, row 933.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3b78b2a89d2264bf -->
#### 1 × Slam Weapons + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3b78b2a89d2264bf`, row 930.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-ae7ff17beefb7d75 -->
#### 1 × Slam Weapons + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ae7ff17beefb7d75`, row 934.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e0be21b81c82c3b3 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Nef Rune (#4) → 1 × Return Exact Input Item

- Source: `cr-e0be21b81c82c3b3`, row 948.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8c157ea1e944df49 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8c157ea1e944df49`, row 947.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-766f72c39a05181c -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-766f72c39a05181c`, row 940.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-cd5193590dfac3db -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-cd5193590dfac3db`, row 942.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-936fce129c39a1b9 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Diamond + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-936fce129c39a1b9`, row 946.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-cc848ea49ff12018 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Emerald + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-cc848ea49ff12018`, row 939.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-485ccf9e6216db47 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-485ccf9e6216db47`, row 945.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0226f1fd011c7158 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Chaos Onyx + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0226f1fd011c7158`, row 953.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-265be7398d016a6e -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Emerald + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-265be7398d016a6e`, row 952.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-da12e0ed4bebdc39 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Ruby + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-da12e0ed4bebdc39`, row 949.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d7fe1c43e16cfdc4 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Sapphire + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d7fe1c43e16cfdc4`, row 950.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c1ec30d08343b0eb -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Topaz + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c1ec30d08343b0eb`, row 951.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e79974938b4aa9f3 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Ruby + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e79974938b4aa9f3`, row 937.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-600ab7b5620e1d5d -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-600ab7b5620e1d5d`, row 941.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-42752a84813addf4 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-42752a84813addf4`, row 938.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-576e38289e07d422 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-576e38289e07d422`, row 944.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-426d13200c17b3e6 -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Topaz + 1 × Io Rune (#16) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-426d13200c17b3e6`, row 936.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0ca4b925c2c4cb6d -->
#### 1 × Slam Weapons + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0ca4b925c2c4cb6d`, row 943.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9f3741b6c1ed6b36 -->
#### 1 × Slam Weapons + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9f3741b6c1ed6b36`, row 928.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8dcad95797158a99 -->
#### 1 × Slam Weapons + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8dcad95797158a99`, row 929.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-9192aa1f03b24571 -->
#### 1 × Slam Weapons + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9192aa1f03b24571`, row 931.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-839312426826733d -->
#### 1 × Slam Weapons + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-839312426826733d`, row 935.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-04bb4dbc3257813c -->
#### 1 × Slam Weapons + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-04bb4dbc3257813c`, row 927.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5fa7b887da4795f1 -->
#### 1 × Spears and Polearms + 1 × Amethyst + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5fa7b887da4795f1`, row 959.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1a4a234b4c87f506 -->
#### 1 × Spears and Polearms + 1 × Diamond + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1a4a234b4c87f506`, row 960.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-e482b15a86837829 -->
#### 1 × Spears and Polearms + 1 × Emerald + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e482b15a86837829`, row 957.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0aa8cd6175d5d567 -->
#### 1 × Spears and Polearms + 1 × Eth Rune (#5) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0aa8cd6175d5d567`, row 961.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3aa170a723bc55cd -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel + 1 × Nef Rune (#4) → 1 × Return Exact Input Item

- Source: `cr-3aa170a723bc55cd`, row 975.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-845d3f258633208b -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Amethyst + 1 × Cham Rune (#32) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-845d3f258633208b`, row 974.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c183cdbb9c31f362 -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Amethyst + 1 × Fal Rune (#19) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c183cdbb9c31f362`, row 967.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-63bef0df0666228d -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Amethyst + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-63bef0df0666228d`, row 969.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-486b054e8b40cb7f -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Diamond + 1 × Lo Rune (#28) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-486b054e8b40cb7f`, row 973.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8a34dab9a61fc98a -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Emerald + 1 × Lem Rune (#20) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8a34dab9a61fc98a`, row 966.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-54062a99a5f49669 -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Emerald + 1 × Ohm Rune (#27) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-54062a99a5f49669`, row 972.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-1cd37770a743c97a -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Chaos Onyx + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1cd37770a743c97a`, row 980.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-293e84ecc72b1094 -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Emerald + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-293e84ecc72b1094`, row 979.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-523bb67fe97495ab -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Ruby + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-523bb67fe97495ab`, row 976.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5e529fbd2448901e -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Sapphire + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5e529fbd2448901e`, row 977.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-97cea5cdbe03adf9 -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Orb of Conversion + 1 × Topaz + 1 × Zod Rune (#33) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-97cea5cdbe03adf9`, row 978.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3d31160f740be5a9 -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Ruby + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3d31160f740be5a9`, row 964.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c42a0bee254137ab -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Sapphire + 1 × Mal Rune (#23) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c42a0bee254137ab`, row 968.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-80b1bae1fbde994a -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Skull + 1 × Lum Rune (#17) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-80b1bae1fbde994a`, row 965.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d5bf6f8434cfd268 -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Skull + 1 × Vex Rune (#26) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d5bf6f8434cfd268`, row 971.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-5e2a2516df0b2290 -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Topaz + 1 × Io Rune (#16) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-5e2a2516df0b2290`, row 963.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-3183831d0072e0e3 -->
#### 1 × Spears and Polearms + 1 × Orb of Infusion + 1 × Topaz + 1 × Ist Rune (#24) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-3183831d0072e0e3`, row 970.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-d2d05c2508ecd1bc -->
#### 1 × Spears and Polearms + 1 × Ruby + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d2d05c2508ecd1bc`, row 955.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-c8b5c0b6f9a501ef -->
#### 1 × Spears and Polearms + 1 × Sapphire + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-c8b5c0b6f9a501ef`, row 956.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-4b75c73ea83ff087 -->
#### 1 × Spears and Polearms + 1 × Skull + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4b75c73ea83ff087`, row 958.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-a6b28b2cd7793ce3 -->
#### 1 × Spears and Polearms + 1 × Sol Rune (#12) + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a6b28b2cd7793ce3`, row 962.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-6d4c501f9882bbb6 -->
#### 1 × Spears and Polearms + 1 × Topaz + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-6d4c501f9882bbb6`, row 954.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-56d058573ac4420a -->
#### Amazon-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-56d058573ac4420a`, row 725.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-8a4be0c8e1c76436 -->
#### Assassin-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8a4be0c8e1c76436`, row 720.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f6d0335b29fabb76 -->
#### Barbarian-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f6d0335b29fabb76`, row 721.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-196e83fe639d752e -->
#### Druid-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-196e83fe639d752e`, row 723.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-f57ce83f8a3ef33f -->
#### Necromancer-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f57ce83f8a3ef33f`, row 724.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0804a07f72b4af4e -->
#### Paladin-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0804a07f72b4af4e`, row 726.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-568bacb498c13395 -->
#### Sorceress-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-568bacb498c13395`, row 722.
- Crafting category or notes: Item Enchantment Recipe
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

<!-- changes.json: cube-recipes / cr-0f157e4dc4501f17 -->
#### Warlock-only recipe: 1 × Amulet + 1 × Orb of Infusion + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0f157e4dc4501f17`, row 727.
- Crafting category or notes: Item Enchantment Recipe
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

## Jewel Upgrade Recipe

### Confirmed matched modifications

<!-- changes.json: cube-recipes / cr-b0cdc5e06b82ab55 -->
#### 6 × Jewel → 1 × Jewel

- Source: `cr-b0cdc5e06b82ab55`, row 616.
- **Review:** The comparison reports a modification but no player-readable difference could be isolated; review this recipe's source record.

## Orb of Corruption Recipe

### Confirmed matched modifications

<!-- changes.json: cube-recipes / cr-d2e8d3b75e809c3a -->
#### 1 × Any Shield + 1 × Orb of Corruption → 1 × Return Exact Input Item

- Source: `cr-d2e8d3b75e809c3a`, row 189.
- Output property (A): +40% Mana Regeneration (was +20%)

<!-- changes.json: cube-recipes / cr-ff58ea4d48e0ee1a -->
#### 1 × Any Weapon + 1 × Orb of Corruption → 1 × Return Exact Input Item

- Source: `cr-ff58ea4d48e0ee1a`, row 214.
- Removed output property (A): +10% Deadly Strike

<!-- changes.json: cube-recipes / cr-e52bbabc922aebe1 -->
#### 1 × Armor + 1 × Orb of Corruption → 1 × Return Exact Input Item

- Source: `cr-e52bbabc922aebe1`, row 202.
- Output property (A): +40% Mana Regeneration (was +20%)

<!-- changes.json: cube-recipes / cr-672841b01742a032 -->
#### 1 × Belt + 1 × Orb of Corruption → 1 × Return Exact Input Item

- Source: `cr-672841b01742a032`, row 123.
- Output property (A): +40% Mana Regeneration (was +20%)

<!-- changes.json: cube-recipes / cr-bd031ea2c02c6715 -->
#### 1 × Boots + 1 × Orb of Corruption → 1 × Return Exact Input Item

- Source: `cr-bd031ea2c02c6715`, row 138.
- Output property (A): +(20-40)% Mana Regeneration (was +(10-20)%)

<!-- changes.json: cube-recipes / cr-681df9664751c4df -->
#### 1 × Gloves + 1 × Orb of Corruption → 1 × Return Exact Input Item

- Source: `cr-681df9664751c4df`, row 146.
- Output property (A): +10% Deadly Strike (was +5%)
- Added output property (A): +10% Chance of Open Wounds
- Removed output property (A): +5% Chance of Crushing Blow

<!-- changes.json: cube-recipes / cr-15f469aa298b03ed -->
#### 1 × Helm + 1 × Orb of Corruption → 1 × Return Exact Input Item

- Source: `cr-15f469aa298b03ed`, row 162.
- Output property (A): +40% Mana Regeneration (was +20%)

## Reroll Item Recipe

### Removed recipe definitions

<!-- changes.json: cube-recipes / cr-69ee15d680294f57 -->
#### 1 × Gem Bag + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Jewel

- Source: `cr-69ee15d680294f57`, row 626.
- Crafting category or notes: Reroll Item Recipe
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

## Socket Punch Recipe

### Removed recipe definitions

<!-- changes.json: cube-recipes / cr-e6acd36e58906fa2 -->
#### 1 × Any Shield + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e6acd36e58906fa2`, row 15828.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Unique Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

<!-- changes.json: cube-recipes / cr-ec1630c7e8120415 -->
#### 1 × Any Shield + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ec1630c7e8120415`, row 15826.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Crafted Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

<!-- changes.json: cube-recipes / cr-422cbad35ea42225 -->
#### 1 × Any Shield + 2 × Jewel → 1 × Return Exact Input Item

- Source: `cr-422cbad35ea42225`, row 15836.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Unique Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

<!-- changes.json: cube-recipes / cr-d62663b55c3930d6 -->
#### 1 × Any Shield + 2 × Jewel → 1 × Return Exact Input Item

- Source: `cr-d62663b55c3930d6`, row 15834.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Crafted Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

<!-- changes.json: cube-recipes / cr-8468e1ca64f69ea6 -->
#### 1 × Any Shield + 3 × Jewel → 1 × Return Exact Input Item

- Source: `cr-8468e1ca64f69ea6`, row 15844.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Unique Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

<!-- changes.json: cube-recipes / cr-e28d0b9099c71195 -->
#### 1 × Any Shield + 3 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e28d0b9099c71195`, row 15842.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Crafted Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

<!-- changes.json: cube-recipes / cr-4fd913b5d216d7cb -->
#### 1 × Any Shield + 4 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4fd913b5d216d7cb`, row 15852.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Unique Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

<!-- changes.json: cube-recipes / cr-a78a09e865d36704 -->
#### 1 × Any Shield + 4 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a78a09e865d36704`, row 15850.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Shield
    - Ingredient requirement: Crafted Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

<!-- changes.json: cube-recipes / cr-2b24bdc35fd57313 -->
#### 1 × Any Weapon + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2b24bdc35fd57313`, row 15858.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

<!-- changes.json: cube-recipes / cr-83126415a3bc31d8 -->
#### 1 × Any Weapon + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-83126415a3bc31d8`, row 15860.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

<!-- changes.json: cube-recipes / cr-a6e9324795b61780 -->
#### 1 × Any Weapon + 2 × Jewel → 1 × Return Exact Input Item

- Source: `cr-a6e9324795b61780`, row 15866.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

<!-- changes.json: cube-recipes / cr-fb5ccc1629c721ff -->
#### 1 × Any Weapon + 2 × Jewel → 1 × Return Exact Input Item

- Source: `cr-fb5ccc1629c721ff`, row 15868.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

<!-- changes.json: cube-recipes / cr-746880144bf2c9b7 -->
#### 1 × Any Weapon + 3 × Jewel → 1 × Return Exact Input Item

- Source: `cr-746880144bf2c9b7`, row 15874.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

<!-- changes.json: cube-recipes / cr-dde5f18cbd19a388 -->
#### 1 × Any Weapon + 3 × Jewel → 1 × Return Exact Input Item

- Source: `cr-dde5f18cbd19a388`, row 15876.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

<!-- changes.json: cube-recipes / cr-aab2953993ba3d3a -->
#### 1 × Any Weapon + 4 × Jewel → 1 × Return Exact Input Item

- Source: `cr-aab2953993ba3d3a`, row 15882.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

<!-- changes.json: cube-recipes / cr-ee9646f811cd6101 -->
#### 1 × Any Weapon + 4 × Jewel → 1 × Return Exact Input Item

- Source: `cr-ee9646f811cd6101`, row 15884.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

<!-- changes.json: cube-recipes / cr-0519a34fc44544c2 -->
#### 1 × Any Weapon + 5 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0519a34fc44544c2`, row 15892.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 5 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (5)

<!-- changes.json: cube-recipes / cr-b87307b2eb229f39 -->
#### 1 × Any Weapon + 5 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b87307b2eb229f39`, row 15890.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 5 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (5)

<!-- changes.json: cube-recipes / cr-129715cf532a4ed4 -->
#### 1 × Any Weapon + 6 × Jewel → 1 × Return Exact Input Item

- Source: `cr-129715cf532a4ed4`, row 15898.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Crafted Item
  - 6 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (6)

<!-- changes.json: cube-recipes / cr-9094bc52c7cbdf53 -->
#### 1 × Any Weapon + 6 × Jewel → 1 × Return Exact Input Item

- Source: `cr-9094bc52c7cbdf53`, row 15900.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Any Weapon
    - Ingredient requirement: Unique Item
  - 6 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (6)

<!-- changes.json: cube-recipes / cr-90bd7f700223f228 -->
#### 1 × Armor + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-90bd7f700223f228`, row 15778.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

<!-- changes.json: cube-recipes / cr-f1d15ad68b571e7b -->
#### 1 × Armor + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f1d15ad68b571e7b`, row 15780.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

<!-- changes.json: cube-recipes / cr-e851af8dd8bb7caf -->
#### 1 × Armor + 2 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e851af8dd8bb7caf`, row 15786.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

<!-- changes.json: cube-recipes / cr-fdd2608fbba35238 -->
#### 1 × Armor + 2 × Jewel → 1 × Return Exact Input Item

- Source: `cr-fdd2608fbba35238`, row 15788.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

<!-- changes.json: cube-recipes / cr-f1c89faa5b0ffb78 -->
#### 1 × Armor + 3 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f1c89faa5b0ffb78`, row 15794.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

<!-- changes.json: cube-recipes / cr-f45b7073394ed36f -->
#### 1 × Armor + 3 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f45b7073394ed36f`, row 15796.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

<!-- changes.json: cube-recipes / cr-00a36c8d2410b971 -->
#### 1 × Armor + 4 × Jewel → 1 × Return Exact Input Item

- Source: `cr-00a36c8d2410b971`, row 15802.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

<!-- changes.json: cube-recipes / cr-29cbc598805d0ff2 -->
#### 1 × Armor + 4 × Jewel → 1 × Return Exact Input Item

- Source: `cr-29cbc598805d0ff2`, row 15804.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

<!-- changes.json: cube-recipes / cr-0cad2d7284a41031 -->
#### 1 × Armor + 5 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0cad2d7284a41031`, row 15812.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 5 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (5)

<!-- changes.json: cube-recipes / cr-1dc204b31fc9b932 -->
#### 1 × Armor + 5 × Jewel → 1 × Return Exact Input Item

- Source: `cr-1dc204b31fc9b932`, row 15810.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 5 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (5)

<!-- changes.json: cube-recipes / cr-2e66465a19bdb903 -->
#### 1 × Armor + 6 × Jewel → 1 × Return Exact Input Item

- Source: `cr-2e66465a19bdb903`, row 15818.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Crafted Item
  - 6 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (6)

<!-- changes.json: cube-recipes / cr-682b062d0686410c -->
#### 1 × Armor + 6 × Jewel → 1 × Return Exact Input Item

- Source: `cr-682b062d0686410c`, row 15820.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Armor
    - Ingredient requirement: Unique Item
  - 6 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (6)

<!-- changes.json: cube-recipes / cr-0f6a2466e864ef12 -->
#### 1 × Helm + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-0f6a2466e864ef12`, row 15746.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Crafted Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

<!-- changes.json: cube-recipes / cr-367993d0f2c74895 -->
#### 1 × Helm + 1 × Jewel → 1 × Return Exact Input Item

- Source: `cr-367993d0f2c74895`, row 15748.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Unique Item
  - 1 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (1)

<!-- changes.json: cube-recipes / cr-089c8b78e8cbb0b5 -->
#### 1 × Helm + 2 × Jewel → 1 × Return Exact Input Item

- Source: `cr-089c8b78e8cbb0b5`, row 15754.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Crafted Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

<!-- changes.json: cube-recipes / cr-e876b510ee107156 -->
#### 1 × Helm + 2 × Jewel → 1 × Return Exact Input Item

- Source: `cr-e876b510ee107156`, row 15756.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Unique Item
  - 2 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (2)

<!-- changes.json: cube-recipes / cr-4767fd14a420ec76 -->
#### 1 × Helm + 3 × Jewel → 1 × Return Exact Input Item

- Source: `cr-4767fd14a420ec76`, row 15762.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Crafted Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

<!-- changes.json: cube-recipes / cr-f4dd5cec2b9e5215 -->
#### 1 × Helm + 3 × Jewel → 1 × Return Exact Input Item

- Source: `cr-f4dd5cec2b9e5215`, row 15764.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Unique Item
  - 3 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (3)

<!-- changes.json: cube-recipes / cr-b9da5b43f7aaa784 -->
#### 1 × Helm + 4 × Jewel → 1 × Return Exact Input Item

- Source: `cr-b9da5b43f7aaa784`, row 15772.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Unique Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

<!-- changes.json: cube-recipes / cr-eb10a45a2185f15b -->
#### 1 × Helm + 4 × Jewel → 1 × Return Exact Input Item

- Source: `cr-eb10a45a2185f15b`, row 15770.
- Crafting category or notes: Socket Punch Recipe
- Required ingredients:
  - 1 × Helm
    - Ingredient requirement: Crafted Item
  - 4 × Jewel
    - Ingredient requirement: Unique Item
- Results:
  - A: 1 × Return Exact Input Item
    - Socketed (4)

## Sunder Item Crafting Recipe

### Added recipe definitions

<!-- changes.json: cube-recipes / cr-4e164a33023e71f2 -->
#### 1 × Gem Bag + 1 × Latent Black Cleft + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Jade Facet

- Source: `cr-4e164a33023e71f2`, row 448.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-bcb070790715d5fb -->
#### 1 × Gem Bag + 1 × Latent Black Cleft + 2 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Heaven Facet

- Source: `cr-bcb070790715d5fb`, row 449.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-192f27b85b9cba54 -->
#### 1 × Gem Bag + 1 × Latent Bone Break + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Star Facet

- Source: `cr-192f27b85b9cba54`, row 447.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-f7949138a6767562 -->
#### 1 × Gem Bag + 1 × Latent Cold Rupture + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Winter Facet

- Source: `cr-f7949138a6767562`, row 443.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-7a1678d8e3b412ef -->
#### 1 × Gem Bag + 1 × Latent Crack of the Heavens + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Spring Facet

- Source: `cr-7a1678d8e3b412ef`, row 445.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-b5d89e46692f34a9 -->
#### 1 × Gem Bag + 1 × Latent Flame Rift + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Summer Facet

- Source: `cr-b5d89e46692f34a9`, row 444.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-4ebafc239d50af51 -->
#### 1 × Gem Bag + 1 × Latent Rotting Fissure + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Autumn Facet

- Source: `cr-4ebafc239d50af51`, row 446.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-db805b37c905704b -->
#### 1 × Latent Black Cleft + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Southern Worldstone Shard + 1 × Deep Worldstone Shard + 1 × Northern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Black Cleft

- Source: `cr-db805b37c905704b`, row 421.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-c47b187a735332d8 -->
#### 1 × Latent Bone Break + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Northern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Bone Break

- Source: `cr-c47b187a735332d8`, row 420.
- Crafting category or notes: Sunder Item Crafting Recipe
- Required ingredients:
  - 1 × Latent Bone Break
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Northern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Bone Break

<!-- changes.json: cube-recipes / cr-feea0ae3eded2543 -->
#### 1 × Latent Cold Rupture + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Eastern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Cold Rupture

- Source: `cr-feea0ae3eded2543`, row 417.
- Crafting category or notes: Sunder Item Crafting Recipe
- Required ingredients:
  - 1 × Latent Cold Rupture
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Eastern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Cold Rupture

<!-- changes.json: cube-recipes / cr-8fbfd52d8f62a9e5 -->
#### 1 × Latent Crack of the Heavens + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Southern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Crack of the Heavens

- Source: `cr-8fbfd52d8f62a9e5`, row 418.
- Crafting category or notes: Sunder Item Crafting Recipe
- Required ingredients:
  - 1 × Latent Crack of the Heavens
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Southern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Crack of the Heavens

<!-- changes.json: cube-recipes / cr-4a5288ad23a14d1a -->
#### 1 × Latent Flame Rift + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Deep Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Flame Rift

- Source: `cr-4a5288ad23a14d1a`, row 419.
- Crafting category or notes: Sunder Item Crafting Recipe
- Required ingredients:
  - 1 × Latent Flame Rift
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Deep Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Flame Rift

<!-- changes.json: cube-recipes / cr-2ffaaa0c091a21db -->
#### 1 × Latent Rotting Fissure + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Western Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Rotting Fissure

- Source: `cr-2ffaaa0c091a21db`, row 416.
- Crafting category or notes: Sunder Item Crafting Recipe
- Required ingredients:
  - 1 × Latent Rotting Fissure
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Western Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Rotting Fissure

### Removed recipe definitions

<!-- changes.json: cube-recipes / cr-8700e732566389c3 -->
#### 1 × Gem Bag + 1 × Latent Black Cleft + 2 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Heaven Facet

- Source: `cr-8700e732566389c3`, row 518.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-90171cfe7f9fd0f0 -->
#### 1 × Gem Bag + 1 × Latent Bone Break + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Star Facet

- Source: `cr-90171cfe7f9fd0f0`, row 517.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-9d840edf79f3a7da -->
#### 1 × Gem Bag + 1 × Latent Cold Rupture + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Winter Facet

- Source: `cr-9d840edf79f3a7da`, row 513.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-2cac9428c66b8559 -->
#### 1 × Gem Bag + 1 × Latent Crack of the Heavens + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Spring Facet

- Source: `cr-2cac9428c66b8559`, row 515.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-921ce6cf84c09abf -->
#### 1 × Gem Bag + 1 × Latent Flame Rift + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Summer Facet

- Source: `cr-921ce6cf84c09abf`, row 514.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-470c12b114b7dbc7 -->
#### 1 × Gem Bag + 1 × Latent Rotting Fissure + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Autumn Facet

- Source: `cr-470c12b114b7dbc7`, row 516.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-5e92e67c91d609a5 -->
#### 1 × Latent Black Cleft + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Southern Worldstone Shard + 1 × Deep Worldstone Shard + 1 × Northern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Black Cleft

- Source: `cr-5e92e67c91d609a5`, row 491.
- Crafting category or notes: Sunder Item Crafting Recipe
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

<!-- changes.json: cube-recipes / cr-90c07dea8279432e -->
#### 1 × Latent Bone Break + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Northern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Bone Break

- Source: `cr-90c07dea8279432e`, row 490.
- Crafting category or notes: Sunder Item Crafting Recipe
- Required ingredients:
  - 1 × Latent Bone Break
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Northern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Bone Break

<!-- changes.json: cube-recipes / cr-300049d782618ef9 -->
#### 1 × Latent Cold Rupture + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Eastern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Cold Rupture

- Source: `cr-300049d782618ef9`, row 487.
- Crafting category or notes: Sunder Item Crafting Recipe
- Required ingredients:
  - 1 × Latent Cold Rupture
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Eastern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Cold Rupture

<!-- changes.json: cube-recipes / cr-8c03d254fd1705a1 -->
#### 1 × Latent Crack of the Heavens + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Southern Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Crack of the Heavens

- Source: `cr-8c03d254fd1705a1`, row 488.
- Crafting category or notes: Sunder Item Crafting Recipe
- Required ingredients:
  - 1 × Latent Crack of the Heavens
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Southern Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Crack of the Heavens

<!-- changes.json: cube-recipes / cr-e92c2df263624022 -->
#### 1 × Latent Flame Rift + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Deep Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Flame Rift

- Source: `cr-e92c2df263624022`, row 489.
- Crafting category or notes: Sunder Item Crafting Recipe
- Required ingredients:
  - 1 × Latent Flame Rift
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Deep Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Flame Rift

<!-- changes.json: cube-recipes / cr-9faed0b3028a9357 -->
#### 1 × Latent Rotting Fissure + 1 × Sur Rune (#29) + 1 × Jewel + 1 × Western Worldstone Shard + 1 × Orb of Conversion → 1 × Renewed Rotting Fissure

- Source: `cr-9faed0b3028a9357`, row 486.
- Crafting category or notes: Sunder Item Crafting Recipe
- Required ingredients:
  - 1 × Latent Rotting Fissure
  - 1 × Sur Rune (#29)
  - 1 × Jewel
    - Ingredient requirement: Unique Item
  - 1 × Western Worldstone Shard
  - 1 × Orb of Conversion
- Results:
  - A: 1 × Renewed Rotting Fissure

## Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item

### Confirmed matched modifications

<!-- changes.json: cube-recipes / cr-61f6b76e87210df4 -->
#### 1 × Annihilus + 3 × Orb of Assemblage → 1 × Return Exact Input Item

- Source: `cr-61f6b76e87210df4`, row 633.
- Removed output property (A): +1% to Experience Gained

<!-- changes.json: cube-recipes / cr-ed745f89d6411d14 -->
#### 1 × Annihilus + 3 × Orb of Conversion → 1 × Return Exact Input Item

- Source: `cr-ed745f89d6411d14`, row 635.
- Removed output property (A): +1% to Experience Gained

<!-- changes.json: cube-recipes / cr-69ce8debb478e519 -->
#### 1 × Annihilus + 3 × Orb of Corruption → 1 × Return Exact Input Item

- Source: `cr-69ce8debb478e519`, row 634.
- Removed output property (A): +1% to Experience Gained

<!-- changes.json: cube-recipes / cr-a3e9b657e7805847 -->
#### 1 × Annihilus + 3 × Orb of Infusion → 1 × Return Exact Input Item

- Source: `cr-a3e9b657e7805847`, row 632.
- Removed output property (A): +1% to Experience Gained

### Added recipe definitions

<!-- changes.json: cube-recipes / cr-22c6bf2f19ba1ea7 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-22c6bf2f19ba1ea7`, row 625.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-4df473077ba1fbd6 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-4df473077ba1fbd6`, row 626.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-919ab3cac2754a29 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-919ab3cac2754a29`, row 627.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-9e39b29639ece900 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-9e39b29639ece900`, row 628.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-d8d6aa7e2cd89b23 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-d8d6aa7e2cd89b23`, row 629.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

### Removed recipe definitions

<!-- changes.json: cube-recipes / cr-12c2e73d2e74ecbf -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-12c2e73d2e74ecbf`, row 653.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-389c4ac43ddbaa5b -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-389c4ac43ddbaa5b`, row 649.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-4b3e3485ce0cacfd -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-4b3e3485ce0cacfd`, row 651.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-5d1a77195ed91f03 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-5d1a77195ed91f03`, row 657.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-5e3172ef5aa49ce1 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-5e3172ef5aa49ce1`, row 655.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-a9b183358fd6c418 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-a9b183358fd6c418`, row 656.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-c6d033a352bb218e -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-c6d033a352bb218e`, row 654.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-d1ccbe75b41cace4 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-d1ccbe75b41cace4`, row 652.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

<!-- changes.json: cube-recipes / cr-f02f2573aa57998a -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Return Exact Input Item

- Source: `cr-f02f2573aa57998a`, row 650.
- Crafting category or notes: Uber Charm Upgrade Recipe / Item Enchantment Recipe / Socket Item
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

## Uber Charm Upgrade Recipe / Socket Item

### Added recipe definitions

<!-- changes.json: cube-recipes / cr-a6fde749ac7aa932 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Obsidian Beacon

- Source: `cr-a6fde749ac7aa932`, row 630.
- Crafting category or notes: Uber Charm Upgrade Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Obsidian Beacon
- **Review:** Recipe operation fields (Op=18, Param=419, Value=5) are present; their gameplay meaning has not been verified.

### Removed recipe definitions

<!-- changes.json: cube-recipes / cr-4ef9cbd5a1ebb612 -->
#### 1 × Hellfire Torch + 1 × Orb of Corruption + 1 × Standard of Heroes → 1 × Obsidian Beacon

- Source: `cr-4ef9cbd5a1ebb612`, row 658.
- Crafting category or notes: Uber Charm Upgrade Recipe / Socket Item
- Required ingredients:
  - 1 × Hellfire Torch
  - 1 × Orb of Corruption
  - 1 × Standard of Heroes
- Results:
  - A: 1 × Obsidian Beacon
- **Review:** Recipe operation fields (Op=18, Param=420, Value=9) are present; their gameplay meaning has not been verified.

## Other recipes

### Confirmed matched modifications

<!-- changes.json: cube-recipes / cr-89cb53ab93f59a36 -->
#### 1 × Amulet + 1 × Amethyst + 1 × Topaz + 1 × Sapphire + 1 × Emerald + 1 × Ruby + 1 × Diamond → 1 × Amulet

- Source: `cr-89cb53ab93f59a36`, row 470.
- Added result requirement (A): Force Prefix (381)
- Removed result requirement (A): Force Prefix (387)

### Added recipe definitions

<!-- changes.json: cube-recipes / cr-eb912f164b3d580d -->
#### 1 × Any Weapon + 1 × Ruby + 4 × Healing Potion → 1 × Use Input Item Type

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

<!-- changes.json: cube-recipes / cr-d1c7d1a4540fc357 -->
#### 1 × Axe \[N\] + 1 × Knife → 1 × Throwing Axe \[N\]

- Source: `cr-d1c7d1a4540fc357`, row 475.
- Required ingredients:
  - 1 × Axe \[N\]
  - 1 × Knife
- Results:
  - A: 1 × Throwing Axe \[N\]
    - Result requirement: Normal Item

<!-- changes.json: cube-recipes / cr-0ce01d6a9a6ff61f -->
#### 1 × Gem Bag + 1 × Jewel → 1 × Return Gem Bag, Update Gem Credits / 1 × Jewel

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

<!-- changes.json: cube-recipes / cr-a372dddc34a796e6 -->
#### 1 × Knife + 1 × Diamond + 1 × Staff + 1 × Belt → 1 × Polearm

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

<!-- changes.json: cube-recipes / cr-310c44ef3f7155f8 -->
#### 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Dem Rune (#38)

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

<!-- changes.json: cube-recipes / cr-8990e74651091c7f -->
#### 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Dem Rune (#38)

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

<!-- changes.json: cube-recipes / cr-51c845edffb08e29 -->
#### 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Grit Rune (#37)

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

<!-- changes.json: cube-recipes / cr-db35b745d80cbd7b -->
#### 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Grit Rune (#37)

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

<!-- changes.json: cube-recipes / cr-05822107b6436d5c -->
#### 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Hev Rune (#39)

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

<!-- changes.json: cube-recipes / cr-f33e96e5e9049545 -->
#### 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item / 1 × Orb of Shadows / 1 × Hev Rune (#39)

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

<!-- changes.json: cube-recipes / cr-6a8e3f20e71664cc -->
#### 1 × Ring + 1 × Emerald + 1 × Antidote Potion → 1 × Ring

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

<!-- changes.json: cube-recipes / cr-8c6c50c60700233d -->
#### 1 × Ring + 1 × Ruby + 1 × Exploding Potion → 1 × Ring

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

<!-- changes.json: cube-recipes / cr-628aec07d7247a4d -->
#### 1 × Ring + 1 × Sapphire + 1 × Thawing Potion → 1 × Ring

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

<!-- changes.json: cube-recipes / cr-11df7400a1def6f8 -->
#### 1 × Ring + 1 × Topaz + 1 × rvs \[\] (translation template unsupported; review) (**Review: translation unavailable or unsupported.**) → 1 × Ring

- Source: `cr-11df7400a1def6f8`, row 473.
- Required ingredients:
  - 1 × Ring
    - Ingredient requirement: Magic Item
  - 1 × Topaz
  - 1 × rvs \[\] (translation template unsupported; review) (**Review: translation unavailable or unsupported.**)
- Results:
  - A: 1 × Ring
    - Result requirement: Magic Item
    - Result requirement: Force Prefix (365)

<!-- changes.json: cube-recipes / cr-88202d9134faf824 -->
#### 1 × Spear + 1 × Arrows → 1 × Javelin \[N\]

- Source: `cr-88202d9134faf824`, row 476.
- Required ingredients:
  - 1 × Spear
  - 1 × Arrows
- Results:
  - A: 1 × Javelin \[N\]
    - Result requirement: Normal Item

<!-- changes.json: cube-recipes / cr-2b5931682be51c22 -->
#### Amazon-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item

- Source: `cr-2b5931682be51c22`, row 649.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Amazon Skill Levels
    - +5% Magic Resistance

<!-- changes.json: cube-recipes / cr-abba872038c3f663 -->
#### Amazon-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item

- Source: `cr-abba872038c3f663`, row 639.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Amazon Skill Levels
    - +5% Increased Maximum Life

<!-- changes.json: cube-recipes / cr-14724f56354ab885 -->
#### Amazon-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item

- Source: `cr-14724f56354ab885`, row 659.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Amazon Skill Levels
    - +5% to All Maximum Resistances

<!-- changes.json: cube-recipes / cr-ee550d4942ca9a76 -->
#### Assassin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item

- Source: `cr-ee550d4942ca9a76`, row 655.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Assassin Skill Levels
    - +5% Magic Resistance

<!-- changes.json: cube-recipes / cr-c69b79a0cef7d6ef -->
#### Assassin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item

- Source: `cr-c69b79a0cef7d6ef`, row 645.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Assassin Skill Levels
    - +5% Increased Maximum Life

<!-- changes.json: cube-recipes / cr-d6192d4cd99f5b19 -->
#### Assassin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item

- Source: `cr-d6192d4cd99f5b19`, row 665.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Assassin Skill Levels
    - +5% to All Maximum Resistances

<!-- changes.json: cube-recipes / cr-9bc546aac10e36b6 -->
#### Barbarian-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item

- Source: `cr-9bc546aac10e36b6`, row 653.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Barbarian Skill Levels
    - +5% Magic Resistance

<!-- changes.json: cube-recipes / cr-740bb3024d3b732f -->
#### Barbarian-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item

- Source: `cr-740bb3024d3b732f`, row 643.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Barbarian Skill Levels
    - +5% Increased Maximum Life

<!-- changes.json: cube-recipes / cr-838966ae57e2f759 -->
#### Barbarian-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item

- Source: `cr-838966ae57e2f759`, row 663.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Barbarian Skill Levels
    - +5% to All Maximum Resistances

<!-- changes.json: cube-recipes / cr-80dbea30849ef79e -->
#### Druid-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item

- Source: `cr-80dbea30849ef79e`, row 654.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Druid Skill Levels
    - +5% Magic Resistance

<!-- changes.json: cube-recipes / cr-114d860ef4f8ea07 -->
#### Druid-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item

- Source: `cr-114d860ef4f8ea07`, row 644.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Druid Skill Levels
    - +5% Increased Maximum Life

<!-- changes.json: cube-recipes / cr-3f96881d54055601 -->
#### Druid-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item

- Source: `cr-3f96881d54055601`, row 664.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Druid Skill Levels
    - +5% to All Maximum Resistances

<!-- changes.json: cube-recipes / cr-cd2f480f66f2d777 -->
#### Necromancer-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item

- Source: `cr-cd2f480f66f2d777`, row 651.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Necromancer Skill Levels
    - +5% Magic Resistance

<!-- changes.json: cube-recipes / cr-3e12ea1b692a2d8e -->
#### Necromancer-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item

- Source: `cr-3e12ea1b692a2d8e`, row 641.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Necromancer Skill Levels
    - +5% Increased Maximum Life

<!-- changes.json: cube-recipes / cr-0fc9e80d0a1dc194 -->
#### Necromancer-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item

- Source: `cr-0fc9e80d0a1dc194`, row 661.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Necromancer Skill Levels
    - +5% to All Maximum Resistances

<!-- changes.json: cube-recipes / cr-6e037132c1e7e5be -->
#### Paladin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item

- Source: `cr-6e037132c1e7e5be`, row 652.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Paladin Skill Levels
    - +5% Magic Resistance

<!-- changes.json: cube-recipes / cr-fe750d113241d827 -->
#### Paladin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item

- Source: `cr-fe750d113241d827`, row 642.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Paladin Skill Levels
    - +5% Increased Maximum Life

<!-- changes.json: cube-recipes / cr-2cbe0f1f914e4421 -->
#### Paladin-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item

- Source: `cr-2cbe0f1f914e4421`, row 662.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Paladin Skill Levels
    - +5% to All Maximum Resistances

<!-- changes.json: cube-recipes / cr-bed008cc7005f9ed -->
#### Sorceress-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item

- Source: `cr-bed008cc7005f9ed`, row 650.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Sorceress Skill Levels
    - +5% Magic Resistance

<!-- changes.json: cube-recipes / cr-b8d2ace0dd9f0bf8 -->
#### Sorceress-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item

- Source: `cr-b8d2ace0dd9f0bf8`, row 640.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Sorceress Skill Levels
    - +5% Increased Maximum Life

<!-- changes.json: cube-recipes / cr-016a68ca1330774a -->
#### Sorceress-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item

- Source: `cr-016a68ca1330774a`, row 660.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Sorceress Skill Levels
    - +5% to All Maximum Resistances

<!-- changes.json: cube-recipes / cr-d727f1b5b831739f -->
#### Warlock-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Dem Rune (#38) → 1 × Return Exact Input Item

- Source: `cr-d727f1b5b831739f`, row 656.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Dem Rune (#38)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Warlock Skills
    - +5% Magic Resistance

<!-- changes.json: cube-recipes / cr-fcb30773b8ba9126 -->
#### Warlock-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Grit Rune (#37) → 1 × Return Exact Input Item

- Source: `cr-fcb30773b8ba9126`, row 646.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Grit Rune (#37)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Warlock Skills
    - +5% Increased Maximum Life

<!-- changes.json: cube-recipes / cr-ed3553c7ae130cfc -->
#### Warlock-only recipe: 1 × Relic of the Ancients + 1 × Orb of Shadows + 1 × Hev Rune (#39) → 1 × Return Exact Input Item

- Source: `cr-ed3553c7ae130cfc`, row 666.
- Required ingredients:
  - 1 × Relic of the Ancients
  - 1 × Orb of Shadows
  - 1 × Hev Rune (#39)
- Results:
  - A: 1 × Return Exact Input Item
    - +1 to Warlock Skills
    - +5% to All Maximum Resistances

