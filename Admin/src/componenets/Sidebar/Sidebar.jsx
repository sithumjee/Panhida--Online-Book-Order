import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="option">
          <img src={assets.remove_icon_red} alt="" />
          <p>Add Items</p>
        </NavLink>

        <NavLink to="/list" className="option">
          <img src={assets.logout_icon} alt="" />
          <p>List Items</p>
        </NavLink>

        <NavLink to="/order" className="option">
          <img src={assets.parcal} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
