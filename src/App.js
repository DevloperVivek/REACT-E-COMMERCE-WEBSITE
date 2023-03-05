import { Routes, Route } from "react-router-dom";
import About from "./component/Pages/about";
import Contact from "./component/Pages/Contact";
import Home from "./component/Pages/Home";
import Store from "./component/Pages/Store";
import ProductDetail from "./Shop/ProductDetail";
import Products from "./Shop/Products";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
