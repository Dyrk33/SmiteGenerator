const assassains = ['Arachne', 'Awilix', 'Bakasura', 'Bastet', 'Camazotz', 'Da Ji', 'Fenrir', 'Hun Batz', 'Kali', 'Loki', 'Mercury', 'Ne Zha', 'Nemesis', 'Pele', 'Ratatoskr', 'Ravana', 'Serqet', 'Susano', 'Thanatos', 'Thor'];
const guardians = ['Ares', 'Artio', 'Athena', 'Bacchus', 'Cabrakan', 'Cerberus', 'Fafnir', 'Ganesha', 'Geb', 'Khepri', 'Kumbhakarna', 'Kuzenbo', 'Sobek', 'Sylvanus', 'Terra', 'Xing Tian', 'Ymir'];
const mages = ['Agni', 'Ah Puch', 'Anubis', 'Ao Kuang', 'Aphrodite', 'Baron Samedi', "Chang'e", 'Chronos', 'Discordia', 'Freya', 'Hades', 'He Bo', 'Hel', 'Hera', 'Isis', 'Janus', 'Kukulkan', 'Nox', 'Nu Wa', 'Poseidon', 'Ra', 'Raijin', 'Scylla', 'Sol', 'The Morrigan', 'Thoth', 'Vulcan', 'Zeus', 'Zhong Kui'];
const warriors = ['Achilles', 'Amaterasu', 'Bellona', 'Chaac', 'Cu Chulainn', 'Erlang Shen', 'Guan Yu', 'Hercules', 'King Arthur', 'Nike', 'Odin', 'Osiris', 'Sun Wukong', 'Tyr', 'Vamana'];
const hunters = ['Ah Muzen Cab', 'Anhur', 'Apollo', 'Artemis', 'Cernunnos', 'Chernobog', 'Chiron', 'Cupid', 'Hachiman', 'Hou Yi', 'Izanami', 'Jing Wei', 'Medusa', 'Neith'];
const relics = ['Purification Beads', 'Heavenly Wings', 'Blink Rune', 'Cursed Ankh', 'Meditation Cloak', 'Phantom Veil', 'Aegis Amulet', 'Magic Shell', 'Sundering Spear', 'Teleport Glyph', 'Shield of Thorns', 'Horrific Emblem', 'Bracer of Undoing', 'Belt of Frenzy'];
const masks = ["Bumba's Mask", "Rangda's Mask", "Lono's Mask"];
const boots = ['Ninja Tabi', 'Reinforced Greaves', 'Talaria Boots', 'Warrior Tabi', "Shoes of the Magi", "Shoes of Focus", "Reinforced Shoes", "Traveler's Shoes"]
const consumables = ['Healing Potion', 'Mana Potion', 'Ward', 'Elixir of Power', 'Elixir of Defense', 'Sentry Ward', 'Multi Potion', 'Chalice of Healing', 'Chalice of Mana', 'Chalice of the Oracle'];
const basic_items = ["Oni Hunter's Garb", "Genji's Guard", 'Breastplate of Valor', 'Mantle of Discord', 'Spirit Robe', 'Witchblade', "Shogun's Kusari", 'Spectral Armor', 'Relic Dagger', 'Shield of Regrowth', 'Hide of the Urchin', "Emperor's Armor", "Magi's Cloak", 'Stone of Gaia', 'Pestilence', 'Winged Blade', 'Bulwark of Hope', 'Sovereignty', 'Mail of Renewal', 'Heartward Amulet', 'Gauntlet of Thebes', 'Midgardian Mail', 'Hide of the Nemean Lion', 'Mystical Mail', 'Talisman of Energy'];
const physical_items = ['Ninja Tabi', 'Reinforced Greaves', 'Talaria Boots', 'Warrior Tabi', "Odysseus' Bow", 'Toxic Blade', 'Asi', 'Ancile', "Atalanta's Bow", "Berserker's Shield", 'Blackthorn Hammer', 'Bloodforge', "Brawler's Beat Stick", 'Deathbringer', "Devourer's Gauntlet", 'Frostbound Hammer', "Gladiator's Shield", 'Heartseeker', "Hydra's Lament", 'Ichaival', "Jotunn's Wrath", 'Malice', 'Poisoned Star', "Qin's Sais", 'Rage', 'Runeforged Hammer', 'Runic Shield', "Shifter's Shield", 'Silverbranch Bow', 'Soul Eater', 'The Crusher', 'The Executioner', "Titan's Bane", 'Transcendence', 'Void Shield', 'Wind Demon'];
const physical_melee = ['Masamune', 'Golden Blade', 'Hastened Katana', 'Stone Cutting Sword'];
const magical_items = ["Shoes of the Magi", "Shoes of Focus", "Reinforced Shoes", "Traveler's Shoes", "Bancroft's Talon", 'Book of the Dead', 'Book of Thoth', 'Celestial Legion Helm', "Chronos' Pendant", 'Demonic Grip', 'Divine Ruin', 'Doom Orb', 'Dynasty Plate Helm', 'Ethereal Staff', 'Gem of Isolation', 'Hastened Ring', "Jade Emperor's Crown", 'Lotus Crown', 'Obsidian Shard', 'Polynomicon', "Pythagorem's Piece", 'Rod of Asclepius', 'Rod of Tahuti', "Shaman's Ring", 'Soul Gem', 'Soul Reaver', 'Spear of Desolation', 'Spear of the Magus', 'Stone of Binding', 'Stone of Fal', 'Telkhines Ring', "Typhon's Fang", 'Void Stone', "Warlock's Staff"];
const ratatoskr_item = 'Acorn of Yggdrasil';
const barons_consumables = ["Baron's Brew"];
const general_masks = ["Bumba's Mask"];
const warrior_guardian_mask = ["Rangda's Mask"];
const mage_hunter_assassain_mask = ["Lono's Mask"];
const blessings = ["Attacker's Blessing", "Defender's Blessing", "Specialist's Blessing"];
const conquest_blessings = ["Assassin's Blessing", "Guardian's Blessing", "Hunter's Blessing", "Warrior's Blessing", "Mage's Blessing"];
const not_assault = ["Book of Thoth", "Warlock's Staff", "Transcendence", "Devourer's Gauntlet"];
const not_siege = ['Ward', 'Chalice of the Oracle'];
const power_potions = ['Potion of Magical Might', 'Potion of Physical Might'];

