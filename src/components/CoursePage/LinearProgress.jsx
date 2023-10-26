import { useState, useEffect } from "react";
const LinearProgress = ({totalVideos, watchedVideos}) => {
    const [progress, setProgress] = useState(0);

    // Calculate the progress percentage
    const progressPercentage = (watchedVideos / totalVideos) * 100;
  
    // Update the progress state
    useEffect(() => {
      setProgress(progressPercentage);
    }, [watchedVideos, totalVideos]);
  
    return (
        <div className="w-full h-2 bg-gray-200 rounded-2xl">
        <div
          className="h-full rounded-2xl transition-all duration-300 uibg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
}
export default LinearProgress;