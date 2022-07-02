import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import path from "./routes/path";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (typeof window === "object") console.log(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Routes>
        {path.map((item, id) => {
          return <Route key={id} {...item} />;
        })}
      </Routes>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
