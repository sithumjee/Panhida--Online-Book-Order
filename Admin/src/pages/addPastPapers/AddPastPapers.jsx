import React from "react";
import "./AddPastPapers.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddPastPapers = ({ url }) => {
  const [data, setData] = useState({
    subject: "",
    grade: "Grade 1",
    part: "part 1",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("subject", data.subject);
    formData.append("grade", data.grade);
    formData.append("part", data.part);

    try {
      const response = await axios.post(
        `${url}/api/pastpapers/addPastPapers`,
        formData
      );
      console.log("Response:", response.data);
      if (response.data.success) {
        setData({
          subject: "",
          grade: "Grade 1",
          part: "part 1",
        });
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add past paper");
    }
  };

  return (
    <div className="addpastpapers">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="addpastpapers-subject flex-col">
          <p>Subject</p>
          <input
            onChange={onChangeHandler}
            value={data.subject}
            name="subject"
            type="text"
            placeholder="Enter"
          ></input>
        </div>

        <div className="addpastpapers-grade flex-col">
          <p>Grade</p>
          <select onChange={onChangeHandler} value={data.grade} name="grade">
            <option value="Grade 1"> Grade 1</option>
            <option value="Grade 2"> Grade 2</option>
            <option value="Grade 3"> Grade 3</option>
            <option value="Grade 4"> Grade 4</option>
            <option value="Grade 5"> Grade 5</option>
            <option value="Grade 6"> Grade 6</option>
            <option value="Grade 7"> Grade 7</option>
            <option value="Grade 8"> Grade 8</option>
            <option value="Grade 9"> Grade 9</option>
            <option value="Grade 10"> Grade 10</option>
            <option value="Grade 11"> Grade 11</option>
            <option value="Grade 12"> Grade 12</option>
            <option value="Grade 13"> Grade 13</option>
          </select>
        </div>

        <div className="addpastpapers-part flex-col">
          <p>Paper part</p>
          <select onChange={onChangeHandler} value={data.part} name="part">
            <option value="part 1"> part 1</option>
            <option value="part 2"> part 2</option>
          </select>
        </div>

        <button type="submit" className="addpastpapers-button">
          Add PastPaper
        </button>
      </form>
    </div>
  );
};

export default AddPastPapers;
