import React from "react";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={["Whiskey", "Duke", "Perry", "Tubby"]} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={props.dogs} />} />
          <Route
            path="/dogs/:name"
            element={<DogDetails dogs={props.dogs} />}
          />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "https://www.thesprucepets.com/thmb/KusoW9X8069GdVoOKHAoAO7wK_8=/2119x0/filters:no_upscale():strip_icc()/AustralianShepherdIzayso-cd364f4abcc6469a8688dd743751b015.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "https://media-be.chewy.com/wp-content/uploads/2023/02/02150759/samoyed-snow-dog.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "https://image.petmd.com/files/inline-images/golden-retriever-2.jpg?VersionId=9HAclc1bWh8XvyNoGi2.UxpdEp1gygb_",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Great-Dane.jpg?itok=593KgkUQ",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
