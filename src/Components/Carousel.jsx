import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="carousel-slide">
          <h3>Slide 1</h3>
        </div>
        <div className="carousel-slide">
          <h3>Slide 2</h3>
        </div>
        <div className="carousel-slide">
          <h3>Slide 3</h3>
        </div>
        {/* Add as many slides as you want */}
      </Slider>
    </div>
  );
}

export default Carousel;
