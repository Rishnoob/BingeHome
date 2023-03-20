import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";

const LikedMovies = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const unlikeMovie = async (movieID) => {
    try {
      // all movies except the one to be unliked
      const result = movies.filter((movie) => movie.id !== movieID);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-10">
      <div className="w-full h-full overflow-x-scroll whitespace-nowrap inline-block scroll-smooth scrollbar-hide">
        {movies.map((movie, id) => (
          <div
            key={id}
            className="w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative rounded-md mr-2"
          >
            {/* Card Image */}
            <img
              className="w-full h-full rounded-md block"
              src={movie?.img}
              alt={movie?.title}
            />
            {/* Card Gradient, Name and Likes*/}
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white break-words transition ease-in-out delay-95">
              {/*  */}
              <Link to="/movie" state={{ data: movie }}>
                <p className="text-xs md:text-sm h-full font-bold flex justify-center items-center text-center white-space-normal overflow-hidden ">
                  {movie?.title}
                </p>
              </Link>
              <div onClick={() => unlikeMovie(movie.id)}>
                <AiFillHeart className="left-3 top-0 h-11 absolute" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedMovies;
