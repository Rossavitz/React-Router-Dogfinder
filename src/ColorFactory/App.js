import React from "react";
import { BrowserRouter } from "react-router-dom";
import ColorRoutes from "./ColorRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
