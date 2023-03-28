import React, { useReducer, useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const userEmail = localStorage.getItem("userEmail");
  const apiUrl = `https://crudcrud.com/api/4ff38609429a433993c92d5093a9197e/${
    userEmail.split("@")[0]
  }`;
  let url = "https://crudcrud.com/api/4ff38609429a433993c92d5093a9197e/";

  const defaultCart = {
    items: [],
    totalAmount: 0,
  };

  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      if (existingCartItem) {
        let newItems = state.items.filter(
          (e, i) => i !== existingCartItemIndex
        );
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        newItems = [updatedItem, ...newItems];
        return {
          items: newItems,
          totalAmount: state.totalAmount + existingCartItem.price,
        };
      } else {
        return {
          items: [...state.items, action.item],
          totalAmount: state.totalAmount + action.item.price,
        };
      }
    }

    if (action.type === "REMOVE") {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem.quantity === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        const newItems = state.items.filter((item) => item.id !== action.id);
        updatedItems = [updatedItem, ...newItems];
      }
      return {
        items: updatedItems,
        totalAmount: state.totalAmount - existingCartItem.price,
      };
    }
  };

  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addItemHandler = async (item) => {
    // console.log("Added Item", item);
    let newItem;
    const email = localStorage.getItem("userEmail").split("@");
    const newUrl = url + email[0] + "/";
    // console.log(newUrl);
    try {
      const old = await axios.get(newUrl);
      // console.log(old);
      let existed = false;
      if (old.data.length > 0) {
        let index;
        old.data.forEach((element, i) => {
          if (element.id === item.id) {
            index = i;
            existed = true;
          }
        });
        if (existed) {
          let obj = old.data[index];
          console.log(obj);
          dispatchCart({ type: "ADD", item: obj });
          const deleteUrl = newUrl + old.data[index]._id;
          await axios.delete(deleteUrl);
          obj = {
            id: obj.id,
            title: obj.title,
            imageUrl: obj.imageUrl,
            quantity: obj.quantity,
            price: obj.price,
          };
          // console.table(obj);
          await axios.post(newUrl, obj);
          return;
        } else {
          newItem = { quantity: 1, ...item };
          // console.log(newItem);
          dispatchCart({ type: "ADD", item: newItem });
          await axios.post(newUrl, newItem);
          return;
        }
      }
      newItem = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        quantity: 1,
        price: item.price,
      };
      console.log(newItem);
      dispatchCart({ type: "ADD", item: newItem });
      await axios.post(newUrl, newItem);
    } catch (e) {
      console.log(e);
    }
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemHandler = async (id) => {
    dispatchCart({ type: "REMOVE", id: id });
    const email = localStorage.getItem("userEmail").split("@");
    const newUrl = url + email[0] + "/";
    try {
      const old = await axios.get(newUrl);
      let deleteId;
      old.data.forEach((element) => {
        if (element.id === id) {
          deleteId = element._id;
        }
      });
      if (deleteId) {
        const data = await axios.delete(newUrl + deleteId);
        setCartItems(data.items);
        setTotalAmount(data.totalAmount);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
