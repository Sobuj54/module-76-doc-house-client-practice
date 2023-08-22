const SliderDetails = ({ review }) => {
  const { picture } = review;
  return (
    <div className="keen-slider__slide">
      <img src={picture}></img>
    </div>
  );
};

export default SliderDetails;
