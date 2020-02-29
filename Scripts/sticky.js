// Get when the user scrolls
window.onscroll = function() {Sticker()};

// Get the navbar
var navbar = document.getElementById("nav-bar");

// Get offset position
var sticky = navbar.offsetTop;

// Add the class to the nav bar when scroll hits a certain point, Remove it when you leave
function Sticker(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}
