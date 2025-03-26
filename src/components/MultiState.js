import React, { useState } from "react";

const MultiState = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
  });

  // Handle change for all inputs dynamically
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure the input name and value
    setFormData({
      ...formData,
      [name]: value, // Update only the changed field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MultiState;
