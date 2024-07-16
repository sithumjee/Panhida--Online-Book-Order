import React, { useContext } from "react";
import "./SchoolBookItem.css";
import { StoreContext } from "../../Context/StoreCntext";
import { Link } from "react-router-dom";

const SchoolBookItem = ({ id, part, subject, grade, image }) => {
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
        <h3 className="schoolbook-item-grade">{part}</h3>
      </div>
      <div>
        <Link to="/download/schoolbooks">
          <button className="schoolbookbutton">Download</button>
        </Link>
      </div>
    </div>
  );
};

export default SchoolBookItem;
