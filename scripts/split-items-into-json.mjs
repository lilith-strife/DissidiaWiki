import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { categories, items } from '../src/data/items.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')
const outputDir = path.join(repoRoot, 'src', 'data', 'items')

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

await mkdir(outputDir, { recursive: true })

const itemsByCategory = new Map()
for (const item of items) {
  const key = item.category
  const entry = { rank: item.rank ?? 1, ...item }
  if (!itemsByCategory.has(key)) {
    itemsByCategory.set(key, [])
  }
  itemsByCategory.get(key).push(entry)
}

for (const [category, categoryItems] of itemsByCategory) {
  const filename = `${slugify(category)}.json`
  await writeFile(
    path.join(outputDir, filename),
    `${JSON.stringify(categoryItems, null, 2)}\n`,
    'utf8'
  )
}

const categoriesSource = [
  `export const categories = ${JSON.stringify(categories, null, 2)}`,
  '',
  'export default categories',
  ''
].join('\n')

await writeFile(path.join(repoRoot, 'src', 'data', 'categories.js'), categoriesSource, 'utf8')
