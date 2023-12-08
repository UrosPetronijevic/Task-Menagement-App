import { useState } from "react";

export default function Btn({
  btnName,
  color,
  backgroundColor,
  width,
  height,
  padding,
  display,
  justifyContent,
  borderRadius,
  fontFamily,
  fontSize,
  fontWeight,
  transition,
  hoverColor,
  hoverBackgroundColor,
  hoverTransition,
}) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      style={{
        color: isHover ? hoverColor : color,
        backgroundColor: isHover ? hoverBackgroundColor : backgroundColor,
        width: width,
        height: height,
        padding: padding,
        display: display,
        justifyContent: justifyContent,
        borderRadius: borderRadius,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        transition: isHover ? hoverTransition : transition,
      }}
      className="btn"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{btnName}</p>
    </div>
  );
}
