import React from 'react'

function Header() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg  bg-body-tertiary">
      <h1 style={{
      color:"Red",
      fontSize:"30px",
      fontWeight:"bold",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      marginLeft:"20px",
    }}>BEACH RESORT</h1>
  <div className="container-fluid">
  
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/booking">Booking</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/room">Rooms</a></li>
            <li><a className="dropdown-item" href="/services">Services</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/faq">FAQs</a></li>
          </ul>
        </li>
       
       
       
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
