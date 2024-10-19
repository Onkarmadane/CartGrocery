import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './MobileNav.css';
import NotFound from '../NotFound/NotFound';

function MobileNav() {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light d-md-none"> {/* Hide on screens larger than md */}
      <div className="container-fluid justify-content-around">
        <Link to="/Home" className="nav-link text-center">
          <i className="fa fa-home"></i>
          <p>Home</p>
        </Link>
        <Link to="/notfound" className="nav-link text-center">
          <i className="fa fa-shopping-cart"></i>
          <p>Cart</p>
        </Link>
        <Link to="/HotelListPage" className="nav-link text-center">
          <i className="fa fa-list"></i>
          <p>Hotels</p>
        </Link>
        <Link to="/Profile" className="nav-link text-center">
          <i className="fa fa-user"></i>
          <p>Profile</p>
        </Link>
      </div>
    </nav>
  );
}

export default MobileNav;
