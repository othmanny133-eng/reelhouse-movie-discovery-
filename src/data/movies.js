/**
 * A small, fictional movie catalog for the first project milestone.
 * All records are local; API/database integration belongs to Milestone 2.
 */
export const movieCatalog = [
  {
    id: 'midnight-atlas', title: 'Midnight Atlas', genre: 'Sci-Fi', year: 2025,
    rating: 8.9, duration: 136, language: 'English', director: 'Elena Brooks',
    synopsis: 'When a cartographer finds a map of places that do not exist, she follows its coordinates into a mystery larger than the night sky.',
    poster: '/posters/midnight-atlas.svg', accent: '#b6a4ff', featured: true,
  },
  {
    id: 'the-last-signal', title: 'The Last Signal', genre: 'Thriller', year: 2024,
    rating: 8.4, duration: 118, language: 'English', director: 'David Keane',
    synopsis: 'A radio engineer begins receiving messages from a station that disappeared twenty years earlier.',
    poster: '/posters/the-last-signal.svg', accent: '#e8a78c', featured: false,
  },
  {
    id: 'silver-tides', title: 'Silver Tides', genre: 'Drama', year: 2022,
    rating: 8.1, duration: 109, language: 'English', director: 'Maya Cole',
    synopsis: 'Two estranged siblings reunite on a quiet coast to settle their family history and find a new beginning.',
    poster: '/posters/silver-tides.svg', accent: '#9dd8dd', featured: false,
  },
  {
    id: 'after-the-rain', title: 'After the Rain', genre: 'Romance', year: 2023,
    rating: 7.8, duration: 104, language: 'French', director: 'Camille Laurent',
    synopsis: 'A chance meeting at a small train station grows into a story about timing, second chances, and the courage to stay.',
    poster: '/posters/after-the-rain.svg', accent: '#edb4b8', featured: false,
  },
  {
    id: 'northbound', title: 'Northbound', genre: 'Adventure', year: 2025,
    rating: 8.6, duration: 127, language: 'English', director: 'Jonas Reed',
    synopsis: 'An exhausted explorer and a young photographer cross a remote mountain range in search of a lost research camp.',
    poster: '/posters/northbound.svg', accent: '#b8d5a6', featured: false,
  },
  {
    id: 'the-quiet-hour', title: 'The Quiet Hour', genre: 'Mystery', year: 2021,
    rating: 7.9, duration: 112, language: 'English', director: 'Nora Finch',
    synopsis: 'Each evening, every clock in a hillside town stops for one minute. One visitor decides to discover why.',
    poster: '/posters/the-quiet-hour.svg', accent: '#d1c3eb', featured: false,
  },
  {
    id: 'golden-horizon', title: 'Golden Horizon', genre: 'Adventure', year: 2024,
    rating: 8.2, duration: 121, language: 'Spanish', director: 'Marco Solis',
    synopsis: 'An unlikely crew travels across a sunlit desert following the journals of a forgotten astronomer.',
    poster: '/posters/golden-horizon.svg', accent: '#fac78c', featured: false,
  },
  {
    id: 'parallel-lines', title: 'Parallel Lines', genre: 'Sci-Fi', year: 2023,
    rating: 8.7, duration: 132, language: 'English', director: 'Ari Nakamura',
    synopsis: 'A physicist discovers that a small decision in one world can reshape the lives of strangers in another.',
    poster: '/posters/parallel-lines.svg', accent: '#88c8f5', featured: false,
  },
  {
    id: 'paper-moons', title: 'Paper Moons', genre: 'Drama', year: 2020,
    rating: 7.7, duration: 101, language: 'Italian', director: 'Sofia Bellini',
    synopsis: 'A retired theatre designer rebuilds the miniature sets of his past and finds an unexpected audience.',
    poster: '/posters/paper-moons.svg', accent: '#e7d1ad', featured: false,
  },
  {
    id: 'blue-orchard', title: 'Blue Orchard', genre: 'Romance', year: 2022,
    rating: 7.6, duration: 107, language: 'English', director: 'Hannah Wells',
    synopsis: 'Returning to her hometown for one summer, a botanist reconnects with an old friend and an unfinished promise.',
    poster: '/posters/blue-orchard.svg', accent: '#a5c7ec', featured: false,
  },
  {
    id: 'echoes-of-tomorrow', title: 'Echoes of Tomorrow', genre: 'Sci-Fi', year: 2025,
    rating: 8.5, duration: 125, language: 'English', director: 'Lucas Hart',
    synopsis: 'A sound archivist is tasked with preserving voices from the future before the recordings begin to disappear.',
    poster: '/posters/echoes-of-tomorrow.svg', accent: '#c2c0fa', featured: false,
  },
  {
    id: 'the-vanishing-room', title: 'The Vanishing Room', genre: 'Thriller', year: 2021,
    rating: 8.0, duration: 115, language: 'English', director: 'Rhea Morgan',
    synopsis: 'During a routine hotel renovation, a hidden doorway reveals a room that should not fit inside the building.',
    poster: '/posters/the-vanishing-room.svg', accent: '#d9a3ae', featured: false,
  },
];

export const genres = ['All genres', ...new Set(movieCatalog.map((movie) => movie.genre))];

export const sortOptions = [
  { value: 'rating-desc', label: 'Highest rated' },
  { value: 'year-desc', label: 'Newest first' },
  { value: 'year-asc', label: 'Oldest first' },
  { value: 'title-asc', label: 'Title A–Z' },
  { value: 'title-desc', label: 'Title Z–A' },
];

export function minutesToTime(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}h ${minutes}m`;
}
