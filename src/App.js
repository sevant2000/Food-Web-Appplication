import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import FoodPage from "./Components/FoodPage";
import CheckOut from "./Components/CheckOut";
import { CartProvider } from "react-use-cart";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="frame">
      <Navbar />
      <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>

          <Route path="/food" element={<FoodPage />}></Route>

          <Route path="/check" element={<CheckOut />}></Route>
          
        </Routes>
      </Router>
      
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
