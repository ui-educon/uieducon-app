import { learnState } from "@/context/LearnContextProvider";
import { handleGet } from "@/core/api-calls/Axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

type Props = {
  onEndedHandler: () => void;
};

const VideoPlayer = ({ onEndedHandler }: Props) => {
  const { currentContent, setCurrentContent } = learnState();
  const [playState, setPlayState] = useState<string>("loading");

  const fetchPlayableLink = async () => {
    try {
      setPlayState("loading");
      const response = await handleGet("/course/get-video-data", {
        link: currentContent?.videoURL,
      });
      setPlayState(response.data.link);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPlayableLink();
  }, [currentContent]);

  return (
    <div className="w-full h-fit lg:w-[95%] lg:h-[95%]">
      <ReactPlayer
        url={
          playState == "loading"
            ? "https://europe1.discourse-cdn.com/figma/original/3X/6/1/6173a1aae8372541cfe858bbadccf198e2935f89.gif"
            : playState
        }
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
