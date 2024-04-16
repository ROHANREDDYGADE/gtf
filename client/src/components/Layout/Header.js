
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth.js';
import toast from 'react-hot-toast';

const Header = () => {
  const [auth, setAuth] = useAuth(); // Assuming useAuth is a custom hook to get authentication state

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    });
    localStorage.removeItem('auth');
    toast.success("Logged out successfully");
  };

  return (
    <div className="header-wrap">
      <div className="headermain">
        <div className="container">
          <div className="row headerflex">
            <div className="headercontact col-md-6">
              <NavLink to="/contactus">
                <span className="icr"><i className="fa-solid fa-phone" /></span>+91 999999999
              </NavLink>
              <NavLink to="/contactus">
                <span className="icr"><i className="fa-regular fa-envelope" /></span>school@gmail.com
              </NavLink>
            </div>
            <div className="header-media col-md-6 text-end">
              <NavLink to="#"><i className="fab fa-facebook-f" /></NavLink>
              <NavLink to="#"><i className="fa-regular fa-envelope" /></NavLink>
              <NavLink to="#"><i className="fa-brands fa-x-twitter" /></NavLink>
              <NavLink to="#"><i className="fab fa-linkedin-in" /></NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="headerdetails">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 navbar-light">
              <div className="logo">
                <NavLink to="/">
                  <img alt="" src="./images/logo.jpeg" />
                </NavLink>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className id="menu-icon"><i className="fa-solid fa-bars" /></span>
              </button>
            </div>
            <div className="col-lg-9 col-md-12 cent">
              <div className="navigation-wrap" id="filters">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <NavLink className="navbar-brand" to="#">Menu</NavLink>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink to="/" className="nav-link hove">Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About Us</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/founder" className="nav-link">Founder</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/investor" className="nav-link">Investor</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/events" className="nav-link">Events</NavLink>
                      </li>
                      
                      {auth.user && auth.user.role === 2 && (
  <li className="nav-item">
    <NavLink to="/dashboard/investor/ideas" className="nav-link">Ideas</NavLink>
  </li>
)}

                      {!auth.user ? (
                        <>
                          <li className="nav-item"><NavLink to="/register" className="nav-link">Registration</NavLink></li>
                          <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
                        </>
                      ) : (
                        <>
                          {/* <li className="nav-item"><NavLink onClick={handleLogout} to="/login" className="nav-link">Logout</NavLink></li> */}

                          <li className="nav-item">
                        <NavLink to="#" className="nav-link">{auth?.user?.name}</NavLink>
                        <i className="fas fa-caret-down" />
                        <ul className="submenu">
                          <li> <NavLink to={`/dashboard/${auth.user.role === 1 ? "admin" : auth.user.role === 2 ? "investor" : "user"}`}>
          Dashboard
        </NavLink></li>
                          {/* <li><NavLink to="/ideas">Ideas</NavLink></li> */}
                          <li className="nav-item"><NavLink onClick={handleLogout} to="/login" className="nav-link">Logout</NavLink></li>
                        </ul>
                      </li>

                        </>
                      )}
                      
                      <li className="nav-item">
                        <NavLink to="/contact" className="nav-link conta">Contact Us</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
