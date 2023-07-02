import React, { useState } from 'react';
import '../../styles/contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    //  email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (field) => {
    switch (field) {
      case 'name':
        if (!name) {
          setNameError('Name is required');
        }
        break;
      case 'email':
        if (!email) {
          setEmailError('Email is required');
        } else if (!validateEmail(email)) {
          setEmailError('Invalid email address');
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');

    // Check for required fields
    if (!name) {
      setNameError('Name is required');
    }

    if (!email) {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email address');
    }

    if (name && email && validateEmail(email)) {
      console.log('Form submitted:', { name, email, message });
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section className='contact-section'>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur('name')}
            required
          />
          {nameError && <p>{nameError}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
            required
          />
          {emailError && <p>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br></br>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
