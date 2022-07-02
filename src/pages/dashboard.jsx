import { useEffect } from "react";
import DashBoardEntry from "../components/dashboardEntry";
import MiddlePostComponent from "../components/dashboard/middlepostcomponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import "../styles/dashboard/dashboard.css";
export default function Dashboard() {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    console.log(user, "user");
    if (user.token === undefined ) {
      navigate("/login");
    }
  }, [user]);
  useEffect(() => {
    document.title = "artgram";
    console.log(user);
  }, []);
  return (
    <DashBoardEntry>
      <MiddlePostComponent />
    </DashBoardEntry>
  );
}
