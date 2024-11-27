import React, { createContext, useState, useContext } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to log in (set the state to true)
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to log out (set the state to false)
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

