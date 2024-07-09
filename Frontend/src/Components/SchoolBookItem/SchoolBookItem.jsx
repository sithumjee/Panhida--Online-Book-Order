import React, { useContext } from "react";
import "./SchoolBookItem.css";
import { StoreContext } from "../../Context/StoreCntext";

const SchoolBookItem = ({ id, title, subject, grade, image }) => {
  const { school_book, url } = useContext(StoreContext);
  return (
    <div className="schoolbook-item">
      <div>
        <img
          src={url + "/images/" + image}
          alt=""
          className="schoolbook-item-image"
        />
      </div>
      <div>
        <h3 className="schoolbook-item-subject">{subject}</h3>
        <h3 className="schoolbook-item-grade">{grade}</h3>
      </div>
      <div>
        <button className="schoolbookbutton">Download</button>
      </div>
    </div>
  );
};

export default SchoolBookItem;
