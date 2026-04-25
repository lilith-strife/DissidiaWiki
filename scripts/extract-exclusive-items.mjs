import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataDir = path.join(__dirname, '..', 'src', 'data', 'items')
const weaponPath = path.join(dataDir, 'weapon.json')
const exclusivePath = path.join(dataDir, 'exclusive.json')

const exclusiveMap = {
  Revolver: 'Squall',
  'Buster Sword': 'Cloud',
  'Sword of Darkness': 'Cecil',
  'Crime & Penalty': 'Squall',
  'Butterfly Edge': 'Cloud',
  'Wild Rose': 'Firion',
  "Maduin's Horn": 'Terra',
  'Onion Sword': 'Onion Knight',
  'Genji Katana': 'Garland'
}

const weaponItems = JSON.parse(await readFile(weaponPath, 'utf8'))
const exclusiveItems = []
const remainingWeapons = []

for (const item of weaponItems) {
  if (item.subcategory === 'Personal') {
    exclusiveItems.push({
      ...item,
      category: 'Exclusive',
      subcategory: exclusiveMap[item.name] ?? item.subcategory
    })
    continue
  }

  remainingWeapons.push(item)
}

await writeFile(weaponPath, `${JSON.stringify(remainingWeapons, null, 2)}\n`, 'utf8')
await writeFile(exclusivePath, `${JSON.stringify(exclusiveItems, null, 2)}\n`, 'utf8')
