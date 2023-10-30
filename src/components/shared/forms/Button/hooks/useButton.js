import { useState } from "react";

export function useButton({ style = {}, hoverStyle = {} }) {
  const [styleCurrent, setStyleCurrent] = useState(style);

  const handleHover = () => {
    setStyleCurrent(hoverStyle);

    if (styleCurrent == hoverStyle) return;

    setTimeout(() => {
      setStyleCurrent(styleCurrent);
    }, 200);
  };

  return {
    handleHover,
    styleCurrent,
  };
}
