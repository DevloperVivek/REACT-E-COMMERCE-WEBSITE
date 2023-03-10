import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  token: null,
  setToken: (token) => {},
  clearToken: () => {},
});

export default CartContext;
