import React from "react";
import classes from "./Home.module.css";

const clickhandler = () => {
  alert("Thank you For Purchase !");
};
const HomeList = (props) => {
  return (
    <li className={classes.item}>
      <header>
        <div>
          <span className={classes.date}>{props.date}</span>
          <span className={classes.place}>{props.place}</span>
          <span className={classes.description}>{props.description}</span>
        </div>
      </header>
      <button onClick={clickhandler} className={classes.btn}>
        Buy Tickets{" "}
      </button>
    </li>
  );
};

export default HomeList;
