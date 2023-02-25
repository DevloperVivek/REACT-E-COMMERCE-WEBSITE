import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 11.99,
    amount: 2,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 10.5,
    amount: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 5.5,
    amount: 2,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "4",
    title: "Blue Color",
    price: 10.0,
    amount: 3,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const cartItems = (
  <ul className={classes["cart-items"]}>
    {productsArr.map((product) => (
      <CartItem
        key={product.id}
        title={product.title}
        imageUrl={product.imageUrl}
        price={product.price}
        amount={product.amount}
      />
    ))}
  </ul>
);

const Cart = (props) => {
  return (
    <Modal className={classes.cart} onClose={props.onClose}>
      <div>
        {cartItems}
        <span className={classes.total}>Total Amount</span>
        <span className={classes.total}>12.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
