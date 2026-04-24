import { useState, useMemo } from 'react'
import SearchBar from './components/SearchBar'
import CategoryDropdown from './components/CategoryDropdown'
import ItemCard from './components/ItemCard'
import { items, categories } from './data/items'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [minLevel, setMinLevel] = useState(0)
  const [maxLevel, setMaxLevel] = useState(100)
  const [selectedCharacter, setSelectedCharacter] = useState('all')
  const [selectedMethod, setSelectedMethod] = useState('all')

  // Get unique characters from all items
  const allCharacters = useMemo(() => {
    const chars = new Set()
    items.forEach(item => {
      if (item.characters) {
        item.characters.forEach(c => chars.add(c))
      }
    })
    return Array.from(chars).sort()
  }, [])

  // Get unique acquisition methods
  const allMethods = useMemo(() => {
    const methods = new Set()
    items.forEach(item => {
      if (item.acquisition) {
        item.acquisition.forEach(a => methods.add(a.method))
      }
    })
    return Array.from(methods).sort()
  }, [])

  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesName = item.name.toLowerCase().includes(query) ||
          (item.japaneseName && item.japaneseName.toLowerCase().includes(query))
        const matchesStats = item.stats && Object.entries(item.stats).some(
          ([key, val]) => key.toLowerCase().includes(query) || String(val).includes(query)
        )
        const matchesEffects = item.effects && item.effects.some(e => 
          e.toLowerCase().includes(query)
        )
        if (!matchesName && !matchesStats && !matchesEffects) return false
      }

      // Category filter
      if (selectedCategory !== 'all') {
        const categoryId = selectedCategory.toLowerCase()
        const itemCategoryLower = item.category ? item.category.toLowerCase() : ''
        // Handle special cases: 'hand' maps to 'Hand Equipment', etc.
        const categoryMap = {
          'weapon': 'weapon',
          'hand': 'hand equipment',
          'head': 'head equipment',
          'body': 'body equipment',
          'accessory': 'accessory',
          'summon': 'summon'
        }
        const targetCategory = categoryMap[categoryId]
        if (itemCategoryLower !== targetCategory) return false
      }

      // Subcategory filter
      if (selectedSubcategory !== 'all' && item.subcategory !== selectedSubcategory) {
        return false
      }

      // Level filter
      if (item.level !== undefined) {
        if (item.level < minLevel || item.level > maxLevel) return false
      }

      // Character filter
      if (selectedCharacter !== 'all' && item.characters) {
        if (!item.characters.includes(selectedCharacter)) return false
      }

      // Acquisition method filter
      if (selectedMethod !== 'all' && item.acquisition) {
        const hasMethod = item.acquisition.some(a => a.method === selectedMethod)
        if (!hasMethod) return false
      }

      return true
    })
  }, [searchQuery, selectedCategory, selectedSubcategory, minLevel, maxLevel, selectedCharacter, selectedMethod])

  // Get subcategories for selected category
  const subcategories = useMemo(() => {
    if (selectedCategory === 'all') {
      return []
    }
    const subs = new Set()
    const categoryMap = {
      'weapon': 'weapon',
      'hand': 'hand equipment',
      'head': 'head equipment',
      'body': 'body equipment',
      'accessory': 'accessory',
      'summon': 'summon'
    }
    const targetCategory = categoryMap[selectedCategory.toLowerCase()]
    items.filter(i => i.category && i.category.toLowerCase() === targetCategory).forEach(item => {
      if (item.subcategory) subs.add(item.subcategory)
    })
    return Array.from(subs).sort()
  }, [selectedCategory])

  const handleCategoryChange = (category) => {
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
            <SearchBar 
              value={searchQuery} 
              onChange={setSearchQuery} 
            />
            
            <CategoryDropdown
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />

            {subcategories.length > 0 && (
              <select 
                className="filter-select"
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
              >
                <option value="all">All Subcategories</option>
                {subcategories.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            )}

            <select 
              className="filter-select"
              value={selectedCharacter}
              onChange={(e) => setSelectedCharacter(e.target.value)}
            >
              <option value="all">All Characters</option>
              {allCharacters.map(char => (
                <option key={char} value={char}>{char}</option>
              ))}
            </select>

            <select 
              className="filter-select"
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
            >
              <option value="all">All Methods</option>
              {allMethods.map(method => (
                <option key={method} value={method}>{method}</option>
              ))}
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
                onChange={(e) => setMinLevel(Number(e.target.value))}
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
                onChange={(e) => setMaxLevel(Number(e.target.value))}
                placeholder="Max"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="results-info">
          <span className="results-count">
            Showing <strong>{filteredItems.length}</strong> of <strong>{items.length}</strong> items
          </span>
        </div>

        {filteredItems.length > 0 ? (
          <div className="item-grid">
            {filteredItems.map(item => (
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