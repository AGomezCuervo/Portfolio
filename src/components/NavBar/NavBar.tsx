import style from "./NavBar.module.css";
import githubIcon from "../../assets/icons/github.svg";
import gmailIcon from "../../assets/icons/gmail.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import menuIcon from "../../assets/icons/menu.png";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, selectData, selectLanguage } from "../../redux/features/profileSlice";
import { useEffect, useRef, useState } from "react";

interface References {
  aboutMeRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
}

const NavBar = (props: References) => {
  const {aboutMeRef, projectsRef} = props
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const language = useSelector(selectLanguage);

  const handleChangeLanguage = () => {
    dispatch(changeLanguage()); 
  };

  const menuRef = useRef<HTMLInputElement>(null);
  const dropMenuRef = useRef<HTMLDivElement>(null);
  
  const handleClose = () => {
    if(menuRef.current !== null){
      menuRef.current.checked = false;
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if ( dropMenuRef.current && !menuRef.current?.contains(event.target as Node)){ 
      handleClose();
      document.removeEventListener("click", handleClickOutside);
    }
  };

  const handleMenu = () => {
      document.addEventListener("click", handleClickOutside);
  }

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

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
    <header className={show === true ? style.NavBar : `${style.NavBar} ${style.Hidden}`}>
      <a href="/" className={style.IconContainer}>
        <h1 className={style.AIcon}>A</h1>
        <h1 className={style.GIcon}>G</h1>
      </a>

      <div className={style.OptionsContainer}>
        <button onClick={scrollView} name="whoAmI">{data.whoAmI}</button> 
        <button onClick={scrollView} name="projects">{data.projects}</button> 
      </div>

      <div className={style.MenuContainer}>
        <button className={style.Language} onClick={handleChangeLanguage}>
          {language}
        </button>

        <label htmlFor="menu" className={style.MenuButton}>
          <img src={menuIcon}/>
        </label>
        <input onClick={handleMenu} className={style.Input} ref={menuRef} id="menu" type="checkbox"/>
        <div ref={dropMenuRef} className={style.DropMenu}>
          <button onClick={scrollView} name="whoAmI">{data.whoAmI}</button> 
          <button onClick={scrollView} name="projects">{data.projects}</button>
          <div>
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
        </div>
      </div>

      <div className={style.LinksContainer}>
        <a href="https://github.com/AGomezCuervo">
          <img src={githubIcon}/>
        </a>
        <a href="https://www.linkedin.com/in/antonio-josé-gómez-cuervo-1a2427271">
          <img src={linkedinIcon}/>
        </a>
        <a href="mailto: gomezantoniojose1@gmail.com">
          <img src={gmailIcon}/>
        </a>

      </div>
    </header>
  )
}

export default NavBar;
