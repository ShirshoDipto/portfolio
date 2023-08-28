import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer container">
        <h1 className="footerTitle">Shirsho</h1>

        <ul className="footerList">
          {/* <li>
            <a href="#about" className="footerLink">
              About
            </a>
          </li> */}
          <li>
            <a href="#project" className="footerLink">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footerLink">
              Skills
            </a>
          </li>
        </ul>

        <div className="footerSocial">
          <a
            href="https://www.linkedin.com/in/shirsho-dipto-092a53222/"
            className="footerSocialLink"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/ShirshoDipto"
            className="footerSocialLink"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.facebook.com/mohammad.roger.77/"
            className="footerSocialLink"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footerCopyright">
          &#169; Shirsho Dipto. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
