import React, { useContext, useRef, useState } from "react";
import CartContext from "../../store/cart-context";
import AuthContext from "../Auth/Auth-context";
import classes from "./Contact.module.css";

const Login = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const PasswordInputRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // const formData = new FormData(event.target);
    // const email = formData.get("email");
    // const password = formData.get("password");

    // const data = {
    //   email: email,
    //   password: password,
    //   returnSecureToken: true,
    // };

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = PasswordInputRef.current.value;

    let url = "";
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNFisNSnZdhT0kZ0GNIAbNZBf9N_aB4r0";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNFisNSnZdhT0kZ0GNIAbNZBf9N_aB4r0";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setLoading(false);
            setSuccess(true);
            console.log(data);
            localStorage.setItem("email", data.idToken);
            cartCtx.setToken(data.token);
            authCtx.login(data.idToken);
          });
        } else {
          setLoading(false);
          setError("Invalid email or password");
          throw new Error("Invalid email or password");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setSuccess(false);
    setError(false);
  };

  return (
    <div className={classes.card}>
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      {!success && (
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
              ref={PasswordInputRef}
            />
            <br />
            <button className={classes.btn} type="submit" disabled={loading}>
              {loading ? "Logging in" : isLogin ? "Login" : "Signup"}
            </button>
          </div>
        </form>
      )}
      {success && (
        <div className={classes.success}>
          <p>{isLogin ? "Login" : "Signup"} Successful</p>
        </div>
      )}
      {error && (
        <div className={classes.error}>
          <p>{error}</p>
        </div>
      )}
      <div className={classes.toggle}>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button className={classes.btn} type="button" onClick={handleToggle}>
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
