import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import AdminRoute from "./components/Routes/AdminRoute";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Ideas from "./pages/Investor/Ideas";
import UserCreateProduct from "./pages/user/UserCreateProduct";
import MyPitch from "./pages/user/MyPitch";
import InvestorRoute from "./components/Routes/InvestorRoute";
import InvestorDashboard from "./pages/Investor/InvestorDashboard";
import ProductDetails from "./pages/Investor/ProductDetails";

function App() {
  return (
    <>
      <Routes>
  <Route path="/" element={<HomePage />} />
  
  {/* Public Routes */}
  <Route path="/register" element={<Register />} />
  <Route path="/forgot-password" element={<ForgotPasssword />} />
  <Route path="/login" element={<Login />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/policy" element={<Policy />} />
  
  {/* Private Routes */}
  <Route path="/dashboard" element={<PrivateRoute />}>
    <Route path="user" element={<Dashboard />} />
    <Route path="user/orders" element={<Orders />} />
    <Route path="user/profile" element={<Profile />} />
    <Route path="user/user-create-product" element={<UserCreateProduct />} />
    <Route path="user/my-pitch" element={<MyPitch />} />
  </Route>

  {/* Admin Routes */}
  <Route path="/dashboard" element={<AdminRoute />}>
    <Route path="admin" element={<AdminDashboard />} />
    <Route path="admin/create-category" element={<CreateCategory />} />
    <Route path="admin/create-product" element={<CreateProduct />} />
    <Route path="admin/product/:slug" element={<UpdateProduct />} />
    <Route path="admin/products" element={<Products />} />
    <Route path="admin/users" element={<Users />} />
  </Route>

  {/* Investor Routes */}
  <Route path="/dashboard" element={<InvestorRoute />}>
    <Route path="investor" element={<InvestorDashboard />} />
    <Route path="investor/ideas" element={<Ideas />} />
    {/* <Route path="investor/product/:slug" element={<ProductDetails />} /> */}
   
  </Route>
  <Route path="product/:slug" element={<ProductDetails />} />
 
  {/* 404 Page */}
  <Route path="*" element={<Pagenotfound />} />
</Routes>

    </>
  );
}

export default App;
