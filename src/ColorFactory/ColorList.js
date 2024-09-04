import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <div>
      <div>
        <h1>Color Factory!</h1>
        <Link to="/colors/new">
          <h2>Create Color!</h2>
        </Link>
      </div>
      <div>
        <h2>Select Color:</h2>
        <ul>
          {colors.map((color) => (
            <li>
              <Link to={`/colors/${color.name}`}>{color.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorList;
