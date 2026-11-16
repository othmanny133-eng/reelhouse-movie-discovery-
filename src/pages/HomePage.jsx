import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Sparkles, Clapperboard, Star, MoveUpRight } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import MovieCard from '../components/MovieCard';

export default function HomePage({ movies }) {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All genres');
  const [sortBy, setSortBy] = useState('rating-desc');

  const visibleMovies = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    const filtered = movies.filter((movie) => {
      const matchesSearch = !query || [movie.title, movie.director, movie.synopsis].some((value) => value.toLocaleLowerCase().includes(query));
      const matchesGenre = genre === 'All genres' || movie.genre === genre;
      return matchesSearch && matchesGenre;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === 'rating-desc') return b.rating - a.rating || a.title.localeCompare(b.title);
      if (sortBy === 'year-desc') return b.year - a.year || a.title.localeCompare(b.title);
      if (sortBy === 'year-asc') return a.year - b.year || a.title.localeCompare(b.title);
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      if (sortBy === 'title-desc') return b.title.localeCompare(a.title);
      return 0;
    });
  }, [movies, search, genre, sortBy]);

  const clearFilters = () => { setSearch(''); setGenre('All genres'); setSortBy('rating-desc'); };
  const hasFilters = search !== '' || genre !== 'All genres' || sortBy !== 'rating-desc';

  return (
    <>
      <section className="hero-section">
        <div className="hero-grain" aria-hidden="true"/>
        <div className="layout-wrap hero-inner">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-line"/> A HOME FOR FILM LOVERS</div>
            <h1>Every great night<br/>starts with a <em>story.</em></h1>
            <p>From quiet dramas to unforgettable adventures, discover films worth making time for. Your next favourite is waiting.</p>
            <div className="hero-actions"><a href="#collection" className="button button-gold">Explore the collection <ArrowRight size={18}/></a><Link to="/about" className="text-link">Get to know us <MoveUpRight size={16}/></Link></div>
            <div className="hero-social-proof"><div className="decorative-stars" aria-hidden="true"><Star/><Star/><Star/><Star/><Star/></div><span>Thoughtful picks for curious viewers</span></div>
          </div>
          <div className="hero-showcase" aria-label="Featured movie artwork">
            <div className="showcase-halo"/>
            <div className="back-poster back-poster-left"><img src="/posters/northbound.svg" alt="Northbound film illustration"/></div>
            <div className="back-poster back-poster-right"><img src="/posters/after-the-rain.svg" alt="After the Rain film illustration"/></div>
            <Link to="/movies/midnight-atlas" className="feature-poster"><img src="/posters/midnight-atlas.svg" alt="Midnight Atlas film illustration"/><span className="feature-poster-shade"/><span className="feature-poster-details"><small>THE FEATURED PICK</small><strong>MIDNIGHT<br/>ATLAS</strong><span>SCI-FI · 2025</span></span></Link>
            <div className="floating-rating"><span><Star size={15} fill="currentColor"/> 8.9</span><small>Editor's pick</small></div>
            <div className="floating-round"><Clapperboard size={20}/></div>
          </div>
        </div>
        <div className="layout-wrap hero-bottom"><div className="hero-index">01 <span>/</span> THE COLLECTION</div><a className="scroll-cue" href="#collection">Scroll to discover <ArrowDown size={15}/></a></div>
      </section>

      <section className="collection-section" id="collection" aria-labelledby="collection-heading">
        <div className="layout-wrap">
          <div className="collection-topline"><span className="section-kicker"><Sparkles size={15}/> CURATED FOR YOUR NEXT MOVIE NIGHT</span><span className="index-label">THE REELHOUSE EDIT / 001</span></div>
          <div className="collection-heading-row"><div><h2 id="collection-heading">Explore the <span>collection<span className="accent-period">.</span></span></h2><p>Good stories have a way of finding us. Let's find yours.</p></div><div className="collection-count"><strong>{movies.length.toString().padStart(2,'0')}</strong><span>FILMS TO EXPLORE</span></div></div>
          <FilterBar search={search} setSearch={setSearch} genre={genre} setGenre={setGenre} sortBy={sortBy} setSortBy={setSortBy} onClear={clearFilters} hasFilters={hasFilters} />
          <div className="results-row"><p aria-live="polite"><span className="result-indicator"/> Showing <strong>{visibleMovies.length}</strong> {visibleMovies.length === 1 ? 'film' : 'films'}{hasFilters ? ' matching your filters' : ' from our collection'}</p><span>HAND-PICKED STORIES, ALL IN ONE PLACE</span></div>
          {visibleMovies.length ? <div className="movie-grid">{visibleMovies.map((movie, index) => <MovieCard key={movie.id} movie={movie} index={index} />)}</div> : <div className="empty-state"><span className="empty-icon"><Clapperboard size={30}/></span><h3>No films found</h3><p>That combination didn't turn up anything. Try a different title, director, or genre.</p><button className="button button-gold" type="button" onClick={clearFilters}>Clear filters <ArrowRight size={16}/></button></div>}
        </div>
      </section>
      <section className="closing-banner"><div className="layout-wrap closing-inner"><div><span className="section-kicker">THE STORY CONTINUES</span><h2>Good films. Great conversations.</h2><p>Explore, discover, and enjoy the next chapter.</p></div><Link to="/about" className="button button-outline">Meet REELHOUSE <ArrowRight size={18}/></Link></div></section>
    </>
  );
}
