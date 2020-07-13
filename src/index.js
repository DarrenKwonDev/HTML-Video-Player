import "./styles.css";

const videoPlayer = document.querySelector(".videoPlayer");
const playButton = document.querySelector(".playButton");
const volumeButton = document.querySelector(".volumeButton");

const handlePlayButtonClick = () => {
  if (videoPlayer.paused) {
    console.log("starts");
    videoPlayer.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    console.log("stop");
    videoPlayer.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
};

const handleVolumnButtonClcik = () => {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
};

function init() {
  playButton.addEventListener("click", handlePlayButtonClick);
  volumeButton.addEventListener("click", handleVolumnButtonClcik);
}

init();
