import { useMemo, useState } from 'react'
import SearchBar from './components/SearchBar'
import CategoryDropdown from './components/CategoryDropdown'
import ItemCard from './components/ItemCard'
import { items, categories } from './data/items'
import { exclusiveSubcategories } from './data/characterAssignments.js'

const letterRankOrder = {
  D: 1,
  C: 2,
  B: 3,
  A: 4,
  S: 5
}

function compareText(left, right) {
  return left.localeCompare(right, undefined, { sensitivity: 'base' })
}

function getRankSortValue(rank) {
  if (typeof rank === 'number') {
    return { group: 0, value: rank }
  }

  if (typeof rank === 'string') {
    const numericRank = Number(rank)
    if (!Number.isNaN(numericRank)) {
      return { group: 0, value: numericRank }
    }

    const letterRank = letterRankOrder[rank.toUpperCase()]
    if (letterRank) {
      return { group: 1, value: letterRank }
    }
  }

  return { group: 2, value: Number.POSITIVE_INFINITY }
}

function compareRank(leftRank, rightRank, direction) {
  const left = getRankSortValue(leftRank)
  const right = getRankSortValue(rightRank)

  if (left.group !== right.group) {
    return direction === 'asc' ? left.group - right.group : right.group - left.group
  }

  if (left.value !== right.value) {
    return direction === 'asc' ? left.value - right.value : right.value - left.value
  }

  return 0
}

