import React from "react";
import { Link } from "react-scroll";
import { navbar, list, item } from "./css/nav.module.css";

function Nav() {
  const offsetValue = -150; // Ajusta este valor según sea necesario

  return (
    <div className={navbar}>
      <ul className={list}>
        <li className={item}>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className={item}>
          <Link to="about" smooth={true} duration={500} offset={-100}>
            About
          </Link>
        </li>
        <li className={item}>
          <Link to="experiencia" smooth={true} duration={500} offset={-200}>
            Experience
          </Link>
        </li>
        <li className={item}>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;