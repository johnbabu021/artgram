import HeaderWrap from "./header/headerWrap";
import FollowersComponent from "./dashboard/followerscomponent";
import SideProfileComponent from "./dashboard/sideprofilecomponent";
import "../styles/dashboard/dashboard.css";
import WindowSize from "../hooks/windowsize";
// import { useEffect, useState } from "react";
export default function DashBoardEntry({ children }) {
  const windowSize = WindowSize();
  return (
    <HeaderWrap windowSize={windowSize}>
      <section className="dashboard__section">
        {windowSize > 956 && <SideProfileComponent />}
        {children}
        {windowSize > 1300 && <FollowersComponent />}
      </section>
    </HeaderWrap>
  );
}
