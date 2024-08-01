import React, { useState, useEffect, useRef } from "react";
import "./FunFacts.css";

const FunFacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    luxuryCottages: 0,
    exoticReviews: 0,
    exoticReviews2: 0,
    peopleServed: 0,
  });

  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect();
      const isInView = top < window.innerHeight && bottom >= 0;
      if (isInView) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  useEffect(() => {
    if (isVisible) {
      const startCounting = (targetValue, key) => {
        let startValue = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 10);

        const updateCounter = () => {
          if (startValue < targetValue) {
            startValue += increment;
            setCounters((prev) => ({
              ...prev,
              [key]: Math.floor(startValue),
            }));
            requestAnimationFrame(updateCounter);
          } else {
            setCounters((prev) => ({
              ...prev,
              [key]: targetValue,
            }));
          }
        };

        updateCounter();
      };

      startCounting(13, "luxuryCottages");
      startCounting(3000, "exoticReviews");
      startCounting(10, "exoticReviews2");
      startCounting(100, "peopleServed");
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div className="fun-fact-warp ptb-125 pb-100" ref={ref}>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-3 col-6 col-sm-6 col-md-4"
            style={{
              animationName: "fadeInUp",
              animationDuration: "600ms",
              animationDelay: "0ms",
            }}
          >
            <div className="fun-fact-card">
              <div className="d-flex align-items-center">
                <h2 className="counter">{counters.luxuryCottages}</h2>
                <h2 className="plus">+</h2>
              </div>
              <p>HIGHLY LUXURIOUS PRIVATE COTTAGE</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-6 col-sm-6 col-md-4"
            style={{
              animationName: "fadeInUp",
              animationDuration: "600ms",
              animationDelay: "180ms",
            }}
          >
            <div className="fun-fact-card">
              <div className="d-flex align-items-center">
                <h2 className="counter">{counters.exoticReviews}</h2>
                <h2 className="plus">K+</h2>
              </div>
              <p>TRAVELLERS EXOTIC REVIEWS</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-6 col-sm-6 col-md-4"
            style={{
              animationName: "fadeInUp",
              animationDuration: "600ms",
              animationDelay: "360ms",
            }}
          >
            <div className="fun-fact-card">
              <div className="d-flex align-items-center">
                <h2 className="counter">{counters.exoticReviews2}</h2>
                <h2 className="plus">+</h2>
              </div>
              <p>TRAVELLERS EXOTIC REVIEWS</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-6 col-sm-6 col-md-4"
            style={{
              animationName: "fadeInUp",
              animationDuration: "600ms",
              animationDelay: "540ms",
            }}
          >
            <div className="fun-fact-card">
              <div className="d-flex align-items-center">
                <h2 className="counter">{counters.peopleServed}</h2>
                <h2 className="plus">+</h2>
              </div>
              <p>PEOPLE TO SERVE YOU PROPERLY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes">
        <img
          decoding="async"
          src="https://themes.envytheme.com/viba/wp-content/uploads/2023/10/funfact-shape.webp"
          className="fun-fact-shape"
          alt="Shapes"
        />
      </div>
    </div>
  );
};

export default FunFacts;
