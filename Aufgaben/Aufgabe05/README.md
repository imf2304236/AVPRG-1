# Erstellt ein Theremin (und stylt dieses): über die X-Achse kann man die Frequenz eines Oszillators steuern, über die Y-Achse die Lautsträke.

Eine Live-Demo der Aufgabe werdet ihr hier finden: https://jakobsudau.github.io/AVPRG/Aufgaben/Aufgabe5/index.html

Tipp: Nutzt eine OscillatorNode, eine GainNode, sowie .addEventListener()

Beispielcode: fragt die Mausposition ab und erstellt einen Oszillator (und GainNode)
```
document.body.addEventListener('mousemove', function(e){
    console.log(e.clientX);
    console.log(e.clientY);

    console.log(window.innerWidth);
    console.log(window.innerHeight);
});

var context = new AudioContext();
var oscillatorNode = context.createOscillator();
var gainNode = context.createGain();
    
oscillatorNode.connect(gainNode);
gainNode.connect(context.destination);

gainNode.gain.value = 0.3;
oscillatorNode.frequency.value = 880;

oscillatorNode.start(context.currentTime);
oscillatorNode.stop(context.currentTime + 1);
```