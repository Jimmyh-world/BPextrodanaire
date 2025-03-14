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

	const handleSearch = async (e) => {
		e.preventDefault();

		if (!query.trim()) return;

		try {
			setLoading(true);
			setError(null);

			const data = await searchMovies(query);
			setMovies(data.Search || []);

			if (data.Search?.length === 0) {
				setError(
					'No films found in this timeline. Try a different search term.'
				);
			}
		} catch (err) {
			setError(err.message);
			setMovies([]);
		} finally {
			setLoading(false);
		}
	};

	// Suggestions for dystopian sci-fi searches
	const suggestions = [
		'Blade Runner',
		'Matrix',
		'Hunger Games',
		'Divergent',
		'Dystopia',
		'Apocalypse',
	];

	const handleSuggestionClick = (suggestion) => {
		setQuery(suggestion);
		// Submit the form programmatically
		handleSearch({ preventDefault: () => {} });
	};

	return (
		<div className='movie-search'>
			<h2>Search the Archives</h2>
			<p className='search-description'>
				Dive into our collection of dystopian worlds and bleak futures.
				Discover films that explore the dark side of technology,
				society, and human nature.
			</p>

			<form onSubmit={handleSearch}>
				<div className='search-container'>
					<input
						type='text'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder='Search for dystopian sci-fi films...'
						aria-label='Search for dystopian sci-fi films'
					/>
					<button type='submit' disabled={loading}>
						{loading ? 'Searching...' : 'Search'}
					</button>
				</div>

				<div className='search-suggestions'>
					<span>Try searching: </span>
					{suggestions.map((suggestion, index) => (
						<button
							key={index}
							type='button'
							className='suggestion-tag'
							onClick={() => handleSuggestionClick(suggestion)}>
							{suggestion}
						</button>
					))}
				</div>
			</form>

			{loading && (
				<div className='loading-container'>
					<div className='loading-spinner'></div>
					<p>Scanning future records...</p>
				</div>
			)}

			{error && <p className='error'>{error}</p>}

			{movies.length > 0 && (
				<div className='movie-results'>
					<h3>Search Results</h3>
					<div className='movies-grid'>
						{movies.map((movie) => (
							<div key={movie.imdbID} className='movie-card'>
								<div className='movie-poster'>
									{movie.Poster && movie.Poster !== 'N/A' ? (
										<img
											src={movie.Poster}
											alt={movie.Title}
										/>
									) : (
										<div className='no-poster'>
											No Visuals Available
										</div>
									)}
								</div>
								<div className='movie-info'>
									<h4>{movie.Title}</h4>
									<div className='movie-meta'>
										<span>{movie.Year}</span>
										<span>{movie.Type}</span>
									</div>
									<div className='movie-actions'>
										<button className='view-details-btn'>
											View Details
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default MovieSearch;
