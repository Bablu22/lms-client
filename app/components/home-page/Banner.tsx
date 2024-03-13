import Image from "next/image";
import bannerImage from "@/public/banner.png";

const Banner = () => {
  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Good coaching is good teaching
          </h1>
          <p className="text-lg text-white mb-6">
            In a coaching role, you ask the questions and rely more on your
            staff, who become the experts, to provide the information.
          </p>
          <button className="bg-accent text-gray-900  py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out">
            Join Now
          </button>
        </div>
        <div className="md:w-1/2">
          <Image src={bannerImage} alt="banner" placeholder="blur" priority />
        </div>
      </div>
    </div>
  );
};

export default Banner;
