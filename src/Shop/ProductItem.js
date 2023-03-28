import classes from "./ProductItem.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CartContext from "../context/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const userEmail = localStorage.getItem("userEmail");
  const apiUrl = `https://crudcrud.com/api/4ff38609429a433993c92d5093a9197e/${
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
    console.log("addToCartHandler");
    try {
      const response = await axios.post(apiUrl, obj);
      const newItem = {
        id: response.data.id,
        title: response.data.title,
        imageUrl: response.data.imageUrl,
        quantity: response.data.quantity,
        price: response.data.price,
      };
      cartCtx.addItem(newItem);
      // console.log(cartCtx.items);
    } catch (error) {
      console.error(error);
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
