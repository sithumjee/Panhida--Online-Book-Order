import React from "react";
import "./PastPapersItem.css";

const PastPapersItem = ({ id, subject, grade, part }) => {
  return (
    <div className="pastPapers-item">
      <div>
        <h3 className="schoolbook-item-subject">Subject:{subject}</h3>
        <h3 className="schoolbook-item-grade">Grade:{grade}</h3>
        <h3 className="schoolbook-item-part">Part:{part}</h3>
      </div>
      <div>
        <button className="schoolbookbutton">Download</button>
      </div>
    </div>
  );
};

export default PastPapersItem;
