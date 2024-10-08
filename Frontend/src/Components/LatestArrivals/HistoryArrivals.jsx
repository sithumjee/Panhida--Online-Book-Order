import React, { useContext } from "react";
import "./LatestArrivals.css";
import { StoreContext } from "../../Context/StoreCntext";
import BookItem from "../BookItem/BookItem";

const HistoryArrivals = () => {
  const { book_list } = useContext(StoreContext);
  const latest_list = book_list
    .filter((item) => item.category === "History")
    .slice(-5);

  return (
    <div className="latest-arrivals">
      <h1>Latest History Books</h1>
      <div className="latest-arrival-list">
        {latest_list.map((item, index) => {
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
        })}
      </div>
      <hr />
    </div>
  );
};

export default HistoryArrivals;
