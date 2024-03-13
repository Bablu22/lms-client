import React from "react";

interface Props {
  service: {
    number: number;
    title: string;
    description: string;
    icon: React.ElementType;
  };
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-[#F4F6FC] rounded-lg p-6 overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-gray-900 w-20 h-20 -mt-8 -ml-8 transform rotate-45 rounded-lg" />
        <div className="flex items-center justify-center w-24 h-24 bg-gray-950 rounded-full">
          <Icon className="text-3xl text-accent" />
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
