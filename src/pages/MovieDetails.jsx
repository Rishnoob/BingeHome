import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useLocation } from "react-router";

const MovieDetails = (props) => {
  const location = useLocation();
  const movie = location.state?.data;
  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full">
        {/* Hero Gradient */}
        <div className="GRADIENT absolute w-full h-screen bg-gradient-to-r from-black " />
        {/* Hero Image */}
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full p-10 top-[30%]">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            {movie?.title}
          </h1>
          {/* Ratings */}
          <div className="my-4 flex items-center ">
            <AiFillStar className="text-yellow-300 text-2xl sm:text-3xl lg:text-4xl" />
            <p className=" border-gray-300 hover:bg-white hover:text-black px-3 transition ease-in-out delay-95 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {movie?.vote_average}
            </p>
          </div>
          {/* Hero description and dates */}
          <p className="text-gray-400 text-sm mb-4">
            Released on: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] l:max-w-[50%]   xl:max-w-[35%] text-gray-300 font-semibold">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
