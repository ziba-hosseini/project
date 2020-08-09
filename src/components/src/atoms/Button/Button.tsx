import React from "react";
import { ThemeButton } from "../../../../core/services/ThemeButton";
import { Link } from "react-router-dom";
import "./Button.scss";


interface props {
  theme_name?: string;
  onClick?: () => void;
  children?: React.ReactNode;
 
}

const Button: React.FC<props> = ({ theme_name, onClick, children }) => {
  let theme_selected;
  switch (theme_name) {
    case "Primary": {
      theme_selected = ThemeButton.Primary;
      break;

    }
    case "Secondary": {
      theme_selected = ThemeButton.Secondary;
      break;

    }
    case "Tertiary":
      theme_selected = ThemeButton.Tertiary;
      break;

    case "Quaternary":
      theme_selected = ThemeButton.Quaternary;
      break;
      
  }

  return (
 
      <div
        className="default_button"
        style={theme_selected}
        onClick={onClick}
      >

        {children}
      </div>
    
  );
};

export { Button };
