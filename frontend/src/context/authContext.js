import { createContext, useState, useEffect } from "react";
import axios from "axios";
import checkAuth from "../API/checkAuth"; // Make sure this returns { authenticated, name, userId }

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); // prevent early renders

  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data); // res.data should contain the user info
  };

  const logout = async () => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    const verify = async () => {
      try {
        const { authenticated, name, userId } = await checkAuth();
        if (authenticated) {
          setCurrentUser({ name, id: userId });
        } else {
          setCurrentUser(null);
        }
      } catch (err) {
        setCurrentUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    verify();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
