import { FaReact, FaCss3Alt } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiVite } from "react-icons/si";
import "./css/Projects.css";
import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio web",
      imageSrc: "/portfolio.webp",
      icons: [
        <FaReact className="ic" />,
        <FaCss3Alt className="ic" />,
        <SiVite className="ic" />,
      ],
      hover: true,
      alt: "screenshot portfolio web"
    },
    {
      id: 2,
      title: "Proximamente",
      imageSrc: "/proximamente.webp",
      icons: [],
      hover: false,
      alt: "foto de proximamente"
    },
  ];
  return (
    <section className="projects">
      <h2 className="project-tit">Proyectos</h2>
      <div className="contenedor">
        {projects.map((project) => (
          <a
            href={project.hover ? "/" : undefined}
            key={project.id}
            className={`card-project ${project.hover ? "hover-card" : ""}`}
          >
            <div className="project-image">
              <HiExternalLink className="go" />
              <img
                loading="lazy"
                className="im"
                src={project.imageSrc}
                alt={project.alt}
              />
            </div>
            <div className="project-descrip">
              <h3>{project.title}</h3>
              <div className="project-icons">
                {project.icons.map((ic, ind) => {
                  return <div key={ind}>{ic}</div>;
                })}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
