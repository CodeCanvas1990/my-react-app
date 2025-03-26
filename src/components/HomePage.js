import React, { useState } from 'react';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You entered: ${inputValue}`);
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="nameInput" style={{ marginRight: '10px' }}>
          व्यक्तीचे नाव 1:
          </label>
          <input
            type="text"
            id="nameInput"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type here"
            style={{ padding: '5px' }}
          />
          <span>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      </span>

          <label htmlFor="nameInput" style={{ marginRight: '10px' }}>
          व्यक्तीचे नाव 2:
          </label>
          <input
            type="text"
            id="nameInput"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type here"
            style={{ padding: '5px' }}
          />
        </div>
        <button type="submit" style={{ padding: '5px 10px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;