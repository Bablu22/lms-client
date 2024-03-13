import ServiceCard from "./ServiceCard";
import { SERVICE_DATA } from "./data";

const Services = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 my-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Benefits of Joining EducationTemp
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {SERVICE_DATA.map((service) => (
          <ServiceCard key={service.number} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
