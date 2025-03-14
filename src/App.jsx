import { useState } from 'react';
import './App.css';
import MovieSearch from './components/MovieSearch';
import './components/MovieSearch.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='app-header'>
        <h1>Stockholm Movie Database</h1>
        <p className='app-subtitle'>Powered by Vite, React, and OMDb API</p>
      </div>

      <MovieSearch />

      <footer className='app-footer'>
        <p>
          Made with React (v19) and Vite (v6) |{' '}
          <a
            href='https://github.com/Jimmyh-world/BPextrodanaire'
            target='_blank'
            rel='noopener noreferrer'>
            GitHub Repository
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
