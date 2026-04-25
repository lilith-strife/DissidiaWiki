const QUICK_BATTLE_ACQUISITION = [
  {
    method: 'Quick Battle',
    detail: 'Guide-ranked opponent equipment pool item. Use the Quick Battle finder for valid level and AI combinations.'
  }
]

function rankedItems(category, subcategory, rank, names) {
  return names.map(name => ({
    category,
    subcategory,
    name,
    rank,
    acquisition: QUICK_BATTLE_ACQUISITION
  }))
}

function guideRanks(category, subcategory, rank, names) {
  return names.map(name => ({
    category,
    subcategory,
    name,
    rank
  }))
}

function battleRiseItem({
  name,
  japaneseName,
  subcategory,
  rank,
  effects,
  trigger,
  level,
  ris,
  rrl,
  acquisition
}) {
  return {
    category: 'Accessory',
    subcategory,
    name,
    japaneseName,
    rank,
    effects,
    battleRise: { trigger, level, ris, rrl },
    acquisition
  }
}

const rankedEquipmentItems = [
  ...rankedItems('Weapon', 'Sword', 1, ['Broadsword']),
  ...rankedItems('Weapon', 'Sword', 2, ['Iron Sword']),
  ...rankedItems('Weapon', 'Sword', 3, ['Serpent Sword']),
  ...rankedItems('Weapon', 'Sword', 4, ['Mithril Sword']),
  ...rankedItems('Weapon', 'Sword', 5, ['Saber']),
  ...rankedItems('Weapon', 'Sword', 6, ['Rapier', 'Ancient Sword', 'Golden Sword']),
  ...rankedItems('Weapon', 'Sword', 7, ['Estoc']),
  ...rankedItems('Weapon', 'Sword', 8, ['Coral Sword', 'Diamond Sword']),
  ...rankedItems('Weapon', 'Sword', 9, ['Runic Blade']),
  ...rankedItems('Weapon', 'Sword', 10, ['Crystal Sword', 'Defender']),
  ...rankedItems('Weapon', 'Sword', 11, ['Enhancer']),
  ...rankedItems('Weapon', 'Sword', 12, ['Falchion', 'Wyrmslayer']),
  ...rankedItems('Weapon', 'Sword', 13, ['Save the Queen']),
  ...rankedItems('Weapon', 'Sword', 14, ['Brave Blade']),
  ...rankedItems('Weapon', 'Sword', 15, ['Excalibur']),

  ...rankedItems('Weapon', 'Dagger', 1, ['Knife']),
  ...rankedItems('Weapon', 'Dagger', 2, ['Dagger']),
  ...rankedItems('Weapon', 'Dagger', 3, ['Khukuri']),
  ...rankedItems('Weapon', 'Dagger', 6, ['Piercing Dagger', 'Maneater']),
  ...rankedItems('Weapon', 'Dagger', 8, ['Air Knife']),
  ...rankedItems('Weapon', 'Dagger', 10, ['Assassin Dagger']),
  ...rankedItems('Weapon', 'Dagger', 11, ['Orichalcum']),
  ...rankedItems('Weapon', 'Dagger', 14, ['Gladius']),
  ...rankedItems('Weapon', 'Dagger', 15, ['Zorlin Shape']),

  ...rankedItems('Weapon', 'Huge Sword', 1, ['Longsword']),
  ...rankedItems('Weapon', 'Huge Sword', 2, ['Greatsword']),
  ...rankedItems('Weapon', 'Huge Sword', 5, ['Claymore']),
  ...rankedItems('Weapon', 'Huge Sword', 6, ['Inferno Sword']),
  ...rankedItems('Weapon', 'Huge Sword', 8, ['Ogre Nix']),
  ...rankedItems('Weapon', 'Huge Sword', 11, ['Apocalypse']),
  ...rankedItems('Weapon', 'Huge Sword', 15, ['Ragnarok']),

  ...rankedItems('Weapon', 'Katana', 1, ['Katana']),
  ...rankedItems('Weapon', 'Katana', 4, ['Nodachi']),
  ...rankedItems('Weapon', 'Katana', 5, ['Uchigatana']),
  ...rankedItems('Weapon', 'Katana', 8, ['Kiku-Ichimonji']),
  ...rankedItems('Weapon', 'Katana', 9, ['Murasame']),
  ...rankedItems('Weapon', 'Katana', 12, ['Heike Blade']),
  ...rankedItems('Weapon', 'Katana', 13, ['Windslicer']),
  ...rankedItems('Weapon', 'Katana', 15, ['Ama-no-Murakumo', 'Genji Blade']),

  ...rankedItems('Weapon', 'Polearm', 1, ['Spear']),
  ...rankedItems('Weapon', 'Polearm', 2, ['Javelin']),
  ...rankedItems('Weapon', 'Polearm', 3, ['Heavy Lance']),
  ...rankedItems('Weapon', 'Polearm', 4, ['Mithril Spear']),
  ...rankedItems('Weapon', 'Polearm', 6, ['Obelisk', 'Wind Spear']),
  ...rankedItems('Weapon', 'Polearm', 7, ['Partisan']),
  ...rankedItems('Weapon', 'Polearm', 10, ['Crystal Lance']),
  ...rankedItems('Weapon', 'Polearm', 11, ['Trident']),
  ...rankedItems('Weapon', 'Polearm', 12, ['Winddrake Spear']),
  ...rankedItems('Weapon', 'Polearm', 13, ['Holy Lance']),
  ...rankedItems('Weapon', 'Polearm', 14, ['Gae Bolg']),
  ...rankedItems('Weapon', 'Polearm', 15, ['Gungnir']),

  ...rankedItems('Weapon', 'Axe', 1, ['Axe']),
  ...rankedItems('Weapon', 'Axe', 2, ['Light Axe']),
  ...rankedItems('Weapon', 'Axe', 3, ['Battle Axe']),
  ...rankedItems('Weapon', 'Axe', 4, ['Mithril Axe']),
  ...rankedItems('Weapon', 'Axe', 6, ['Deathsickle']),
  ...rankedItems('Weapon', 'Axe', 7, ['Francisca']),
  ...rankedItems('Weapon', 'Axe', 9, ['Runic Axe']),
  ...rankedItems('Weapon', 'Axe', 13, ['Gigas Axe']),
  ...rankedItems('Weapon', 'Axe', 15, ['Earthbreaker']),

  ...rankedItems('Weapon', 'Rod', 1, ['Rod']),
  ...rankedItems('Weapon', 'Rod', 2, ['Guard Rod']),
  ...rankedItems('Weapon', 'Rod', 3, ['Heal Rod']),
  ...rankedItems('Weapon', 'Rod', 4, ['Mithril Rod']),
  ...rankedItems('Weapon', 'Rod', 5, ['Wisdom Rod']),
  ...rankedItems('Weapon', 'Rod', 6, ['Faerie Rod']),
  ...rankedItems('Weapon', 'Rod', 7, ['Wizard Rod']),
  ...rankedItems('Weapon', 'Rod', 10, ['Princess Guard']),
  ...rankedItems('Weapon', 'Rod', 13, ['Holy Rod']),
  ...rankedItems('Weapon', 'Rod', 15, ['Stardust Rod']),

  ...rankedItems('Weapon', 'Staff', 1, ['Staff']),
  ...rankedItems('Weapon', 'Staff', 2, ['Oak Staff']),
  ...rankedItems('Weapon', 'Staff', 3, ['Restorative Staff']),
  ...rankedItems('Weapon', 'Staff', 4, ['Force Staff']),
  ...rankedItems('Weapon', 'Staff', 6, ['Golden Staff', "Elder's Staff"]),
  ...rankedItems('Weapon', 'Staff', 8, ['Runic Staff']),
  ...rankedItems('Weapon', 'Staff', 9, ['Judgment Staff']),
  ...rankedItems('Weapon', 'Staff', 11, ["Sage's Staff"]),
  ...rankedItems('Weapon', 'Staff', 12, ['Staff of Light']),
  ...rankedItems('Weapon', 'Staff', 14, ['Mace of Zeus']),
  ...rankedItems('Weapon', 'Staff', 15, ['Nirvana']),

  ...rankedItems('Weapon', 'Thrown', 3, ['Cross Shuriken']),
  ...rankedItems('Weapon', 'Thrown', 4, ['Boomerang', 'Chakram']),
  ...rankedItems('Weapon', 'Thrown', 5, ['Pinwheel']),
  ...rankedItems('Weapon', 'Thrown', 7, ['Moonring Blade']),
  ...rankedItems('Weapon', 'Thrown', 9, ['Rising Sun']),
  ...rankedItems('Weapon', 'Thrown', 13, ['Fuuma Shuriken']),
  ...rankedItems('Weapon', 'Thrown', 15, ['Meat Cleaver']),

  ...rankedItems('Weapon', 'Arm', 1, ['Leather Gloves']),
  ...rankedItems('Weapon', 'Arm', 3, ['Metal Knuckles']),
  ...rankedItems('Weapon', 'Arm', 4, ['Mithril Claws', 'Dark Claws']),
  ...rankedItems('Weapon', 'Arm', 6, ['Sonic Knuckles']),
  ...rankedItems('Weapon', 'Arm', 9, ['Tiger Fangs']),
  ...rankedItems('Weapon', 'Arm', 10, ["Cat's Claws", 'Scarmiglione Fangs']),
  ...rankedItems('Weapon', 'Arm', 14, ['Godhand']),
  ...rankedItems('Weapon', 'Arm', 15, ['Premium Heart']),

  ...rankedItems('Weapon', 'Instrument', 4, ["Gearman's Chime", "Gaia's Bell"]),
  ...rankedItems('Weapon', 'Instrument', 8, ['Runic Bell']),
  ...rankedItems('Weapon', 'Instrument', 10, ['Morpheus Harp']),
  ...rankedItems('Weapon', 'Instrument', 12, ['Lamia Harp']),
  ...rankedItems('Weapon', 'Instrument', 14, ['Harp of Apollon']),
  ...rankedItems('Weapon', 'Instrument', 15, ['Harp of Loki']),

  ...rankedItems('Hand Equipment', 'Wakizashi', 1, ['Kunai']),
  ...rankedItems('Hand Equipment', 'Wakizashi', 2, ['Wakizashi']),
  ...rankedItems('Hand Equipment', 'Wakizashi', 4, ['Kodachi', 'Hanafubuki']),
  ...rankedItems('Hand Equipment', 'Wakizashi', 6, ['Ninja Blade']),
  ...rankedItems('Hand Equipment', 'Wakizashi', 9, ['Sasuke Blade']),
  ...rankedItems('Hand Equipment', 'Wakizashi', 13, ['Kagenui']),
  ...rankedItems('Hand Equipment', 'Wakizashi', 15, ['Oborotsuki']),

  ...rankedItems('Hand Equipment', 'Shield', 1, ['Buckler']),
  ...rankedItems('Hand Equipment', 'Shield', 2, ['Iron Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 3, ['Knight Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 4, ['Mithril Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 5, ['Great Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 6, ['Golden Shield', 'Fellsteel Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 7, ['Force Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 8, ['Diamond Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 10, ['Crystal Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 11, ['Shield of Light']),
  ...rankedItems('Hand Equipment', 'Shield', 12, ['Wyrmshield', 'Heike Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 13, ['Jovian Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 14, ['Aegis Shield']),
  ...rankedItems('Hand Equipment', 'Shield', 15, ["Hero's Shield", 'Genji Shield']),

  ...rankedItems('Hand Equipment', 'Bracelet', 1, ['Bronze Bangle']),
  ...rankedItems('Hand Equipment', 'Bracelet', 2, ['Power Wrist']),
  ...rankedItems('Hand Equipment', 'Bracelet', 3, ['Silver Bangle']),
  ...rankedItems('Hand Equipment', 'Bracelet', 4, ['Mithril Bangle', 'Chocobo Armlet']),
  ...rankedItems('Hand Equipment', 'Bracelet', 5, ['Hyper Wrist']),
  ...rankedItems('Hand Equipment', 'Bracelet', 6, ['Golden Bangle']),
  ...rankedItems('Hand Equipment', 'Bracelet', 7, ['Quality Wristwatch']),
  ...rankedItems('Hand Equipment', 'Bracelet', 8, ['Diamond Bangle']),
  ...rankedItems('Hand Equipment', 'Bracelet', 9, ['Runic Armlet']),
  ...rankedItems('Hand Equipment', 'Bracelet', 10, ['Crystal Bangle', 'Barbariccia Armlet']),
  ...rankedItems('Hand Equipment', 'Bracelet', 11, ['Imperial Guard']),
  ...rankedItems('Hand Equipment', 'Bracelet', 12, ['Wyrm Armlet']),
  ...rankedItems('Hand Equipment', 'Bracelet', 13, ['Paling Armlet']),
  ...rankedItems('Hand Equipment', 'Bracelet', 14, ['Mystletainn Armlet']),
  ...rankedItems('Hand Equipment', 'Bracelet', 15, ['Full-Moon Armlet', 'Seydlitz']),

  ...rankedItems('Hand Equipment', 'Arm Guard', 1, ['Leather Bracers']),
  ...rankedItems('Hand Equipment', 'Arm Guard', 2, ['Ironplated Bracers']),
  ...rankedItems('Hand Equipment', 'Arm Guard', 4, ['Gauntlets', 'Battle Gloves']),
  ...rankedItems('Hand Equipment', 'Arm Guard', 6, ['Golden Armlets']),
  ...rankedItems('Hand Equipment', 'Arm Guard', 9, ['Hand of Glory']),
  ...rankedItems('Hand Equipment', 'Arm Guard', 11, ["Thief's Gloves"]),
  ...rankedItems('Hand Equipment', 'Arm Guard', 12, ['Wyrm Gauntlets']),
  ...rankedItems('Hand Equipment', 'Arm Guard', 13, ['Gigas Gauntlets']),
  ...rankedItems('Hand Equipment', 'Arm Guard', 15, ["Borghertz's Hands", 'Crescent Gauntlets']),

  ...rankedItems('Head Equipment', 'Hat', 1, ['Leather Hat']),
  ...rankedItems('Head Equipment', 'Hat', 2, ['Feathered Hat']),
  ...rankedItems('Head Equipment', 'Hat', 4, ['Tricorn Cap', 'Green Beret']),
  ...rankedItems('Head Equipment', 'Hat', 6, ['Beret']),
  ...rankedItems('Head Equipment', 'Hat', 8, ['Red Cap']),
  ...rankedItems('Head Equipment', 'Hat', 9, ['Twist Headband']),
  ...rankedItems('Head Equipment', 'Hat', 10, ['Rubicant Cowl']),
  ...rankedItems('Head Equipment', 'Hat', 12, ['Tiger Mask']),
  ...rankedItems('Head Equipment', 'Hat', 13, ["Thief's Hat"]),
  ...rankedItems('Head Equipment', 'Hat', 14, ['Black Cowl']),
  ...rankedItems('Head Equipment', 'Hat', 15, ['Dueling Mask', 'Floral Crown']),

  ...rankedItems('Head Equipment', 'Hairpin', 3, ['Kanzashi']),
  ...rankedItems('Head Equipment', 'Hairpin', 4, ['Extension']),
  ...rankedItems('Head Equipment', 'Hairpin', 5, ['Tiara']),
  ...rankedItems('Head Equipment', 'Hairpin', 7, ['Golden Hairpin']),
  ...rankedItems('Head Equipment', 'Hairpin', 10, ['Lamia Tiara']),
  ...rankedItems('Head Equipment', 'Hairpin', 11, ['Cat-Earred Hood']),
  ...rankedItems('Head Equipment', 'Hairpin', 13, ['Slave Crown']),
  ...rankedItems('Head Equipment', 'Hairpin', 14, ['Circlet']),
  ...rankedItems('Head Equipment', 'Hairpin', 15, ['Royal Crown']),

  ...rankedItems('Head Equipment', 'Helmet', 1, ['Bronze Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 2, ['Iron Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 3, ['Knight Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 4, ['Mithril Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 5, ['Great Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 6, ['Golden Helm', 'Burgonet']),
  ...rankedItems('Head Equipment', 'Helmet', 7, ['Sallet']),
  ...rankedItems('Head Equipment', 'Helmet', 8, ['Diamond Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 9, ['Close-Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 10, ['Crystal Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 11, ['Platinum Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 12, ['Wyrmhelm', 'Heike Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 13, ['Gigas Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 14, ['Kaiser Helm']),
  ...rankedItems('Head Equipment', 'Helmet', 15, ['Grand Helm', 'Genji Helm']),

  ...rankedItems('Body Equipment', 'Clothes', 1, ['Leather Clothes']),
  ...rankedItems('Body Equipment', 'Clothes', 3, ['Poncho']),
  ...rankedItems('Body Equipment', 'Clothes', 4, ['Silken Shirt', "Poet's Clothes"]),
  ...rankedItems('Body Equipment', 'Clothes', 5, ['Kenpo Gi']),
  ...rankedItems('Body Equipment', 'Clothes', 7, ['Black-Belt Dougi']),
  ...rankedItems('Body Equipment', 'Clothes', 8, ['Power Vest']),
  ...rankedItems('Body Equipment', 'Clothes', 10, ['Shinobi Garb']),
  ...rankedItems('Body Equipment', 'Clothes', 11, ['Black Garb']),
  ...rankedItems('Body Equipment', 'Clothes', 13, ['Red Jacket']),
  ...rankedItems('Body Equipment', 'Clothes', 15, ['Snow-Like Clothes', 'Brave Suit']),

  ...rankedItems('Body Equipment', 'Robe', 1, ['Robes']),
  ...rankedItems('Body Equipment', 'Robe', 2, ['Cotton Robes']),
  ...rankedItems('Body Equipment', 'Robe', 4, ['Silken Robes', "Celebrant's Habit"]),
  ...rankedItems('Body Equipment', 'Robe', 5, ["Magister's Habit"]),
  ...rankedItems('Body Equipment', 'Robe', 6, ["Pilgrim's Vestments"]),
  ...rankedItems('Body Equipment', 'Robe', 9, ['Gaia Gear']),
  ...rankedItems('Body Equipment', 'Robe', 12, ['Robes of Light']),
  ...rankedItems('Body Equipment', 'Robe', 14, ['Lordly Robes']),
  ...rankedItems('Body Equipment', 'Robe', 15, ['Rainbow Robes']),

  ...rankedItems('Body Equipment', 'Light Armor', 1, ['Leather Armor']),
  ...rankedItems('Body Equipment', 'Light Armor', 2, ['Chainmail']),
  ...rankedItems('Body Equipment', 'Light Armor', 4, ['Mithril Vest', 'Linen Cuirass']),
  ...rankedItems('Body Equipment', 'Light Armor', 6, ['Golden Vest']),
  ...rankedItems('Body Equipment', 'Light Armor', 7, ['Survival Vest']),
  ...rankedItems('Body Equipment', 'Light Armor', 9, ["Assassin's Vest"]),
  ...rankedItems('Body Equipment', 'Light Armor', 10, ['Crystal Vest', 'Cagnazzo Shell']),
  ...rankedItems('Body Equipment', 'Light Armor', 12, ['Mirage Vest']),
  ...rankedItems('Body Equipment', 'Light Armor', 14, ['Vest of Vishnu']),
  ...rankedItems('Body Equipment', 'Light Armor', 15, ['Brigandine']),

  ...rankedItems('Body Equipment', 'Heavy Armor', 1, ['Bronze Armor']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 2, ['Iron Armor']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 3, ['Knight Armor']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 4, ['Mithril Armor']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 5, ['Heavy Armor']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 6, ['Golden Armor', 'Paling Armor']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 8, ['Diamond Armor']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 9, ['Fellsteel Mail']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 10, ['Crystal Armor']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 11, ['Mirror Mail']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 12, ['Wyrm Mail', 'Heike Armor']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 13, ['Gigas Armor']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 15, ['Maximillian', 'Genji Armor']),

  ...rankedItems('Weapon', 'Polearm', 13, ['Spear of Sha Wujing']),
  ...rankedItems('Hand Equipment', 'Shield', 13, ['Quadav Shield']),
  ...rankedItems('Head Equipment', 'Helmet', 13, ['Plate']),
  ...rankedItems('Body Equipment', 'Heavy Armor', 13, ['Reed Armor']),
  {
    category: 'Head Equipment',
    subcategory: 'Ribbon',
    name: 'Super-Ribbon',
    rank: null,
    japaneseName: 'スーパーリボン',
    effects: ['Accessory Break -30%', 'Artifact History +16'],
    acquisition: [
      {
        method: 'Trade',
        detail: 'Ribbon ×1, Bahamut Wings ×5, Transformation Powder ×99 & 15,960 Gil'
      }
    ]
  }
]

const exclusiveRankItems = [
  ...guideRanks('Exclusive', 'Cecil', 'D', ['Sword of Darkness', 'Shield of Darkness', 'Helm of Darkness', 'Armor of Darkness']),
  ...guideRanks('Exclusive', 'Cloud', 'D', ['Buster Sword']),
  ...guideRanks('Exclusive', 'Squall', 'D', ['Revolver']),
  ...guideRanks('Exclusive', 'Tidus', 'D', ['Official Ball']),

  ...guideRanks('Exclusive', 'Warrior of Light', 'C', ['Flame Sword']),
  ...guideRanks('Exclusive', 'Firion', 'C', ['Lance of Abel']),
  ...guideRanks('Exclusive', 'Onion Knight', 'C', ['Tyrfing']),
  ...guideRanks('Exclusive', 'Cecil', 'C', ['Mythgraven Sword']),
  ...guideRanks('Exclusive', 'Bartz', 'C', ['Chocobo Blade']),
  ...guideRanks('Exclusive', 'Terra', 'C', ['Chain Flail']),
  ...guideRanks('Exclusive', 'Cloud', 'C', ['Force Eater']),
  ...guideRanks('Exclusive', 'Squall', 'C', ['Lance of Slit']),
  ...guideRanks('Exclusive', 'Zidane', 'C', ['Sargatanas']),
  ...guideRanks('Exclusive', 'Tidus', 'C', ['The Striker']),
  ...guideRanks('Exclusive', 'Shantotto', 'C', ['Jupiter Staff']),
  ...guideRanks('Exclusive', 'Garland', 'C', ['Ogreslayer']),
  ...guideRanks('Exclusive', 'The Emperor', 'C', ['Diamond Mace']),
  ...guideRanks('Exclusive', 'Cloud of Darkness', 'C', ['Staff of Thorns']),
  ...guideRanks('Exclusive', 'Golbez', 'C', ['Lilith Rod']),
  ...guideRanks('Exclusive', 'Exdeath', 'C', ["Guido's Whisker"]),
  ...guideRanks('Exclusive', 'Kefka', 'C', ['Lamia Flute']),
  ...guideRanks('Exclusive', 'Sephiroth', 'C', ['Masamune Blade']),
  ...guideRanks('Exclusive', 'Ultimecia', 'C', ['Valkyrie']),
  ...guideRanks('Exclusive', 'Kuja', 'C', ['Punisher']),
  ...guideRanks('Exclusive', 'Jecht', 'C', ['Kaiser Knuckles']),
  ...guideRanks('Exclusive', 'Gabranth', 'C', ['Evilslayer']),

  ...guideRanks('Exclusive', 'Warrior of Light', 'B', ['Braveheart']),
  ...guideRanks('Exclusive', 'Firion', 'B', ['Longinus']),
  ...guideRanks('Exclusive', 'Onion Knight', 'B', ['Royal Sword']),
  ...guideRanks('Exclusive', 'Cecil', 'B', ['Sword of Light']),
  ...guideRanks('Exclusive', 'Bartz', 'B', ['The Dawn']),
  ...guideRanks('Exclusive', 'Terra', 'B', ['Morningstar']),
  ...guideRanks('Exclusive', 'Cloud', 'B', ['Butterfly Edge']),
  ...guideRanks('Exclusive', 'Squall', 'B', ['Crime & Penalty']),
  ...guideRanks('Exclusive', 'Zidane', 'B', ['The Tower']),
  ...guideRanks('Exclusive', 'Tidus', 'B', ['Grandslam']),
  ...guideRanks('Exclusive', 'Shantotto', 'B', ['Laevateinn']),
  ...guideRanks('Exclusive', 'Garland', 'B', ['Viking Axe']),
  ...guideRanks('Exclusive', 'The Emperor', 'B', ['Fellsteel Rod']),
  ...guideRanks('Exclusive', 'Cloud of Darkness', 'B', ['Phantasmal Staff']),
  ...guideRanks('Exclusive', 'Golbez', 'B', ['Rod of Ashura']),
  ...guideRanks('Exclusive', 'Exdeath', 'B', ['Moore Sprig']),
  ...guideRanks('Exclusive', 'Kefka', 'B', ['Flute of the Fallen']),
  ...guideRanks('Exclusive', 'Sephiroth', 'B', ['Masamune']),
  ...guideRanks('Exclusive', 'Ultimecia', 'B', ['Cardinal']),
  ...guideRanks('Exclusive', 'Kuja', 'B', ['Whale Whisker']),
  ...guideRanks('Exclusive', 'Jecht', 'B', ['Sin-Talon']),
  ...guideRanks('Exclusive', 'Gabranth', 'B', ['Deathbringer']),

  ...guideRanks('Exclusive', 'Warrior of Light', 'A', ['Barbarian Sword']),
  ...guideRanks('Exclusive', 'Firion', 'A', ['Wild Rose']),
  ...guideRanks('Exclusive', 'Onion Knight', 'A', ['Onion Sword']),
  ...guideRanks('Exclusive', 'Cecil', 'A', ['Lightbringer', 'Obsidian Blade']),
  ...guideRanks('Exclusive', 'Bartz', 'A', ['Sword of Dorgann']),
  ...guideRanks('Exclusive', 'Terra', 'A', ["Maduin's Horn"]),
  ...guideRanks('Exclusive', 'Cloud', 'A', ['Fenrir']),
  ...guideRanks('Exclusive', 'Squall', 'A', ['Lionheart']),
  ...guideRanks('Exclusive', 'Zidane', 'A', ['Ozma Shard']),
  ...guideRanks('Exclusive', 'Tidus', 'A', ['World Champion']),
  ...guideRanks('Exclusive', 'Shantotto', 'A', ['Claustrum']),
  ...guideRanks('Exclusive', 'Garland', 'A', ['Gigant Axe']),
  ...guideRanks('Exclusive', 'The Emperor', 'A', ['Malice of Mateus']),
  ...guideRanks('Exclusive', 'Cloud of Darkness', 'A', ['Darkness Eternal']),
  ...guideRanks('Exclusive', 'Golbez', 'A', ['Crystal of Zeromus']),
  ...guideRanks('Exclusive', 'Exdeath', 'A', ['Staff of Enou']),
  ...guideRanks('Exclusive', 'Kefka', 'A', ['Mad Dancing']),
  ...guideRanks('Exclusive', 'Sephiroth', 'A', ['One-Winged Angel']),
  ...guideRanks('Exclusive', 'Ultimecia', 'A', ['Shooting Star']),
  ...guideRanks('Exclusive', 'Kuja', 'A', ["Terra's Legacy"]),
  ...guideRanks('Exclusive', 'Jecht', 'A', ['Sin-Fang']),
  ...guideRanks('Exclusive', 'Gabranth', 'A', ['Chaos Blade'])
]

const battleRiseAccessories = [
  battleRiseItem({
    name: 'Moogle Charm',
    japaneseName: 'モーグリのおまもり',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['Item Drop +2%', 'Break Probability 30%'],
    trigger: 'HP attack',
    level: 99,
    ris: 1,
    rrl: 69,
    acquisition: [{ method: 'Mognet', detail: 'Mognet reward' }]
  }),
  battleRiseItem({
    name: 'Dangerous Luck',
    japaneseName: '危うげな幸運',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['Last Leave', 'Guaranteed Break on Activation', 'Item Drop +3%'],
    trigger: 'EX attack',
    level: 99,
    ris: 0.1,
    rrl: 69,
    acquisition: [
      {
        method: 'Trade',
        detail: 'Gemini Recipe ×1, Dwarven Bread ×1, Marionette Parts ×1 & 1,500 Gil'
      }
    ]
  }),
  battleRiseItem({
    name: 'Lucky Ring',
    japaneseName: 'ラッキーリング',
    subcategory: 'Normal',
    rank: 'A',
    effects: ['LUK +4', 'Summon Charge Per Battle +1'],
    trigger: 'Map Damage',
    level: 50,
    ris: 1,
    rrl: 37,
    acquisition: [
      {
        method: 'Trade',
        detail: 'Yellow Droplet ×1, Fortune Sand ×2 & 800 Gil'
      }
    ]
  }),
  battleRiseItem({
    name: 'Fortune Ring',
    japaneseName: 'フォーチュンリング',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['LUK +8', 'Summon Charge Per Battle +2'],
    trigger: 'Map Damage',
    level: 85,
    ris: 1,
    rrl: 65,
    acquisition: [
      {
        method: 'Trade',
        detail: 'Yellow Gem ×2, Fortune Shard ×2, Fortune Crystal ×1 & 1,300 Gil'
      }
    ]
  }),
  battleRiseItem({
    name: "Brigadier's Mustache",
    japaneseName: 'だんちょうのひげ',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['LUK +10', 'Increase EX Core manifestation frequency'],
    trigger: 'Map Damage',
    level: 99,
    ris: 1,
    rrl: 69,
    acquisition: [
      {
        method: 'Trade',
        detail: 'Victory Pendant ×1, Fortune Ring ×1, Book of Formation ×5 & 1,500 Gil'
      }
    ]
  }),
  battleRiseItem({
    name: 'Sunrise',
    japaneseName: 'サンライズ',
    subcategory: 'Basic',
    rank: 'A',
    effects: ['Accessory Rise +1%'],
    trigger: 'Map Damage',
    level: 50,
    ris: 1,
    rrl: 37,
    acquisition: [
      {
        method: 'Trade',
        detail: 'Temptation Sand ×1, Fortune Sand ×1, Locomotion Sand ×1 & 1,500 Gil'
      }
    ]
  }),
  battleRiseItem({
    name: 'Moonrise',
    japaneseName: 'ムーンライズ',
    subcategory: 'Basic',
    rank: 'S',
    effects: ['Accessory Rise +2%'],
    trigger: 'Map Damage',
    level: 85,
    ris: 1,
    rrl: 65,
    acquisition: [
      {
        method: 'Trade',
        detail: 'Temptation Shard ×2, Locomotion Shard ×2, Fortune Crystal ×1 & 1,500 Gil'
      }
    ]
  }),
  battleRiseItem({
    name: 'Lv: Lv = 100',
    japaneseName: 'Lv:Lvが100',
    subcategory: 'Condition',
    rank: 'S',
    effects: ['Accessory Rise multiplier x1.2'],
    trigger: 'Break',
    level: 64,
    ris: 1,
    rrl: 48,
    acquisition: [
      {
        method: 'Mission',
        detail: 'Mission 065: At least one character is level 100'
      }
    ]
  }),
  battleRiseItem({
    name: 'EX: In EX Mode',
    japaneseName: 'EX:EXモード中',
    subcategory: 'Condition',
    rank: 'A',
    effects: ['Accessory Rise multiplier x1.3'],
    trigger: 'Map Damage',
    level: 36,
    ris: 1,
    rrl: 29,
    acquisition: [
      {
        method: 'Mission',
        detail: 'Mission 039: HP regeneration in EX Mode is over 10,000'
      }
    ]
  }),
  battleRiseItem({
    name: 'Sm: Summon Unused',
    japaneseName: '召:召喚を未使用',
    subcategory: 'Condition',
    rank: 'S',
    effects: ['Accessory Rise multiplier x1.5'],
    trigger: 'EX attack',
    level: 64,
    ris: 1,
    rrl: 48,
    acquisition: [
      {
        method: 'Mission',
        detail: 'Mission 021: In-combat time is over 10 hours'
      }
    ]
  }),
  battleRiseItem({
    name: 'ACT: BRV Atk Unused',
    japaneseName: 'ACT:ブレイブ攻撃前',
    subcategory: 'Condition',
    rank: 'S',
    effects: ['Accessory Rise multiplier x1.5'],
    trigger: 'HP attack',
    level: 64,
    ris: 1,
    rrl: 48,
    acquisition: [
      {
        method: 'Mission',
        detail: 'Mission 050: Shade Impulse Chapter 4 cleared by Cloud'
      }
    ]
  }),
  battleRiseItem({
    name: 'Op: BRV < 0',
    japaneseName: 'CHA:BREAK状態',
    subcategory: 'Condition',
    rank: 'S',
    effects: ['Accessory Rise multiplier x1.5'],
    trigger: 'Break',
    level: 64,
    ris: 1,
    rrl: 48,
    acquisition: [
      {
        method: 'Mission',
        detail: 'Mission 028: Player has executed over 300 HP attacks'
      }
    ]
  })
]

const specialGuideItems = [
  {
    category: 'Exclusive',
    subcategory: 'Bartz',
    name: 'Sword of Dorgann',
    japaneseName: 'ドルガンの剣',
    rank: null,
    effects: ['LUK +3', 'BRV +40% at battle commencement', 'Artifact History +16'],
    acquisition: [
      {
        method: 'Trade',
        detail: 'Sword of Dawn ×1, Radiant Wind ×5, Fortune Jewel ×5 & 31,920 Gil'
      }
    ]
  },
  {
    category: 'Weapon',
    subcategory: 'Special',
    name: 'Sexy Cologne',
    japaneseName: 'セクシーコロン',
    rank: null,
    effects: ['The Scent of Hunny (1/4)'],
    characters: ['Terra', 'Cloud', 'Shantotto', 'Cloud of Darkness', 'Kefka', 'Ultimecia'],
    acquisition: [
      {
        method: 'PP Catalog',
        detail: 'Synthesizable after unlocking Women\'s Equipment.'
      }
    ]
  },
  {
    category: 'Hand Equipment',
    subcategory: 'Special',
    name: 'Club Card',
    japaneseName: '会員カード',
    rank: null,
    effects: ['The Scent of Hunny (1/4)'],
    characters: ['Terra', 'Cloud', 'Shantotto', 'Cloud of Darkness', 'Kefka', 'Ultimecia'],
    acquisition: [
      {
        method: 'PP Catalog',
        detail: 'Synthesizable after unlocking Women\'s Equipment.'
      }
    ]
  },
  {
    category: 'Head Equipment',
    subcategory: 'Special',
    name: 'Blonde Wig',
    japaneseName: 'ブロンドのかつら',
    rank: null,
    effects: ['The Scent of Hunny (1/4)'],
    characters: ['Terra', 'Cloud', 'Shantotto', 'Cloud of Darkness', 'Kefka', 'Ultimecia'],
    acquisition: [
      {
        method: 'PP Catalog',
        detail: 'Synthesizable after unlocking Women\'s Equipment.'
      }
    ]
  },
  {
    category: 'Body Equipment',
    subcategory: 'Special',
    name: 'Silken Dress',
    japaneseName: 'シルクのドレス',
    rank: null,
    effects: ['The Scent of Hunny (1/4)'],
    characters: ['Terra', 'Cloud', 'Shantotto', 'Cloud of Darkness', 'Kefka', 'Ultimecia'],
    acquisition: [
      {
        method: 'PP Catalog',
        detail: 'Synthesizable after unlocking Women\'s Equipment.'
      }
    ]
  },
  {
    category: 'Weapon',
    subcategory: 'Sword',
    name: 'Nameless Sword (Excalipur)',
    japaneseName: '無名の剣 (エクスカリパー)',
    rank: null,
    effects: ['Item Drop +1%'],
    characters: ['Warrior of Light', 'Firion', 'Onion Knight', 'Cecil', 'Bartz', 'Cloud', 'Squall', 'Tidus', 'The Emperor', 'Gabranth'],
    acquisition: [
      {
        method: 'Online Combat',
        detail: 'Artifact drop based on opponent equipment.'
      }
    ]
  },
  {
    category: 'Body Equipment',
    subcategory: 'Robe',
    name: 'Nameless Robe (Rainbow Robe)',
    japaneseName: '無名のローブ (レインボーローブ)',
    rank: null,
    effects: ['Item Drop +1%'],
    characters: ['Bartz', 'Terra', 'Shantotto', 'The Emperor', 'Cloud of Darkness', 'Kefka', 'Ultimecia', 'Kuja'],
    acquisition: [
      {
        method: 'Online Combat',
        detail: 'Artifact drop based on opponent equipment.'
      }
    ]
  },
  {
    category: 'Weapon',
    subcategory: 'Sword',
    name: 'Cursed Sword',
    rank: null,
    characters: ['Warrior of Light', 'Firion', 'Onion Knight', 'Cecil', 'Bartz', 'Terra', 'Cloud', 'Squall', 'Zidane', 'Tidus', 'Shantotto', 'Garland', 'The Emperor', 'Cloud of Darkness', 'Golbez', 'Exdeath', 'Kefka', 'Sephiroth', 'Ultimecia', 'Kuja', 'Jecht', 'Gabranth'],
    acquisition: [
      {
        method: 'Friend Card',
        detail: 'Ghost: Cunning Stiltzkin'
      }
    ]
  },
  {
    category: 'Weapon',
    subcategory: 'Sword',
    name: 'Sword of Hades',
    rank: null,
    characters: ['Warrior of Light', 'Firion', 'Onion Knight', 'Cecil', 'Bartz', 'Terra', 'Cloud', 'Squall', 'Zidane', 'Tidus', 'Shantotto', 'Garland', 'The Emperor', 'Cloud of Darkness', 'Golbez', 'Exdeath', 'Kefka', 'Sephiroth', 'Ultimecia', 'Kuja', 'Jecht', 'Gabranth'],
    acquisition: [
      {
        method: 'Friend Card',
        detail: 'Ghost: Behemoth'
      }
    ]
  },
  {
    category: 'Weapon',
    subcategory: 'Tool',
    name: 'Machine Gun',
    rank: null,
    acquisition: [
      {
        method: 'Friend Card',
        detail: 'Ghost: Laguna'
      }
    ]
  },
  {
    category: 'Weapon',
    subcategory: 'Sword',
    name: 'Ultima Weapon',
    rank: null,
    characters: ['Warrior of Light', 'Firion', 'Onion Knight', 'Cecil', 'Bartz', 'Terra', 'Cloud', 'Squall', 'Zidane', 'Tidus', 'Shantotto', 'Garland', 'The Emperor', 'Cloud of Darkness', 'Golbez', 'Exdeath', 'Kefka', 'Sephiroth', 'Ultimecia', 'Kuja', 'Jecht', 'Gabranth'],
    acquisition: [
      {
        method: 'Trade',
        detail: 'Pisces Recipe, Noah\'s Lute, Twinharp Whispers'
      }
    ]
  }
]

export const guideItems = [
  ...rankedEquipmentItems,
  ...exclusiveRankItems,
  ...battleRiseAccessories,
  ...specialGuideItems
]

const guideNameAliases = new Map([
  ['tachi', 'katana'],
  ['strike katana', 'uchigatana'],
  ['chrysanthemum letter', 'kiku ichimonji'],
  ['kusanagi', 'ama no murakumo'],
  ['long sword', 'longsword'],
  ['great sword', 'greatsword'],
  ['gold sword', 'golden sword'],
  ['rune blade', 'runic blade'],
  ['enhance sword', 'enhancer'],
  ['dragon slayer', 'wyrmslayer'],
  ['excalipoor', 'excalipur'],
  ['kukuri', 'khukuri'],
  ['lesser glove', 'leather gloves'],
  ['metal knuckle', 'metal knuckles'],
  ['dark claw', 'dark claws'],
  ['sonic knuckle', 'sonic knuckles'],
  ['cat s claw', 'cat s claws'],
  ['tiger fang', 'tiger fangs'],
  ['god hand', 'godhand'],
  ['mithril bracelet', 'mithril bangle'],
  ['mystile', 'mystletainn armlet'],
  ['genji helmet', 'genji helm'],
  ['robe', 'robes'],
  ['super ribbon', 'super ribbon'],
  ['rainbow robe', 'rainbow robes'],
  ['earth breaker', 'earthbreaker'],
  ['caignozzio shell', 'cagnazzo shell']
])

function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\+/g, ' plus ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function createLookupKey(category, name) {
  return `${category.toLowerCase()}::${normalizeName(name)}`
}

const guideItemByKey = new Map(
  guideItems.map(item => [createLookupKey(item.category, item.name), item])
)

export function getGuideItem(category, name) {
  const normalizedName = normalizeName(name)
  const canonicalName = guideNameAliases.get(normalizedName) ?? normalizedName
  return guideItemByKey.get(`${category.toLowerCase()}::${canonicalName}`) ?? null
}

export function getGuideLookupKey(category, name) {
  const normalizedName = normalizeName(name)
  const canonicalName = guideNameAliases.get(normalizedName) ?? normalizedName
  return `${category.toLowerCase()}::${canonicalName}`
}
