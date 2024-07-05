import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="overlay" />
      <video
        src={assets.HeaderBg}
        autoPlay
        loop
        muted
        className="header-video"
      />
      <div className="header-content">
        <div className="header-left">
          <h1>
            Welcome to <span>PANHIDA</span>
          </h1>
          <p>
            Discover a world of literature at your fingertips. Panhida is your
            one-stop online ebook shop, where you can browse and order books
            conveniently from the comfort of your home.
          </p>
        </div>

        <div className="headerButtonContainerr">
          <Link to="/categories" className="header-button">
            Find By Category
          </Link>
          <Link to="/authors" className="header-button">
            Find By Authors
          </Link>

          <div className="header-right-bottom">
            <Link to="/aboutUs" className="header-button-add">
              ReadMore
            </Link>
            <Link to="/aboutUs" className="header-button-add">
              ReadMore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
