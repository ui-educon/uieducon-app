import React from "react";
import { HashLoader } from "react-spinners";

type Props = {};

const FullScreenLoader = (props: Props) => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="space-y-1">
        <HashLoader color="#7e3af2" />
        <p className="text-lg font-semibold text-[#7e3af2]">Loading...</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
