import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        {/* Header */}
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                {" "}
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/movie" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
