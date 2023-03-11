import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Auth/Auth-context";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <h1>The Generics</h1>
      <nav className={classes.nav}>
        <nav className={classes.nav}>
          <ul className={classes.navlinks}>
            {isLogin && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {isLogin && (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
            {isLogin && (
              <li>
                <Link to="/store">Store</Link>
              </li>
            )}
            {isLogin && (
              <li>
                <Link to="/about">About</Link>
              </li>
            )}
            {isLogin && (
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            )}
            {!isLogin && (
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            )}
            {isLogin && (
              <li>
                <Link to="/signup" onClick={logoutHandler}>
                  Logout
                </Link>
              </li>
            )}
            {!isLogin && (
              <li>
                <Link to="/signup">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </nav>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
  );
};

export default Header;
