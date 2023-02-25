import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>The Generics</h1>
        <nav>
          <ul className={classes.nav__links}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Store</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
