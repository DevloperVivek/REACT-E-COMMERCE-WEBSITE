import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/Auth-context";
import CartContext from "../../context/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const numberOfCartItems = cartCtx.items.length;

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      const url = "https://crudcrud.com/api/4ff38609429a433993c92d5093a9197e/";
      const email = localStorage.getItem("userEmail").split("@");
      const newUrl = url + email[0] + "/";
      fetch(newUrl)
        .then((response) => response.json())
        .then((cartItems) => {
          // console.table(cartItems);
          cartItems.forEach((cartItem) => {
            const newItem = {
              id: cartItem.id,
              title: cartItem.title,
              imageUrl: cartItem.imageUrl,
              quantity: cartItem.quantity,
              price: cartItem.price,
            };
            cartCtx.addItem(newItem);
          });
        })
        .catch((error) => {
          console.error("Error fetching cart items: ", error);
        });
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
