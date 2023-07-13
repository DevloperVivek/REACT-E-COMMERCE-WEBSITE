import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  quantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  idToken: null,
  setToken: (idToken) => {},
  clearToken: (idToken) => {},
});

export default CartContext;
