import React from "react";
import "./SimpleButton.scss";
interface props {
  them?: string;
  handler?: Function;
}

const SimpleButton: React.FC<props> = (props) => {
  return (
    <button className="simple_butoon" onClick={() => props.handler}>
      {props.children}
    </button>
  );
};

export { SimpleButton };
