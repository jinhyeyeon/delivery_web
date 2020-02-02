import React from 'react';
import Slider from "react-slick";
import "./simple-slider.scss";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="slider">
          <img src="images/slider1.png" alt="배달가능"/>
        </div>
        <div className="slider">
          <img src="images/slider2.png" alt="다양한 결제방법"/>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;