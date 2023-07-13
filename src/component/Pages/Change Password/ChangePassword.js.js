import React, { useContext, useRef, useState } from "react";
import AuthContext from "../../../context/Auth-context";
import classes from "./ChangePassword.module.css";

const ChangePassword = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCT-nS4GcoUSHjEgigK-wmCxCEpLe8FxM8",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response + "Password Changed Succesfully");
        if (response.ok) {
          console.log(newPassword);
        } else {
          alert("Unable to change password. Please try again!");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <div>
      <div className={classes.card}>
        <h3>Change Password</h3>
        <form id="contact-form" onSubmit={handleChangePassword}>
          <div className={classes.control}>
            <label htmlFor="name">New Password</label>
            <input
              type="password"
              id="new-password"
              ref={newPasswordInputRef}
              onChange={(event) => setNewPassword(event.target.value)}
            />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div className={classes.empty}></div>
    </div>
  );
};

export default ChangePassword;
