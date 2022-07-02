import { useEffect } from "react";
import DashBoardEntry from "../components/dashboardEntry";
import MiddleProfile from "../components/profile/middleprofile";

export default function Profile() {
  useEffect(() => {
    document.title = "profile";
  });
  return (
    <div>
      <DashBoardEntry>
        <MiddleProfile />
      </DashBoardEntry>
    </div>
  );
}
