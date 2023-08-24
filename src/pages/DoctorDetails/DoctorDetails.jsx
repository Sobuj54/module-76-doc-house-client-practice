import { Rating, ThinStar } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#C0C0C0",
};

const DoctorDetails = () => {
  const doctorDetails = useLoaderData();

  const { name, image_url, specialty, rating, services, location } =
    doctorDetails;

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img src={image_url} className="max-w-md rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="bg-sky-200 w-40 text-sky-600 py-1 my-3 rounded-md text-center">
              {specialty}
            </p>

            <Rating
              style={{ maxWidth: 120 }}
              value={rating}
              readOnly
              itemStyles={myStyles}
            />
            <p className="my-3">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              <span className="ml-4">{location}</span>
            </p>

            <div className="grid grid-cols-3 gap-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="btn btn-outline btn-md  btn-success">
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
