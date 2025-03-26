import React, { useState } from "react";

const DynamicTableWithPlaceholders = () => {
  // Define columns dynamically
  const [columns, setColumns] = useState(["Column 1", "Column 2", "Column 3", "Column 4"]);

  // State to hold the input values for each column
  const [inputs, setInputs] = useState(
    columns.reduce((acc, col) => ({ ...acc, [col]: "" }), {}) // Initialize inputs for each column
  );

  // Handle input changes dynamically based on column name
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic Table with Placeholders</h2>

      {/* Dynamic Table */}
      <table border="1" style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {columns.map((col, index) => (
              <td key={index}>
                <input
                  type="text"
                  name={col}
                  value={inputs[col]}
                  onChange={handleInputChange}
                  placeholder={`Enter ${col}`}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Dynamic Placeholders Display */}
      <div>
        <h3>Dynamic Placeholders:</h3>
        {columns.map((col, index) => (
          <p key={index}>
            <strong>{col}:</strong> {inputs[col] || `Placeholder for ${col}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DynamicTableWithPlaceholders;
