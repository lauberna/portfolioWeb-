import s from "./css/Welcome.module.css";
import React from "react";
import Media from "../components/media";

const Welcome = () => {
  return (
    <section id="home" className={s.home}>
      <div className={s.cont}>
        <div className={s.title}>
          <div className={s.name}>
            <span>LAU</span>
            <span>BERNA</span>
          </div>
          <p className={s.dev}>Estudiante desarrollador Front End</p>
          <Media/>
        </div>
        <div className={s.anim}>
          <video className={s.vid} autoPlay loop muted playsInline preload="auto">
            <source src="/bubble.webm"  />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
