import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex  justify-center items-center">
      <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mr-2">
        <h1 className="text-secondary text-xl font-bold">ET</h1>
      </div>
      <h1 className="text-white text-xl md:text-2xl font-bold">
        EducationTemp
      </h1>
    </Link>
  );
};

export default Logo;
