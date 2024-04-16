import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [lastPartOfUrl, setLastPartOfUrl] = useState('');

  // Get the last part of the URL when component mounts
  useEffect(() => {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    setLastPartOfUrl(lastPart);
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (lastPartOfUrl) {
        try {
            console.log(lastPartOfUrl)
          const { data } = await axios.get(`https://gtf-lemon.vercel.app/product/get-product/${lastPartOfUrl}`);
          setProduct(data?.product);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchProductDetails();
  }, [lastPartOfUrl]);

  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          {product._id && (
            <img
              src={`https://gtf-lemon.vercel.app/product/product-photo/${product._id}`}
              className="card-img-top"
              alt={product.name}
              height="300"
              width={"350px"}
            />
          )}
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Product Details</h1>
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>Price : {product.price}</h6>
          <h6>Category : {product?.category?.name}</h6>
          <button className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
