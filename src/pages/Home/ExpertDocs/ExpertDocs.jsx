import {
  faCalendar,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExpertDocs = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://doc-house-server-five.vercel.app/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <section className="py-10 bg-white sm:py-16 lg:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our Expert Doctors
          </h2>
          <p className="max-w-full mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-8 gap-y-12">
          {/* loaded data dynamically */}
          {doctors.map((doctor) => (
            <div key={doctor._id} className="border-2 p-4 rounded-md">
              <div className="block aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full rounded-md"
                  src={doctor.image_url}
                  alt="doctor"
                />
              </div>
              <h4 className="text-xl font-semibold mt-3 px-2">{doctor.name}</h4>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-4">
                {doctor.specialty}
              </span>
              <p className="mt-6 text-lime-600">
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                <span className="ml-5">{doctor.location}</span>
              </p>
              <div className="mt-4 text-teal-600 flex items-center ">
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                <ul className="ml-5">
                  {doctor.available_times.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-emerald-600">
                <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
                <span className="ml-5">{doctor.fee}</span>
              </p>
              <div className="text-center">
                <Link
                  to={`/details/${doctor._id}`}
                  className="btn btn-outline border-orange-500 btn-warning mt-7 w-full">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertDocs;
