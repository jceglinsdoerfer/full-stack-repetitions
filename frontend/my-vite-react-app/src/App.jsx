import { useState, useContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
  fetch('8000/movies')
    .then(data => {
      setFavMovies(data);                             
    })
    .catch(err => {
      console.error('Fetch failed:', err);
    });
}, []);

  return (
    <>
      <div>
        <h1>Favorite Movies</h1>
      </div>
      <ul>
        {favMovies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year})                 
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
