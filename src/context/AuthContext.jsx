import { createContext, useContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext();

// Custom hook to use Auth context
export const useAuth = () => useContext(AuthContext);

// AuthProvider to wrap the app and manage authentication state
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Check for token in localStorage when the app mounts
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Login function
  const login = async (username, password) => {
    if (username === "admin" && password === "1234") {
      const fakeToken = "fakeToken1234"; // Simulating token generation
      localStorage.setItem("token", fakeToken);
      setToken(fakeToken);
      return true;
    }
    return false;
  };


  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };


  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
