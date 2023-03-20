import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Requests";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  //get one single random movie
  let movie = movies[Math.ceil(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        {/* Hero Gradient */}
        <div className="GRADIENT absolute w-full h-[550px] bg-gradient-to-r from-black " />
        {/* Hero Image */}
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full p-10 top-[20%]">
          {/* Title */}
          <h1 className=" text-4xl md:text-5xl font-semibold ">
            {movie?.title}
          </h1>
          {/* Rating */}
          <div className="my-4 flex items-center ">
            <AiFillStar className="text-yellow-300 text-2xl sm:text-3xl lg:text-4xl" />
            <p className=" border-gray-300 hover:bg-white hover:text-black px-3 transition ease-in-out delay-95 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {movie?.vote_average}
            </p>
          </div>
          {/* Description and Dates */}
          <p className="text-gray-400 text-sm mb-4">
            Released on: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] l:max-w-[50%] text-ellipsis overflow-hidden xl:max-w-[35%] text-gray-300 mb-4">
            {truncateString(movie?.overview, 150)}
          </p>
          <Link
            to="/movie"
            state={{ data: movie }}
            className="text-gray-400 text-sm hover:underline hover:text-gray-100"
          >
            Full Description.....
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
