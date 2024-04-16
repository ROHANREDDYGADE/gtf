import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/user/user-create-product"
            className="list-group-item list-group-item-action"
          >
            create product
          </NavLink>
          <NavLink
            to="/dashboard/user/my-pitch"
            className="list-group-item list-group-item-action"
          >
            my posts
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;