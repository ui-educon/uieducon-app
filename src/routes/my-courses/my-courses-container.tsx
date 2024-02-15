import React from "react";
import useMyCoursesHook from "./use-my-courses-hook";
import CourseCard from "./course-card/course-card";

type Props = {
  allCoursesList: any[];
};

const MyCoursesContainer = ({ allCoursesList }: Props) => {
  const { currentUser, allPurchasedCoursesList, userLoading } =
    useMyCoursesHook(allCoursesList);

  return (
    <div className="py-10 common-frame-box">
      <div className="flex flex-col gap-6">
        <p className="text-4xl text-black font-semibold">
          {currentUser
            ? `Hey there, ${currentUser?.displayName}`
            : "Welcome to courses section!"}
        </p>
        {userLoading ? (
          <div className="flex flex-col md:flex-row gap-5 lg:gap-8">
            <div className="w-full md:w-72 h-72 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-full md:w-72 h-72 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-full md:w-72 h-72 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-full md:w-72 h-72 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        ) : (
          allPurchasedCoursesList.length > 0 && (
            <>
              <p className="mt-2 text-2xl font-medium ">My Courses</p>
              <div className="flex flex-wrap gap-5 lg:gap-8">
                {allPurchasedCoursesList.map(
                  (courseData: any, index: number) => {
                    return (
                      <CourseCard
                        courseData={courseData}
                        key={index}
                        isPurchased={true}
                      />
                    );
                  }
                )}
              </div>
            </>
          )
        )}
        <p className="mt-2 text-2xl font-medium">
          All <span className="text-[#7E3AF2]">courses</span>
        </p>
        <div className="flex flex-wrap gap-5 lg:gap-8">
          {allCoursesList?.map((courseData: any, index: number) => {
            return (
              <CourseCard
                courseData={courseData}
                key={index}
                isPurchased={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCoursesContainer;
