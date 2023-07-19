import "./header.css";
import { useEffect, useState } from "react";

const Header = ({ activeNav, setActiveNav }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrollHeader, setIsScrollHeader] = useState(false);
  const [isFirstTime, setIsFirst] = useState(true);

  function bringMaginLine() {
    const magicLine = document.querySelector(".magicLine");
    const active = document.querySelector(".activeLink");
    const width = active.offsetWidth;
    const left = active.offsetLeft;

    magicLine.style.width = width + "px";
    magicLine.style.left = left + "px";
  }

  useEffect(() => {
    function onScroll() {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 80) {
        setIsScrollHeader(true);
      } else {
        setIsScrollHeader(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const navMenus = document.querySelectorAll(".navItem");
    let timeoutId;

    timeoutId = setTimeout(() => {
      bringMaginLine();
      setIsFirst(false);
    }, 800);

    navMenus.forEach((menu) => {
      menu.addEventListener("mouseleave", bringMaginLine);
    });

    return () => {
      clearTimeout(timeoutId);
      navMenus.forEach((menu) => {
        menu.removeEventListener("mouseleave", bringMaginLine);
      });
    };
  }, []);

  useEffect(() => {
    if (isFirstTime) return;

    bringMaginLine();
  }, [activeNav, isFirstTime]);

  return (
    <header className={isScrollHeader ? "header scrollHeader" : "header"}>
      <nav className="nav container">
        <a href="#home" className="navLogo">
          Shirsho
        </a>

        <div className={showMenu ? "navMenu showMenu" : "navMenu"}>
          <ul className="navList grid">
            <li className="navItem">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "navLink activeLink" : "navLink"
                }
                // onClick={() => setActiveNav("#home")}
              >
                <i className="uil uil-estate navIcon"></i>Home
              </a>
            </li>

            <li className="navItem">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "navLink activeLink" : "navLink"
                }
                // onClick={() => setActiveNav("#about")}
              >
                <i className="uil uil-user navIcon"></i>About
              </a>
            </li>

            <li className="navItem">
              <a
                href="#skills"
                className={
                  activeNav === "#skills" ? "navLink activeLink" : "navLink"
                }
                // onClick={() => setActiveNav("#skills")}
              >
                <i className="uil uil-file-alt navIcon"></i>Skills
              </a>
            </li>

            {/* <li className="navItem">
              <a
                href="#services"
                className={
                  activeNav === "#services" ? "navLink activeLink" : "navLink"
                }
                // onClick={() => setActiveNav("#services")}
              >
                <i className="uil uil-briefcase-alt navIcon"></i>Services
              </a>
            </li> */}

            <li className="navItem">
              <a
                href="#project"
                className={
                  activeNav === "#project" ? "navLink activeLink" : "navLink"
                }
                // onClick={() => setActiveNav("#project")}
              >
                <i className="uil uil-scenery navIcon"></i>Projects
              </a>
            </li>

            <li className="navItem">
              <a
                href="#contact"
                className={
                  activeNav === "#contact" ? "navLink activeLink" : "navLink"
                }
                // onClick={() => setActiveNav("#contact")}
              >
                <i className="uil uil-message navIcon"></i>Contact
              </a>
            </li>
          </ul>
          <div className="magicLine"></div>

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
