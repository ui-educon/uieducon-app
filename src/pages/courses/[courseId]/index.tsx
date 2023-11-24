import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const CourseInfo = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const actionClickHandler = () => [router.push(`${pathname}/learn`)];
  return (
    <div className="min-h-full">
      <button onClick={actionClickHandler}>Start course</button>
    </div>
  );
};

export default CourseInfo;