function compareLevel(leftLevel, rightLevel, direction) {
  const left = typeof leftLevel === 'number' ? leftLevel : Number.POSITIVE_INFINITY
  const right = typeof rightLevel === 'number' ? rightLevel : Number.POSITIVE_INFINITY

  if (left !== right) {
    return direction === 'asc' ? left - right : right - left
  }

  return 0
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [minLevel, setMinLevel] = useState(0)
  const [maxLevel, setMaxLevel] = useState(100)
  const [selectedCharacter, setSelectedCharacter] = useState('all')
  const [selectedMethod, setSelectedMethod] = useState('all')
  const [selectedSort, setSelectedSort] = useState('default')

  const allCharacters = useMemo(() => {
    const chars = new Set()

    items.forEach(item => {
      if (item.characters) {
        item.characters.forEach(character => chars.add(character))
      }
    })

    return Array.from(chars).sort(compareText)
  }, [])

  const allMethods = useMemo(() => {
    const methods = new Set()

    items.forEach(item => {
      if (item.acquisition) {
        item.acquisition.forEach(acquisition => methods.add(acquisition.method))
      }
    })

    return Array.from(methods).sort(compareText)
  }, [])

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesName = item.name.toLowerCase().includes(query) ||
          (item.japaneseName && item.japaneseName.toLowerCase().includes(query))
        const matchesStats = item.stats && Object.entries(item.stats).some(
          ([key, value]) => key.toLowerCase().includes(query) || String(value).includes(query)
        )
        const matchesEffects = item.effects && item.effects.some(effect => (
          effect.toLowerCase().includes(query)
        ))

        if (!matchesName && !matchesStats && !matchesEffects) {
          return false
        }
      }

      if (selectedCategory !== 'all') {
        const categoryMap = {
          weapon: 'weapon',
          exclusive: 'exclusive',
          hand: 'hand equipment',
          head: 'head equipment',
          body: 'body equipment',
          accessory: 'accessory',
          summon: 'summon'
        }
        const targetCategory = categoryMap[selectedCategory.toLowerCase()]
        const itemCategoryLower = item.category ? item.category.toLowerCase() : ''

        if (itemCategoryLower !== targetCategory) {
          return false
        }
      }

      if (selectedSubcategory !== 'all' && item.subcategory !== selectedSubcategory) {
        return false
      }

      if (item.level !== undefined && (item.level < minLevel || item.level > maxLevel)) {
        return false
      }

      if (selectedCharacter !== 'all') {
        if (!item.characters || !item.characters.includes(selectedCharacter)) {
          return false
        }
      }

      if (selectedMethod !== 'all') {
        if (!item.acquisition || !item.acquisition.some(acquisition => acquisition.method === selectedMethod)) {
          return false
        }
      }

      return true
    })
  }, [
    searchQuery,
    selectedCategory,
    selectedSubcategory,
    minLevel,
    maxLevel,
    selectedCharacter,
    selectedMethod
  ])

  const sortedItems = useMemo(() => {
    const nextItems = [...filteredItems]

    switch (selectedSort) {
      case 'name-asc':
        nextItems.sort((left, right) => compareText(left.name, right.name))
        break
      case 'name-desc':
        nextItems.sort((left, right) => compareText(right.name, left.name))
        break
      case 'level-asc':
        nextItems.sort((left, right) => (
          compareLevel(left.level, right.level, 'asc') ||
          compareText(left.name, right.name)
        ))
        break
      case 'level-desc':
        nextItems.sort((left, right) => (
          compareLevel(left.level, right.level, 'desc') ||
          compareText(left.name, right.name)
        ))
        break
      case 'rank-asc':
        nextItems.sort((left, right) => (
          compareRank(left.rank, right.rank, 'asc') ||
          compareText(left.name, right.name)
        ))
        break
      case 'rank-desc':
        nextItems.sort((left, right) => (
          compareRank(left.rank, right.rank, 'desc') ||
          compareText(left.name, right.name)
        ))
        break
      case 'category-asc':
        nextItems.sort((left, right) => (
          compareText(left.category ?? '', right.category ?? '') ||
          compareText(left.subcategory ?? '', right.subcategory ?? '') ||
          compareText(left.name, right.name)
        ))
        break
      default:
        break
    }

    return nextItems
  }, [filteredItems, selectedSort])

  const subcategories = useMemo(() => {
    if (selectedCategory === 'all') {
      return []
    }

    const categoryMap = {
      weapon: 'weapon',
      exclusive: 'exclusive',
      hand: 'hand equipment',
      head: 'head equipment',
      body: 'body equipment',
      accessory: 'accessory',
      summon: 'summon'
    }

    const targetCategory = categoryMap[selectedCategory.toLowerCase()]
    const subcategorySet = new Set()

    items
      .filter(item => item.category && item.category.toLowerCase() === targetCategory)
      .forEach(item => {
        if (item.subcategory) {
          subcategorySet.add(item.subcategory)
        }
      })

    if (targetCategory === 'exclusive') {
      exclusiveSubcategories.forEach(subcategory => subcategorySet.add(subcategory))
    }

    return Array.from(subcategorySet).sort(compareText)
  }, [selectedCategory])

  function handleCategoryChange(category) {
    setSelectedCategory(category)
    setSelectedSubcategory('all')
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">⚔️</div>
            <div>
              <h1>Dissidia Final Fantasy</h1>
              <div className="logo-subtitle">Item Database</div>
            </div>
          </div>

          <div className="search-filters">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            <CategoryDropdown
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />

            {subcategories.length > 0 && (
              <select
                className="filter-select"
                value={selectedSubcategory}
                onChange={event => setSelectedSubcategory(event.target.value)}
              >
                <option value="all">All Subcategories</option>
                {subcategories.map(subcategory => (
                  <option key={subcategory} value={subcategory}>{subcategory}</option>
                ))}
              </select>
            )}

            <select
              className="filter-select"
              value={selectedCharacter}
              onChange={event => setSelectedCharacter(event.target.value)}
            >
              <option value="all">All Characters</option>
              {allCharacters.map(character => (
                <option key={character} value={character}>{character}</option>
              ))}
            </select>

            <select
              className="filter-select"
              value={selectedMethod}
              onChange={event => setSelectedMethod(event.target.value)}
            >
              <option value="all">All Methods</option>
              {allMethods.map(method => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>

            <select
              className="filter-select"
              value={selectedSort}
              onChange={event => setSelectedSort(event.target.value)}
            >
              <option value="default">Default Order</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="level-asc">Level: Low to High</option>
              <option value="level-desc">Level: High to Low</option>
              <option value="rank-asc">Rank: Low to High</option>
              <option value="rank-desc">Rank: High to Low</option>
              <option value="category-asc">Category: A to Z</option>
            </select>

            <div className="level-filter" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>Level Limit:</span>
              <input
                type="number"
                className="filter-select"
                style={{ width: '90px' }}
                min="0"
                max="100"
                value={minLevel}
                onChange={event => setMinLevel(Number(event.target.value))}
                placeholder="Min"
              />
              <span style={{ color: 'var(--text-muted)' }}>to</span>
              <input
                type="number"
                className="filter-select"
                style={{ width: '90px' }}
                min="0"
                max="100"
                value={maxLevel}
                onChange={event => setMaxLevel(Number(event.target.value))}
                placeholder="Max"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="results-info">
          <span className="results-count">
            Showing <strong>{sortedItems.length}</strong> of <strong>{items.length}</strong> items
          </span>
        </div>

        {sortedItems.length > 0 ? (
          <div className="item-grid">
            {sortedItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <div className="empty-title">No items found</div>
            <div className="empty-subtitle">
              Try adjusting your search or filters
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
