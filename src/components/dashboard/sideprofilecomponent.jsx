import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard/sidebarprofile.css";

export default function SideProfileComponent() {
  const user = useSelector((state) => state.user.user);
  // console.log(user.user)
  const navigate = useNavigate();
  return (
    <div className="dashboard__profile">
      <div className="profile__container">
        <div className="profile__cover__image">
          <img alt="" src="logo512.png" />
        </div>
        <div className="profile__details">
          <div className="profile__details__basic">
            <span>
              <div>1234</div>
              <div>Followers</div>
            </span>
            <img alt="" src="logo512.png" />
            <span>
              <div>787</div>
              <div>Following</div>
            </span>
          </div>
          <div className="profile__explore">
            <p>{user?.username}</p>
            <p>asdfjaskfdk sdfas</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        My Profile
      </button>
    </div>
  );
}
