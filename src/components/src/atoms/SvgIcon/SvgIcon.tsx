import React from "react";

interface props {
  height?: string;
  width?: string;
  color?: string;
  name?: string;
}

const SvgIcon: React.FC<props> = ({ height, width, color, name }) => {

  return (
    <svg
      width={width ? width : "16"}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={name} fill={color||"#868686"} />
    </svg>
  );
  
};

export { SvgIcon };
