import { handleGet } from "@/core/api-calls/Axios";
import { useAppSelector } from "@/core/redux/hooks";
import { useEffect, useState } from "react";

type Props = {};

const useMyCoursesHook = () => {
  const [allCoursesList, setAllCoursesList] = useState<any[]>([]);
  const { currentUser, userLoading } = useAppSelector((state) => state.authState);
  const myPackagesPurchasedRes = useAppSelector((state) => state.packagesState);

  const [loading, setLoading] = useState(true);

  const fetchAllCourses = async () => {
    const allCoursesRes = await handleGet("/course/get-all-courses");
    const allCourses = allCoursesRes?.data.map((course: any) => {
      // Check if the course is purchased
      const purchasedPackage = myPackagesPurchasedRes.some((purchased: any) => purchased.courseId === course.recordId);
      if (purchasedPackage) {
        return { ...course, isPurchased: true }
      } else {
        return { ...course, isPurchased: false }
      }
    })
    setAllCoursesList(allCourses);
    setLoading(false);
  };

  useEffect(() => {
    if (!userLoading) {
      fetchAllCourses();
    }
  }, [userLoading]);

  return { loading, allCoursesList, currentUser };
};

export default useMyCoursesHook;
