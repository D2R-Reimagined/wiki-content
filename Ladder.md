---
title: Reimagined Ladder
description: Play on dedicated servers with trade
published: true
date: 2026-11-04T18:32:14.402Z
tags: 
editor: markdown
dateCreated: 2026-11-04T18:29:22.308Z
---

## Ladder Specific Changes

### Ladder Drop Rates

Some drops are rarer on Ladder. Only the chance of the item dropping changes, nothing else
- Runes
   - Runes El through Sol (**1-12**): **unchanged**
   - Runes Shael through Ist (**13-24**): **20% rarer** (**x0.8** drop rate)
   - Runes Gul and above (**25+**, including Brak, Zeph, Myr, Grit, Dem and Hev): **3x rarer** (**x1/3** drop rate)
   - Rune stacks follow the same rate as their rune
- Orb of Conversion and Orb of Assemblage: **3x rarer** (**x1/3**) from every rolled drop, in **all difficulties**
- Orb of Shadows and Orb of Renewal: **unchanged**
- Jewels: **2x rarer** (**x1/2**) in **Nightmare and Hell** only. Normal jewel drops are unchanged
    - Rolled jewel drops in Maps (for example the Artificer's bonus roll) and in the Labyrinth count as Hell and are also halved
- Terror Zone drop tables get the same changes
- The reduction holds at any party size
- Normal-difficulty quest bosses no longer drop a guaranteed orb
    - Duriel (Normal): no guaranteed **Orb of Infusion**
    - Mephisto (Normal): no guaranteed **Orb of Assemblage**
    - Diablo (Normal): no guaranteed **Orb of Conversion**
    - Their other drops are unchanged. The **Nightmare and Hell** kills still give their guaranteed orb at the full rate
- Guaranteed payouts keep their full rate

> This applies on the ladder servers and can't be configured. One small exception to "exact at any party size": the dedicated rune slot of Countess, Battlemaiden, Bloodwitch, Frozenstein and Hephasto (Nightmare/Hell, and the Normal "high rune" slot). Solo, that slot now gives a rune **90.5% to 98%** as often as before (Hell Countess: **91.8%**). In bigger parties the reduction on that slot gets smaller. Normal Countess's low rune slot (El-Sol) is unchanged.

### Ladder Locked Settings

On Ladder launches the launcher resets these to the ladder values, so every player plays by the same rules:
- Ladder Servers and Lobby: server, account and redirect settings
- Reimagined Maps: event chance 30%, treasure monster chance 8%, Wardens never get random bonus modifiers, map reopening on, in-map HUD always shown
- Auto Waypoint: always on, with a range of 20
- Identify On Click, Bind And Summon, Charm Inventory and Left Click Auras: the whole config file
- Developer test and debug commands are disabled (Maps, Death Tracker, Kill Tracker, Hardcore Death Announcements)

## Chat Commands

> Chat features require starting the game from and being signed into the Reimagined Launcher. 
{.is-info}

### Global

`/global on` - Enables Global chat 
`/global off` - Turn Global chat off completely. You don't send or receive anything, and friends see you as offline.
`/g <message>` - Chat with people in global chat

`/global` - Send everything you type to Global from now on. Whispers and lines starting with / or ! still go to your game
`/game` - Send everything you type to game chat (the default)

> Global chat is moderated both manually and automatically, be good.
{.is-warning}

### Friends

`/friend` or `/friend list` - List your friends (online and offline) and requests waiting for your answer
`/friend add <name>`: send a request, or accept theirs - Add Friend asks for the player's **website display name**. Both players have to accept. If you both send each other a request, you become friends right away
`/friend accept <name>` - Accept a request
`/friend decline <name>` or `/friend remove <name>` - Decline a request, cancel your own, or unfriend


`/dm <name> <message>` - Private message to an online friend. Names can contain spaces
`/r <message>` or `/reply <message>` -Answer the last friend who messaged you. Until a friend has messaged you, `/r` works like the normal game command

>DMs are **purple** ("From Name:" / "To Name:") and only show when Global chat is enabled
A DM is refused, with a red message, if the person isn't an accepted friend or is offline, if you're muted, or if you send more than **5 messages per 10 seconds**. Messages to offline friends aren't stored

### Misc/Plugins

`/sell` - Open the Sell Item window for trading.

`/playercount` - Shows how many Reimagined players are online, e.g. "12 players online."

`/bug` or `/suggest` - Open an in-game panel ("Report a Bug" / "Make a Suggestion") with a text box and Submit / Cancel. Escape also closes it
`/bug <text>` or `/suggest <text>` - Send the line right away, without the panel

`/alwaysshowrolls <option>` - Configure showing rolls at all times, options are `on`, `off`, `toggle`, and `status`

`/belt-snapshot` - Snapshots current belt settings (based on the item in each active belt column) for autofilling from inventory
`/belt-reset` - Resets belt settings to default (fill based on current column contents)
`/belt-fill` - Trigger belt refill from inventory based on current settings 
> Automatic refill is off by default. Set auto_refill = true in d2rloader/config/auto-belt-refill.toml to refill as soon as a potion is used
{.is-info}

`/deaths` - Your total, e.g. "You have died 3 times. Last on 2026-10-24 14:05: Travincal (act 3).", plus deaths in the current game
`/deaths log` - Your last 5 deaths with date, time and area

`/kills` - Counts the monsters you kill per character, lifetime total. Current game total also shown

`/played` - Tracks play time per character

`/mtx` - Cycles off, 1, 2, 3, off
`/mtx 1` to `/mtx 3`, or `/mtx pumpkin`, `/mtx pumpkin-lit`, `/mtx pumpkin-inferno` - equip one skin
`/mtx off` or `/mtx none` - Disable the skin
`/mtx list` - Lists every skin, how to earn it, and which you own
`/mtx shop` or `/mtx site` - Opens the website's **Cosmetics** page in your browser

`/portals` - List every color and its unlock status
`/portals <option>` - Choose your active portal color, options are `classic`, `green`, `violet`, `red`, `teal`, `ember`


