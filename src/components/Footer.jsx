import Media from "./Media";
import "./css/Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="upper-f">
        <div className="line-f"></div>
        <Media />
        <div className="line-f"></div>
      </section>
      <section className="down-f">
{/*         <a href="">resume</a>
        <p>|</p> */}
        <p className="anio">© 2024</p>
      </section>
    </footer>
  );
};

export default Footer;
