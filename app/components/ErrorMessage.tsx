import { GoXCircleFill } from "react-icons/go";

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => (
  <div className="text-red-300 text-sm mt-2 flex items-center space-x-2">
    <GoXCircleFill className="text-lg" />
    <span>{errorMessage}</span>
  </div>
);

export default ErrorMessage;
