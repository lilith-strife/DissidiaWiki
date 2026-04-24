function CategoryDropdown({ categories, selectedCategory, onCategoryChange }) {
  return (
    <select 
      className="filter-select"
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      <option value="all">All Categories</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>
          {cat.icon} {cat.name}
        </option>
      ))}
    </select>
  )
}

export default CategoryDropdown