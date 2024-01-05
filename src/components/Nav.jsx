import React from "react";
import { Link } from "react-scroll";
import { navbar, list, item } from "./css/nav.module.css";
function Nav() {
  return (
    <section className={navbar}>
      <ul className={list}>
        <li className={item}>
          <Link to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className={item}>
          <Link to="about" smooth={true} duration={500} offset={-100}>
            Holaaa!
          </Link>
        </li>
        <li className={item}>
          <Link to="estudio" smooth={true} duration={500} offset={-200}>
            Estudios
          </Link>
        </li>
        <li className={item}>
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            Proyectos
          </Link>
        </li>
      </ul>
    </section>
  );
}
export default Nav;