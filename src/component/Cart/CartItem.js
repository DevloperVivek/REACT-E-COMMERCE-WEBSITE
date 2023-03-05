import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <div>
          <img
            className={classes.imgContainer}
            src={props.image}
            alt="productImages"
          ></img>
        </div>
        <div className={classes.summary}>
          <span className={classes.item}>{props.title}</span>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{props.quantity}</span>
          <div className={classes.quantity}>
            <span>{props.quantity}</span>
          </div>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
