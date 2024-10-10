import React from 'react'
import Logo from '../../img/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'; 
// import { faHeart } from '@fortawesome/free-svg-icons';
// import  css from '../Nav/Nav.css'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  Desktop">
  <div className="container-fluid">
    {/* Toggler Button */}
    <button
      className="navbar-toggler m-0 p-0"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Logo */}
    <a className="navbar-brand m-0 p-0" href="#">
      <img src={Logo} alt="Cart" className="icon m-0 p-0" />
    </a>

    {/* Search Form */}
    <form className="d-flex">
  <div className="input-group" style={{borderRadius:'25px'}}>
    <span className="input-group-text bg-white border-0" id="search-icon">
      <FontAwesomeIcon icon={faMagnifyingGlass} color="#fe3232" />
    
    <input
      className="form-control border-0 rounded-lg"
      type="search"
      placeholder="Search here..."
      aria-label="Search"
      style={{width:'150px'}}
      
    />
    </span>
  </div>
</form>


    {/* Wishlist Icon */}
    <a href="#" className="icon">
      <FontAwesomeIcon icon={faHeart} className="px-1" color="#F83636" />
    </a>

    {/* Offcanvas for Links */}
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    
  )
}



export default Nav


