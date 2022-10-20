import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./product.scss";
import Productable from "../../components/productable/Productable";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="productList">
          <div className="datatableTitle">
            <span>Add New Product</span>
            <Link
              to="/products/productId/new"
              style={{ textDecoration: "none" }}
            >
              <span className="link">Add New </span>
            </Link>
          </div>
          <Productable />
        </div>
      </div>
    </div>
  );
};

export default Product;
