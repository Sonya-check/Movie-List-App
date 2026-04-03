import { useState } from 'react'

function MovieItem({ movie, onDelete, onToggleWatched, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(movie.title)

  const handleSave = () => {
    if (!newTitle.trim()) {
      return
    }

    onEdit(movie.id, newTitle)
    setIsEditing(false)
  }

  return (
    <div className={`movie-item ${movie.watched ? 'watched' : ''}`}>
      {isEditing ? (
        <div className="edit-block">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Сохранить</button>
        </div>
      ) : (
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>Жанр: {movie.genre}</p>
          <p>{movie.watched ? 'Просмотрен' : 'Не просмотрен'}</p>
        </div>
      )}

      <div className="movie-actions">
        <button onClick={() => onToggleWatched(movie.id)}>
          {movie.watched ? 'Убрать отметку' : 'Отметить просмотренным'}
        </button>

        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Отмена' : 'Редактировать'}
        </button>

        <button onClick={() => onDelete(movie.id)}>Удалить</button>
      </div>
    </div>
  )
}

export default MovieItem