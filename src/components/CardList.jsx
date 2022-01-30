import React from "react";
import "./Card.css";

export default function CardList(props) {
  console.log(props.moviesList);
  return (
    <div className="card-container">
      {props.moviesList.map((movie) => (
        <div className="card" key={movie.id}>
          <h5 className="card-title">{movie.title}</h5>

          <div className="card-body">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="card-over">
              <h4 className="over-title">{movie.title}</h4>

              <p className="card-text">{movie.overview}</p>
              <div className="average">
                <span>Average: {movie.vote_average}</span>
                <span>Release date: {movie.release_date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
