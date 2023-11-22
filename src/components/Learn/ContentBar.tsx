import React, { useEffect, useState } from "react";
import chevRight from "@/Images/svgs/chevRight.svg";
import Image from "next/image";
import { learnState } from "@/context/LearnContextProvider";

type Props = {
  contentData: Array<ResourceType>;
};

const ContentBar = ({ contentData }: Props) => {
  // const [displayBar, setDisplayBar] = useState<Boolean>(false);
  const { displayBar, setDisplayBar, setCurrentContent } = learnState();
  const [screenWidth, setScreenWidth] = useState<number>(280);

  useEffect(() => {
    setScreenWidth(screen?.width);
  }, []);

  return (
    <section
      className={`w-full md:w-1/4 relative ${displayBar ? "h-full" : ""}`}
    >
      <div
        className={`flex items-center mb-[30px] ${
          displayBar ? "justify-between" : ""
        }`}
      >
        {displayBar ? <span className="text-lg">Lesson Navigation</span> : null}
        {screenWidth < 768 ? (
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
        ) : null}
      </div>

      <div
        className={`flex flex-col w-full h-[calc(100vh-64px-16px-28px-30px-32px)] z-10 bg-white transition-all duration-1000 transform-gpu overflow-scroll absolute md:static  ${
          displayBar ? "translate-x-0" : "translate-x-[calc(-100%-32px)]"
        }`}
      >
        {contentData?.map((content: ResourceType, idx: number) => {
          return (
            <div
              className="text-lg p-2 w-11/12 cursor-pointer hover:bg-[#7e3af23a]"
              key={idx}
              onClick={() => setCurrentContent(content)}
            >
              {idx + 1}.&nbsp;&nbsp;{content.title}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContentBar;
