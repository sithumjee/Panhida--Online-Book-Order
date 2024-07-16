import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddSchoolbooks.css";

const AddSchoolbooks = ({ url }) => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    subject: "Mathematics",
    grade: "Grade 1",
    part: "Part 1",
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
    formData.append("image", image);
    const response = await axios.post(
      `${url}/api/schoolbooks/addschoolbook`,
      formData
    );
    if (response.data.success) {
      setData({
        subject: "Mathematics",
        grade: "Grade 1",
        part: "Part 1",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="addschoolbook">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="addschoolbook-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.uploadArea}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="addschoolbook-subject flex-col">
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

        <div className="addschoolbook-grade flex-col">
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

        <div className="addschoolbook-title flex-col">
          <p>PastPaper Part</p>
          <select onChange={onChangeHandler} value={data.part} name="part">
            <option value="Part 1"> Part 1</option>
            <option value="Part 2"> Part 2</option>
          </select>
        </div>

        <button type="submit" className="addschoolbook-button">
          Add PastPapers
        </button>
      </form>
    </div>
  );
};

export default AddSchoolbooks;
