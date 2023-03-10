import { Routes, Route } from "react-router-dom";
import About from "./component/Pages/about";
import ChangePassword from "./component/Pages/ChangePassword.js";
import Contact from "./component/Pages/Contact";
import Home from "./component/Pages/Home";
import Login from "./component/Pages/Login";
import Signup from "./component/Pages/Signup";
import Store from "./component/Pages/Store";
import ProductDetail from "./Shop/ProductDetail";
import Products from "./Shop/Products";

const Routing = () => {
  return (
    <Routes>
      <Route path="/profile" element={<ChangePassword />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
};

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
