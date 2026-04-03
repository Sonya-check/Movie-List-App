import { useState } from 'react'

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim() || !genre.trim()) {
      return
    }

    onAddMovie(title, genre)
    setTitle('')
    setGenre('')
  }

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название фильма"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Жанр"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <button type="submit">Добавить</button>
    </form>
  )
}

export default MovieForm