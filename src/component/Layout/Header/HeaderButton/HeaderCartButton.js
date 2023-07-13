import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/Auth-context";
import CartContext from "../../../../context/cart-context";
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const numberOfCartItems = cartCtx.items?.length ?? 0;

  const fetchCartItems = () => {
    const url =
      "https://ecom-react-site-default-rtdb.asia-southeast1.firebasedatabase.app/products/";
    const email = localStorage.getItem("userEmail");
    if (!email) {
      console.error("User email not found in localStorage.");
      return;
    }
    const emailParts = email.split("@");
    const newUrl = url + emailParts[0] + ".json";
    fetch(newUrl)
      .then((response) => response.json())
      .then((cartItems) => {
        if (cartItems) {
          const itemsArray = Object.values(cartItems);
          itemsArray.forEach((cartItem) => {
            const newItem = {
              id: cartItem.id,
              title: cartItem.title,
              imageUrl: cartItem.imageUrl,
              quantity: cartItem.quantity,
              price: cartItem.price,
            };
            cartCtx.addItem(newItem);
          });
        } else {
          console.log("Cart Items NOt Found.");
        }
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
