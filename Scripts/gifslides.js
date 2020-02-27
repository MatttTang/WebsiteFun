var myVar = setInterval(PlayImage, 10000);
let slides = ["giphy", "t1", "cat"];
var index = 1;
//var myVar = setInterval(Fader, 100);
var vis = 1.0;
visAdd = false;

function PlayImage(){
    document.getElementById("changer").src = `Assets/${slides[index]}.gif`;
    if (index === slides.length - 1){
        index = 0;
    }
    else{
        index++;
    }
}
// 2.5 seconds fade in
// 2.5 seconds fade out
// 5 seconds visible
function Fader(){
    if (vis < 0){
        visAdd = true;
    }
    if (vis > 1){
        visAdd = false;
    }
    if (visAdd){
        vis = vis + 0.05;
    }
    else{
        vis = vis - 0.05;
    }
    document.getElementById("changer").style.opacity = vis;
}