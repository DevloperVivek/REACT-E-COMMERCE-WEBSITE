import React from "react";
import classes from "./Home.module.css";

const clickhandler = () => {
  alert("Notification Set !");
};

const HomeList = (props) => {
  return (
    <li className={classes.item}>
      <header>
        <div>
          <span className={classes.date}>{props.date}</span>
          <span className={classes.place}>{props.category}</span>
          <span className={classes.description}>{props.offer}</span>
        </div>
      </header>
      <button onClick={clickhandler} className={classes.btn}>
        Notify Me{" "}
      </button>
    </li>
  );
};

export default HomeList;
