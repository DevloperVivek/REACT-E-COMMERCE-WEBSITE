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
    <ProductItem
      id={product.id}
      key={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
    />
  ));

  return (
    <div>
      <h2 className={classes.title}>The Generics</h2>
      <ul className={classes.ualign}>{productsList}</ul>
    </div>
  );
};

export default Products;
