import React, { useState } from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import VerifiedIcon from "@mui/icons-material/Verified";
import Button from "../../../../components/common/button";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useAppSelector } from "@/core/redux/hooks";
import { useRouter } from "next/router";
import PurchaseButton from "./purchase-button";
import Link from "next/link";
import AlreadyPurchasedTag from "./already-purchased-tag";

type Props = {
  courseData: any;
};

const PricingCard = ({ courseData }: Props) => {
  const { currentUser, userLoading } = useAppSelector(
    (state) => state.authState
  );

  const packages = useAppSelector((state) => state.packagesState);
  const [isExpanded, setIsExpanded] = useState(false);

  const purchasedCourseData = packages.find(
    (packageData: any) => packageData.courseId === courseData.recordId
  );

  const router = useRouter();

  const loginButtonClickHandler = () => {
    sessionStorage.setItem("loginFrom", router.asPath);
    router.push("/login");
  };

  return (
    <div className="md:p-7 p-3 md:space-y-6 space-y-3 border rounded-lg md:w-[320px] md:min-w-[320px] h-fit md:sticky md:top-2 fixed bottom-0 w-full left-0 bg-white">
      {purchasedCourseData && (
        <AlreadyPurchasedTag purchaseInfo={purchasedCourseData} />
      )}
      <div className="flex justify-between items-center w-full">
        <p className="text-[40px] font-bold">
          ₹{courseData.pricingINR.toLocaleString()}
        </p>
        <ExpandCircleDownIcon
          onClick={() => setIsExpanded(!isExpanded)}
          className={`text-gray-600 duration-300 md:hidden ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        className={`md:space-y-5 space-y-2 ${
          isExpanded ? "" : "md:block hidden"
        }`}
      >
        <p className="text-[#505668]">This course includes:</p>
        {courseData.sequence && (
          <div className="flex gap-3">
            <PlayCircleFilledWhiteIcon className="w-5 h-5 text-[#7E3AF2]" />
            <p>{courseData.sequence.length} Videos</p>
          </div>
        )}

        <div className="flex gap-3">
          <VerifiedIcon className="w-5 h-5 text-[#7E3AF2]" />
          <p className="max-w-[180px]">Certificate after course completion</p>
        </div>
      </div>

      {currentUser ? (
        purchasedCourseData ? (
          <Link
            className="flex justify-center w-full p-3 bg-[#7E3AF2] rounded-md text-white"
            href={`/courses/${courseData.recordId}/learn`}
          >
            Start Learning
          </Link>
        ) : (
          <PurchaseButton
            coursePrice={courseData.pricingINR}
            courseRecordId={courseData.recordId}
          />
        )
      ) : (
        <Button
          onClick={loginButtonClickHandler}
          loading={userLoading}
          className="w-full p-3 bg-[#7E3AF2] rounded-md text-white"
        >
          Login to get this course
        </Button>
      )}
    </div>
  );
};

export default PricingCard;
