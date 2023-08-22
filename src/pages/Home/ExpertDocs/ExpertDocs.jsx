import {
  faCalendar,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExpertDocs = () => {
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
          <div className="border-2 p-4 rounded-md">
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg"
                alt=""
              />
            </a>
            <h4 className="text-xl font-semibold mt-3 px-2">Karyen Anderson</h4>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-4">
              BTP - Senior Physiotherapist
            </span>
            <p className="mt-6 ">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              <span className="ml-3">Dhanmondi, Dhaka, Bangladesh</span>
            </p>
            <p className="mt-4 text-gray-600">
              <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
              <span className="ml-3">Available on Mon, 22 December</span>
            </p>
            <p className="mt-4 text-gray-600">
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              <span className="ml-3">$15</span>
            </p>
            <div className="text-center">
              <button className="btn btn-outline border-orange-500 btn-warning mt-7 w-full">
                View Profile
              </button>
            </div>
          </div>
          <div className="border-2 p-4 rounded-md">
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic_1258-57360.jpg?size=626&ext=jpg"
                alt=""
              />
            </a>
            <h4 className="text-xl font-semibold mt-3 px-2">Karyen Anderson</h4>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-4">
              BTP - Senior Physiotherapist
            </span>
            <p className="mt-6 ">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              <span className="ml-3">Dhanmondi, Dhaka, Bangladesh</span>
            </p>
            <p className="mt-4 text-gray-600">
              <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
              <span className="ml-3">Available on Mon, 22 December</span>
            </p>
            <p className="mt-4 text-gray-600">
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              <span className="ml-3">$15</span>
            </p>
            <div className="text-center">
              <button className="btn btn-outline border-orange-500 btn-warning mt-7 w-full">
                View Profile
              </button>
            </div>
          </div>
          <div className="border-2 p-4 rounded-md">
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://img.freepik.com/free-photo/portrait-smiling-young-woman-doctor-healthcare-medical-worker-pointing-fingers-left-showing-clini_1258-88108.jpg?size=626&ext=jpg"
                alt=""
              />
            </a>
            <h4 className="text-xl font-semibold mt-3 px-2">Karyen Anderson</h4>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-teal-500 bg-teal-100 mt-4">
              BTP - Senior Physiotherapist
            </span>
            <p className="mt-6 ">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              <span className="ml-3">Dhanmondi, Dhaka, Bangladesh</span>
            </p>
            <p className="mt-4 text-gray-600">
              <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
              <span className="ml-3">Available on Mon, 22 December</span>
            </p>
            <p className="mt-4 text-gray-600">
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              <span className="ml-3">$15</span>
            </p>
            <div className="text-center">
              <button className="btn btn-outline border-orange-500 btn-warning mt-7 w-full">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertDocs;
