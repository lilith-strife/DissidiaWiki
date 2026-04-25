const characterNames = {
  WoL: 'Warrior of Light',
  Firion: 'Firion',
  OK: 'Onion Knight',
  Cecil: 'Cecil',
  Bartz: 'Bartz',
  Terra: 'Terra',
  Cloud: 'Cloud',
  Squall: 'Squall',
  Zidane: 'Zidane',
  Tidus: 'Tidus',
  Shantotto: 'Shantotto',
  Garland: 'Garland',
  Emperor: 'The Emperor',
  CoD: 'Cloud of Darkness',
  Golbez: 'Golbez',
  Exdeath: 'Exdeath',
  Kefka: 'Kefka',
  Sephiroth: 'Sephiroth',
  Ultimecia: 'Ultimecia',
  Kuja: 'Kuja',
  Jecht: 'Jecht',
  Gabranth: 'Gabranth'
}

export const allGameCharacters = Object.values(characterNames)

const characters = (heroes = [], villains = []) => [
  ...heroes.map(name => characterNames[name]),
  ...villains.map(name => characterNames[name])
]

export const subcategoryCharacterAssignments = {
  Arm: characters(
    ['Firion', 'Bartz', 'Tidus'],
    ['Jecht']
  ),
  Thrown: characters(
    ['Firion', 'OK', 'Bartz', 'Squall', 'Zidane'],
    []
  ),
  Instrument: characters(
    ['Firion', 'Bartz'],
    ['Kefka', 'Ultimecia']
  ),
  Tool: allGameCharacters,
  Sword: characters(
    ['WoL', 'Firion', 'OK', 'Cecil', 'Bartz', 'Cloud', 'Squall', 'Tidus', 'Shantotto'],
    ['Emperor', 'Gabranth']
  ),
  Dagger: characters(
    ['Firion', 'OK', 'Bartz', 'Terra', 'Zidane'],
    ['Emperor', 'Ultimecia', 'Kuja', 'Gabranth']
  ),
  'Huge Sword': characters(
    ['WoL', 'Firion', 'Cecil', 'Bartz', 'Cloud'],
    ['Garland', 'Golbez', 'Jecht', 'Gabranth']
  ),
  Katana: characters(
    ['Firion', 'Bartz'],
    ['Garland', 'Sephiroth']
  ),
  Polearm: characters(
    ['Firion', 'Bartz'],
    ['Garland', 'Golbez', 'Sephiroth']
  ),
  Axe: characters(
    ['WoL', 'Firion', 'Cecil', 'Bartz'],
    ['Garland', 'Golbez', 'Jecht']
  ),
  Rod: characters(
    ['Firion', 'OK', 'Bartz', 'Terra', 'Shantotto'],
    ['Emperor', 'CoD', 'Golbez', 'Exdeath', 'Kefka', 'Ultimecia', 'Kuja']
  ),
  Staff: characters(
    ['Firion', 'OK', 'Bartz', 'Terra', 'Shantotto'],
    ['Emperor', 'CoD', 'Exdeath', 'Kefka', 'Ultimecia', 'Kuja']
  ),
  Shield: characters(
    ['WoL', 'Firion', 'Cecil', 'Bartz', 'Terra', 'Cloud', 'Squall', 'Tidus'],
    ['Garland', 'Golbez', 'Exdeath', 'Sephiroth', 'Jecht', 'Gabranth']
  ),
  Wakizashi: characters(
    ['Firion', 'OK', 'Bartz', 'Zidane'],
    []
  ),
  Bracelet: characters(
    ['Firion', 'OK', 'Bartz', 'Terra', 'Cloud', 'Squall', 'Zidane', 'Tidus', 'Shantotto'],
    ['Emperor', 'CoD', 'Kefka', 'Ultimecia', 'Kuja', 'Jecht']
  ),
  'Arm Guard': characters(
    ['WoL', 'OK', 'Cecil', 'Bartz', 'Zidane'],
    ['Garland', 'Golbez', 'Exdeath', 'Sephiroth', 'Gabranth']
  ),
  Hat: characters(
    ['Firion', 'OK', 'Bartz', 'Terra', 'Cloud', 'Squall', 'Zidane', 'Tidus', 'Shantotto'],
    ['Emperor', 'CoD', 'Kefka', 'Ultimecia', 'Kuja', 'Jecht']
  ),
  Hairpin: characters(
    ['OK', 'Bartz', 'Terra', 'Zidane', 'Shantotto'],
    ['Emperor', 'CoD', 'Kefka', 'Ultimecia', 'Kuja']
  ),
  Helmet: characters(
    ['WoL', 'Firion', 'Cecil', 'Bartz', 'Cloud', 'Squall', 'Tidus'],
    ['Garland', 'Golbez', 'Exdeath', 'Sephiroth', 'Jecht', 'Gabranth']
  ),
  Ribbon: characters(
    ['Bartz', 'Terra', 'Shantotto'],
    ['Kefka']
  ),
  Clothes: characters(
    ['Firion', 'OK', 'Bartz', 'Terra', 'Cloud', 'Squall', 'Zidane', 'Tidus', 'Shantotto'],
    ['Emperor', 'CoD', 'Kefka', 'Ultimecia', 'Kuja', 'Jecht']
  ),
  Robe: characters(
    ['Bartz', 'Terra', 'Shantotto'],
    ['Emperor', 'CoD', 'Kefka', 'Squall', 'Zidane']
  ),
  'Light Armor': characters(
    ['WoL', 'Firion', 'OK', 'Cecil', 'Bartz', 'Cloud', 'Squall', 'Zidane', 'Tidus'],
    ['Garland', 'Golbez', 'Exdeath', 'Sephiroth', 'Jecht', 'Gabranth']
  ),
  'Heavy Armor': characters(
    ['WoL', 'Cecil', 'Bartz'],
    ['Garland', 'Golbez', 'Exdeath', 'Sephiroth', 'Gabranth']
  )
}

export const exclusiveSubcategories = [...allGameCharacters]

export function assignCharactersFromSubcategory(item) {
  if (item.category === 'Exclusive') {
    return {
      ...item,
      characters: [item.subcategory]
    }
  }

  if (item.characters?.length) {
    return item
  }

  if (item.category === 'Accessory' || item.category === 'Summon') {
    return {
      ...item,
      characters: allGameCharacters
    }
  }

  const charactersForSubcategory = subcategoryCharacterAssignments[item.subcategory]
  if (!charactersForSubcategory) {
    return item
  }

  return {
    ...item,
    characters: charactersForSubcategory
  }
}
