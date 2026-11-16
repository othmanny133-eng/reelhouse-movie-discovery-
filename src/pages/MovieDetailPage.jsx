import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clapperboard, Clock3, Globe2, Star, UserRound } from 'lucide-react';
import { minutesToTime } from '../data/movies';

export default function MovieDetailPage({ movies }) {
  const { movieId } = useParams();
  const movie = movies.find((item) => item.id === movieId);
  if (!movie) {
    return <section className="detail-missing layout-wrap"><Clapperboard size={44}/><h1>Film not found</h1><p>This title isn't in the collection.</p><Link to="/" className="button button-gold">Back to collection <ArrowRight size={17}/></Link></section>;
  }

  return (
    <section className="movie-detail">
      <div className="layout-wrap"><Link className="back-link" to="/"><ArrowLeft size={18}/> Back to collection</Link>
        <div className="detail-layout"><div className="detail-poster"><img src={movie.poster} alt={`Cinematic photograph representing ${movie.title}`}/></div>
          <div className="detail-content"><span className="eyebrow detail-eyebrow"><span className="eyebrow-line"/> THE REELHOUSE COLLECTION</span><h1>{movie.title}<span>.</span></h1><div className="detail-tags"><span>{movie.genre}</span><span>{movie.year}</span><span>{minutesToTime(movie.duration)}</span></div><p className="detail-lede">{movie.synopsis}</p>
          <div className="detail-rating"><Star size={22} fill="currentColor"/><strong>{movie.rating.toFixed(1)}</strong><span>/ 10 · Collection rating</span></div>
          <div className="detail-facts"><div><UserRound size={18}/><span>Directed by</span><strong>{movie.director}</strong></div><div><Globe2 size={18}/><span>Language</span><strong>{movie.language}</strong></div><div><Clock3 size={18}/><span>Runtime</span><strong>{minutesToTime(movie.duration)}</strong></div></div>
          <div className="detail-callout">This is a sample film record included in our front-end prototype. More features are planned for the full application.</div>
          <Link className="button button-gold" to="/">Discover more films <ArrowRight size={18}/></Link></div>
        </div>
      </div>
    </section>
  );
}
