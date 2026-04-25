import accessoryItems from './items/accessory.json' with { type: 'json' }
import bodyEquipmentItems from './items/body-equipment.json' with { type: 'json' }
import exclusiveItems from './items/exclusive.json' with { type: 'json' }
import handEquipmentItems from './items/hand-equipment.json' with { type: 'json' }
import headEquipmentItems from './items/head-equipment.json' with { type: 'json' }
import summonItems from './items/summon.json' with { type: 'json' }
import weaponItems from './items/weapon.json' with { type: 'json' }
import { categories } from './categories.js'
import { assignCharactersFromSubcategory } from './characterAssignments.js'
import { getGuideItem, getGuideLookupKey, guideItems } from './guideSupplement.js'

export { categories }

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\+/g, ' plus ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function mergeGuideData(item) {
  const preserveBaseRank = item.category === 'Accessory' || item.category === 'Summon'
  const guideItem = getGuideItem(item.category, item.name)

  if (!guideItem) {
    if (preserveBaseRank) {
      return item
    }

    const { rank, ...baseItem } = item
    return baseItem
  }

  const { name, ...guideData } = guideItem
  const hasGuideRank = Object.prototype.hasOwnProperty.call(guideItem, 'rank')
  const hasGuideBattleRise = Object.prototype.hasOwnProperty.call(guideItem, 'battleRise')

  return {
    ...item,
    ...guideData,
    rank: hasGuideRank ? guideItem.rank : preserveBaseRank ? item.rank : undefined,
    battleRise: hasGuideBattleRise ? guideItem.battleRise : item.battleRise,
    acquisition: item.acquisition?.length ? item.acquisition : guideItem.acquisition
  }
}

function appendMissingGuideItems(sourceItems) {
  const seenGuideKeys = new Set(
    sourceItems.map(item => getGuideLookupKey(item.category, item.name))
  )

  const missingGuideItems = guideItems.filter(
    item => !seenGuideKeys.has(getGuideLookupKey(item.category, item.name))
  )

  return [...sourceItems, ...missingGuideItems]
}

function assignGeneratedIds(sourceItems) {
  const seenIds = new Map()

  return sourceItems.map(item => {
    const parts = [item.category, item.subcategory, item.name].filter(Boolean)
    const baseId = parts.map(slugify).join('__')
    const collisionCount = seenIds.get(baseId) ?? 0
    seenIds.set(baseId, collisionCount + 1)

    return {
      ...item,
      id: collisionCount === 0 ? baseId : `${baseId}__${collisionCount + 1}`
    }
  })
}

const baseItems = [
  ...weaponItems,
  ...exclusiveItems,
  ...handEquipmentItems,
  ...headEquipmentItems,
  ...bodyEquipmentItems,
  ...accessoryItems,
  ...summonItems
].map(mergeGuideData)

export const items = assignGeneratedIds(
  appendMissingGuideItems(baseItems).map(assignCharactersFromSubcategory)
)

export default items
