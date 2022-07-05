import React, { FC } from "react";
import "./index.scss";
export type IconButtonProps = {
  icon: string;
  onClick?: () => void;
};
const IconButton: FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <div onClick={onClick} className="icon-button">
      <div className={`${icon} icon`} />
    </div>
  );
};

export default IconButton;
