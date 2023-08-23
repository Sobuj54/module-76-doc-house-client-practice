import banner1 from "../../assets/banner/banner1.avif";
import banner2 from "../../assets/banner/banner2.avif";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner2})`,
        height: "700px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="pt-24 lg:pt-16">
      <div className="h-fit lg:h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-10 px-5 lg:px-10 ">
        <div className="text-white flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Your Best Medical Help Center
          </h2>
          <p className="my-5">
            Lorem Ipsum is simply dummy text they are printing typesetting has
            been the industry’s stardard.
          </p>
          <div className=" w-full">
            <button className="btn btn-accent">All Service</button>
          </div>
        </div>

        <div className="relative my-10 lg:mt-0">
          <div className="w-[170px] lg:w-[300px] absolute top-2/3 md:top-2/4 right-10 border-8  border-white hover:rotate-12 transition-transform delay-150">
            <img
              src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
          <div
            className="w-[170px] lg:w-[300px] absolute top-14 md:top-1/4 right-38
          md:right-2/4 border-8 border-white hover:rotate-6 transition-transform delay-150">
            <img
              src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
          <div className="w-[170px] lg:w-[300px] absolute top-32 md:top-14 right-10 border-8 border-white hover:rotate-12 transition-transform delay-150">
            <img
              src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
