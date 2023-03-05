import React, { useState } from "react";
import Header from "../Layout/Header";
import classes from "./Contact.module.css";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const data = {
      email: email,
      password: password,
    };

    fetch(
      "https://ecomin-ce4d0-default-rtdb.asia-southeast1.firebasedatabase.app/signup.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div>
      <Header />
      <div className={classes.card}>
        <h1>Sign Up</h1>
        {!success && (
          <form id="signup-form" onSubmit={handleSubmit}>
            <div className={classes.control}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
              <br />
              <button className={classes.btn} type="submit" disabled={loading}>
                {loading ? "Sending Request" : "Sign Up"}
              </button>
            </div>
          </form>
        )}
        {success && (
          <div className={classes.success}>
            <p>Successful</p>
          </div>
        )}
        {error && (
          <div className={classes.error}>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
