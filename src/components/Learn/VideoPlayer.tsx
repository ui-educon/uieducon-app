import { learnState } from "@/context/LearnContextProvider";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";

type Props = {
  onEndedHandler: () => void;
};

const VideoPlayer = ({ onEndedHandler }: Props) => {
  const { currentContent, setCurrentContent } = learnState();
  useEffect(() => {
    console.log(currentContent);
  }, []);
  return (
    <div className="w-full h-fit lg:w-[95%] lg:h-[95%]">
      <ReactPlayer
        url={currentContent?.videoURL}
        playing={true}
        controls={true}
        light={
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcourse&psig=AOvVaw10CaSeEE_S_eYQISsB01sP&ust=1700060761670000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiX_P_hw4IDFQAAAAAdAAAAABAE"
        }
        width={"100%"}
        height={"100%"}
        onEnded={onEndedHandler}
      />
    </div>
  );
};

export default VideoPlayer;
