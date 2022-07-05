import { useRef, useState } from "react";
import IconButton from "./components/IconButton";
import "./index.scss";
function App() {
  const classPrefix = "sobey";
  const ref = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState<boolean>(false);
  const [fullScree, setFullScree] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);
  const onClickPause = () => {
    setPlay(false);
    ref.current?.pause();
  };

  const onClickPlay = () => {
    setPlay(true);
    ref.current?.play();
  };

  const onClickFullScreen = () => {
    ref.current?.requestFullscreen();
  };
  const onClickMuted = () => {
    setMuted(false);
    if (ref.current) {
      ref.current.muted = false;
    }
  };

  const onClickVolume = () => {
    setMuted(true);
    if (ref.current) {
      ref.current.muted = true;
    }
  };

  const onClickOffFullScreen = () => {};
  return (
    <div className={`${classPrefix}-video-player`}>
      <div className={`${classPrefix}-video-player-source`}>
        <video
          ref={ref}
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
        />
      </div>
      <div className={`${classPrefix}-video-player-progress`}></div>
      <div className={`${classPrefix}-video-player-controls`}>
        <div className={`${classPrefix}-video-player-controls-left`}>
          <IconButton onClick={onClickPlay} icon={"i-mdi-step-backward"} />

          {play ? (
            <IconButton onClick={onClickPause} icon={"i-mdi-pause"} />
          ) : (
            <IconButton onClick={onClickPlay} icon={"i-mdi-play"} />
          )}
          <IconButton icon={"i-mdi-step-forward"} />
        </div>
        <div className={`${classPrefix}-video-player-controls-right`}>
          <div className={`${classPrefix}-video-player-controls-volume`}>
            <div className={"volume-bar"}>
              <div className="volume-bar-fill"></div>
            </div>
            {muted ? (
              <IconButton
                onClick={onClickMuted}
                icon={"i-carbon-volume-mute-filled"}
              />
            ) : (
              <IconButton
                onClick={onClickVolume}
                icon={"i-carbon-volume-up-filled"}
              />
            )}
          </div>
          {fullScree ? (
            <IconButton
              onClick={onClickOffFullScreen}
              icon={"i-icon-park-outline-off-screen-one"}
            />
          ) : (
            <IconButton
              onClick={onClickFullScreen}
              icon={"i-icon-park-outline-off-screen-one"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
