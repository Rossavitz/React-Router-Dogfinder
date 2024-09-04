import React from "react";
import { useParams, Navigate } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name === name);
  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt="a dog" style={{ width: 300 + "px" }}></img>
      <h2>Age: {dog.age} </h2>
      <ul>
        {dog.facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
