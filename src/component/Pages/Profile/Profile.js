import React, { useContext, useRef, useState } from "react";
import AuthContext from "../../../context/Auth-context";
import classes from "./Profile.module.css";

const Profile = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;

    try {
      const response = await fetch(
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
      );

      if (response.ok) {
        console.log("Password Changed Successfully");
        console.log(newPassword);
      } else {
        alert("Unable to change password. Please try again!");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.signupcard}>
        <h3>Change Password</h3>
        <form id="contact-form" onSubmit={handleChangePassword}>
          <div className={classes.control}>
            <label htmlFor="new-password">New password</label>
            <input
              type="password"
              id="new-password"
              ref={newPasswordInputRef}
              onChange={(event) => setNewPassword(event.target.value)}
            />
            <button className={classes.btn} type="submit">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
