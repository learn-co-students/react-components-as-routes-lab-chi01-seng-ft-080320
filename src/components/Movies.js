import React from 'react';
import { movies } from '../data';


const Movies = () => {
  console.log('hit')
  const renderGenres = genres => {
    return genres.map(genre => {
      return <li>{genre}</li>
    })
  }
  const renderMovies = () => {
    return movies.map(movie => {
      return <div>
        <h2>{movie.title}</h2>
        <p>Time: {movie.time} minutes</p>
        <ul>Genres: {renderGenres(movie.genres)}
        </ul>
      </div>
    })
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
