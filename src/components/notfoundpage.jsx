import WindowSize from "../hooks/windowsize";
import HeaderWrap from "./header/headerWrap";

export default function NotFound() {
  const windowSize = WindowSize();

  return (
    <HeaderWrap windowSize={windowSize}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          style={{
            width: "250px !important",
            height: "250px",
          }}
          src="notfound.svg"
        />
        The Requested url doensn't found
      </div>
    </HeaderWrap>
  );
}
