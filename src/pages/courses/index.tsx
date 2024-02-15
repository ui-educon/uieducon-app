import { handleGet } from "@/core/api-calls/Axios";
import MyCoursesContainer from "@/routes/my-courses/my-courses-container";
import React from "react";

type Props = {
  allCoursesList: any[];
};

const MyCourses = ({ allCoursesList }: Props) => {
  return <MyCoursesContainer allCoursesList={allCoursesList} />;
};

export default MyCourses;

export async function getStaticProps() {
  const allCoursesRes = await handleGet("/course/get-all-courses");
  const allCoursesList = allCoursesRes.data;

  return {
    props: {
      allCoursesList,
    },
    revalidate: 30,
  };
}
