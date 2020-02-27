var myMusic = document.getElementById("music");
var musicPlaying = false;
myMusic.loop = true;
function togglePlay(){
    if (musicPlaying){
        myMusic.play();
    }
    else{
        myMusic.pause();
    }
    musicPlaying = !musicPlaying;
}