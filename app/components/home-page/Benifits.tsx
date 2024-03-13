import Image from "next/image";
import home2Image from "@/public/home2.png";

const Benifits = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-8 px-4 sm:px-6 lg:px-8">
      <div className="lg:flex-shrink-0 lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
        <Image
          src={home2Image}
          alt="home2"
          placeholder="blur"
          className="rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-950 mb-4">
          Empowering Your Learning Journey
        </h2>
        <p className="text-gray-600 mb-6">
          At EducationTemp, we are dedicated to providing you with the best
          learning experience possible. Our curated courses cover a wide range
          of topics and are taught by industry experts. Whether you are looking
          to advance your career or explore a new hobby, we have something for
          everyone.
        </p>
        <button className="bg-accent text-gray-900 py-2 px-6 rounded-lg transition duration-300 ease-in-out">
          Join Us Now
        </button>
      </div>
    </div>
  );
};

export default Benifits;
