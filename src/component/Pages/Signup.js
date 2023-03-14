import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../store/cart-context";
import classes from "./Contact.module.css";

const Signup = () => {
  const cartCtx = useContext(CartContext);

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
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNFisNSnZdhT0kZ0GNIAbNZBf9N_aB4r0",
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
            setSuccess(true);
            console.log(data);
            localStorage.setItem("email", data.idToken);
            cartCtx.setToken(data.token);
            navigate("/login");
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
    <div className={classes.card}>
      <h1>Signup</h1>
      {!success && (
        <form id="signup-form" onSubmit={handleSubmit}>
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
              {loading ? "Signing up" : "Signup"}
            </button>
          </div>
        </form>
      )}
      {success && <p>Signup Successful</p>}
      {error && <p>{error}</p>}
      <p>
        Already have an account?
        <button className={classes.btn} type="button" onClick={navigateHandler}>
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
