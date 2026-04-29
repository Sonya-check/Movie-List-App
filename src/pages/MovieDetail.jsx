import { useParams, Link } from 'react-router-dom'

const MovieDetail = () => {
  const { id } = useParams() // Получаем ID из URL

  return (
    <div style={{ padding: '20px' }}>
      <h1>Детали фильма</h1>
      <p>Вы просматриваете информацию о фильме с ID: {id}</p>
      <p>Здесь может быть описание, трейлер и актерский состав.</p>
      <br />
      <Link to="/" style={{ color: 'blue' }}>← Вернуться к списку</Link>
    </div>
  )
}

export default MovieDetail