counter = 0;

function forward(){
    counter = counter + 1;
    play();
}

function previous(){
    counter = counter - 1;
    play();
}

function play(){
if (counter == 0) {
    document.getElementById("song_name").innerHTML = "Playing 'UNSTOPPABLE'";
    document.getElementById("image").src = "Unstoppable.jpg";
    document.getElementById("audio").play();
    document.getElementById("audio1").pause();
    document.getElementById("audio2").pause();
}

if (counter == 1) {
    document.getElementById("song_name").innerHTML = "Playing 'BELIEVER'";
    document.getElementById("image").src = "Believer.jpg";
    document.getElementById("audio").pause();
    document.getElementById("audio1").play();
    document.getElementById("audio2").pause();
}

if (counter == 2) {
    document.getElementById("song_name").innerHTML = "Playing 'HARRY POTTER THEME'";
    document.getElementById("image").src = "harry.jpg";
    document.getElementById("audio").pause();
    document.getElementById("audio1").pause();
    document.getElementById("audio2").play();
}

}

function stop(){
    document.getElementById("audio").pause();
    document.getElementById("audio1").pause();
    document.getElementById("audio2").pause();
}