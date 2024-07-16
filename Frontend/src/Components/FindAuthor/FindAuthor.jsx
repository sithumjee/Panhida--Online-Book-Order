import React, { useContext } from "react";
import "./FindAuthor.css";
import { StoreContext } from "../../Context/StoreCntext";

const FindAuthor = ({ authorName, setAuthorName }) => {
  const { book_list } = useContext(StoreContext);

  // Get unique author names
  const uniqueAuthorNames = [
    ...new Set(book_list.map((item) => item.authorName)),
  ];

  return (
    <div className="findAuthor" id="findAuthor">
      <h1>Explore Our Book Collection</h1>
      <h2>Search under Author Name</h2>

      <div className="findAuthor-list">
        {uniqueAuthorNames.map((author, index) => (
          <div
            className="findAuthor-list-item"
            onClick={() =>
              setAuthorName((prev) => (prev === author ? "All" : author))
            }
            key={index}
          >
            <h3 className={authorName === author ? "activeAuthor" : ""}>
              {author}
            </h3>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default FindAuthor;
