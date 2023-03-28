import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/Auth-context";
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
            {/* {isLogin && ( */}
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
            {/* )} */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About
              </NavLink>
            </li>
            {isLogin && (
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Contact Us
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
          </ul>
        </nav>
      </nav>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
  );
};

export default Header;
