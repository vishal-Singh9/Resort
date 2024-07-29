import React from "react";
import "./AIImages.css";

const AIImages = () => {
  return (
    <section
      className="ai-images block center"
      data-animation="animationContainer"
    >
      <div className="cont cont_sm">
       
        <h2 className="slide-heading">Create Premium Images with AI Engine or our AI Helper</h2>

        <div className="">
          <div className="img-wrap1">
            <img
              src="https://palatio.axiomthemes.com/splash/src/img/ai-images/3.png"
              alt="1"
              data-animation="innerAnimated fadeIn"
              data-delay="000"
              className="innerAnimated fadeIn"
            />{" "}
          </div>
          <div className="img-wrap2">
            <img
              src="https://palatio.axiomthemes.com/splash/src/img/ai-images/1.png"
              alt="2"
              data-animation="innerAnimated fadeInUp"
              data-delay="400"
              className="innerAnimated fadeInUp"
            />
          </div>
          <div className="img-wrap3">
            <img
              src="https://palatio.axiomthemes.com/splash/src/img/ai-images/2.jpg"
              alt="3"
              data-animation="innerAnimated fadeInUp"
              data-delay="200"
              className="innerAnimated fadeInUp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIImages;
