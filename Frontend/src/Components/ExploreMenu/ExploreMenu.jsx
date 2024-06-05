import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
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
            <div
              className="exploreMenu-list-item"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
