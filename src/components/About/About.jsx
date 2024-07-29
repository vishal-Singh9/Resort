import React from 'react';
import  './About.css';
const About = () => {
  return (
    <div className="about-warp ptb-125">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6" data-cues="fadeInLeft" data-disabled="true">
            <div
              className="about-image"
              data-cue="fadeInLeft"
              data-show="true"
              style={{
                animationName: 'fadeInLeft',
                animationDuration: '600ms',
                animationTimingFunction: 'ease',
                animationDelay: '0ms',
                animationDirection: 'normal',
                animationFillMode: 'both',
              }}
            >
              <img
                decoding="async"
                src="https://themes.envytheme.com/viba/wp-content/uploads/2023/10/about1.webp"
                alt="About"
              />
            </div>
          </div>
          <div className="col-lg-6" data-cues="fadeInUp" data-disabled="true">
            <div
              className="about-content single-section"
              data-cue="fadeInUp"
              data-show="true"
              style={{
                animationName: 'fadeInUp',
                animationDuration: '600ms',
                animationTimingFunction: 'ease',
                animationDelay: '0ms',
                animationDirection: 'normal',
                animationFillMode: 'both',
              }}
            >
              <span className="title">the true experience</span>
              <h2>An all-inclusive beachfront resort in Baa Atoll, Maldives</h2>
              <h4>
                The iconic Viba Beach Resort is part of a UNESCO biosphere reserve which hosts the world-famous Hanifaru Bay, home of the majestic manta rays during the months of June till October. Indulge in a rustic Robinson Crusoe feeling combined with a relaxed atmosphere.
              </h4>
            </div>
          </div>
          <div className="col-lg-5" data-cues="fadeInLeft" data-disabled="true">
            <div
              className="about-another-widget"
              data-cue="fadeInLeft"
              data-show="true"
              style={{
                animationName: 'fadeInLeft',
                animationDuration: '600ms',
                animationTimingFunction: 'ease',
                animationDelay: '0ms',
                animationDirection: 'normal',
                animationFillMode: 'both',
              }}
            >
              <div className="about-last-image">
                <img
                  decoding="async"
                  src="https://themes.envytheme.com/viba/wp-content/uploads/2023/10/about2.webp"
                  alt="About"
                />
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes">
        <img
          decoding="async"
          src="https://themes.envytheme.com/viba/wp-content/uploads/2023/10/about-shape2.webp"
          className="about-shape2"
          alt="Shapes"
        />
      </div>
    </div>
  );
};

export default About;



