import React from "react";
import CourseIdContainer from "../../../routes/my-courses/courseId/course-id-container";
import { handleGet } from "../../../core/api-calls/Axios";

type Props = {
  courseData: any;
};

const CourseInfo = ({ courseData }: Props) => {
  return <CourseIdContainer courseData={courseData} />;
};

export default CourseInfo;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }: any) {
  const courseRes = await handleGet("course/get-course-by-id", {
    course_id: params.courseId,
  });

  const courseData = courseRes.data;

  return {
    props: {
      courseData: courseData,
    },
    revalidate: 3600,
    notFound: !courseData,
  };
}
