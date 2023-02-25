import { Routes, Route } from "react-router-dom";
import About from "./component/Pages/about";
import Home from "./component/Pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
