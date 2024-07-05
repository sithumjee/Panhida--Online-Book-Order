import { React, useState } from "react";
import "./Categories.css";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../Components/FoodDisply/FoodDisplay";

const Categories = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Categories;
