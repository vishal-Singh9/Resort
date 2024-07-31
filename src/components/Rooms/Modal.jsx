import React, { useState } from "react";
import "./Modal.css";
import { app } from "../../firebase";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ room, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    roomType: room ? room.name : "",
  });

  const db = getDatabase(app);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    set(ref(db, "bookings/" + formData.name), formData)
    .then(() => {
      toast.success(
        <>
        Successfully booked 
        </>
      );
     setFormData({
        name: "",
        age: "",
        email: "",
        phone: "",
        roomType: room ? room.name : "",
      });
      onSubmit(formData);
    }

    )
  .catch((error) => {
    toast.error('Booking failed: ' + error.message);
  }
  );
    
}
    
   
  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Book {room?.name}</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Room Type:
          <input
            type="text"
            name="roomType"
            value={formData.roomType}
            readOnly
          />
        </label>
        <button type="submit">Book Now</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
      <ToastContainer />

    </div>
  );
};

export default Modal;
