import React, { Fragment, useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import AuthContext from "./context/Auth-context";
import Home from "./component/Pages/Home/Home";
import ProductDetail from "./Store/Product Details/ProductDetail";
import Products from "./Store/Products/Products";
import About from "./component/Pages/About/About";
import Profile from "./component/Pages/Profile/Profile.js";
import Contact from "./component/Pages/Contact/Contact";
import Signup from "./component/Pages/Signup/Signup";
import Login from "./component/Pages/Login/Login";
import Footer from "./component/Layout/Footer/Footer";
import Header from "./component/Layout/Header/Header/Header";
import CartProvider from "./context/CartProvider";

const Routing = () => {
  const authCtx = useContext(AuthContext);
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {authCtx.isLoggedIn && <Route path="/profile" element={<Profile />} />}
        {authCtx.isLoggedIn && (
          <Route path="/products" element={<Products />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/products/:productId" element={<ProductDetail />} />
        )}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </CartProvider>
  );
};

function App() {
  const authCtx = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(authCtx.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && window.location.pathname !== "/login" && "/") {
      navigate("/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setIsLoggedIn(authCtx.isLoggedIn);
  }, [authCtx.isLoggedIn]);

  return (
    <Fragment>
      <Header />
      <Routing />
      <Footer />
    </Fragment>
  );
}

export default App;
