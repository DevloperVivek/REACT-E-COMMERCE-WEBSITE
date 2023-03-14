import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [logoutTimer, setLogoutTimer] = useState(null);

  const userIsLoggedin = !!token;

  useEffect(() => {
    setLogoutTimer(
      setTimeout(() => {
        logoutHandler();
      }, 5 * 60 * 1000)
    );
    return () => {
      clearTimeout(logoutTimer);
    };
  }, []);

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    setLogoutTimer(
      setTimeout(() => {
        logoutHandler();
      }, 5 * 60 * 1000)
    );
    console.log("timer set");
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    clearTimeout(logoutTimer);
    setLogoutTimer(null);

    console.log("timer unset");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedin,
    login: loginHandler,
    logout: logoutHandler,
  };

  const handleUserInteraction = () => {
    clearTimeout(logoutTimer);
    setLogoutTimer(
      setTimeout(() => {
        logoutHandler();
      }, 5 * 60 * 1000)
    );
  };

  useEffect(() => {
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
