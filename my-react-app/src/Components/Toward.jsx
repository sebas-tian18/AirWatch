import React from "react";
import { useNavigate } from "react-router-dom";

const ArrowComponent = ({ to, text, buttonStyle }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div className="arrow-container" onClick={handleClick}>
      <button className={` ${buttonStyle}`}>{text}</button>
    </div>
  );
};

export default ArrowComponent;
