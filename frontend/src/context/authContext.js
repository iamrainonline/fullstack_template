import { createContext, useState, useEffect } from "react";
import axios from "axios";
import checkAuth from "../API/checkAuth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

  const login = async (inputs) => {
    try {
      const res = await axios.post(`${apiUrl}/auth/login`, inputs, {
        withCredentials: true,
      });
      setCurrentUser(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${apiUrl}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      // Still clear user locally even if request fails
      setCurrentUser(null);
    }
  };

  // Single useEffect for authentication check
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
        console.error("Auth verification failed:", err);
        setCurrentUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    verify();
  }, []);

  const isAuthenticated = !!currentUser;
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        login,
        logout,
        authLoading,
        setAuthLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
