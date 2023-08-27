import { useState } from "react";
import Cart from "../../component/Cart/Cart/Cart";
import Header from "../../component/Layout/Header/Header/Header";
import ProductItem from "../ProductItems/ProductItem";
import classes from "./Products.module.css";
import CartProvider from "../../context/CartProvider";

const productsArr = [
  {
    id: "1",
    title: "Red & Blue",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "2",
    title: "Black & white",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "3",
    title: "Yellow & Black",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "4",
    title: "Blue Boken",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: "5",
    title: "Men Solid Black Walking Shoes",
    price: 2110,
    imageUrl:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/1/tr:w-300,/81ebfe8RSO2202_6.jpg",
  },
  {
    id: "6",
    title: "Texured Black Shoes",
    price: 2060,
    imageUrl:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/1/tr:w-300,/d1961aeRSO1731B_1.jpg",
  },
  {
    id: "7",
    title: "Solid Dark Classic Sliders",
    price: 850,
    imageUrl:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/6/tr:w-300,/76e7d0dDILK-CL-D-M-113DGREY_1.jpg",
  },
  {
    id: "8",
    title: "Scott Black Drivers",
    price: 2232,
    imageUrl:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/3/tr:w-300,/83882b8PP_USPOL00031337_1.jpg",
  },
  {
    id: "9",
    title: "Formal Laceup Shoes For Men",
    price: 3000,
    imageUrl:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/0/tr:w-300,/3031899KKY_ALBAA00003254_1.jpg",
  },
  {
    id: "10",
    title: "Men Solid Black Walking Shoes",
    price: 850,
    imageUrl:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/a/tr:w-300,/eaeafe8RSO2201_6.jpg",
  },
];

const Products = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const productsList = productsArr.map((product) => (
    <div key={product.id}>
      <ProductItem
        id={product.id}
        key={product.id}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        imageUrl={product.imageUrl}
      />
    </div>
  ));

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <div className={classes.bgCover}>
        <div className={classes.coverText}>
          <h2>Online Store</h2>
          <p>Check the latest offers and brand new products in the store</p>
        </div>
      </div>
      <h1 className={classes.title}>Products</h1>
      <div className={classes.products}>
        <ul className={classes.list}>{productsList}</ul>
      </div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </CartProvider>
  );
};

export default Products;
