import React from "react";

const Header = () => {
  return (
    <header>
    
      <nav className="navbar">
        
        <div className="navbar-container container">
          
          <a href="#" id="digital">
            Digital Agency
          </a>

          <input type="checkbox" className="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <ul className="menu-items">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#testimonials">testimonials</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
