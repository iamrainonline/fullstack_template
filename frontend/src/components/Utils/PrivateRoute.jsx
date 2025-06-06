import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Home from "../Home/Home";

const PrivateRoute = ({ children }) => {
  const { currentUser, authLoading } = useContext(AuthContext);

  if (authLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return currentUser ? children : <Home />;
};

export default PrivateRoute;
