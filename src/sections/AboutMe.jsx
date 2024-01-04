import {
  FaPython,
  FaJava,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript, IoSunnyOutline } from "react-icons/io5";
import { RiJavascriptLine, RiTeamLine } from "react-icons/ri";
import { LuGithub, LuPlus } from "react-icons/lu";
import { TbBrandFirebase } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { TbBrandCss3 } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import Hashtag from "../components/Hashtag";
import { GrMysql } from "react-icons/gr";
import { PiPlant } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import { BiMath } from "react-icons/bi";
import "./css/AboutMe.css";
import React from "react";

const AboutMe = () => {
  return (
    <div className="about">
      <section className="profile">
        <img className="profilePic" src="/Profile.jpg" />
      </section>

      <section className="descripcion">
        <div className="desCont">
          <h2 className="titulo">Holaaaa!</h2>
          <div className="parrafo">
            <p>
              Soy Laureano Berna, estudiante de programación con 21 años
              de edad. A lo largo de mi vida, mi fascinación por la tecnología
              ha evolucionado, llevándome al emocionante mundo del desarrollo
              web, donde actualmente me desenvuelvo con entusiasmo.
            </p>
            <p>
              Además de mi dedicación a la programación, tengo una gran pasión
              por la música electrónica, donde como productor musical y DJ,
              canalizo mi creatividad en la creación de tracks
              propios. Estos dos universos, la programación y la música, convergen
              en mi vida, creando una combinación que impulsa mi energía y
              dedicación en ambos campos.
            </p>
          </div>
          <Hashtag />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
