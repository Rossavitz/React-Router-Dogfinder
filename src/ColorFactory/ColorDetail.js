import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";

const ColorDetails = ({ colors }) => {
  const { name } = useParams();
  const color = colors.find((c) => c.name === name);
  if (!color) {
    return <Navigate to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: color.color }}>
      <h1>This is a lot of {color.name}</h1>
      <h1>ISNT IT BEAUTIFUL?!?!</h1>

      <Link to="/colors">
        <h1>GO BACK</h1>
      </Link>
    </div>
  );
};

export default ColorDetails;
