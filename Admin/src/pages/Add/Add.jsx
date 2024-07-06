import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    authorName: "",
    description: "",
    price: "",
    category: "Fiction",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("authorName", data.authorName);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        authorName: "",
        description: "",
        price: "",
        category: "category1",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
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

        <div className="add-name flex-col">
          <p>Book Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Enter"
          />
        </div>

        <div className="add-authorName flex-col">
          <p>Author Name</p>
          <input
            onChange={onChangeHandler}
            value={data.authorName}
            type="text"
            name="authorName"
            placeholder="Enter"
          />
        </div>
        <div className="add-description flex-col">
          <p>Book description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            rows="6"
            name="description"
            placeholder="Enter"
            required
          ></textarea>
        </div>

        <div className="add-price-category ">
          <div className="add-category flex-col">
            <p>Book Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="Fiction"> Fiction</option>
              <option value="Romance"> Romance</option>
              <option value="Mystery and Triller"> Mystery and Triller</option>
              <option value="History"> History</option>
              <option value="Personal Development">
                {" "}
                Personal Development
              </option>
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

          <div className="add-price flex-col">
            <p>Book Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="Rs"
            />
          </div>
        </div>

        <button type="submit" className="add-button">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
