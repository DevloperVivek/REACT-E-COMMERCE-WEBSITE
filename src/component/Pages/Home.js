import { useState } from "react";
import "../../App.css";
import Products from "../../Shop/Products";
import Cart from "../../component/Cart/Cart";
import Header from "../../component/Layout/Header";
import CartProvider from "../../store/CartProvider";

export default function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Products />
        </main>
      </CartProvider>
    </div>
  );
}
