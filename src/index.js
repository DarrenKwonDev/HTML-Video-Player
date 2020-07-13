import "./styles.css";

const videoPlayer = document.querySelector(".videoPlayer");
const playButton = document.querySelector(".playButton");

console.log(videoPlayer);

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

function init() {
  playButton.addEventListener("click", handlePlayButtonClick);
}

init();
