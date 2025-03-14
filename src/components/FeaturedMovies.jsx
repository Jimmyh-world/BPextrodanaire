import { useState, useEffect } from 'react';
import { getMovieDetails } from '../services/movieService';
import './FeaturedMovies.css';

/**
 * FeaturedMovies component that displays a curated collection of dystopian sci-fi films
 */
const FeaturedMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // List of IMDb IDs for notable dystopian sci-fi films
  const dystopianSciFiFilms = [
    'tt0133093', // The Matrix
    'tt0816692', // Interstellar
    'tt0470752', // Ex Machina
    'tt1535108', // Elysium
    'tt1392190', // Mad Max: Fury Road
    'tt1677720', // Ready Player One
  ];

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        setLoading(true);

        // Fetch details for all dystopian sci-fi films in parallel
        const moviesData = await Promise.all(
          dystopianSciFiFilms.map((imdbId) => getMovieDetails(imdbId))
        );

        setFeaturedMovies(moviesData);
      } catch (err) {
        console.error('Error fetching featured movies:', err);
        setError(
          'Failed to load featured dystopian sci-fi films. Please try again later.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedMovies();
  }, []);

  return (
    <div className='featured-movies'>
      <h2>Featured Dystopian Sci-Fi Films</h2>
      <p className='section-description'>
        Explore worlds of technological control, societal collapse, and human
        resistance in our curated collection of dystopian science fiction
        cinema.
      </p>

      {loading && (
        <div className='loading-container'>
          <div className='loading-spinner'></div>
          <p>Loading dystopian worlds...</p>
        </div>
      )}

      {error && <p className='error'>{error}</p>}

      {!loading && !error && (
        <div className='movies-grid'>
          {featuredMovies.map((movie) => (
            <div key={movie.imdbID} className='movie-card'>
              <div className='movie-poster'>
                {movie.Poster && movie.Poster !== 'N/A' ? (
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                ) : (
                  <div className='no-poster'>No Poster Available</div>
                )}
              </div>
              <div className='movie-info'>
                <h3>{movie.Title}</h3>
                <div className='movie-meta'>
                  <span>{movie.Year}</span>
                  <span className='rating'>{movie.imdbRating}/10</span>
                </div>
                <p className='movie-plot'>
                  {movie.Plot.length > 120
                    ? `${movie.Plot.substring(0, 120)}...`
                    : movie.Plot}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedMovies;
