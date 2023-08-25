import { useEffect, useState } from "react";
import DatePicker from "../../../components/DayPicker/DayPicker";
import { Helmet } from "react-helmet-async";
import AppointmentServices from "../AppointmentServices/AppointmentServices";
import moment from "moment/moment";
import AppointmentSlots from "../AppointmentSlots/AppointmentSlots";

const Appointment = () => {
  const [services, setServices] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  //   console.log(moment(selectedDay).format("ll"));
  // the out put format will be : Aug 30, 2023
  const [availableServices, setAvailableServices] = useState(null);

  useEffect(() => {
    fetch("https://doc-house-server-five.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Doc House | Appointment</title>
      </Helmet>
      <DatePicker
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}></DatePicker>

      <div className="text-center mt-16">
        {selectedDay ? (
          <p className="text-teal-600 text-lg font-semibold mb-2">
            Available Services On
            <span className="text-rose-600 ml-2">
              {moment(selectedDay).format("ll")}
            </span>
          </p>
        ) : (
          <></>
        )}
        <h2 className="text-3xl md:text-4xl font-bold">
          Please Select a Service
        </h2>
      </div>
      {/* all services */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 md:w-9/12 mx-auto gap-5 md:gap-10 mt-10 mb-24">
        {services.map((service) => (
          <AppointmentServices
            key={service._id}
            service={service}
            setAvailableServices={setAvailableServices}></AppointmentServices>
        ))}
      </div>
      {/* appointment time */}
      <div>
        {availableServices ? (
          <AppointmentSlots
            availableServices={availableServices}></AppointmentSlots>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Appointment;
