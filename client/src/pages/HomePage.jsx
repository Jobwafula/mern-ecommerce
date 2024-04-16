import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";

export default function HomePage() {

    const [productList, setProductList] = useState([]);
    useEffect(() => {
        getProduct();
      }, []);
    
      const getProduct = async () => {
        try {
          const response = await axios.get("http://localhost:5000/read");
          setProductList(response.data);
          console.log(response.data);
        } catch (e) {
          console.log(e);
        }
      };
  return (
    <React.Fragment>
        
      <Navbar />
      <Grid container gap={3} sx={{ paddingTop: 2, paddingLeft: 3 }}>
        {productList.length !== 0 &&
          productList.map((product) => (
            <Grid item key={product._id}>
              <ProductCard
                key={product._id}
                product={product}
                getProduct={() => getProduct()}
              />
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  )
}
