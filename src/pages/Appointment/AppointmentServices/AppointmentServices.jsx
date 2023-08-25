const AppointmentServices = ({ service, setAvailableServices }) => {
  const { title, image, _id } = service;

  const handleAppointment = (id) => {
    fetch(`https://doc-house-server-five.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => setAvailableServices(data));
  };

  return (
    <button
      onClick={() => handleAppointment(_id)}
      className="flex items-center justify-center gap-5 border-amber-400 rounded-md border-2 py-5 hover:bg-amber-400 hover:text-white transition-all
      active:bg-amber-400">
      <img
        className="w-[70px] rounded-md shadow-lg shadow-slate-400 bg-slate-200"
        src={image}
        alt="service"
      />
      <h3 className="text-xl font-bold">{title}</h3>
    </button>
  );
};

export default AppointmentServices;
