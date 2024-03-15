import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CourseCardSkeleton = () => {
  return (
    <li className="relative border p-3 rounded border-gray-200">
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded bg-gray-100 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <Skeleton height={200} />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">
            View details for
            <Skeleton />
          </span>
        </button>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        <Skeleton />
      </p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        <Skeleton />
      </p>
      <div className="mt-4">
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">
            <Skeleton />
          </span>
          <div className="ml-2 flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="flex items-center ml-1">
                <Skeleton />
              </div>
              <span className="text-sm font-medium text-gray-500">
                <Skeleton />
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="flex items-center ml-1">
                <Skeleton />
              </div>
              <span className="text-sm font-medium text-gray-500">
                <Skeleton />
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CourseCardSkeleton;
