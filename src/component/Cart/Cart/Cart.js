import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartContext from "../../../context/cart-context";
import Modal from "../../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const totalAmount = cartCtx.totalAmount;
  const hasItems = cartCtx.items?.length ?? 0;

  const apiurl =
    "https://ecom-react-site-default-rtdb.asia-southeast1.firebasedatabase.app/products/";
  const userEmail = localStorage.getItem("userEmail");
  const url = `${apiurl}${userEmail.split("@")[0]}.json`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.data) {
          const fetchedCartItems = Object.values(response.data);
          setCartItems(fetchedCartItems);
        }
      } catch (error) {
        console.error("Error fetching cart items: ", error);
      }
    };
    fetchData();
  }, [url]);

  const cartItemAddHandler = (item) => {
    try {
      cartCtx.addItem(item);
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error adding item to cart: ", error);
    }
  };

  const cartItemRemoveHandler = (id) => {
    try {
      cartCtx.removeItem(id);
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      setCartItems(
        updatedCartItems.filter((cartItem) => cartItem.quantity > 0)
      );
    } catch (error) {
      console.error("Error removing item from cart: ", error);
    }
  };

  return (
    <Modal className={classes.cart} onClose={props.onClose}>
      <div>
        <ul className={classes["cart-items"]}>
          {cartItems.map((item, index) => (
            <CartItem
              key={item.id + index}
              title={item.title}
              image={item.imageUrl}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => cartItemRemoveHandler(item.id)}
              onAdd={() => cartItemAddHandler(item)}
            />
          ))}
        </ul>
      </div>
      <div>
        <span className={classes.total}>Total Amount</span>
        <span className={classes.total}>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <div>
          {hasItems > 0 && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
