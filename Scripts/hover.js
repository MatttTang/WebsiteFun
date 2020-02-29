$(document).ready(function () {
    $(".linkage").mouseenter(function () { 
        $(this).animate({
            fontSize: '450%'
        }, 'fast');
    });

    $(".linkage").mouseleave(function () { 
        $(this).animate({
            fontSize: '300%'
        }, 'fast');
    });
});
