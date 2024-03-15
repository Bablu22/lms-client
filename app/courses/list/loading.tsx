import CourseCardSkeleton from "../_components/CourseCardSkeleton";

const CourseListLoading = () => {
  return (
    <div className="container mx-auto px-4">
      <ul
        role="list"
        className="grid grid-cols-2 my-20 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {[1, 2, 3, 4].map((index) => (
          <CourseCardSkeleton key={index} />
        ))}
      </ul>
    </div>
  );
};

export default CourseListLoading;
