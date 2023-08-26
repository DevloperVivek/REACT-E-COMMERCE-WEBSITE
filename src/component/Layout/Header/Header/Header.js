import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../../context/Auth-context";
import HeaderCartButton from "../HeaderButton/HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <h1>Ecomin</h1>
      <ul className={classes.navlinks}>
        {isLogin && (
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Profile
            </NavLink>
          </li>
        )}
        {isLogin && (
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
        )}
        {isLogin && (
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Store
            </NavLink>
          </li>
        )}
        {isLogin && (
          <li>
            <NavLink
              to="/signup"
              onClick={logoutHandler}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Logout
            </NavLink>
          </li>
        )}
        {!isLogin && (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Login
            </NavLink>
          </li>
        )}
        {!isLogin && (
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Signup
            </NavLink>
          </li>
        )}
      </ul>
      {authCtx.isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
    </header>
  );
};

export default Header;
