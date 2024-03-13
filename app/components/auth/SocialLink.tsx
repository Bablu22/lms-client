import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLink = () => {
  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <a
          href="#"
          className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-gray-900 "
        >
          <FaGoogle />
          <span className="text-sm font-semibold leading-6">Google</span>
        </a>
        <a
          href="#"
          className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-gray-900 "
        >
          <FaGithub />
          <span className="text-sm font-semibold leading-6">GitHub</span>
        </a>
      </div>
    </>
  );
};

export default SocialLink;
