import FollowersComponent from "../components/dashboard/followerscomponent";
import MiddlePostComponent from "../components/dashboard/middlepostcomponent";
import SideProfileComponent from "../components/dashboard/sideprofilecomponent";
import HeaderWrap from "../components/header/headerWrap";
import "../styles/dashboard/dashboard.css";
export default function Dashboard() {
  return (
    <HeaderWrap>
      <section className="dashboard__section">
        <SideProfileComponent />
        <MiddlePostComponent />
        <FollowersComponent />
      </section>
    </HeaderWrap>
  );
}
