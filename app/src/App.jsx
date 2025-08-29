import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [ movies, setMovies ] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/movies')
            .then( res => res.json())
            .then( movieList => setMovies(movieList))
    }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <div>
            {movies.map(movie => {
                return(
                    <>
                        <h1>{movie.title}</h1>
                        <h2>{movie.main_character}</h2>
                        <h2>{movie.year_released}</h2>
                    </>


                )
            })}
        </div>
    </>
  )
}

export default App
