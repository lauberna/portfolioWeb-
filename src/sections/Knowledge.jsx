import {
  FaPython,
  FaJava,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript, IoSunnyOutline } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";

import { FaComputer } from "react-icons/fa6";
import { SlChemistry } from "react-icons/sl";
import { RiTeamLine } from "react-icons/ri";
import s from "./css/Knowledge.module.css";
import { SiPostman } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { PiPlant } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import { BiMath } from "react-icons/bi";

import "./css/technologies.css";
import React from "react";

const Knowledge = () => {
  console.log(s);
  const data = [
    {
      school: "LICEO AGRICOLA Y ENOLOGICO",
      degree: "Tecnico en tecnologia de los alimentos",
      icons: [<PiPlant />, <SlChemistry />, <BiMath />, <IoSunnyOutline />],
      time: "2016 - 2022",
    },
    {
      school: "UTN MENDOZA",
      degree: "Tecnicatura universitaria en programacion",
      icons: [<BiMath />, <FaPython />, <FaJava />, <FaComputer />],
      time: "2023 - 2025",
    },
    {
      school: "DIGITAL HOUSE",
      degree: "Certified Tech developer",
      icons: [
        <IoLogoJavascript />,
        <FaCss3Alt />,
        <FaHtml5 />,
        <RiTeamLine />,
        <FaDatabase />,
        <FaReact />,
        <LuPlus />,
      ],
      time: "2022 - 2025",
    },
    {
      school: "CODER HOUSE",
      degree: "JavaScript developer",
      icons: [<IoLogoJavascript />, <FaCss3Alt />, <FaHtml5 />],
      time: "2016 - 2017",
    },
  ];
  const skillsData = [
    {
      type: "FrontEnd",
      skills: [
        { icon: <IoLogoJavascript />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaReact />, name: "React" },
      ],
    },
    {
      type: "BackEnd",
      skills: [
        { icon: <SiSpring />, name: "Spring" },
        { icon: <GrMysql />, name: "MySql" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiPostman />, name: "Postman" },
      ],
    },
  ];

  return (
    <div className={s.container}>
      <h2 className={s.tittleS}>Tecnologias</h2>
      <section className={s.skills}>
        {skillsData.map((category, index) => (
          <div key={index} className={s.skillCont}>
            <h4 className={s.skillstype}>{category.type}</h4>
            <div className={s.cardSkills}>
              <div className={s.skillIcons}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={s.skillIcon}>
                    {skill.icon}
                    <p className={s.skillName}>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <h2 className={s.tittleS}>Experiencia - Estudios</h2>
      <section id="experiencia" className={s.study}>
        {data.map((item, index) => (
          <div key={index} className={s.card}>
            <header className={s.cardHeader}>
              <h3 className={s.title}>{item.school}</h3>
              <div className={s.icons}>
                {item.icons.map((ic, index) => {
                  return <div key={index}>{ic}</div>;
                })}
              </div>
            </header>
            <div className={s.line}></div>
            <section className={s.info}>
              <h4 className={s.tit}>{item.degree}</h4>
              <div className={s.time}>
                <CiTimer /> {item.time}
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Knowledge;
