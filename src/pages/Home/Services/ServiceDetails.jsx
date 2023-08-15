const ServiceDetails = ({ service }) => {
  const { title, image, description } = service;
  return (
    <div className="mt-5 w-full lg:w-3/4 mx-auto">
      <img src={image} className="rounded-lg " />
      <h3 className="text-2xl font-bold  my-3">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceDetails;
