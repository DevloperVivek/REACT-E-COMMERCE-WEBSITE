import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const userEmail = localStorage.getItem("userEmail");
  const [cartItems, setCartItems] = useState([]);
  const totalAmount = cartCtx.totalAmount;
  const hasItems = cartCtx.items.length > 0;
  const apiUrl = `https://crudcrud.com/api/adfb83c3d10248f9afe208f9e30e732e/${
    userEmail.split("@")[0]
  }`;

  useEffect(() => {
    setCartItems(cartCtx.items);
  }, [cartCtx.items]);

  const cartItemAddHandler = async (item) => {
    cartCtx.addItem(item);
    console.log("Item Is Added");
  };

  const cartItemReamoveHandler = (id) => {
    console.log("cartItemRemoveHandler");
    cartCtx.removeItem(id);
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  return (
    <Modal className={classes.cart} onClose={props.onClose}>
      <div>
        <ul className={classes["cart-items"]}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              image={item.imageUrl}
              price={item.price}
              quantity={item.quantity}
              onRemove={cartItemReamoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
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
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
