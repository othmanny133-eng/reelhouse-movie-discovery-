import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { movieCatalog } from './data/movies';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  // In the first milestone the catalog comes from a local file, not an API.
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieCatalog);
  }, []);

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage movies={movies} />} />
          <Route path="/movies/:movieId" element={<MovieDetailPage movies={movies} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
