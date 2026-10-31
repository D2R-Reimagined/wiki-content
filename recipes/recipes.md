---
title: Recipes
description: Cube Recipes, Enchants, and Crafting recipes
published: true
date: 2026-10-22T22:47:00.394Z
tags: enchant, sunder, sunder charms, craft, crafting, heaven facet, rainbow facet, crafted charms, fire facet, cold facet, lightning facet, poison facet, gem, reroll, recycle, uptier, base upgrade, repair, recharge, spirits, souls, cube, cube recipes, horadric, portal, cow portal, jewel, gem cluster, upgrades, item upgrades, enchanting, stat increase, facet, recipes, enchants, wirt, wirts leg, wirt's leg
editor: markdown
dateCreated: 2026-04-05T02:57:13.104Z
---

# Recipes in Reimagined
This page contains all current Reimagined recipes:

- **Cube Recipes:** Convert, upgrade, repair, reroll, and recycle items.
- **Item Enchants:** Add stats to existing equipment.
- **Item Crafting:** Create new magic, rare, unique, and crafted items.

> **Important:** Many vanilla recipes were removed. If a recipe is not on this page or the website's list of recipes [here](https://www.d2r-reimagined.com/data/cube-recipes), it does not exist in the mod.

## Contents

- [Cube Recipes](#cube-recipes)
	- [Socket Recipes](#socket-recipes)
	- [Unsocket Recipes](#unsocket-recipes)
	- [Conversion Recipes](#conversion-recipes)
	- [Recycle Recipes](#recycle-recipes)
	- [Reroll Recipes](#reroll-recipes)
	- [Regenerate (Divine Orb) Recipes](#regenerate-divine-orb-recipes)
	- [Orb Quality Conversion Recipes](#orb-quality-conversion-recipes)
	- [Base Upgrade Recipes](#armor--weapon-base-upgrade-recipes)
	- [Repair Recipes](#repair-recipes)
	- [Portal Recipes](#portal-recipes)
- [Item Enchant System](#item-enchant-system)
	- [Enchant Recipes](#amulets)
- [Item Crafting System](#item-crafting-system)
	- [Crafting Recipes](#amulets-1)
	- [Jewels](#jewels)
	- [Charms](#charms)
	- [Sunder Charms](#sunder-charms)

## How to Read the Tables

- Start with the item in the first column, then add the reagents from left to right.
- The `=` column separates the recipe inputs from the result.
- Empty cells mean no reagent is required in that position.
- Multiple lines in one cell describe alternatives or multiple resulting stats.
- Within each recipe section, entries run approximately from **least to most expensive** by required materials, rune tiers, and ingredient quantities (not player trade prices).

| Term | Meaning |
| --- | --- |
| `plvl` | The result's level is based on the character's level. |
| `ilvl` | The result's level is based on the input item's level. |
| `CTC` | Chance to Cast. |
| `oskill` | A skill usable by any class. |



# Cube Recipes    

Horadric Cube recipes that players may find useful on their journeys.

**Sections:** [Sockets](#socket-recipes) | [Unsocket](#unsocket-recipes) | [Conversion](#conversion-recipes) | [Recycle](#recycle-recipes) | [Reroll](#reroll-recipes) | [Regenerate](#regenerate-divine-orb-recipes) | [Orb Quality Conversion](#orb-quality-conversion-recipes) | [Base Upgrades](#armor--weapon-base-upgrade-recipes) | [Repair](#repair-recipes) | [Uber Charm Upgrades](#uber-charm-and-relic-upgrades) | [Portals](#portal-recipes)

## Socket Recipes

- **Can use:** Weapons, Shields, Body Armor, and Helms.
- **Cannot use:** Jewelry, Belts, Gloves, and Boots.
- **Socket limit:** Depends on item level and the base. Check the [maximum socket count for each base](https://www.d2r-reimagined.com/data/bases) before punching sockets.
<br> 
  
| **Reagent 1** | **Reagent 2** | **=** | **Outcome** |
| :--- | :--- | :--- | :--- |
| Item (White)  <br>OR  <br>Item (Magic) | \# Magic Jewels | \=  | \# Sockets |
| Item (Rare)  <br>OR  <br>Item (Set) | \# Rare Jewels | \=  | \# Sockets |
| Item | Orb of Socketing | \=  | #-# Sockets (Random) **\*** |
| Item (Unique)  <br>OR  <br>Item (Crafted) | \# Unique Jewels | \=  | \# Sockets |

**\*Based on item's level and max number of sockets**
**\*Orb of Socketing can always be used if sockets are already present, it will randomly reroll a new amount.**
- Example of socket punching with jewels: weapon with 3 socket currently that can have 4 or more sockets cubed with 4 jewels = item with 4 sockets

## Unsocket Recipes

- **Rune Pliers:** Remove runes from Runewords. Pliers can be bought from Blacksmithing vendors in all acts.
- **Jewel Pliers:** Remove jewels from non-Runeword socketed items.
- The socket count remains unchanged, and the removed runes or jewels are returned.
 

| **Reagent 1** | **Reagent 2** | **=** | **Outcome** |
| :--- | :--- | :--- | :--- |
| Runeword | Rune Pliers | \=  | Base Item<br><br>Runes |
| Socketed Item | Jewel Pliers **\*** | \=  | Base Item<br><br>Socketed Items |

**\*Does not work on runewords**

## Conversion Recipes

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **=** | **Output** |
| :--- | :--- | :--- | :--- | :--- |
| Healing Potion  <br>(Any) | Gem (Any) | | \= | Rejuvenation Potion |
| 3 Rejuvenation Potions | | | \= | Full Rejuvenation Potion |
| Healing Potion  <br>(Any) | 3 Gems (Any) | | \= | Full Rejuvenation Potion |
| Healing Potion  <br>(Any) | Gem Bag (3 Gems) | | \= | Full Rejuvenation Potion |
| Stacked Rune (Qty ≥ 2) | TP Tome \* | | \= | 1 Rune Higher<br><br>Stack Qty - 2 |
| 1 Unstacked Rune | ID Tome \* | | \= | 1 Rune Lower |
| Stacked Rune (Qty ≥ 1) | ID Tome \* | | \= | 1 Rune Lower<br><br>Stack Qty - 1 |
| Armor / Weapon / Shield  <br>(Any) | EL Rune | HEL Rune | \= | Becomes White Base Item<br><br>**Item is regenerated as a new white item. <br>Enchants/Corruption wiped.** |
| 2 Unstacked Runes | TP Tome \* | | \= | 1 Rune Higher |
| 9 Magic Jewels | | | \= | Rare Jewel |
| Standard of Heroes <br>(100% drop from Ubers) | TP Tome \* | | \= | Standard of Terror <br><br>**Selling this to any vendor spawns DClone <br>in place of next Super Unique monster** <br>(sells just like SOJ) |
| 6 Rare Jewels | | | \= | Unique Jewel |
| 9 Unstacked Runes | | | \= | 1 Rune 3 Levels Higher |
| Armor / Weapon / Shield  <br>**_DOES NOT WORK ON:_** <br>Indestructible items<br>Bows or Crossbows<br>Items without Durability | Unique Jewel | OHM Rune | \= | Ethereal Item |
| Uber Spirits (1 of each) | | | \= | Hellfire Torch |
| Weapon / Torso / Shield  <br>(Any) | Orb of Infusion | Uber Spirits (1 of each) | \= | Becomes White, Superior, Max Socket, Elite Base<br><br>+15% Enhanced Weapon Damage (Weapons)<br><br>+15% Enhanced Defense (Torso, Shield)<br>**Item is regenerated as a new white item. <br>Enchants/Corruption wiped.** |
| 5 Orb of Infusion | Uber Spirits (1 of each) | | \= | Orb of Conversion |

| | | | | **Item is upgraded to or remains Elite, and can gain superior modifiers in addition to the granted modifiers.** <br>**_This recipe no longer stacks on items._** |


**\* Tome is returned full**

## Orb Quality Conversion Recipes

These recipes change item quality. **A single orb is not a Divine Orb regeneration recipe.** The eligible item qualities and types below follow the current recipe export.

| Input item | Reagent | Output |
| --- | --- | --- |
| Magic Armor | Orb of Infusion | New Rare Armor |
| Magic Weapon | Orb of Infusion | New Rare Weapon |
| Rare Amulet | Orb of Infusion | New Rare Amulet |
| Rare Armor | Orb of Infusion | New Rare Armor |
| Rare Arrows | Orb of Infusion | Rare Arrows |
| Rare Bolts | Orb of Infusion | Rare Bolts |
| Rare Ring | Orb of Infusion | New Rare Ring |
| Rare Weapon | Orb of Infusion | New Rare Weapon |
| Magic Amulet | Orb of Assemblage | Set Amulet |
| Magic Armor | Orb of Assemblage | New Set Armor |
| Magic Ring | Orb of Assemblage | Set Ring |
| Magic Weapon | Orb of Assemblage | New Set Weapon |
| Normal Quality Armor | Orb of Assemblage | New Set Armor |
| Normal Quality Weapon | Orb of Assemblage | New Set Weapon |
| Set Amulet | Orb of Assemblage | Set Amulet |
| Set Armor | Orb of Assemblage | New Set Armor |
| Set Ring | Orb of Assemblage | Set Ring |
| Set Weapon | Orb of Assemblage | New Set Weapon |
| Superior Armor | Orb of Assemblage | New Set Armor |
| Superior Weapon | Orb of Assemblage | New Set Weapon |
| Magic Amulet | Orb of Conversion | Unique Amulet |
| Magic Armor | Orb of Conversion | New Unique Armor |
| Magic Arrows | Orb of Conversion | Unique Arrows |
| Magic Bolts | Orb of Conversion | Unique Bolts |
| Magic Ring | Orb of Conversion | Unique Ring |
| Magic Weapon | Orb of Conversion | New Unique Weapon |
| Normal Quality Armor | Orb of Conversion | New Unique Armor |
| Normal Quality Arrows | Orb of Conversion | Unique Arrows |
| Normal Quality Bolts | Orb of Conversion | Unique Bolts |
| Normal Quality Weapon | Orb of Conversion | New Unique Weapon |
| Superior Armor | Orb of Conversion | New Unique Armor |
| Superior Weapon | Orb of Conversion | New Unique Weapon |
| Unique Amulet | Orb of Conversion | Unique Amulet |
| Unique Armor | Orb of Conversion | New Unique Armor |
| Unique Arrows | Orb of Conversion | Unique Arrows |
| Unique Bolts | Orb of Conversion | Unique Bolts |
| Unique Ring | Orb of Conversion | Unique Ring |
| Unique Weapon | Orb of Conversion | New Unique Weapon |

**The original input's base type is retained where the output specifies the same base type.**

## Recycle Recipes

| **Reagent 1** | **Reagent 2** | **=** | **Output** |
| :--- | :--- | :--- | :--- |
| Any 5 Set Weapons/**Armors**** | ID Tome **\*** | \=  | Gem Cluster |
| Any 5 Unique Weapons/**Armors****/**Ammo***** | ID Tome **\*** | \=  | Gem Cluster |
| 3 Set Rings  <br>OR  <br>3 Set Amulets | ID Tome **\*** | \=  | Rare Jewel |
| 3 Unique Rings  <br>OR  <br>3 Unique Amulets | ID Tome **\*** | \=  | Rare Jewel |

**\*Tome is returned full**  
**\*\*5 gloves, 5 boots, 5 chests, etc.**  
**\*\*\*Arrows or Bolts**

## Reroll Recipes

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **=** | **Output** |
| :--- | :--- | :--- | :--- | :--- |
| Magic Charm | Gem Bag (3 Gems) | | \= | New Magic Charm (100% plvl) |
| Magic Jewelry | Gem Bag (3 Gems) | | \= | New Magic Jewelry(100% plvl) |
| 3 Magic Jewelry  <br>(same type) | | | \= | New Magic Jewelry (100% plvl) |
| 3 Magic Charms  <br>(same size) | | | \= | New Magic Charm (100% plvl) |
| Magic Jewel | Gem Bag (3 Gems) | | \= | New Magic Jewel (100% plvl) |
| Rare Jewel | Gem Bag (10 Gems) | | \= | New Rare Jewel (100% plvl) |
| 3 Rare Jewelry  <br>(same type) | | | \= | New Rare Jewelry(100% plvl) |
| Rare Jewelry | Gem Bag (20 Gems) | | \= | New Rare Jewelry(100% plvl) |
| Western Worldstone Shard | Tome of Town Portal | | \= | Eastern Worldstone Shard |
| Eastern Worldstone Shard | Tome of Town Portal | | \= | Southern Worldstone Shard |
| Southern Worldstone Shard | Tome of Town Portal | | \= | Deep Worldstone Shard |
| Deep Worldstone Shard| Tome of Town Portal | | \= | Northern Worldstone Shard|
| Northern Worldstone Shard | Tome of Town Portal | | \= | Western Worldstone Shard |
| Set Jewelry | Gem Bag (50 Gems) | | \= | New Set Jewelry(100% plvl) |
| Key of Terror | Orb of Corruption | TP Tome **\*** | \= | Key of Hate |
| Key of Terror | Orb of Corruption | ID Tome **\*** | \= | Key of Destruction |
| Key of Hate | Orb of Corruption | TP Tome **\*** | \= | Key of Destruction |
| Key of Hate | Orb of Corruption | ID Tome **\*** | \= | Key of Terror |
| Key of Destruction | Orb of Corruption | TP Tome **\*** | \= | Key of Terror |
| Key of Destruction | Orb of Corruption | ID Tome **\*** | \= | Key of Hate |
| Unique Jewelry | Gem Bag (50 Gems) | | \= | New Unique Jewelry(100% plvl) |
| Eastern Worldstone Shard | Any Statue | | \= | Korlic's Pain Statue |
| Western Worldstone Shard | Any Statue | | \= | Talic's Anguish Statue |
| Southern Worldstone Shard | Any Statue | | \= | Madawc's Ire Statue |
| Deep Worldstone Shard | Any Statue | | \= | Bul-Kathos' Nightmare Statue |
| Northern Worldstone Shard | Any Statue | | \= | Worusk's End Statue |
| 3 Unique Latent Sunder Charms | | | \= | New Latent Sunder Charm (Random Element) |
| Unique Jewel | Gem Bag (50 Gems) | | \= | New Unique Jewel (100% ilvl) |

100% plvl = item's level is based 100% on character's level  
100% ilvl = item's level is based 100% on input item's level

**\*Tome is returned full**  

## Regenerate (Divine Orb) Recipes

These recipes **regenerate** the item (similar to a Divine Orb), rather than performing an ordinary reroll. Regeneration resets existing modifiers and removes corruption and upgrades. If an item has been base-upgraded, the new result may instead roll as a different item eligible for that base.

| Input item | Orb | Additional reagents | Result |
| --- | --- | --- | --- |
| Set Armor, Weapon, Ring, or Amulet | **1× Orb of Assemblage** | **5× Orb of Renewal** | Regenerated Set item |
| Unique Armor, Weapon, Ring, Amulet, Arrows, or Bolts | **1× Orb of Conversion** | **5× Orb of Renewal** | Regenerated Unique item |
| Set Armor, Weapon, Ring, or Amulet | **1× Orb of Corruption** | **Mephisto's Animus + Baal's Calamity + Diablo's Ire** | Regenerated Set item |
| Unique Armor, Weapon, Ring, Amulet, Arrows, or Bolts | **1× Orb of Corruption** | **Mephisto's Animus + Baal's Calamity + Diablo's Ire** | Regenerated Unique item |

> The comparison export calls this output `Regenerate Unique (Reroll if Base Upgraded)`, including for some Set inputs. The table uses **Set** or **Unique** according to the actual input recipe; the base-upgraded caveat still applies.

<a id="armor--weapon-base-upgrade-recipes"></a>
## Armor & Weapon Base Upgrade Recipes

### Armor

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **=** | **Output** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Rare Armor  <br>(Normal) | RAL Rune | THUL Rune | Amethyst | \=  | Rare Armor  <br>(Exceptional) |
| Set Armor  <br>(Normal) | TAL Rune | SHAEL Rune | Diamond | \=  | Set Armor  <br>(Exceptional) |
| Unique Armor  <br>(Normal) | TAL Rune | SHAEL Rune | Diamond | \=  | Unique Armor  <br>(Exceptional) |
| Set Armor  <br>(Exceptional) | KO Rune | LEM Rune | Diamond | \=  | Set Armor  <br>(Elite) |
| Unique Armor  <br>(Exceptional) | KO Rune | LEM Rune | Diamond | \=  | Unique Armor  <br>(Elite) |
| Rare Armor  <br>(Exceptional) | KO Rune | PUL Rune | Amethyst | \=  | Rare Armor  <br>(Elite) |

### Weapons

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **=** | **Output** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Rare Weapon  <br>(Normal) | ORT Rune | AMN Rune | Sapphire | \=  | Rare Weapon  <br>(Exceptional) |
| Set Weapon  <br>(Normal) | RAL Rune | SOL Rune | Emerald | \=  | Set Weapon  <br>(Exceptional) |
| Unique Weapon  <br>(Normal) | RAL Rune | SOL Rune | Emerald | \=  | Unique Weapon  <br>(Exceptional) |
| Set Weapon  <br>(Exceptional) | LUM Rune | PUL Rune | Emerald | \=  | Set Weapon  <br>(Elite) |
| Unique Weapon  <br>(Exceptional) | LUM Rune | PUL Rune | Emerald | \=  | Unique Weapon  <br>(Elite) |
| Rare Weapon  <br>(Exceptional) | FAL Rune | UM Rune | Sapphire | \=  | Rare Weapon  <br>(Elite) |

## Repair Recipes

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **=** | **Output** |
| :--- | :--- | :--- | :--- | :--- |
| Quiver  <br>(Any) | Healing Potion  <br>(Any) |     | \=  | Replenished Quantity |
| Bolt Case  <br>(Any) | Healing Potion  <br>(Any) |     | \=  | Replenished Quantity |
| Armor  <br>(Any) | RAL Rune | Gem (Any) | \=  | Repaired & Recharged |
| Weapon  <br>(Any) | ORT Rune | Gem (Any) | \=  | Repaired & Recharged |
| Item  <br>(Ethereal) | 2 Rare Jewels | PUL Rune | \=  | Repaired Ethereal Item |

## Uber Charm and Relic Upgrades

| Inputs | Outcome |
| --- | --- |
| Hellfire Torch + Orb of Corruption + Standard of Heroes | Upgrade the Torch: +2 to all Attributes and +2% to All Resistances (up to 6 upgrades, as reported by the new recipe export). A separate Obsidian Beacon outcome is also listed in the export. |
| Relic of the Ancients + Orb of Shadows + Grit Rune (#37) | Relic gains +1 to your Class Skill Levels and +5% Increased Maximum Life. |
| Relic of the Ancients + Orb of Shadows + Dem Rune (#38) | Relic gains +1 to your Class Skill Levels and +5% Magic Resistance. |
| Relic of the Ancients + Orb of Shadows + Hev Rune (#39) | Relic gains +1 to your Class Skill Levels and +5% to All Maximum Resistances. |

**Annihilus:** The three-orb enchantment recipes (Assemblage, Conversion, Corruption, and Infusion) no longer grant +1% experience each in the comparison export.

## Portal Recipes

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Output** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Wirt's Leg | | | | | \= | Cow Level |
| Key of Terror | Key of Hate | Key of Destruction | | | \= | Random Portal To:  <br>Matron's Den  <br>Forgotten Sands  <br>Furnace of Pain |
| Diablo's Horn | Baal's Eye | Mephisto's Brain | | | \= | Portal to Tristram (Pandemonium Finale) |
| Korlic's Pain Statue | Talic's Anguish Statue | Madawc's Ire Statue | Bul-Kathos' Nightmare Statue | Worusk's End Statue | \= | Portal to Colossal Summit (Colossal Ancients) |

[Back to contents](#contents)

<br>
<br>

___

# Item Enchant System

> All weapons, armor and jewelry can be enchanted with various additional stats a certain number of times.

**Sections:** [Amulets](#amulets) | [Rings](#rings) | [Belts](#belts) | [Boots](#boots) | [Gloves](#gloves) | [Helms](#helms) | [Shields](#shields) | [Body Armor](#body-armor) | [Weapons](#weapons)

| Item type | Maximum enchants |
| --- | :--- |
| All item types | 1 |

### Important Note

Items still respect their data size limits (e.g. +All Skills cannot go past 7).

- [D2RR Stat Limits (WIP)](https://wiki.d2r-reimagined.com/en/recipes/ISCStatLimits)

### Set Items Bug
> <span style="color:red">
> When enchanting set items you must remove all other items from that set from your character first.
>
> 1. Put related set items in shared stash. Save and Exit the game, join a new game, and then enchant your intended set item.
> 2. Rinse and repeat for any other set pieces.
> 3. Failing to do so will apply the enchant to the set bonus and will only be effective when set bonuses are active.

> </span>

## Amulets

> **Max Enchants: 1**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Amulet | Topaz |  |  |  | \=  | +10% Magic Find & +20% Gold Find |
| Amulet | Ruby |  |  |  | \=  | +20 Life & +2 Life / Kill |
| Amulet | Sapphire |  |  |  | \=  | +20 Mana & +2 Mana / Kill |
| Amulet | Emerald |  |  |  | \=  | +5 Dexterity & +5 Vitality |
| Amulet | Skull |  |  |  | \=  | +5 Energy & +5 Vitality |
| Amulet | Amethyst |  |  |  | \=  | +5 Strength & +5 Vitality |
| Amulet | Amethyst |  |  |  | \= | +5 to Strength<br>+5 to Vitality |
| Amulet | Emerald |  |  |  | \= | +5 to Dexterity<br>+5 to Vitality |
| Amulet | Ruby |  |  |  | \= | +20 to Life<br>+2 Life after each Kill |
| Amulet | Sapphire |  |  |  | \= | +20 to Mana<br>+2 Mana after each Kill |
| Amulet | Skull |  |  |  | \= | +5 to Energy<br>+5 to Vitality |
| Amulet | Topaz |  |  |  | \= | +10% Chance Items Roll Magic or Better<br>+20% Extra Gold from Monsters |
| Amulet | Ruby | TIR Rune |  |  | \=  | +15 Fire Resistance |
| Amulet | Sapphire | TIR Rune |  |  | \=  | +15 Cold Resistance |
| Amulet | Topaz | TIR Rune |  |  | \=  | +15 Lightning Resistance |
| Amulet | Emerald | TIR Rune |  |  | \=  | +15 Poison Resistance |
| Amulet | Emerald | Tir Rune |  |  | \= | +15% Poison Resistance |
| Amulet | Ruby | Tir Rune |  |  | \= | +15% Fire Resistance |
| Amulet | Sapphire | Tir Rune |  |  | \= | +15% Cold Resistance |
| Amulet | Topaz | Tir Rune |  |  | \= | +15% Lightning Resistance |
| Amulet | Topaz | Magic Jewel |  |  | \=  | +2 Random Assassin Skills |
| Amulet | Ruby | Magic Jewel |  |  | \=  | +2 Random Barbarian Skills |
| Amulet | Sapphire | Magic Jewel |  |  | \=  | +2 Random Sorceress Skills |
| Amulet | Emerald | Magic Jewel |  |  | \=  | +2 Random Druid Skills |
| Amulet | Skull | Magic Jewel |  |  | \=  | +2 Random Necromancer Skills |
| Amulet | Amethyst | Magic Jewel |  |  | \=  | +2 Random Amazon Skills |
| Amulet | Diamond | Magic Jewel |  |  | \=  | +2 Random Paladin Skills |
| Amulet | Chaos Onyx | Magic Jewel |  |  | \=  | +2 Random Warlock Skills |
| Amulet | Amethyst | Magic Jewel |  |  | \= | +2 Random Amazon Skill |
| Amulet | Chaos Onyx | Magic Jewel |  |  | \= | +2 Random Warlock Skill |
| Amulet | Diamond | Magic Jewel |  |  | \= | +2 Random Paladin Skill |
| Amulet | Emerald | Magic Jewel |  |  | \= | +2 Random Druid Skill |
| Amulet | Ruby | Magic Jewel |  |  | \= | +2 Random Barbarian Skill |
| Amulet | Sapphire | Magic Jewel |  |  | \= | +2 Random Sorceress Skill |
| Amulet | Skull | Magic Jewel |  |  | \= | +2 Random Necromancer Skill |
| Amulet | Topaz | Magic Jewel |  |  | \= | +2 Random Assassin Skill |
| Amulet | Diamond | Magic Jewel | TIR Rune |  | \=  | +5 All Resistances |
| Amulet | Diamond | Magic Jewel | Tir Rune |  | \= | +5% to All Resistances |
| 1 Amethyst <br>1 Topaz <br>1 Sapphire <br>1 Emerald <br>1 Ruby <br>1 Diamond <br>1 Magic Amulet |  |  |  |  | \=  | Prismatic Amulet |
| Amulet | Emerald | Magic Jewel | Shael Rune |  | \=  | +10% attack speed |
| Amulet | Emerald | Magic Jewel | Shael Rune |  | \= | +10% Increased Attack Speed |
| Amulet | Sapphire | Magic Jewel | Dol Rune |  | \=  | +10% faster cast rate |
| Amulet | Sapphire | Magic Jewel | Dol Rune |  | \= | +10% Faster Cast Rate |
| Amulet | Infusion Orb | Topaz | Rare Jewel |  | \=  | +25% Magic Find & +50% Gold Find |
| Amulet | Infusion Orb | Ruby | Rare Jewel |  | \=  | +40 Life & +4 Life / Kill |
| Amulet | Infusion Orb | Sapphire | Rare Jewel |  | \=  | +40 Mana & +4 Mana / Kill |
| Amulet | Orb of Infusion | Rare Jewel | Ruby |  | \= | +40 to Life<br>+4 Life after each Kill |
| Amulet | Orb of Infusion | Rare Jewel | Sapphire |  | \= | +40 to Mana<br>+4 Mana after each Kill |
| Amulet | Orb of Infusion | Rare Jewel | Topaz |  | \= | +25% Chance Items Roll Magic or Better<br>+50% Extra Gold from Monsters |
| Amulet | Orb of Infusion | Magic Jewel | Fal Rune | Amethyst | \= | +15 to Strength<br>+15 to Vitality |
| Amulet | Orb of Infusion | Magic Jewel | Fal Rune | Emerald | \= | +15 to Dexterity<br>+15 to Vitality |
| Amulet | Orb of Infusion | Magic Jewel | Fal Rune | Sapphire | \= | +15 to Energy<br>+15 to Vitality |
| Amulet | Orb of Infusion | Rare Jewel | Diamond | Um Rune | \= | +15% to All Resistances |
| Amulet | Infusion Orb | Unique Jewel |  |  | \=  | +1 Assassin Skills |
| Amulet | Infusion Orb | Unique Jewel |  |  | \=  | +1 Barbarian Skills |
| Amulet | Infusion Orb | Unique Jewel |  |  | \=  | +1 Sorceress Skills |
| Amulet | Infusion Orb | Unique Jewel |  |  | \=  | +1 Druid Skills |
| Amulet | Infusion Orb | Unique Jewel |  |  | \=  | +1 Necromancer Skills |
| Amulet | Infusion Orb | Unique Jewel |  |  | \=  | +1 Amazon Skills |
| Amulet | Infusion Orb | Unique Jewel |  |  | \=  | +1 Paladin Skills |
| Amulet | Infusion Orb | Unique Jewel |  |  | \=  | +1 Warlock Skills |
| Amulet (Amazon only) | Orb of Infusion | Unique Jewel |  |  | \= | +1 to Amazon Skill Levels |
| Amulet (Assassin only) | Orb of Infusion | Unique Jewel |  |  | \= | +1 to Assassin Skill Levels |
| Amulet (Barbarian only) | Orb of Infusion | Unique Jewel |  |  | \= | +1 to Barbarian Skill Levels |
| Amulet (Druid only) | Orb of Infusion | Unique Jewel |  |  | \= | +1 to Druid Skill Levels |
| Amulet (Necromancer only) | Orb of Infusion | Unique Jewel |  |  | \= | +1 to Necromancer Skill Levels |
| Amulet (Paladin only) | Orb of Infusion | Unique Jewel |  |  | \= | +1 to Paladin Skill Levels |
| Amulet (Sorceress only) | Orb of Infusion | Unique Jewel |  |  | \= | +1 to Sorceress Skill Levels |
| Amulet (Warlock only) | Orb of Infusion | Unique Jewel |  |  | \= | +1 to Warlock Skills |
| Amulet | Conversion Orb | Unique Jewel | Zod Rune |  | \=  | +1 all skills |
| Amulet | Orb of Conversion | Unique Jewel | Zod Rune |  | \= | +1 to All Skills |
| Amulet | Conversion Orb | Unique Jewel | Brak Rune |  | \=  | +1 all skills & -5% enemy physical resistance |
| Amulet | Orb of Conversion | Unique Jewel | Brak Rune (#34) |  | \= | +1 to All Skills<br>-5% to Enemy Physical Damage Resistance |
| Amulet | Conversion Orb | Unique Jewel | Zeph Rune |  | \=  | +1 all skills & +5% all elemental damage |
| Amulet | Orb of Conversion | Unique Jewel | Zeph Rune (#35) |  | \= | +1 to All Skills<br>+5% to All Elemental Skill Damage |
| Amulet | Conversion Orb | Unique Jewel | Myr Rune |  | \=  | +1 all skills &  -5% enemy magic resistance |
| Amulet | Orb of Conversion | Unique Jewel | Myr Rune (#36) |  | \= | +1 to All Skills<br>-5% to Enemy Magic Resistance |
| Amulet | Conversion Orb | Unique Jewel | Grit Rune |  | \=  | +1 all skills &  -5% enemy elemental resistance |
| Amulet | Orb of Conversion | Unique Jewel | Grit Rune (#37) |  | \= | +1 to All Skills<br>-5% to All Enemy Elemental Resistances |
| Amulet | Conversion Orb | Unique Jewel | Hev Rune |  | \=  | +50% Enhanced Damage &  -5% enemy physical resistance |
| Amulet | Orb of Conversion | Unique Jewel | Hev Rune (#39) |  | \= | +50% Enhanced Weapon Damage<br>-5% to Enemy Physical Damage Resistance |

## Rings
> **Max Enchants: 1**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ring | Topaz |  |  |  | \=  | +10% Magic Find  & +20% Gold Find |
| Ring | Ruby |  |  |  | \=  | +20 HP & +2 Life / Kill |
| Ring | Sapphire |  |  |  | \=  | +20 Mana & +2 Mana / Kill |
| Ring | Ruby |  |  |  | \= | +20 to Life<br>+2 Life after each Kill |
| Ring | Sapphire |  |  |  | \= | +20 to Mana<br>+2 Mana after each Kill |
| Ring | Topaz |  |  |  | \= | +10% Chance Items Roll Magic or Better<br>+20% Extra Gold from Monsters |
| Magic Ring | Ruby | Exploding Potion |  |  | \=  | Garnet Ring |
| Magic Ring | Sapphire | Thawing Potion |  |  | \=  | Cobalt Ring |
| Magic Ring | Emerald | Antidote Potion |  |  | \=  | Jade Ring |
| Magic Ring | Topaz | Rejuvenation Potion |  |  | \=  | Coral Ring |
| Ring | Ruby | TIR Rune |  |  | \=  | +15 Fire Resistance |
| Ring | Sapphire | TIR Rune |  |  | \=  | +15 Cold Resistance |
| Ring | Topaz | TIR Rune |  |  | \=  | +15 Lightning Resistance |
| Ring | Emerald | TIR Rune |  |  | \=  | +15 Poison Resistance |
| Ring | Emerald | Tir Rune |  |  | \= | +15% Poison Resistance |
| Ring | Ruby | Tir Rune |  |  | \= | +15% Fire Resistance |
| Ring | Sapphire | Tir Rune |  |  | \= | +15% Cold Resistance |
| Ring | Topaz | Tir Rune |  |  | \= | +15% Lightning Resistance |
| Ring | Emerald | Magic Jewel | Shael Rune |  | \=  | +10% attack speed |
| Ring | Emerald | Magic Jewel | Shael Rune |  | \= | +10% Increased Attack Speed |
| Ring | Sapphire | Magic Jewel | Dol Rune |  | \=  | +10% faster cast rate |
| Ring | Sapphire | Magic Jewel | Dol Rune |  | \= | +10% Faster Cast Rate |
| Ring | Orb of Infusion | Sapphire | Amn Rune | Magic Jewel | \= | +5% Mana stolen per hit |
| Ring | Orb of Infusion | Skull | Amn Rune | Magic Jewel | \= | +5% Life stolen per hit |
| Ring | Infusion Orb | Ruby | Rare Jewel |  | \=  | +40 Life & +4 Life / Kill |
| Ring | Infusion Orb | Sapphire | Rare Jewel |  | \=  | +40 Mana & +4 Mana / Kill |
| Ring | Orb of Infusion | Ruby | Rare Jewel |  | \= | +40 to Life<br>+4 Life after each Kill |
| Ring | Orb of Infusion | Sapphire | Rare Jewel |  | \= | +40 to Mana<br>+4 Mana after each Kill |
| Ring | Orb of Infusion | Diamond | Um Rune | Rare Jewel | \= | +15% to All Resistances |
| Ring | Orb of Infusion | Topaz | Ist Rune | Rare Jewel | \= | +20% Chance Items Roll Magic or Better<br>+30% Extra Gold from Monsters |
| Ring | Orb of Infusion | Sapphire | Sur Rune | Rare Jewel | \= | +5% Increased Maximum Mana<br>+80% Mana Regeneration |
| Ring | Orb of Infusion | Ruby | Jah Rune | Rare Jewel | \= | +5% Increased Maximum Life |
| Ring | Conversion Orb | Unique Jewel | Brak Rune |  | \=  | -3% enemy physical resistance |
| Ring | Orb of Conversion | Unique Jewel | Brak Rune (#34) |  | \= | -3% to Enemy Physical Damage Resistance |
| Ring | Conversion Orb | Unique Jewel | Zeph Rune |  | \=  | +3% all elemental damage |
| Ring | Orb of Conversion | Unique Jewel | Zeph Rune (#35) |  | \= | +3% to All Elemental Skill Damage |
| Ring | Conversion Orb | Unique Jewel | Myr Rune |  | \=  | -3% enemy magic resistance |
| Ring | Orb of Conversion | Unique Jewel | Myr Rune (#36) |  | \= | -3% to Enemy Magic Resistance |
| Ring | Conversion Orb | Unique Jewel | Grit Rune |  | \=  | -3% enemy elemental resistance |
| Ring | Orb of Conversion | Unique Jewel | Grit Rune (#37) |  | \= | -3% to All Enemy Elemental Resistances |
| Ring | Conversion Orb | Unique Jewel | Hev Rune |  | \=  | +15% Enhanced Damage &  -3% enemy physical resistance |
| Ring | Orb of Conversion | Unique Jewel | Hev Rune (#39) |  | \= | +15% Enhanced Weapon Damage<br>-3% to Enemy Physical Damage Resistance |

## Belts

> **Max Enchants: 1**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Belt | Topaz | Magic Jewel |  |  | \=  | +10% Magic Find  & +20% Gold Find |
| Belt | Ruby | Magic Jewel |  |  | \=  | +20 HP & +2 Life / Kill |
| Belt | Sapphire | Magic Jewel |  |  | \=  | +20 Mana & +2 Mana / Kill |
| Belt | Emerald | Magic Jewel |  |  | \=  | +5 Dexterity & +5 Vitality |
| Belt | Amethyst | Magic Jewel |  |  | \=  | +5 Strength & +5 Vitality |
| Belt | Skull | Magic Jewel |  |  | \=  | +5 Energy & +5 Vitality |
| Belt | Amethyst | Magic Jewel |  |  | \= | +5 to Strength<br>+5 to Vitality |
| Belt | Emerald | Magic Jewel |  |  | \= | +5 to Dexterity<br>+5 to Vitality |
| Belt | Ruby | Magic Jewel |  |  | \= | +20 to Life<br>+2 Life after each Kill |
| Belt | Sapphire | Magic Jewel |  |  | \= | +20 to Mana<br>+2 Mana after each Kill |
| Belt | Skull | Magic Jewel |  |  | \= | +5 to Energy<br>+5 to Vitality |
| Belt | Topaz | Magic Jewel |  |  | \= | +10% Chance Items Roll Magic or Better<br>+20% Extra Gold from Monsters |
| Belt | ETH Rune | Magic Jewel |  |  | \=  | +20% Mana Regen |
| Belt | Eth Rune | Magic Jewel |  |  | \= | +20% Mana Regeneration |
| Belt | Diamond | Magic Jewel | TIR Rune |  | \=  | +5 All Resistances |
| Belt | Diamond | Magic Jewel | Tir Rune |  | \= | +5% to All Resistances |
| Belt | Infusion Orb | Ruby | Rare Jewel |  | \=  | +40 Life & +4 Life / Kill |
| Belt | Infusion Orb | Sapphire | Rare Jewel |  | \=  | +40 Mana & +4 Mana / Kill |
| Belt | Orb of Infusion | Emerald | Shael Rune | Magic Jewel | \= | +15% Faster Hit Recovery |
| Belt | Orb of Infusion | Ruby | Rare Jewel |  | \= | +40 to Life<br>+4 Life after each Kill |
| Belt | Orb of Infusion | Sapphire | Rare Jewel |  | \= | +40 to Mana<br>+4 Mana after each Kill |
| Belt | Orb of Infusion | Skull | Lum Rune | Magic Jewel | \= | +40% Mana Regeneration<br>+10 to Energy |
| Belt | Orb of Infusion | Amethyst | Fal Rune | Magic Jewel | \= | +15 to Strength<br>+15 to Vitality |
| Belt | Orb of Infusion | Emerald | Fal Rune | Magic Jewel | \= | +15 to Dexterity<br>+15 to Vitality |
| Belt | Orb of Infusion | Sapphire | Fal Rune | Magic Jewel | \= | +15 to Energy<br>+15 to Vitality |
| Belt | Orb of Infusion | Rare Jewel | Diamond | Um Rune | \= | +15% to All Resistances |
| Belt | Orb of Infusion | Topaz | Ist Rune | Rare Jewel | \= | +20% Chance Items Roll Magic or Better<br>+30% Extra Gold from Monsters |
| Belt | Orb of Infusion | Sapphire | Sur Rune | Rare Jewel | \= | +5% Increased Maximum Mana<br>+80% Mana Regeneration |
| Belt | Orb of Infusion | Amethyst | Ber Rune | Rare Jewel | \= | +5% Physical Damage Reduction |
| Belt | Orb of Infusion | Ruby | Jah Rune | Rare Jewel | \= | +5% Increased Maximum Life |
| Belt | Orb of Infusion | Amethyst | Cham Rune | Unique Jewel | \= | +50 to Life<br>+50 to Mana<br>+50% Enhanced Defense |
| Belt | Orb of Infusion | Topaz | Cham Rune | Unique Jewel | \= | +20% Chance Items Roll Magic or Better<br>+40% Extra Gold from Monsters |
| Belt (Amazon only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Amazon Skill Levels<br>+5% Physical Damage Reduction |
| Belt (Assassin only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Assassin Skill Levels<br>+5% Physical Damage Reduction |
| Belt (Barbarian only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Barbarian Skill Levels<br>+5% Physical Damage Reduction |
| Belt (Druid only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Druid Skill Levels<br>+5% Physical Damage Reduction |
| Belt (Necromancer only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Necromancer Skill Levels<br>+5% Physical Damage Reduction |
| Belt (Paladin only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Paladin Skill Levels<br>+5% Physical Damage Reduction |
| Belt (Sorceress only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Sorceress Skill Levels<br>+5% Physical Damage Reduction |
| Belt (Warlock only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Warlock Skills<br>+5% Physical Damage Reduction |

## Boots

> **Max Enchants: 1**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Boots | NEF Rune |  |  |  | \=  | +10% Faster Run/Walk |
| Boots | Nef Rune |  |  |  | \= | +10% Faster Run/Walk Speed |
| Boots | Topaz | Magic Jewel |  |  | \=  | +10% Magic Find  & +20% Gold Find |
| Boots | Ruby | Magic Jewel |  |  | \=  | +20 HP & +2 Life / Kill |
| Boots | Sapphire | Magic Jewel |  |  | \=  | +20 Mana & +2 Mana / Kill |
| Boots | Emerald | Magic Jewel |  |  | \=  | +5 Dexterity & +5 Vitality |
| Boots | Amethyst | Magic Jewel |  |  | \=  | +5 Strength & +5 Vitality |
| Boots | Skull | Magic Jewel |  |  | \=  | +5 Energy & +5 Vitality |
| Boots | Amethyst | Magic Jewel |  |  | \= | +5 to Strength<br>+5 to Vitality |
| Boots | Emerald | Magic Jewel |  |  | \= | +5 to Dexterity<br>+5 to Vitality |
| Boots | Ruby | Magic Jewel |  |  | \= | +20 to Life<br>+2 Life after each Kill |
| Boots | Sapphire | Magic Jewel |  |  | \= | +20 to Mana<br>+2 Mana after each Kill |
| Boots | Skull | Magic Jewel |  |  | \= | +5 to Energy<br>+5 to Vitality |
| Boots | Topaz | Magic Jewel |  |  | \= | +10% Chance Items Roll Magic or Better<br>+20% Extra Gold from Monsters |
| Boots | ETH Rune | Magic Jewel |  |  | \=  | +20% Mana Regen |
| Boots | Eth Rune | Magic Jewel |  |  | \= | +20% Mana Regeneration |
| Boots | Diamond | Magic Jewel | TIR Rune |  | \=  | +5 All Resistances |
| Boots | Diamond | Magic Jewel | Tir Rune |  | \= | +5% to All Resistances |
| Boots | Infusion Orb | Ruby | Rare Jewel |  | \=  | +40 Life & +4 Life / Kill |
| Boots | Infusion Orb | Sapphire | Rare Jewel |  | \=  | +40 Mana & +4 Mana / Kill |
| Boots | Orb of Infusion | Amethyst | Shael Rune | Magic Jewel | \= | +20% Faster Hit Recovery |
| Boots | Orb of Infusion | Emerald | Shael Rune | Magic Jewel | \= | +20% Faster Run/Walk Speed |
| Boots | Orb of Infusion | Ruby | Rare Jewel |  | \= | +40 to Life<br>+4 Life after each Kill |
| Boots | Orb of Infusion | Sapphire | Rare Jewel |  | \= | +40 to Mana<br>+4 Mana after each Kill |
| Boots | Orb of Infusion | Skull | Lum Rune | Magic Jewel | \= | +40% Mana Regeneration<br>+10 to Energy |
| Boots | Orb of Infusion | Amethyst | Fal Rune | Magic Jewel | \= | +15 to Strength<br>+15 to Vitality |
| Boots | Orb of Infusion | Emerald | Fal Rune | Magic Jewel | \= | +15 to Dexterity<br>+15 to Vitality |
| Boots | Orb of Infusion | Sapphire | Fal Rune | Magic Jewel | \= | +15 to Energy<br>+15 to Vitality |
| Boots | Orb of Infusion | Rare Jewel | Diamond | Um Rune | \= | +15% to All Resistances |
| Boots | Orb of Infusion | Topaz | Ist Rune | Rare Jewel | \= | +20% Chance Items Roll Magic or Better<br>+30% Extra Gold from Monsters |
| Boots | Orb of Infusion | Sapphire | Sur Rune | Rare Jewel | \= | +5% Increased Maximum Mana<br>+80% Mana Regeneration |
| Boots | Orb of Infusion | Ruby | Jah Rune | Rare Jewel | \= | +5% Increased Maximum Life |
| Boots | Orb of Infusion | Topaz | Cham Rune | Unique Jewel | \= | +25% Faster Run/Walk Speed<br>+25% Chance Items Roll Magic or Better<br>+50% Extra Gold from Monsters |
| Boots | Orb of Infusion | Amethyst | Zod Rune | Unique Jewel | \= | +10% Increased Maximum Life<br>+10% Increased Maximum Mana |
| Boots (Amazon only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Amazon Skill Levels<br>+5% Physical Damage Reduction |
| Boots (Assassin only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Assassin Skill Levels<br>+5% Physical Damage Reduction |
| Boots (Barbarian only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Barbarian Skill Levels<br>+5% Physical Damage Reduction |
| Boots (Druid only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Druid Skill Levels<br>+5% Physical Damage Reduction |
| Boots (Necromancer only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Necromancer Skill Levels<br>+5% Physical Damage Reduction |
| Boots (Paladin only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Paladin Skill Levels<br>+5% Physical Damage Reduction |
| Boots (Sorceress only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Sorceress Skill Levels<br>+5% Physical Damage Reduction |
| Boots (Warlock only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Warlock Skills<br>+5% Physical Damage Reduction |

## Gloves
> **Max Enchants: 1**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gloves | Topaz | Magic Jewel |  |  | \=  | +10% Magic Find  & +20% Gold Find |
| Gloves | Ruby | Magic Jewel |  |  | \=  | +20 HP & +2 Life / Kill |
| Gloves | Sapphire | Magic Jewel |  |  | \=  | +20 Mana & +2 Mana / Kill |
| Gloves | Emerald | Magic Jewel |  |  | \=  | +5 Dexterity & +5 Vitality |
| Gloves | Amethyst | Magic Jewel |  |  | \=  | +5 Strength & +5 Vitality |
| Gloves | Skull | Magic Jewel |  |  | \=  | +5 Energy & +5 Vitality |
| Gloves | Amethyst | Magic Jewel |  |  | \= | +5 to Strength<br>+5 to Vitality |
| Gloves | Emerald | Magic Jewel |  |  | \= | +5 to Dexterity<br>+5 to Vitality |
| Gloves | Ruby | Magic Jewel |  |  | \= | +20 to Life<br>+2 Life after each Kill |
| Gloves | Sapphire | Magic Jewel |  |  | \= | +20 to Mana<br>+2 Mana after each Kill |
| Gloves | Skull | Magic Jewel |  |  | \= | +5 to Energy<br>+5 to Vitality |
| Gloves | Topaz | Magic Jewel |  |  | \= | +10% Chance Items Roll Magic or Better<br>+20% Extra Gold from Monsters |
| Gloves | ETH Rune | Magic Jewel |  |  | \=  | +20% Mana Regen |
| Gloves | Eth Rune | Magic Jewel |  |  | \= | +20% Mana Regeneration |
| Gloves | Diamond | Magic Jewel | TIR Rune |  | \=  | +5 All Resistances |
| Gloves | Diamond | Magic Jewel | Tir Rune |  | \= | +5% to All Resistances |
| Gloves | Emerald | Magic Jewel | Shael Rune |  | \=  | +10% attack speed |
| Gloves | Emerald | Magic Jewel | Shael Rune |  | \= | +10% Increased Attack Speed |
| Gloves | Sapphire | Magic Jewel | Dol Rune |  | \=  | +10% faster cast rate |
| Gloves | Sapphire | Magic Jewel | Dol Rune |  | \= | +10% Faster Cast Rate |
| Gloves | Orb of Infusion | Skull | Lum Rune | Magic Jewel | \= | +40% Mana Regeneration<br>+10 to Energy |
| Gloves | Orb of Infusion | Amethyst | Fal Rune | Magic Jewel | \= | +15 to Strength<br>+15 to Vitality |
| Gloves | Orb of Infusion | Emerald | Fal Rune | Magic Jewel | \= | +15 to Dexterity<br>+15 to Vitality |
| Gloves | Orb of Infusion | Sapphire | Fal Rune | Magic Jewel | \= | +15 to Energy<br>+15 to Vitality |
| Gloves | Orb of Infusion | Rare Jewel | Diamond | Um Rune | \= | +15% to All Resistances |
| Gloves | Orb of Infusion | Topaz | Ist Rune | Rare Jewel | \= | +20% Chance Items Roll Magic or Better<br>+30% Extra Gold from Monsters |
| Gloves | Orb of Infusion | Sapphire | Sur Rune | Rare Jewel | \= | +5% Increased Maximum Mana<br>+80% Mana Regeneration |
| Gloves | Orb of Infusion | Ruby | Jah Rune | Rare Jewel | \= | +5% Increased Maximum Life |
| Gloves | Orb of Infusion | Diamond | Cham Rune | Unique Jewel | \= | +15% Piercing Attack |
| Gloves | Orb of Infusion | Emerald | Cham Rune | Unique Jewel | \= | +15% Chance of Open Wounds |
| Gloves | Orb of Infusion | Sapphire | Cham Rune | Unique Jewel | \= | +15% Deadly Strike |
| Gloves (Amazon only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Amazon Skill Levels<br>Indestructible |
| Gloves (Assassin only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Assassin Skill Levels<br>Indestructible |
| Gloves (Barbarian only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Barbarian Skill Levels<br>Indestructible |
| Gloves (Druid only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Druid Skill Levels<br>Indestructible |
| Gloves (Necromancer only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Necromancer Skill Levels<br>Indestructible |
| Gloves (Paladin only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Paladin Skill Levels<br>Indestructible |
| Gloves (Sorceress only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Sorceress Skill Levels<br>Indestructible |
| Gloves (Warlock only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +1 to Warlock Skills<br>Indestructible |

## Helms
> **Max Enchants: 1**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Helm | Topaz | Magic Jewel |  |  | \=  | +10% Magic Find  & +20% Gold Find |
| Helm | Ruby | Magic Jewel |  |  | \=  | +20 HP & +2 Life / Kill |
| Helm | Sapphire | Magic Jewel |  |  | \=  | +20 Mana & +2 Mana / Kill |
| Helm | Emerald | Magic Jewel |  |  | \=  | +5 Dexterity & +5 Vitality |
| Helm | Amethyst | Magic Jewel |  |  | \=  | +5 Strength & +5 Vitality |
| Helm | Skull | Magic Jewel |  |  | \=  | +5 Energy & +5 Vitality |
| Helm | Amethyst | Magic Jewel |  |  | \= | +5 to Strength<br>+5 to Vitality |
| Helm | Emerald | Magic Jewel |  |  | \= | +5 to Dexterity<br>+5 to Vitality |
| Helm | Ruby | Magic Jewel |  |  | \= | +20 to Life<br>+2 Life after each Kill |
| Helm | Sapphire | Magic Jewel |  |  | \= | +20 to Mana<br>+2 Mana after each Kill |
| Helm | Skull | Magic Jewel |  |  | \= | +5 to Energy<br>+5 to Vitality |
| Helm | Topaz | Magic Jewel |  |  | \= | +10% Chance Items Roll Magic or Better<br>+20% Extra Gold from Monsters |
| Helm | ETH Rune | Magic Jewel |  |  | \=  | +20% Mana Regen |
| Helm | Eth Rune | Magic Jewel |  |  | \= | +20% Mana Regeneration |
| Helm | Diamond | Magic Jewel | TIR Rune |  | \=  | +5 All Resistances |
| Helm | Diamond | Magic Jewel | Tir Rune |  | \= | +5% to All Resistances |
| Helm | Orb of Infusion | Amethyst | Shael Rune | Magic Jewel | \= | +20% Faster Hit Recovery |
| Helm | Orb of Infusion | Skull | Lum Rune | Magic Jewel | \= | +40% Mana Regeneration<br>+10 to Energy |
| Helm | Orb of Infusion | Amethyst | Fal Rune | Magic Jewel | \= | +15 to Strength<br>+15 to Vitality |
| Helm | Orb of Infusion | Emerald | Fal Rune | Magic Jewel | \= | +15 to Dexterity<br>+15 to Vitality |
| Helm | Orb of Infusion | Sapphire | Fal Rune | Magic Jewel | \= | +15 to Energy<br>+15 to Vitality |
| Helm | Orb of Infusion | Rare Jewel | Diamond | Um Rune | \= | +15% to All Resistances |
| Helm | Orb of Infusion | Topaz | Ist Rune | Rare Jewel | \= | +20% Chance Items Roll Magic or Better<br>+30% Extra Gold from Monsters |
| Helm | Infusion Orb | Orb of Renewal | GUL Rune | Rare Jewel | \=  | +30 Dexterity & +30 Vitality |
| Helm | Orb of Infusion | Sapphire | Sur Rune | Rare Jewel | \= | +5% Increased Maximum Mana<br>+80% Mana Regeneration |
| Helm | Infusion Orb | Orb of Renewal | VEX Rune | Rare Jewel | \=  | +30 Energy & +30 Vitality |
| Helm | Orb of Infusion | Amethyst | Ber Rune | Rare Jewel | \= | +5% Physical Damage Reduction |
| Helm | Infusion Orb | Orb of Renewal | OHM Rune | Rare Jewel | \=  | +30 Strength & +30 Vitality |
| Helm | Orb of Infusion | Emerald | Jah Rune | Rare Jewel | \= | Ignore Target's Defense |
| Helm | Orb of Infusion | Ruby | Jah Rune | Rare Jewel | \= | +5% Increased Maximum Life |
| Helm | Infusion Orb | Conversion Orb | Ruby | CHAM Rune<br>Unique Jewel | \=  | +2 Fire Skills |
| Helm | Infusion Orb | Conversion Orb | Sapphire | CHAM Rune<br>Unique Jewel | \=  | +2 Cold Skills |
| Helm | Infusion Orb | Conversion Orb | Topaz | CHAM Rune<br>Unique Jewel | \=  | +2 Lightning Skills |
| Helm | Infusion Orb | Conversion Orb | Emerald | CHAM Rune<br>Unique Jewel | \=  | +2 Poison Skills |
| Helm | Infusion Orb | Conversion Orb | Diamond | CHAM Rune<br>Unique Jewel | \=  | +2 Magic Skills |
| Helm | Infusion Orb | Conversion Orb | Skull | ZOD Rune<br>Unique Jewel | \=  | +1 All Skills |
| Helm | Orb of Infusion | Diamond | Cham Rune | Unique Jewel + Orb of Conversion | \= | +2 to Magic Skills |
| Helm | Orb of Infusion | Emerald | Cham Rune | Unique Jewel + Orb of Conversion | \= | +2 to Poison Skills |
| Helm | Orb of Infusion | Ruby | Cham Rune | Unique Jewel + Orb of Conversion | \= | +2 to Fire Skills |
| Helm | Orb of Infusion | Sapphire | Cham Rune | Unique Jewel + Orb of Conversion | \= | +2 to Cold Skills |
| Helm | Orb of Infusion | Topaz | Cham Rune | Unique Jewel + Orb of Conversion | \= | +2 to Lightning Skills |
| Helm | Orb of Infusion | Skull | Zod Rune | Unique Jewel + Orb of Conversion | \= | +1 to All Skills |
| Helm (Amazon only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +2 to Amazon Skill Levels<br>Indestructible |
| Helm (Assassin only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +2 to Assassin Skill Levels<br>Indestructible |
| Helm (Barbarian only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +2 to Barbarian Skill Levels<br>Indestructible |
| Helm (Druid only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +2 to Druid Skill Levels<br>Indestructible |
| Helm (Necromancer only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +2 to Necromancer Skill Levels<br>Indestructible |
| Helm (Paladin only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +2 to Paladin Skill Levels<br>Indestructible |
| Helm (Sorceress only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +2 to Sorceress Skill Levels<br>Indestructible |
| Helm (Warlock only) | Orb of Conversion | Zod Rune | Dem Rune (#38) | Unique Jewel | \= | +2 to Warlock Skills<br>Indestructible |

## Shields
> **Max Enchants: 1**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Shield | Ruby | TIR Rune |  |  | \=  | +15 Fire Resistance |
| Shield | Sapphire | TIR Rune |  |  | \=  | +15 Cold Resistance |
| Shield | Topaz | TIR Rune |  |  | \=  | +15 Lightning Resistance |
| Shield | Emerald | TIR Rune |  |  | \=  | +15 Poison Resistance |
| Any Shield | Emerald | Tir Rune |  |  | \= | +15% Poison Resistance |
| Any Shield | Ruby | Tir Rune |  |  | \= | +15% Fire Resistance |
| Any Shield | Sapphire | Tir Rune |  |  | \= | +15% Cold Resistance |
| Any Shield | Topaz | Tir Rune |  |  | \= | +15% Lightning Resistance |
| Shield | Topaz | Magic Jewel |  |  | \=  | +10% Magic Find  & +20% Gold Find |
| Shield | Emerald | Magic Jewel |  |  | \=  | +5 Dexterity & +5 Vitality |
| Shield | Amethyst | Magic Jewel |  |  | \=  | +5 Strength & +5 Vitality |
| Shield | Skull | Magic Jewel |  |  | \=  | +5 Energy & +5 Vitality |
| Any Shield | Amethyst | Magic Jewel |  |  | \= | +5 to Strength<br>+5 to Vitality |
| Any Shield | Emerald | Magic Jewel |  |  | \= | +5 to Dexterity<br>+5 to Vitality |
| Any Shield | Skull | Magic Jewel |  |  | \= | +5 to Energy<br>+5 to Vitality |
| Any Shield | Topaz | Magic Jewel |  |  | \= | +10% Chance Items Roll Magic or Better<br>+20% Extra Gold from Monsters |
| Shield | ETH Rune | Magic Jewel |  |  | \=  | +20% Mana Regen |
| Any Shield | Eth Rune | Magic Jewel |  |  | \= | +20% Mana Regeneration |
| Shield | Diamond | Magic Jewel | TIR Rune |  | \=  | +5 All Resistances |
| Any Shield | Diamond | Magic Jewel | Tir Rune |  | \= | +5% to All Resistances |
| Shield | ITH Rune | Magic Jewel |  |  | \=  | +10% Damage Goes To Mana |
| Any Shield | Ith Rune | Magic Jewel |  |  | \= | +10% Damage Taken Added To Mana |
| Shield | SOL Rune | Amethyst | Magic Jewel |  | \=  | Physical Damage Reduced By 5 |
| Shield | SOL Rune | Chaos Onyx | Magic Jewel |  | \=  | Physical Damage Reduced By 5 |
| Any Shield | Sol Rune | Magic Jewel | Amethyst |  | \= | Physical Damage Reduced By 5 |
| Any Shield | Sol Rune | Magic Jewel | Chaos Onyx |  | \= | Physical Damage Reduced By 5 |
| Any Shield | Orb of Infusion | Skull | Amn Rune | Magic Jewel | \= | Attacker Takes Damage of 100 |
| Any Shield | Orb of Infusion | Emerald | Shael Rune | Magic Jewel | \= | +20% Faster Hit Recovery |
| Any Shield | Orb of Infusion | Ruby | Shael Rune | Magic Jewel | \= | +15% Faster Block Rate |
| Any Shield | Orb of Infusion | Skull | Lum Rune | Magic Jewel | \= | +40% Mana Regeneration<br>+10 to Energy |
| Any Shield | Orb of Infusion | Amethyst | Fal Rune | Magic Jewel | \= | +15 to Strength<br>+15 to Vitality |
| Any Shield | Orb of Infusion | Emerald | Fal Rune | Magic Jewel | \= | +15 to Dexterity<br>+15 to Vitality |
| Any Shield | Orb of Infusion | Sapphire | Fal Rune | Magic Jewel | \= | +15 to Energy<br>+15 to Vitality |
| Any Shield | Orb of Infusion | Rare Jewel | Diamond | Um Rune | \= | +15% to All Resistances |
| Any Shield | Orb of Infusion | Amethyst | Mal Rune | Rare Jewel | \= | Physical Damage Reduced By 10 |
| Any Shield | Orb of Infusion | Chaos Onyx | Mal Rune | Rare Jewel | \= | Magic Damage Reduced By 10 |
| Any Shield | Orb of Infusion | Topaz | Ist Rune | Rare Jewel | \= | +30% Chance Items Roll Magic or Better<br>+50% Extra Gold from Monsters |
| Any Shield | Orb of Infusion | Diamond | Zod Rune | Unique Jewel | \= | 10% Increased Chance of Blocking<br>+15% to All Resistances |
| Any Shield | Orb of Conversion | Grit Rune (#37) | Zod Rune | Unique Jewel | \= | 15% Increased Chance of Blocking<br>+15% Faster Block Rate<br>Indestructible |

## Body Armor
> **Max Enchants: 1**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Body Armor | Ruby | TIR Rune |  |  | \=  | +15 Fire Resistance |
| Body Armor | Sapphire | TIR Rune |  |  | \=  | +15 Cold Resistance |
| Body Armor | Topaz | TIR Rune |  |  | \=  | +15 Lightning Resistance |
| Body Armor | Emerald | TIR Rune |  |  | \=  | +15 Poison Resistance |
| Armor | Emerald | Tir Rune |  |  | \= | +15% Poison Resistance |
| Armor | Ruby | Tir Rune |  |  | \= | +15% Fire Resistance |
| Armor | Sapphire | Tir Rune |  |  | \= | +15% Cold Resistance |
| Armor | Topaz | Tir Rune |  |  | \= | +15% Lightning Resistance |
| Body Armor | Topaz | Magic Jewel |  |  | \=  | +10% Magic Find  & +20% Gold Find |
| Body Armor | Emerald | Magic Jewel |  |  | \=  | +5 Dexterity & +5 Vitality |
| Body Armor | Amethyst | Magic Jewel |  |  | \=  | +5 Strength & +5 Vitality |
| Body Armor | Skull | Magic Jewel |  |  | \=  | +5 Energy & +5 Vitality |
| Armor | Amethyst | Magic Jewel |  |  | \= | +5 to Strength<br>+5 to Vitality |
| Armor | Emerald | Magic Jewel |  |  | \= | +5 to Dexterity<br>+5 to Vitality |
| Armor | Skull | Magic Jewel |  |  | \= | +5 to Energy<br>+5 to Vitality |
| Armor | Topaz | Magic Jewel |  |  | \= | +10% Chance Items Roll Magic or Better<br>+20% Extra Gold from Monsters |
| Body Armor | ETH Rune | Magic Jewel |  |  | \=  | +20% Mana Regen |
| Armor | Eth Rune | Magic Jewel |  |  | \= | +20% Mana Regeneration |
| Body Armor | Diamond | Magic Jewel | TIR Rune |  | \=  | +5 All Resistances |
| Armor | Diamond | Magic Jewel | Tir Rune |  | \= | +5% to All Resistances |
| Body Armor | ITH Rune | Magic Jewel |  |  | \=  | +10% Damage Goes To Mana |
| Armor | Ith Rune | Magic Jewel |  |  | \= | +10% Damage Taken Added To Mana |
| Body Armor | SOL Rune | Amethyst | Magic Jewel |  | \=  | Physical Damage Reduced By 5 |
| Body Armor | SOL Rune | Chaos Onyx | Magic Jewel |  | \=  | Physical Damage Reduced By 5 |
| Armor | Sol Rune | Magic Jewel | Amethyst |  | \= | Physical Damage Reduced By 5 |
| Armor | Sol Rune | Magic Jewel | Chaos Onyx |  | \= | Physical Damage Reduced By 5 |
| Body Armor | Infusion Orb | Emerald | SHAEL Rune | Magic Jewel | \=  | +20% Faster Hit Recovery |
| Armor | Orb of Infusion | Emerald | Shael Rune | Magic Jewel | \= | +20% Faster Hit Recovery |
| Body Armor | Infusion Orb | Skull | LUM Rune | Magic Jewel | \=  | +40% Mana Regen & 10 Energy |
| Armor | Orb of Infusion | Skull | Lum Rune | Magic Jewel | \= | +40% Mana Regeneration<br>+10 to Energy |
| Body Armor | Infusion Orb | Emerald | FAL Rune | Magic Jewel | \=  | +15 Dexterity & +15 Vitality |
| Body Armor | Infusion Orb | Amethyst | FAL Rune | Magic Jewel | \=  | +15 Strength & +15 Vitality |
| Body Armor | Infusion Orb | Sapphire | FAL Rune | Magic Jewel | \=  | +15 Energy & +15 Vitality |
| Armor | Orb of Infusion | Amethyst | Fal Rune | Magic Jewel | \= | +15 to Strength<br>+15 to Vitality |
| Armor | Orb of Infusion | Emerald | Fal Rune | Magic Jewel | \= | +15 to Dexterity<br>+15 to Vitality |
| Armor | Orb of Infusion | Sapphire | Fal Rune | Magic Jewel | \= | +15 to Energy<br>+15 to Vitality |
| Body Armor | Infusion Orb | Diamond | UM Rune | Rare Jewel | \=  | +15 All Resistances |
| Armor | Orb of Infusion | Rare Jewel | Diamond | Um Rune | \= | +15% to All Resistances |
| Body Armor | Infusion Orb | Chaos Onyx | MAL Rune | Rare Jewel | \=  | Magic Damage Reduced By 10 |
| Body Armor | Infusion Orb | Amethyst | MAL Rune | Rare Jewel | \=  | Physical Damage Reduced By 10 |
| Armor | Orb of Infusion | Amethyst | Mal Rune | Rare Jewel | \= | Physical Damage Reduced By 10 |
| Armor | Orb of Infusion | Chaos Onyx | Mal Rune | Rare Jewel | \= | Magic Damage Reduced By 10 |
| Body Armor | Infusion Orb | Topaz | IST Rune | Rare Jewel | \=  | +30% Magic Find  & +50% Gold Find |
| Armor | Orb of Infusion | Topaz | Ist Rune | Rare Jewel | \= | +30% Chance Items Roll Magic or Better<br>+50% Extra Gold from Monsters |
| Body Armor | Infusion Orb | Orb of Renewal | GUL Rune | Rare Jewel | \=  | +30 Dexterity & +30 Vitality |
| Body Armor | Infusion Orb | Orb of Renewal | VEX Rune | Rare Jewel | \=  | +30 Energy & +30 Vitality |
| Body Armor | Infusion Orb | Orb of Renewal | OHM Rune | Rare Jewel | \=  | +30 Strength & +30 Vitality |
| Body Armor | Infusion Orb | Amethyst | ZOD Rune | Unique Jewel | \=  | +100% Enhanced Defense & Indestructible |
| Armor | Orb of Infusion | Amethyst | Zod Rune | Unique Jewel | \= | +100% Enhanced Defense<br>Indestructible |
| Body Armor | Infusion Orb | Conversion Orb | Sapphire | SUR Rune<br>Rare Jewel | \=  | +10% Max Mana & +80% Mana Regen |
| Body Armor | Infusion Orb | Conversion Orb | Diamond | BER Rune<br>Rare Jewel | \=  | +10% Damage Reduction |
| Armor | Orb of Infusion | Sapphire | Sur Rune | Rare Jewel + Orb of Conversion | \= | +10% Increased Maximum Mana<br>+80% Mana Regeneration |
| Body Armor | Infusion Orb | Conversion Orb | Ruby | JAH Rune<br>Rare Jewel | \=  | +10% Max HP |
| Armor | Orb of Infusion | Diamond | Ber Rune | Rare Jewel + Orb of Conversion | \= | +10% Physical Damage Reduction |
| Armor | Orb of Infusion | Ruby | Jah Rune | Rare Jewel + Orb of Conversion | \= | +10% Increased Maximum Life |
| Body Armor | Conversion Orb | Grit Rune | ZOD Rune | Unique Jewel | \=  | +1 All Skills & +5% All Attributes & Indestructible |
| Armor | Orb of Conversion | Grit Rune (#37) | Zod Rune | Unique Jewel | \= | +1 to All Skills<br>+5% to All Attributes<br>Indestructible |

## Weapons
> **Max Enchants: 1**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Axe (Any) | Dagger (Any) |  |  |  | \=  | Throwing Axe |
| Spear (Any) | Arrows |  |  |  | \=  | Javelins |
| Diamond | Dagger (Any) | Staff (Any) | Belt (Any) |  | \=  | Savage Polearm |
| Any Magic Weapon | Ruby | 4 Healing Potions (Any) |  |  | \=  | Sword of the Leech |
| Weapon | Topaz | Magic Jewel |  |  | \=  | +15% Magic Find  & +30% Gold Find |
| Weapon | Amethyst | Magic Jewel |  |  | \=  | +100 Attack Rating |
| Weapon | Sapphire | Magic Jewel |  |  | \=  | +15% Increased Cast Rate |
| Weapon | Emerald | Magic Jewel |  |  | \=  | +15% Increased Attack Speed |
| Weapon | Skull | Magic Jewel |  |  | \=  | +4% Mana Steal & +4% Life Steal |
| Weapon | Ruby | Magic Jewel |  |  | \=  | +4 Life / Kill |
| Weapon | Diamond | Magic Jewel |  |  | \=  | +4 Mana / Kill |
| Quiver / Bolt Case | Skull | Magic Jewel |  |  | \=  | +4% Mana Steal & +4% Life Steal |
| Quiver / Bolt Case | Amethyst | Magic Jewel |  |  | \=  | +50 Attack Rating |
| Quiver / Bolt Case | Emerald | Magic Jewel |  |  | \=  | +10% Increased Attack Speed |
| Quiver / Bolt Case | Diamond | Magic Jewel |  |  | \=  | +10% Open Wounds |
| Quiver / Bolt Case | Topaz | Magic Jewel |  |  | \=  | +10% Magic Find  & +20% Gold Find |
| Any Weapon | Amethyst | Magic Jewel |  |  | \= | +100 to Attack Rating |
| Any Weapon | Diamond | Magic Jewel |  |  | \= | +4 Mana after each Kill |
| Any Weapon | Emerald | Magic Jewel |  |  | \= | +15% Increased Attack Speed |
| Any Weapon | Ruby | Magic Jewel |  |  | \= | +4 Life after each Kill |
| Any Weapon | Sapphire | Magic Jewel |  |  | \= | +15% Faster Cast Rate |
| Any Weapon | Skull | Magic Jewel |  |  | \= | +4% Mana stolen per hit<br>+4% Life stolen per hit |
| Any Weapon | Topaz | Magic Jewel |  |  | \= | +15% Chance Items Roll Magic or Better<br>+30% Extra Gold from Monsters |
| Weapon | SOL Rune | Magic Jewel |  |  | \=  | +15 Min Damage & +25 Max Damage |
| Any Weapon | Sol Rune | Magic Jewel |  |  | \= | +15 to Minimum Weapon Damage<br>+25 to Maximum Weapon Damage |
| Any Weapon | Orb of Infusion | Amethyst | Fal Rune | Magic Jewel | \= | +25% Enhanced Weapon Damage<br>+100 to Attack Rating |
| Any Weapon | Orb of Infusion | Amethyst | Lem Rune | Magic Jewel | \= | +200 to Attack Rating |
| Quiver / Bolt Case | Infusion Orb | Diamond | UM Rune | Rare Jewel | \=  | +20% Open Wounds & +100 Attack Rating |
| Weapon | Infusion Orb | Ameythst | MAL Rune | Rare Jewel | \=  | +25% Increased Attack Speed |
| Any Weapon | Orb of Infusion | Amethyst | Mal Rune | Rare Jewel | \= | +25% Increased Attack Speed |
| Any Weapon | Orb of Infusion | Sapphire | Mal Rune | Rare Jewel | \= | +25% Faster Cast Rate |
| Quiver / Bolt Case | Infusion Orb | Topaz | IST Rune | Rare Jewel | \=  | +30% Magic Find  & +50% Gold Find |
| Any Weapon | Orb of Infusion | Topaz | Ist Rune | Rare Jewel | \= | +30% Chance Items Roll Magic or Better<br>+50% Extra Gold from Monsters |
| Quiver / Bolt Case | Infusion Orb | Skull | VEX Rune | Rare Jewel | \=  | +8% Mana Steal & +8% Life Steal |
| Any Weapon | Orb of Infusion | Skull | Vex Rune | Rare Jewel | \= | +8% Mana stolen per hit<br>+8% Life stolen per hit |
| Quiver / Bolt Case | Infusion Orb | Emerald | OHM Rune | Rare Jewel | \=  | +150 Attack Rating & +20% Increased Attack Speed |
| Any Weapon | Orb of Infusion | Emerald | Ohm Rune | Rare Jewel | \= | +30 to Minimum Weapon Damage<br>+50 to Maximum Weapon Damage |
| Quiver / Bolt Case | Infusion Orb | Amethyst | LO Rune | Rare Jewel | \=  | +150 Attack Rating & +15% Deadly Strike |
| Any Weapon | Orb of Infusion | Diamond | Lo Rune | Rare Jewel | \= | Adds 20-200 Weapon Fire Damage<br>Adds 20-200 Weapon Cold Damage<br>Adds 20-200 Weapon Lightning Damage |
| Weapon | Infusion Orb | Amethyst | CHAM Rune | Rare Jewel<br>NEF Rune | \=  | +50% Enhanced Damage & +200 Attack Rating & +Knockback |
| Any Weapon | Orb of Infusion | Amethyst | Cham Rune | Rare Jewel | \= | +50% Enhanced Weapon Damage<br>+200 to Attack Rating |
| Any Weapon | Orb of Infusion | Amethyst | Cham Rune | Rare Jewel + Nef Rune | \= | +50% Enhanced Weapon Damage<br>+200 to Attack Rating<br>Knockback |
| Weapon | Infusion Orb | Conversion Orb | Amethyst | ZOD Rune<br>Unique Jewel | \=  | +1 All Skills |
| Weapon | Infusion Orb | Conversion Orb | Ruby | ZOD Rune<br>Unique Jewel | \=  | +5% Fire Skill Damage & -5% Enemy Fire Res |
| Weapon | Infusion Orb | Conversion Orb | Sapphire | ZOD Rune<br>Unique Jewel | \=  | +5% Cold Skill Damage & -5% Enemy Cold Res |
| Weapon | Infusion Orb | Conversion Orb | Topaz | ZOD Rune<br>Unique Jewel | \=  | +5% Light Skill Damage & -5% Enemy Light Res |
| Weapon | Infusion Orb | Conversion Orb | Emerald | ZOD Rune<br>Unique Jewel | \=  | +5% Poison Skill Damage & -5% Enemy Poison Res |
| Weapon | Infusion Orb | Conversion Orb | Chaos Onyx | ZOD Rune<br>Unique Jewel | \=  | +5% Magic Skill Damage & -5% Enemy Magic Res |
| Weapon | Infusion Orb | Conversion Orb | Skull | ZOD Rune<br>Unique Jewel | \=  | +50% Enhanced Damage & -5% Enemy Physical Res & 200 Attack Rating |
| Any Weapon | Orb of Infusion | Orb of Conversion | Amethyst | Zod Rune + Unique Jewel | \= | +1 to All Skills |
| Any Weapon | Orb of Infusion | Orb of Conversion | Chaos Onyx | Zod Rune + Unique Jewel | \= | +5% to Magic Skill Damage<br>-5% to Enemy Magic Resistance |
| Any Weapon | Orb of Infusion | Orb of Conversion | Emerald | Zod Rune + Unique Jewel | \= | +5% to Poison Skill Damage<br>-5% to Enemy Poison Resistance |
| Any Weapon | Orb of Infusion | Orb of Conversion | Ruby | Zod Rune + Unique Jewel | \= | +5% to Fire Skill Damage<br>-5% to Enemy Fire Resistance |
| Any Weapon | Orb of Infusion | Orb of Conversion | Sapphire | Zod Rune + Unique Jewel | \= | +5% to Cold Skill Damage<br>-5% to Enemy Cold Resistance |
| Any Weapon | Orb of Infusion | Orb of Conversion | Skull | Zod Rune + Unique Jewel | \= | +50% Enhanced Weapon Damage<br>-5% to Enemy Physical Damage Resistance<br>+200 to Attack Rating |
| Any Weapon | Orb of Infusion | Orb of Conversion | Topaz | Zod Rune + Unique Jewel | \= | +5% to Lightning Skill Damage<br>-5% to Enemy Lightning Resistance |
| Weapon | Shadow Orb | Conversion Orb | Brak Rune | Dem Rune<br>Unique Jewel | \=  | +100% Enhanced Damage & -10% Enemy Physical Res & 300 Attack Rating |
| Weapon | Shadow Orb | Conversion Orb | Zeph Rune | Grit Rune<br>Unique Jewel | \=  | +10% all elemental damage & -10% enemy elemental resist |
| Weapon | Shadow Orb | Conversion Orb | Myr Rune | Hev Rune<br>Unique Jewel | \=  | +10% magic damage & -10% enemy magic resist |
| Any Weapon | Orb of Shadows | Orb of Conversion | Brak Rune (#34) | Dem Rune (#38) + Unique Jewel | \= | +100% Enhanced Weapon Damage<br>-10% to Enemy Physical Damage Resistance<br>+300 to Attack Rating |
| Any Weapon | Orb of Shadows | Orb of Conversion | Zeph Rune (#35) | Grit Rune (#37) + Unique Jewel | \= | +10% to All Elemental Skill Damage<br>-10% to All Enemy Elemental Resistances |
| Any Weapon | Orb of Shadows | Orb of Conversion | Myr Rune (#36) | Hev Rune (#39) + Unique Jewel | \= | +10% to Magic Skill Damage<br>-10% to Enemy Magic Resistance |
# Item Crafting System
Players can craft a variety of items to help define their builds, both as they level and during end-game progression.

When an item returns as magic that means it gives you the guaranteed stats with a chance of a prefix and a suffix on a magical item.

When it returns as rare, that means it gives the guaranteed stats with a chance at between 1-3 prefixes and 1-3 suffixes chosen at random.

When the item is returned as crafted, it will have a chance to have a set number of bonus affixes in addition to the guaranteed stats based on the level of the item returned, which is always the same as the character that created the craft unless specified otherwise.

**Sections:** [Amulets](#amulets-1) | [Rings](#rings-1) | [Belts](#belts-1) | [Boots](#boots-1) | [Gloves](#gloves-1) | [Helms](#helms-1) | [Shields](#shields-1) | [Body Armor](#body-armor-1) | [Weapons](#weapons-1) | [Jewel Crafts](#jewel-crafts) | [Charms](#charms) | [Sunder Charms](#sunder-charms)

| Result type | What it includes |
| --- | --- |
| Magic | Guaranteed stats, plus a chance for one prefix and one suffix. |
| Rare | Guaranteed stats, plus a chance for 1-3 prefixes and 1-3 suffixes. |
| Crafted | Guaranteed stats, plus a chance for bonus affixes based on the result's level. |

Unless stated otherwise, a crafted item's level matches the character who made it.

## Amulets
| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Amulet | ELD Rune | EL Rune |  |  | \=  | +100% CTC level 4 Battle Orders on level up Magic Amulet |
| Magic Amulet | Eld Rune | El Rune |  |  | \= | 100% Chance to cast level 4 Battle Orders when you Level-Up<br>New Magic Amulet |
| Magic Amulet | Magic Jewel | RAL Rune | Amethyst |  | \=  | 4-10 Mana Regeneration; +10-20 Mana; +5-10% Faster Cast Rate |
| Magic Amulet | Magic Jewel | Ral Rune | Amethyst |  | \= | +(4-10)% Mana Regeneration<br>+(10-20) to Mana<br>+(5-10)% Faster Cast Rate<br>New Crafted Amulet |
| Magic Amulet | Magic Jewel | THUL Rune | Sapphire |  | \=  | 5% chance to cast level 4 Frost Nova when struck; +3-10 Thorns; +3-11% Hits Cause Monsters to Flee |
| Magic Amulet | Magic Jewel | THUL Rune | Emerald |  | \=  | 1-4% Damage Reduced; 1-2% Magic Damage Reduced; +1-10% Block |
| Magic Amulet | Magic Jewel | Thul Rune | Emerald |  | \= | Physical Damage Reduced By (1-4)<br>Magic Damage Reduced By (1-2)<br>(1-10)% Increased Chance of Blocking<br>New Crafted Amulet |
| Magic Amulet | Magic Jewel | Thul Rune | Sapphire |  | \= | 5% Chance to cast level 4 Frost Nova when struck<br>Attacker Takes Damage of (3-10)<br>+(3-11)% Hits Cause Monsters to Flee<br>New Crafted Amulet |
| Magic Amulet | Magic Jewel | AMN Rune | Ruby |  | \=  | 1-4% Life Steal; +10-20 Life; +5-10% Faster Run/Walk |
| Magic Amulet | Magic Jewel | Amn Rune | Ruby |  | \= | +(1-4)% Life stolen per hit<br>+(10-20) to Life<br>+(5-10)% Faster Run/Walk Speed<br>New Crafted Amulet |
| Rare Amulet | Rare Jewel | PUL rune | EL Rune | Ruby | \=  | +1 All Skills & +10-12% Faster Attack Speed Rare Amulet |
| Rare Amulet | Rare Jewel | PUL rune | EL Rune | Sapphire | \=  | +1 All Skills & +10-12% Faster Cast Rate Rare Amulet |
| Magic Amulet | Orb of Infusion | RAL Rune | Gem(Any) |  | \=  | +1 Random Class All Skills Rare Amulet |
| Rare Amulet | Unique Jewel | Brak Rune (#34) | Vex Rune | Skull | \= | +2 to All Skills<br>Adds 25-35 Weapon Damage<br>New Crafted Amulet |
| Rare Amulet | Unique Jewel | Zeph Rune (#35) | Vex Rune | Sapphire | \= | +2 to All Skills<br>+10% to All Elemental Skill Damage<br>New Crafted Amulet |
| Set Amulet | Orb of Assemblage | 5 Orb of Renewal |  |  | \=  | Rerolled Set Item |
| Unique Amulet | Orb of Conversion | 5 Orb of Renewal |  |  | \=  | Rerolled Unique Item |
| Unique Amulet | Corruption Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Rerolled Unique Item |
| Set Amulet | Corruption Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Rerolled Set Item |

## Rings
| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Ring | Emerald | Antidote Potion |  |  | \= | Magic Ring (Forced prefix) |
| Magic Ring | Ruby | Exploding Potion |  |  | \= | Magic Ring (Forced prefix) |
| Magic Ring | Sapphire | Thawing Potion |  |  | \= | Magic Ring (Forced prefix) |
| Magic Ring | Topaz | Rejuvenation Potion |  |  | \= | Magic Ring (Forced prefix) |
| Magic Ring | ELD Rune | EL Rune |  |  | \=  | +100% CTC level 1 Fade on level up Magic Ring |
| Magic Ring | Eld Rune | El Rune |  |  | \= | 100% Chance to cast level 1 Fade when you Level-Up<br>New Magic Ring |
| Magic Ring | Magic Jewel | AMN Rune | Sapphire |  | \=  | 5% chance to cast level 4 Frost Nova when struck; +3-6 Thorns; +1-5 Dexterity |
| Magic Ring | Magic Jewel | AMN Rune | Amethyst |  | \=  | 4-10 Mana Regeneration; +10-20 Mana; +1-5 Energy |
| Magic Ring | Magic Jewel | AMN Rune | Emerald |  | \=  | 1-4% Damage Reduced; 1-2% Magic Damage Reduced; +1-5 Vitality |
| Magic Ring | Magic Jewel | Amn Rune | Amethyst |  | \= | +(4-10)% Mana Regeneration<br>+(10-20) to Mana<br>+(1-5) to Energy<br>New Crafted Ring |
| Magic Ring | Magic Jewel | Amn Rune | Emerald |  | \= | Physical Damage Reduced By (1-4)<br>Magic Damage Reduced By (1-2)<br>+(1-5) to Vitality<br>New Crafted Ring |
| Magic Ring | Magic Jewel | Amn Rune | Sapphire |  | \= | 5% Chance to cast level 4 Frost Nova when struck<br>Attacker Takes Damage of (3-6)<br>+(1-5) to Dexterity<br>New Crafted Ring |
| Magic Ring | Magic Jewel | SOL Rune | Ruby |  | \=  | 1-3% Life Steal; +10-20 Life; +1-5 Strength |
| Magic Ring | Magic Jewel | Sol Rune | Ruby |  | \= | +(1-3)% Life stolen per hit<br>+(10-20) to Life<br>+(1-5) to Strength<br>New Crafted Ring |
| Magic Ring | Rare Jewel | Tal Rune | Ral Rune | Ort Rune | \=  | Barilzar's Mazed Band Unique Ring |
| Magic Ring | Orb of Infusion | Topaz |  |  | \=  | +20% Magic Find Rare Ring |
| Magic Ring | Orb of Infusion | Topaz |  |  | \= | +20% Chance Items Roll Magic or Better<br>New Rare Ring |
| Rare Ring | Rare Jewel | UM Rune | HEL Rune | Gem(Any) | \=  | +8-10% All Res +8-10 all attributes Rare Ring |
| Rare Ring | Unique Jewel | SUR Rune | JAH Rune | Gem(Any) | \=  | +5-8% Max HP & +5-8% Max Mana Crafted Ring |
| Set Ring | Orb of Assemblage | 5 Orb of Renewal |  |  | \=  | Rerolled Set Item |
| Unique Ring | Orb of Conversion | 5 Orb of Renewal |  |  | \=  | Rerolled Unique Item |
| Rare Ring | Unique Jewel | Zod Rune | Brak Rune (#34) | Ruby | \= | +1 to All Skills<br>Adds 15-25 Weapon Damage<br>New Crafted Ring |
| Rare Ring | Unique Jewel | Zod Rune | Zeph Rune (#35) | Sapphire | \= | +1 to All Skills<br>+5% to All Elemental Skill Damage<br>New Crafted Ring |
| Unique Ring | Corruption Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Rerolled Unique Item |
| Set Ring | Corruption Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Rerolled Set Item |

## Belts
| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Belt | ELD Rune | EL Rune |  |  | \=  | +100% CTC level Level 1 Frozen Armor on level up Magic Belt |
| Magic Belt | Eld Rune | El Rune |  |  | \= | 100% Chance to cast level 1 Frozen Armor when you Level-Up<br>New Magic Belt |
| Magic Belt | Magic Jewel | RAL Rune |  |  | \=  | +1 Random Class All Skills Magic Belt |
| Magic Belt | Magic Jewel | ITH Rune | Amethyst |  | \=  | 4-10 Mana Regeneration; +10-20 Mana; +5-10% Faster Cast Rate |
| Magic Belt | Magic Jewel | Ith Rune | Amethyst |  | \= | +(4-10)% Mana Regeneration<br>+(10-20) to Mana<br>+(5-10)% Faster Cast Rate<br>New Crafted Belt |
| Magic Belt | Magic Jewel | TAL Rune | Sapphire |  | \=  | 5% chance to cast level 4 Frost Nova when struck; +3-7 Thorns; +5-10 Damage to Mana |
| Magic Belt | Magic Jewel | TAL Rune | Ruby |  | \=  | 1-3% Life Steal; +10-20 Life; +5-10% Open Wounds |
| Magic Belt | Magic Jewel | TAL Rune | Emerald |  | \=  | 1-4% Damage Reduced; 1-2% Magic Damage Reduced; +5-10 Poison Resistance; +10-30% AC |
| Magic Belt | Magic Jewel | Tal Rune | Emerald |  | \= | Physical Damage Reduced By (1-4)<br>Magic Damage Reduced By (1-2)<br>+(5-10)% Poison Resistance<br>+(10-30)% Enhanced Defense<br>New Crafted Belt |
| Magic Belt | Magic Jewel | Tal Rune | Ruby |  | \= | +(1-3)% Life stolen per hit<br>+(10-20) to Life<br>+(5-10)% Chance of Open Wounds<br>New Crafted Belt |
| Magic Belt | Magic Jewel | Tal Rune | Sapphire |  | \= | 5% Chance to cast level 4 Frost Nova when struck<br>Attacker Takes Damage of (3-7)<br>+(5-10)% Damage Taken Added To Mana<br>New Crafted Belt |
| Rare Belt | Rare Jewel | LEM Rune | MAL Rune | Gem (Any) | \=  | +10-15% Piercing Attack & +10-15% Open wounds Rare Belt |
| Rare Belt | Rare Jewel | UM Rune | IST Rune | Gem (Any) | \=  | +20-25% All Res & +30-40% Magic Find Rare Belt |
| Rare Belt | Unique Jewel | CHAM rune | JAH Rune | Gem (Any) | \=  | +Cannot Be Frozen + 10-15% Max HP Crafted Belt |
| Rare Belt | Unique Jewel | Brak Rune (#34) | Zod Rune | Ruby | \= | +1 to All Skills<br>Adds 20-30 Weapon Damage<br>New Crafted Belt |
| Rare Belt | Unique Jewel | Zeph Rune (#35) | Zod Rune | Sapphire | \= | +1 to All Skills<br>+10% to All Elemental Skill Damage<br>New Crafted Belt |

## Boots
| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Boots | EL Rune |  |  |  | \=  | +10% FRW Magic Boots |
| Magic Boots | El Rune |  |  |  | \= | +10% Faster Run/Walk Speed<br>New Magic Boots |
| Magic Boots | ELD Rune | EL Rune |  |  | \=  | +100% CTC level 1 Burst of speed on level up Magic Boots |
| Magic Boots | Eld Rune | El Rune |  |  | \= | 100% Chance to cast level 1 Burst of Speed when you Level-Up<br>New Magic Boots |
| Magic Boots | Magic Jewel | ETH Rune | Ruby |  | \=  | 1-3% Life Steal; +10-20 Life; +5-10% Regeneration |
| Magic Boots | Magic Jewel | Eth Rune | Ruby |  | \= | +(1-3)% Life stolen per hit<br>+(10-20) to Life<br>Replenish +(5-10) Life per 10 Seconds<br>New Crafted Boots |
| Magic Boots | Magic Jewel | RAL Rune | Sapphire |  | \=  | 5% chance to cast level 4 Frost Nova when struck; +3-7 Thorns; +25-60 AC vs Melee |
| Magic Boots | Magic Jewel | Ral Rune | Sapphire |  | \= | 5% Chance to cast level 4 Frost Nova when struck<br>Attacker Takes Damage of (3-7)<br>+(25-60) Defense vs. Melee<br>New Crafted Boots |
| Magic Boots | Magic Jewel | ORT Rune | Emerald |  | \=  | 1-4% Damage Reduced; 1-2% Magic Damage Reduced; +5-10 Fire Resistance; +10-30% AC |
| Magic Boots | Magic Jewel | Ort Rune | Emerald |  | \= | Physical Damage Reduced By (1-4)<br>Magic Damage Reduced By (1-2)<br>+(5-10)% Fire Resistance<br>+(10-30)% Enhanced Defense<br>New Crafted Boots |
| Magic Boots | Magic Jewel | THUL Rune | Amethyst |  | \=  | 4-10 Mana Regeneration; +10-20 Mana; +2-5% Mana |
| Magic Boots | Magic Jewel | Thul Rune | Amethyst |  | \= | +(4-10)% Mana Regeneration<br>+(10-20) to Mana<br>+(2-5)% Increased Maximum Mana<br>New Crafted Boots |
| Magic Boots | Orb of Infusion | HEL Rune | Gem (Any) |  | \=  | +15% Faster Run/Walk & +10 All Attributes Rare Boots |
| Rare Boots | Rare Jewel | UM Rune | IST Rune | Gem (Any) | \=  | +20-25% All Resists & +30-40% Magic Find Rare Boots |
| Rare Boots | Unique Jewel | Zod Rune | Brak Rune (#34) | Gem | \= | +1 to All Skills<br>Adds 20-30 Weapon Damage<br>+(20-30)% Faster Run/Walk Speed<br>New Crafted Boots |
| Rare Boots | Unique Jewel | Zod Rune | Zeph Rune (#35) | Gem | \= | +1 to All Skills<br>+10% to All Elemental Skill Damage<br>+(20-30)% Faster Run/Walk Speed<br>New Crafted Boots |

## Gloves
| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Gloves | ELD Rune | EL Rune |  |  | \=  | +100% CTC level Level 4 Battle Commands on level up Magic Gloves |
| Magic Gloves | Eld Rune | El Rune |  |  | \= | 100% Chance to cast level 4 Battle Command when you Level-Up<br>New Magic Gloves |
| Magic Gloves | Magic Jewel | NEF Rune | Ruby |  | \=  | 1-3% Life Steal; +10-20 Life |
| Magic Gloves | Magic Jewel | Nef Rune | Ruby |  | \= | +(1-3)% Life stolen per hit<br>+(10-20) to Life<br>New Crafted Gloves |
| Magic Gloves | Magic Jewel | RAL Rune |  |  | \=  | +8% Faster Attack Speed & +8% Faster Cast Rate Magic Gloves |
| Magic Gloves | Magic Jewel | RAL Rune | Emerald |  | \=  | 1-4% Damage Reduced; 1-2% Magic Damage Reduced; +5-10 Cold Resistance; +10-30% AC |
| Magic Gloves | Magic Jewel | Ral Rune | Emerald |  | \= | Physical Damage Reduced By (1-4)<br>Magic Damage Reduced By (1-2)<br>+(5-10)% Cold Resistance<br>+(10-30)% Enhanced Defense<br>New Crafted Gloves |
| Magic Gloves | Magic Jewel | ORT Rune | Sapphire |  | \=  | 5% chance to cast level 4 Frost Nova when struck; +3-7 Thorns; +1 Knockback |
| Magic Gloves | Magic Jewel | ORT Rune | Amethyst |  | \=  | 4-10 Mana Regeneration; +10-20 Mana; +1-3 Mana per Kill |
| Magic Gloves | Magic Jewel | Ort Rune | Amethyst |  | \= | +(4-10)% Mana Regeneration<br>+(10-20) to Mana<br>+(1-3) Mana after each Kill<br>New Crafted Gloves |
| Magic Gloves | Magic Jewel | Ort Rune | Sapphire |  | \= | 5% Chance to cast level 4 Frost Nova when struck<br>Attacker Takes Damage of (3-7)<br>Knockback<br>New Crafted Gloves |
| Rare Gloves | Rare Jewel | MAL Rune | SHAEL Rune | Gem (Any) | \=  | +1 Random Skill Tab (current class) & +10-15% Increased Attack Speed Rare Gloves |
| Rare Gloves | Rare Jewel | MAL Rune | DOL Rune | Gem(Any) | \=  | +1 Random Skill Tab (current class) & +10-15% Faster Cast Rate Rare Gloves |
| Rare Gloves | Rare Jewel | UM Rune | IST Rune | Gem (Any) | \=  | +20-25 All Res & +30% Magic Find Rare Gloves |
| Rare Gloves | Unique Jewel | Zod Rune | Brak Rune (#34) | Ruby | \= | +1 to All Skills<br>Adds 20-40 Weapon Damage<br>New Crafted Gloves |
| Rare Gloves | Unique Jewel | Zod Rune | Zeph Rune (#35) | Sapphire | \= | +1 to All Skills<br>+10% to All Elemental Skill Damage<br>+(10-20)% Faster Cast Rate<br>New Crafted Gloves |

## Helms
| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Helm | ELD Rune | EL Rune |  |  | \=  | +100% CTC level Level 1 Shout on level up Magic Helm |
| Magic Helm | Eld Rune | El Rune |  |  | \= | 100% Chance to cast level 1 Shout when you Level-Up<br>New Magic Helm |
| Magic Helm | Magic Jewel | NEF Rune | Amethyst |  | \=  | 4-10 Mana Regeneration; +10-20 Mana; +1-4 Mana Steal |
| Magic Helm | Magic Jewel | Nef Rune | Amethyst |  | \= | +(4-10)% Mana Regeneration<br>+(10-20) to Mana<br>+(1-4)% Mana stolen per hit<br>New Crafted Helm |
| Magic Helm | Magic Jewel | ITH Rune | Sapphire |  | \=  | 5% chance to cast level 4 Frost Nova when struck; +3-7 Thorns; +25-50 AC vs Missiles |
| Magic Helm | Magic Jewel | ITH Rune | Emerald |  | \=  | 1-4% Damage Reduced; 1-2% Magic Damage Reduced; +5-10 Lightning Resistance; +10-30% AC |
| Magic Helm | Magic Jewel | Ith Rune | Emerald |  | \= | Physical Damage Reduced By (1-4)<br>Magic Damage Reduced By (1-2)<br>+(5-10)% Lightning Resistance<br>+(10-30)% Enhanced Defense<br>New Crafted Helm |
| Magic Helm | Magic Jewel | Ith Rune | Sapphire |  | \= | 5% Chance to cast level 4 Frost Nova when struck<br>Attacker Takes Damage of (3-7)<br>+(25-50) Defense vs. Missile<br>New Crafted Helm |
| Magic Helm | Magic Jewel | RAL Rune | Ruby |  | \=  | 1-3% Life Steal; +10-20 Life; +5-10% Deadly Strike |
| Magic Helm | Magic Jewel | Ral Rune | Ruby |  | \= | +(1-3)% Life stolen per hit<br>+(10-20) to Life<br>+(5-10)% Deadly Strike<br>New Crafted Helm |
| Rare Helm (Amazon only) | Rare Jewel | Shael Rune | El Rune | Ruby | \= | +1 to Amazon Skill Levels<br>+(10-15)% Increased Attack Speed<br>New Rare Helm |
| Rare Helm (Assassin only) | Rare Jewel | Shael Rune | El Rune | Ruby | \= | +1 to Assassin Skill Levels<br>+(10-15)% Increased Attack Speed<br>New Rare Helm |
| Rare Helm (Barbarian only) | Rare Jewel | Shael Rune | El Rune | Ruby | \= | +1 to Barbarian Skill Levels<br>+(10-15)% Increased Attack Speed<br>New Rare Helm |
| Rare Helm (Druid only) | Rare Jewel | Shael Rune | El Rune | Ruby | \= | +1 to Druid Skill Levels<br>+(10-15)% Increased Attack Speed<br>New Rare Helm |
| Rare Helm (Necromancer only) | Rare Jewel | Shael Rune | El Rune | Ruby | \= | +1 to Necromancer Skill Levels<br>+(10-15)% Increased Attack Speed<br>New Rare Helm |
| Rare Helm (Paladin only) | Rare Jewel | Shael Rune | El Rune | Ruby | \= | +1 to Paladin Skill Levels<br>+(10-15)% Increased Attack Speed<br>New Rare Helm |
| Rare Helm (Sorceress only) | Rare Jewel | Shael Rune | El Rune | Ruby | \= | +1 to Sorceress Skill Levels<br>+(10-15)% Increased Attack Speed<br>New Rare Helm |
| Rare Helm (Warlock only) | Rare Jewel | Shael Rune | El Rune | Ruby | \= | +1 to Warlock Skills<br>+(10-15)% Increased Attack Speed<br>New Rare Helm |
| Rare Helm (Amazon only) | Rare Jewel | Dol Rune | El Rune | Sapphire | \= | +1 to Amazon Skill Levels<br>+(10-15)% Faster Cast Rate<br>New Rare Helm |
| Rare Helm (Assassin only) | Rare Jewel | Dol Rune | El Rune | Sapphire | \= | +1 to Assassin Skill Levels<br>+(10-15)% Faster Cast Rate<br>New Rare Helm |
| Rare Helm (Barbarian only) | Rare Jewel | Dol Rune | El Rune | Sapphire | \= | +1 to Barbarian Skill Levels<br>+(10-15)% Faster Cast Rate<br>New Rare Helm |
| Rare Helm (Druid only) | Rare Jewel | Dol Rune | El Rune | Sapphire | \= | +1 to Druid Skill Levels<br>+(10-15)% Faster Cast Rate<br>New Rare Helm |
| Rare Helm (Necromancer only) | Rare Jewel | Dol Rune | El Rune | Sapphire | \= | +1 to Necromancer Skill Levels<br>+(10-15)% Faster Cast Rate<br>New Rare Helm |
| Rare Helm (Paladin only) | Rare Jewel | Dol Rune | El Rune | Sapphire | \= | +1 to Paladin Skill Levels<br>+(10-15)% Faster Cast Rate<br>New Rare Helm |
| Rare Helm (Sorceress only) | Rare Jewel | Dol Rune | El Rune | Sapphire | \= | +1 to Sorceress Skill Levels<br>+(10-15)% Faster Cast Rate<br>New Rare Helm |
| Rare Helm (Warlock only) | Rare Jewel | Dol Rune | El Rune | Sapphire | \= | +1 to Warlock Skills<br>+(10-15)% Faster Cast Rate<br>New Rare Helm |
| Rare Helm | Rare Jewel | UM Rune | EL Rune | Gem (Any) | \=  | +20-25% All Resists & +20-30% Faster Hit Recovery Rare Helm |
| Magic Helm | Orb of Infusion | RAL Rune | Gem (Any) |  | \=  | +15% Faster Hit Recovery Rare Helm & 50% Defense |
| Rare Helm | Unique Jewel | Zod Rune | Vex Rune | Ruby | \= | +(1-2) to All Skills<br>+50% Enhanced Weapon Damage<br>New Crafted Helm |
| Rare Helm | Unique Jewel | Zod Rune | Vex Rune | Sapphire | \= | +(1-2) to All Skills<br>+10% to All Elemental Skill Damage<br>New Crafted Helm |
| Rare Helm | Unique Jewel | BER rune | JAH Rune | Gem(Any) | \=  | +2 All Skills & +5-10% Physical Damage Reduction & +5-10% Max HP Crafted Helm |
| Helm | Infusion Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Return Helm Base as White, Elite, Maximum Sockets, Superior Rolls and +15% Enhanced Defense |

## Shields
| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Shield | ELD Rune | EL Rune |  |  | \=  | +100% CTC level Level 4 Holy Shield on Level Up & +5 All Attributes Magic Shield |
| Magic Shield | Eld Rune | El Rune |  |  | \= | 100% Chance to cast level 4 Holy Shield when you Level-Up<br>+5 to all Attributes<br>New Magic Shield |
| Magic Shield | Magic Jewel | NEF Rune | Emerald |  | \=  | 1-4% Damage Reduced; 1-2% Magic Damage Reduced; +5-10 Magic Resistance; +10-30% AC |
| Magic Shield | Magic Jewel | Nef Rune | Emerald |  | \= | Physical Damage Reduced By (1-4)<br>Magic Damage Reduced By (1-2)<br>+(5-10)% Magic Resistance<br>+(10-30)% Enhanced Defense<br>New Crafted Shield |
| Magic Shield | Magic Jewel | ETH Rune | Sapphire |  | \=  | 5% chance to cast level 4 Frost Nova when struck; +3-10 Thorns; +5-10% Block |
| Magic Shield | Magic Jewel | ETH Rune | Amethyst |  | \=  | 4-10 Mana Regeneration; +10-20 Mana; +5-10% Block |
| Magic Shield | Magic Jewel | Eth Rune | Amethyst |  | \= | +(4-10)% Mana Regeneration<br>+(10-20) to Mana<br>(5-10)% Increased Chance of Blocking<br>New Crafted Shield |
| Magic Shield | Magic Jewel | Eth Rune | Sapphire |  | \= | 5% Chance to cast level 4 Frost Nova when struck<br>Attacker Takes Damage of (3-10)<br>(5-10)% Increased Chance of Blocking<br>New Crafted Shield |
| Magic Shield | Magic Jewel | ITH Rune | Ruby |  | \=  | 1-3% Life Steal; +10-20 Life; +4-7 Thorns |
| Magic Shield | Magic Jewel | Ith Rune | Ruby |  | \= | +(1-3)% Life stolen per hit<br>+(10-20) to Life<br>Attacker Takes Damage of (4-7)<br>New Crafted Shield |
| Rare Shield | Rare Jewel | UM Rune | SHAEL Rune | Gem (Any) | \=  | +20% All Res & +20% Increase Block Chance & +20-30% Faster Hit Recovery Rare Shield |
| Magic Shield | Orb of Infusion | THUL Rune | Gem (Any) |  | \=  | +1 Current Class Skills |
| Magic Shield (Amazon only) | Orb of Infusion | Thul Rune | Gem |  | \= | +1 to Amazon Skill Levels<br>New Rare Shield |
| Magic Shield (Assassin only) | Orb of Infusion | Thul Rune | Gem |  | \= | +1 to Assassin Skill Levels<br>New Rare Shield |
| Magic Shield (Barbarian only) | Orb of Infusion | Thul Rune | Gem |  | \= | +1 to Barbarian Skill Levels<br>New Rare Shield |
| Magic Shield (Druid only) | Orb of Infusion | Thul Rune | Gem |  | \= | +1 to Druid Skill Levels<br>New Rare Shield |
| Magic Shield (Necromancer only) | Orb of Infusion | Thul Rune | Gem |  | \= | +1 to Necromancer Skill Levels<br>New Rare Shield |
| Magic Shield (Paladin only) | Orb of Infusion | Thul Rune | Gem |  | \= | +1 to Paladin Skill Levels<br>New Rare Shield |
| Magic Shield (Sorceress only) | Orb of Infusion | Thul Rune | Gem |  | \= | +1 to Sorceress Skill Levels<br>New Rare Shield |
| Magic Shield (Warlock only) | Orb of Infusion | Thul Rune | Gem |  | \= | +1 to Warlock Skills<br>New Rare Shield |
| Rare Shield | Rare Jewel | UM Rune | IST Rune | Gem (Any) | \=  | +20-25% All Res & +30-40% Magic Find Rare Shield |
| Rare Shield | Unique Jewel | Ber Rune | Um Rune | Gem | \= | +2 to All Skills<br>+(30-40)% to All Resistances<br>+10% Physical Damage Reduction<br>New Crafted Shield |
| Rare Shield | Unique Jewel | Zod Rune | Ohm Rune | Gem | \= | +2 to All Skills<br>+(50-100)% Enhanced Weapon Damage<br>New Crafted Shield |
| Shield | Infusion Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Return Shield Base as White, Elite, Maximum Sockets, Superior Rolls and +15% Enhanced Defense |
| Rare Shield | Unique Jewel | Zod Rune | Zeph Rune (#35) | Gem | \= | +2 to All Skills<br>+(15-20)% to All Elemental Skill Damage<br>New Crafted Shield |

## Body Armor
| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Body Armor | ELD Rune | EL Rune |  |  | \=  | +100% CTC level Level 5 Oak Sage on level up Magic Body Armor |
| Magic Armor | Eld Rune | El Rune |  |  | \= | 100% Chance to cast level 5 Oak Sage when you Level-Up<br>New Magic Armor |
| Magic Body Armor | Magic Jewel | NEF Rune | Sapphire |  | \=  | 5% chance to cast level 4 Frost Nova when struck; +3-10 Thorns; +10-20% Faster Hit Recovery |
| Magic Armor | Magic Jewel | Nef Rune | Sapphire |  | \= | 5% Chance to cast level 4 Frost Nova when struck<br>Attacker Takes Damage of (3-10)<br>+(10-20)% Faster Hit Recovery<br>New Crafted Armor |
| Magic Body Armor | Magic Jewel | ETH Rune | Emerald |  | \=  | 1-4% Damage Reduced; 1-2% Magic Damage Reduced; Half Freeze Duration; +10-30% AC |
| Magic Armor | Magic Jewel | Eth Rune | Emerald |  | \= | Physical Damage Reduced By (1-4)<br>Magic Damage Reduced By (1-2)<br>Half Freeze Duration<br>+(10-30)% Enhanced Defense<br>New Crafted Armor |
| Magic Body Armor | Magic Jewel | TAL Rune | Amethyst |  | \=  | 4-10 Mana Regeneration; +10-20 Mana; +1-3 Mana per Kill |
| Magic Armor | Magic Jewel | Tal Rune | Amethyst |  | \= | +(4-10)% Mana Regeneration<br>+(10-20) to Mana<br>+(1-3) Mana after each Kill<br>New Crafted Armor |
| Magic Body Armor | Magic Jewel | THUL Rune | Ruby |  | \=  | 1-3% Life Steal; +10-20 Life; +1-3 Demon Heal |
| Magic Armor | Magic Jewel | Thul Rune | Ruby |  | \= | +(1-3)% Life stolen per hit<br>+(10-20) to Life<br>+(1-3) Life after each Demon Kill<br>New Crafted Armor |
| Rare Body Armor | Rare Jewel | HEL Rune | SHAEL Rune | Gem (Any) | \=  | +1 Current Class Skills & +30-50 HP & +10-15% Increased Attack Speed Rare Body Armor |
| Rare Armor (Amazon only) | Rare Jewel | Hel Rune | Shael Rune | Gem | \= | +1 to Amazon Skill Levels<br>+(30-50) to Life<br>+(10-15)% Increased Attack Speed<br>New Rare Armor |
| Rare Armor (Assassin only) | Rare Jewel | Hel Rune | Shael Rune | Gem | \= | +1 to Assassin Skill Levels<br>+(30-50) to Life<br>+(10-15)% Increased Attack Speed<br>New Rare Armor |
| Rare Armor (Barbarian only) | Rare Jewel | Hel Rune | Shael Rune | Gem | \= | +1 to Barbarian Skill Levels<br>+(30-50) to Life<br>+(10-15)% Increased Attack Speed<br>New Rare Armor |
| Rare Armor (Druid only) | Rare Jewel | Hel Rune | Shael Rune | Gem | \= | +1 to Druid Skill Levels<br>+(30-50) to Life<br>+(10-15)% Increased Attack Speed<br>New Rare Armor |
| Rare Armor (Necromancer only) | Rare Jewel | Hel Rune | Shael Rune | Gem | \= | +1 to Necromancer Skill Levels<br>+(30-50) to Life<br>+(10-15)% Increased Attack Speed<br>New Rare Armor |
| Rare Armor (Paladin only) | Rare Jewel | Hel Rune | Shael Rune | Gem | \= | +1 to Paladin Skill Levels<br>+(30-50) to Life<br>+(10-15)% Increased Attack Speed<br>New Rare Armor |
| Rare Armor (Sorceress only) | Rare Jewel | Hel Rune | Shael Rune | Gem | \= | +1 to Sorceress Skill Levels<br>+(30-50) to Life<br>+(10-15)% Increased Attack Speed<br>New Rare Armor |
| Rare Armor (Warlock only) | Rare Jewel | Hel Rune | Shael Rune | Gem | \= | +1 to Warlock Skills<br>+(30-50) to Life<br>+(10-15)% Increased Attack Speed<br>New Rare Armor |
| Rare Body Armor | Rare Jewel | HEL Rune | DOL Rune | Gem (Any) | \=  | +1 Current Class Skills & +30-50 Mana & +10-15% Faster Cast Rate Rare Body Armor |
| Rare Armor (Amazon only) | Rare Jewel | Hel Rune | Dol Rune | Gem | \= | +1 to Amazon Skill Levels<br>+(30-50) to Mana<br>+(10-15)% Faster Cast Rate<br>New Rare Armor |
| Rare Armor (Assassin only) | Rare Jewel | Hel Rune | Dol Rune | Gem | \= | +1 to Assassin Skill Levels<br>+(30-50) to Mana<br>+(10-15)% Faster Cast Rate<br>New Rare Armor |
| Rare Armor (Barbarian only) | Rare Jewel | Hel Rune | Dol Rune | Gem | \= | +1 to Barbarian Skill Levels<br>+(30-50) to Mana<br>+(10-15)% Faster Cast Rate<br>New Rare Armor |
| Rare Armor (Druid only) | Rare Jewel | Hel Rune | Dol Rune | Gem | \= | +1 to Druid Skill Levels<br>+(30-50) to Mana<br>+(10-15)% Faster Cast Rate<br>New Rare Armor |
| Rare Armor (Necromancer only) | Rare Jewel | Hel Rune | Dol Rune | Gem | \= | +1 to Necromancer Skill Levels<br>+(30-50) to Mana<br>+(10-15)% Faster Cast Rate<br>New Rare Armor |
| Rare Armor (Paladin only) | Rare Jewel | Hel Rune | Dol Rune | Gem | \= | +1 to Paladin Skill Levels<br>+(30-50) to Mana<br>+(10-15)% Faster Cast Rate<br>New Rare Armor |
| Rare Armor (Sorceress only) | Rare Jewel | Hel Rune | Dol Rune | Gem | \= | +1 to Sorceress Skill Levels<br>+(30-50) to Mana<br>+(10-15)% Faster Cast Rate<br>New Rare Armor |
| Rare Armor (Warlock only) | Rare Jewel | Hel Rune | Dol Rune | Gem | \= | +1 to Warlock Skills<br>+(30-50) to Mana<br>+(10-15)% Faster Cast Rate<br>New Rare Armor |
| Magic Body Armor | Orb of Infusion | RAL Rune | Gem (Any) |  | \=  | +20% Faster Run/Walk & +100 Defense Rare Body Armor |
| Rare Body Armor | Rare Jewel | UM Rune | IST Rune | Gem (Any) | \=  | +20-25 All Res & +20-40% Magic Find Rare Body Armor |
| Set Armor | Orb of Assemblage | 5 Orb of Renewal |  |  | \=  | Rerolled Set Item |
| Unique Armor | Orb of Conversion | 5 Orb of Renewal |  |  | \=  | Rerolled Unique Item |
| Rare Body Armor | Unique Jewel | ZOD Rune | BER Rune | UM RUNE | \=  | +2 All Skills & +150-175% Enhanced Defense & +20-30% All Resists +5-10% Physical Damage Reduction Crafted Body Armor |
| Torso | Infusion Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Return Torso Base as White, Elite, Maximum Sockets, Superior Rolls and +15% Enhanced Defense |
| Unique Armor | Corruption Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Rerolled Unique Item |
| Set Armor | Corruption Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Rerolled Set Item |

## Weapons
| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Axe \[N\] | Knife |  |  |  | \= | Normal Quality Throwing Axe \[N\] |
| Knife | Diamond | Staff | Belt |  | \= | Magic Polearm (Forced prefix) |
| Magic Weapon | Ruby | 4 × Healing Potion |  |  | \= | New Magic Weapon (Forced suffix) |
| Magic Weapon | Magic Jewel | TIR Rune | Sapphire |  | \=  | 5% chance to cast level 4 Frost Nova when struck; +3-7 Thorns; +35-60% Damage |
| Magic Weapon | Magic Jewel | TIR Rune | Amethyst |  | \=  | 4-10 Mana Regeneration; +10-20 Mana; +1-5% Mana |
| Magic Weapon | Magic Jewel | Tir Rune | Amethyst |  | \= | +(4-10)% Mana Regeneration<br>+(10-20) to Mana<br>+(1-5)% Increased Maximum Mana<br>New Crafted Weapon |
| Magic Weapon | Magic Jewel | Tir Rune | Sapphire |  | \= | 5% Chance to cast level 4 Frost Nova when struck<br>Attacker Takes Damage of (3-7)<br>+(35-60)% Enhanced Weapon Damage<br>New Crafted Weapon |
| Magic Weapon | Magic Jewel | ORT Rune | Ruby |  | \=  | 1-4% Life Steal; +10-20 Life; +35-60% Damage |
| Magic Weapon | Magic Jewel | Ort Rune | Ruby |  | \= | +(1-4)% Life stolen per hit<br>+(10-20) to Life<br>+(35-60)% Enhanced Weapon Damage<br>New Crafted Weapon |
| Magic Weapon | Magic Jewel | SOL Rune | Emerald |  | \=  | 1-4% Damage Reduced; 1-2% Magic Damage Reduced; +5-10% Enhanced Defense |
| Magic Weapon | Magic Jewel | Sol Rune | Emerald |  | \= | Physical Damage Reduced By (1-4)<br>Magic Damage Reduced By (1-2)<br>+(5-10)% Enhanced Defense<br>New Crafted Weapon |
| Magic Weapon | Orb of Infusion | SOL Rune | SHAEL Rune | Gem (Any) | \=  | +1 Min Damage/lvl & +1 Max Damage/lvl & +20% Increased Attack Speed Rare Weapon |
| Any 2 Hand Rare Weapon | Unique Jewel | BRAK Rune | OHM Rune | Gem (Any) | \=  | +2-3 All Skills & 200-250% Enhanced Weapon Damage & +30-40 Increased Attack Speed Crafted Weapon |
| Any 1 Hand Rare Weapon | Unique Jewel | BRAK Rune | OHM Rune | Gem (Any) | \=  | +2 All Skills & 150-200% Enhanced Weapon Damage & +20-30 Increased Attack Speed Crafted Weapon |
| Rare 1H Weapons | Unique Jewel | Brak Rune (#34) | Ohm Rune | Gem | \= | +2 to All Skills<br>+(150-200)% Enhanced Weapon Damage<br>+(20-30)% Increased Attack Speed<br>New Crafted 1H Weapons |
| Rare Missile Weapon | Unique Jewel | Brak Rune (#34) | Ohm Rune | Gem | \= | +(2-3) to All Skills<br>+(200-250)% Enhanced Weapon Damage<br>+(30-40)% Increased Attack Speed<br>New Crafted Missile Weapon |
| Rare Slam Weapons | Unique Jewel | Brak Rune (#34) | Ohm Rune | Gem | \= | +(2-3) to All Skills<br>+(200-250)% Enhanced Weapon Damage<br>+(30-40)% Increased Attack Speed<br>New Crafted Slam Weapons |
| Rare Spears and Polearms | Unique Jewel | Brak Rune (#34) | Ohm Rune | Gem | \= | +(2-3) to All Skills<br>+(200-250)% Enhanced Weapon Damage<br>+(30-40)% Increased Attack Speed<br>New Crafted Spears and Polearms |
| Set Weapon | Orb of Assemblage | 5 Orb of Renewal |  |  | \=  | Rerolled Set Item |
| Unique Weapon | Orb of Conversion | 5 Orb of Renewal |  |  | \=  | Rerolled Unique Item |
| Non-Throwing Weapon | Infusion Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Return Weapon Base as White, Elite, Maximum Sockets, Superior Rolls and +15% Enhanced Damage |
| Any 2 Hand Rare Weapon | Unique Jewel | ZEPH Rune | CHAM Rune | Gem (Any) | \=  | +2-3 All Skills & +20-30% All Elemental damage Crafted Weapon |
| Any 1 Hand Rare Weapon | Unique Jewel | ZEPH Rune | CHAM Rune | Gem (Any) | \=  | +2 All Skills & +10-15% All Elemental damage Crafted Weapon |
| Rare 1H Weapons | Unique Jewel | Zeph Rune (#35) | Cham Rune | Gem | \= | +2 to All Skills<br>+(10-15)% to All Elemental Skill Damage<br>New Crafted 1H Weapons |
| Rare Missile Weapon | Unique Jewel | Zeph Rune (#35) | Cham Rune | Gem | \= | +(2-3) to All Skills<br>+(20-30)% to All Elemental Skill Damage<br>New Crafted Missile Weapon |
| Rare Slam Weapons | Unique Jewel | Zeph Rune (#35) | Cham Rune | Gem | \= | +(2-3) to All Skills<br>+(20-30)% to All Elemental Skill Damage<br>New Crafted Slam Weapons |
| Rare Spears and Polearms | Unique Jewel | Zeph Rune (#35) | Cham Rune | Gem | \= | +(2-3) to All Skills<br>+(20-30)% to All Elemental Skill Damage<br>New Crafted Spears and Polearms |
| Unique Weapon | Corruption Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Rerolled Unique Item |
| Set Weapon | Corruption Orb | Mephisto's Animus | Baal's Calamity | Diablo's Ire | \=  | Rerolled Set Item |
| Any 2 Hand Rare Weapon | Unique Jewel | MYR Rune | ZOD Rune | Gem (Any) | \=  | +2-3 All Skills & +20-25% Magic Skill Damage Crafted Weapon |
| Any 1 Hand Rare Weapon | Unique Jewel | MYR Rune | ZOD Rune | Gem (Any) | \=  | +2 All Skills & +15-20% Magic Skill Damage Crafted Weapon |
| Rare 1H Weapons | Unique Jewel | Myr Rune (#36) | Zod Rune | Gem | \= | +2 to All Skills<br>+(15-20)% to Magic Skill Damage<br>New Crafted 1H Weapons |
| Rare Missile Weapon | Unique Jewel | Myr Rune (#36) | Zod Rune | Gem | \= | +(2-3) to All Skills<br>+(20-25)% to Magic Skill Damage<br>New Crafted Missile Weapon |
| Rare Slam Weapons | Unique Jewel | Myr Rune (#36) | Zod Rune | Gem | \= | +(2-3) to All Skills<br>+(20-25)% to Magic Skill Damage<br>New Crafted Slam Weapons |
| Rare Spears and Polearms | Unique Jewel | Myr Rune (#36) | Zod Rune | Gem | \= | +(2-3) to All Skills<br>+(20-25)% to Magic Skill Damage<br>New Crafted Spears and Polearms |
| Any 2 Hand Rare Weapon | Unique Jewel | BRAK Rune | DEM Rune | Gem (Any) | \=  | +2-3 All Skills & 200-250% Enhanced Weapon Damage & -15 To enemy physical resist Crafted Weapon |
| Any 1 Hand Rare Weapon | Unique Jewel | BRAK Rune | DEM Rune | Gem (Any) | \=  | +2 All Skills & 150-200% Enhanced Weapon Damage & -10 To enemy physical resist Crafted Weapon |
| Any 2 Hand Rare Weapon | Unique Jewel | ZEPH Rune | GRIT Rune | Gem (Any) | \=  | +2-3 All Skills & -20-30% To All Enemy Elemental Resist Crafted Weapon |
| Any 1 Hand Rare Weapon | Unique Jewel | ZEPH Rune | GRIT Rune | Gem (Any) | \=  | +2 All Skills & -10-15% To All Enemy Elemental Resist Crafted Weapon |
| Rare 1H Weapons | Unique Jewel | Brak Rune (#34) | Dem Rune (#38) | Gem | \= | +2 to All Skills<br>+(150-200)% Enhanced Weapon Damage<br>-10% to Enemy Physical Damage Resistance<br>New Crafted 1H Weapons |
| Rare 1H Weapons | Unique Jewel | Zeph Rune (#35) | Grit Rune (#37) | Gem | \= | +2 to All Skills<br>-(10-15)% to All Enemy Elemental Resistances<br>New Crafted 1H Weapons |
| Rare Missile Weapon | Unique Jewel | Brak Rune (#34) | Dem Rune (#38) | Gem | \= | +(2-3) to All Skills<br>+(200-250)% Enhanced Weapon Damage<br>-15% to Enemy Physical Damage Resistance<br>New Crafted Missile Weapon |
| Rare Missile Weapon | Unique Jewel | Zeph Rune (#35) | Grit Rune (#37) | Gem | \= | +(2-3) to All Skills<br>-(20-30)% to All Enemy Elemental Resistances<br>New Crafted Missile Weapon |
| Rare Slam Weapons | Unique Jewel | Brak Rune (#34) | Dem Rune (#38) | Gem | \= | +(2-3) to All Skills<br>+(200-250)% Enhanced Weapon Damage<br>-15% to Enemy Physical Damage Resistance<br>New Crafted Slam Weapons |
| Rare Slam Weapons | Unique Jewel | Zeph Rune (#35) | Grit Rune (#37) | Gem | \= | +(2-3) to All Skills<br>-(20-30)% to All Enemy Elemental Resistances<br>New Crafted Slam Weapons |
| Rare Spears and Polearms | Unique Jewel | Brak Rune (#34) | Dem Rune (#38) | Gem | \= | +(2-3) to All Skills<br>+(200-250)% Enhanced Weapon Damage<br>-15% to Enemy Physical Damage Resistance<br>New Crafted Spears and Polearms |
| Rare Spears and Polearms | Unique Jewel | Zeph Rune (#35) | Grit Rune (#37) | Gem | \= | +(2-3) to All Skills<br>-(20-30)% to All Enemy Elemental Resistances<br>New Crafted Spears and Polearms |
| Any 2 Hand Rare Weapon | Unique Jewel | HEV Rune | MYR Rune | Gem (Any) | \=  | +2-3 All Skills & -15-20% To enemy Magic Resist Crafted Weapon |
| Any 1 Hand Rare Weapon | Unique Jewel | HEV Rune | MYR Rune | Gem (Any) | \=  | +2 All Skills & -10-15% To enemy Magic Resist  Crafted Weapon |
| Rare 1H Weapons | Unique Jewel | Hev Rune (#39) | Myr Rune (#36) | Gem | \= | +2 to All Skills<br>-(10-15)% to Enemy Magic Resistance<br>New Crafted 1H Weapons |
| Rare Missile Weapon | Unique Jewel | Hev Rune (#39) | Myr Rune (#36) | Gem | \= | +(2-3) to All Skills<br>-(15-20)% to Enemy Magic Resistance<br>New Crafted Missile Weapon |
| Rare Slam Weapons | Unique Jewel | Hev Rune (#39) | Myr Rune (#36) | Gem | \= | +(2-3) to All Skills<br>-(15-20)% to Enemy Magic Resistance<br>New Crafted Slam Weapons |
| Rare Spears and Polearms | Unique Jewel | Hev Rune (#39) | Myr Rune (#36) | Gem | \= | +(2-3) to All Skills<br>-(15-20)% to Enemy Magic Resistance<br>New Crafted Spears and Polearms |

## Charms



| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Charms | Jewel Magic | Shael Rune | EL Rune |  | \=  | Crafted Magic Grand Charm +5-10% Faster Attack Speed |
| Charms | Jewel Magic | Dol Rune | EL Rune |  | \=  | Crafted Magic Grand Charm +5-10% Faster Cast Rate |
| Charms | Jewel Magic | Hel Rune | EL Rune |  | \=  | Crafted Magic Grand Charm +5-10% Exp |
| Charms | Jewel Magic | PUL Rune | EL Rune |  | \=  | Crafted Magic Grand Charm +50-70Def & 10-15 Weapon Dmg |
| Charms | Jewel Magic | UM Rune | EL Rune |  | \=  | Crafted Magic Grand Charm +8-10 All-res |
| Charms | Jewel Magic | KO Rune | FAL Rune |  | \=  | Crafted Magic Grand Charm +5-8Dexterity & +5-8Strength & +5-8% Enhanced Dmg |
| Charms | Jewel Magic | IST Rune | EL Rune |  | \=  | Crafted Magic Grand Charm +25-40% Magic Find & 50-80% Gold Find |
| Charms | Jewel Rare | Vex Rune | HEL Rune | Topaz | \=  | Crafted Grand Charm & +1 Random Assassin Skill Tab |
| Charms | Jewel Rare | Vex Rune | HEL Rune | Ruby | \=  | Crafted Grand Charm & +1 Random Barbarian Skill Tab |
| Charms | Jewel Rare | Vex Rune | HEL Rune | Sapphire | \=  | CraftedGrand Charm & +1 Random Sorceress Skill Tab |
| Charms | Jewel Rare | Vex Rune | HEL Rune | Emerald | \=  | Crafted Grand Charm & +1 Random Druid Skill Tab |
| Charms | Jewel Rare | Vex Rune | HEL Rune | Skull | \=  | Crafted Grand Charm & +1 Random Necromancer Skill Tab |
| Charms | Jewel Rare | Vex Rune | HEL Rune | Amethyst | \=  | Crafted Grand Charm & +1 Random Amazon Skill Tab |
| Charms | Jewel Rare | Vex Rune | HEL Rune | Diamond | \=  | Crafted Grand Charm & +1 Random Paladin Skill Tab |
| Charms | Jewel Rare | Vex Rune | HEL Rune | Chaos Onyx | \=  | Crafted Grand Charm & +1 Random Warlock Skill Tab |
| Magic Grand Charm | Rare Jewel | Hel Rune | Vex Rune | Amethyst | \= | +1 Random Skill Tab (Amazon Only)<br>New Crafted Grand Charm |
| Magic Grand Charm | Rare Jewel | Hel Rune | Vex Rune | Chaos Onyx | \= | +1 Random Skill Tab (Warlock Only)<br>New Crafted Grand Charm |
| Magic Grand Charm | Rare Jewel | Hel Rune | Vex Rune | Diamond | \= | +1 Random Skill Tab (Paladin Only)<br>New Crafted Grand Charm |
| Magic Grand Charm | Rare Jewel | Hel Rune | Vex Rune | Emerald | \= | +1 Random Skill Tab (Druid Only)<br>New Crafted Grand Charm |
| Magic Grand Charm | Rare Jewel | Hel Rune | Vex Rune | Ruby | \= | +1 Random Skill Tab (Barbarian Only)<br>New Crafted Grand Charm |
| Magic Grand Charm | Rare Jewel | Hel Rune | Vex Rune | Sapphire | \= | +1 Random Skill Tab (Sorceress Only)<br>New Crafted Grand Charm |
| Magic Grand Charm | Rare Jewel | Hel Rune | Vex Rune | Skull | \= | +1 Random Skill Tab (Necromancer Only)<br>New Crafted Grand Charm |
| Magic Grand Charm | Rare Jewel | Hel Rune | Vex Rune | Topaz | \= | +1 Random Skill Tab (Assassin Only)<br>New Crafted Grand Charm |


## Sunder Charms

> The renewed sunders now roll:
> - Affix 1: extra 5-15% elemental skill damage or 5-15% elemental pierce (enhanced weapon damage 50-100%) or +1 to elemental skills.
> - Affix 2: 20-30% magic find or 40-60% gold find.
> - Affix 3: 20-50 HP or 20-50 mana or 50-100 defense.
> - Affix 4: 10-20% faster run/walk or 15-20% faster hit recovery or 5-10 all stats.
> - Affix 5: Remove negative resist penalty or half the resist penalty.
> - Affix 6: 5-15% increased attack speed or 5-15% faster cast rate.

> - **<span style="color:red">You can only hold one renewed sunder charm of a single element.</span>**  
> <span style="color:red">Be sure to put already crafted ones in shared stash when you try to craft them</span>

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **Reagent 6** | **Reagent 7** | **Reagent 8** | **Guaranteed Stats** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **RENEWED SUNDER CHARMS** | | | | | | | | |
| Unique Charm:<br>Latent Flame Rift (Fire) | Unique Jewel | SUR Rune | Orb of Conversion | Deep Worldstone Shard | | | \= | Renewed Flame Rift |
| Unique Charm:<br>Latent Cold Rupture (Cold) | Unique Jewel | SUR Rune | Orb of Conversion | Eastern Worldstone Shard | | | \= | Renewed Cold Rupture |
| Unique Charm:<br>Latent Crack of the Heavens (Lightning) | Unique Jewel | SUR Rune | Orb of Conversion | Southern Worldstone Shard | | | \= | Renewed Crack of the Heavens |
| Unique Charm:<br>Latent Rotting Fissure (Poison) | Unique Jewel | SUR Rune | Orb of Conversion | Western Worldstone Shard | | | \= | Renewed Rotting Fissure |
| Unique Charm:<br>Latent Bone Break (Physical) | Unique Jewel | SUR Rune | Orb of Conversion | Northern Worldstone Shard | | | \= | Renewed Bone Break |
| Unique Charm:<br>Latent Black Cleft (Magic) | Unique Jewel | SUR Rune | Orb of Conversion | Northern Worldstone Shard | Southern Worldstone Shard | Deep Worldstone Shard | \= | Renewed Black Cleft |
| **Reset renewed sunder back to its latent version** | | | | | | | | |
| Charm:<br>Renewed Sunder<br>Any Type | HEL Rune | Gem Bag (200 Gems) | | | | | \= | Latent Charm of the same type |

## Jewel Crafts
| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Sunder Charms | Unique Jewel | Gem Bag (100 Gems) |  |  | \=  | Winter Facet |
| Sunder Charms | Unique Jewel | Gem Bag (100 Gems) |  |  | \=  | Summer Facet |
| Sunder Charms | Unique Jewel | Gem Bag (100 Gems) |  |  | \=  | Spring Facet |
| Sunder Charms | Unique Jewel | Gem Bag (100 Gems) |  |  | \=  | Autumn Facet |
| Sunder Charms | Unique Jewel | Gem Bag (100 Gems) |  |  | \=  | Star Facet |
| Sunder Charms | 1 Unique Jewel | Gem Bag (100 Gems) |  |  | \=  | Jade Facet |
| Sunder Charms | 2 Unique Jewel | Gem Bag (100 Gems) |  |  | \=  | Heaven Facet |


[Back to contents](#contents)