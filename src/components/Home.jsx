import React from 'react';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Services from './Services/Services';
import BlogPage from './Blog/BlogPage';
import BookingPage from './Booking/BookingForm';
import Feature from './Features/Feature';
import AIImages from './Templates/Aiimages';
import Subscription from './Subscription/Subscription';
import FunFacts from './FunFact/FunFacts';
import Footer from './Footer/Footer';
import CopyRight from './CopyRight/Copyright';
import Luxury from './Luxury/Luxury';
import Gallery from './gallery/Gallery';

function Home() {
  return (
   <>
   <HomePage/>
   <About/>
   <Services/>
   <Luxury/>
   <BlogPage/>
   <AIImages/>
   <BookingPage/>
   <Feature/>
   <FunFacts/>
   <Gallery/>
   <Subscription/>
   <Footer/>
   <CopyRight/>

   </>
  );
}

export default Home;
