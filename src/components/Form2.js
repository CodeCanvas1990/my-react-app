import React, { useState } from 'react';

const AboutPage = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formValues);
  };

  return (
    <div>
      <h2>About Us - Contact Form</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Enter your message"
            style={{ width: '100%', padding: '8px', minHeight: '80px' }}
            required
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
