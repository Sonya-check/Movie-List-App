import MovieItem from './MovieItem'

function MovieList({ movies, onDelete, onToggleWatched, onEdit }) {
  return (
    <div className="movie-list">
      {/* Если массив пустой, выведем текст прямо здесь */}
      {movies.length === 0 && <p>Массив movies пуст!</p>}
      
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
          onToggleWatched={onToggleWatched}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default MovieList