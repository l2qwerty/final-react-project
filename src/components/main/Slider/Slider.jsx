import React, { PureComponent } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

class MainSlider extends PureComponent {
  render() {
    const settings = {
      dots: true,
      fade: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            className="image"
            alt="1"
            src="https://wowslider.com/sliders/demo-23/data1/images/lucerne1359909.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            alt="2"
            src="https://wowslider.com/sliders/demo-23/data1/images/rieti106848.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            alt="3"
            src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            alt="4"
            src="https://wowslider.com/sliders/demo-23/data1/images/landscape1344620.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            alt="5"
            src="https://wowslider.com/sliders/demo-51/data1/images/car.jpg"
          />
        </div>
      </Slider>
    );
  }
}

export default MainSlider;
