import React, { useContext } from "react";
import "./SchoolBooks.css";
import { StoreContext } from "../../Context/StoreCntext";
import SchoolBookItem from "../SchoolBookItem/SchoolBookItem";

const SchoolBooks = () => {
  const { school_book } = useContext(StoreContext);
  return (
    <div className="schoolBooks">
      <h1>SchoolBooks</h1>
      <div className="schoolBooks-display-list">
        {school_book.map((item, index) => {
          return (
            <SchoolBookItem
              key={index}
              id={item._id}
              subject={item.subject}
              grade={item.grade}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SchoolBooks;
