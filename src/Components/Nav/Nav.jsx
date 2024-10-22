import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../../img/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import NotFound from '../NotFound/NotFound';
import HotelListPage from '../../Pages/HotelListPage';
const Nav = () => {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary Desktop">
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
        <Link className="navbar-brand m-0 p-0" to="/">
          <img src={Logo} alt="Cart" className=" m-0 p-0 " />
        </Link>

        {/* Search Form */}
        <form className="d-flex">
          <div className="input-group" style={{ borderRadius: '25px' }}>
            <span className="input-group-text bg-white border-0" id="search-icon">
              <lord-icon
                src="https://cdn.lordicon.com/wjyqkiew.json"
                trigger="hover"
                colors="primary:#000000,secondary:#000000"
                style={{ width: '25px', height: '25px' }}>
              </lord-icon>
              <input
                className="form-control border-0 rounded-lg"
                type="search"
                placeholder="Search here..."
                aria-label="Search"
                style={{ width: '150px' }}
              />
            </span>
          </div>
        </form>


        {/* Offcanvas for Links */}
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link {isActive ? "active" : ""}' to="/HotelListPage">Hotels</Link>
                {/* {isActive ? "active" : ""} */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">Charts</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/notfound">Action</Link></li>
                  <li><Link className="dropdown-item" to="/notfound">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/notfound">Something else here</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* Wishlist Icon */}
        <Link to="# " className='mx-1'>
          <FontAwesomeIcon icon={faHeart} className="px-1" color="#F83636" />
        </Link>
        <Link to="#" className='mx-3'>
          <i class="fa fa-right-from-bracket " style={{ color: "#F83636" }}></i>
        </Link>
      </div>

    </nav>
  );
};

export default Nav;
