import { useState } from "react";
import "../../App.css";
import Cart from "../../component/Cart/Cart";
import Header from "../../component/Layout/Header";
import CartProvider from "../../store/CartProvider";
import classes from "./Home.module.css";
import HomeList from "./HomeList";

const homeArr = [
  {
    id: 1,
    date: "Jul 16",
    place: "DETROIT",
    description: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: 2,
    date: "Jul 19",
    place: "TORONTO",
    description: "BUDWEISER STAGE",
  },
  {
    id: 3,
    date: "JUL 22",
    place: "BRISTOW",
    description: "JIGGY LUBE LIVE",
  },
  {
    id: 4,
    date: "JUL 29",
    place: "PHOENIX",
    description: "AK-CHIN PAVILION",
  },
  {
    id: 5,
    date: "AUG 2",
    place: "PHOENIX",
    description: "AK-CHIN PAVILION",
  },
  {
    id: 6,
    date: "AUG 7",
    place: "CONCORD",
    description: "CONCORD PAVILION",
  },
];

export default function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const homeList = homeArr.map((product) => (
    <HomeList
      key={product.id}
      date={product.date}
      place={product.place}
      description={product.description}
    />
  ));

  return (
    <div>
      <CartProvider>
        <h2 className={classes.generics}>The Generics</h2>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <h1 className={classes.title}>Tours</h1>
        <main>
          <ul className={classes.ualign}>{homeList}</ul>
        </main>
      </CartProvider>
    </div>
  );
}
