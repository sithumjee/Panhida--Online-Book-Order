import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="option">
          <img src={assets.remove_icon_red} alt="" />
          <p>Add Items</p>
        </div>

        <div className="option">
          <img src={assets.logout_icon} alt="" />
          <p>List Items</p>
        </div>

        <div className="option">
          <img src={assets.parcal} alt="" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
