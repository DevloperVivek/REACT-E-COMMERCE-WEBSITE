import { useParams } from "react-router-dom";
import classes from "./ProductDetail.module.css";

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

const ProductPage = () => {
  const { productId } = useParams();
  const product = productsArr.find((product) => product.id === productId);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{product.title}</h1>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div>
        <p className={classes.price}>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductPage;
