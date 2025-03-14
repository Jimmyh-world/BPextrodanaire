import { useState } from 'react';
import { searchMovies } from '../services/movieService';

/**
 * MovieSearch component that allows searching for movies using the OMDb API
 */
const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Handle form submission and search for movies
   * @param {Event} e - Form submission event
   */
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const data = await searchMovies(query);
      setMovies(data.Search || []);

      if (data.Search?.length === 0) {
        setError('No movies found. Try a different search term.');
      }
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='movie-search'>
      <h2>Movie Search</h2>
      <p className='api-note'>
        Using OMDb API with key: {import.meta.env.VITE_OMDB_API_KEY}
      </p>

      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search for a movie...'
          aria-label='Search for a movie'
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p className='error'>{error}</p>}

      {movies.length > 0 && (
        <div className='movie-results'>
          <h3>Results</h3>
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <div className='movie-card'>
                  {movie.Poster && movie.Poster !== 'N/A' ? (
                    <img src={movie.Poster} alt={movie.Title} />
                  ) : (
                    <div className='no-poster'>No Poster</div>
                  )}
                  <div className='movie-info'>
                    <h4>{movie.Title}</h4>
                    <p>Year: {movie.Year}</p>
                    <p>Type: {movie.Type}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