// needed for functions defined outside of the on-submit event function
let selected_blessings;

// image sizes in string form
const IMG_SIZES = '128px';
const IMG_PADDING = '4px';

$("#submit").click(function () {
  let selected_god = $("#god_list option:selected").text();
  let selected_mode = $("#mode_list option:selected").text();
  let selected_consumables = consumables;
  let selected_relics = relics;
  selected_blessings = conquest_blessings;
  let selected_items = basic_items;
  selected_items = selected_items.concat(general_masks);

  if (selected_mode !== "Conquest") {
    selected_blessings = selected_blessings.concat(blessings);
  }

  if (selected_mode === 'Siege') {
    setSubtraction(selected_consumables, not_siege);
  }

  if (assassains.includes(selected_god)) {
    selected_items = selected_items.concat(physical_items);
    selected_items = selected_items.concat(physical_melee);
    selected_items = selected_items.concat(mage_hunter_assassain_mask);
    selected_consumables = selected_consumables.concat(power_potions[1]);
  }

  if (guardians.includes(selected_god)) {
    selected_items = selected_items.concat(magical_items);
    selected_items = selected_items.concat(warrior_guardian_mask);
    selected_consumables = selected_consumables.concat(power_potions[0]);
  }

  if (mages.includes(selected_god)) {
    selected_items = selected_items.concat(magical_items);
    selected_items = selected_items.concat(mage_hunter_assassain_mask);
    selected_consumables = selected_consumables.concat(power_potions[0]);
  }

  if (warriors.includes(selected_god)) {
    selected_items = selected_items.concat(physical_items);
    selected_items = selected_items.concat(physical_melee);
    selected_items = selected_items.concat(warrior_guardian_mask);
    selected_consumables = selected_consumables.concat(power_potions[1]);
  }

  if (hunters.includes(selected_god)) {
    selected_items = selected_items.concat(mage_hunter_assassain_mask);
    selected_items = selected_items.concat(physical_items);
    selected_consumables = selected_consumables.concat(power_potions[1]);
  }

  if (selected_god === "Baron Samedi") {
    selected_consumables = selected_consumables.concat(barons_consumables);
  }

  if (selected_mode == 'Assault') {
    for (let i = selected_items.length - 1; i >= 0; i--) {
      if (not_assault.includes(selected_items[i])) {
        selected_items.splice(i, 1);
      }
    }
  }

  shuffle(selected_blessings);
  shuffle(selected_items);
  shuffle(selected_consumables);
  shuffle(selected_relics);

  // special rat items
  if (selected_god === "Ratatoskr") {
    selected_items[0] = ratatoskr_item;
    setSubtraction(selected_items, boots); // rat can't build boots
  }

  // get elements
  const blessingUL = document.querySelector('#blessing');
  const items1Element = document.querySelector('#items1');
  const items2Element = document.querySelector('#items2');
  const items3Element = document.querySelector('#items3');

  // clear out lists
  blessingUL.innerHTML = '';
  items1Element.innerHTML = '';
  items2Element.innerHTML = '';
  items3Element.innerHTML = '';

  // Add titles to each list
  let blessingTitle = document.createElement('h4');
  blessingTitle.innerHTML = 'Blessing:';
  blessingUL.appendChild(blessingTitle);

  let item1Title = document.createElement('h4');
  item1Title.innerHTML = 'Equipment:';
  items1Element.appendChild(item1Title);

  let item2Title = document.createElement('h4');
  item2Title.innerHTML = 'Consumables:';
  items2Element.appendChild(item2Title);

  let item3Title = document.createElement('h4');
  item3Title.innerHTML = 'Relics:';
  items3Element.appendChild(item3Title);

  // Add the random blessing to the list
  const blessingElement = document.createElement('li');
  append_img_with_loading(get_pic(selected_blessings[0]), blessingElement);
  blessingUL.appendChild(blessingElement);

  // add 6 items to the list
  const itemListElement = document.createElement('li');
  for (let i = 0; i <= 5; i++) {
    let img = get_pic(selected_items[i]);
    append_img_with_loading(img, itemListElement);
    // prevent duplicate boots:
    if (boots.includes(selected_items[i])) {
      setSubtraction(selected_items, boots); // remove all other boots
    } else if (masks.includes(selected_items[i])) {
      // prevent duplicate masks:
      setSubtraction(selected_items, masks);
    }
  }
  items1Element.appendChild(itemListElement);
  console.log(selected_items);

  // add 2 consumables to list
  const consumableListElement = document.createElement('li');
  for (let i = 0; i <= 1; i++) {
    let img = get_pic(selected_consumables[i]);
    append_img_with_loading(img, consumableListElement);
  }
  items2Element.appendChild(consumableListElement);

  // add 2 relics to list
  const relicListElement = document.createElement('li');
  for (let i = 0; i <= 1; i++) {
    let img = get_pic(selected_relics[i]);
    append_img_with_loading(img, relicListElement);
  }
  items3Element.appendChild(relicListElement);

});

