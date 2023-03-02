import React from "react";
import Header from "../Layout/Header";
import classes from "./Contact.module.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    // Create data object
    const data = {
      name: name,
      email: email,
      phone: phone,
    };

    // Make POST request to Firebase Realtime Database
    fetch(
      "https://ecomin-ce4d0-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Data saved to Firebase:", data);
      })
      .catch((error) => {
        console.error("Error saving data to Firebase:", error);
      });

    // Clear form
    event.target.reset();
  };

  return (
    <div>
      {" "}
      <Header />
      <div className={classes.card}>
        <h1>Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
