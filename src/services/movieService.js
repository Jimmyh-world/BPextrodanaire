/**
 * Movie Service
 *
 * Handles all interactions with the OMDb API
 */

// Get API key from environment variables (Vite exposes them through import.meta.env)
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'http://www.omdbapi.com';

/**
 * Search for movies by title
 * @param {string} query - Movie title to search for
 * @param {number} page - Optional page number for pagination (default: 1)
 * @returns {Promise<Object>} - Search results
 */
export const searchMovies = async (query, page = 1) => {
	try {
		const response = await fetch(
			`${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(
				query
			)}&page=${page}`
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		if (data.Error) {
			throw new Error(data.Error);
		}

		return data;
	} catch (error) {
		console.error('Error searching movies:', error);
		throw error;
	}
};

/**
 * Get detailed information about a specific movie by IMDB ID
 * @param {string} imdbID - The IMDB ID of the movie
 * @returns {Promise<Object>} - Detailed movie information
 */
export const getMovieDetails = async (imdbID) => {
	try {
		const response = await fetch(
			`${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}&plot=full`
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		console.log(data);

		if (data.Error) {
			throw new Error(data.Error);
		}

		return data;
	} catch (error) {
		console.error('Error fetching movie details:', error);
		throw error;
	}
};
