import { useState } from "react";

export default function InputHandler() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const value = input;
  return { onChange, value };
}
