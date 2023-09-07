import style from "./AboutMe.module.css";
import reactIcon from "../../assets/icons/react.png";
import reduxIcon from "../../assets/icons/redux.png";
import nodeIcon from "../../assets/icons/nodejs.png";
import pythonIcon from "../../assets/icons/python.png";
import sequelizeIcon from "../../assets/icons/sequelize.png";
import vueIcon from "../../assets/icons/vue.png";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/features/profileSlice";

const AboutMe = () => {
  const data = useSelector(selectData);
  return (
    <>
        <div className={style.BGContainer}>
          <div className={style.LeftContainer}>
            <h1 className={style.Title}>{data.aboutMe}</h1>
            <h2>{data.aboutMe_description1}</h2>
            <h2>{data.aboutMe_description2}</h2>
          </div>
          <div className={style.RightContainer}>
            <div>
              <img src={reactIcon}/>
              <h2>React</h2>
            </div>

            <div>
              <img src={reduxIcon}/>
              <h2>Redux</h2>
            </div>

            <div>
              <h1>TS</h1>
              <h2>Typescript</h2>
            </div>

            <div>
              <img src={sequelizeIcon}/>
              <h2>Sequelize</h2>
            </div>

            <div>
              <h1>SQL</h1>
              <h2>SQL</h2>
            </div>

            <div>
              <img src={nodeIcon}/>
              <h2>Nodejs</h2>
            </div>

            <div>
              <img src={pythonIcon}/>
              <h2>Python</h2>
            </div>

            <div>
              <h1>dj</h1>
              <h2>Django</h2>
            </div>

            <div>
              <img src={vueIcon}/>
              <h2>Vue</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe;
