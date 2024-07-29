import React, { useState } from 'react';
import './Contact.css';
import { getDatabase,ref,set } from 'firebase/database';
import { app } from '../../firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const db = getDatabase(app);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));             
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    set(ref(db, 'contacts/' + formData.name), formData).then(() => {
      alert('Message sent successfully!');
      onclose();

    })
    .catch((error) => {
      alert('Error sending message: ' + error.message);

})
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
