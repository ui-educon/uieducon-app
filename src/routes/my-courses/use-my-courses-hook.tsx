import { handleGet } from "@/core/api-calls/Axios";
import { useAppSelector } from "@/core/redux/hooks";
import { useEffect, useState } from "react";

type Props = {};

const useMyCoursesHook = (allCoursesList: any) => {
  const allPurchasedCoursesList: any[] = [];

  const { currentUser, userLoading } = useAppSelector((state) => state.authState);
  const myPackagesPurchasedRes = useAppSelector((state) => state.packagesState);

  allCoursesList.forEach((course: any) => {
    const purchasedPackage = myPackagesPurchasedRes.some(
      (purchased: any) => purchased.courseId === course.recordId
    );

    if (purchasedPackage) allPurchasedCoursesList.push(course);
  });

  // const fetchAllCourses = async () => {
  //   // const allCourses = allCoursesRes?.data.map();
  // };

  return { currentUser,userLoading, allPurchasedCoursesList };
};

export default useMyCoursesHook;
