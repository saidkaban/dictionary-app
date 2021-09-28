import React, { useEffect, useRef } from "react";

const PhoneticsBox = ({ link, text }) => {
  const audioRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", (_) => {
      const { currentTime, duration } = audioRef.current;
      const progress = currentTime / duration;
      buttonRef.current.style.width = `${progress * 100}%`;
    });
  }, []);

  const handlePlay = () => {
    buttonRef.current.style.width = `0%`;
    audioRef.current.play();
  };

  return (
    <div className="flex mb-4 items-center justify-start">
      <div style={{ display: "none" }}>
        <audio ref={audioRef} controls>
          <source src={link} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <button
        style={{
          backgroundColor: "white",
          padding: "10px 20px",
          position: "relative",
        }}
        onClick={handlePlay}
      >
        <div
          ref={buttonRef}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#f1f1f1",
            zIndex: 9,
            transition: "all 0.4s linear",
          }}
        ></div>
        <span style={{ zIndex: 10, position: "relative" }}>
          Listen Pronouncation
        </span>
      </button>
      <p className="ml-4">{text}</p>
    </div>
  );
};

export default PhoneticsBox;
