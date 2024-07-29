import React from 'react';
import './Feature.css';

const features = [
  {
    id: 1,
    title: 'Multilingual Support',
    description: 'Full WPML compatibility and RTL support allow you to create a powerful multilanguage website.',
    imgSrc: './src/img/features/1.png',
    alt: 'Multilingual Support'
  },
  {
    id: 2,
    title: 'Detailed Docs',
    description: 'Online documentation helps to discover all the features and uses of the product in no time.',
    imgSrc: './src/img/features/2.png',
    alt: 'Detailed Docs'
  },
  {
    id: 3,
    title: 'Flexible Theme Options',
    description: 'Customize every essential aspect of your site in theme options, without touching a single line of code.',
    imgSrc: './src/img/features/3.png',
    alt: 'Flexible Theme Options',
    demoLink: '//palatio.axiomthemes.com/'
  },
  {
    id: 4,
    title: 'Lifetime Updates',
    description: 'Update any skin or bundled plugins automatically directly in the admin dashboard.',
    imgSrc: './src/img/features/4.png',
    alt: 'Lifetime Updates',
    extraImgSrc: './src/img/features/4_globe.png'
  },
  {
    id: 5,
    title: 'GDPR Compliance',
    description: 'Make your site GDPR compliant with privacy checkboxes, cookie pop-ups, and WordPress built-in tools.',
    imgSrc: './src/img/features/5.png',
    alt: 'GDPR Compliance'
  }
];

const Feature = () => {
  return (
    <section className="feature center" id="features">
      <div className="cont cont_sm" data-animation="animationContainer">
        <p className="sup">Special Features</p>
        <h2 className="section_title animated" data-delay="200" data-animation="animated">
          Features Never Stop
        </h2>

        <div className="grid">
          <div className="column column_first">
            {features.slice(0, 1).map(feature => (
              <div key={feature.id} className={`item item_${feature.id}`}>
                <div className="img_wrap">
                  <img src="https://palatio.axiomthemes.com/splash/src/img/features/1.png " alt={feature.alt} />
                </div>
                <h4 className="item_title">{feature.title}</h4>
                <p className="item_descr">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="column column_second">
            <div className="item item_3">
              <div className="img_wrap">
                <img src="https://palatio.axiomthemes.com/splash/src/img/features/3.png" alt={features[2].alt} />
              </div>
              <h4 className="item_title">{features[2].title}</h4>
              <p className="item_descr">{features[2].description}</p>
              
            </div>
          </div>
          <div className="column column_third">
            {features.slice(3).map(feature => (
              <div key={feature.id} className={`item item_${feature.id}`}>
                {feature.extraImgSrc && (
                  <div className="img_wrap">
                    <img src='	https://palatio.axiomthemes.com/splash/src/img/features/2.png' alt="globe" />
                  </div>
                )}
                <div className="img_wrap">
                 
                </div>
                <h4 className="item_title">{feature.title}</h4>
                <p className="item_descr">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
