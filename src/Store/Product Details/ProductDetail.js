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
