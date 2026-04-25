// Script to extract items from wiki HTML files
import { readFile, writeFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const wikisDir = path.join(__dirname, '..', 'Wikis')

// Map wiki files to JSON files
const wikiToJsonMap = {
  'head.txt': 'head-equipment.json',
  'body.txt': 'body-equipment.json',
  'hand.txt': 'hand-equipment.json',
  'accessory.txt': 'accessory.json',
  'sword.txt': 'weapon.json',
  'dagger.txt': 'weapon.json',
  'giant sword.txt': 'weapon.json',
  'katana.txt': 'weapon.json',
  'polearm.txt': 'weapon.json',
  'axe.txt': 'weapon.json',
  'rod.txt': 'weapon.json',
  'staff.txt': 'weapon.json',
  'throwing.txt': 'weapon.json',
  'hand-to-hand.txt': 'weapon.json',
  'instrument.txt': 'weapon.json',
  'machine.txt': 'weapon.json'
}

// Extract item name from a line
function extractItemName(line) {
  const match = line.match(/<td>([^<]+)<\/td>/)
  return match ? match[1].trim() : null
}

// Extract stats from a line
function extractStats(line) {
  const stats = {}
  const brvMatch = line.match(/BRV([+-]\d+)/i)
  const hpMatch = line.match(/HP\+(\d+)/i)
  const defMatch = line.match(/DEF\+(\d+)/i)
  const atkMatch = line.match(/ATK\+(\d+)/i)
  
  if (brvMatch) stats.BRV = parseInt(brvMatch[1])
  if (hpMatch) stats.HP = parseInt(hpMatch[1])
  if (defMatch) stats.DEF = parseInt(defMatch[1])
  if (atkMatch) stats.ATK = parseInt(atkMatch[1])
  
  return Object.keys(stats).length > 0 ? stats : null
}

// Extract level from a line
function extractLevel(line) {
  const match = line.match(/<td align="center">(\d+)<\/td>/)
  return match ? parseInt(match[1]) : null
}

// Extract acquisition method and detail
function extractAcquisition(lines, startIndex) {
  const acquisition = []
  
  for (let i = startIndex; i < Math.min(startIndex + 5, lines.length); i++) {
    const line = lines[i]
    const methodMatch = line.match(/<td>(Shop|Trade|Loot|Item Drop|Friend Card|Duel Coliseum|Base Item)<\/td>/)
    const detailMatch = line.match(/<td>([^<]+)<\/td>/)
    
    if (methodMatch && detailMatch) {
      acquisition.push({
        method: methodMatch[1],
        detail: detailMatch[1].replace(/\s+/g, ' ').trim()
      })
    }
  }
  
  return acquisition.length > 0 ? acquisition : null
}

// Parse wiki HTML and extract items
function parseWikiHtml(html) {
  const items = []
  
  // Find all table rows with item data
  // Pattern: Japanese name, English name, stats, level, method, detail
  const rowRegex = /<tr>\s*<td>([^<]*)<\/td>\s*<td>([^<]*)<\/td>\s*<td[^>]*>([^<]*(?:<[^>]*>[^<]*)*?)<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td>([^<]*)<\/td>\s*<td>([^<]*)<\/td>/g
  
  let match
  while ((match = rowRegex.exec(html)) !== null) {
    const [, japaneseName, englishName, statsHtml, level, method, detail] = match
    
    // Skip header rows and invalid data
    if (englishName.includes('Japanese') || englishName.includes('English') || 
        englishName.includes('Bonus') || !englishName.trim()) {
      continue
    }
    
    const item = {
      rank: 1,
      name: englishName.trim(),
      japaneseName: japaneseName.trim(),
      category: 'Head Equipment',
      subcategory: 'Helmet',
      stats: extractStats(statsHtml),
      level: parseInt(level),
      acquisition: []
    }
    
    if (method.trim() && method.trim() !== 'N/A') {
      item.acquisition.push({
        method: method.trim(),
        detail: detail.replace(/\s+/g, ' ').trim()
      })
    }
    
    items.push(item)
  }
  
  return items
}

// Main function
async function main() {
  try {
    const files = await readdir(wikisDir)
    const wikiFiles = files.filter(f => f.endsWith('.txt') && !f.includes('-items'))
    
    console.log('Wiki files found:', wikiFiles)
    
    for (const wikiFile of wikiFiles) {
      console.log(`\nProcessing ${wikiFile}...`)
      const wikiPath = path.join(wikisDir, wikiFile)
      const html = await readFile(wikiPath, 'utf8')
      
      const items = parseWikiHtml(html)
      console.log(`Found ${items.length} items`)
      
      // Show first few items
      items.slice(0, 3).forEach(item => {
        console.log(`  - ${item.name}: level ${item.level}, stats: ${JSON.stringify(item.stats)}`)
      })
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

main()