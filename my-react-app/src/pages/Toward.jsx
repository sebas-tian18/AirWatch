
import React from "react";
import { useNavigate } from "react-router-dom";

const ArrowComponent = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div
      className="arrow-container"
      style={{
        width: "2rem",
        height: "2rem",
        backgroundColor: "#00aaf0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
    <p>-{'>'}</p>
    </div>
  );
};

export default ArrowComponent;