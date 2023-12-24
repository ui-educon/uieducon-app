// import "./Courses.css";
import CircularProgress from "./CircularProgress";
import courseImg from "../../Images/svgs/courseImage.svg";
import playbutton from "../../Images/svgs/playbutton.svg";
import Image from "next/image";
const CourseItem = () => {
  return (
    <div className="m-2  rounded-2xl  transition duration-500 ease-in-out hover:-translate-y-2">
      <div className="rounded-t-xl w-[100%] h-[22h] ">
        <Image src={courseImg} className="h-full w-full" alt="playbutton" />
      </div>
      <div className="lol border-2 border-black-500">
        <div className="border-black-600">
          <div className="flex flex-wrap p-3 items-center">
            <Image src={playbutton} alt="playbutton" />

            <div className="ms-2 font-medium text-sm">25x Videos</div>
          </div>

          <div className="flex">
            <p className="p-3 text-xl font-medium">
              Mastering the Art of Public Speaking
            </p>
          </div>

          <div className="p-3 text-xs text-gray-500">
            Avg. time to complete - 4 weeks
          </div>
        </div>
      </div>
      <div className="p-3 flex justify-center items-center uibg rounded-b-xl shadow-2xl text-white hover:cursor-pointer">
        View Course
      </div>
    </div>
  );
};
export default CourseItem;
