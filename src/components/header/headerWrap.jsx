import "../../styles/header/header.css";
import {
  HeartOutlined,
  HomeOutlined,
  MessageOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { pathChange } from "../../redux/features/path/pathslice";
import { useNavigate } from "react-router-dom";
// import WindowSize from "../../hooks/windowsize";
// import  {  Dropdown, Menu, Space  } from 'antd'
// const windowSize=WindowSize()
export default function HeaderWrap({ children, windowSize }) {
  const path = useSelector((state) => state.path.path);
  const dispatch = useDispatch();
  // console.log(path)
  const navigate = useNavigate();
  // console.log(windowSize,"wind")
  return (
    <div>
      <header className="header">
        <div className="header_left">
          <input
            placeholder="#Explore"
            className="header__search"
            type={"text"}
          />
        </div>
        {windowSize > 860 && (
          <div className="header__center">
            <HomeOutlined
              className={path === "/" && "clicked__btn"}
              onClick={() => {
                navigate("/");
                dispatch(pathChange("/"));
              }}
            />
            <MessageOutlined
              className={path === "/profile" && "clicked__btn"}
              onClick={() => {
                navigate("/profile");
                dispatch(pathChange("/profile"));
              }}
            />
            <HeartOutlined
              className={path === "/notifications" && "clicked__btn"}
              onClick={() => {
                navigate("/notifications");
                dispatch(pathChange("/notifications"));
              }}
            />
          </div>
        )}
        <div className="header__right">
          <div className="header__profile">
            <img alt="" src="logo512.png" />
            <div>John</div>
            <DownOutlined />
          </div>
        </div>
      </header>
      {children}
      {windowSize < 860 && (
        <footer className="icon__footer">
          <div className="header__center">
            <HomeOutlined />
            <MessageOutlined
              onClick={() => {
                dispatch(pathChange("/profile"));
              }}
            />
            <HeartOutlined />
          </div>
        </footer>
      )}
    </div>
  );
}
