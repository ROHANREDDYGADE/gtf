import React from 'react'
import { NavLink } from "react-router-dom";
const InvestorMenu = () => {
  return (
    <>
    <div className="list-group">
       <h4>Investor Panel</h4>
     <NavLink to="/dashboard/investor/ideas" className="list-group-item list-group-item-action" aria-current="true">
       create category
     </NavLink>
   
   </div>
   
   
      </>
  )
}

export default InvestorMenu
