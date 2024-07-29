import React from "react";
import "./RoomCard.css"; // Assuming you have a CSS file for styling

const RoomCard = ({ room, onBook }) => {
  const handleBookClick = () => {
    onBook(room);
  };

  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} className="room-image" />
      <div className="room-details">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <p>Price: ${room.price}</p>
        <button className="book-button" onClick={handleBookClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
