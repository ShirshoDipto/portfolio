import { useEffect, useState } from "react";
import "./scrollUp.css";

const ScrollUp = () => {
  const [isScrolltop, setIsScrollTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 300) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a href="#" className={isScrolltop ? "scrollUp showScroll" : "scrollUp"}>
      <i className="uil uil-arrow-up scrollUpIcon"></i>
    </a>
  );
};

export default ScrollUp;
