function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Поиск фильма..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  )
}

export default SearchBar