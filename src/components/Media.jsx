import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import { FaGithub } from "react-icons/fa6";
import React from "react";
import "./css/media.css";
const Media = () => {
  return (
    <div className="iconCont">
      <a href="https://www.instagram.com/lauberna_music/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/laureano-berna-544ab12a1/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://github.com/lauberna" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://w.app/lauberna" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="icon" />
      </a>
      <a href="mailto:bernalaureano2002@gmail.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineMail className="icon" />
      </a>
    </div>
  );
};

export default Media;

