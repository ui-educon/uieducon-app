import "../Courses/Courses.css";
import LinearProgress from "./LinearProgress";
import { Link } from "react-router-dom";
import courseImg from "../../Images/svgs/courseImage.svg";
import Image from "next/image";
const CourseItem = () => {
  const totalVideos = 20;
  const watchedVideos = 2;
  const id = "asd";
  const link = `/${id}/view`;
  return (
    <div className="m-2 w-fit rounded-2xl transition duration-500 ease-in-out hover:-translate-y-2">
      <div className="rounded-t-xl w-[100%] h-[22vh] item-img">
        <Image src={courseImg} alt="courseImg" />
      </div>
      <div className="lol border-2 border-black-500">
        <div className="border-black-600">
          <div className="flex flex-col">
            <div className="p-3 text-xl font-medium">
              Mastering the Art of Public Speaking
            </div>

            <div className="mr-2 px-3">
              <LinearProgress totalVideos={20} watchedVideos={2} />
            </div>
          </div>
          <div className="flex flex-wrap p-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20px"
              height="20px"
            >
              <circle cx="25" cy="25" r="23" fill="#7E3AF2" />
              <polygon points="19,15 35,25 19,35" fill="#FFFFFF" />
            </svg>

            <div className="ms-2 font-bold text-sm">
              {watchedVideos}/{totalVideos} videos
            </div>
          </div>

          <div className="p-3 text-xs text-gray-500">
            Avg. time to complete - 4 weeks
          </div>
        </div>
      </div>
      <div className="p-3 flex justify-center items-center uibg rounded-b-xl shadow-2xl text-white hover:cursor-pointer">
        <Link to={link}>Continue Course</Link>
      </div>
    </div>
  );
};
export default CourseItem;
