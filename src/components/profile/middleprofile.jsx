import { useSelector } from "react-redux";
import "../../styles/profile/middleprofile.css";
import FollowNumber from "./follownumber";
export default function MiddleProfile() {
  // const user=useSelector(state=>state.user.user)
  return (
    <div className="middle__profile">
      <div
        style={{
          background: "url('logo512.png')",
          backgroundRepeat: " no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className="profile__image"
      >
        <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        <p>asfhe</p>
      </div>
      <button className="edit__btn">Edit profile</button>

      <FollowNumber />
      <div className="profile__posts">
        <div className="profile__posts__nav">
          <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        </div>
        <div className="profile__posts__nav">
          <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        </div>
        <div className="profile__posts__nav">
          <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        </div>
        <div className="profile__posts__nav">
          <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        </div>
        <div className="profile__posts__nav">
          <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        </div>
        <div className="profile__posts__nav">
          <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        </div>
        <div className="profile__posts__nav">
          <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        </div>
        <div className="profile__posts__nav">
          <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        </div>
      </div>
    </div>
  );
}
