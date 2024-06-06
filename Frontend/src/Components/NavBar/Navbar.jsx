import { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreCntext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { TotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to="/">
          <img src={assets.logo} alt="" />
        </Link>
      </div>

      <div className="navbar-middle">
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#exploreMenu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#appDownload"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            contact us
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("food-details")}
            className={menu === "food-details" ? "active" : ""}
          >
            food details
          </a>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={TotalCartAmount() > 0 ? "dot" : ""}></div>
        </div>

        <button onClick={() => setShowLogin(true)}> sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
