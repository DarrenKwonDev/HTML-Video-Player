import "./styles.scss";
import "regenerator-runtime/runtime";

const body = document.querySelector("body");
const videoPlayer = document.querySelector(".videoPlayer");
const videoController = document.querySelector(".videoController");
const playButton = document.querySelector(".playButton");
const volumeButton = document.querySelector(".volumeButton");
const currentTime = document.querySelector(".currentTime");
const totalTime = document.querySelector(".totalTime");

const handlePlayButtonClick = () => {
  if (videoPlayer.paused) {
    console.log("start");
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

function handleEnded() {
  videoPlayer.currentTime = 0;
  videoPlayer.play();
}

function handleSpaceBarDown(e) {
  if (e.code === "Space") {
    handlePlayButtonClick();
  }
}

// 마우스가 안 움직이면 바를 숨겨라
let prevMouseXPosition;

// videoController.style.opacity = 1;
// document.body.style.cursor = "";
// let currentMouseXPosition = e.screenX;

let timer;

function handleMouseMove(e) {
  const whenMouseStop = () => {
    console.log("stop!");
  };
  clearTimeout(timer);
  timer = setTimeout(whenMouseStop, 300);
}

function init() {
  playButton.addEventListener("click", handlePlayButtonClick);
  volumeButton.addEventListener("click", handleVolumnButtonClcik);
  videoPlayer.addEventListener("ended", handleEnded);
  videoPlayer.addEventListener("loadeddata", setTotalTime);
  document.addEventListener("keydown", handleSpaceBarDown);
  document.addEventListener("mousemove", handleMouseMove);
}

init();
