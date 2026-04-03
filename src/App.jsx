import { useState } from 'react'
import './App.css'
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import FilterButtons from './components/FilterButtons'

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', genre: 'Sci-Fi', watched: false },
    { id: 2, title: 'Interstellar', genre: 'Sci-Fi', watched: true },
    { id: 3, title: 'Titanic', genre: 'Drama', watched: false },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const addMovie = (title, genre) => {
    const newMovie = {
      id: Date.now(),
      title,
      genre,
      watched: false,
    }

    setMovies([...movies, newMovie])
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    )
  }

  const editMovie = (id, newTitle) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, title: newTitle } : movie
      )
    )
  }

  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((movie) => {
      if (filter === 'watched') return movie.watched
      if (filter === 'unwatched') return !movie.watched
      return true
    })

  return (
    <div className="app">
      <h1>Movie List App</h1>

      <MovieForm onAddMovie={addMovie} />

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

      {filteredMovies.length > 0 ? (
        <MovieList
          movies={filteredMovies}
          onDelete={deleteMovie}
          onToggleWatched={toggleWatched}
          onEdit={editMovie}
        />
      ) : (
        <p className="empty-message">Ничего не найдено</p>
      )}
    </div>
  )
}

export default App