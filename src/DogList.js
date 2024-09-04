import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div>
      <h1>Dogs List</h1>
      {dogs.map((dog) => {
        return (
          <div>
            <h4>{dog.name}</h4>
            <Link to={`/dogs/${dog.name}`}>
              <img
                src={dog.src}
                alt="a dog"
                style={{ width: 300 + "px" }}
              ></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DogList;
