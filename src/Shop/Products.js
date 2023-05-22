import { useState } from "react";
import Cart from "../component/Cart/Cart";
import Header from "../component/Layout/Header";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

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
    title: "MEN'S BETTER THAN NAKED&trade; JACKET",
    price: 500,
    imageUrl:
      "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
  },
  {
    id: "6",
    title: "Enduro Boa&reg; Hydration Pack",
    price: 300,
    imageUrl:
      "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
  },
  {
    id: "7",
    title: "WOMEN'S SINGLE-TRACK SHOE",
    price: 350,
    imageUrl:
      "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
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
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <h2 className={classes.generics}>Ecomin</h2>
      <h1 className={classes.title}>Products</h1>
      <ul className={classes.ualign}>{productsList}</ul>
    </div>
  );
};

export default Products;
