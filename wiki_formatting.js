const rarities = ['Magic', 'Rare', 'Unique', 'Set', 'Crafted', 'Ethereal'];
const items = ['Item', 'Jewel', 'Jewelry', 'Amulet', 'Ring', 'Charm',
'Armor', 'Shield', 'Weapon', 'Belt', 'Boot', 'Glove', 'Helm', 'Circlet'];
const runes = ['EL', 'ELD', 'TIR', 'NEF', 'ETH', 'ITH', 'TAL', 'RAL',
'ORT', 'THUL', 'AMN', 'SOL', 'SHAEL', 'DOL', 'HEL', 'IO', 'LUM',
'KO', 'FAL', 'LEM', 'PUL', 'UM', 'MAL', 'IST', 'GUL',
'VEX', 'OHM', 'LO', 'SUR', 'BER', 'JAH', 'CHAM', 'ZOD'];
const gems = ['Amethyst', 'Sapphire', 'Ruby', 'Emerald', 'Topaz', 'Diamond', 'Skull', 'Chaos Onyx'];
const tools = ['Rune Pliers', 'Jewel Pliers', 'Gem Bag', 'Worldstone Shard', 'Uber Spirits'];
const recolorRunes = false;
const gemColors = {
  'Amethyst': '#8e44ad',
  'Sapphire': '#2474d1',
  'Ruby': '#c62828',
  'Emerald': '#159447',
  'Topaz': '#c58a00',
  'Diamond': '#d7e5ed',
  'Skull': '#7b8188',
  'Chaos Onyx': '#252a30'
};

const rarityColors = {
  'Magic': '#1769d1',
  'Rare': '#d9aa00',
  'Unique': '#a35b00',
  'Set': '#078a38',
  'Crafted': '#a63b00',
  'Ethereal': '#7316a8'
};

const orbColors = {
  'Conversion': '#b45309',
  'Assemblage': '#08752b',
  'Infusion': '#d9aa00',
  'Corruption': '#b42318',
  'Socketing': '#1248a0',
  'Shadows': '#7316a8'
};

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function createHighlightRules() {
  const rules = [];

  rarities.forEach(rarity => {
    items.forEach(item => {
      const plural = item === 'Jewelry' ? '' : 's?';
      rules.push({
        pattern: `\\b${escapeRegExp(rarity)}\\s+${escapeRegExp(item)}${plural}\\b`,
        className: `wiki-rarity-${rarity.toLowerCase()}`
      });
    });

    rules.push({
      pattern: `\\(${escapeRegExp(rarity)}\\)`,
      className: `wiki-rarity-${rarity.toLowerCase()}`
    });
  });

  rarities.forEach(rarity => rules.push({
    pattern: `\\b${escapeRegExp(rarity)}\\b`,
    className: `wiki-rarity-${rarity.toLowerCase()}`
  }));
  if (recolorRunes) {
    runes.forEach(rune => rules.push({ pattern: `\\b${rune} Rune\\b`, className: 'wiki-rune' }));
  }
  gems.forEach(gem => rules.push({
    pattern: `\\b${escapeRegExp(gem)}\\b`,
    className: `wiki-gem-${gem.toLowerCase().replace(/ /g, '-')}`
  }));
  rules.push({ pattern: '\\bGems? \\(Any\\)', className: 'wiki-gem' });
  rules.push({ pattern: '\\bGem Bag \\(\\d+ Gems?\\)', className: 'wiki-gem' });
  Object.keys(orbColors).forEach(orb => rules.push({
    pattern: `\\bOrb of ${escapeRegExp(orb)}\\b`,
    className: `wiki-orb-${orb.toLowerCase()}`
  }));
  tools.forEach(tool => rules.push({
    pattern: `\\b${escapeRegExp(tool)}\\b`,
    className: tool === 'Uber Spirits'
      ? 'wiki-uber-spirits'
      : tool === 'Worldstone Shard'
        ? 'wiki-worldstone-shard'
        : 'wiki-recipe-tool'
  }));

  return rules.sort((left, right) => right.pattern.length - left.pattern.length);
}

const highlightRules = createHighlightRules();
const highlightPattern = new RegExp(highlightRules.map(rule => `(${rule.pattern})`).join('|'), 'gi');

function addHighlightStyles() {
  if (document.getElementById('wiki-formatting-styles')) return;

  const style = document.createElement('style');
  style.id = 'wiki-formatting-styles';
  style.textContent = `
    .wiki-keyword-highlight { font-weight: 700; }
    .wiki-rarity-magic { color: ${rarityColors.Magic}; }
    .wiki-rarity-rare { color: ${rarityColors.Rare}; }
    .wiki-rarity-unique { color: ${rarityColors.Unique}; }
    .wiki-rarity-set { color: ${rarityColors.Set}; }
    .wiki-rarity-crafted { color: ${rarityColors.Crafted}; }
    .wiki-rarity-ethereal { color: ${rarityColors.Ethereal}; }
    .wiki-rune { color: #a34b00; }
    .wiki-gem { color: #008f83; }
    .wiki-gem-amethyst { color: ${gemColors.Amethyst}; }
    .wiki-gem-sapphire { color: ${gemColors.Sapphire}; }
    .wiki-gem-ruby { color: ${gemColors.Ruby}; }
    .wiki-gem-emerald { color: ${gemColors.Emerald}; }
    .wiki-gem-topaz { color: ${gemColors.Topaz}; }
    .wiki-gem-diamond { color: ${gemColors.Diamond}; }
    .wiki-gem-skull { color: ${gemColors.Skull}; }
    .wiki-gem-chaos-onyx { color: ${gemColors['Chaos Onyx']}; }
    .wiki-orb-conversion { color: ${orbColors.Conversion}; }
    .wiki-orb-assemblage { color: ${orbColors.Assemblage}; }
    .wiki-orb-infusion { color: ${orbColors.Infusion}; }
    .wiki-orb-corruption { color: ${orbColors.Corruption}; }
    .wiki-orb-socketing { color: ${orbColors.Socketing}; }
    .wiki-orb-shadows { color: ${orbColors.Shadows}; }
    .wiki-recipe-tool { color: #6b4f2a; }
    .wiki-uber-spirits { color: #8a4b08; }
    .wiki-worldstone-shard { color: #f05a00; }
  `;
  document.head.appendChild(style);
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
  highlightPattern.lastIndex = 0;

  const fragment = document.createDocumentFragment();
  let lastIndex = 0;
  let match;

  while ((match = highlightPattern.exec(originalText))) {
    if (match.index > lastIndex) {
      fragment.appendChild(document.createTextNode(originalText.slice(lastIndex, match.index)));
    }

    const ruleIndex = match.slice(1).findIndex(Boolean);
    const highlight = document.createElement('span');
    highlight.className = `wiki-keyword-highlight ${highlightRules[ruleIndex].className}`;
    highlight.textContent = match[0];
    fragment.appendChild(highlight);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex === 0) return;
  if (lastIndex < originalText.length) {
    fragment.appendChild(document.createTextNode(originalText.slice(lastIndex)));
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

  addHighlightStyles();

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