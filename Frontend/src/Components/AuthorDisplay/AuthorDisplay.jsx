import React, { useContext } from "react";
import "./AuthorDisplay.css";
import { StoreContext } from "../../Context/StoreCntext";
import FoodItem from "../FoodItem/FoodItem";

const AuthorDisplay = ({ authorName }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="authorDisplay" id="authorDisplay">
      <div className="author-display-list">
        {food_list.map((item, index) => {
          if (authorName === "All" || authorName === item.authorName) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                authorName={item.authorName}
                category={item.category}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default AuthorDisplay;
