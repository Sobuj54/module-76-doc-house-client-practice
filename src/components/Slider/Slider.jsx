import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SliderDetails from "./SliderDetails";

const Slider = () => {
  const [reviews, setReviews] = useState([]);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    breakpoints: {
      "(max-width: 600px)": {
        slides: { perView: 1, spacing: 5 },
      },
    },
    slides: {
      perView: 3,
      spacing: 10,
    },
  });

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div ref={sliderRef} className="keen-slider mt-10">
      {reviews.map((review) => (
        <SliderDetails key={review.id} review={review}></SliderDetails>
      ))}

      {/* <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div> */}
    </div>
  );
};

export default Slider;
