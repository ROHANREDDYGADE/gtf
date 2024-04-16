import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
  <div className="footer-full p-relative z-index">
    <div className="footer-in pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50">
            <div className="footer-icons footer-col-1">
              <div className="footer-logo pb-40">
                <Link to="/">
                  <img src="./images/logo.jpeg"  alt />
                </Link>
              </div>
              <div className="footer-text pb-15">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
              </div>
              <div className="footer-media">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fa-regular fa-envelope" /></a>
                <a href="#"><i className="fa-brands fa-x-twitter" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 ">
            <div className="footer-icons footer-col-2">
              <h4 className="footer-head">QUICK LINKS</h4>
              <div className="footer-list">
                <ul>
                  <li><Link to="/"><i className="fa-solid fa-chevron-right" />Home</Link></li>
                  <li><Link to="/about"><i className="fa-solid fa-chevron-right" />About</Link></li>
                  <li><Link to="/services"><i className="fa-solid fa-chevron-right" />Services</Link></li>
                  <li><Link to="/team"><i className="fa-solid fa-chevron-right" />Our Team</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50">
            <div className="footer-icons footer-col-3">
              <h4 className="footer-head">Support</h4>
              <div className="footer-list">
                <ul>
                  <li><Link to="/help"><i className="fa-solid fa-chevron-right" />Help Center</Link></li>
                  <li><Link to="/contact"><i className="fa-solid fa-chevron-right" />Contact Us</Link></li>
                  <li><Link to="/faq"><i className="fa-solid fa-chevron-right" />FAQ</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50">
            <div className="footer-icons footer-col-4">
              <h4 className="footer-head">Get In Touch</h4>
              <div className="footer-contact">
                <ul>
                  <li>
                    <a href="#" target="_blank"><span><i className="fa-solid fa-location-dot" /></span>
                      Hanamkonda, warangal </a>
                  </li>
                  <li>
                    <a href="tel:+9813127756689"><span><i className="fa-solid fa-phone" /></span>+91 9398134952</a>
                  </li>
                  <li>
                    <a href="#"><span><i className="fa-solid fa-envelope" /></span>demo@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright theme-bg copyright-height">
    <div className="container">
      <div className="row ">
        <div className="col-sm-12 col-md-12 align-cen">
          <div className="it-copyright-text ">
            <p>© 2024 All Rights Reserved by Grab The Funds</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
