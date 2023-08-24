import style from "./Profile.module.css";
import antonio from "../../assets/antonio.jpg";

const Profile = () => {
  return (
    <section className={style.BGContainer}>
      <div className={style.LeftContainer}>
        <h1>Antonio Gómez Cuervo</h1>
        <h2>Hola, soy un desarrollador web, radicado en Colombia</h2>
      </div>
      <div className={style.RightContainer}>
        <img src={antonio} alt="Antonio"/>
      </div>
    </section>
  )
}

export default Profile;
