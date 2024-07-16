import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Login from "./Components/Login/Login";
import Verify from "./Pages/Verify/Verify";
import Myorders from "./Pages/Myorders/Myorders";
import Categories from "./Pages/Categories/Categories";
import AuthorPage from "./Pages/AuthorPage/AuthorPage";
import SchoolBooks from "./Components/SchoolBooks/SchoolBooks";
import Download from "./Pages/Download/Download";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<Myorders />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/authors" element={<AuthorPage />} />
          <Route path="/schoolBooks" element={<SchoolBooks />} />
          <Route path="/download/schoolbooks" element={<Download />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
