import React, { useContext } from "react";
import "./FindAuthor.css";
import { author_list } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreCntext";

const FindAuthor = ({ authorName, setAuthorName }) => {
  const { book_list } = useContext(StoreContext);
  return (
    <div className="findAuthor" id="findAuthor">
      <h1>Explore Our Book Collection</h1>
      <h2>Search under Author Name</h2>

      <div className="findAuthor-list">
        {book_list.map((item, index) => {
          return (
            <div
              className="findAuthor-list-item"
              onClick={() =>
                setAuthorName((prev) =>
                  prev === item.authorName ? "All" : item.authorName
                )
              }
              key={index}
            >
              <h3
                className={authorName === item.authorName ? "activeAuthor" : ""}
              >
                {item.authorName}
              </h3>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default FindAuthor;
