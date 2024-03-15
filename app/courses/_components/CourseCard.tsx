import formatPrice from "@/app/utils/formatPrice";
import Image from "next/image";
import { FaStar, FaUsers } from "react-icons/fa";

interface Props {
  name: string;
  description: string;
  rating: number;
  purchased: number;
  price: number;
  thumbnail: string;
}

const CourseCard = ({
  name,
  description,
  rating,
  purchased,
  price,
  thumbnail,
}: Props) => {
  return (
    <li className="relative border p-3 rounded border-gray-200">
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded bg-gray-100 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <Image
          objectFit="cover"
          width="0"
          height="0"
          sizes="100vw"
          alt={name}
          placeholder="blur"
          blurDataURL={thumbnail}
          src={thumbnail}
          className="pointer-events-none w-full h-1/2 object-cover group-hover:opacity-75"
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">
            View details for
            {name}
          </span>
        </button>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {name}
      </p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {description}
      </p>
      <div className="mt-4">
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">
            {formatPrice(price)}
          </span>
          <div className="ml-2 flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="flex items-center ml-1">
                <FaStar className="w-4 h-4 text-yellow-500" />
              </div>
              <span className="text-sm font-medium text-gray-500">
                {rating}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="flex items-center ml-1">
                <FaUsers className="w-4 h-4 text-gray-900" />
              </div>
              <span className="text-sm font-medium text-gray-500">
                {purchased}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CourseCard;
