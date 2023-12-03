import React from "react";

type Props = {
  courseData: any;
};

const CoursePrimaryDetailsContainer = ({ courseData }: Props) => {
  return (
    <div className="mt-8 space-y-4">
      <h1 className="text-2xl md:text-[32px] text-black font-medium">{courseData.name}</h1>
      <p>{courseData.description}</p>
    </div>
  );
};

export default CoursePrimaryDetailsContainer;
