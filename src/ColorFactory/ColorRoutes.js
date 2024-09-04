import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import ColorDetail from "./ColorDetail";

const ColorRoutes = () => {
  const [colors, setColors] = useState([
    { name: "red", color: "red", id: uuid() },
  ]);

  const addColor = (newColor) => {
    setColors((colors) => [...colors, newColor]);
  };

  return (
    <Routes>
      <Route path="/colors" element={<ColorList colors={colors} />} />
      <Route
        path="/colors/new"
        element={<NewColorForm addColor={addColor} />}
      />
      <Route path="/colors/:name" element={<ColorDetail colors={colors} />} />
      <Route path="*" element={<ColorList colors={colors} />} />
    </Routes>
  );
};

export default ColorRoutes;
