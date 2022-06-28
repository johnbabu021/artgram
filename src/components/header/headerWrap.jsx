import "../../styles/header/header.css";
import {
  HeartOutlined,
  HomeOutlined,
  MessageOutlined,
  DownOutlined,
} from "@ant-design/icons";
// import  {  Dropdown, Menu, Space  } from 'antd'

export default function HeaderWrap({ children }) {
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
        <div className="header__center">
          <HomeOutlined />
          <MessageOutlined />
          <HeartOutlined />
        </div>
        <div className="header__right">
          <div className="header__profile">
            <img src="logo512.png" />
            <div>John</div>
            <DownOutlined />
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
