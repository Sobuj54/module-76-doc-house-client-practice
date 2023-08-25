import comma from "../../assets/logo/icons8-quote-left-96.png";

const SliderDetails = ({ review, index }) => {
  const { picture, name, profession, comment } = review;

  return (
    <div
      className={`keen-slider__slide number-slide${
        index + 1
      } border-2 rounded-md p-3`}
      style={{
        minWidth: "405.526px",
        maxWidth: "405.526px",
        transform: `translate3d(${index * 10}px, 0px, 0px )`,
      }}>
      <div className="flex  items-center">
        <img className="w-16 mask mask-circle" src={picture}></img>
        <div className="ml-2">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm">{profession}</p>
        </div>
        <img src={comma} className="ml-auto" alt="" />
      </div>
      <p className="mt-4">{comment}</p>
    </div>
  );
};

export default SliderDetails;
