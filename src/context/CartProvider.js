import React, { useReducer, useEffect } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
  const defaultCart = {
    items: [],
    totalAmount: 0,
  };

  const email = localStorage.getItem("userEmail") ?? "";
  const userId = email.split("@")[0];
  const url = `https://ecom-react-site-default-rtdb.asia-southeast1.firebasedatabase.app/products/${userId}.json`;

  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingCartItemIndex !== -1) {
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        const updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        return {
          items: updatedItems,
          totalAmount: state.totalAmount + action.item.price,
        };
      } else {
        return {
          items: [...state.items, action.item],
          totalAmount: state.totalAmount + action.item.price,
        };
      }
    } else if (action.type === "REMOVE") {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      if (existingCartItemIndex === -1) {
        return state;
      }

      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      let updatedItems;
      if (updatedItem.quantity <= 0) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount - existingCartItem.price,
      };
    } else if (action.type === "SET") {
      return {
        items: action.cartData.items,
        totalAmount: action.cartData.totalAmount,
      };
    }

    return state;
  };

  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (item) => {
    dispatchCart({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCart({
      type: "REMOVE",
      id: id,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const cartData = response.data;
        if (cartData) {
          dispatchCart({
            type: "SET",
            cartData: cartData,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const sendCartData = async () => {
      try {
        await axios.put(url, cartState.items);
      } catch (error) {
        console.log(error);
      }
    };

    sendCartData();
  }, [url, cartState]);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
