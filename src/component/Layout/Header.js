import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const user = localStorage.getItem("email");
console.log(localStorage.getItem("email"));
const Routing = () => {
  if (!user) {
    return (
      <nav className={classes.nav}>
        <ul className={classes.navlinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={classes.nav}>
        <ul className={classes.navlinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/signup">Logout</Link>
          </li>
        </ul>
      </nav>
    );
  }
};
const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>The Generics</h1>
      <nav className={classes.nav}>{Routing()}</nav>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
  );
};

// const Header = () => {
//   return (
//     <header className={classes.header}>
//       <nav className={classes.nav}>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/store">Store</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           {isLoggedIn ? (
//             <li>
//               <HeaderCartButton />
//             </li>
//           ) : (
//             <>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//               <li>
//                 <Link to="/signup">Signup</Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

export default Header;
