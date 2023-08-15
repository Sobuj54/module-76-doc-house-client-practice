import { FaRegClock, FaSearchLocation, FaPhoneAlt } from "react-icons/fa";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 w-11/12 mx-auto">
      <div className="flex items-center justify-center gap-7 px-5 py-7 rounded-md bg-green-950 text-white">
        <FaRegClock className="text-3xl" />
        <div>
          <h1 className="text-2xl font-bold">Opening Hours</h1>
          <p>Open 9.00am to 5.00pm everyday</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 px-5 py-7 rounded-md bg-pink-700 text-white">
        <FaSearchLocation className="text-3xl" />
        <div>
          <h1 className="text-2xl font-bold">Our Location</h1>
          <p>Dhanmondi 15, Dhaka</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 px-5 py-7 rounded-md bg-green-950 text-white">
        <FaPhoneAlt className="text-3xl" />
        <div>
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p>01631 058947</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
