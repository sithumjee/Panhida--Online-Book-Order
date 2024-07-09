import React, { useContext } from "react";
import "./PastPapers.css";
import { StoreContext } from "../../Context/StoreCntext";
import PastPapersItem from "../PastPapersItem/PastPapersItem";

const PastPapers = () => {
  const { pastPapers_list } = useContext(StoreContext);
  return (
    <div className="pastPapers">
      <h1>PastPapers</h1>
      <div className="pastPapers-display-list">
        {pastPapers_list.map((item, index) => {
          return (
            <PastPapersItem
              key={index}
              id={item._id}
              subject={item.subject}
              grade={item.grade}
              part={item.part}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PastPapers;
