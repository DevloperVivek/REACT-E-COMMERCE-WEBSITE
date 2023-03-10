import React, { useContext, useRef, useState } from "react";
import AuthContext from "../Auth/Auth-context";
import classes from "./ChangePassword.module.css";

const ChangePassword = () => {
  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = (event) => {
    event.preventDefault();
    setLoading(true);

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDNFisNSnZdhT0kZ0GNIAbNZBf9N_aB4r0",
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
        setLoading(false);
        if (response.ok) {
          setSuccess(true);
        } else {
          setError("Unable to change password. Please try again.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError("Unable to change password. Please try again.");
      });
  };

  return (
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
  );
};

export default ChangePassword;
