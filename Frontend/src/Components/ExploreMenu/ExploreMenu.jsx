import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="exploreMenu" id="exploreMenu">
      <h1>Explore our Menu</h1>
      <p className="exploreMenu-text">
        add some sentence here.add some sentence here.add some sentence here.add
        some sentence here.add some sentence here.add some sentence hereadd some
        sentence here
      </p>
      <div className="exploreMenu-list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="exploreMenu-list-item">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