// given arrays A and B, does the following:
// A = A - B (like set subtraction)
function setSubtraction(a, b) {
  for (let i = a.length - 1; i >= 0; i--) {
    if (b.includes(a[i])) {
      a.splice(i, 1);
    }
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function append_img_with_loading(imgElement, parentElement) {
  const loading = document.createElement('img');
  loading.src = 'Graphics/loading.gif';

  // configure sizes of images
  loading.style.width = IMG_SIZES;
  loading.style.height = IMG_SIZES;
  imgElement.style.width = IMG_SIZES;
  imgElement.style.height = IMG_SIZES;
  loading.style.paddingRight = IMG_PADDING;
  imgElement.style.paddingRight = IMG_PADDING;

  // hide image until it's loaded
  imgElement.style.display = 'none';

  // add both images to parent, drawing the loading image
  parentElement.appendChild(loading);
  parentElement.appendChild(imgElement);

  // when image is loaded, stop drawing loading image and draw real image
  imgElement.addEventListener('load', event => {
    loading.style.display = 'none';
    imgElement.style.display = '';
  });
}

function get_pic(item_name) {
  const itemImg = document.createElement('img');
  itemImg.title = item_name;

  //special case for mask graphics
  if (masks.includes(item_name)) {
    item_name = item_name.replace(/ /g, '');
    item_name = item_name.replace(/\'/, '');
    itemImg.src = "Graphics/" + item_name + "_T3.png";
  //special case for heartseaker
  } else if (item_name === 'Heartseeker') { 
    itemImg.src = "https://d1u5p3l4wpay3k.cloudfront.net/smite_gamepedia/9/97/Heartseeker_T3.png?version=6fdb168d908c99e05dea8fb7614344a7";
  //special case for magis cloak
  } else if (item_name === "Magi's Cloak") {  
    itemImg.src = "https://d1u5p3l4wpay3k.cloudfront.net/smite_gamepedia/1/18/MagisBlessing_T3.png?version=5fcceaa928978ae11bb17768d5a55bc9";
  //Special case for travelers shoes
  } else if (item_name === "Traveler's Shoes") {
    itemImg.src = "https://d1u5p3l4wpay3k.cloudfront.net/smite_gamepedia/5/51/TravelersShoes_T3.png?version=cd9965b1b490a06fc62fb931cae8d1f0";
  //Special case for talaria boots
  } else if (item_name === 'Talaria Boots') {
    itemImg.src = "https://d1u5p3l4wpay3k.cloudfront.net/smite_gamepedia/4/45/TalariaBoots_T3.png?version=3c3cfddef0025c8880e6d6181a9e54ab";
  } else if (item_name === "Book of Thoth") {
    itemImg.src = src="https://d1u5p3l4wpay3k.cloudfront.net/smite_gamepedia/2/2c/BookofThoth_T3.png?version=da20ce2db39e96c74f0df1e659d62231";
  } else {
    itemImg.title = item_name;
    item_name = item_name.toLowerCase();
    item_name = item_name.replace(/ /g, '-');
    item_name = item_name.replace('\'', '');
    itemImg.src = "https://web2.hirez.com/smite/item-icons/" + item_name + ".jpg";
  }

  return itemImg;
}

function get_blessing_pic(item_name) {
  const itemImg = document.createElement('img');
  itemImg.title = item_name;
  item_name = item_name.replace(/ /g, '');
  item_name = item_name.replace(/\'/, '');
  itemImg.src = "Graphics/" + item_name + ".png";
  return itemImg;
}