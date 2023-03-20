import { BsFillCameraReelsFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="flex text-white justify-between py-4 px-10 z-[100] absolute w-full">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center text-2xl sm:text-3xl lg:text-4xl cursor-pointer"
      >
        <BsFillCameraReelsFill className="text-yellow-500" />
        <p className="ml-2 font-bold text-yellow-500">BingeHome</p>
      </Link>

      {/* Login Options/ Account */}
      {user?.email ? (
        <div className="flex justify-between  items-center p-2 gap-4 text-xs sm:text-base lg:text-lg font-semibold">
          <Link
            to="/account"
            className="text-gray-200 hover:text-white transition ease-in-out delay-95"
          >
            Account
          </Link>
          <button
            onClick={handleSignOut}
            className="bg-yellow-500 hover:bg-yellow-300 rounded-md p-2 text-black transition ease-in-out delay-95"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex justify-between  items-center p-2 gap-4 text-xs sm:text-base lg:text-lg font-semibold">
          <Link
            to="/signin"
            className="text-gray-200 hover:text-white transition ease-in-out delay-95"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-yellow-500 hover:bg-yellow-300 rounded-md p-2 text-black transition ease-in-out delay-95"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
