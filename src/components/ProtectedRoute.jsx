import { Navigate } from "react-router";
import { UserAuth } from "../context/AuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
  return <div></div>;
};

export default ProtectedRoute;
