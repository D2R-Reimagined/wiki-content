---
title: D2RMM Install Guide
description: 
published: true
date: 2026-11-03T21:41:56.813Z
tags: install, install guide
editor: markdown
dateCreated: 2026-11-03T21:41:56.813Z
---

## D2RMM

Using a Mod Manager allows you to easily install a variety of mods together *(assuming they play nice)* without having to know anything about modding.

Reimagined is packed full of expansive features and QOL updates, so installing extra mods isn't always necessary. 

Check the list of [Reimagined features](https://wiki.d2r-reimagined.com/en/Installs#reimagined-features) below to see if a 3rd-party mod is still necessary.

When using D2RMM your active mod files will be now be located under the `**D2RMM\mods\**` folder instead of `**Diablo II Resurrected\mods\**`.

Any changes you make to Reimagined files needs to be done in the D2RMM mods directory.  
 

#### File Steps

1\. Download [D2RMM](https://github.com/olegbl/d2rmm/releases/tag/v1.9.2) from D2RMM Github.

2\. Open the `D2RMM` folder - navigate to the `mods` directory.

-   You should see a text file called 'PUT YOUR MODS HERE' - leave this window open, we'll use it later.

3\. Open a new File Explorer window and navigate to your `Reimagined` mod folder under your D2R Install directory.

4\. Copy the `Reimagined.mpq` folder (this should contain a Data folder and ModInfo.json).

5\. Paste the `Reimagined.mpq` folder into the `D2RMM/mods` folder from step 2.

-   We recommend renaming the folder to `Reimagined`

#### D2RMM Steps

6\. Open D2RMM as Administrator.

7\. Once open, click the three dots in the bottom-right corner and select 'Refresh Mod List'.

8\. Reimagined should appear in the mod list - click the box on the left-side to enable it.

> **The Reimagined folder must always be first in the list of mods. Click and drag the line to the top if it isn't.**

9\. Navigate to the Settings tab (at the top).

-   9a. Click on General.
    -   Change 'Output Mod Name' to 'Reimagined'.
    -   Toggle 'Automatically install mods before running the game'.
-   9b. Click on Game Launcher.
    -   Under 'Extra Game Args', paste the following: `-mod Reimagined -txt`
    -   Feel free to add any other args you want after everything else.

10\. Navigate back to the Mods tab.

11\. Click Install Mods.  
 

#### Play time!

12\. Hit 'Run D2R'.  
 

### Loot Filters

> **This guide assumes you have already downloaded and installed D2RMM (see above)**

-   **Because of the Warlock DLC we do recommend just using the in-game loot filtering system that is compatible with our treasure file, strings, and mod-added items.**
-   *For users without the DLC, the filter below and others like it on Nexus are use at your own risk and not supported by Reimagined. The mod changes every file each of the filters touches and authors would have to make a specific version for use with Reimagined for it to be fully compatible with no issues.*  
     

#### File Steps

1\. Download [Pseudo Loot Filter](https://www.nexusmods.com/diablo2resurrected/mods/467?tab=files) from Nexus Mods.

-   Select ‘Mod manager download’ to automatically download and load the mod into D2RMM.
-   Select ‘Manual download’ to download the mod to your `Downloads` folder - extract the mod into your `D2RMM/mods` folder.  
     

#### D2RMM Steps

2\. In D2RMM, click the 3 dots in the bottom-right, and select ‘Refresh Mod List’.

3\. You should now see Pseudo Loot Filter appear in the list of mods - click the box to the left to enable the mod.

4\. To configure the loot filter, click ‘settings’ to the right.

5\. All items are enabled by default (the slider is on the right-side) - clicking the slider DISABLES the item (this affects all rarities, white, magic, rare, set, unique).

-   Disabling an item simply means that when a disabled item would drop, the game chooses to drop nothing instead.
-   Disabling items does not affect drop chances of other items.
-   It may take a few runs to tweak this list to your liking.

6\. Once you've finished disabling undesirable items, click out of the menu.

7\. Click ‘Install Mods’ in the bottom-right.

8\. Hit ‘Run D2R’.

####   
D2RMM FAQ:

My mod isn't showing up in the mod list on D2RMM?

-   You didn't put the mod in D2RMM/mods, you didn't unzip the file you downloaded, or it's in a folder that D2RMM doesn't understand
-   Run D2RMM as administrator

DM on discord if you need further instructions/help

### Reimagined Features:

If you have questions about whether something is included in Reimagined, or would like to see something added, DM one of the Devs, or post in the suggestions-and-feedback channel of our discord channel.

A number of Mod Creators gave express permission to include their mod in Reimagined. Where this is the case credit is given on the [Reimagined Nexus Mods](https://www.nexusmods.com/diablo2resurrected/mods/503?tab=description) page.

The below (non-exhaustive) list of mods are already functionally covered in Reimagined in some form:

**New Content**

-   Completely reimagined Hell Difficulty

**Inventory**

-   Expanded Inventory / Stash / Cube

**Items**

-   Increase Drop Rates (for all items, runes, gems, etc.)
-   Sunder Charms (dropped by Bosses, super uniques, etc.)
    -   sunders drop in nightmare and hell terror zones
-   Melee AOE Small Charm (Collin's Charm)
-   Perfect Gem Drops / Short Gem Names (there is only one type of Gem in Reimagined)

**Systems**

-   Item Enchants
-   Horadric Forging (various cube recipes allow rerolling, crafting, etc.)
-   Corruptions (implemented via Orb of Corruption)
-   Socket Punching
-   Stackable Runes & Gems (runes drop as stacks; gems are collected in a bag)
-   Rune Easy Upgrade / Downgrade (tooltip printed on rune stacks)

**Mercenaries**

-   Expanded Merc Equipment (all equip slots useable for mercs)

**QOL**

-   Show Item Level
-   Show Item Quality (all items contain \[N\], \[X\], \[E\] tags to show quality)
-   Numbered Rune Names
-   Better Rune Visibility (runes already named, numbered and colored for easier visual identification)
-   Light Pillars (used on various important items)
-   Short Potion Names (renamed already to HP1, MP1, etc.)
-   Town Cast
-   Token of Absolution (sold by Potion Vendors)
-   Short Scroll Names (renamed to TP and ID)
-   Move Cain and Teleports (characters always start in center of town, Cain is there too)
-   Breakpoints and Recipes panels (already included in various forms in-game)
-   Terror Zones (TZs span entire acts for an hour already, no need to pick them)

**Monsters**

-   Monster Density (density custom-set in every area already)
-   Many new super unique monsters

**Environment / UI**

-   Diablood
-   Skill Icons (all skills have been colorised and textured for each class, including Mercs)
