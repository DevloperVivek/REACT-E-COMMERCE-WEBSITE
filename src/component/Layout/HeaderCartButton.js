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

  const fetchCartItems = () => {
    const url = "https://crudcrud.com/api/74871171d3364911be400d605eaf0a23/";
    const email = localStorage.getItem("token").split("@");
    const newUrl = url + email[0];
    fetch(newUrl)
      .then((response) => response.json())
      .then((cartItems) => {
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
  };

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      fetchCartItems();
    } else {
      navigate("/login");
    }
  }, [authCtx.isLoggedIn]);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
