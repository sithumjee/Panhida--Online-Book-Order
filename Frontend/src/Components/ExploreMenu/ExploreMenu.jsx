import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="exploreMenu" id="exploreMenu">
      <h1>Explore Our Book Collection</h1>
      <p className="exploreMenu-text">
        Discover a world of literary adventures in our extensive book
        collection. Whether you're in the mood for a gripping novel, an
        informative non-fiction title, or a captivating children's book, we have
        something for every reader. Browse through our diverse genres and find
        your next favorite read.
      </p>
      <hr />

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
              <h3>{item.menu_name}</h3>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
