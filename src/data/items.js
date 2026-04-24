import accessoryItems from './items/accessory.json'
import bodyEquipmentItems from './items/body-equipment.json'
import handEquipmentItems from './items/hand-equipment.json'
import headEquipmentItems from './items/head-equipment.json'
import summonItems from './items/summon.json'
import weaponItems from './items/weapon.json'
import { categories } from './categories'

export { categories }

export const items = [
  ...weaponItems,
  ...handEquipmentItems,
  ...headEquipmentItems,
  ...bodyEquipmentItems,
  ...accessoryItems,
  ...summonItems
]

export default items
