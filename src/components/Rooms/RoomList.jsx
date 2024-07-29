import React, { useState } from "react";
import RoomCard from "./RoomCard";
import Modal from "./Modal";
import "./RoomList.css";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "A luxurious room with a beautiful view.",
    price: 200,
    image: "rooms/room1.jpg",
  },
  {
    id: 2,
    name: "Standard Room",
    description: "A comfortable room with all the basic amenities.",
    price: 100,
    image: "rooms/room2.jpg",
  },
  {
    id: 3,
    name: "Suite",
    description: "A spacious suite with a separate living area.",
    price: 300,
    image: "rooms/room3.jpg",
  },
  {
    id: 4,
    name: "Premium Room",
    description: "A spacious premium with a separate living area.",
    price: 700,
    image: "rooms/room4.avif",
  },
  {
    id: 5,
    name: "Super Delux Room",
    description: "A luxurious room with a beautiful view.",
    price: 400,
    image: "rooms/room5.jpg",
  },
  {
    id: 6,
    name: "Junior Suite Room",
    description: "A comfortable room with all the basic amenities.",
    price: 500,
    image: "rooms/room6.webp",
  }, 
  {
    id: 7,
    name: "Ocean View Room",
    description: "A room with stunning views of the ocean.",
    price: 250,
    image: "rooms/ocean.jpg",
  },
  {
    id: 8,
    name: "Mountain View Room",
    description: "A room offering breathtaking mountain views.",
    price: 180,
    image: "rooms/mountain.jpeg",
  },
  {
    id: 9,
    name: "Garden Suite",
    description: "A spacious suite with a private garden.",
    price: 350,
    image: "rooms/garden.jpeg",
  },
  {
    id: 10,
    name: "Executive Room",
    description: "An upscale room with executive amenities.",
    price: 450,
    image: "rooms/executive.jpeg",
  },
  {
    id: 11,
    name: "Luxury Penthouse",
    description: "A top-floor penthouse with premium features.",
    price: 1000,
    image: "rooms/luxury.jpg",
  },
  {
    id: 12,
    name: "Family Suite",
    description: "A spacious suite designed for families.",
    price: 600,
    image: "rooms/Family Suite.jpeg",
  }
];

const RoomList = () => {
  const [bookedRooms, setBookedRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBookRoom = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  const handleFormSubmit = (formData) => {
    const bookedRoom = { ...selectedRoom, ...formData };
    setBookedRooms((prev) => [...prev, bookedRoom]);
  };

  return (
    <div className="room-list-container">
      <div className="room-list">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} onBook={handleBookRoom} />
        ))}
      </div>
      <div className="booked-rooms">
        <h2>Booked Rooms</h2>
        {bookedRooms.map((room, index) => (
          <div key={index} className="booked-room">
            <h3>{room.name}</h3>
            <p>Type: {room.roomType}</p>
            <p>Name: {room.name}</p>
            <p>Age: {room.age}</p>
            <p>Email: {room.email}</p>
            <p>Phone: {room.phone}</p>
            <p>Price: ${room.price}</p>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal
          room={selectedRoom}
          onClose={handleCloseModal}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default RoomList;
