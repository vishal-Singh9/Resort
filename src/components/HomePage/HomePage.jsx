import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="bg">
        <div className="home-page">
          {/* Hero Slider */}
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-slide-next"
                data-cues="zoomOut"
                data-disabled="true"
                role="group"
                aria-label="1 / 3"
                data-swiper-slide-index="0"
              >
                <div
                  className="hero-slider-warp bg1"
                  style={{
                    backgroundImage:
                      'url("https://themes.envytheme.com/viba/wp-content/uploads/2023/10/hero-bg1.webp")',
                  }}
                >
                  <div>
                    <div className="container-fluid">
                      <div className="content">
                        <span className="title">Where dreams unfold</span>
                        <h2>
                        Welcome to ,<br /> Paradise heaven the Best Destination for Tranquility
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;


 