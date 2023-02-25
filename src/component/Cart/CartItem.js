import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const addHandler = () => {
    console.log("addhandler");
  };

  const removeHandler = () => {
    console.log("removehandler");
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <div>
          <img className={classes.imgContainer} src={props.imageUrl} alt="productImages"></img>
        </div>
        <div className={classes.summary}>
          <span className={classes.item}>{props.title}</span>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{props.amount}</span>
          <div className={classes.quantity}>
            <span>{props.amount}</span>
          </div>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
