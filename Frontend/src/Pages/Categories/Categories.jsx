import { React, useState } from "react";
import "./Categories.css";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import BookDisplay from "../../Components/BookDisplay/BookDisplay";

const Categories = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <BookDisplay category={category} />
    </div>
  );
};

export default Categories;
