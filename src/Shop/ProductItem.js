import classes from "./ProductItem.module.css";
// import Form from "./Form";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const ProductItem = (props) => {
  // const price = `$${price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
    console.log(cartCtx.items);
  };

  return (
    <li className={classes.item}>
      <h3>{props.title}</h3>
      <header>
        <div>{<img src={props.imageUrl} alt="productImages"></img>}</div>
      </header>
      <div className={classes.pribtn}>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
        {/* <Form onAddToCart={addToCartHandler} /> */}
        <button onClick={addToCartHandler} input={{id: "amount_" + props.id}} className={classes.btn}>+ Add</button>
    
     </div>
    </li>
  );
};

export default ProductItem;
