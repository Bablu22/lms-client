import Link from "next/link";
import Logo from "../components/Logo";
import SocialLink from "../components/auth/SocialLink";
import LoginForm from "../components/auth/LoginForm";
import { Metadata } from "next";

const LoginPage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 px-2 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-secondary px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div className="text-center">
            <Logo />
          </div>
          <LoginForm />
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
                Dont have an account?{" "}
                <Link href="/register" className="text-accent hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

export const metadata: Metadata = {
  title: "Login | EduTech",
  description:
    "Login to your account to access your courses, track your progress, and more",
  keywords:
    "login, account, access, courses, progress, track, learn, education",
};
