// UserCreateProduct.js

import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
const { Option } = Select;

const UserCreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [productName, setproductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
 
  const [auth, setAuth] = useAuth();

  // Destructure _id and name directly from auth object
  const { _id, name } = auth;

 
  // console.log(name._id);
  // console.log(name.name)

  
  
  // console.log(userId)
  // console.log(userName)

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://gtf-lemon.vercel.app/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", productName);
      productData.append("description", description);
      productData.append("userid", name._id);
      productData.append("username", name.name);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = await axios.post(
        "https://gtf-lemon.vercel.app/product/user-create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/user");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={productName}
                  placeholder="Write a name"
                  className="form-control"
                  onChange={(e) => setproductName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="hidden"
                  value={name._id}
                  placeholder="Write a name"
                  className="form-control"
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="hidden"
                  value={name.name}
                  placeholder="Write a name"
                  className="form-control"
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="Write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserCreateProduct;
