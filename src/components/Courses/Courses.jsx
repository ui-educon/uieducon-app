import CourseCard from "@/routes/my-courses/course-card/course-card";
import Link from "next/link";

const Courses = ({ allCoursesList }) => {
  return (
    <div className="p-10 mt-7">
      <div className="coursetitle flex flex-col items-center">
        <h1 className="font-bold md:text-5xl text-3xl">
          Our Most <span className="uicolor">Popular Courses</span>
        </h1>
        <p className="mt-4 coursedes">
          {" "}
          Discover our popular courses designed to help you succeed. Join our
          community of learneres and take the first step towards achieving your
          goals.
        </p>
      </div>

      <div className="flex flex-wrap gap-5 lg:gap-8 mt-4 justify-center">
        {allCoursesList &&
          allCoursesList
            .slice(0, 4)
            .map((courseData, index) => (
              <CourseCard
                courseData={courseData}
                key={index}
                isPurchased={false}
              />
            ))}
      </div>
      <div className="flex mt-8 items-center justify-center">
        <Link
          href="/courses"
          className="px-11 text-blue-500 font-semibold hover:text-white py-2 rounded-xl transition ease-in-out delay-150 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:border-indigo-500 duration-500 cursor-pointer"
        >
          Explore All Courses
        </Link>
      </div>
    </div>
  );
};
export default Courses;
