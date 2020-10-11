import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderMovies = movies => {
    return movies.map(movie => {
    return <li>{movie}</li>
    })
  }

  const renderActors = () => {
    return actors.map(actor => {
      return <div>
        <h2>{actor.name}</h2>
        <ul>Movies:
          {renderMovies(actor.movies)}
        </ul>
      </div>
    })
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
