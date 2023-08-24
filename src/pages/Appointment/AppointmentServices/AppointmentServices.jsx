const AppointmentServices = ({ service }) => {
  const { title, image } = service;

  return (
    <button className="flex items-center justify-center gap-5 border-amber-400 rounded-md border-2 py-3">
      <img className="w-[70px]" src={image} alt="" />
      <h3 className="text-xl font-bold">{title}</h3>
    </button>
  );
};

export default AppointmentServices;
