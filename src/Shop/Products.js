// import { Link } from "react-router-dom";
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
];

const Products = () => {
  const productsList = productsArr.map((product) => (
    <div key={product.id}>
      {/* <Link className={classes.link} to={`/products/${product.id}`}> */}
      <ProductItem
        id={product.id}
        key={product.id}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        imageUrl={product.imageUrl}
      />
      {/* </Link> */}
    </div>
  ));

  return (
    <div>
      <h2 className={classes.generics}>The Generics</h2>
      <h1 className={classes.title}>Tours</h1>
      <ul className={classes.ualign}>{productsList}</ul>
    </div>
  );
};

export default Products;
