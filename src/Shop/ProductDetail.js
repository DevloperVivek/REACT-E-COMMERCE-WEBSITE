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
