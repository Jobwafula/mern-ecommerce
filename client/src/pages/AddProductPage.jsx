import React from "react";


import AddProduct from "../components/AddProduct";
import Navbar from "../components/Navbar";

const AddProductPage = () => {
  return (
    <React.Fragment>
        <Navbar />
      
      <AddProduct />
    </React.Fragment>
  );
};

export default AddProductPage;