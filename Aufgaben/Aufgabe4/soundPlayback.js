var drumpads = document.getElementsByClassName("drumpad");
var sounds = [];
var soundNodes = [];
var context = new AudioContext();

for (let i = 0; i < drumpads.length; i++) {
    getData(i);
    drumpads[i].addEventListener("mousedown", function (e) {playSound(i)});
}

function getData(i) {
    sounds[i] = new Audio("../sounds/drumsounds/sound" + (i + 1) + ".wav");
    soundNodes[i] = context.createMediaElementSource(sounds[i]);
    soundNodes[i].connect(context.destination);
}

function playSound(i) {
    sounds[i].play();
}



