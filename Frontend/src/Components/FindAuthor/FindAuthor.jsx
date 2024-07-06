import React from "react";
import "./FindAuthor.css";
import { author_list } from "../../assets/assets";

const FindAuthor = ({ authorName, setAuthorName }) => {
  return (
    <div className="findAuthor" id="findAuthor">
      <h1>Explore Our Book Collection</h1>
      <h2>Search under Author Name</h2>

      <div className="findAuthor-list">
        {author_list.map((item, index) => {
          return (
            <div
              className="findAuthor-list-item"
              onClick={() =>
                setAuthorName((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
            >
              <h3
                className={authorName === item.menu_name ? "activeAuthor" : ""}
              >
                {item.menu_name}
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
