import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const INIITIAL_STATE = {
    name: "",
    color: "",
  };
  const [formData, setFormData] = useState(INIITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
    setFormData(INIITIAL_STATE);
    navigate("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="color">Pick Color:</label>
      <input
        type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Add Color</button>
    </form>
  );
};

export default NewColorForm;
