const DoctorOverview = ({ doctorDetails }) => {
  const {
    about,
    education,
    work,
    experience_years,
    services,
    awards,
    available_times,
    contact,
  } = doctorDetails;

  return (
    <div className="w-11/12 mx-auto my-20">
      {/* about me */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold">About Me </h3>
        <p className="my-5">{about}</p>
      </div>
      {/* education and awards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-0">
        {/* education column */}
        <div className=" space-y-7">
          {/* education */}
          <div>
            <h2 className="text-xl font-semibold">Education</h2>
            <li className="my-4">{education}</li>
          </div>
          {/* work and experience */}
          <div>
            <h2 className="text-xl font-semibold">Work & Experience</h2>
            <li className="my-2">{work}</li>
            <li>{experience_years} years of experience</li>
          </div>
          {/* services */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Services</h2>
            <div>
              {services.map((service, index) => (
                <li className="mb-2" key={index}>
                  {service}
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* awards column */}
        <div className="space-y-7">
          {/* award */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Awards</h2>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index}>
                  <li className="font-semibold">{award.name}</li>
                  <p>{award.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* specializations */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Available Times</h2>
            <div>
              {available_times.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </div>
          </div>
          {/* contact */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <div>
              <li>{contact.email}</li>
              <li>{contact.phone}</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorOverview;
