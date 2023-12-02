import React from "react";
import usePurchaseCourseHook from "../../course-card/use-purchase-course-hook";
import Button from "@/components/common/button";

type Props = {
  courseRecordId: string;
  coursePrice: number;
};

const PurchaseButton = ({ coursePrice, courseRecordId }: Props) => {
  const { makeCheckout, showButtonLoader } = usePurchaseCourseHook(
    courseRecordId,
    coursePrice
  );

  return (
    <Button
      onClick={makeCheckout}
      loading={showButtonLoader}
      className="w-full p-3 bg-[#7E3AF2] rounded-md text-white"
    >
      Get Course
    </Button>
  );
};

export default PurchaseButton;
