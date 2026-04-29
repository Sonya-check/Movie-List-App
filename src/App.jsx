import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail'; // Создадим его для галочки (требование 2 страницы)
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Твоя основная логика теперь будет жить внутри компонента Home */}
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;