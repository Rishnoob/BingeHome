import React from "react";
import LikedMovies from "../components/LikedMovies";
import loginbg from "../images/loginbg.jpg";
const Account = () => {
  return (
    <div className="w-full text-white">
      <div className="w-full h-[350px]">
        <img
          className="w-full h-[350px] object-cover blur-md"
          src={loginbg}
          alt="background"
        />
        <div className="absolute w-full top-0 left-0 h-[365px] bg-black/75"></div>
        <p className="absolute text-4xl sm:text-5xl md:text-6xl lg:text-7xl top-[20%] font-semibold w-full flex justify-center tracking-tight">
          Favourite Movies
        </p>
      </div>
      <LikedMovies />
    </div>
  );
};

export default Account;
