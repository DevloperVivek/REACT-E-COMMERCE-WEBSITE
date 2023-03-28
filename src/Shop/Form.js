import React, { useRef } from "react";
import classes from "./ProductItem.module.css";

const Form = (props) => {
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enetredAmount = amountInputRef.current.value;
    const enetredAmountNumber = +enetredAmount;
    console.log(enetredAmountNumber);
    if (enetredAmount.trim().length === 0) {
      return;
    }
    props.onAddToCart(enetredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <button
        ref={amountInputRef}
        input={{ id: "amount_" + props.id }}
        className={classes.btn}
      >
        + Add
      </button>
    </form>
  );
};

export default Form;
