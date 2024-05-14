
import React from "react";
import { useNavigate } from "react-router-dom";

const ArrowComponent = ({ to, text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div
      className="arrow-container"
      onClick={handleClick}
    >
    <button class="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded active:border-blue-500 active:pb-1" >
      {text}
    </button>
    </div>
  );
};

export default ArrowComponent;