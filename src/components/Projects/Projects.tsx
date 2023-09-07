import style from "./Projects.module.css";
import dogImage from "../../assets/images/landingPage.png";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/features/profileSlice";

const Projects = () => {
  const data = useSelector(selectData)
  return (
    <>
      <h1 className={style.Title}>{data.projects}</h1>
      <div className={style.BGContainer}>
        <div tabIndex={1} className={style.Card}>
          <div className={style.Blur}></div>
          <div className={style.Links}>
            <a>{data.webpage}</a> 
            <a href="https://github.com/AGomezCuervo/DOGS-PI">{data.code}</a>
          </div>
          <img src={dogImage}/>
        </div>
      </div>
    </>
  )
}

export default Projects;
