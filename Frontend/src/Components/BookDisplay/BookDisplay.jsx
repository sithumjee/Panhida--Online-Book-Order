import React, { useContext } from "react";
import "./BookDisplay.css";
import { StoreContext } from "../../Context/StoreCntext";
import BookItem from "../BookItem/BookItem";

const BookDisplay = ({ category }) => {
  const { book_list } = useContext(StoreContext);
  return (
    <div className="bookDisplay" id="bookDisplay">
      <div className="book-display-list">
        {book_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <BookItem
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

export default BookDisplay;
