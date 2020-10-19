import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (
    <div>
      <h1>Movies Page</h1>
       {movies.map((movie, idx) => {
         return (
            <div key={idx}>
              <h2>{movie.title}</h2>
              <h5>Time: {movie.time}</h5>
              <ul>
                { movie.genres.map((genre, idx) => {
                  return(
                  <li key={idx}>{genre}</li>
                  )
                })}
              </ul>
            </div>
         )
       })}
    </div>
  );
};

export default Movies;
