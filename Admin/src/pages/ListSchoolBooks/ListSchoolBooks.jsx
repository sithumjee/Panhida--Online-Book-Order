import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

const ListSchoolBooks = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/schoolbooks/listschoolbook`);

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

  const removeBook = async (bookId) => {
    try {
      const response = await axios.post(
        `${url}/api/schoolbooks/removeschoolbook`,
        {
          _id: bookId,
        }
      );
      if (response.data.success) {
        toast.success("Book removed successfully");
        await fetchList();
      } else {
        toast.error("Error removing Book");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error removing Book");
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
          <b>Part</b>
          <b>Subject</b>
          <b>Grade</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.part}</p>
              <p>{item.subject}</p>
              <p>{item.grade}</p>

              <p onClick={() => removeBook(item._id)} className="cursor">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSchoolBooks;
