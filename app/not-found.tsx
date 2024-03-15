import notfoundImage from "@/public/not-found.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Image
        src={notfoundImage}
        alt="notfound"
        priority
        width={500}
        height={500}
        className="rounded mx-auto"
      />
      <h1 className="text-center text-4xl font-bold mt-4 text-gray-800">
        Page Not Found
      </h1>
      <Link href="/" className="text-center block text-blue-500 mt-4">
        <span>Go back to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;

export const metadata: Metadata = {
  title: "Page Not Found | EduTech",
  description:
    "The page you are looking for does not exist. Go back to the home page to continue browsing our courses and resources",
  keywords: "page not found, 404, error, home, courses, resources",
};
