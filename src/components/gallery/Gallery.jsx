import React from 'react';
import './Gallery.css'; 

const images = [
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new12.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new11.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new10.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new9.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new8.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new7.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new6.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new5.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new4.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new3.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new2.jpg",
  "https://demo2.themelexus.com/erios/wp-content/uploads/2022/10/gallery-new1.jpg"
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-animation">
        {images.concat(images).map((src, index) => (
          <div key={index} className="gallery-item">
            <a href={src} data-elementor-open-lightbox="no">
              <img src={src} alt={`gallery-${index}`} />
              <div className="gallery-item-overlay">
                <i className="opal-icon-search"></i>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;


