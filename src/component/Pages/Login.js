import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/Auth-context";
import classes from "./Contact.module.css";
// import CartContext from "../../context/cart-context";

const Login = () => {
  // const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNFisNSnZdhT0kZ0GNIAbNZBf9N_aB4r0",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setLoading(false);
            console.log(data);
            localStorage.setItem("token", data.idToken);
            localStorage.setItem("userEmail", data.email);
            // cartCtx.setToken(data.token);
            authCtx.login(data.idToken);
            authCtx.email(data.email);
            navigate("/products");
          });
        } else {
          setLoading(false);
          setError("Invalid email or password");
          alert("Invalid Email or Password!");
          throw new Error("Invalid email or password");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const navigateHandler = () => {
    navigate("/signup");
  };

  return (
    <div className={classes.card}>
      <h1>Login</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" ref={emailInputRef} />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordInputRef}
          />
          <br />
          <button className={classes.btn} type="submit" disabled={loading}>
            {loading ? "Logging in" : "Login"}
          </button>
        </div>
      </form>
      {error && <p>{error}</p>}
      <p>
        Don't have an account yet?
        <button className={classes.btn} type="button" onClick={navigateHandler}>
          Signup
        </button>
      </p>
    </div>
  );
};

export default Login;
