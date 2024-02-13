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

/*Greeting*/

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

const d = new Date();
let h = addZero(d.getHours());

let greet = "Hewo"

if (h < 4)	{
  greet = "hope yuo r having a great evening"
}else if (h < 12)	{
  greet = "good morning 4 u";
} else if (h < 18)	{
  greet = "hope ur having a great afternoon";
} else if (h < 22)	{
  greet = "good eebening, visitor"
} else if (h < 23)	{
  greet = "good evening four yuo" 
} else {
  greet = "happy midnight";
}

document.getElementById("hello").innerHTML = greet

/*Check For Previously Selected  Theme*/

var theme = document.getElementsByTagName('link')[0];

var prevtheme = localStorage.getItem('theme') || '';

if (typeof prevtheme === 'undefined') {
  localStorage.setItem('theme','main');
}else {
  savetheme()
}

function savetheme(){

  if (prevtheme == 'main') {

    theme.setAttribute('href', 'themes/main.css');
    document.getElementById("theme-button").innerHTML = "Midnight";

  }else if (prevtheme == 'midnight') {

    theme.setAttribute('href', 'themes/midnight.css');
    document.getElementById("theme-button").innerHTML = "Neo";

  }else if (prevtheme == 'neo') {
  
    theme.setAttribute('href', 'themes/neo.css');
    document.getElementById("theme-button").innerHTML = "Heaven";
  
  }else if (prevtheme == 'heaven') {
  
    theme.setAttribute('href', 'themes/heaven.css');
    document.getElementById("theme-button").innerHTML = "Cancer";
  
  }else if (prevtheme == 'cancer') {
  
    theme.setAttribute('href', 'themes/cancer.css');
    document.getElementById("theme-button").innerHTML = "Wild";
  
  }else if (prevtheme == 'wild') {
  
    theme.setAttribute('href', 'themes/wild.css');
    document.getElementById("theme-button").innerHTML = "Main";
  
  }else {
  
    theme.setAttribute('href', 'themes/main.css')
    document.getElementById("theme-button").innerHTML = "Midnight";
  
  }
}

/*Theme Switcher*/

function toggleTheme() { 
 
  if (theme.getAttribute('href') == 'themes/main.css') { 

    theme.setAttribute('href', 'themes/midnight.css'); 
    document.getElementById("theme-button").innerHTML = "Neo";
    localStorage.setItem('theme','midnight')

  }else if (theme.getAttribute('href') == 'themes/midnight.css'){

    theme.setAttribute('href', 'themes/neo.css');
    document.getElementById("theme-button").innerHTML = "Heaven";
    localStorage.setItem('theme','neo')

  }else if (theme.getAttribute('href') == 'themes/neo.css'){

    theme.setAttribute('href', 'themes/heaven.css');
    document.getElementById("theme-button").innerHTML = "Cancer";
    localStorage.setItem('theme','heaven')

  }else if (theme.getAttribute('href') == 'themes/heaven.css'){

    theme.setAttribute('href', 'themes/cancer.css');
    document.getElementById("theme-button").innerHTML = "Wild";
    localStorage.setItem('theme','cancer')

  }
  else if (theme.getAttribute('href') == 'themes/cancer.css'){

    theme.setAttribute('href', 'themes/wild.css');
    document.getElementById("theme-button").innerHTML = "Main";
    localStorage.setItem('theme','wild')

  }else { 
    theme.setAttribute('href', 'themes/main.css'); 
    document.getElementById("theme-button").innerHTML = "Midnight";
    localStorage.setItem('theme','main')
  } 
} 

/*Copy Button*/

async function cpMe() {
  try {
    await navigator.clipboard.writeText('<img width="88px" src=https://midnightmaniac.neocities.org/img/buttons/midnightmaniac.png alt="midnight maniac">');
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

/*Check If Mobile*/

var warned = localStorage.getItem('alerted') || '';
if (warned != 'yes') {
 uaAlert();
 localStorage.setItem('alerted','yes');
}

function uaAlert(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    window.alert("WARNING! this website looks cursed on mobile, proceed at your own risk, you'll be warned only once.");
    console.log("Phone User")
  }else{
    console.log("Desktop User")
  }
}

/*Get SOTW Details From File */

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById('sotw-details').innerHTML = xhr.responseText;
    }
}
xhr.open('GET', 'test.txt');
xhr.send();
