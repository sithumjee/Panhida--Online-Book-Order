import React, { useContext, useState } from "react";
import "./BookDisplay.css";
import { StoreContext } from "../../Context/StoreCntext";
import BookItem from "../BookItem/BookItem";

const BookDisplay = ({ category }) => {
  const { book_list } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = book_list.filter((book) => {
    const matchesCategory = category === "All" || category === book.category;
    const matchesSearchQuery = book.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <div className="bookDisplay" id="bookDisplay">
      <div className="searchbar">
        <div>
          <h2>Search a book name</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for a book..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="bookSearch-input"
          />
        </div>
      </div>
      <hr />
      <div className="book-display-list">
        {filteredBooks.map((item) => (
          <BookItem
            key={item._id}
            id={item._id}
            name={item.name}
            authorName={item.authorName}
            category={item.category}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BookDisplay;
