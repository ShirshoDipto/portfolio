import React from "react";

const Social = ({ inView }) => {
  return (
    <div className={inView ? "homeSocial homeShift" : "homeSocial"}>
      <a
        href="https://www.linkedin.com/in/shirsho-dipto/"
        className="homeSocialIcon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/ShirshoDipto"
        className="homeSocialIcon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>

      <a
        href="https://www.facebook.com/mohammad.roger.77/"
        className="homeSocialIcon"
        target="_blank"
      >
        <i class="uil uil-facebook"></i>
      </a>
    </div>
  );
};

export default Social;
