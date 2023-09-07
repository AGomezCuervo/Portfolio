import style from "./Profile.module.css";
import antonio from "../../assets/antonio.jpg";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/features/profileSlice";

const Profile = () => {
  const data = useSelector(selectData);
  return (
    <>
        <div className={style.LeftContainer}>
          <h1>{data.name}</h1>
          <h2>{data.title_description}</h2>
        </div>
        <div className={style.RightContainer}>
          <img src={antonio} alt="Antonio"/>
        </div>
    </>
  )
}
export default Profile;
