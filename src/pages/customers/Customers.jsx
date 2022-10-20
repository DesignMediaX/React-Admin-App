import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import "./customers.scss";

const Customers = () => {
  return (
    <div className="customers">
      <Sidebar />
      <div className="customersContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default Customers;
