import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import loginbg from "../images/loginbg.jpg";

const SignIn = () => {
  const { user, signIn } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password); //Context Function
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div className="h-screen w-full">
      <img
        className="hidden sm:block w-full h-full object-cover absolute blur-md"
        src={loginbg}
        alt="background"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className=" fixed w-full px-4 py-24 z-50 text-white">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/70 rounded-md">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl mb-11 font-semibold md:text-5xl">
              Sign In
            </h1>
            {error ? <p className="p-3 my-2">{error}</p> : null}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 py-2 bg-gray-600 rounded-md"
                type="email"
                placeholder="johndoe@email.com"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 py-2 bg-gray-600 rounded-md"
                type="password"
                placeholder="password"
              />
              <button className="bg-yellow-500 hover:bg-yellow-300 rounded-md p-2 text-black transition font-semibold ease-in-out mt-5 delay-95">
                Sign In
              </button>
              <div className="flex items-center">
                <input type="checkbox" />
                <p className="ml-2 text-gray-400">Remember me</p>
              </div>
            </form>
            <p className="text-sm py-4">
              <span className="text-gray-500">
                Don't have account on BingeHome?{" "}
              </span>
              <Link className="underline ml-2" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
