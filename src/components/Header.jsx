import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-body-tertiary">
        <a className="navbar-brand" href="/">
          <img
            src="logo.png"
            alt="Beach Resort Logo"
            className="navbar-logo"
            style={{
              color: "Red",
              fontSize: "30px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          />
          <h6 style={{ marginLeft: "10px", color: "red", fontSize: "20px" }}>
            Paradise Heaven
          </h6>
        </a>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/booking"
                >
                  Booking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/blog">
                  Blog
                </a>
              </li>

              <li>
                <a className="nav-link active" href="/room">
                  Rooms
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/services">
                      Services
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/faq">
                      FAQs
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <button className="nav-btn">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/contact"
                >
                  Contact
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
