import { LearnState } from "@/context/LearnContextProvider";
import { handleGet } from "@/core/api-calls/Axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

type Props = {
  onEndedHandler: () => void;
  thumbnail?: string;
};

const VideoPlayer = ({ onEndedHandler, thumbnail }: Props) => {
  const { currentContent } = LearnState();
  const [playState, setPlayState] = useState<string | undefined>("loading");

  const fetchPlayableLink = async () => {
    try {
      setPlayState("loading");
      setPlayState(currentContent?.videoURL);
      return;
      // console.log(currentContent?.videoURL);

      // const response = await handleGet("/course/get-video-data", {
      //   link: currentContent?.videoURL,
      // });
      // setPlayState(response.data.link);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlayableLink();
  }, [currentContent]);

  return (
    <div className="w-full h-fit lg:w-[95%] lg:h-[95%] border border-solid border-[#e1e1e1] bg-[#212121]">
      <ReactPlayer
        url={
          playState == "loading"
            ? "https://europe1.discourse-cdn.com/figma/original/3X/6/1/6173a1aae8372541cfe858bbadccf198e2935f89.gif"
            : playState
        }
        controlsList="nodownload"
        pip={false}
        playing={true}
        controls={true}
        light={thumbnail}
        width={"100%"}
        height={"100%"}
        onEnded={onEndedHandler}
      />
      {/* <video
        src="https://player.vimeo.com/progressive_redirect/playback/784691834/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1672456103&signature=c5b7a5b359f482e145a0fb160c4716bf3f1752d2ed4d85786aa0288874b35020"
        className="w-full h-full"
        controlsList="nodownload"
        controls={true}
      >
        <source type="video/mp4" />
      </video> */}
    </div>
  );
};

export default VideoPlayer;
