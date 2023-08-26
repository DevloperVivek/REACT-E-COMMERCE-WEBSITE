import { useState } from "react";
import Cart from "../../Cart/Cart/Cart";
import classes from "./Home.module.css";
import HomeList from "./HomeList";
import CartProvider from "../../../context/CartProvider";
import Header from "../../Layout/Header/Header/Header";

const offersList = [
  {
    id: 1,
    date: "Jul 16",
    category: "Electronics",
    offer: "20% OFF with excited gifts",
  },
  {
    id: 2,
    date: "Aug 5",
    category: "Fashion & Clothing",
    offer: "Buy 1 Get 1 Free on selected items",
  },
  {
    id: 3,
    date: "Sep 10",
    category: "Home Appliances",
    offer: "Up to 40% OFF on kitchen essentials",
  },
  {
    id: 4,
    date: "Oct 3",
    category: "Sports & Outdoors",
    offer: "Extra 30% OFF on outdoor gear",
  },
  {
    id: 5,
    date: "Nov 20",
    category: "Beauty & Personal Care",
    offer: "Free Gift Set with orders above $50",
  },
  {
    id: 6,
    date: "Dec 12",
    category: "Books, Movies & Music",
    offer: "Buy 2, Get 1 Free on bestselling books",
  },
  {
    id: 7,
    date: "Jan 7",
    category: "Toys & Games",
    offer: "Huge Discounts on popular board games",
  },
  {
    id: 8,
    date: "Feb 14",
    category: "Jewelry & Accessories",
    offer: "Valentine's Day Special",
  },
  {
    id: 9,
    date: "Mar 23",
    category: "Home & Furniture",
    offer: "Spring Sale: Up to 50% OFF",
  },
  {
    id: 10,
    date: "Apr 30",
    category: "Mobile Phones",
    offer: "free case on pre-order",
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

  const OfferList = offersList.map((offer) => (
    <HomeList
      key={offer.id}
      date={offer.date}
      category={offer.category}
      offer={offer.offer}
    />
  ));

  return (
    <CartProvider>
      <div className={classes.container}>
        <div className={classes.bgCover}>
          <div className={classes.coverText}>
            <h2>Online Store</h2>
            <p>Check the latest offers and brand new products in the store</p>
          </div>
        </div>
        <Header onShowCart={showCartHandler} />
        <h1 className={classes.title}>Upcoming Offers</h1>
        <main>
          <ul className={classes.ualign}>{OfferList}</ul>
        </main>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
      </div>
    </CartProvider>
  );
}
