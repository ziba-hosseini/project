import React, { useState, useEffect } from "react";

interface props {
  getCheckBoxValue?: (check: boolean) => void;
  sendCheckBoxValue?: boolean;
}

const Checkbox: React.FC<props> = (props) => {
  const [isCheck, setCheck] = useState(false);
  const toggleCheckboxChange = () => {
    setCheck(!isCheck);
    props.getCheckBoxValue!(!isCheck);
  
  };

  // useEffect(()=>{
  //   console.log(props.sendCheckBoxValue,"props.sendCheckBoxValue")
  //   if(props.sendCheckBoxValue===true){
  //     setCheck(true)

  //   }
  // })
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        value={`${isCheck}`}
        checked={isCheck || props.sendCheckBoxValue}
        onChange={() => toggleCheckboxChange()}
      />
    </div>
  );
};

export { Checkbox };
