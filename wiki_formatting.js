// Define the lists for rarities and items
const rarities = ['Magic', 'Rare', 'Unique', 'Set', 'Crafted'];
const items = ['Jewel', 'Jewels', 'Armor', 'Shield', 'Weapon', 'Amulet', 'Amulets', 'Ring', 'Rings', 'Charm', 'Charms', 'Belt', 'Boots', 'Gloves', 'Helm'];

// Define the list for runes
const runes = ['EL', 'ELD', 'TIR', 'NEF', 'ETH', 'ITH', 'TAL', 'RAL', 
'ORT', 'THUL', 'AMN', 'SOL', 'SHAEL', 'DOL', 'HEL', 'IO', 'LUM', 
'KO', 'FAL', 'LEM', 'PUL', 'UM', 'MAL', 'IST', 'GUL', 
'VEX', 'OHM', 'LO', 'SUR', 'BER', 'JAH', 'CHAM', 'ZOD'];

// Define the list for gems
const gems = ['Amethyst', 'Sapphire', 'Ruby', 'Emerald', 'Topaz', 'Diamond', 'Skull'];

// Define the list for orbs and their colors (using HEX codes)
const orbs = {
    'Conversion': '#e67e22',
    'Assemblage': '#109001',
    'Infusion': '#dadd00',
    'Corruption': '#cd0000',
    'Socketing': '#0025cd',
    'Shadows': '#9200a1'
};

// Define the colors for each rarity
const rarityColors = {
    'Magic': 'blue',
    'Rare': 'yellow',
    'Unique': 'brown',
    'Set': 'green',
    'Crafted': 'red'
};

// Function to highlight rarity and item combinations
function highlightItems(bodyText) {
    let newText = bodyText;

    rarities.forEach(rarity => {
        const color = rarityColors[rarity];
        items.forEach(item => {
            const keywordPair = `${rarity} ${item}`;
            const regex = new RegExp(`\\b${rarity}\\s+${item}\\b`, 'gi');
            newText = newText.replace(regex, `<span style="color: ${color}; font-weight: bold;">${keywordPair}</span>`);
        });

        // Handle separating characters like '/'
        const combinedItems = items.join('|');
        const combinedRegex = new RegExp(`\\b${rarity}\\s+(${combinedItems})(\\s*/\\s*(${combinedItems}))*\\b`, 'gi');
        newText = newText.replace(combinedRegex, match => {
            return `<span style="color: ${color}; font-weight: bold;">${match}</span>`;
        });
    });

    return newText;
}

// Function to highlight runes and rune combinations
function highlightRunes(bodyText) {
    let newText = bodyText;

    runes.forEach(rune => {
        const regex = new RegExp(`\\b${rune} Rune\\b`, 'gi');
        newText = newText.replace(regex, `<span style="color: orange; font-weight: bold;">${rune} Rune</span>`);
    });

    return newText;
}

// Function to highlight gems
function highlightGems(bodyText) {
    let newText = bodyText;

    gems.forEach(gem => {
        const regex = new RegExp(`\\b${gem}\\b`, 'gi');
        newText = newText.replace(regex, `<span style="color: turquoise; font-weight: bold;">${gem}</span>`);
    });

    // Highlight 'Gem (Any)', 'Gems (Any)', and 'Gem Bag (X Gems)'
    const gemAnyRegex = new RegExp(`Gem \\(Any\\)`, 'gi');
    newText = newText.replace(gemAnyRegex, `<span style="color: turquoise; font-weight: bold;">Gem (Any)</span>`);

    const gemsAnyRegex = new RegExp(`Gems \\(Any\\)`, 'gi');
    newText = newText.replace(gemsAnyRegex, `<span style="color: turquoise; font-weight: bold;">Gems (Any)</span>`);

    const gemBagRegex = new RegExp(`Gem Bag \\(\\d+ Gems\\)`, 'gi');
    newText = newText.replace(gemBagRegex, `<span style="color: turquoise; font-weight: bold;">$&</span>`);

    return newText;
}

// Function to highlight orbs
function highlightOrbs(bodyText) {
    let newText = bodyText;

    Object.keys(orbs).forEach(orbType => {
        const keyword = `Orb of ${orbType}`;
        const color = orbs[orbType];
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        newText = newText.replace(regex, `<span style="color: ${color}; font-weight: bold;">${keyword}</span>`);
    });

    return newText;
}

// Function to traverse the DOM and apply highlighting to text nodes within specified elements
function traverseAndHighlight(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let newText = node.nodeValue;
        newText = highlightItems(newText);
        newText = highlightRunes(newText);
        newText = highlightGems(newText);
        newText = highlightOrbs(newText);

        if (newText !== node.nodeValue) {
            const span = document.createElement('span');
            span.innerHTML = newText;
            node.parentNode.replaceChild(span, node);
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(child => traverseAndHighlight(child));
    }
}

// Function to update the HTML page with highlighted keywords within specified elements
function highlightKeywords() {
    const elements = document.querySelectorAll('figure.table');
    elements.forEach(element => traverseAndHighlight(element));
}

// Run the function to highlight keywords when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', highlightKeywords);