import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img
          src="https://img.freepik.com/free-photo/stylish-black-girl_1157-15553.jpg?size=626&ext=jpg"
          alt=""
        />
      </div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
};

export default Slider;
