import React from "react";
import "./AddPastPapers.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddPastPapers = ({ url }) => {
  const [data, setData] = useState({
    part: "part 1",
    subject: "Mathematics",
    grade: "Grade 1",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("part", data.part);
    formData.append("subject", data.subject);
    formData.append("grade", data.grade);
    const response = await axios.post(
      `${url}/api/pastpapers/addPastPapers`,
      formData
    );
    if (response.data.success) {
      setData({
        part: "part 1",
        subject: "Mathematics",
        grade: "Grade 1",
      });
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="addpastpapers">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="addpastpapers-subject flex-col">
          <p>Subject</p>
          <select
            onChange={onChangeHandler}
            value={data.subject}
            name="subject"
          >
            <option value="Mathematics"> Mathematics</option>
            <option value="Science"> Science</option>
            <option value="Sinhala"> Sinhala</option>
            <option value="Buddhism"> Buddhism</option>
            <option value="English"> English</option>
            <option value="Geography"> Geography</option>
            <option value="Health"> Health</option>
            <option value="ICT"> ICT</option>
            <option value="Civics"> Civics</option>
            <option value="History"> History</option>
            <option value="Music"> Music</option>
            <option value="Commerce"> Commerce</option>
          </select>
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
