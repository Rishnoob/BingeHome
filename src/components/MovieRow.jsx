import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const MovieRow = ({ genre, url, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  function slideLeft() {
    var slider = document.getElementById("movieScrollbar" + rowId);
    slider.scrollLeft -= 500;
  }
  function slideRight() {
    var slider = document.getElementById("movieScrollbar" + rowId);
    slider.scrollLeft += 500;
  }
  return (
    <div className="text-white mt-3">
      {/* Genre Title */}
      <p className="text-xl my-2 font-semibold px-10">{genre}</p>

      <div className="relative flex items-center group px-10">
        {/* Left Scroll */}
        <AiFillCaretLeft
          className="absolute z-10 left-0 opacity-30 hover:opacity-80 cursor-pointer hidden group-hover:block transition ease-in-out delay-50"
          size={50}
          onClick={slideLeft}
        />
        {/* Fetched Movies mapping on MovieCard Component */}
        <div
          id={"movieScrollbar" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap inline-block scroll-smooth scrollbar-hide"
        >
          {movies.map((movie, id) => (
            // Using LINK to send data to MovieDetails Page using "state"

            <MovieCard
              key={id}
              id={movie?.id}
              image={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              name={movie?.title}
              rating={movie?.vote_average}
              movie={movie}
            />
          ))}
        </div>
        {/* Right Scroll */}
        <AiFillCaretRight
          className="absolute z-10 right-0 opacity-30 hover:opacity-80 cursor-pointer hidden group-hover:block transition ease-in-out delay-50"
          size={50}
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default MovieRow;
