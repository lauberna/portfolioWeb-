import {
  title,
  dev,
  home,
  name,
  cont,
  anim,
  vid
} from "./css/Welcome.module.css";

import React from "react";
import Media from "../components/media";

const Welcome = () => {
  return (
    <section id="home" className={home}>
      <div className={cont}>
        <div className={title}>
          <div className={name}>
            <span>LAU</span>
            <span>BERNA</span>
          </div>
          <p className={dev}> Desarrollador Front End Junior</p>
          <Media/>
        </div>
        <div className={anim}>
          <video className={vid} autoPlay loop muted playsInline preload="auto">
            <source src="/bubble.mp4"  />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
