var vis = 1.0;
var adding = false;
window.requestAnimationFrame(starter);

function starter(timestamp){
    if (vis < 0){
        adding = true;
    }

    if (vis > 1.0){
        adding = false;
    }

    if (adding){
        vis += 0.05;
    }
    else{
        vis -= 0.05;
    }
    document.getElementById("changer").style.opacity = vis;
    stopId = window.requestAnimationFrame(starter);
}