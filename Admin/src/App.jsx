import React from "react";
import Navbar from "./componenets/Navbar/Navbar";
import Sidebar from "./componenets/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
