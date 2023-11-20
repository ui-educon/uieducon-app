import React, { useState } from "react";
import chevRight from "@/Images/svgs/chevRight.svg";
import Image from "next/image";
import { learnState } from "@/context/LearnContextProvider";

type Props = {
  contentData: Array<ResourceType>;
};

const ContentBar = ({ contentData }: Props) => {
  // const [displayBar, setDisplayBar] = useState<Boolean>(false);
  const { displayBar, setDisplayBar } = learnState();

  return (
    <section
      className={`w-full md:w-1/4 relative ${displayBar ? "h-full" : ""}`}
    >
      <div
        className={`flex items-center cursor-pointer mb-[30px] ${
          displayBar ? "justify-between" : ""
        }`}
      >
        {displayBar ? <span className="text-lg">Lesson Navigation</span> : null}
        <div
          className={`flex items-center cursor-pointer w-fit h-fit transform-gpu
           ${displayBar ? "flex-row-reverse" : ""}`}
          onClick={() => setDisplayBar((prev: Boolean) => !prev)}
        >
          <span className="uicolor text-sm">
            {displayBar ? "Hide" : "Show"}
          </span>
          <Image
            className={`${
              displayBar ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
            src={chevRight}
            alt=""
          />
        </div>
      </div>

      <div
        className={`flex flex-col w-full h-[calc(100%-28px-49px)] transition-all duration-1000 transform-gpu overflow-scroll absolute md:static  ${
          displayBar ? "translate-x-0" : "translate-x-[calc(-100%-16px)]"
        }`}
      >
        {contentData?.map((content: ResourceType, idx: number) => {
          return (
            <span className="text-lg mb-3.5" key={idx}>
              {idx + 1}.&nbsp;&nbsp;{content.title}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default ContentBar;
