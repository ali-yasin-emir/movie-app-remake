import './App.css';
import MovieCard from './MovieCard.jsx';
import searchImage from './search.svg';
import notFound from './notFound.gif';
import { useEffect, useLayoutEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const API_URL = `https://www.omdbapi.com/?s=${title}&apikey=c06e2dce`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('spiderman');
    console.log('useEffect');
  }, []);

  return (
    <div className='app'>
      <div className='container'>
        <h1 className='header'>Movie App</h1>
        <div className='search-box'>
          <input
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
            className='search-field'
            type='text'
            placeholder='Search movies...'
          ></input>
          <img
            onClick={() => {
              searchMovies(searchTerm);
            }}
            className='search-icon'
            src={searchImage}
          ></img>
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className='movie-container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h1>Movie has not been found...</h1>
          <img className='totoro' src={notFound} />
          <svg
            className='waves'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill='#0099ff'
              fill-opacity='0.6'
              d='M0,32L21.8,42.7C43.6,53,87,75,131,74.7C174.5,75,218,53,262,80C305.5,107,349,181,393,197.3C436.4,213,480,171,524,160C567.3,149,611,171,655,170.7C698.2,171,742,149,785,128C829.1,107,873,85,916,96C960,107,1004,149,1047,165.3C1090.9,181,1135,171,1178,144C1221.8,117,1265,75,1309,64C1352.7,53,1396,75,1418,85.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z'
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
}

export default App;
