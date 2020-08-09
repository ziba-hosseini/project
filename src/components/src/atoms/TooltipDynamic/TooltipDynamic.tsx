import React, { useState } from "react";
import "./TooltipDynamic.scss";

interface props {
  message: string | object;
  position?: string;
}

const TooltipDynamic: React.FC<props> = ({ position, message, children }) => {
  
  const [displayToolTip, setDisplayToolTip] = useState<boolean>(false);

  const hideTooltip = () => {
    setDisplayToolTip(false);
  };

  const showTooltip = () => {
    setDisplayToolTip(true);
  };

  return (
    <span className="tooltip" onMouseLeave={hideTooltip}>
      {displayToolTip && (
        <div className={`tooltip-bubble tooltip-${position}`}>
          <div className="tooltip-message">{message}</div>
        </div>
      )}
      <span className="tooltip-trigger" onMouseOver={showTooltip}>
        {children}
      </span>
    </span>
  );
};

export { TooltipDynamic };
