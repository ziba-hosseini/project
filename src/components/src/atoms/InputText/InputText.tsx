import React from "react";

interface props {
  onChange: () => void;
}

const InputText: React.FC<props> = (props) => {
  return <input type="text" onChange={props.onChange}></input>;
};

export { InputText };
