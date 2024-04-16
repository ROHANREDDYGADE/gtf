// ProductContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async (slug) => {
      try {
        const { data } = await axios.get(`https://gtf-lemon.vercel.app/product/get-product/${slug}`);
        setProduct(data?.product);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch data on component mount
    fetchProductDetails();
  }, []);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};