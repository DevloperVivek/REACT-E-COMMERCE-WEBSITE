import { useContext } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import AuthContext from "./component/Auth/Auth-context";
import About from "./component/Pages/about";
import ChangePassword from "./component/Pages/ChangePassword.js";
import Contact from "./component/Pages/Contact";
import Home from "./component/Pages/Home";
import Login from "./component/Pages/Login";
import Signup from "./component/Pages/Signup";
import ProductDetail from "./Shop/ProductDetail";
import Products from "./Shop/Products";

const Routing = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate;

  if (!authCtx.isLoggedIn && window.location.pathname === "/products") {
    navigate("/login");
  }

  return (
    <Routes>
      {authCtx.isLoggedIn && (
        <Route path="/profile" element={<ChangePassword />} />
      )}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {authCtx.isLoggedIn && <Route path="/products" element={<Products />} />}
      {authCtx.isLoggedIn && (
        <Route path="/products/:productId" element={<ProductDetail />} />
      )}
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<Login />} />
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
