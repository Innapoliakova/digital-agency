import React from "react";

const Header = () => {
  return (
    <header>
      <div className="desktopHeader">
        <a href="#" id="digital">
          Digital Agency
        </a>

        <input type="checkbox" id="burger" />
        <label htmlFor="burger">|||</label>
      
        <nav>
          <ul>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
