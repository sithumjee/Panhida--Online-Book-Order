import React from "react";
import Navbar from "./componenets/Navbar/Navbar";
import Sidebar from "./componenets/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddSchoolbooks from "./pages/AddSchoolbooks/AddSchoolbooks";
import ListSchoolBooks from "./pages/ListSchoolBooks/ListSchoolBooks";

const App = () => {
  const url = "https://panhida-online-book-order-backend.onrender.com";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
          <Route path="/addschoolbook" element={<AddSchoolbooks url={url} />} />
          <Route
            path="/listschoolbook"
            element={<ListSchoolBooks url={url} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
