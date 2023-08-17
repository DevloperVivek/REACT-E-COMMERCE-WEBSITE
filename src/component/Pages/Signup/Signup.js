import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/Auth-context";
import classes from "./Signup.module.css";

const Signup = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCT-nS4GcoUSHjEgigK-wmCxCEpLe8FxM8",
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
          response.json().then((response) => {
            setLoading(false);
            setSuccess(true);
            console.log(response);
            localStorage.setItem("token", response.idToken);
            authCtx.setToken(response.idToken);
            navigate("/login");
            console.log("Signed up Successfully");
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
    navigate("/login");
  };

  return (
    <div className={classes.signupcard}>
      <h1>Signup</h1>
      {!success && (
        <form id="signup-form" onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.control}>
            <button className={classes.btn} type="submit" disabled={loading}>
              {loading ? "Signing up" : "Signup"}
            </button>
          </div>
        </form>
      )}
      {success && <p>Signup Successful</p>}
      {error && <p>{error}</p>}
      <p>
        Already have an account?{" "}
        <button className={classes.btn} type="button" onClick={navigateHandler}>
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
