import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [logoutTimer, setLogoutTimer] = useState(null);

  const userIsLoggedin = !!token;

  useEffect(() => {
    setLogoutTimer();
    setTimeout(() => {
      logoutHandler();
    }, 5 * 60 * 1000);
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
    // console.log("Timer Set For " + localStorage.getItem("userEmail"));
    console.log(localStorage.getItem("userEmail"));
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    clearTimeout(logoutTimer);
    setLogoutTimer(null);
    // console.log("Timer Unset For " + localStorage.getItem("userEmail"));
    console.log(localStorage.getItem("userEmail"));
    setToken(null);
  };

  const emailHandler = () => {
    localStorage.getItem("userEmail");
  };

  const handleUserInteraction = () => {
    clearTimeout(logoutTimer);
    setLogoutTimer();
    setTimeout(() => {
      logoutHandler();
    }, 5 * 60 * 1000);
  };

  useEffect(() => {
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  const setTokenHandler = () => {
    const Token = localStorage.getItem("token");
    setToken(Token);
  };

  const clearTokenHadler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedin,
    login: loginHandler,
    logout: logoutHandler,
    email: emailHandler,
    setToken: setTokenHandler,
    clearToken: clearTokenHadler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
