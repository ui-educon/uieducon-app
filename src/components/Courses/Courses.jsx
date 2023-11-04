import CourseItem from "./CourseItem";
const Courses = () => {
  return (
    <div className="p-10 mt-7">
      <div className="coursetitle">
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

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vh] mt-4">
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
      <div className="h-[30vh] flex items-center justify-center">
        <div className="uibg px-11 text-white py-2 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-500 cursor-pointer">
          Explore All Courses
        </div>
      </div>
    </div>
  );
};
export default Courses;
