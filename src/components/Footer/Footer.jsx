import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-warp footer-area pt-125 pb-100">
      <div className="container">
        <div className="row">
          <div className="single-footer-widget footer-widget col-lg-3 col-md-6 widget_viba_footer_info">
            <img
              src="logo.png"
              alt="Beach Resort Logo"
              className="navbar-logo"
              style={{
                display: "flex",
                width: "200px",
              }}
            />
            <h3 style={{ color: "red" }}>Paradise Heaven</h3>

            <p>
              Resorts are places where guests visit for recreation, health, and
              pleasure, often located in areas with outdoor facilities for
              recreation and sports. Resorts are popular places that provide
              relaxation, high-quality food, and facilities for healthy
              activities.
            </p>
            <ul className="social-list">
              <li>
                <a target="_blank" href="#" className="icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a target="_blank" href="#" className="icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li>
                <a target="_blank" href="#" className="icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a target="_blank" href="#" className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>

          <div className="single-footer-widget footer-widget col-lg-3 col-md-6 widget_nav_menu">
            <h3>Quick Links</h3>
            <ul className="menu">
              <li>
                <a href="http://localhost:5173/about">About Us</a>
              </li>
              <li>Ocean Fanatics</li>
              <li>
                <a href="http://localhost:5173/room">Rooms</a>
              </li>
            </ul>
          </div>

          <div className="single-footer-widget footer-widget col-lg-3 col-md-6 widget_nav_menu">
            <h3>Extras</h3>
            <ul className="menu">
              <li>
                <a href="http://localhost:5173/contact">Contact Us</a>
              </li>
              <li>Privacy Policy</li>
              <li>Terms Conditions</li>
              <li>
                <a href="http://localhost:5173/faq">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="single-footer-widget footer-widget col-lg-3 col-md-6 widget_viba_contact_info">
            <h3>Address</h3>
            <span>606-3727 Ullamcorper. StreetRoseville NH 11523</span>
            <a href="tel:1414968320" className="phone">
              +1 (414) 968 - 320
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
