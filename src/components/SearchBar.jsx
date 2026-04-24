function SearchBar({ value, onChange }) {
  return (
    <div className="search-container">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search items..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar