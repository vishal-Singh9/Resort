import React, { useState, useEffect } from "react";
import "./Luxury.css";

const Luxury = () => {

  const handleLearnMore = () => {
    window.open("https://en.wikipedia.org/wiki/Resort", "_blank");
  };
  
  return (
    <div
      className="elementor-section elementor-top-section elementor-element elementor-element-62924bf elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="62924bf"
      data-element_type="section"
      data-settings='{"stretch_section":"section-stretched"}'
      style={{ width: "1144px", left: "-107px" }}
    >
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2938286"
            data-id="2938286"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-ec496cf elementor-widget elementor-widget-image"
                  data-id="ec496cf"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">
                      <img
                        decoding="async"
                        width="520"
                        height="720"
                        src="https://demo2.themelexus.com/erios/wp-content/uploads/2022/09/H5_images_02.jpg"
                        className="attachment-full size-full wp-image-2846"
                        alt=""
                        loading="lazy"
                        srcSet="https://demo2.themelexus.com/erios/wp-content/uploads/2022/09/H5_images_02.jpg 520w, https://demo2.themelexus.com/erios/wp-content/uploads/2022/09/H5_images_02-217x300.jpg 217w"
                        sizes="(max-width: 520px) 100vw, 520px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-354dbeb"
            data-id="354dbeb"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-bf432c9 elementor-align-left elementor-widget__width-initial elementor-mobile-align-center elementor-widget elementor-widget-heading animated opal-move-up"
                  data-id="bf432c9"
                  data-element_type="widget"
                  data-settings='{"_animation":"opal-move-up"}'
                  data-widget_type="heading.default"
                >
                  <div className="elementor1">
                    <span className="sub-title">pools &amp; the beach</span>
                    <h2 className="elementor-heading-title elementor-size-default">
                      Luxury and Nature in Harmony
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-47c552e elementor-widget__width-initial elementor-widget elementor-widget-text-editor animated opal-move-up"
                  data-id="47c552e"
                  data-element_type="widget"
                  data-settings='{"_animation":"opal-move-up"}'
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor2">
                      The shimmering turquoise waters of the Aegean provide a
                      dramatic backdrop for 152 exclusively-designed rooms,
                      suites and villas with 71 pools. An immaculate infinity
                      pool, private sandy beach and 364-meter shoreline serve as
                      the perfect settings for rest and relaxation. Reserve a
                      stay at one of the best hotels in Greece.
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-602382c elementor-align-left elementor-mobile-align-center elementor-button-primary elementor-widget elementor-widget-button animated opal-move-up"
                  data-id="602382c"
                  data-element_type="widget"
                  data-settings='{"_animation":"opal-move-up"}'
                  data-widget_type="button.default"
                >
                  <div>
                    <button
                      onClick={handleLearnMore}
                      className="elementor-button-link elementor-button elementor-size-md"
                    >
                      {" "}
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
