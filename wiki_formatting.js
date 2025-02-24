// Define the lists for rarities and items
const rarities = ['Magic', 'Rare', 'Unique', 'Set', 'Crafted', 'Ethereal'];
const items = ['Jewel', 'Jewels', 'Amulet', 'Amulets', 'Ring', 'Rings', 'Charm', 'Charms',
'Armor', 'Shield', 'Shields', 'Weapon', 'Weapons', 'Belt', "Belts", "Boot", 'Boots', "Glove", 'Gloves', 
'Helm', 'Helms', 'Circlet'];

// Define the list for runes
const runes = ['EL', 'ELD', 'TIR', 'NEF', 'ETH', 'ITH', 'TAL', 'RAL', 
'ORT', 'THUL', 'AMN', 'SOL', 'SHAEL', 'DOL', 'HEL', 'IO', 'LUM', 
'KO', 'FAL', 'LEM', 'PUL', 'UM', 'MAL', 'IST', 'GUL', 
'VEX', 'OHM', 'LO', 'SUR', 'BER', 'JAH', 'CHAM', 'ZOD'];

// Define the list for gems
const gems = ['Amethyst', 'Sapphire', 'Ruby', 'Emerald', 'Topaz', 'Diamond', 'Skull'];

// Define the list for orbs and their colors (using HEX codes)
const orbs = {
    'Conversion': '#e67e22', // Orange
    'Assemblage': '#109001', // Green
    'Infusion': '#dadd00',   // Yellow
    'Corruption': '#cd0000', // Red
    'Socketing': '#0025cd',  // Blue
    'Shadows': '#9200a1'     // Purple
};

// Define the colors for each rarity and their colors (using HEX codes)
const rarityColors = {
    'Magic': '#1770ff',     // Blue
    'Rare': '#ffee00',      // Yellow
    'Unique': '#c48300',    // Tan
    'Set': '#009102',       // Green
    'Crafted': '#c44500',   // Orange
    'Ethereal': '#9400ab',  // Purple
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

        // Highlight rarity words within brackets
        const bracketRegex = new RegExp(`\\(${rarity}\\)`, 'gi');
        newText = newText.replace(bracketRegex, `<span style="color: ${color}; font-weight: bold;">(${rarity})</span>`);

        // Highlight the word 'Ethereal'
        if (rarity === 'Ethereal') {
            const etherealRegex = new RegExp(`\\b${rarity}\\b`, 'gi');
            newText = newText.replace(etherealRegex, `<span style="color: ${color}; font-weight: bold;">${rarity}</span>`);
        }
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

    // Highlight 'Gem (Any)', 'Gems (Any)', and 'Gem Bag (X Gem|Gems)'
    const gemAnyRegex = new RegExp(`Gem \\(Any\\)`, 'gi');
    newText = newText.replace(gemAnyRegex, `<span style="color: turquoise; font-weight: bold;">Gem (Any)</span>`);

    const gemsAnyRegex = new RegExp(`Gems \\(Any\\)`, 'gi');
    newText = newText.replace(gemsAnyRegex, `<span style="color: turquoise; font-weight: bold;">Gems (Any)</span>`);

    const gemBagRegex = new RegExp(`Gem Bag \\(\\d+ (Gem|Gems)\\)`, 'gi');
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