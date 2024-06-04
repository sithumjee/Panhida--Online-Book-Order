import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="left-navbar">
        <h1>LOGO</h1>
      </div>

      <div className="navbar-middle">
        <ul className="navbar-menu">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </li>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            contact us
          </li>
          <li
            onClick={() => setMenu("food-details")}
            className={menu === "food-details" ? "active" : ""}
          >
            food details
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src="" alt="search" />
        <div className="navbar-search-icon">
          cart icon
          <div className="dot"></div>
        </div>

        <button> sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
