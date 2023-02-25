import React from 'react'
import classes from './Imput.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}></input>
        {/* <button ref={ref}></button> */}
    </div>
  );
});

export default Input;