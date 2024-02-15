import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

type Props = {
  courseData: any;
  isPurchased: boolean;
};

const CourseCard = ({ courseData, isPurchased }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const courseClickHandler = (courseData: CourseType) => {
    // console.log(pathname);

    router.push(`courses/${courseData.recordId}`);
  };

  return (
    <div className="flex flex-col border justify-between w-full md:w-72 rounded-[20px] shadow-lg">
      <div className="">
        <Image
          alt="Course Image"
          src={courseData?.thumbnailUrl || ""}
          width={288}
          height={144}
          className="md:h-36 rounded-t-[20px] object-cover w-full"
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
        className="mt-3 rounded-b-[20px] text-center duration-300 text-lg tracking-wider font-light py-4 border bg-[#7E3AF2] hover:bg-[#7e3af2c7] text-white w-full "
        onClick={() => {
          if (isPurchased) {
            router.push(`courses/${courseData?.recordId}/learn`);
          } else {
            courseClickHandler(courseData);
          }
        }}
      >
        {isPurchased ? "Start Learning" : "View Course"}
      </button>
    </div>
  );
};

export default CourseCard;
