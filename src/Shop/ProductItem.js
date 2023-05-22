import classes from "./ProductItem.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CartContext from "../context/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const userEmail = localStorage.getItem("userEmail");
  const apiUrl = `https://react-e-commerce-site-6a24c-default-rtdb.asia-southeast1.firebasedatabase.app/${
    userEmail.split("@")[0]
  }`;

  const obj = {
    id: props.id,
    title: props.title,
    imageUrl: props.imageUrl,
    quantity: 1,
    price: props.price,
  };

  const addToCartHandler = async () => {
    try {
      fetch(
        `https://react-e-commerce-site-6a24c-default-rtdb.asia-southeast1.firebasedatabase.app/products/${
          userEmail.split("@")[0]
        }.json`,
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((data) => console.log(data));
      cartCtx.addItem(obj);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <li className={classes.item}>
        <h3>{props.title}</h3>
        <header>
          <Link className={classes.link} to={`/products/${props.id}`}>
            <div>{<img src={props.imageUrl} alt="productImages"></img>}</div>
          </Link>
        </header>
        <div className={classes.pribtn}>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
          <button
            onClick={addToCartHandler}
            input={{ id: "amount_" + props.id }}
            className={classes.btn}
          >
            + Add
          </button>
        </div>
      </li>
    </div>
  );
};

export default ProductItem;
