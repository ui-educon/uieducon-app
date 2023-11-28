import React from "react";
import Image from "next/image";
import { learnState } from "@/context/LearnContextProvider";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

type Props = {
  courseData: any;
};

const CourseCard = ({ courseData }: Props) => {
  const { setCurrentCourse } = learnState();
  const router = useRouter();
  const pathname = usePathname();

  const courseClickHandler = (courseData: CourseType) => {
    setCurrentCourse(courseData);
    router.push(`${pathname}/${courseData.recordId}`);
  };

  return (
    <div className="flex flex-col border justify-between w-72 rounded-[20px] shadow-lg mb-6">
      <div className="">
        <Image
          alt="Course Image"
          src={courseData?.thumbnailUrl || ""}
          width={288}
          height={144}
          className="h-36 border rounded-t-[20px] object-cover"
        />
        <div className="flex flex-col gap-y-2 p-4">
          <p className="text-lg tracking-wide font-semibold">
            ₹{courseData?.pricingINR}
          </p>
          <p className="text-lg tracking-wider font-light">
            {courseData?.name}
          </p>
        </div>
      </div>
      <button
        className="mt-3 rounded-b-[20px] text-center text-lg tracking-wider font-light py-4 border bg-[#7E3AF2] hover:bg-[#7e3af2c7] text-white w-full "
        onClick={() => courseClickHandler(courseData)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default CourseCard;
