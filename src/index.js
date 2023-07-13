import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/Auth-context";
import CartProvider from "./context/CartProvider";
import Header from "./component/Layout/Header/Header/Header";
import Footer from "./component/Layout/Footer/Footer";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <CartProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <CartProvider>
            <App />
          </CartProvider>
        </BrowserRouter>
      </AuthContextProvider>
    </CartProvider>
    <Footer />
  </Fragment>
);
