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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const response = await fetch(
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
      );

      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        setSuccess(true);
        localStorage.setItem("token", data.idToken);
        authCtx.setToken(data.idToken);
        navigate("/login");
      } else {
        setLoading(false);
        setError("Invalid email or password");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
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
      {success && <p className={classes.successMsg}>Signup Successful</p>}
      {error && <p className={classes.errorMsg}>{error}</p>}
      <div className={classes.toggle}>
        <p>
          Already have an account?{" "}
          <span onClick={navigateHandler}>Login Now</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
