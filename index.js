// Fix: Corrected audio player ID to match the HTML
const audioPlayer = document.getElementById("audioElement");
const playPauseButton = document.getElementById("playPauseButton");
const stopButton = document.getElementById("stopButton");
const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");

// Function to toggle play/pause and shapes
function toggleAudio() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.style.display = "none"; // Hide play triangle
    stopButton.style.display = "block"; // Show stop rectangle
  } else {
    audioPlayer.pause();
    playPauseButton.style.display = "block"; // Show play triangle
    stopButton.style.display = "none"; // Hide stop rectangle
  }
}

// Automatically hide the stop rectangle when the audio ends
audioPlayer.addEventListener("ended", function () {
  playPauseButton.style.display = "block"; // Show play triangle
  stopButton.style.display = "none"; // Hide stop rectangle
});

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active"); // Toggle visibility
  // console.log("cliock");
});
