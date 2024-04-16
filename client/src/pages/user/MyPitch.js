import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from 'react-router-dom';
const MyPitch = () => {
    const [auth, setAuth] = useAuth();
    const { name } = auth;
    const navigate = useNavigate()
  
    // Set userId using the user's ID
    const userId = name._id;
  
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    const filterProduct = async () => {
      try {
        const { data } = await axios.get("https://gtf-lemon.vercel.app/product/my-pitch", {
          params: {
            userid: userId,
          },
        });
  
        // Filter out products that belong to the current user
        const userProducts = data.products.filter(product => product.userid === userId);
        
        setFilteredProducts(userProducts);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      filterProduct();
    }, []);

  return (
    <Layout>
      <div className="col-md-9">
        <h1 className="text-center">My Uploaded Products</h1>
        <div className="d-flex flex-wrap">
          {filteredProducts?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
              <img
                src={`https://gtf-lemon.vercel.app/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <h5 className="card-title">{p.username}</h5>
                <p className="card-text">
                  {p.description.substring(0, 30)}...
                </p>
                <p className="card-text"> $ {p.price}</p>
                <button class="btn btn-primary ms-1"  onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                <button className="btn btn-secondary ms-1">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};  

export default MyPitch;
