import Slider from "../../../components/Slider/Slider";

const Reviews = () => {
  return (
    <div className="w-11/12 mx-auto mt-28 mb-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Patients Says
        </h2>
        <p className="w-11/12 lg:w-9/12 mx-auto my-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <>
        <Slider></Slider>
      </>
    </div>
  );
};

export default Reviews;
