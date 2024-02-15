import React from "react";
import CourseIdContainer from "../../../routes/my-courses/courseId/course-id-container";
import { handleGet } from "../../../core/api-calls/Axios";
import EmailVerifyWrapper from "@/components/wrappers/email-verify-wrapper";

type Props = {
  courseData: any;
};

const CourseInfo = ({ courseData }: Props) => {
  return (
    <EmailVerifyWrapper>
      <CourseIdContainer courseData={courseData} />
    </EmailVerifyWrapper>
  );
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
    revalidate: 10,
    notFound: !courseData,
  };
}
