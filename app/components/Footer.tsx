import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto container px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">YouTube</span>
            <FaYoutube className="h-5 w-5" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-500">
            &copy; 2020 EducationTemp, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
