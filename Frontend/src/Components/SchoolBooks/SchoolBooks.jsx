import React, { useContext, useState } from "react";
import "./SchoolBooks.css";
import { StoreContext } from "../../Context/StoreCntext";
import SchoolBookItem from "../SchoolBookItem/SchoolBookItem";

const SchoolBooks = () => {
  const { school_book } = useContext(StoreContext);
  const [subjectQuery, setSubjectQuery] = useState("");
  const [gradeQuery, setGradeQuery] = useState("");

  const handleSubjectChange = (e) => {
    setSubjectQuery(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGradeQuery(e.target.value);
  };

  const filteredBooks = school_book.filter((book) => {
    const matchesSubject = book.subject
      .toLowerCase()
      .includes(subjectQuery.toLowerCase());
    const matchesGrade = book.grade
      .toLowerCase()
      .includes(gradeQuery.toLowerCase());
    return matchesSubject && matchesGrade;
  });

  return (
    <div className="schoolBooks">
      <h1>School PastPapers</h1>
      <div className="sc-searchbar">
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            placeholder="Search by subject..."
            value={subjectQuery}
            onChange={handleSubjectChange}
            className="schoolBookSearch-input"
          />
        </div>
        <div>
          <label htmlFor="grade">Grade</label>
          <input
            type="text"
            placeholder="Search by grade..."
            value={gradeQuery}
            onChange={handleGradeChange}
            className="schoolBookSearch-input"
          />
        </div>
      </div>
      <hr />
      <div className="schoolBooks-display-list">
        {filteredBooks.map((item) => (
          <SchoolBookItem
            key={item._id}
            id={item._id}
            subject={item.subject}
            grade={item.grade}
            image={item.image}
            part={item.part}
          />
        ))}
      </div>
    </div>
  );
};

export default SchoolBooks;
