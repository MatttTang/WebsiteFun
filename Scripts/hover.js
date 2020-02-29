$(document).ready(function () {
    $(".linkage").mouseenter(function () { 
        $(this).stop();
        $(this).animate({
            fontSize: '450%'
        }, 100);
    });

    $(".linkage").mouseleave(function () { 
        $(this).stop();
        $(this).animate({
            fontSize: '300%'
        }, 100);
    });
});
