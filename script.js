/*Custom Audio Player*/

const audio = document.getElementById("audio-music");
const playPauseButton = document.getElementById("play-pause-button");
const volumeControl = document.getElementById("volume-control");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = "Play";
    } else {
        audio.play();
        playPauseButton.textContent = "Pause";
    }
    isPlaying = !isPlaying;
});

volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);

    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
    totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;

    const progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;
});

/*Theme switcher*/

function toggleTheme() { 
 
  var theme = document.getElementsByTagName('link')[0]; 

  if (theme.getAttribute('href') == 'themes/main.css') { 

    theme.setAttribute('href', 'themes/midnight.css'); 
    document.getElementById("theme-button").innerHTML = "Neo";

  }else if (theme.getAttribute('href') == 'themes/dark.css'){

    theme.setAttribute('href', 'themes/neo.css');
    document.getElementById("theme-button").innerHTML = "Heaven";

  }else if (theme.getAttribute('href') == 'themes/neo.css'){

    theme.setAttribute('href', 'themes/heaven.css');
    document.getElementById("theme-button").innerHTML = "Cancer";

  }else if (theme.getAttribute('href') == 'themes/heaven.css'){

    theme.setAttribute('href', 'themes/cancer.css');
    document.getElementById("theme-button").innerHTML = "Wild";

  }
  else if (theme.getAttribute('href') == 'themes/cancer.css'){

    theme.setAttribute('href', 'themes/wild.css');
    document.getElementById("theme-button").innerHTML = "Main";

  }else { 
    theme.setAttribute('href', 'themes/main.css'); 
    document.getElementById("theme-button").innerHTML = "Midnight";
  } 
} 
