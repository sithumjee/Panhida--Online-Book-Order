import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="option">
          <img src={assets.addIcon} alt="" />
          <p>Add Books</p>
        </NavLink>

        <NavLink to="/addschoolbook" className="option">
          <img src={assets.addIcon} alt="" />
          <p>Add Schoolbooks</p>
        </NavLink>

        <NavLink to="/addpastpapers" className="option">
          <img src={assets.addIcon} alt="" />
          <p>Add PastPapers</p>
        </NavLink>

        <NavLink to="/list" className="option">
          <img src={assets.listIcon} alt="" />
          <p>List Books</p>
        </NavLink>

        <NavLink to="/listschoolbook" className="option">
          <img src={assets.listIcon} alt="" />
          <p>List SchoolBooks</p>
        </NavLink>

        <NavLink to="/listpastpapers" className="option">
          <img src={assets.listIcon} alt="" />
          <p>List PastPapers</p>
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
