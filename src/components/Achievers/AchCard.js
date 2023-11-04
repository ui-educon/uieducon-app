import React from "react";
import Image from "next/image";

const AchCard = ({ achdata }) => {
  return (
    <>
      <div className="shadow-lg p-5 w-96 my-10">
        <p>{achdata.desc}</p>
        <div className="flex mt-10">
          <Image src={achdata.img} className="rounded-full w-10 mr-5" alt="" />
          <div>
            <p className="text-base">{achdata.name}</p>
            <p className="text-sm">{achdata.role}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchCard;
