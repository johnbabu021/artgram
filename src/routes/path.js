import NotFound from "../components/notfoundpage";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Profile from "../pages/profile";
import SignUp from "../pages/sinup";

export default [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/mda",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
