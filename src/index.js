import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/Layout/Header";
import { AuthContextProvider } from "./context/Auth-context";
import CartProvider from "./context/CartProvider";
import Footer from "./component/Layout/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <CartProvider>
            <App />
          </CartProvider>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
