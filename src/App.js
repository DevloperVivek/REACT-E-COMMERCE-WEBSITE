// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Cart from "./component/Cart/Cart";
// import Header from "./component/Layout/Header";
import About from "./component/Pages/about";
import Contact from "./component/Pages/Contact";
import Home from "./component/Pages/Home";
import Store from "./component/Pages/Store";

function App() {
  // const [cartIsShown, setCartIsShown] = useState(false);
  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };

  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };

  return (
    <div>
      {/* {cartIsShown && <Cart onClose={hideCartHandler} />} */}
      {/* <Header onShowCart={showCartHandler} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
