import React, { useState } from "react";
import { movies } from "../data/data";
import { Link } from "react-router-dom";

const ShowMovie = () => {
  const [randomMovies, setRandomMovies] = useState(null);

  const moviesFilm = movies[0].homeMovies.map((e) => e);
  const random = Math.round(Math.random() * moviesFilm.length);

  return (
    <Link to={`/about/:${moviesFilm[random].name}`} state={moviesFilm[random]}>
      <div className="w-full h-screen sm:h-[600px] cursor-pointer">
        <div className="w-full h-full">
          <img
            className="w-full h-screen sm:h-[600px]"
            src={moviesFilm[random].cover_img}
            alt=""
          />
        </div>
        <div className="w-full h-screen sm:h-[600px] bg-black/70 absolute top-0 left-0"></div>
      </div>
    </Link>
  );
};

export default ShowMovie;
