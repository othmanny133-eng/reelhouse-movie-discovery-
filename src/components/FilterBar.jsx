import { Search, SlidersHorizontal, ArrowDownWideNarrow, X } from 'lucide-react';
import { genres, sortOptions } from '../data/movies';

export default function FilterBar({ search, setSearch, genre, setGenre, sortBy, setSortBy, onClear, hasFilters }) {
  return (
    <form className="filter-panel" role="search" onSubmit={(event) => event.preventDefault()}>
      <div className="filter-field filter-search">
        <label htmlFor="movie-search">Search movies</label>
        <div className="input-with-icon"><Search size={19} aria-hidden="true"/><input id="movie-search" type="search" placeholder="Search by title or director..." value={search} onChange={(event) => setSearch(event.target.value)} /></div>
      </div>
      <div className="filter-field filter-genre">
        <label htmlFor="movie-genre">Genre</label>
        <div className="select-wrap"><SlidersHorizontal size={17} aria-hidden="true"/><select id="movie-genre" value={genre} onChange={(event) => setGenre(event.target.value)}>{genres.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>
      </div>
      <div className="filter-field filter-sort">
        <label htmlFor="movie-sort">Sort by</label>
        <div className="select-wrap"><ArrowDownWideNarrow size={18} aria-hidden="true"/><select id="movie-sort" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>{sortOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></div>
      </div>
      {hasFilters && <button className="clear-filters" type="button" onClick={onClear}><X size={16}/> Reset</button>}
    </form>
  );
}
