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
    // Set the logout timer when the component mounts
    setLogoutTimer(
      setTimeout(() => {
        logoutHandler();
      }, 5 * 60 * 1000) // 5 minutes in milliseconds
    );
    // Clear the logout timer when the component unmounts
    return () => {
      clearTimeout(logoutTimer);
    };
  }, []); // Run this effect only once on mount

  const loginHandler = (token) => {
    // Set the authentication token and start the logout timer
    setToken(token);
    localStorage.setItem("token", token);
    setLogoutTimer(
      setTimeout(() => {
        logoutHandler();
      }, 5 * 60 * 1000) // 5 minutes in milliseconds
    );
    console.log("timer set");
  };

  const logoutHandler = () => {
    // Clear the authentication token and the logout timer
    setToken(null);
    localStorage.removeItem("token");
    clearTimeout(logoutTimer);
    setLogoutTimer(null);

    console.log("timer unset");
  };

  // const loginHandler = (token) => {
  //   setToken(token);
  //   localStorage.setItem("token", token);
  // };

  // const logoutHandler = () => {
  //   setToken(null);
  //   localStorage.removeItem("token");
  // };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedin,
    login: loginHandler,
    logout: logoutHandler,
  };

  const handleUserInteraction = () => {
    // Reset the logout timer when the user interacts with the application
    clearTimeout(logoutTimer);
    setLogoutTimer(
      setTimeout(() => {
        logoutHandler();
      }, 5 * 60 * 1000) // 5 minutes in milliseconds
    );
  };

  // Attach the handleUserInteraction function to all relevant events
  useEffect(() => {
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    // Remove the event listeners when the component unmounts
    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []); // Run this effect only once on mount

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
