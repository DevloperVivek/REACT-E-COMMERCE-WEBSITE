import { useState } from "react";
import Products from "../../Shop/Products";
import Cart from "../../component/Cart/Cart";
import Header from "../../component/Layout/Header";
import CartProvider from "../../store/CartProvider";
import HeaderCartButton from "../Layout/HeaderCartButton";

export default function Store() {
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
        <HeaderCartButton />
        <main>
          <Products />
        </main>
      </CartProvider>
    </div>
  );
}
