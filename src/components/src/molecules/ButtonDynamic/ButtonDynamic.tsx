import React from "react";
import "./ButtonDynamic.scss";
import { Button, SvgIcon } from "../../atoms/index";

interface props {
  theme_name: string;
  Icon?: string;
  iconSize?: number;
  name?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  link?: string;
  width?: string;
  height?: string;
  color: string;
}

const ButtonDynamic: React.FC<props> = (props) => {
  return (
    <Button
      theme_name={props.theme_name}
      onClick={() => props.onClick}
   
    >
      <>
        {props.name && (
          <SvgIcon
            width={props.width}
            height={props.height}
            name={props.name}
            color={props.color}
          />
        )}

        {props.children}
      </>
    </Button>
  );
};

export { ButtonDynamic };
