import { useState } from 'react';
import './App.css';
import MovieSearch from './components/MovieSearch';
import FeaturedMovies from './components/FeaturedMovies';
import './components/MovieSearch.css';

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='dystopian-theme'>
      <div className='app-header'>
        <h1>Dystopian Visions</h1>
        <p className='app-subtitle'>
          Exploring the Dark Futures of Science Fiction Cinema
        </p>
        <button
          className='toggle-search-btn'
          onClick={() => setShowSearch(!showSearch)}>
          {showSearch ? 'View Featured Films' : 'Search All Films'}
        </button>
      </div>

      {showSearch ? <MovieSearch /> : <FeaturedMovies />}

      <footer className='app-footer'>
        <p>
          Built with React & Vite | Powered by OMDb API |
          <a
            href='https://github.com/Jimmyh-world/BPextrodanaire'
            target='_blank'
            rel='noopener noreferrer'>
            GitHub Repository
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
