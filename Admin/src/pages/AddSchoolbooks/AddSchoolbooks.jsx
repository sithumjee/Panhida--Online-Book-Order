import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddSchoolbooks = ({ url }) => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    title: "",
    subject: "",
    grade: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subject", data.subject);
    formData.append("grade", data.grade);
    formData.append("image", image);
    const response = await axios.post(
      `${url}/api/schoolbooks/addschoolbook`,
      formData
    );
    if (response.data.success) {
      setData({
        title: "",
        subject: "",
        grade: "",
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

        <div className="addschoolbook-title flex-col">
          <p>Book Title</p>
          <input
            onChange={onChangeHandler}
            value={data.title}
            type="text"
            name="title"
            placeholder="Enter"
          />
        </div>

        <div className="add-category flex-col">
          <p>Subject</p>
          <select
            onChange={onChangeHandler}
            value={data.subject}
            name="subject"
          >
            <option value="Fiction"> Fiction</option>
            <option value="Romance"> Romance</option>
            <option value="Mystery and Triller"> Mystery and Triller</option>
            <option value="History"> History</option>
            <option value="Personal Development"> Personal Development</option>
            <option value="Business and Money"> Business and Money</option>
            <option value="Cookbooks"> Cookbooks</option>
            <option value="Children"> Children</option>
            <option value="Adventure"> Adventure</option>
            <option value="Health and Wellness"> Health and Wellness</option>
            <option value="Philosophy"> Philosophy</option>
            <option value="Art and Photography"> Art and Photography</option>
            <option value="Poetry"> Poetry</option>
            <option value="Religion"> Religion</option>
            <option value="Sports"> Sports</option>
          </select>
        </div>

        <div className="add-category flex-col">
          <p>Grade</p>
          <select onChange={onChangeHandler} value={data.grade} name="grade">
            <option value="Fiction"> Fiction</option>
            <option value="Romance"> Romance</option>
            <option value="Mystery and Triller"> Mystery and Triller</option>
            <option value="History"> History</option>
            <option value="Personal Development"> Personal Development</option>
            <option value="Business and Money"> Business and Money</option>
            <option value="Cookbooks"> Cookbooks</option>
            <option value="Children"> Children</option>
            <option value="Adventure"> Adventure</option>
            <option value="Health and Wellness"> Health and Wellness</option>
            <option value="Philosophy"> Philosophy</option>
            <option value="Art and Photography"> Art and Photography</option>
            <option value="Poetry"> Poetry</option>
            <option value="Religion"> Religion</option>
            <option value="Sports"> Sports</option>
          </select>
        </div>

        <button type="submit" className="add-button">
          AddSchoolbooks
        </button>
      </form>
    </div>
  );
};

export default AddSchoolbooks;
