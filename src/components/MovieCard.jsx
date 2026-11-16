import { Link } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';

export default function MovieCard({ movie, index }) {
  return (
    <article className="movie-card" style={{ '--card-delay': `${Math.min(index, 9) * 45}ms` }}>
      <Link className="poster-link" to={`/movies/${movie.id}`} aria-label={`View details for ${movie.title}`}>
        <img className="movie-poster" src={movie.poster} alt={`Original illustration for ${movie.title}`} loading="lazy" />
        <span className="poster-vignette" aria-hidden="true" />
        <span className="genre-pill">{movie.genre}</span>
        <span className="rating-pill"><Star size={13} fill="currentColor" aria-hidden="true"/> {movie.rating.toFixed(1)}</span>
        <span className="poster-open" aria-hidden="true"><ArrowUpRight size={20}/></span>
      </Link>
      <div className="card-meta"><span>{movie.year}</span><span className="meta-separator" aria-hidden="true"/> <span>{movie.duration} min</span></div>
      <h3 className="card-title"><Link to={`/movies/${movie.id}`}>{movie.title}</Link></h3>
      <p className="card-description">{movie.synopsis}</p>
    </article>
  );
}
