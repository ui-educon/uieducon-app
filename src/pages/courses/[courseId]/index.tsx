import usePurchaseCourseHook from "@/routes/my-courses/course-card/use-purchase-course-hook";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const CourseInfo = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  // const { currentCourse } = LearnState();

  // const { showButtonLoader, makeCheckout } = usePurchaseCourseHook(
  //   // currentCourse?.recordId,
  //   // currentCourse?.pricingINR
  // );
  const actionClickHandler = () => {
    // makeCheckout();
    router.push(`${pathname}/learn`);
  };
  return (
    <div className="min-h-full">
      {/* <span>{currentCourse?.name}</span> */}
      <button
        // disabled={showButtonLoader}
        className="mt-3 rounded-b-[20px] text-center text-lg tracking-wider font-light py-4 border bg-[#7E3AF2] hover:bg-[#7e3af2c7] text-white w-full "
        onClick={actionClickHandler}
      >
        Start course
      </button>
    </div>
  );
};

export default CourseInfo;
