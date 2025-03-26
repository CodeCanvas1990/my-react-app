import React, { useState } from "react";

const DynamicTable = () => {
    const [tableData, setTableData] = useState([
        { id: 1, name: "John", age: 25, city: "New York" },
        { id: 2, name: "Jane", age: 30, city: "Los Angeles" },
        { id: 3, name: "Doe", age: 35, city: "Chicago" },
    ]);

    const [selectedField, setSelectedField] = useState(""); // To track the selected field (name, age, city)
    const [inputValue, setInputValue] = useState(""); // To track the input value
    const [selectedRowId, setSelectedRowId] = useState(null); // To track the selected row by ID

    // Function to update the table
    const handleUpdate = () => {
        if (!selectedField || selectedRowId === null || inputValue === "") return;

        const updatedData = tableData.map((row) => {
            if (row.id === selectedRowId) {
                return { ...row, [selectedField]: inputValue }; // Update the selected field
            }
            return row;
        });

        setTableData(updatedData);
        setInputValue(""); // Reset input field
    };

    return (
        <div>
            <h2>Dynamic Table Update</h2>

            {/* Table to display data */}
            <table border="1" style={{ width: "100%", marginBottom: "20px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>{row.city}</td>
                            <td>
                                <button
                                    onClick={() => setSelectedRowId(row.id)} // Select row
                                    style={{
                                        backgroundColor: selectedRowId === row.id ? "lightblue" : "white",
                                    }}
                                >
                                    Select
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Dropdown to select field */}
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="fieldDropdown">Select Field: </label>
                <select
                    id="fieldDropdown"
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.target.value)}
                >
                    <option value="">-- Select Field --</option>
                    <option value="name">Name</option>
                    <option value="age">Age</option>
                    <option value="city">City</option>
                </select>
            </div>

            {/* Input box to enter new value */}
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="inputValue">Enter Value: </label>
                <input
                    id="inputValue"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            {/* Button to update table */}
            <button onClick={handleUpdate} disabled={!selectedField || !selectedRowId}>
                Update Table
            </button>
        </div>
    );
};

export default DynamicTable;
