import { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreCntext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { TotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 750);

  // Update the screen size state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 750);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //reducing the opacity when scrolling-------------------------------------------------------------------------------------
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  //------------------------------------------------------------------------------------------------------------------------

  //removing token from the local storage-----------------------------------------------------------------------------------
  const logOut = () => {
    localStorage.removeItem("token");
    setToken(""); // Add this line
    navigate("/");
  };
  //------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="navbar">
      <div className="left-navbar">
        {!isSmallScreen ? (
          ""
        ) : (
          <div className="navbar-listdownmenu">
            <img className="listmenuImg" src={assets.menuList} alt="" />
            <ul className="listdownmenu-dropdown">
              <li onClick={() => navigate("/categories")}>
                <img src={assets.bag_icon} alt="" />
                <p>Categories</p>
              </li>
              <hr />
              <li onClick={() => navigate("/authors")}>
                <img src={assets.logout_icon} alt="" />
                <p>Authors</p>
              </li>
              <hr />
              <li onClick={() => navigate("/schoolBooks")}>
                <img src={assets.logout_icon} alt="" />
                <p>PastPapers</p>
              </li>
            </ul>
          </div>
        )}
        <Link to="/">
          <img className="logoImg" src={assets.logo} alt="" />
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
          <Link
            to="/categories"
            onClick={() => setMenu("categories")}
            className={menu === "categories" ? "active" : ""}
          >
            Categories
          </Link>
          <Link
            to="/authors"
            onClick={() => setMenu("authors")}
            className={menu === "authors" ? "active" : ""}
          >
            Authors
          </Link>
          <Link
            to="/schoolBooks"
            onClick={() => setMenu("schoolBooks")}
            className={menu === "schoolBooks" ? "active" : ""}
          >
            PastPapers
          </Link>
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
        {!token ? (
          <button onClick={() => setShowLogin(true)}> sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="navprofile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Order</p>
              </li>
              <hr />
              <li onClick={logOut}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
              <hr />
              <li>
                <img src={assets.logout_icon} alt="" />
                <p>Settings</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
