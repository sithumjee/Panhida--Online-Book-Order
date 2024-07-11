import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

const ListPastPapers = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/pastpapers/listPastPapers`);

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching book list");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching book list");
    }
  };

  const removePastPapers = async (bookId) => {
    try {
      const response = await axios.post(
        `${url}/api/schoolbooks/removeschoolbook`,
        {
          id: bookId,
        }
      );
      if (response.data.success) {
        toast.success("Food removed successfully");
        await fetchList();
      } else {
        toast.error("Error removing Food");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error removing Food");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All School Book List</p>

      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Title</b>
          <b>Subject</b>
          <b>Grade</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <p>{item.subject}</p>
              <p>{item.grade}</p>
              <p>{item.part}</p>

              <p onClick={() => removePastPapers(item._id)} className="cursor">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListPastPapers;
