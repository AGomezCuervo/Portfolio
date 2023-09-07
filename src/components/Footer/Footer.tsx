import style from "./Footer.module.css";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import gmail from "../../assets/icons/gmail.svg";
import React from "react";

interface References {
  profileRef: React.RefObject<HTMLElement>;
  aboutMeRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
}

const Footer = (props: References) => {
  const {aboutMeRef, projectsRef} = props;

  const scrollView = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = (event.target as HTMLButtonElement).name;
    switch(name) {
      case "whoAmI":
        aboutMeRef.current?.scrollIntoView({behavior:"smooth"})
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({behavior:"smooth"})
        break;
    }
  }

  return (
    <footer className={style.Footer}>
      <div className={style.IconContainer}>
        <img src={github}/>
        <img src={linkedin}/>
        <img src={gmail}/>
      </div>
      <hr/>
      <div className={style.Container}>
        <div className={style.LinkContainer}>
          <h1>Navegación</h1>
          <button name="whoAmI" onClick={scrollView}>About me</button>
          <button name="projects" onClick={scrollView}>Projects</button>
        </div>
        <div className={style.LinkContainer}>
          <h1>Redes Sociales</h1>
          <a href="https://github.com/AGomezCuervo">Github</a>
          <a href="https://www.linkedin.com/in/antonio-jos%C3%A9-g%C3%B3mez-cuervo-1a2427271/">Linkedin</a>
          <a href="mailto: gomezantoniojose1@gmail.com">Gmail</a>

        </div>
      </div>
    </footer>
  )
}

export default Footer;
