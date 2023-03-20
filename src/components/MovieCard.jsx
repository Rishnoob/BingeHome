import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const MovieCard = ({ id, image, name, rating, movie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);

  // Run this function only if user is logged in
  const heartClick = async () => {
    if (user?.email) {
      if (like === false) {
        setLike(!like);
      }
      setSaved(true);
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: id,
          title: name,
          img: image,
          overview: movie?.overview,
          vote_average: movie?.vote_average,
          backdrop_path: movie?.backdrop_path,
          release_date: movie?.release_date,
        }),
      });
    } else {
      alert("Please Sign In to like the movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative rounded-md mr-2">
      {/* Card Image */}
      <img className="w-full h-full rounded-md block" src={image} alt={name} />
      {/* Card Gradient, Name and Likes*/}
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white break-words transition ease-in-out delay-95">
        {/*  */}
        <Link to="/movie" state={{ data: movie }}>
          <p className="text-xs md:text-sm h-full font-bold flex justify-center items-center text-center white-space-normal overflow-hidden ">
            {name}
          </p>
        </Link>
        <div onClick={heartClick}>
          {like ? (
            <AiFillHeart className="left-3 top-0 h-11 absolute" />
          ) : (
            <AiOutlineHeart className="left-3 top-0 h-11 absolute" />
          )}
        </div>
        <p className="right-3 top-3 text-xs md:text-sm font-semibold items-center absolute">
          {rating}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
