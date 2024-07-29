import React, { useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services/Services";
import RoomList from "./components/Rooms/RoomList";
import SearchRoom from "./components/SearchRoom";
import FunFacts from "./components/FunFact/FunFacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/Faq";
import BookingPage from "./components/Booking/BookingForm";
import BlogPage from "./components/Blog/BlogPage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <div>
        <Header />

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/room" element={<RoomList />} />
            <Route path="/search" element={<SearchRoom />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<Contact/>} />

          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
