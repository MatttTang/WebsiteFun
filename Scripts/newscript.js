$(document).ready(function () {
    $("button").click(function (e) { 
        e.preventDefault();
        var myMusic = document.getElementById("music");
        if (myMusic.paused === false){
            myMusic.pause();
        }
        else{
            myMusic.play();
        }
    });
});