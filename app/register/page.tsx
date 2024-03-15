import Link from "next/link";
import Logo from "../components/Logo";
import RegisterForm from "../components/auth/RegisterForm";
import SocialLink from "../components/auth/SocialLink";
import { Metadata } from "next";

const RegisterPage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 px-2 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-secondary px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div className="text-center">
            <Logo />
          </div>
          <RegisterForm />
          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-secondary px-6 text-white">
                  Or continue with
                </span>
              </div>
            </div>
            <SocialLink />
            <div className="mt-6">
              <p className="text-center text-sm text-white font-medium leading-6">
                Already have an account?{" "}
                <Link href="/login" className="text-accent hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

export const metadata: Metadata = {
  title: "Register | EduTech",
  description:
    "Register for free and start learning web development, python, data science and more. Get access to free courses and tutorials on EduTech",
  keywords:
    "register, free, learn, web development, python, data science, tutorial, course, education",
};
