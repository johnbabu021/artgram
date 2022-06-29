import "../../styles/dashboard/sidebarprofile.css";

export default function SideProfileComponent() {
  return (
    <div className="dashboard__profile">
      <div className="profile__container">
        <div className="profile__cover__image">
          <img src="logo512.png" />
        </div>
        <div className="profile__details">
          <div className="profile__details__basic">
            <p>
              <div>1234</div>
              <div>Followers</div>
            </p>
            <img src="logo512.png" />
            <p>
              <div>787</div>
              <div>Following</div>
            </p>
          </div>
          <div className="profile__explore">
            <p>Even Ledge</p>
            <p>asdfjaskfdk sdfas</p>
          </div>
        </div>
      </div>
      <button>My Profile</button>
    </div>
  );
}
