import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Login from "./Components/Login/Login";
import Verify from "./Pages/Verify/Verify";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
