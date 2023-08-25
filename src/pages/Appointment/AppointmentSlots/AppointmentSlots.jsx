const AppointmentSlots = ({ availableServices }) => {
  const { title, time_slots, image, price } = availableServices;

  return (
    <div className="lg:space-y-16 bg-gray-100 px-7 lg:px-20 py-20 lg:py-24">
      <h3 className="text-3xl md:text-4xl font-bold text-center">
        Available Slots For
        <span className="text-emerald-500 ml-1">{title}</span>
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-7 mt-10">
        {time_slots.map((slot, index) => (
          <div
            key={index}
            className="border-2 flex flex-col items-center py-10 rounded-lg border-teal-400 shadow-xl shadow-emerald-500 bg-white">
            <img
              className="bg-slate-100 rounded-md shadow-lg"
              src={image}
              alt="dental"
            />
            <h4 className="text-xl font-bold mt-3">{title}</h4>
            <p className="font-semibold my-2">{slot}</p>
            <p className="font-medium"> {price}</p>
            <button className="btn btn-warning mt-7 hover:bg-yellow-400 hover:text-white">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentSlots;
