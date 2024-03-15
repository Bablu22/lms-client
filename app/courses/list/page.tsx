import CourseCard from "../_components/CourseCard";
import { Metadata } from "next";

const courses = [
  {
    _id: "65ef44c112b6f233edb4e1b7",
    name: "Introduction to Web Development",
    description: "Learn the basics of web development from scratch.",
    price: 49.99,
    thumbnail: {
      public_id: "Web Development Thumbnail",
      _id: "120 KB",
      url: "https://res.cloudinary.com/dsftrmdil/image/upload/v1710180169/lms/undefined-1710180168516.png.jpg",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    level: "Beginner",
    demoUrl: "https://example.com/demo",
    benefits: [
      "Learn essential web development concepts",
      "Hands-on projects and exercises",
    ],
    prerequisites: [
      "Basic computer skills",
      "No prior programming experience required",
    ],

    rating: 4.5,
    purchased: 1016,
    reviews: [],
    createdAt: "2024-03-11T17:52:01.282+00:00",
    updatedAt: "2024-03-20T00:00:00.000+00:00",
  },
  {
    _id: "65ef44c112b6f233edb4e1b8",
    name: "Introduction to Python Programming",
    description: "Learn the basics of Python programming from scratch.",
    price: 59.99,
    thumbnail: {
      public_id: "Python Programming Thumbnail",
      _id: "120 KB",
      url: "https://res.cloudinary.com/dsftrmdil/image/upload/v1710180169/lms/undefined-1710180168516.png.jpg",
    },
    tags: ["Python", "Programming"],
    level: "Beginner",
    demoUrl: "https://example.com/demo",
    benefits: [
      "Learn essential Python programming concepts",
      "Hands-on projects and exercises",
    ],
    prerequisites: [
      "Basic computer skills",
      "No prior programming experience required",
    ],

    rating: 3,
    purchased: 1016,
    reviews: [],
    createdAt: "2024-03-11T17:52:01.282+00:00",
    updatedAt: "2024-03-20T00:00:00.000+00:00",
  },
  {
    _id: "65ef44c112b6f233edb4e1b9",
    name: "Introduction to Data Science",
    description: "Learn the basics of data science from scratch.",
    price: 69.99,
    thumbnail: {
      public_id: "Data Science Thumbnail",
      _id: "120 KB",
      url: "https://res.cloudinary.com/dsftrmdil/image/upload/v1710180169/lms/undefined-1710180168516.png.jpg",
    },
    tags: ["Data Science", "Python", "Machine Learning"],
    level: "Beginner",
    demoUrl: "https://example.com/demo",
    benefits: [
      "Learn essential data science concepts",
      "Hands-on projects and exercises",
    ],
    prerequisites: [
      "Basic computer skills",
      "No prior programming experience required",
    ],

    rating: 4,
    purchased: 1016,
    reviews: [],
    createdAt: "2024-03-11T17:52:01.282+00:00",
    updatedAt: "2024-03-20T00:00:00.000+00:00",
  },
];

const AllCourses = () => {
  return (
    <div className="container mx-auto px-4">
      <ul
        role="list"
        className="grid grid-cols-2 my-20 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            name={course.name}
            description={course.description}
            rating={course.rating}
            purchased={course.purchased}
            price={course.price}
            thumbnail={course.thumbnail.url}
          />
        ))}
      </ul>
    </div>
  );
};

export const revalidate = 0;
export default AllCourses;

export const metadata: Metadata = {
  title: "All Courses | EduTech",
  description:
    "Browse all available courses. Learn web development, Python, and data science.",
  keywords: "courses, web development, python, data science",
};
