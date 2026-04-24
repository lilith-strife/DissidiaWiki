// Dissidia Final Fantasy Item Database
// Categories and items with acquisition methods

export const categories = [
  { id: 'weapon', name: 'Weapons', icon: '⚔️' },
  { id: 'hand', name: 'Hand Equipment', icon: '🛡️' },
  { id: 'head', name: 'Head Equipment', icon: '⛑️' },
  { id: 'body', name: 'Body Equipment', icon: '👕' },
  { id: 'accessory', name: 'Accessories', icon: '💍' },
  { id: 'summon', name: 'Summons', icon: '✨' }
]

// All playable characters in the game
export const characters = [
  'Warrior of Light', 'Firion', 'Onion Knight', 'Cecil Harvey', 'Bartz Klauser',
  'Terra Branford', 'Cloud Strife', 'Squall Leonheart', 'Zidane Tribal', 'Tidus',
  'Shantotto', 'Vaan', 'Lightning', "Y'shtola", 'Ramza',
  // Villains
  'Garland', 'The Emperor', 'Cloud of Darkness', 'Golbez', 'Ex Death',
  'Kefka', 'Sephiroth', 'Ultimecia', 'Kuja', 'Jecht', 'Gabranth'
]

// Item data
export const items = [
  // ========== WEAPONS - KATANA ==========
  {
    id: 'katana-tachi',
    name: 'Tachi',
    japaneseName: '太刀',
    category: 'Weapon',
    subcategory: 'Katana',
    stats: { ATK: 5 },
    level: 3,
    characters: ['Sephiroth', 'Garland'],
    acquisition: [
      { method: 'Shop', detail: '1,000 Gil' }
    ]
  },
  {
    id: 'katana-nodachi',
    name: 'Nodachi',
    japaneseName: '野太刀',
    category: 'Weapon',
    subcategory: 'Katana',
    stats: { ATK: 19 },
    level: 24,
    effects: ['EX Force absorption range +2m'],
    characters: ['Sephiroth', 'Garland'],
    acquisition: [
      { method: 'Trade', detail: 'Tachi ×1, Giant\'s Horn ×1 & 6,050 Gil' }
    ]
  },
  {
    id: 'katana-strike',
    name: 'Strike Katana',
    japaneseName: '打刀',
    category: 'Weapon',
    subcategory: 'Katana',
    stats: { ATK: 23 },
    level: 31,
    characters: ['Sephiroth', 'Garland'],
    acquisition: [
      { method: 'Shop', detail: '8,400 Gil' }
    ]
  },
  {
    id: 'katana-war',
    name: 'War Katana',
    japaneseName: '戦太刀',
    category: 'Weapon',
    subcategory: 'Katana',
    stats: { ATK: 32 },
    level: 45,
    effects: ['Unification (1/4)'],
    characters: ['Sephiroth', 'Garland'],
    acquisition: [
      { method: 'DP Stage Bonus', detail: '6 DP Stage Bonus in Shade Impulse - Chapter 2' }
    ]
  },
  {
    id: 'katana-chrysanthemum',
    name: 'Chrysanthemum Letter',
    japaneseName: '菊一文字',
    category: 'Weapon',
    subcategory: 'Katana',
    stats: { ATK: 38 },
    level: 53,
    characters: ['Sephiroth', 'Garland'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Strike Katana ×1, Giant\'s Crystal ×5 & 31,920 Gil' }
    ]
  },
  {
    id: 'katana-kusanagi',
    name: 'KUSANAGI',
    japaneseName: '天の叢雲',
    category: 'Weapon',
    subcategory: 'Katana',
    stats: { ATK: 68 },
    level: 100,
    effects: ['EX Force absorption range +8m'],
    characters: ['Sephiroth', 'Garland'],
    acquisition: [
      { method: 'Trade', detail: 'Trade with Flight Feather Edge ×1, Behemoth Horn ×5 & 31,920 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Gilgamesh (Item Drop)' }
    ]
  },

  // ========== WEAPONS - SWORD ==========
  {
    id: 'sword-iron',
    name: 'Iron Sword',
    japaneseName: '鉄の剣',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 5 },
    level: 1,
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Shop', detail: '1,830 Gil' }
    ]
  },
  {
    id: 'sword-mithril',
    name: 'Mithril Sword',
    japaneseName: 'ミスリルソード',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 10 },
    level: 8,
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Iron Sword ×1, Mithril ×1 & 6,050 Gil' }
    ]
  },
  {
    id: 'sword-mithril-plus',
    name: 'Mithril Sword+',
    japaneseName: 'ミスリルソード+',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 18 },
    level: 8,
    effects: ['Mithril Charm (1/3)'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Mithril Sword ×1, Geranium ×1, Transform Powder ×2 & 6,050 Gil' }
    ]
  },
  {
    id: 'sword-saber',
    name: 'Saber',
    japaneseName: 'サーベル',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 22 },
    level: 29,
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Shop', detail: '8,400 Gil' }
    ]
  },
  {
    id: 'sword-rapier',
    name: 'Rapier',
    japaneseName: 'レイピア',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 27 },
    level: 36,
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Shop', detail: '10,750 Gil' }
    ]
  },
  {
    id: 'sword-gold',
    name: 'Gold Sword',
    japaneseName: 'ゴールドソード',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 27 },
    level: 36,
    effects: ['Gold Charm (1/3)'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Saber ×1, Gold ×1 & 10,750 Gil' }
    ]
  },
  {
    id: 'sword-ancient',
    name: 'Ancient Sword',
    japaneseName: '古代の剣',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 27 },
    level: 36,
    effects: ['BRV +20% at start of Battle'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Sun Blade ×1, Black Stone ×1 & 10,750 Gil' }
    ]
  },
  {
    id: 'sword-estoc',
    name: 'Estoc',
    japaneseName: 'エストック',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 31 },
    level: 43,
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Shop', detail: '13,100 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Yuffie (Item Drop)' }
    ]
  },
  {
    id: 'sword-coral',
    name: 'Coral Sword',
    japaneseName: '珊瑚の剣',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 36 },
    level: 50,
    effects: ['BRV +20% at start of Battle'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Rapier ×1, Soul Stone ×1, Transform Powder ×1 & 15,460 Gil' }
    ]
  },
  {
    id: 'sword-diamond',
    name: 'Diamond Sword',
    japaneseName: 'ダイヤソード',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 36 },
    level: 50,
    effects: ['Diamond Mystery (1/3)'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Rapier ×1, Diamond ×1 & 15,460 Gil' }
    ]
  },
  {
    id: 'sword-rune',
    name: 'Rune Blade',
    japaneseName: 'ルーンブレイド',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 40 },
    level: 57,
    effects: ['BRV +30% at start of Battle'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Estoc ×1, Floating Stone ×1, Demon Spirit Stone ×2 & 17,810 Gil' }
    ]
  },
  {
    id: 'sword-crystal',
    name: 'Crystal Sword',
    japaneseName: 'クリスタルソード',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 45 },
    level: 64,
    effects: ['Crystal Blessing (1/3)'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Diamond Sword ×1, Crystal ×1, Drip Stone ×3 & 20,160 Gil' }
    ]
  },
  {
    id: 'sword-enhance',
    name: 'Enhance Sword',
    japaneseName: 'エンハンスソード',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 49 },
    level: 71,
    effects: ['BRV +30% at start of Battle'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Rune Blade ×1, Conviction Stone ×3, Green Gem ×1 & 22,510 Gil' }
    ]
  },
  {
    id: 'sword-falchion',
    name: 'Falchion',
    japaneseName: 'ファルシオン',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 54 },
    level: 78,
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Shop', detail: '24,860 Gil' }
    ]
  },
  {
    id: 'sword-dragon-slayer',
    name: 'Dragon Slayer',
    japaneseName: 'ドラゴンスレイヤー',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 59 },
    level: 85,
    effects: ['BRV +40% at start of Battle'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Ice Brand ×1, Goddess Stone ×5, Red Gem ×1 & 29,570 Gil' }
    ]
  },
  {
    id: 'sword-excalipoor',
    name: 'Excalipoor',
    japaneseName: 'エクスカリパー',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 68 },
    level: 99,
    effects: ['Physical Damage -100%'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Cancer Recipe ×1, Dragon Crest ×1, Choco Graph ×1 & 31,920 Gil' }
    ]
  },
  {
    id: 'sword-excalibur',
    name: 'Excalibur',
    japaneseName: 'エクスカリバー',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 67 },
    level: 99,
    effects: ['BRV +50% at start of Battle'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Save the Queen ×1, Supreme Stone ×1 & 31,920 Gil' }
    ]
  },
  {
    id: 'sword-excalibur-ii',
    name: 'Excalibur II',
    japaneseName: 'エクスカリバー',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 67 },
    level: 99,
    effects: ['EXP +100%'],
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Friend Card', detail: 'Special Friend Card: Steiner (Item Drop)' }
    ]
  },
  {
    id: 'sword-wyrmhero',
    name: 'Wyrmhero Blade',
    japaneseName: 'トロの剣',
    category: 'Weapon',
    subcategory: 'Sword',
    stats: { ATK: 67 },
    level: 99,
    characters: ['Warrior of Light', 'Firion', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    acquisition: [
      { method: 'Trade', detail: 'Aquarius Recipe ×1, Crystal Eye ×1, Albehd Dictionary ×1 & 31,920 Gil' }
    ]
  },

  // ========== WEAPONS - HUGE SWORD ==========
  {
    id: 'huge-long',
    name: 'Long Sword',
    japaneseName: 'ロングソード',
    category: 'Weapon',
    subcategory: 'Huge Sword',
    stats: { ATK: 5 },
    level: 1,
    characters: ['Cloud', 'Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '1,830 Gil' }
    ]
  },
  {
    id: 'huge-hard-breaker',
    name: 'Hard Breaker',
    japaneseName: 'ハードブレイカー',
    category: 'Weapon',
    subcategory: 'Huge Sword',
    stats: { ATK: 5 },
    level: 1,
    effects: ['Physical Damage +10%'],
    characters: ['Cloud', 'Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Long Sword ×1, Hurricane Fragment ×1, Transform Powder ×2 & 1,830 Gil' }
    ]
  },
  {
    id: 'huge-great',
    name: 'Great Sword',
    japaneseName: 'グレートソード',
    category: 'Weapon',
    subcategory: 'Huge Sword',
    stats: { ATK: 10 },
    level: 8,
    characters: ['Cloud', 'Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '2,830 Gil' }
    ]
  },
  {
    id: 'huge-zweihander',
    name: 'Zweihander',
    japaneseName: 'ツバイハンダー',
    category: 'Weapon',
    subcategory: 'Huge Sword',
    stats: { ATK: 14 },
    level: 15,
    effects: ['Physical Damage +10%'],
    characters: ['Cloud', 'Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Long Sword ×1, Hurricane Fragment ×1, Transform Powder ×4 & 4,520 Gil' },
      { method: 'DP Stage Bonus', detail: '5 DP Stage Bonus in Destiny Odyssey VII' }
    ]
  },
  {
    id: 'huge-flamberge',
    name: 'Flamberge',
    japaneseName: 'フランベルジュ',
    category: 'Weapon',
    subcategory: 'Huge Sword',
    stats: { ATK: 19 },
    level: 22,
    effects: ['Physical Damage +10%'],
    characters: ['Cloud', 'Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Great Sword ×1, Promised Fragment ×1, Transform Powder ×8 & 6,870 Gil' },
      { method: 'DP Stage Bonus', detail: '6 DP Stage Bonus in Destiny Odyssey VII' }
    ]
  },
  {
    id: 'huge-claymore',
    name: 'Claymore',
    japaneseName: 'クレイモア',
    category: 'Weapon',
    subcategory: 'Huge Sword',
    stats: { ATK: 23 },
    level: 29,
    characters: ['Cloud', 'Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '9,230 Gil' }
    ]
  },
  {
    id: 'huge-inferno',
    name: 'Inferno Sword',
    japaneseName: 'インフェルノソード',
    category: 'Weapon',
    subcategory: 'Huge Sword',
    stats: { ATK: 28 },
    level: 36,
    effects: ['Physical Damage +10%'],
    characters: ['Cloud', 'Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Hard Breaker ×1, Anonymous Skull ×1 & 11,580 Gil' }
    ]
  },
  {
    id: 'huge-organics',
    name: 'Organics',
    japaneseName: 'オーガニクス',
    category: 'Weapon',
    subcategory: 'Huge Sword',
    stats: { ATK: 38 },
    level: 50,
    effects: ['Physical Damage +10%'],
    characters: ['Cloud', 'Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Zweihander ×1, Devil\'s Skull ×1, Transform Powder ×1 & 16,280 Gil' }
    ]
  },
  {
    id: 'huge-apocalypse',
    name: 'Apocalypse',
    japaneseName: 'アポカリプス',
    category: 'Weapon',
    subcategory: 'Huge Sword',
    stats: { ATK: 51 },
    level: 71,
    effects: ['Physical Damage +15%'],
    characters: ['Cloud', 'Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Flamberge ×1, War God Skull ×3, Yellow Gem ×1 & 23,340 Gil' }
    ]
  },
  {
    id: 'huge-ragnarok',
    name: 'Ragnarok',
    japaneseName: 'ラグナロク',
    category: 'Weapon',
    subcategory: 'Huge Sword',
    stats: { ATK: 68 },
    level: 99,
    effects: ['Physical Damage +25%'],
    characters: ['Cloud', 'Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Apocalypse ×1, Hero Skull ×5 & 32,750 Gil' }
    ]
  },

  // ========== WEAPONS - ARM ==========
  {
    id: 'arm-lesser-glove',
    name: 'Lesser Glove',
    japaneseName: 'レザーグローブ',
    category: 'Weapon',
    subcategory: 'Arm',
    stats: { BRV: 23, ATK: 4 },
    level: 1,
    characters: ['Tidus', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '1,550 Gil' }
    ]
  },
  {
    id: 'arm-metal-knuckle',
    name: 'Metal Knuckle',
    japaneseName: 'メタルナックル',
    category: 'Weapon',
    subcategory: 'Arm',
    stats: { BRV: 31, ATK: 13 },
    level: 15,
    characters: ['Tidus', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '4,250 Gil' }
    ]
  },
  {
    id: 'arm-dark-claw',
    name: 'Dark Claw',
    japaneseName: 'ダーククロウ',
    category: 'Weapon',
    subcategory: 'Arm',
    stats: { BRV: 35, ATK: 18 },
    level: 22,
    effects: ['BRV Damage +20% in Chase Battle'],
    characters: ['Tidus', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Metal Knuckle ×1, Iron Shell ×1 & 6,600 Gil' }
    ]
  },
  {
    id: 'arm-sonic-knuckle',
    name: 'Sonic Knuckle',
    japaneseName: 'ソニックナックル',
    category: 'Weapon',
    subcategory: 'Arm',
    stats: { BRV: 44, ATK: 27 },
    level: 36,
    characters: ['Tidus', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '11,300 Gil' }
    ]
  },
  {
    id: 'arm-tiger-fang',
    name: 'Tiger Fang',
    japaneseName: 'タイガーファング',
    category: 'Weapon',
    subcategory: 'Arm',
    stats: { BRV: 56, ATK: 40 },
    level: 57,
    effects: ['BRV Damage +30% in Chase Battle'],
    characters: ['Tidus', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Sonic Knuckle ×1, Horse Remnant ×1, Worm Skin ×2 & 18,360 Gil' }
    ]
  },
  {
    id: 'arm-cats-claw',
    name: 'Cat\'s Claw',
    japaneseName: '猫の爪',
    category: 'Weapon',
    subcategory: 'Arm',
    stats: { BRV: 60, ATK: 45 },
    level: 64,
    effects: ['BRV Damage +30% in Chase Battle'],
    characters: ['Tidus', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Tiger Fang ×1, 巨大亀の甲羅 ×3, Transform Powder ×5 & 20,710 Gil' }
    ]
  },
  {
    id: 'arm-god-hand',
    name: 'God Hand',
    japaneseName: 'ゴッドハンド',
    category: 'Weapon',
    subcategory: 'Arm',
    stats: { BRV: 77, ATK: 63 },
    level: 92,
    effects: ['BRV Damage +40% in Chase Battle'],
    characters: ['Tidus', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Cat\'s Claw ×1, Old Turtle Shield ×5, Blue Gem ×1 & 30,120 Gil' }
    ]
  },
  {
    id: 'arm-premium-heart',
    name: 'Premium Heart',
    japaneseName: 'プレミアムハート',
    category: 'Weapon',
    subcategory: 'Arm',
    stats: { BRV: 81, ATK: 67 },
    level: 99,
    effects: ['BRV Damage +50% in Chase Battle'],
    characters: ['Tidus', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'God Hand ×1, Very Old Turtle Shield ×5 & 31,920 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Auron (Item Drop)' }
    ]
  },

  // ========== WEAPONS - DAGGER ==========
  {
    id: 'dagger-knife',
    name: 'Knife',
    japaneseName: 'ナイフ',
    category: 'Weapon',
    subcategory: 'Dagger',
    stats: { ATK: 3 },
    level: 1,
    characters: ['Terra', 'Onion Knight', 'Zidane', 'The Emperor', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Shop', detail: '450 Gil' }
    ]
  },
  {
    id: 'dagger-triton',
    name: 'Triton Dagger',
    japaneseName: 'トリトンダガー',
    category: 'Weapon',
    subcategory: 'Dagger',
    stats: { ATK: 3 },
    level: 1,
    effects: ['EX Gauge filled +15% at start of Battle'],
    characters: ['Terra', 'Onion Knight', 'Zidane', 'The Emperor', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Trade', detail: 'Knife ×1, Power Fragment ×1, Transform Powder ×2 & 450 Gil' }
    ]
  },
  {
    id: 'dagger-dagger',
    name: 'Dagger',
    japaneseName: 'ダガー',
    category: 'Weapon',
    subcategory: 'Dagger',
    stats: { ATK: 8 },
    level: 8,
    characters: ['Terra', 'Onion Knight', 'Zidane', 'The Emperor', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Shop', detail: '1,450 Gil' }
    ]
  },
  {
    id: 'dagger-kukuri',
    name: 'Kukuri',
    japaneseName: 'ククリ',
    category: 'Weapon',
    subcategory: 'Dagger',
    stats: { ATK: 12 },
    level: 15,
    characters: ['Terra', 'Onion Knight', 'Zidane', 'The Emperor', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Shop', detail: '3,150 Gil' }
    ]
  },
  {
    id: 'dagger-main-gauche',
    name: 'Main Gauche',
    japaneseName: 'マインゴーシュ',
    category: 'Weapon',
    subcategory: 'Dagger',
    stats: { ATK: 12 },
    level: 15,
    effects: ['EX Gauge filled +15% at start of Battle'],
    characters: ['Terra', 'Onion Knight', 'Zidane', 'The Emperor', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Trade', detail: 'Knife ×1, Power Fragment ×1, Transform Powder ×4 & 3,150 Gil' },
      { method: 'DP Stage Bonus', detail: '5 DP Stage Bonus in Destiny Odyssey IX' }
    ]
  },
  {
    id: 'dagger-mage-masher',
    name: 'Mage Masher',
    japaneseName: 'メイジマッシャー',
    category: 'Weapon',
    subcategory: 'Dagger',
    stats: { ATK: 17 },
    level: 22,
    effects: ['EX Gauge filled +15% at start of Battle'],
    characters: ['Terra', 'Onion Knight', 'Zidane', 'The Emperor', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Trade', detail: 'Dagger ×1, Power Fragment ×1, Transform Powder ×8 & 5,500 Gil' },
      { method: 'DP Stage Bonus', detail: '6 DP Stage Bonus in Destiny Odyssey IX' }
    ]
  },
  {
    id: 'dagger-zorlin-shape',
    name: 'Zorlin Shape',
    japaneseName: 'ゾーリンシェイプ',
    category: 'Weapon',
    subcategory: 'Dagger',
    stats: { ATK: 66 },
    level: 99,
    effects: ['EX Gauge filled +30% at start of Battle'],
    characters: ['Terra', 'Onion Knight', 'Zidane', 'The Emperor', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Trade', detail: 'Air Knife ×1, Maduin\'s Fang ×5 & 31,370 Gil' }
    ]
  },
  {
    id: 'dagger-chicken',
    name: 'Chicken Knife',
    japaneseName: 'チキンナイフ',
    category: 'Weapon',
    subcategory: 'Dagger',
    stats: { ATK: 66 },
    level: 99,
    characters: ['Terra', 'Onion Knight', 'Zidane', 'The Emperor', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Trade', detail: 'Libra Recipe ×1, Omega Crest ×1, Sphere ×1 & 31,370 Gil' }
    ]
  },

  // ========== WEAPONS - AXE ==========
  {
    id: 'axe-axe',
    name: 'Axe',
    japaneseName: 'アクス',
    category: 'Weapon',
    subcategory: 'Axe',
    stats: { ATK: 6, DEF: -2 },
    level: 1,
    characters: ['Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '1,000 Gil' }
    ]
  },
  {
    id: 'axe-slasher',
    name: 'Slasher',
    japaneseName: 'スラッシャー',
    category: 'Weapon',
    subcategory: 'Axe',
    stats: { ATK: 6, DEF: -2 },
    level: 1,
    effects: ['Crash HP Damage +20%'],
    characters: ['Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Axe ×1, Protection Fragment ×1, Transform Powder ×2 & 1,000 Gil' }
    ]
  },
  {
    id: 'axe-giants',
    name: 'Giant\'s Axe',
    japaneseName: '巨人の斧',
    category: 'Weapon',
    subcategory: 'Axe',
    stats: { ATK: 62, DEF: -2 },
    level: 85,
    effects: ['Crash HP Damage +40%', 'Giant\'s Pride (1/3)'],
    characters: ['Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Dwarf Axe ×1, Saint\'s Skull ×4, Cyan Gem ×1 & 27,220 Gil' }
    ]
  },
  {
    id: 'axe-earth-breaker',
    name: 'Earth Breaker',
    japaneseName: 'アースブレイカー',
    category: 'Weapon',
    subcategory: 'Axe',
    stats: { ATK: 69 },
    level: 99,
    effects: ['Crash HP Damage +50%'],
    characters: ['Warrior of Light', 'Cecil Harvey', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Giant\'s Axe ×1 & 31,920 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Matoya (Item Drop)' }
    ]
  },

  // ========== WEAPONS - POLEARM ==========
  {
    id: 'polearm-spear',
    name: 'Spear',
    japaneseName: 'スピア',
    category: 'Weapon',
    subcategory: 'Polearm',
    stats: { ATK: 6, DEF: -1 },
    level: 2,
    characters: ['Sephiroth', 'Garland', 'Golbez'],
    acquisition: [
      { method: 'Shop', detail: '1,000 Gil' }
    ]
  },
  {
    id: 'polearm-scorpion',
    name: 'Scorpion',
    japaneseName: 'スコーピオン',
    category: 'Weapon',
    subcategory: 'Polearm',
    stats: { ATK: 6, DEF: -1 },
    level: 2,
    effects: ['Crash BRV Damage +20%'],
    characters: ['Sephiroth', 'Garland', 'Golbez'],
    acquisition: [
      { method: 'Trade', detail: 'Spear ×1, Magnetism Fragment ×1, Transform Powder ×2 & 1,000 Gil' }
    ]
  },
  {
    id: 'polearm-crystal-lance',
    name: 'Crystal Lance',
    japaneseName: 'クリスタルランス',
    category: 'Weapon',
    subcategory: 'Polearm',
    stats: { ATK: 49, DEF: -2 },
    level: 65,
    effects: ['Crystal Blessing (1/3)'],
    characters: ['Sephiroth', 'Garland', 'Golbez'],
    acquisition: [
      { method: 'Trade', detail: 'Obelisk ×1, Crystal ×1, Humbaba Horn ×3 & 20,160 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Cait Sith (Item Drop)' }
    ]
  },
  {
    id: 'polearm-trident',
    name: 'Trident',
    japaneseName: 'トライデント',
    category: 'Weapon',
    subcategory: 'Polearm',
    stats: { ATK: 53, DEF: -2 },
    level: 72,
    effects: ['Crash BRV Damage +50%'],
    characters: ['Sephiroth', 'Garland', 'Golbez'],
    acquisition: [
      { method: 'Trade', detail: 'Holy Lance ×1, Behemoth Horn ×5 & 31,920 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Fusoya (Item Drop)' }
    ]
  },

  // ========== WEAPONS - ROD ==========
  {
    id: 'rod-rod',
    name: 'Rod',
    japaneseName: 'ロッド',
    category: 'Weapon',
    subcategory: 'Rod',
    stats: { HP: 62, ATK: 3, DEF: 1 },
    level: 3,
    characters: ['Terra', 'Onion Knight', 'Cloud of Darkness', 'Golbez', 'The Emperor', 'Ex Death', 'Kefka', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Shop', detail: '1,000 Gil' }
    ]
  },
  {
    id: 'rod-full-metal',
    name: 'Full Metal Rod',
    japaneseName: 'フルメタルロッド',
    category: 'Weapon',
    subcategory: 'Rod',
    stats: { HP: 62, ATK: 3, DEF: 1 },
    level: 3,
    effects: ['Magic Damage +10%'],
    characters: ['Terra', 'Onion Knight', 'Cloud of Darkness', 'Golbez', 'The Emperor', 'Ex Death', 'Kefka', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Trade', detail: 'Rod ×1, Recovery Fragment ×1, Transform Powder ×2 & 1,000 Gil' }
    ]
  },
  {
    id: 'rod-nirvana',
    name: 'Nirvana',
    japaneseName: 'ニルヴァーナ',
    category: 'Weapon',
    subcategory: 'Rod',
    stats: { BRV: 40, ATK: 66 },
    level: 99,
    effects: ['EX Mode duration +50%'],
    characters: ['Terra', 'Onion Knight', 'Cloud of Darkness', 'Golbez', 'The Emperor', 'Ex Death', 'Kefka', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Trade', detail: 'Light Staff ×1, Ever Tree ×1 & 31,920 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Omega (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Vivi (Item Drop)' }
    ]
  },

  // ========== WEAPONS - STAFF ==========
  {
    id: 'staff-staff',
    name: 'Staff',
    japaneseName: '杖',
    category: 'Weapon',
    subcategory: 'Staff',
    stats: { BRV: 11, ATK: 3 },
    level: 1,
    characters: ['Terra', 'Onion Knight', 'Cloud of Darkness', 'Golbez', 'The Emperor', 'Ex Death', 'Kefka', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Shop', detail: '1,000 Gil' }
    ]
  },
  {
    id: 'staff-magic',
    name: 'Magic Staff',
    japaneseName: '魔術の杖',
    category: 'Weapon',
    subcategory: 'Staff',
    stats: { BRV: 11, ATK: 3 },
    level: 1,
    effects: ['EX Mode duration +20%'],
    characters: ['Terra', 'Onion Knight', 'Cloud of Darkness', 'Golbez', 'The Emperor', 'Ex Death', 'Kefka', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Trade', detail: 'Staff ×1, Amplification Fragment ×1, Transform Powder ×2 & 1,000 Gil' }
    ]
  },

  // ========== WEAPONS - PERSONAL ==========
  {
    id: 'personal-revolver',
    name: 'Revolver',
    japaneseName: 'リボルバー',
    category: 'Weapon',
    subcategory: 'Personal',
    stats: { ATK: 4 },
    level: 1,
    effects: ['Can only be equipped by Squall'],
    characters: ['Squall Leonheart'],
    acquisition: [
      { method: 'Treasure Chest', detail: 'Common Treasure Chest in Destiny Odyssey VIII' }
    ]
  },
  {
    id: 'personal-buster-sword',
    name: 'Buster Sword',
    japaneseName: 'バスターソード',
    category: 'Weapon',
    subcategory: 'Personal',
    stats: { ATK: 5 },
    level: 1,
    effects: ['Can only be equipped by Cloud'],
    characters: ['Cloud Strife'],
    acquisition: [
      { method: 'Treasure Chest', detail: 'Common Treasure Chest in Destiny Odyssey VII' }
    ]
  },
  {
    id: 'personal-darkness-sword',
    name: 'Sword of Darkness',
    japaneseName: '暗黒の剣',
    category: 'Weapon',
    subcategory: 'Personal',
    stats: { ATK: 4 },
    level: 1,
    effects: ['Power of Darkness (1/4)', 'Can only be equipped by Cecil'],
    characters: ['Cecil Harvey'],
    acquisition: [
      { method: 'Treasure Chest', detail: 'Common Treasure Chest in Destiny Odyssey IV' }
    ]
  },
  {
    id: 'personal-crime-penalty',
    name: 'Crime & Penalty',
    japaneseName: 'クライム＆ペナルティ',
    category: 'Weapon',
    subcategory: 'Personal',
    stats: { ATK: 63 },
    level: 92,
    effects: ['BRV +30% at start of Battle', 'EX Force absorption amount +15%', 'Can only be equipped by Squall'],
    characters: ['Squall Leonheart'],
    acquisition: [
      { method: 'Trade', detail: 'Lance of Zilt ×1, Goddess Stone ×5, Blessed Crystal ×3 & 29,570 Gil' }
    ]
  },
  {
    id: 'personal-butterfly-edge',
    name: 'Butterfly Edge',
    japaneseName: 'バタフライエッジ',
    category: 'Weapon',
    subcategory: 'Personal',
    stats: { ATK: 65 },
    level: 92,
    effects: ['Physical Damage +15%', 'Crash BRV Damage +15%', 'Can only be equipped by Cloud'],
    characters: ['Cloud Strife'],
    acquisition: [
      { method: 'Trade', detail: 'Force Eater ×1, Carnage Skull ×5, Hurricane Crystal & 30,390 Gil' }
    ]
  },
  {
    id: 'personal-wild-rose',
    name: 'Wild Rose',
    japaneseName: 'ワイルドローズ',
    category: 'Weapon',
    subcategory: 'Personal',
    stats: { ATK: 68, DEF: -1 },
    level: 100,
    effects: ['Crash BRV Damage +40%', 'EX Force absorption range +3m', 'Can only be equipped by Firion'],
    characters: ['Firion'],
    acquisition: [
      { method: 'Trade', detail: 'Longinus ×1, Young Man\'s Dream ×5, Magnetism Pearl ×5 & 31,920 Gil' }
    ]
  },
  {
    id: 'personal-maduins-horn',
    name: 'Maduin\'s Horn',
    japaneseName: 'マディンの角',
    category: 'Weapon',
    subcategory: 'Personal',
    stats: { BRV: 40, ATK: 67 },
    level: 100,
    effects: ['EX Mode duration +40%', 'EX Core absorption amount +20%', 'Can only be equipped by Terra'],
    characters: ['Terra Branford'],
    acquisition: [
      { method: 'Trade', detail: 'Morning Star ×1, Secret Keeper ×5, Amplification Pearl ×5 & 31,920 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Ultros (Item Drop)' }
    ]
  },
  {
    id: 'personal-onion-sword',
    name: 'Onion Sword',
    japaneseName: 'オニオンソード',
    category: 'Weapon',
    subcategory: 'Personal',
    stats: { ATK: 68 },
    level: 100,
    effects: ['BRV +40% at start of Battle', 'BRV base value recovery +30%', 'Can only be equipped by Onion Knight'],
    characters: ['Onion Knight'],
    acquisition: [
      { method: 'Trade', detail: 'King\'s Sword ×1, Onion ×5, Recovery Pearl ×5 & 31,920 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Ninja (Item Drop)' }
    ]
  },
  {
    id: 'personal-genji-katana',
    name: 'Genji Katana',
    japaneseName: '源氏太刀',
    category: 'Weapon',
    subcategory: 'Personal',
    stats: { ATK: 68 },
    level: 100,
    effects: ['Can only be equipped by Gilgamesh (NPC)'],
    characters: ['Garland'],
    acquisition: [
      { method: 'Friend Card', detail: 'Special Friend Card: Gilgamesh (Item Drop)' }
    ]
  },

  // ========== HAND EQUIPMENT - SHIELD ==========
  {
    id: 'shield-broken',
    name: 'Broken Shield',
    japaneseName: '割れた盾',
    category: 'Hand Equipment',
    subcategory: 'Shield',
    stats: { DEF: -8 },
    level: 1,
    characters: ['Squall', 'Firion', 'Cloud', 'Warrior of Light', 'Cecil', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Item Drop', detail: 'Item Drop from "Common" Opponent Pawns in Story Mode' }
    ]
  },
  {
    id: 'shield-buckler',
    name: 'Buckler',
    japaneseName: 'バックラー',
    category: 'Hand Equipment',
    subcategory: 'Shield',
    stats: { DEF: 5 },
    level: 1,
    characters: ['Squall', 'Firion', 'Cloud', 'Warrior of Light', 'Cecil', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '1,000 Gil' }
    ]
  },
  {
    id: 'shield-shell',
    name: 'Shell Shield',
    japaneseName: 'シェルシールド',
    category: 'Hand Equipment',
    subcategory: 'Shield',
    stats: { DEF: 5 },
    level: 1,
    effects: ['Crash HP Damage reduction +20%'],
    characters: ['Squall', 'Firion', 'Cloud', 'Warrior of Light', 'Cecil', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Buckler ×1, Fortune Fragment ×1, Transform Powder ×2 & 1,000 Gil' }
    ]
  },
  {
    id: 'shield-iron',
    name: 'Iron Shield',
    japaneseName: 'アイアンシールド',
    category: 'Hand Equipment',
    subcategory: 'Shield',
    stats: { DEF: 9 },
    level: 8,
    characters: ['Squall', 'Firion', 'Cloud', 'Warrior of Light', 'Cecil', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '2,000 Gil' }
    ]
  },
  {
    id: 'shield-genji',
    name: 'Genji Shield',
    japaneseName: '源氏盾',
    category: 'Hand Equipment',
    subcategory: 'Shield',
    stats: { DEF: 59 },
    level: 85,
    effects: ['Soul of Yamato (1/3)'],
    characters: ['Squall', 'Firion', 'Cloud', 'Warrior of Light', 'Cecil', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Taira Shield ×1, Supreme Stone ×5, Chaos Crystal ×2 & 16,240 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Gilgamesh (Item Drop)' }
    ]
  },
  {
    id: 'shield-ziedrich',
    name: 'Ziedrich',
    japaneseName: 'ザイドリッツ',
    category: 'Hand Equipment',
    subcategory: 'Shield',
    stats: { DEF: 72 },
    level: 99,
    characters: ['Squall', 'Firion', 'Cloud', 'Warrior of Light', 'Cecil', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Protection\'s Bracelet ×1, Heaven\'s Jewel ×5 & 31,920 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Ultros (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Omega (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Ninja (Item Drop)' }
    ]
  },

  // ========== HAND EQUIPMENT - BRACELET ==========
  {
    id: 'bracelet-leather',
    name: 'Leather Bracelet',
    japaneseName: '皮の腕輪',
    category: 'Hand Equipment',
    subcategory: 'Bracelet',
    stats: { HP: 62, DEF: 5 },
    level: 1,
    characters: ['Terra', 'Onion Knight', 'Bartz', 'Zidane', 'Shantotto', 'Vaan'],
    acquisition: [
      { method: 'Shop', detail: '750 Gil' }
    ]
  },
  {
    id: 'bracelet-mithril',
    name: 'Mithril Bracelet',
    japaneseName: 'ミスリルの腕輪',
    category: 'Hand Equipment',
    subcategory: 'Bracelet',
    stats: { HP: 124, DEF: 14 },
    level: 15,
    effects: ['Mithril Charm (1/3)'],
    characters: ['Terra', 'Onion Knight', 'Bartz', 'Zidane', 'Shantotto', 'Vaan'],
    acquisition: [
      { method: 'Trade', detail: 'Leather Bracelet ×1, Mithril ×2 & 3,020 Gil' }
    ]
  },
  {
    id: 'bracelet-mystile',
    name: 'Mystile',
    japaneseName: 'ミスティール',
    category: 'Hand Equipment',
    subcategory: 'Bracelet',
    stats: { HP: 290, DEF: 59 },
    level: 92,
    characters: ['Terra', 'Onion Knight', 'Bartz', 'Zidane', 'Shantotto', 'Vaan'],
    acquisition: [
      { method: 'Trade', detail: 'Dragon\'s Bracelet ×1, Lapis Lazuli ×5, White Gem ×1 & 29,570 Gil' }
    ]
  },

  // ========== HEAD EQUIPMENT - HELMET ==========
  {
    id: 'helmet-broken',
    name: 'Broken Helmet',
    japaneseName: '壊れた兜',
    category: 'Head Equipment',
    subcategory: 'Helmet',
    stats: { BRV: -37, DEF: -1 },
    level: 1,
    characters: ['Squall', 'Cloud', 'Cecil', 'Warrior of Light', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Item Drop', detail: 'Item Drop from "Common" Opponent Pawns in Story Mode' }
    ]
  },
  {
    id: 'helmet-bronze',
    name: 'Bronze Helm',
    japaneseName: 'ブロンズヘルム',
    category: 'Head Equipment',
    subcategory: 'Helmet',
    stats: { BRV: 37, DEF: 1 },
    level: 1,
    characters: ['Squall', 'Cloud', 'Cecil', 'Warrior of Light', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '780 Gil' }
    ]
  },
  {
    id: 'helmet-genji',
    name: 'Genji Helmet',
    japaneseName: '源氏の兜',
    category: 'Head Equipment',
    subcategory: 'Helmet',
    stats: { BRV: 290, DEF: 1 },
    level: 99,
    effects: ['Soul of Yamato (1/3)'],
    characters: ['Squall', 'Cloud', 'Cecil', 'Warrior of Light', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Taira Helm ×1, Supreme Stone ×5, Chaos Crystal ×2 & 16,240 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Matoya (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Gilgamesh (Item Drop)' }
    ]
  },

  // ========== HEAD EQUIPMENT - HAT ==========
  {
    id: 'hat-leather',
    name: 'Leather Hat',
    japaneseName: '皮の帽子',
    category: 'Head Equipment',
    subcategory: 'Hat',
    stats: { BRV: 48 },
    level: 1,
    characters: ['Squall', 'Cloud', 'Terra', 'Shantotto', 'Onion Knight', 'Tidus', 'The Emperor', 'Cloud of Darkness', 'Kefka', 'Ultimecia', 'Kuja', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '500 Gil' }
    ]
  },
  {
    id: 'hat-red-cap',
    name: 'Red Cap',
    japaneseName: 'レッドキャップ',
    category: 'Head Equipment',
    subcategory: 'Hat',
    stats: { BRV: 189 },
    level: 50,
    characters: ['Squall', 'Cloud', 'Terra', 'Shantotto', 'Onion Knight', 'Tidus', 'The Emperor', 'Cloud of Darkness', 'Kefka', 'Ultimecia', 'Kuja', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Triangle Hat ×1, Giant Bird Feather ×1, Transform Powder ×1 & 7,730 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Ahriman (Item Drop)' }
    ]
  },
  {
    id: 'hat-super-ribbon',
    name: 'Super Ribbon',
    japaneseName: 'スーパーリボン',
    category: 'Head Equipment',
    subcategory: 'Hat',
    stats: { BRV: 370 },
    level: 78,
    effects: ['Accessory Break Chance -30%'],
    characters: ['Terra', 'Shantotto', 'Bartz', 'Kefka'],
    acquisition: [
      { method: 'Trade', detail: 'Ribbon ×1, Bahamut Feather ×5, Transform Powder ×99 & 15,430 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Ultros (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Siegfried (Item Drop)' }
    ]
  },

  // ========== BODY EQUIPMENT - LIGHT ARMOR ==========
  {
    id: 'light-leather',
    name: 'Leather Armor',
    japaneseName: 'レザーアーマー',
    category: 'Body Equipment',
    subcategory: 'Light Armor',
    stats: { HP: 368 },
    level: 1,
    characters: ['Squall', 'Firion', 'Cloud', 'Cecil', 'Warrior of Light', 'Onion Knight', 'Zidane', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '750 Gil' }
    ]
  },
  {
    id: 'light-mithril-vest',
    name: 'Mithril Vest',
    japaneseName: 'ミスリルベスト',
    category: 'Body Equipment',
    subcategory: 'Light Armor',
    stats: { HP: 872 },
    level: 22,
    effects: ['Mithril Charm (1/3)'],
    characters: ['Squall', 'Firion', 'Cloud', 'Cecil', 'Warrior of Light', 'Onion Knight', 'Zidane', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Leather Armor ×1, Mithril ×2 & 4,540 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Laguna (Item Drop)' }
    ]
  },
  {
    id: 'light-brigandine',
    name: 'Brigandine',
    japaneseName: 'ブリガンダイン',
    category: 'Body Equipment',
    subcategory: 'Light Armor',
    stats: { HP: 2717 },
    level: 99,
    effects: ['Crash BRV Damage reduction +40%'],
    characters: ['Squall', 'Firion', 'Cloud', 'Cecil', 'Warrior of Light', 'Onion Knight', 'Zidane', 'Tidus', 'Garland', 'Golbez', 'Ex Death', 'Sephiroth', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Vishnu\'s Vest ×1, One Heart ×5 & 23,940 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Ninja (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Wakka (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Auron (Item Drop)' }
    ]
  },

  // ========== BODY EQUIPMENT - HEAVY ARMOR ==========
  {
    id: 'heavy-heavy',
    name: 'Heavy Armor',
    japaneseName: '重鎧',
    category: 'Body Equipment',
    subcategory: 'Heavy Armor',
    stats: { HP: 536 },
    level: 8,
    characters: ['Warrior of Light', 'Cecil', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '1,500 Gil' }
    ]
  },
  {
    id: 'heavy-dragon-mail',
    name: 'Dragon\'s Mail',
    japaneseName: 'ドラゴンメイル',
    category: 'Body Equipment',
    subcategory: 'Heavy Armor',
    stats: { HP: 2428 },
    level: 79,
    effects: ['Dragon\'s Breath (1/3)'],
    characters: ['Warrior of Light', 'Cecil', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Demon\'s Mail ×1, Earth Dragon Skull ×3, Attraction Fragment ×1 & 19,100 Gil' }
    ]
  },
  {
    id: 'heavy-genji-armor',
    name: 'Genji Armor',
    japaneseName: '源氏鎧',
    category: 'Body Equipment',
    subcategory: 'Heavy Armor',
    stats: { HP: 2610 },
    level: 86,
    effects: ['Soul of Yamato (1/3)'],
    characters: ['Warrior of Light', 'Cecil', 'Garland', 'Golbez', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Giant\'s Armor ×1, Supreme Stone ×5, Chaos Crystal ×2 & 21,560 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Gilgamesh (Item Drop)' }
    ]
  },

  // ========== BODY EQUIPMENT - CLOTHES ==========
  {
    id: 'clothes-leather',
    name: 'Leather Clothes',
    japaneseName: '皮の服',
    category: 'Body Equipment',
    subcategory: 'Clothes',
    stats: { HP: 313 },
    level: 1,
    characters: ['Squall', 'Firion', 'Cloud', 'Terra', 'Shantotto', 'Onion Knight', 'Zidane', 'Tidus', 'The Emperor', 'Cloud of Darkness', 'Kefka', 'Ultimecia', 'Kuja', 'Jecht'],
    acquisition: [
      { method: 'Shop', detail: '400 Gil' }
    ]
  },
  {
    id: 'clothes-brave-suit',
    name: 'Brave Suit',
    japaneseName: 'ブレイブスーツ',
    category: 'Body Equipment',
    subcategory: 'Clothes',
    stats: { HP: 2564 },
    level: 96,
    effects: ['BRV Damage reduction +40% in Chase Battle'],
    characters: ['Squall', 'Firion', 'Cloud', 'Terra', 'Shantotto', 'Onion Knight', 'Zidane', 'Tidus', 'The Emperor', 'Cloud of Darkness', 'Kefka', 'Ultimecia', 'Kuja', 'Jecht'],
    acquisition: [
      { method: 'Trade', detail: 'Black Clothes ×1, Bahamut Feather ×5 & 23,590 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Ming Wu (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Steiner (Item Drop)' }
    ]
  },

  // ========== BODY EQUIPMENT - ROBE ==========
  {
    id: 'robe-robe',
    name: 'Robe',
    japaneseName: 'ローブ',
    category: 'Body Equipment',
    subcategory: 'Robe',
    stats: { HP: 253, BRV: 23 },
    level: 1,
    characters: ['Terra', 'Shantotto', 'The Emperor', 'Cloud of Darkness', 'Kefka', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Shop', detail: '750 Gil' }
    ]
  },
  {
    id: 'robe-rainbow',
    name: 'Rainbow Robe',
    japaneseName: 'レインボーローブ',
    category: 'Body Equipment',
    subcategory: 'Robe',
    stats: { HP: 2308, BRV: 81 },
    level: 96,
    effects: ['Magic Damage reduction +20%'],
    characters: ['Terra', 'Shantotto', 'The Emperor', 'Cloud of Darkness', 'Kefka', 'Ultimecia', 'Kuja'],
    acquisition: [
      { method: 'Trade', detail: 'Light Robe ×1, Bahamut Feather ×5 & 23,940 Gil' },
      { method: 'Friend Card', detail: 'Special Friend Card: Ultros (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Siegfried (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Seifer (Item Drop)' },
      { method: 'Friend Card', detail: 'Special Friend Card: Vivi (Item Drop)' }
    ]
  },

  // ========== ACCESSORIES - NORMAL ==========
  {
    id: 'acc-power-wrist',
    name: 'Power Wrist',
    japaneseName: 'パワーリスト',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'B',
    effects: ['ATK +1'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Power Sand ×2 & 800 Gil' }
    ]
  },
  {
    id: 'acc-magic-wrist',
    name: 'Magic Wrist',
    japaneseName: 'マジックリスト',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'B',
    effects: ['Magic Damage +5%'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Magic Sand ×2 & 800 Gil' }
    ]
  },
  {
    id: 'acc-battle-voice',
    name: 'Battle Voice',
    japaneseName: 'バトルボイス',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'A',
    effects: ['EX Gauge filled +15% at start of Battle'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Amplification Fragment ×3, Amplification Crystal ×2 & 1,300 Gil' }
    ]
  },
  {
    id: 'acc-excise',
    name: 'Excellence',
    japaneseName: 'Excise',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['EX Gauge filled +25% at start of Battle'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Battle Voice ×1, Amplification Pearl ×2 & 1,300 Gil' }
    ]
  },
  {
    id: 'acc-elixir',
    name: 'Elixir',
    japaneseName: 'エリクサー',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['Regeneration amount +15%'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Recovery Fragment ×3, Recovery Crystal ×2, Book of Life ×3 & 1,400 Gil' }
    ]
  },
  {
    id: 'acc-aurora',
    name: 'Aurora',
    japaneseName: 'オーロラ',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['Regeneration amount +20%'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Elixir ×1, Recovery Pearl ×2 & 1,400 Gil' }
    ]
  },
  {
    id: 'acc-white-choker',
    name: 'White Choker',
    japaneseName: '白のチョーカー',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'A',
    effects: ['EX Force absorption amount +25%'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Blessed Sand ×2 & 800 Gil' }
    ]
  },
  {
    id: 'acc-pearl-necklace',
    name: 'Pearl Necklace',
    japaneseName: '真珠のネックレス',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['EX Force absorption amount +50%'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Blessed Fragment ×3, Blessed Crystal ×2, Book of Life ×5 & 1,300 Gil' }
    ]
  },
  {
    id: 'acc-lucky-ring',
    name: 'Lucky Ring',
    japaneseName: 'ラッキーリング',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'A',
    effects: ['LUK +4', 'Summon recovery rate +1'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Yellow Drop ×1, Fortune Sand ×2 & 1,500 Gil' }
    ]
  },
  {
    id: 'acc-fortune-ring',
    name: 'Fortune Ring',
    japaneseName: 'フォーチュンリング',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['LUK +8', 'Summon recovery rate +2'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Yellow Gem ×2, Fortune Fragment ×2, Fortune Crystal ×1 & 1,300 Gil' }
    ]
  },
  {
    id: 'acc-growth-egg',
    name: 'Growth Egg',
    japaneseName: 'グロウエッグ',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'A',
    effects: ['EXP +20%'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Growth Seed ×1, Chocobo Feather ×1, Chocobo Tail ×1 & 1,500 Gil' }
    ]
  },
  {
    id: 'acc-chocobo-fur',
    name: 'Chocobo Fur',
    japaneseName: 'チョコボの毛',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['EXP +20%', '30% chance it\'ll break after Battle'],
    acquisition: [
      { method: 'Play Plan', detail: '1st or 5th Play Plan reward' }
    ]
  },
  {
    id: 'acc-chocobo-feather',
    name: 'Chocobo Feather',
    japaneseName: 'チョコボの羽',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['EXP +50%', '30% chance it\'ll break after Battle'],
    acquisition: [
      { method: 'Play Plan', detail: '2nd or 5th Play Plan reward' }
    ]
  },
  {
    id: 'acc-chocobo-tail',
    name: 'Chocobo Tail',
    japaneseName: 'チョコボの尾',
    category: 'Accessory',
    subcategory: 'Normal',
    rank: 'S',
    effects: ['EXP +100%', '30% chance it\'ll break after Battle'],
    acquisition: [
      { method: 'Play Plan', detail: '3rd or 5th Play Plan reward' }
    ]
  },

  // ========== ACCESSORIES - CONDITION ==========
  {
    id: 'acc-100-hp',
    name: '100% HP',
    japaneseName: 'HPが100%',
    category: 'Accessory',
    subcategory: 'Condition',
    rank: 'S',
    multiplier: '1.5x',
    effects: ['Player HP at 100%'],
    acquisition: [
      { method: 'Mission', detail: 'Complete various missions' }
    ]
  },
  {
    id: 'acc-hp-above-80',
    name: 'HP >80%',
    japaneseName: 'HPが80%以上',
    category: 'Accessory',
    subcategory: 'Condition',
    rank: 'B',
    multiplier: '1.2x',
    effects: ['Player HP above 80%'],
    acquisition: [
      { method: 'Mission', detail: 'Complete various missions' }
    ]
  },
  {
    id: 'acc-hp-below-40',
    name: 'HP <40%',
    japaneseName: 'HPが40%以下',
    category: 'Accessory',
    subcategory: 'Condition',
    rank: 'B',
    multiplier: '1.2x',
    effects: ['Player HP below 40%'],
    acquisition: [
      { method: 'Mission', detail: 'Complete various missions' }
    ]
  },
  {
    id: 'acc-opponent-hp-1',
    name: 'Opponent HP 1',
    japaneseName: 'HPが1',
    category: 'Accessory',
    subcategory: 'Condition',
    rank: 'S',
    multiplier: '1.5x',
    effects: ['Opponent HP is at 1'],
    acquisition: [
      { method: 'Mission', detail: 'Complete various missions' }
    ]
  },

  // ========== ACCESSORIES - RAW ==========
  {
    id: 'raw-mithril',
    name: 'Mithril',
    japaneseName: 'ミスリル',
    category: 'Accessory',
    subcategory: 'Raw',
    rank: 'C',
    effects: ['LUK +1'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Beginner Course' }
    ]
  },
  {
    id: 'raw-gold',
    name: 'Gold',
    japaneseName: 'ゴールド',
    category: 'Accessory',
    subcategory: 'Raw',
    rank: 'B',
    effects: ['LUK +2'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Beginner & Falcon Course' }
    ]
  },
  {
    id: 'raw-diamond',
    name: 'Diamond',
    japaneseName: 'ダイヤ',
    category: 'Accessory',
    subcategory: 'Raw',
    rank: 'A',
    effects: ['LUK +3'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Falcon Course' }
    ]
  },
  {
    id: 'raw-crystal',
    name: 'Crystal',
    japaneseName: 'クリスタル',
    category: 'Accessory',
    subcategory: 'Raw',
    rank: 'S',
    effects: ['LUK +4'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Falcon & Invincible Course' }
    ]
  },
  {
    id: 'raw-adamantite',
    name: 'Adamantite',
    japaneseName: 'アダマンタイト',
    category: 'Accessory',
    subcategory: 'Raw',
    rank: 'S',
    effects: ['LUK +4'],
    acquisition: [
      { method: 'DP Stage Bonus', detail: '3 DP Stage Bonus in Inward Chaos (1x only)' }
    ]
  },
  {
    id: 'raw-rosetta-stone',
    name: 'Rosetta Stone',
    japaneseName: 'ロゼッタ石',
    category: 'Accessory',
    subcategory: 'Raw',
    rank: 'S',
    effects: ['LUK +4'],
    acquisition: [
      { method: 'Shop', detail: 'Trade with Wind Stone ×1, Water Stone ×1, Life Stone ×1 & 1,500 Gil' }
    ]
  },

  // ========== SUMMONS ==========
  {
    id: 'summon-ifrit',
    name: 'Ifrit',
    japaneseName: 'イフリート',
    category: 'Summon',
    subcategory: 'Auto Type',
    effects: ['Damages 10% HP of the encountered Opponent'],
    acquisition: [
      { method: 'Story', detail: 'Pick up the Red Orb in Destiny Odyssey I Chapter 3' }
    ]
  },
  {
    id: 'summon-shiva',
    name: 'Shiva',
    japaneseName: 'シヴァ',
    category: 'Summon',
    subcategory: 'Auto Type',
    effects: ['Cuts opponent\'s Brave base value and Brave Points by half for a limited time'],
    acquisition: [
      { method: 'Story', detail: 'Pick up the Red Orb in Destiny Odyssey X Chapter 3' }
    ]
  },
  {
    id: 'summon-odin',
    name: 'Odin',
    japaneseName: 'オーディーン',
    category: 'Summon',
    subcategory: 'Auto Type',
    effects: ['50% chance to instantly Break opponent\'s Brave Points'],
    acquisition: [
      { method: 'Story', detail: 'Pick up the Red Orb in Shade Impulse - Chapter 1-3' }
    ]
  },
  {
    id: 'summon-alexander',
    name: 'Alexander',
    japaneseName: 'アレクサンダー',
    category: 'Summon',
    subcategory: 'Auto Type',
    effects: ['Lock your current Brave Points'],
    acquisition: [
      { method: 'Story', detail: 'Pick up the Red Orb in Destiny Odyssey IX Chapter 3' }
    ]
  },
  {
    id: 'summon-leviathan',
    name: 'Leviathan',
    japaneseName: 'リヴァイアサン',
    category: 'Summon',
    subcategory: 'Auto Type',
    effects: ['Reduces opponent\'s Brave Points by 20 gradually over a limited time'],
    acquisition: [
      { method: 'Story', detail: 'Pick up the Red Orb in Destiny Odyssey III Chapter 3' }
    ]
  },
  {
    id: 'summon-bahamut',
    name: 'Bahamut',
    japaneseName: 'バハムート',
    category: 'Summon',
    subcategory: 'Manual Type',
    effects: ['Damages 20% HP of the encountered Opponent'],
    acquisition: [
      { method: 'Story', detail: 'Pick up the Red Orb in Destiny Odyssey VI Chapter 3' }
    ]
  },
  {
    id: 'summon-moogle',
    name: 'Moogle',
    japaneseName: 'モグ',
    category: 'Summon',
    subcategory: 'Manual Type',
    effects: ['Restores 30% of your HP'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Beginner Course' }
    ]
  },
  {
    id: 'summon-chocobo',
    name: 'Chocobo',
    japaneseName: 'チョコボ',
    category: 'Summon',
    subcategory: 'Manual Type',
    effects: ['Increases your Movement Speed'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Beginner Course' }
    ]
  },
  {
    id: 'summon-carbuncle',
    name: 'Carbuncle',
    japaneseName: 'カーバンクル',
    category: 'Summon',
    subcategory: 'Manual Type',
    effects: ['Reflects opponent\'s Magic Attacks'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Falcon Course' }
    ]
  },
  {
    id: 'summon-fenrir',
    name: 'Fenrir',
    japaneseName: 'フェンリル',
    category: 'Summon',
    subcategory: 'Manual Type',
    effects: ['Increases your Movement Speed significantly'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Falcon Course' }
    ]
  },
  {
    id: 'summon-siren',
    name: 'Siren',
    japaneseName: 'セイレーン',
    category: 'Summon',
    subcategory: 'Manual Type',
    effects: ['Lowers opponent\'s Attack'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Invincible Course' }
    ]
  },
  {
    id: 'summon-atomix',
    name: 'Atomix',
    japaneseName: 'アトミック',
    category: 'Summon',
    subcategory: 'Manual Type',
    effects: ['Damages 30% HP of the encountered Opponent'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Ultimate Course' }
    ]
  },
  {
    id: 'summon-omega',
    name: 'Omega',
    japaneseName: 'オメガ',
    category: 'Summon',
    subcategory: 'Manual Type',
    effects: ['Ultimate attack - damages 50% HP of the encountered Opponent'],
    acquisition: [
      { method: 'Colosseum', detail: 'Prize in Colosseum: Ultimate Course' }
    ]
  }
]

export default items