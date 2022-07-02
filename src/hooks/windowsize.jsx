import { useEffect, useState } from "react";

export default function WindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowSize(window.innerWidth);
      // console.log(window.innerWidth)
    });
  }, [windowSize]);
  return windowSize;
}
