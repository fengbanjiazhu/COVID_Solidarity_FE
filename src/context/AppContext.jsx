import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("jwt"));
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [isDark, setIsDark] = useState(false);

  const login = (token) => {
    localStorage.setItem("jwt", token);
    setToken(token);
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    setToken(null);
    setLoggedIn(false);
  };

  return (
    <AppContext.Provider
      value={{
        loggedIn,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
