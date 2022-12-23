let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
index = 1;
//console.log("keshav", masterPlay);
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  { songName: "song1", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg" },
  { songName: "song2", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
  { songName: "song3", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg" },
  { songName: "song4", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg" },
  { songName: "song5", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg" },
  { songName: "song6", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg" },
  { songName: "song7", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg" },
  { songName: "song8", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg" },
  { songName: "song9", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg" },
  {
    songName: "song10",
    filePath: "./songs/10.mp3",
    coverPath: "./covers/10.jpg",
  },
];
songitems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
//let audioElement = new Audio("./songs/1.mp3");
//audioElement.play();
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `./songs/${index}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-pay-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);
forwardPlay = document.getElementById("forwardPlay");
backwardPlay = document.getElementById("backwardPlay");
forwardPlay.addEventListener("click", () => {
  if (index >= 10) {
    index = 0;
  } else index++;

  audioElement.src = `./songs/${index}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-pay-circle");
  masterPlay.classList.add("fa-pause-circle");
});
backwardPlay.addEventListener("click", () => {
  if (index <= 1) {
    index = 10;
  } else index--;

  audioElement.src = `./songs/${index}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-pay-circle");
  masterPlay.classList.add("fa-pause-circle");
});
