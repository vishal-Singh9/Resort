import React, { useState } from 'react';
import './Booking.css'; 
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const roomTypes = ['Single', 'Double', 'Suite'];
const db = getDatabase(app);

const BookingPage = () => {
  const initialFormState = {
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: roomTypes[0],
  };

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = Date.now();
    set(ref(db, `book/${userId}`), form)
      .then(() => {
        toast.success(<>
        Booking Successfully
        </>);
        setForm(initialFormState);
        
      })
      .catch((error) => {
        console.error("Error writing to database: ", error);
      });
  };

  return (
    <div className='page'>

   
    <div className="booking-page">
      <h1>Book Your Stay</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={form.checkInDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={form.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            name="roomType"
            value={form.roomType}
            onChange={handleChange}
            required
          >
            {roomTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Submit Booking</button>
      </form>
      <ToastContainer/>
    </div> </div>
  );
};

export default BookingPage;
