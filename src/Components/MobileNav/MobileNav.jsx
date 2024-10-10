import React from 'react';
import './MobileNav.css'
function MobileNav() {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light d-md-none "> {/* Hide on screens larger than md */}
      <div className="container-fluid justify-content-around">
        <a href="/" className="nav-link text-center">
        <i class="fa fa-home"></i>
          <p>Home</p>
        </a>
        <a href="/cart" className="nav-link text-center">
          <i class="fa fa-shopping-cart"></i>
          <p>Cart</p>
        </a>
        <a href="/" className="nav-link text-center">
          <i class="fa fa-list"></i>
          <p>Categories</p>
        </a>
        <a href="/profile" className="nav-link text-center">
          <i class="fa fa-user"></i>
          <p>Profile</p>
        </a>
      </div>
    </nav>
  );
}

export default MobileNav;
