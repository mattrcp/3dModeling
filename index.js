const audioPlayer = document.getElementById("audioElement");
const playPauseButton = document.getElementById("playPauseButton");
const audioStateText = document.getElementById("audioStateText");

function toggleAudio() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.classList.add("playing");
    audioStateText.textContent = "Stop";
  } else {
    audioPlayer.pause();
    playPauseButton.classList.remove("playing");
    audioStateText.textContent = "Play";
  }
}

audioPlayer.addEventListener("ended", function () {
  playPauseButton.classList.remove("playing");
  audioStateText.textContent = "Play";
});

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active"); // Toggle visibility
  // console.log("cliock");
});
