const audio1 = new Audio('audio/easily.mp3');
const audio2 = new Audio('audio/honesty.mp3');
const audio3 = new Audio('audio/would-you.mp3');

let audioArr = [audio1, audio2, audio3];
let currentAudio = audioArr[0];

// when a user clicks previous button
function goPrevious() {
    let playButton = document.getElementById("play-button");
    let pauseButton = document.getElementById("pause-button");

    currentAudio.pause();

    // set current audio
    if (currentAudio === audioArr[0]) {
        currentAudio = audioArr[2];
    } else if (currentAudio === audioArr[1]) {
        currentAudio = audioArr[0];
    } else {
        currentAudio = audioArr[1];
    }

    // hide play button and show pause button
    playButton.style.display = "none";
    pauseButton.style.display = "block";

    // automatically play the song from the first
    currentAudio.load();
    currentAudio.play();

    let songNumber = document.getElementById("detergent");
    let wave1 = document.getElementById("wave1");
    let wave2 = document.getElementById("wave2");
    let wave3 = document.getElementById("wave3");

    let waveArr = [wave1, wave2, wave3];

    // change wave styles based on current song
    for (let i=0; i<audioArr.length; i++) {
        if (currentAudio === audioArr[i]) {
            songNumber.innerHTML = i+1;
            waveArr[i].style.display = "block"
        } else {
            waveArr[i].style.display = "none";
        }
    }
}

// when a user clicks play button
function play() {
    let playButton = document.getElementById("play-button");
    let pauseButton = document.getElementById("pause-button");
    let songNumber = document.getElementById("detergent"); // container for song number

    // different colors of waves
    let wave1 = document.getElementById("wave1");
    let wave2 = document.getElementById("wave2");
    let wave3 = document.getElementById("wave3");

    // saving waves as an array
    let waveArr = [wave1, wave2, wave3];

    for (let i=0; i<audioArr.length; i++) {

        // find an audio playing now
        if (currentAudio === audioArr[i]) { // if current audio is one of the aduioArr elements
            songNumber.innerHTML = i+1; // add the current song number to detergent container
            waveArr[i].style.display = "block" // show a wave based on song playing now
        } else {
            waveArr[i].style.display = "none"; // hide other waves
        }
    }

    // if current audio is paused and not ended
    if (currentAudio.paused && currentAudio.currentTime >= 0 && !currentAudio.ended) {
        currentAudio.play(); // play the song
        playButton.style.display = "none"; // hide play button
        pauseButton.style.display = "block"; // show pause button
    } else { // if not
        currentAudio.pause(); // pause the current audio
    }
}

// when a user clicks pause button
function pause() {
    let playButton = document.getElementById("play-button");
    let pauseButton = document.getElementById("pause-button");

    // if current audio is paused and not ended
    if (currentAudio.paused && currentAudio.currentTime >= 0 && !currentAudio.ended) {
        currentAudio.play(); // play the song
    } else {
        currentAudio.pause();
        playButton.style.display = "block"; // show play button
        pauseButton.style.display = "none"; // hide pause button
    }
}

// when a user clicks next button
function goNext() {
    let playButton = document.getElementById("play-button");
    let pauseButton = document.getElementById("pause-button");

    // set current audio
    currentAudio.pause();
    if (currentAudio === audioArr[0]) {
        currentAudio = audioArr[1];
    } else if (currentAudio === audioArr[1]) {
        currentAudio = audioArr[2];
    } else {
        currentAudio = audioArr[0];
    }

    // hide play button and show pause button
    playButton.style.display = "none";
    pauseButton.style.display = "block";

    // automatically play the song from the first
    currentAudio.load();
    currentAudio.play();

    let songNumber = document.getElementById("detergent");
    let wave1 = document.getElementById("wave1");
    let wave2 = document.getElementById("wave2");
    let wave3 = document.getElementById("wave3");

    let waveArr = [wave1, wave2, wave3];

    // change wave styles based on current song
    for (let i=0; i<audioArr.length; i++) {
        if (currentAudio === audioArr[i]) {
            songNumber.innerHTML = i+1;
            waveArr[i].style.display = "block"
        } else {
            waveArr[i].style.display = "none";
        }
    }
}

// when a user sets a volume
function setVolume() {
    let volumeBar = document.getElementById("volume-bar");
    currentAudio.volume = volumeBar.value / 100; // 0 <= volumeBar.value <= 100
}

