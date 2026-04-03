function FilterButtons({ currentFilter, onFilterChange }) {
  return (
    <div className="filters">
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => onFilterChange('all')}
      >
        Все
      </button>

      <button
        className={currentFilter === 'watched' ? 'active' : ''}
        onClick={() => onFilterChange('watched')}
      >
        Просмотренные
      </button>

      <button
        className={currentFilter === 'unwatched' ? 'active' : ''}
        onClick={() => onFilterChange('unwatched')}
      >
        Не просмотренные
      </button>
    </div>
  )
}

export default FilterButtons