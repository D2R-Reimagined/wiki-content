const rarities = ['Magic', 'Rare', 'Unique', 'Set', 'Crafted', 'Ethereal'];
const items = ['Item', 'Jewel', 'Jewelry', 'Amulet', 'Ring', 'Charm',
'Armor', 'Shield', 'Weapon', 'Belt', 'Boot', 'Glove', 'Helm', 'Circlet'];

const runes = ['EL', 'ELD', 'TIR', 'NEF', 'ETH', 'ITH', 'TAL', 'RAL',
'ORT', 'THUL', 'AMN', 'SOL', 'SHAEL', 'DOL', 'HEL', 'IO', 'LUM',
'KO', 'FAL', 'LEM', 'PUL', 'UM', 'MAL', 'IST', 'GUL',
'VEX', 'OHM', 'LO', 'SUR', 'BER', 'JAH', 'CHAM', 'ZOD'];

const gems = ['Amethyst', 'Sapphire', 'Ruby', 'Emerald', 'Topaz', 'Diamond', 'Skull', 'Chaos Onyx'];

const orbs = {
  'Conversion': '#e67e22',
  'Assemblage': '#109001',
  'Infusion': '#dadd00',
  'Corruption': '#cd0000',
  'Socketing': '#0025cd',
  'Shadows': '#9200a1'
};

const rarityColors = {
  'Magic': '#1770ff',
  'Rare': '#ffee00',
  'Unique': '#c48300',
  'Set': '#009102',
  'Crafted': '#c44500',
  'Ethereal': '#9400ab'
};

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightItems(text) {
  let newText = text;

  rarities.forEach(rarity => {
    const color = rarityColors[rarity];

    items.forEach(item => {
      let regex;

      if (item === 'Jewelry') {
        regex = new RegExp(`\\b${escapeRegExp(rarity)}\\s+${escapeRegExp(item)}\\b`, 'gi');
      } else {
        regex = new RegExp(`\\b${escapeRegExp(rarity)}\\s+${escapeRegExp(item)}s?\\b`, 'gi');
      }

      newText = newText.replace(regex, match =>
        `<span class="wiki-keyword-highlight" style="color: ${color}; font-weight: bold;">${match}</span>`
      );
    });

    const bracketRegex = new RegExp(`\\(${escapeRegExp(rarity)}\\)`, 'gi');
    newText = newText.replace(bracketRegex, match =>
      `<span class="wiki-keyword-highlight" style="color: ${color}; font-weight: bold;">${match}</span>`
    );

    if (rarity === 'Ethereal') {
      const etherealRegex = new RegExp(`\\b${escapeRegExp(rarity)}\\b`, 'gi');
      newText = newText.replace(etherealRegex, match =>
        `<span class="wiki-keyword-highlight" style="color: ${color}; font-weight: bold;">${match}</span>`
      );
    }
  });

  return newText;
}

function highlightRunes(text) {
  let newText = text;

  runes.forEach(rune => {
    const regex = new RegExp(`\\b${escapeRegExp(rune)} Rune\\b`, 'gi');
    newText = newText.replace(regex, match =>
      `<span class="wiki-keyword-highlight" style="color: orange; font-weight: bold;">${match}</span>`
    );
  });

  return newText;
}

function highlightGems(text) {
  let newText = text;

  gems.forEach(gem => {
    const regex = new RegExp(`\\b${escapeRegExp(gem)}\\b`, 'gi');
    newText = newText.replace(regex, match =>
      `<span class="wiki-keyword-highlight" style="color: turquoise; font-weight: bold;">${match}</span>`
    );
  });

  newText = newText.replace(/Gem \(Any\)/gi,
    `<span class="wiki-keyword-highlight" style="color: turquoise; font-weight: bold;">Gem (Any)</span>`);

  newText = newText.replace(/Gems \(Any\)/gi,
    `<span class="wiki-keyword-highlight" style="color: turquoise; font-weight: bold;">Gems (Any)</span>`);

  newText = newText.replace(/Gem Bag \(\d+ (Gem|Gems)\)/gi, match =>
    `<span class="wiki-keyword-highlight" style="color: turquoise; font-weight: bold;">${match}</span>`
  );

  return newText;
}

function highlightOrbs(text) {
  let newText = text;

  Object.keys(orbs).forEach(orbType => {
    const keyword = `Orb of ${orbType}`;
    const color = orbs[orbType];
    const regex = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'gi');

    newText = newText.replace(regex, match =>
      `<span class="wiki-keyword-highlight" style="color: ${color}; font-weight: bold;">${match}</span>`
    );
  });

  return newText;
}

function shouldSkipNode(node) {
  const parent = node.parentElement;
  if (!parent) return true;

  if (
    parent.closest('.wiki-keyword-highlight') ||
    parent.closest('script, style, code, pre, textarea, input, select, option, button, svg')
  ) {
    return true;
  }

  return false;
}

function processTextNode(node) {
  if (shouldSkipNode(node)) return;

  const originalText = node.nodeValue;
  if (!originalText || !originalText.trim()) return;

  let newText = originalText;
  newText = highlightItems(newText);
  newText = highlightRunes(newText);
  newText = highlightGems(newText);
  newText = highlightOrbs(newText);

  if (newText === originalText) return;

  const wrapper = document.createElement('span');
  wrapper.innerHTML = newText;

  const fragment = document.createDocumentFragment();
  while (wrapper.firstChild) {
    fragment.appendChild(wrapper.firstChild);
  }

  node.parentNode.replaceChild(fragment, node);
}

function highlightWithin(root) {
  if (!root) return;

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    null
  );

  const textNodes = [];
  let current;

  while ((current = walker.nextNode())) {
    textNodes.push(current);
  }

  textNodes.forEach(processTextNode);
}

function getContentRoot() {
  return (
    document.querySelector('.page-content') ||
    document.querySelector('.contents') ||
    document.querySelector('main') ||
    document.body
  );
}

let observer;
let scheduled = false;

function scheduleHighlight(root) {
  if (scheduled) return;
  scheduled = true;

  requestAnimationFrame(() => {
    scheduled = false;
    highlightWithin(root || getContentRoot());
  });
}

function initHighlighting() {
  const root = getContentRoot();
  if (!root) return;

  scheduleHighlight(root);

  if (observer) {
    observer.disconnect();
  }

  observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        scheduleHighlight(root);
        break;
      }
    }
  });

  observer.observe(root, {
    childList: true,
    subtree: true
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHighlighting();

  window.addEventListener('load', () => {
    scheduleHighlight(getContentRoot());
  });

  window.addEventListener('popstate', () => {
    setTimeout(initHighlighting, 50);
  });
});