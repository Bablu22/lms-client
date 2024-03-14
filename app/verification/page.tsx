import Logo from "../components/Logo";
import VerificationForm from "../components/auth/VerificationForm";

const EmailVerificationPage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 px-2 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-secondary px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div className="text-center">
            <Logo />
          </div>
          <VerificationForm />
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
