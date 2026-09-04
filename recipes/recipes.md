---
title: Recipes
description: Cube Recipes, Enchants, and Crafting recipes
published: true
date: 2026-09-04T17:33:31.997Z
tags: crafting, recipes, enchants
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

| Term | Meaning |
| --- | --- |
| `plvl` | The result's level is based on the character's level. |
| `ilvl` | The result's level is based on the input item's level. |
| `CTC` | Chance to Cast. |
| `oskill` | A skill usable by any class. |



# Cube Recipes

Horadric Cube recipes that players may find useful on their journeys.

**Sections:** [Sockets](#socket-recipes) | [Unsocket](#unsocket-recipes) | [Conversion](#conversion-recipes) | [Recycle](#recycle-recipes) | [Reroll](#reroll-recipes) | [Base Upgrades](#armor--weapon-base-upgrade-recipes) | [Repair](#repair-recipes) | [Portals](#portal-recipes)

## Socket Recipes

- **Can use:** Weapons, Shields, Body Armor, and Helms.
- **Cannot use:** Jewelry, Belts, Gloves, and Boots.
- **Socket limit:** Depends on item level and the base. Check the [maximum socket count for each base](https://www.d2r-reimagined.com/data/bases) before punching sockets.
<br> 

| **Reagent 1** | **Reagent 2** | **=** | **Outcome** |
| :--- | :--- | :--- | :--- |
| Item (White)  <br>OR  <br>Item (Magic) | \# Magic Jewels | \=  | \# Sockets |
| Item (Rare)  <br>OR  <br>Item (Set) | \# Rare Jewels | \=  | \# Sockets |
| Item (Unique)  <br>OR  <br>Item (Crafted) | \# Unique Jewels | \=  | \# Sockets |
| Item | Orb of Socketing | \=  | #-# Sockets (Random) **\*** |

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
| 9 Magic Jewels | | | \= | Rare Jewel |
| 6 Rare Jewels | | | \= | Unique Jewel |
| Standard of Heroes <br>(100% drop from Ubers) | TP Tome \* | | \= | Standard of Terror <br><br>**Selling this to any vendor spawns DClone <br>in place of next Super Unique monster** <br>(sells just like SOJ) |
| Uber Spirits (1 of each) | | | \= | Hellfire Torch |
| 2 Unstacked Runes | TP Tome \* | | \= | 1 Rune Higher |
| 9 Unstacked Runes | | | \= | 1 Rune 3 Levels Higher |
| Stacked Rune (Qty ≥ 2) | TP Tome \* | | \= | 1 Rune Higher<br><br>Stack Qty - 2 |
| 1 Unstacked Rune | ID Tome \* | | \= | 1 Rune Lower |
| Stacked Rune (Qty ≥ 1) | ID Tome \* | | \= | 1 Rune Lower<br><br>Stack Qty - 1 |
| Healing Potion  <br>(Any) | Gem (Any) | | \= | Rejuvenation Potion |
| 3 Rejuvenation Potions | | | \= | Full Rejuvenation Potion |
| Healing Potion  <br>(Any) | 3 Gems (Any) | | \= | Full Rejuvenation Potion |
| Healing Potion  <br>(Any) | Gem Bag (3 Gems) | | \= | Full Rejuvenation Potion |
| 5 Orb of Infusion | Uber Spirits (1 of each) | | \= | Orb of Conversion |
| Armor / Weapon / Shield  <br>**_DOES NOT WORK ON:_** <br>Indestructible items<br>Bows or Crossbows<br>Items without Durability | Unique Jewel | OHM Rune | \= | Ethereal Item |
| Armor / Weapon / Shield  <br>(Any) | EL Rune | HEL Rune | \= | Becomes White Base Item<br><br>**Item is regenerated as a new white item. <br>Enchants/Corruption wiped.** |
| Weapon / Torso / Shield  <br>(Any) | Orb of Infusion | Uber Spirits (1 of each) | \= | Becomes White, Superior, Max Socket, Elite Base<br><br>+15% Enhanced Weapon Damage (Weapons)<br><br>+15% Enhanced Defense (Torso, Shield)<br>**Item is regenerated as a new white item. <br>Enchants/Corruption wiped.** |

| | | | | **Item is upgraded to or remains Elite, and can gain superior modifiers in addition to the granted modifiers.** <br>**_This recipe no longer stacks on items._** |


**\* Tome is returned full**

## Recycle Recipes

| **Reagent 1** | **Reagent 2** | **=** | **Output** |
| :--- | :--- | :--- | :--- |
| 3 Unique Rings  <br>OR  <br>3 Unique Amulets | ID Tome **\*** | \=  | Rare Jewel |
| 3 Set Rings  <br>OR  <br>3 Set Amulets | ID Tome **\*** | \=  | Rare Jewel |
| Any 5 Set Weapons/**Armors**** | ID Tome **\*** | \=  | Gem Cluster |
| Any 5 Unique Weapons/**Armors****/**Ammo***** | ID Tome **\*** | \=  | Gem Cluster |

**\*Tome is returned full**  
**\*\*5 gloves, 5 boots, 5 chests, etc.**  
**\*\*\*Arrows or Bolts**

## Reroll Recipes

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **=** | **Output** |
| :--- | :--- | :--- | :--- | :--- |
| 3 Magic Jewelry  <br>(same type) | | | \= | New Magic Jewelry (100% plvl) |
| 3 Rare Jewelry  <br>(same type) | | | \= | New Rare Jewelry(100% plvl) |
| 3 Magic Charms  <br>(same size) | | | \= | New Magic Charm (100% plvl) |
| 3 Latent Sunder Charms | | | \= | New Latent Sunder Charm (Random Element) |
| Magic Charm | Gem Bag (3 Gems) | | \= | New Magic Charm (100% plvl) |
| Magic Jewelry | Gem Bag (3 Gems) | | \= | New Magic Jewelry(100% plvl) |
| Rare Jewelry | Gem Bag (20 Gems) | | \= | New Rare Jewelry(100% plvl) |
| Set Jewelry | Gem Bag (50 Gems) | | \= | New Set Jewelry(100% plvl) |
| Unique Jewelry | Gem Bag (50 Gems) | | \= | New Unique Jewelry(100% plvl) |
| Magic Jewel | Gem Bag (3 Gems) | | \= | New Magic Jewel (100% plvl) |
| Rare Jewel | Gem Bag (10 Gems) | | \= | New Rare Jewel (100% plvl) |
| Unique Jewel | Gem Bag (50 Gems) | | \= | New Unique Jewel (100% ilvl) |
| Key of Terror | Orb of Corruption | TP Tome **\*** | \= | Key of Hate |
| Key of Terror | Orb of Corruption | ID Tome **\*** | \= | Key of Destruction |
| Key of Hate | Orb of Corruption | TP Tome **\*** | \= | Key of Destruction |
| Key of Hate | Orb of Corruption | ID Tome **\*** | \= | Key of Terror |
| Key of Destruction | Orb of Corruption | TP Tome **\*** | \= | Key of Terror |
| Key of Destruction | Orb of Corruption | ID Tome **\*** | \= | Key of Hate |
| Eastern Worldstone Shard | Any Statue | | \= | Korlic's Pain Statue |
| Western Worldstone Shard | Any Statue | | \= | Talic's Anguish Statue |
| Southern Worldstone Shard | Any Statue | | \= | Madawc's Ire Statue |
| Deep Worldstone Shard | Any Statue | | \= | Bul-Kathos' Nightmare Statue |
| Northern Worldstone Shard | Any Statue | | \= | Worusk's End Statue |
| Any Set Armor or Ring/Amulet | Orb of Corruption | Uber Spirits (1 of each) | \= | Rerolled Set Item \*\* |
| Any Unique Armor or Ring/Amulet | Orb of Corruption | Uber Spirits (1 of each) | \= | Rerolled Unique Item \*\* |

100% plvl = item's level is based 100% on character's level  
100% ilvl = item's level is based 100% on input item's level

**\*Tome is returned full**  
**\*\*Regenerates the same item but with re-rolled stats. Corruptions and Upgrades are scrubbed clean.**  
**\*\*Using this recipe on an item that is up-tiered will change the item to one that naturally rolls on that base type.**

**Example 1:** If you used this on the Unique boots "War Traveler" that are [X] (Battle Boots), they would get rerolled as a brand new Unique boots "War Traveler". Because they naturally drop as [X].

**Example 2:** Instead say the Unique boots "War Traveler" are [E] (Mirrored Boots) because you previously used the cube recipe to upgrade them from Exceptional to Elite, this recipe would instead reroll the item into a completely different unique that matches only the Unique [E] Mirrored Boots base.

## Armor & Weapon Base Upgrade Recipes

### Armor

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **=** | **Output** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Rare Armor  <br>(Normal) | RAL Rune | THUL Rune | Amethyst | \=  | Rare Armor  <br>(Exceptional) |
| Rare Armor  <br>(Exceptional) | KO Rune | PUL Rune | Amethyst | \=  | Rare Armor  <br>(Elite) |
| Set Armor  <br>(Normal) | TAL Rune | SHAEL Rune | Diamond | \=  | Set Armor  <br>(Exceptional) |
| Set Armor  <br>(Exceptional) | KO Rune | LEM Rune | Diamond | \=  | Set Armor  <br>(Elite) |
| Unique Armor  <br>(Normal) | TAL Rune | SHAEL Rune | Diamond | \=  | Unique Armor  <br>(Exceptional) |
| Unique Armor  <br>(Exceptional) | KO Rune | LEM Rune | Diamond | \=  | Unique Armor  <br>(Elite) |

### Weapons

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **=** | **Output** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Rare Weapon  <br>(Normal) | ORT Rune | AMN Rune | Sapphire | \=  | Rare Weapon  <br>(Exceptional) |
| Rare Weapon  <br>(Exceptional) | FAL Rune | UM Rune | Sapphire | \=  | Rare Weapon  <br>(Elite) |
| Set Weapon  <br>(Normal) | RAL Rune | SOL Rune | Emerald | \=  | Set Weapon  <br>(Exceptional) |
| Set Weapon  <br>(Exceptional) | LUM Rune | PUL Rune | Emerald | \=  | Set Weapon  <br>(Elite) |
| Unique Weapon  <br>(Normal) | RAL Rune | SOL Rune | Emerald | \=  | Unique Weapon  <br>(Exceptional) |
| Unique Weapon  <br>(Exceptional) | LUM Rune | PUL Rune | Emerald | \=  | Unique Weapon  <br>(Elite) |

## Repair Recipes

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **=** | **Output** |
| :--- | :--- | :--- | :--- | :--- |
| Quiver  <br>(Any) | Healing Potion  <br>(Any) |     | \=  | Replenished Quantity |
| Bolt Case  <br>(Any) | Healing Potion  <br>(Any) |     | \=  | Replenished Quantity |
| Item  <br>(Ethereal) | 2 Rare Jewels | PUL Rune | \=  | Repaired Ethereal Item |
| Weapon  <br>(Any) | ORT Rune | Gem (Any) | \=  | Repaired & Recharged |
| Armor  <br>(Any) | RAL Rune | Gem (Any) | \=  | Repaired & Recharged |

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
| 2H Weapons | 10 |
| 1H Weapons, Shields, and Chest Armor | 5 |
| Helms, Gloves, Belts, and Boots | 3 |
| Jewelry | 2 |

### Important Note

Items still respect their data size limits (e.g. +All Skills cannot go past 7). 

-   [D2RR Stat Limits (WIP)](https://wiki.d2r-reimagined.com/en/recipes/ISCStatLimits)

### Set Items Bug

When enchanting set items you must remove all other items from that set from your character first. 

1.  Put related set items in shared stash. Save and Exit the game, join a new game, and then enchant your intended set item.
2.  Rinse and repeat for any other set pieces.
3.  Failing to do so will apply the enchant to the set bonus and will only be effective when set bonuses are active.

## Amulets

> **Max Enchants: 2**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Amulet** | Topaz |     |     | \=  | +12% Magic Find  <br>+25% Gold Find |
| **Amulet** | Ruby |     |     | \=  | +25 Life  <br>+4 Life / Kill |
| **Amulet** | Sapphire |     |     | \=  | +25 Mana  <br>+4 Mana / Kill |
| **Amulet** | Emerald |     |     | \=  | +5 Dexterity  <br>+5 Vitality |
| **Amulet** | Skull |     |     | \=  | +5 Energy  <br>+5 Vitality |
| **Amulet** | Amethyst |     |     | \=  | +5 Strength  <br>+5 Vitality |
| **Amulet** | Ruby | TIR Rune |     | \=  | +10 Fire Resistance |
| **Amulet** | Sapphire | TIR Rune |     | \=  | +10 Cold Resistance |
| **Amulet** | Topaz | TIR Rune |     | \=  | +10 Lightning Resistance |
| **Amulet** | Emerald | TIR Rune |     | \=  | +10 Poison Resistance |
| **Amulet** | Diamond | TIR Rune | Magic Jewel | \=  | +5% All Resistances |
| **Amulet** | Topaz | Magic Jewel |     | \=  | +2 Random Assassin Skill |
| **Amulet** | Ruby | Magic Jewel |     | \=  | +2 Random Barbarian Skill |
| **Amulet** | Sapphire | Magic Jewel |     | \=  | +2 Random Sorceress Skill |
| **Amulet** | Emerald | Magic Jewel |     | \=  | +2 Random Druid Skill |
| **Amulet** | Skull | Magic Jewel |     | \=  | +2 Random Necromancer Skill |
| **Amulet** | Amethyst | Magic Jewel |     | \=  | +2 Random Amazon Skill |
| **Amulet** | Diamond | Magic Jewel |     | \=  | +2 Random Paladin Skill |
| **Amulet** | Chaos Onyx | Magic Jewel |     | \=  | +2 Random Warlock Skill |
| **Amulet** | Topaz | Orb of Infusion | Rare Jewel | \=  | +25% Magic Find  <br>+50% Gold Find |
| **Amulet** | Ruby | Orb of Infusion | Rare Jewel | \=  | +50 Life  <br>+6 Life / Kill |
| **Amulet** | Sapphire | Orb of Infusion | Rare Jewel | \=  | +50 Mana  <br>+6 Mana / Kill |
| **Amulet** | Emerald | Orb of Infusion | Rare Jewel | \=  | +12 Dexterity  <br>+12 Vitality |
| **Amulet** | Skull | Orb of Infusion | Rare Jewel | \=  | +12 Energy  <br>+12 Vitality |
| **Amulet** | Amethyst | Orb of Infusion | Rare Jewel | \=  | +12 Strength  <br>+12 Vitality |
| **Amulet** | Diamond | Orb of Infusion | Rare Jewel | \=  | +12 All Resistances |
| **Amulet** | Orb of Infusion | Unique Jewel |     | \=  | +1 to Class Skills (Current Class) |

## Rings

> **Max Enchants: 2**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Ring** | Topaz | Magic Jewel |     |     | \=  | +10% Magic Find  <br>+20% Gold Find |
| **Ring** | Ruby | Magic Jewel |     |     | \=  | +20 HP  <br>+2 Life / Kill |
| **Ring** | Sapphire | Magic Jewel |     |     | \=  | +20 Mana  <br>+2 Mana / Kill |
| **Ring** | Ruby | TIR Rune |     |     | \=  | +10 Fire Resistance |
| **Ring** | Sapphire | TIR Rune |     |     | \=  | +10 Cold Resistance |
| **Ring** | Topaz | TIR Rune |     |     | \=  | +10 Lightning Resistance |
| **Ring** | Emerald | TIR Rune |     |     | \=  | +10 Poison Resistance |
| **Ring** | Orb of Infusion | Sapphire | ITH Rune | Magic Jewel | \=  | +30 Mana  <br>+3 Mana / Kill |
| **Ring** | Orb of Infusion | Ruby | DOL Rune | Magic Jewel | \=  | +30 HP  <br>+3 Life / Kill |
| **Ring** | Orb of Infusion | Skull | IO Rune | Magic Jewel | \=  | +5% Life Steal |
| **Ring** | Orb of Infusion | Skull | LUM Rune | Magic Jewel | \=  | +5% Mana Steal |
| **Ring** | Orb of Infusion | Diamond | UM Rune | Rare Jewel | \=  | +5 All Resistances |
| **Ring** | Orb of Infusion | Topaz | IST Rune | Rare Jewel | \=  | +20% Magic Find  <br>+30% Gold Find |
| **Ring** | Orb of Infusion | Emerald | VEX Rune | Rare Jewel | \=  | +6 All Attributes |
| **Ring** | Orb of Infusion | Topaz | OHM Rune | Rare Jewel | \=  | +4% Experience Gained |
| **Ring** | Orb of Infusion | Emerald | GUL Rune | Rare Jewel | \=  | +8% Faster Attack Speed |
| **Ring** | Orb of Infusion | Emerald | LO Rune | Rare Jewel | \=  | +8% Faster Cast Rate |
| **Ring** | Orb of Infusion | Sapphire | SUR Rune | Rare Jewel | \=  | +6% Max Mana |
| **Ring** | Orb of Infusion | Amethyst | BER Rune | Rare Jewel | \=  | +4% Damage Reduction |
| **Ring** | Orb of Infusion | Ruby | JAH Rune | Rare Jewel | \=  | +6% Max HP |

## Belts

> **Max Enchants: 3**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Belt** | Topaz | Magic Jewel |     |     | \=  | +7% Magic Find  <br>+10% Gold Find |
| **Belt** | Ruby | Magic Jewel |     |     | \=  | +15 HP  <br>+2 Life / Kill |
| **Belt** | Sapphire | Magic Jewel |     |     | \=  | +15 Mana  <br>+2 Mana / Kill |
| **Belt** | Emerald | Magic Jewel |     |     | \=  | +5 Dexterity  <br>+5 Vitality |
| **Belt** | Amethyst | Magic Jewel |     |     | \=  | +5 Strength  <br>+5 Vitality |
| **Belt** | Skull | Magic Jewel |     |     | \=  | +5 Energy  <br>+5 Vitality |
| **Belt** | Diamond | Magic Jewel |     |     | \=  | +2 All Resistances |
| **Belt** | ETH Rune | Magic Jewel |     |     | \=  | +4% Mana Regen |
| **Belt** | ITH Rune | Magic Jewel |     |     | \=  | +6% Damage Goes To Mana |
| **Belt** | SOL Rune | Magic Jewel |     |     | \=  | Physical Damage Reduced By 3 |
| **Belt** | Orb of Infusion | Sapphire | ITH Rune | Magic Jewel | \=  | +30 Mana  <br>+3 Mana / Kill |
| **Belt** | Orb of Infusion | Emerald | SHAEL Rune | Magic Jewel | \=  | +7% Faster Hit Recovery |
| **Belt** | Orb of Infusion | Ruby | DOL Rune | Magic Jewel | \=  | +30 HP  <br>+3 Life / Kill |
| **Belt** | Orb of Infusion | Skull | LUM Rune | Magic Jewel | \=  | +8% Mana Regen |
| **Belt** | Orb of Infusion | Emerald | FAL Rune | Magic Jewel | \=  | +10 Dexterity  <br>+10 Vitality |
| **Belt** | Orb of Infusion | Amethyst | FAL Rune | Magic Jewel | \=  | +10 Strength  <br>+10 Vitality |
| **Belt** | Orb of Infusion | Sapphire | FAL Rune | Magic Jewel | \=  | +10 Energy  <br>+10 Vitality |
| **Belt** | Orb of Infusion | Skull | LEM Rune | Magic Jewel | \=  | +50% Enhanced Defense |
| **Belt** | Orb of Infusion | Diamond | PUL Rune | Rare Jewel | \=  | +4 All Attributes |
| **Belt** | Orb of Infusion | Diamond | UM Rune | Rare Jewel | \=  | +4 All Resistances |
| **Belt** | Orb of Infusion | Sapphire | MAL Rune | Rare Jewel | \=  | Magic Damage Reduced By 3 |
| **Belt** | Orb of Infusion | Topaz | IST Rune | Rare Jewel | \=  | +20% Magic Find  <br>+30% Gold Find |
| **Belt** | Orb of Infusion | Sapphire | SUR Rune | Rare Jewel | \=  | +5% Max Mana |
| **Belt** | Orb of Infusion | Amethyst | BER Rune | Rare Jewel | \=  | +4% Damage Reduction |
| **Belt** | Orb of Infusion | Ruby | JAH Rune | Rare Jewel | \=  | +5% Max HP |
| **Belt** | Orb of Infusion | Sapphire | CHAM Rune | Unique Jewel | \=  | +6 All Attributes  <br>+6 All Resistances |
| **Belt** | Orb of Infusion | Topaz | CHAM Rune | Unique Jewel | \=  | +20% Magic Find  <br>+40% Gold Find |
| **Belt** | Orb of Infusion | Amethyst | CHAM Rune | Unique Jewel | \=  | +50 HP  <br>+50 Mana  <br>+50% Enhanced Defense |

## Boots

> **Max Enchants: 3**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Boots** | Topaz | Magic Jewel |     |     | \=  | +7% Magic Find  <br>+10% Gold Find |
| **Boots** | Ruby | Magic Jewel |     |     | \=  | +15 HP  <br>+2 Life / Kill |
| **Boots** | Sapphire | Magic Jewel |     |     | \=  | +15 Mana  <br>+2 Mana / Kill |
| **Boots** | Emerald | Magic Jewel |     |     | \=  | +5 Dexterity  <br>+5 Vitality |
| **Boots** | Amethyst | Magic Jewel |     |     | \=  | +5 Strength  <br>+5 Vitality |
| **Boots** | Skull | Magic Jewel |     |     | \=  | +5 Energy  <br>+5 Vitality |
| **Boots** | Diamond | Magic Jewel |     |     | \=  | +2 All Resistances |
| **Boots** | NEF Rune | Magic Jewel |     |     | \=  | +5% Faster Run/Walk |
| **Boots** | ETH Rune | Magic Jewel |     |     | \=  | +4% Mana Regen |
| **Boots** | ITH Rune | Magic Jewel |     |     | \=  | +6% Damage Goes to Mana |
| **Boots** | SOL Rune | Magic Jewel |     |     | \=  | Physical Damage Reduced By 3 |
| **Boots** | Orb of Infusion | Sapphire | ITH Rune | Magic Jewel | \=  | +30 Mana  <br>+3 Mana / Kill |
| **Boots** | Orb of Infusion | Emerald | SOL Rune | Magic Jewel | \=  | +10% Faster Run/Walk |
| **Boots** | Orb of Infusion | Amethyst | SHAEL Rune | Magic Jewel | \=  | +7% Faster Hit Recovery |
| **Boots** | Orb of Infusion | Ruby | DOL Rune | Magic Jewel | \=  | +30 HP  <br>+3 Life / Kill |
| **Boots** | Orb of Infusion | Skull | LUM Rune | Magic Jewel | \=  | +8% Mana Regen |
| **Boots** | Orb of Infusion | Emerald | FAL Rune | Magic Jewel | \=  | +10 Dexterity  <br>+10 Vitality |
| **Boots** | Orb of Infusion | Amethyst | FAL Rune | Magic Jewel | \=  | +10 Strength  <br>+10 Vitality |
| **Boots** | Orb of Infusion | Sapphire | FAL Rune | Magic Jewel | \=  | +10 Energy  <br>+10 Vitality |
| **Boots** | Orb of Infusion | Skull | LEM Rune | Magic Jewel | \=  | +50% Enhanced Defense |
| **Boots** | Orb of Infusion | Diamond | PUL Rune | Rare Jewel | \=  | +4 All Attributes |
| **Boots** | Orb of Infusion | Diamond | UM Rune | Rare Jewel | \=  | +4 All Resistances |
| **Boots** | Orb of Infusion | Sapphire | MAL Rune | Rare Jewel | \=  | Magic Damage Reduced By 3 |
| **Boots** | Orb of Infusion | Topaz | IST Rune | Rare Jewel | \=  | +20% Magic Find  <br>+30% Gold Find |
| **Boots** | Orb of Infusion | Sapphire | SUR Rune | Rare Jewel | \=  | +6% Max Mana |
| **Boots** | Orb of Infusion | Ruby | BER Rune | Rare Jewel | \=  | +4% Experience Gained |
| **Boots** | Orb of Infusion | Ruby | JAH Rune | Rare Jewel | \=  | +6% Max HP |
| **Boots** | Orb of Infusion | Topaz | CHAM Rune | Unique Jewel | \=  | +15% Faster Run/Walk  <br>+12% Magic Find  <br>+30% Gold Find |
| **Boots** | Orb of Infusion | Diamond | CHAM Rune | Unique Jewel | \=  | +100% Enhanced Defense  <br>+100 Thorns |
| **Boots** | Orb of Infusion | Amethyst | ZOD Rune | Unique Jewel | \=  | +8% Max Mana  <br>+8% Max HP |

## Gloves

> **Max Enchants: 3**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Gloves** | Topaz | Magic Jewel |     |     | \=  | +7% Magic Find  <br>+10% Gold Find |
| **Gloves** | Ruby | Magic Jewel |     |     | \=  | +15 HP  <br>+2 Life / Kill |
| **Gloves** | Sapphire | Magic Jewel |     |     | \=  | +15 Mana  <br>+2 Mana / Kill |
| **Gloves** | Emerald | Magic Jewel |     |     | \=  | +5 Dexterity  <br>+5 Vitality |
| **Gloves** | Amethyst | Magic Jewel |     |     | \=  | +5 Strength  <br>+5 Vitality |
| **Gloves** | Skull | Magic Jewel |     |     | \=  | +5 Energy  <br>+5 Vitality |
| **Gloves** | Diamond | Magic Jewel |     |     | \=  | +2 All Resistances |
| **Gloves** | ETH Rune | Magic Jewel |     |     | \=  | +4% Mana Regen |
| **Gloves** | ITH Rune | Magic Jewel |     |     | \=  | +6% Damage Goes to Mana |
| **Gloves** | SOL Rune | Magic Jewel |     |     | \=  | Physical Damage Reduced By 3 |
| **Gloves** | Orb of Infusion | Sapphire | ITH Rune | Magic Jewel | \=  | +30 Mana  <br>+3 Mana / Kill |
| **Gloves** | Orb of Infusion | Skull | AMN Rune | Magic Jewel | \=  | +75 Thorns |
| **Gloves** | Orb of Infusion | Amethyst | SOL Rune | Magic Jewel | \=  | +7% Faster Attack Speed |
| **Gloves** | Orb of Infusion | Sapphire | SHAEL Rune | Magic Jewel | \=  | +7% Faster Cast Rate |
| **Gloves** | Orb of Infusion | Ruby | DOL Rune | Magic Jewel | \=  | +30 HP  <br>+3 Life / Kill |
| **Gloves** | Orb of Infusion | Skull | LUM Rune | Magic Jewel | \=  | +8% Mana Regen |
| **Gloves** | Orb of Infusion | Emerald | FAL Rune | Magic Jewel | \=  | +10 Dexterity  <br>+10 Vitality |
| **Gloves** | Orb of Infusion | Amethyst | FAL Rune | Magic Jewel | \=  | +10 Strength  <br>+10 Vitality |
| **Gloves** | Orb of Infusion | Sapphire | FAL Rune | Magic Jewel | \=  | +10 Energy  <br>+10 Vitality |
| **Gloves** | Orb of Infusion | Topaz | PUL Rune | Rare Jewel | \=  | +4 All Attributes |
| **Gloves** | Orb of Infusion | Diamond | UM Rune | Rare Jewel | \=  | +4 All Resistances |
| **Gloves** | Orb of Infusion | Skull | MAL Rune | Rare Jewel | \=  | Magic Damage Reduced By 3 |
| **Gloves** | Orb of Infusion | Topaz | IST Rune | Rare Jewel | \=  | +20% Magic Find  <br>+30% Gold Find |
| **Gloves** | Orb of Infusion | Sapphire | SUR Rune | Rare Jewel | \=  | +6% Max Mana |
| **Gloves** | Orb of Infusion | Ruby | JAH Rune | Rare Jewel | \=  | +6% Max HP |
| **Gloves** | Orb of Infusion | Ruby | CHAM Rune | Unique Jewel | \=  | +3% Crushing Blow |
| **Gloves** | Orb of Infusion | Sapphire | CHAM Rune | Unique Jewel | \=  | +3% Deadly Strike |
| **Gloves** | Orb of Infusion | Emerald | CHAM Rune | Unique Jewel | \=  | +3% Open Wounds |
| **Gloves** | Orb of Infusion | Diamond | CHAM Rune | Unique Jewel | \=  | +6% Pierce |
| **Gloves** | Orb of Infusion | Topaz | CHAM Rune | Unique Jewel | \=  | +10% Slows Target |
| **Gloves** | Orb of Infusion | Skull | CHAM Rune | Unique Jewel | \=  | +10% Hit Blinds Target |

## Helms

> **Max Enchants: 3**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Helm** | Topaz | Magic Jewel |     |     | \=  | +7% Magic Find  <br>+10% Gold Find |
| **Helm** | Ruby | Magic Jewel |     |     | \=  | +15 HP  <br>+2 Life / Kill |
| **Helm** | Sapphire | Magic Jewel |     |     | \=  | +15 Mana  <br>+2 Mana / Kill |
| **Helm** | Emerald | Magic Jewel |     |     | \=  | +5 Dexterity  <br>+5 Vitality |
| **Helm** | Amethyst | Magic Jewel |     |     | \=  | +5 Strength  <br>+5 Vitality |
| **Helm** | Skull | Magic Jewel |     |     | \=  | +5 Energy  <br>+5 Vitality |
| **Helm** | Diamond | Magic Jewel |     |     | \=  | +2 All Resistances |
| **Helm** | ETH Rune | Magic Jewel |     |     | \=  | +4% Mana Regen |
| **Helm** | ITH Rune | Magic Jewel |     |     | \=  | +6% Damage Goes to Mana |
| **Helm** | SOL Rune | Magic Jewel |     |     | \=  | Physical Damage Reduced By 3 |
| **Helm** | Orb of Infusion | Sapphire | ITH Rune | Magic Jewel | \=  | +30 Mana  <br>+3 Mana / Kill |
| **Helm** | Orb of Infusion | Emerald | THUL Rune | Magic Jewel | \=  | Ignore Target's Defense |
| **Helm** | Orb of Infusion | Skull | AMN Rune | Magic Jewel | \=  | +75 Thorns |
| **Helm** | Orb of Infusion | Ruby | DOL Rune | Magic Jewel | \=  | +30 HP  <br>+3 Life / Kill |
| **Helm** | Orb of Infusion | Skull | LUM Rune | Magic Jewel | \=  | +8% Mana Regen |
| **Helm** | Orb of Infusion | Emerald | FAL Rune | Magic Jewel | \=  | +10 Dexterity  <br>+10 Vitality |
| **Helm** | Orb of Infusion | Amethyst | FAL Rune | Magic Jewel | \=  | +10 Strength  <br>+10 Vitality |
| **Helm** | Orb of Infusion | Sapphire | FAL Rune | Magic Jewel | \=  | +10 Energy  <br>+10 Vitality |
| **Helm** | Orb of Infusion | Diamond | PUL Rune | Rare Jewel | \=  | +4 All Attributes |
| **Helm** | Orb of Infusion | Diamond | UM Rune | Rare Jewel | \=  | +4 All Resistances |
| **Helm** | Orb of Infusion | Sapphire | MAL Rune | Rare Jewel | \=  | Magic Damage Reduced By 3 |
| **Helm** | Orb of Infusion | Topaz | IST Rune | Rare Jewel | \=  | +20% Magic Find  <br>+30% Gold Find |
| **Helm** | Orb of Infusion | Sapphire | SUR Rune | Rare Jewel | \=  | +6% Max Mana |
| **Helm** | Orb of Infusion | Amethyst | BER Rune | Rare Jewel | \=  | +4% Damage Reduction |
| **Helm** | Orb of Infusion | Ruby | JAH Rune | Rare Jewel | \=  | +6% Max HP |
| **Helm** | Orb of Infusion | Ruby | CHAM Rune | Unique Jewel | \=  | +2 Fire Skills |
| **Helm** | Orb of Infusion | Sapphire | CHAM Rune | Unique Jewel | \=  | +2 Cold Skills |
| **Helm** | Orb of Infusion | Topaz | CHAM Rune | Unique Jewel | \=  | +2 Lightning Skills |
| **Helm** | Orb of Infusion | Emerald | CHAM Rune | Unique Jewel | \=  | +2 Poison Skills |
| Helm | Orb of Infusion | Diamond | CHAM Rune | Unique Jewel | \=  | +2 Magic Skills |
| **Helm** | Orb of Infusion | Skull | ZOD Rune | Unique Jewel | \=  | +1 All Skills |

## Shields

> **Max Enchants: 5**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Shield** | Topaz | Magic Jewel |     |     | \=  | +7% Magic Find  <br>+10% Gold Find |
| **Shield** | Ruby | Magic Jewel |     |     | \=  | +15 HP  <br>+4 Life / Kill |
| **Shield** | Sapphire | Magic Jewel |     |     | \=  | +15 Mana  <br>+2 Mana / Kill |
| **Shield** | Emerald | Magic Jewel |     |     | \=  | +7 Dexterity  <br>+7 Vitality |
| **Shield** | Amethyst | Magic Jewel |     |     | \=  | +7 Strength  <br>+7 Vitality |
| **Shield** | Skull | Magic Jewel |     |     | \=  | +7 Energy  <br>+7 Vitality |
| **Shield** | Diamond | Magic Jewel |     |     | \=  | +2 All Resistances |
| **Shield** | ETH Rune | Magic Jewel |     |     | \=  | +4% Mana Regen |
| **Shield** | ITH Rune | Magic Jewel |     |     | \=  | +6% Damage Goes to Mana |
| **Shield** | SOL Rune | Magic Jewel |     |     | \=  | Physical Damage Reduced By 3 |
| **Shield** | Orb of Infusion | Sapphire | ITH Rune | Magic Jewel | \=  | +30 Mana  <br>+3 Mana / Kill |
| **Shield** | Orb of Infusion | Skull | AMN Rune | Magic Jewel | \=  | +100 Thorns |
| **Shield** | Orb of Infusion | Diamond | SOL Rune | Magic Jewel | \=  | +50% Enhanced Defense |
| **Shield** | Orb of Infusion | Ruby | SHAEL Rune | Magic Jewel | \=  | +5% Faster Block Rate |
| **Shield** | Orb of Infusion | Sapphire | SHAEL Rune | Magic Jewel | \=  | +5% Increased Block Chance |
| **Shield** | Orb of Infusion | Emerald | SHAEL Rune | Magic Jewel | \=  | +7% Faster Hit Recovery |
| **Shield** | Orb of Infusion | Ruby | DOL Rune | Magic Jewel | \=  | +30 HP  <br>+3 Life / Kill |
| **Shield** | Orb of Infusion | Skull | LUM Rune | Magic Jewel | \=  | +10% Mana Regen |
| **Shield** | Orb of Infusion | Emerald | FAL Rune | Magic Jewel | \=  | +12 Dexterity  <br>+10 Vitality |
| **Shield** | Orb of Infusion | Amethyst | FAL Rune | Magic Jewel | \=  | +12 Strength  <br>+10 Vitality |
| **Shield** | Orb of Infusion | Sapphire | FAL Rune | Magic Jewel | \=  | +12 Energy  <br>+10 Vitality |
| **Shield** | Orb of Infusion | Diamond | PUL Rune | Rare Jewel | \=  | +6 All Attributes |
| **Shield** | Orb of Infusion | Diamond | UM Rune | Rare Jewel | \=  | +6 All Resistances |
| **Shield** | Orb of Infusion | Sapphire | MAL Rune | Rare Jewel | \=  | Magic Damage Reduced By 4 |
| **Shield** | Orb of Infusion | Topaz | IST Rune | Rare Jewel | \=  | +30% Magic Find  <br>+50% Gold Find |
| **Shield** | Orb of Infusion | Sapphire | SUR Rune | Rare Jewel | \=  | +6% Max Mana |
| **Shield** | Orb of Infusion | Ruby | BER Rune | Rare Jewel | \=  | +6% Damage Reduction |
| **Shield** | Orb of Infusion | Ruby | JAH Rune | Rare Jewel | \=  | +6% Max HP |
| **Shield** | Orb of Infusion | Diamond | ZOD Rune | Unique Jewel | \=  | +1 Max All Resistances  <br>+3 All Resistances |

## Body Armor

> **Max Enchants: 5**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Body Armor** | Topaz | Magic Jewel |     |     | \=  | +15% Magic Find  <br>+30% Gold Find |
| **Body Armor** | Ruby | Magic Jewel |     |     | \=  | +15 HP  <br>+2 Life / Kill |
| **Body Armor** | Sapphire | Magic Jewel |     |     | \=  | +15 Mana  <br>+2 Mana / Kill |
| **Body Armor** | Emerald | Magic Jewel |     |     | \=  | +7 Dexterity  <br>+7 Vitality |
| **Body Armor** | Amethyst | Magic Jewel |     |     | \=  | +7 Strength  <br>+7 Vitality |
| **Body Armor** | Skull | Magic Jewel |     |     | \=  | +7 Energy  <br>+7 Vitality |
| **Body Armor** | Diamond | Magic Jewel |     |     | \=  | +3 All Resistances |
| **Body Armor** | ETH Rune | Magic Jewel |     |     | \=  | +5% Mana Regen |
| **Body Armor** | ITH Rune | Magic Jewel |     |     | \=  | +10% Damage Goes to Mana |
| **Body Armor** | SOL Rune | Magic Jewel |     |     | \=  | Physical Damage Reduced By 5 |
| **Body Armor** | Orb of Infusion | Sapphire | ITH Rune | Magic Jewel | \=  | +30 Mana  <br>+3 Mana / Kill |
| **Body Armor** | Orb of Infusion | Skull | AMN Rune | Magic Jewel | \=  | +150 Thorns |
| **Body Armor** | Orb of Infusion | Emerald | SHAEL Rune | Magic Jewel | \=  | +10% Faster Run/Walk |
| **Body Armor** | Orb of Infusion | Ruby | DOL Rune | Magic Jewel | \=  | +30 HP  <br>+3 Life / Kill |
| **Body Armor** | Orb of Infusion | Skull | LUM Rune | Magic Jewel | \=  | +10% Mana Regen |
| **Body Armor** | Orb of Infusion | Emerald | FAL Rune | Magic Jewel | \=  | +15 Dexterity  <br>+10 Vitality |
| **Body Armor** | Orb of Infusion | Amethyst | FAL Rune | Magic Jewel | \=  | +15 Strength  <br>+10 Vitality |
| **Body Armor** | Orb of Infusion | Sapphire | FAL Rune | Magic Jewel | \=  | +15 Energy  <br>+10 Vitality |
| **Body Armor** | Orb of Infusion | Diamond | PUL Rune | Rare Jewel | \=  | +6 All Attributes |
| **Body Armor** | Orb of Infusion | Diamond | UM Rune | Rare Jewel | \=  | +6 All Resistances |
| **Body Armor** | Orb of Infusion | Sapphire | MAL Rune | Rare Jewel | \=  | Magic Damage Reduced By 5 |
| **Body Armor** | Orb of Infusion | Topaz | IST Rune | Rare Jewel | \=  | +30% Magic Find  <br>+50% Gold Find |
| **Body Armor** | Orb of Infusion | Sapphire | SUR Rune | Rare Jewel | \=  | +8% Max Mana |
| **Body Armor** | Orb of Infusion | Diamond | BER Rune | Rare Jewel | \=  | +8% Damage Reduction |
| **Body Armor** | Orb of Infusion | Ruby | JAH Rune | Rare Jewel | \=  | +8% Max HP |
| **Body Armor** | Orb of Infusion | Amethyst | CHAM Rune | Unique Jewel | \=  | Absorb 2% Fire Damage |
| **Body Armor** | Orb of Infusion | Sapphire | CHAM Rune | Unique Jewel | \=  | Absorb 2% Cold Damage |
| **Body Armor** | Orb of Infusion | Topaz | CHAM Rune | Unique Jewel | \=  | Absorb 2% Lightning Damage |
| **Body Armor** | Orb of Infusion | Skull | CHAM Rune | Unique Jewel | \=  | Absorb 2% Magic Damage |
| **Body Armor** | Orb of Infusion | Amethyst | ZOD Rune | Unique Jewel | \=  | +5 All Resistances  <br>+1 Max All Resistances |

## Weapons

> **Max Enchants:** 1H Weapons: 5; 2H Weapons: 10

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **Reagent 6** | **=** | **Added Stat(s)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Weapon** | Topaz | Magic Jewel |     |     |     | \=  | +15% Magic Find  <br>+30% Gold Find |
| **Weapon** | Ruby | Magic Jewel |     |     |     | \=  | +75 Attack Rating |
| **Weapon** | Sapphire | Magic Jewel |     |     |     | \=  | +7% Increased Cast Rate |
| **Weapon** | Emerald | Magic Jewel |     |     |     | \=  | +7% Increased Attack Speed |
| **Weapon** | Skull | Magic Jewel |     |     |     | \=  | +2% Mana Steal  <br>+2% Life Steal |
| **Weapon** | Amethyst | Magic Jewel |     |     |     | \=  | +3 Life / Kill |
| **Weapon** | Diamond | Magic Jewel |     |     |     | \=  | +2 Mana / Kill |
| **Weapon** | ETH Rune | Magic Jewel |     |     |     | \=  | +6% Mana Regen |
| **Weapon** | SOL Rune | Magic Jewel |     |     |     | \=  | +6 Min Damage  <br>+10 Max Damage |
| **Weapon** | Orb of Infusion | Topaz | IO Rune | Magic Jewel |     | \=  | +100 Thorns |
| **Weapon** | Orb of Infusion | Ruby | LUM Rune | Magic Jewel |     | \=  | +50% Damage to Demons |
| **Weapon** | Orb of Infusion | Skull | LUM Rune | Magic Jewel |     | \=  | +50% Damage to Undead |
| **Weapon** | Orb of Infusion | Amethyst | FAL Rune | Magic Jewel |     | \=  | +15% Enhanced Weapon Damage  <br>+15 Attack Rating |
| **Weapon** | Orb of Infusion | Emerald | LEM Rune | Magic Jewel |     | \=  | +150 Attack Rating |
| **Weapon** | Orb of Infusion | Sapphire | MAL Rune | Rare Jewel |     | \=  | +15% Increased Cast Rate |
| **Weapon** | Orb of Infusion | Amethyst | MAL Rune | Rare Jewel |     | \=  | +15% Increased Attack Speed |
| **Weapon** | Orb of Infusion | Topaz | IST Rune | Rare Jewel |     | \=  | +30% Magic Find  <br>+50% Gold Find |
| **Weapon** | Orb of Infusion | Skull | VEX Rune | Rare Jewel |     | \=  | +5% Mana Steal  <br>+5% Life Steal |
| **Weapon** | Orb of Infusion | Emerald | OHM Rune | Rare Jewel |     | \=  | +15 Min Damage  <br>+30 Max Damage |
| **Weapon** | Orb of Infusion | Diamond | LO Rune | Rare Jewel |     | \=  | +63-511 Elemental Damage<br><br>Multiple Uses Do Not Stack |
| **Weapon** | Orb of Infusion | Amethyst | CHAM Rune | Rare Jewel |     | \=  | +30% Enhanced Damage  <br>+30 Attack Rating<br><br>%ED caps at 511% |
| **Weapon** | Orb of Infusion | Amethyst | CHAM Rune | Rare Jewel | NEF Rune | \=  | +30% Enhanced Damage  <br>+30 Attack Rating  <br>Knockback<br><br>%ED caps at 511% |
| **Weapon** | Orb of Infusion | Orb of Conversion | ZOD Rune | Unique Jewel | Ruby | \=  | +2% Fire Skill Damage  <br>\-2% Enemy Fire Res |
| **Weapon** | Orb of Infusion | Orb of Conversion | ZOD Rune | Unique Jewel | Sapphire | \=  | +2% Cold Skill Damage  <br>\-2% Enemy Cold Res |
| **Weapon** | Orb of Infusion | Orb of Conversion | ZOD Rune | Unique Jewel | Topaz | \=  | +2% Light Skill Damage  <br>\-2% Enemy Light Res |
| **Weapon** | Orb of Infusion | Orb of Conversion | ZOD Rune | Unique Jewel | Emerald | \=  | +2% Poison Skill Damage  <br>\-2% Enemy Poison Res |
| **Weapon** | Orb of Infusion | Orb of Conversion | ZOD Rune | Unique Jewel | Chaos Onyx | \=  | +2% Magic Skill Damage  <br>\-2% Enemy Magic Res |

[Back to contents](#contents)

# Item Crafting System

Players can craft a variety of items to help define their builds, both as they level and during end-game progression. 

When an item returns as magic that means it gives you the guaranteed stats with a chance of a prefix and a suffix on a magical item.

When it returns as rare, that means it gives the guaranteed stats with a chance at between 1-3 prefixes and 1-3 suffixes chosen at random. 

When the item is returned as crafted, it will have a chance to have a set number of bonus affixes in addition to the guaranteed stats based on the level of the item returned, which is always the same as the character that created the craft unless specified otherwise. More information on level requirements and affix count for crafted items can be found [here](https://maxroll.gg/d2/items/crafted-items).

**Sections:** [Amulets](#amulets-1) | [Rings](#rings-1) | [Belts](#belts-1) | [Boots](#boots-1) | [Gloves](#gloves-1) | [Helms](#helms-1) | [Shields](#shields-1) | [Body Armor](#body-armor-1) | [Weapons](#weapons-1) | [Jewels](#jewels) | [Charms](#charms) | [Sunder Charms](#sunder-charms)

| Result type | What it includes |
| --- | --- |
| Magic | Guaranteed stats, plus a chance for one prefix and one suffix. |
| Rare | Guaranteed stats, plus a chance for 1-3 prefixes and 1-3 suffixes. |
| Crafted | Guaranteed stats, plus a chance for bonus affixes based on the result's level. |

Unless stated otherwise, a crafted item's level matches the character who made it. See [Maxroll's crafted item guide](https://maxroll.gg/d2/items/crafted-items) for level requirements and affix counts.

## Amulets

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Amulet | ITH Rune | EL Rune |     |     | \=  | 100% CTC Battle Orders on Level-Up<br><br>Magic Amulet |
| Magic Amulet | Orb of Infusion | RAL Rune | Gem (Any) |     | \=  | +1 All (Random Class) Skills<br><br>Rare Amulet |
| Rare Amulet | Rare Jewel | PUL Rune | EL Rune | Ruby | \=  | +1 to All Skills<br><br>+10-12% Faster Attack Speed<br><br>Rare Amulet |
| Rare Amulet | Rare Jewel | PUL Rune | EL Rune | Sapphire | \=  | +1 to All Skills<br><br>+10-12% Faster Cast Speed<br><br>Rare Amulet |
| Rare Amulet | Unique Jewel | VEX Rune | LO Rune | Skull | \=  | +2 to All Skills<br><br>+25-35 Weapon Damage<br><br>Crafted Amulet |
| Rare Amulet | Unique Jewel | VEX Rune | LO Rune | Sapphire | \=  | +2 to All Skills<br><br>+10% All Elemental Damage<br><br>Crafted Amulet |

## Rings

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Ring | ITH Rune | EL Rune |     |     | \=  | 100% CTC Level 1 Fade on Level-Up<br><br>Magic Ring |
| Magic Ring | Orb of Infusion | AMN Rune | Gem (Any) |     | \=  | +20% Chance Items Roll Magic or Better<br><br>Rare Ring |
| Magic Ring | Rare Jewel | TAL Rune | RAL Rune | ORT Rune | \=  | Barilzar's Mazed Band Unique Ring Req lvl 25<br><br>+1 Warp oskill<br><br>+5 to All Resistances<br><br>+5 to All Attributes<br><br>Unique Ring |
| Rare Ring | Rare Jewel | UM Rune | HEL Rune | Gem (Any) | \=  | +8-10 to All Attributes<br><br>+8-10 to All Resistances<br><br>Rare Ring |
| Rare Ring | Unique Jewel | JAH Rune | SUR Rune | Gem (Any) | \=  | +5-8% Increased Maximum Health<br><br>+5-8% Increased Maximum Mana<br><br>Crafted Ring |
| Rare Ring | Unique Jewel | ZOD Rune | GUL Rune | Gem (Any) | \=  | +1 to All skills<br><br>+10% Faster Attack Speed<br><br>+10% Faster Cast Rate<br><br>Crafted Ring |
| Rare Ring | Unique Jewel | ZOD Rune | VEX Rune | Ruby | \=  | +1 to All skills<br><br>+15-25 Weapon Damage<br><br>Crafted Ring |
| Rare Ring | Unique Jewel | ZOD Rune | VEX Rune | Sapphire | \=  | +1 to All skills<br><br>+5% All Elemental Damage<br><br>Crafted Ring |

## Belts

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Belt | ITH Rune | EL Rune |     |     | \=  | 100% CTC Level 1 Frozen Armor on Level-Up<br><br>Magic Belt |
| Magic Belt | Magic Jewel | RAL Rune |     |     | \=  | +1 to All (Random Class) Skills<br><br>Magic Belt |
| Rare Belt | Rare Jewel | UM Rune | IST Rune | Gem (Any) | \=  | +20-25% to All Resistances<br><br>+30-40% Chance Items Roll Magic or Better<br><br>Rare Belt |
| Rare Belt | Rare Jewel | LEM Rune | MAL Rune | Gem (Any) | \=  | +10-15% Piercing Attack<br><br>+10-15% Chance of Open Wounds<br><br>Rare Belt |
| Rare Belt | Unique Jewel | CHAM Rune | JAH Rune | Gem (Any) | \=  | Cannot Be Frozen<br><br>+10-15% Increased Maximum Health<br><br>Crafted Belt |
| Rare Belt | Unique Jewel | ZOD Rune | VEX Rune | Ruby | \=  | +1 to All skills<br><br>+20-30 Weapon Damage<br><br>Crafted Belt |
| Rare Belt | Unique Jewel | ZOD Rune | VEX Rune | Sapphire | \=  | +1 to All skills<br><br>+5-10% All Elemental Damage<br><br>Crafted Belt |

## Boots

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Boots | ITH Rune | EL Rune |     |     | \=  | 100% CTC Level 1 Burst of Speed on Level-Up<br><br>Magic Boots |
| Magic Boots | Orb of Infusion | HEL Rune | Gem (Any) |     | \=  | +15% Faster Run/Walk Speed<br><br>+10 to All Attributes<br><br>Rare Boots |
| Rare Boots | Rare Jewel | UM Rune | IST Rune | Gem (Any) | \=  | +20-25% to All Resistances<br><br>+30-40% Chance Items Roll Magic or Better<br><br>Rare Boots |
| Rare Boots | Unique Jewel | ZOD Rune | OHM Rune | Gem (Any) | \=  | +1 to All Skills<br><br>+20-30% Faster Run/Walk Speed<br><br>+20-30 Weapon Damage<br><br>Crafted Boots |
| Rare Boots | Unique Jewel | ZOD Rune | VEX Rune | Gem (Any) | \=  | +1 to All Skills<br><br>+20-30% Faster Run/Walk Speed<br><br>+5-10% to All Elemental Damage<br><br>Crafted Boots |

## Gloves

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Gloves | ITH Rune | EL Rune |     |     | \=  | 100% CTC Level 4 Battle Command on Level-Up<br><br>Magic Gloves |
| Magic Gloves | Magic Jewel | RAL Rune |     |     | \=  | +8% Faster Attack Speed<br><br>+8% Faster Cast Rate<br><br>Magic Gloves |
| Rare Gloves | Rare Jewel | MAL Rune | SHAEL Rune | Gem (Any) | \=  | +1 Random Skill Tab (Current Class)<br><br>+10-15% Increased Attack Speed<br><br>Rare Gloves |
| Rare Gloves | Rare Jewel | MAL Rune | DOL Rune | Gem (Any) | \=  | +1 Random Skill Tab (Current Class)<br><br>+10-15% Faster Cast Rate<br><br>Rare Gloves |
| Rare Gloves | Rare Jewel | UM Rune | IST Rune | Gem (Any) | \=  | +30% Chance Items Roll Magic or Better<br><br>+20-25% to All Resistances<br><br>Rare Gloves |
| Rare Gloves | Unique Jewel | ZOD Rune | VEX Rune | Ruby | \=  | +1 to All skills<br><br>+20-40 Weapon Damage<br><br>+0.125% Chance of Crushing Blow (Per Character Level)<br><br>Crafted Gloves |
| Rare Gloves | Unique Jewel | ZOD Rune | VEX Rune | Sapphire | \=  | +1 to All skills<br><br>+5-10% to All Elemental Damage<br><br>+10-20% Faster Cast Rate<br><br>Crafted Gloves |

## Helms

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Helm | ITH Rune | EL Rune |     |     | \=  | 100% CTC Level 1 Shout on Level-Up<br><br>Magic Helm |
| Magic Helm | Orb of Infusion | RAL Rune | Gem (Any) |     | \=  | +15% Faster Hit Recovery<br><br>Rare Helm |
| Rare Helm | Rare Jewel | UM Rune | EL Rune | Gem (Any) | \=  | +20-30% Faster Hit Recovery<br><br>+20-25% to All Resistances<br><br>Rare Helm |
| Rare Helm | Rare Jewel | Pul Rune | EL Rune | Ruby | \=  | +1 to All (Current Class) Skills<br><br>+10-15% Increased Attack Speed<br><br>Rare Helm |
| Rare Helm | Rare Jewel | PUL Rune | EL Rune | Sapphire | \=  | +1 to All (Current Class) Skills<br><br>+10-15% Faster Cast Rate<br><br>Rare Helm |
| Rare Helm | Unique Jewel | ZOD Rune | VEX Rune | Ruby | \=  | +1-2 to All skills<br><br>+20-30% Enhanced Weapon Damage<br><br>Crafted Helm |
| Rare Helm | Unique Jewel | ZOD Rune | VEX Rune | Sapphire | \=  | +1-2 to All skills<br><br>+5-10% to All Elemental Damage<br><br>Crafted Helm |
| Rare Helm | Unique Jewel | JAH Rune | BER Rune | Gem (Any) | \=  | +2 to All Skills<br><br>+5-10% Physical Damage Reduction<br><br>+5-10% Increased Maximum Health<br><br>Crafted Helm |

## Shields

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Shield | ITH Rune | EL Rune |     |     | \=  | 100% CTC Level 4 Holy Shield on Level-Up<br><br>+5 to All Attributes<br><br>Magic Shield |
| Magic Shield | Orb of Infusion | AMN Rune | Gem (Any) |     | \=  | +1 to All (Current Class) Skills<br><br>Rare Shield |
| Rare Shield | Rare Jewel | UM Rune | IST Rune | Gem (Any) | \=  | +30-40% Chance Items Roll Magic or Better<br><br>+25% to All Resistances<br><br>Rare Shield |
| Rare Shield | Rare Jewel | UM Rune | SHAEL Rune | Gem (Any) | \=  | +30% Faster Hit Recovery<br><br>+20-30% Increased Chance to Block<br><br>+20-25% to All Resistances<br><br>Rare Shield |
| Rare Shield | Rare Jewel | MAL Rune | SHAEL Rune | Gem (Any) | \=  | +1-2 to All (Current Class) Skills<br><br>+20-30% Enhanced Weapon Damage<br><br>Rare Shield |
| Rare Shield | Rare Jewel | MAL Rune | DOL Rune | Gem (Any) | \=  | +1-2 to All (Current Class) Skills<br><br>+5-8% to All Elemental Damage<br><br>\-5-8% to All Enemy Elemental Resistances<br><br>Rare Shield |
| Rare Shield | Unique Jewel | BER Rune | UM Rune | Gem (Any) | \=  | +2 to All Skills<br><br>+5-10% Physical Damage Reduction<br><br>+30-40% to All Resistances<br><br>Crafted Shield |
| Rare Shield | Unique Jewel | CHAM Rune | OHM Rune | Gem (Any) | \=  | +2 to All Skills<br><br>+50-80% Enhanced Weapon Damage<br><br>Crafted Shield |
| Rare Shield | Unique Jewel | ZOD Rune | MAL Rune | GEM (Any) | \=  | +2 to All Skills<br><br>+10-15% All Elemental Damage <br><br>\-10-15% To All Enemy Elemental Resist <br><br>Crafted Shield |

## Body Armor

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Torso | ITH Rune | EL Rune |     |     | \=  | 100% CTC Level 5 Oak Sage on Level-Up<br><br>Magic Torso |
| Magic Torso | Orb of Infusion | Ral Rune | Gem (Any) |     | \=  | +20% Faster Run/Walk Speed<br><br>+100 Defense<br><br>Magic Torso |
| Rare Torso | Rare Jewel | UM Rune | IST Rune | Gem (Any) | \=  | +20-40% Chance Items Roll Magic or Better<br><br>+20-25% to All Resistances<br><br>Rare Torso |
| Rare Torso | Rare Jewel | PUL Rune | SHAEL Rune | Gem (Any) | \=  | +1 to All (Current Class) Skills<br><br>+30-50 to Life<br><br>+10-15% Increased Attack Speed<br><br>Rare Torso |
| Rare Torso | Rare Jewel | PUL Rune | DOL Rune | Gem (Any) | \=  | +1 to All (Current Class) Skills<br><br>+30-50 to Mana<br><br>+10-15% Faster Cast Rate<br><br>Rare Torso |
| Rare Torso | Unique Jewel | ZOD Rune | BER Rune | UM Rune | \=  | +2 to All Skills<br><br>+150-175% Enhanced Defense<br><br>+7-10% Physical Damage Reduction<br><br>+20-30% to All Resistances<br><br>Crafted Torso |

## Weapons

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Any Magic Weapon | Magic Jewel | RAL Rune | Ruby |     | \=  | +85% Enhanced Weapon Damage<br><br>+20% Increased Attack Speed<br><br>Magic Weapon |
| Any Magic Weapon | Magic Jewel | RAL Rune | Sapphire |     | \=  | +5% to All Elemental Damage<br><br>+15% Faster Cast Rate<br><br>Magic Weapon |
| Any Magic Weapon | Orb of Infusion | SOL Rune | SHAEL Rune | Gem (Any) | \=  | +1 Min/Max Weapon Damage (Per Character Level)<br><br>+20% Increased Attack Speed<br><br>Rare Weapon |
| Any Rare Weapon | Rare Jewel | LEM Rune | EL Rune | Gem (Any) | \=  | +150% Enhanced Weapon Damage<br><br>+30% Increased Attack Speed<br><br>Rare Weapon |
| Any Rare Weapon | Rare Jewel | PUL Rune | EL Rune | Gem (Any) | \=  | +1 to All skills<br><br>\-10% to All Enemy Elemental Resistances<br><br>+20% Faster Cast Rate<br><br>Rare Weapon |
| 1H Rare Weapon | Unique Jewel | BER Rune | OHM Rune | Gem (Any) | \=  | +2 to All skills<br><br>+150-200% Enhanced Weapon Damage<br><br>+30-60 Weapon Damage<br><br>1H Crafted Weapon |
| 2H Rare Weapon | Unique Jewel | BER Rune | OHM Rune | Gem (Any) | \=  | +2 to All skills<br><br>+220-250% Enhanced Weapon Damage<br><br>+60-100 Weapon Damage<br><br>2H Crafted Weapon |
| 1H Rare Weapon | Unique Jewel | CHAM Rune | BER Rune | Gem (Any) | \=  | +2 to All skills<br><br>+10-15% to All Elemental Damage<br><br>\-8-12% to All Enemy Elemental Resistances<br><br>1H Crafted Weapon |
| 2H Rare Weapon | Unique Jewel | CHAM Rune | BER Rune | Gem (Any) | \=  | +2 to All skills<br><br>+15-20% to All Elemental Damage<br><br>\-12-16% to All Enemy Elemental Resistances<br><br>2H Crafted Weapon |

## Jewels

> These crafts result in various unique jewels based upon the element type Latent Sunder Charm used as a reagent.  <br>**Must be a non-crafted sunder charm.**

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- |
| Cold Rupture  <br>(Sunder: Cold) | Unique Jewel | Gem Bag (100 Gems) | \= | Winter Facet<br><br>Unique Jewel |
| Flame Rift  <br>(Sunder: Fire) | Unique Jewel | Gem Bag (100 Gems) | \= | Summer Facet<br><br>Unique Jewel |
| Crack of the Heavens  <br>(Sunder: Lightning) | Unique Jewel | Gem Bag (100 Gems) | \= | Spring Facet<br><br>Unique Jewel |
| Rotting Fissure  <br>(Sunder: Poison) | Unique Jewel | Gem Bag (100 Gems) | \= | Autumn Facet<br><br>Unique Jewel |
| Bone Break  <br>(Sunder: Physical) | Unique Jewel | Gem Bag (100 Gems) | \= | Star Facet<br><br>Unique Jewel |
| Black Cleft  <br>(Sunder: Magic) | Unique Jewel (2x) | Gem Bag (100 Gems) | \= | Heaven Facet<br><br>Unique Jewel |

## Charms

> All crafts produce guaranteed stats, and an additional 3-4 random stats from the Grand Charm Prefix/Suffix table
> Crafts that produce a Magic item will only roll 1-2 random affixes

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **Reagent 6** | **=** | **Guaranteed Stats** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Magic Charm  <br>(Grand) | Magic Jewel | SHAEL Rune | EL Rune | | | \= | +5-10% Faster Attack Speed  <br>Magic Charm |
| Magic Charm  <br>(Grand) | Magic Jewel | DOL Rune | EL Rune | | | \= | +5-10% Faster Cast Rate  <br>Magic Charm |
| Magic Charm  <br>(Grand) | Magic Jewel | HEL Rune | EL Rune | | | \= | +5-10% Experience Gained  <br>Magic Charm |
| Magic Charm  <br>(Grand) | Magic Jewel | KO Rune | FAL Rune | | | \= | +5-8 Dexterity<br><br>+5-8 Strength<br><br>+5-8% Enhanced Weapon Damage  <br>Magic Charm |
| Magic Charm  <br>(Grand) | Magic Jewel | PUL Rune | EL Rune | | | \= | +50-70 Defense<br><br>+10-15 Weapon Damage |
| Magic Charm  <br>(Grand) | Magic Jewel | UM Rune | EL Rune | | | \= | +8-10 All Resistances |
| Magic Charm  <br>(Grand) | Magic Jewel | IST Rune | EL Rune | | | \= | +25-40% Magic Find<br><br>+50-80% Gold Find |
| Magic Charm  <br>(Grand) | Rare Jewel | Vex Rune | THUL Rune | Topaz | | \= | +1 Random Assassin Skill Tab<br>Crafted Charm |
| Magic Charm  <br>(Grand) | Rare Jewel | VEX Rune | THUL Rune | Ruby | | \= | +1 Random Barbarian Skill Tab<br>Crafted Charm |
| Magic Charm  <br>(Grand) | Rare Jewel | Vex Rune | THUL Rune | Sapphire | | \= | +1 Random Sorceress Skill Tab<br>Crafted Charm |
| Magic Charm  <br>(Grand) | Rare Jewel | Vex Rune | THUL Rune | Emerald | | \= | +1 Random Druid Skill Tab<br>Crafted Charm |
| Magic Charm  <br>(Grand) | Rare Jewel | Vex Rune | THUL Rune | Skull | | \= | +1 Random Necromancer Skill Tab<br>Crafted Charm |
| Magic Charm  <br>(Grand) | Rare Jewel | Vex Rune | THUL Rune | Amethyst | | \= | +1 Random Amazon Skill Tab<br>Crafted Charm |
| Magic Charm  <br>(Grand) | Rare Jewel | Vex Rune | THUL Rune | Diamond | | \= | +1 Random Paladin Skill Tab<br>Crafted Charm |
| Magic Charm  <br>(Grand) | Rare Jewel | Vex Rune | THUL Rune | Chaos Onyx | | \= | +1 Random Warlock Skill Tab<br>Crafted Charm |

## Sunder Charms

> The renewed sunders now roll:
> - Affix 1: extra 5-15% elemental skill damage or 5-15% elemental pierce (enhanced weapon damage 50-100%) or +1 to all skills.
> - Affix 2: 20-30% magic find or 40-60% gold find.
> - Affix 3: 20-50 HP or 20-50 mana or 50-100 defense.
> - Affix 4: 10-20% faster run/walk or 15-20% faster hit recovery or 5-10 all stats.
> - Affix 5: Remove negative resist penalty or half the resist penalty.
> - Affix 6: 5-15% increased attack speed or 5-15% faster cast rate.

> - **You can only hold one renewed sunder charm of a single element.**  
> Be sure to put already crafted ones in shared stash when you try to craft them

| **Reagent 1** | **Reagent 2** | **Reagent 3** | **Reagent 4** | **Reagent 5** | **Reagent 6** | **Reagent 7** | **Reagent 8** | **Guaranteed Stats** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **RENEWED SUNDER CHARMS** | | | | | | | | |
| Unique Charm:<br>Latent Flame Rift (Fire) | Unique Jewel | SUR Rune | Gem Bag (50 Gems) | Deep Worldstone Shard | | | \= | Renewed Flame Rift |
| Unique Charm:<br>Latent Cold Rupture (Cold) | Unique Jewel | SUR Rune | Gem Bag (50 Gems) | Eastern Worldstone Shard | | | \= | Renewed Cold Rupture |
| Unique Charm:<br>Latent Crack of the Heavens (Lightning) | Unique Jewel | SUR Rune | Gem Bag (50 Gems) | Southern Worldstone Shard | | | \= | Renewed Crack of the Heavens |
| Unique Charm:<br>Latent Rotting Fissure (Poison) | Unique Jewel | SUR Rune | Gem Bag (50 Gems) | Western Worldstone Shard | | | \= | Renewed Rotting Fissure |
| Unique Charm:<br>Latent Bone Break (Physical) | Unique Jewel | SUR Rune | Gem Bag (50 Gems) | Northern Worldstone Shard | | | \= | Renewed Bone Break |
| Unique Charm:<br>Latent Black Cleft (Magic) | Unique Jewel | SUR Rune | Gem Bag (50 Gems) | Northern Worldstone Shard | Southern Worldstone Shard | Deep Worldstone Shard | \= | Renewed Black Cleft |
| **Reset renewed sunder back to its latent version** | | | | | | | | |
| Charm:<br>Renewed Sunder<br>Any Type | HEL Rune | Gem Bag (200 Gems) | | | | | \= | Latent Charm of the same type |

[Back to contents](#contents)
