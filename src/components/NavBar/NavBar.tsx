import style from "./NavBar.module.css";
import githubIcon from "../../assets/Icons/github.svg";
import gmailIcon from "../../assets/Icons/gmail.svg";
import linkedinIcon from "../../assets/Icons/linkedin.svg";

const NavBar = () => {
  return (
    <header className={style.NavBar}>
      <a href="/" className={style.IconContainer}>
        <h1 className={style.AIcon}>A</h1>
        <h1 className={style.GIcon}>G</h1>
      </a>

      <div className={style.OptionsContainer}>
        <button>¿Quien soy?</button> 
        <button>Proyectos</button> 
        <button>Contáctame</button> 
      </div>

      <div className={style.LinksContainer}>
        <a href="https://github.com/AGomezCuervo">
          <img src={githubIcon}/>
        </a>
        <a href="https://www.linkedin.com/in/antonio-josé-gómez-cuervo-1a2427271">
          <img src={linkedinIcon}/>
        </a>
        <a href="https://github.com/AGomezCuervo">
          <img src={gmailIcon}/>
        </a>
      </div>
    </header>
  )
}

export default NavBar;
