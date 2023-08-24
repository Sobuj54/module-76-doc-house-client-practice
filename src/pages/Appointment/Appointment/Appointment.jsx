import { useEffect, useState } from "react";
import DatePicker from "../../../components/DayPicker/DayPicker";
import { Helmet } from "react-helmet-async";
import AppointmentServices from "../AppointmentServices/AppointmentServices";

const Appointment = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("serviceTime.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Doc House | Appointment</title>
      </Helmet>
      <DatePicker></DatePicker>
      <h2 className="text-4xl font-bold text-center mt-10">
        Please Select a Service
      </h2>
      <div className="grid grid-cols-3 w-9/12 mx-auto gap-10 my-10">
        {services.map((service) => (
          <AppointmentServices
            key={service.id}
            service={service}></AppointmentServices>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
