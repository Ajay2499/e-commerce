import React, { useState } from "react";
import "../CSS/VideoBuffering.css";

const VideoBuffering = () => {
  const [isBuffering, setIsBuffering] = useState(true);

  return (
    <div className="video-container">
      {isBuffering && (
        <div className="buffering-overlay">
          <div className="spinner"></div>
          <p>Buffering...</p>
        </div>
      )}
      <video
        className="video-player"
        src="https://videos.pexels.com/video-files/855828/855828-hd_1920_1080_30fps.mp4"
        controls
        autoPlay
        muted
        loop
        onPlaying={() => setIsBuffering(false)}
        onWaiting={() => setIsBuffering(true)}
      ></video>
    </div>
  );
};

export default VideoBuffering;
