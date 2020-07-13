import "./styles.scss";
import "regenerator-runtime/runtime";

const videoPlayer = document.querySelector(".videoPlayer");
const playButton = document.querySelector(".playButton");
const volumeButton = document.querySelector(".volumeButton");
const currentTime = document.querySelector(".currentTime");
const totalTime = document.querySelector(".totalTime");

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

const formatDate = (seconds) => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};

function getCurrentTime() {
  const currentTimeString = formatDate(Math.floor(videoPlayer.currentTime));
  currentTime.innerHTML = currentTimeString;
}

async function setTotalTime() {
  const totalTimeString = formatDate(Math.floor(videoPlayer.duration));
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 1000);
}

function init() {
  playButton.addEventListener("click", handlePlayButtonClick);
  volumeButton.addEventListener("click", handleVolumnButtonClcik);
  videoPlayer.addEventListener("loadeddata", setTotalTime);
}

init();
