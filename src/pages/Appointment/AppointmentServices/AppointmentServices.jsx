const AppointmentServices = ({ service }) => {
  const { title, image } = service;

  return (
    <button className="flex items-center justify-center gap-5 border-amber-400 rounded-md border-2 py-5 hover:bg-amber-400 hover:text-white transition-all">
      <img
        className="w-[70px] rounded-md shadow-lg shadow-slate-400 bg-slate-200"
        src={image}
        alt=""
      />
      <h3 className="text-xl font-bold">{title}</h3>
    </button>
  );
};

export default AppointmentServices;
