import PrivateRouteWrapper from "@/components/wrappers/private-route-wrapper";
import MyCoursesContainer from "@/routes/my-courses/my-courses-container";
import React from "react";

const MyCourses = () => {
  return (
    // <PrivateRouteWrapper>
    <MyCoursesContainer />
    // </PrivateRouteWrapper>
  );
};

export default MyCourses;
