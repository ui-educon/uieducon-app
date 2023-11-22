import React, { useEffect, useState } from "react";
import ContentBar from "@/components/Learn/ContentBar";
import Image from "next/image";
import chevRight from "@/Images/svgs/chevRight.svg";
import dynamic from "next/dynamic";
import { learnState } from "@/context/LearnContextProvider";

type Props = {};

const DynamicVideoPlayer = dynamic(
  () => import("@/components/Learn/VideoPlayer"),
  { ssr: false }
);

const seedData: Array<ResourceType> = [
  {
    type: "video",
    title: "Get Started with AI",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    videoURL:
      "https://player.vimeo.com/progressive_redirect/playback/417775358/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1672456103&signature=c9202e85e15b5166b2ededd6d2708d8296a213b3f31fa40c6f134af373053bf2",
    id: "0",
  },
  {
    type: "video",
    title: "Example Title 1",
    desc: "Example Desc 1",
    videoURL: "https://www.example.com/video1",
    id: "1",
  },
  {
    type: "video",
    title: "Example Title 2",
    desc: "Example Desc 2",
    videoURL: "https://www.example.com/video2",
    id: "2",
  },
  {
    type: "video",
    title: "Example Title 3",
    desc: "Example Desc 3",
    videoURL: "https://www.example.com/video3",
    id: "3",
  },
  {
    type: "video",
    title: "Example Title 4",
    desc: "Example Desc 4",
    videoURL: "https://www.example.com/video4",
    id: "4",
  },
  {
    type: "video",
    title: "Example Title 5",
    desc: "Example Desc 5",
    videoURL: "https://www.example.com/video5",
    id: "5",
  },
  {
    type: "video",
    title: "Example Title 6",
    desc: "Example Desc 6",
    videoURL: "https://www.example.com/video6",
    id: "6",
  },
  {
    type: "video",
    title: "Example Title 7",
    desc: "Example Desc 7",
    videoURL: "https://www.example.com/video7",
    id: "7",
  },
  {
    type: "video",
    title: "Example Title 8",
    desc: "Example Desc 8",
    videoURL: "https://www.example.com/video8",
    id: "8",
  },
  {
    type: "video",
    title: "Example Title 9",
    desc: "Example Desc 9",
    videoURL: "https://www.example.com/video9",
    id: "9",
  },
  {
    type: "video",
    title: "Example Title 10",
    desc: "Example Desc 10",
    videoURL: "https://www.example.com/video10",
    id: "10",
  },
  {
    type: "video",
    title: "Example Title 11",
    desc: "Example Desc 11",
    videoURL: "https://www.example.com/video11",
    id: "11",
  },
  {
    type: "video",
    title: "Example Title 12",
    desc: "Example Desc 12",
    videoURL: "https://www.example.com/video12",
    id: "12",
  },
  {
    type: "video",
    title: "Example Title 13",
    desc: "Example Desc 13",
    videoURL: "https://www.example.com/video13",
    id: "13",
  },
  {
    type: "video",
    title: "Example Title 14",
    desc: "Example Desc 14",
    videoURL: "https://www.example.com/video14",
    id: "14",
  },
];

const LearnContainer = (props: Props) => {
  let courseName = "Mastering the art of public speaking";
  const { currentContent, setCurrentContent } = learnState();
  const [courseData, setCourseData] = useState<Array<ResourceType | null>>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const changeToNext = () => {
    if (currentIdx < courseData?.length) {
      setCurrentContent(courseData[currentIdx + 1]);
      setCurrentIdx((prev: number) => ++prev);
    } else setCurrentContent(null);
  };
  useEffect(() => {
    setCourseData(seedData);
    // setCurrentContent(seedData[0]);
  }, []);
  return (
    <main className="w-full h-[calc(100vh-64px-16px)] overflow-auto w-full flex flex-col px-4 pt-8 md:px-8 md:flex-row md:justify-between">
      {/* <section className="w-full h-full flex flex-col px-4 pt-8"> */}
      <ContentBar contentData={seedData} />
      {/* </section> */}
      <section className="md:w-[70%] relative h-[calc(100%-50px)] md:h-full">
        <div className="text-lg mb-5">
          Courses &gt; {courseName} &gt; {"Video 1"}
        </div>
        <div className="h-[calc(100%-90px-28px-1.25rem)] overflow-auto hiddenScrollBar">
          {currentContent ? (
            <DynamicVideoPlayer onEndedHandler={changeToNext} />
          ) : null}
          <h4 className="text-xl font-medium mt-10 mb-5">
            {currentContent?.title}
          </h4>
          <p className="text-lg font-normal mb-8 text-justify">
            {currentContent?.desc}
          </p>
        </div>

        <div className="w-full flex justify-between absolute bottom-0 border-t-2 border-solid border-[#dedede] py-4 shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
          <div className="flex items-center cursor-pointer">
            <div className="p-4 rounded-full bg-[#FBFBFF] mr-1.5">
              <Image src={chevRight} alt="" className="rotate-180 w-6 h-6" />
            </div>
            <span>previous</span>
          </div>

          <div className="flex items-center cursor-pointer">
            <span>next</span>
            <div className="p-4 rounded-full bh-[#FBFBFF] ml-1.5">
              <Image src={chevRight} alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearnContainer;
