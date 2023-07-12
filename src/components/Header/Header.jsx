import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="navLogo">
          Shirsho
        </a>

        <div className={showMenu ? "navMenu showMenu" : "navMenu"}>
          <ul className="navList grid">
            <li className="navItem">
              <a href="#home" className="navLink activeLink">
                <i className="uil uil-estate navIcon"></i>Home
              </a>
            </li>

            <li className="navItem">
              <a href="#about" className="navLink">
                <i className="uil uil-user navIcon"></i>About
              </a>
            </li>

            <li className="navItem">
              <a href="#skills" className="navLink">
                <i className="uil uil-file-alt navIcon"></i>Skills
              </a>
            </li>

            <li className="navItem">
              <a href="#services" className="navLink">
                <i className="uil uil-briefcase-alt navIcon"></i>Services
              </a>
            </li>

            <li className="navItem">
              <a href="#portfolio" className="navLink">
                <i className="uil uil-scenery navIcon"></i>Portfolio
              </a>
            </li>

            <li className="navItem">
              <a href="#contact" className="navLink">
                <i className="uil uil-message navIcon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times navClose"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>

        <div className="navToggle" onClick={() => setShowMenu(!showMenu)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
