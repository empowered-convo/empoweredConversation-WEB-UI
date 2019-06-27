/*

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
*/

// function disappear_bubble(){
    
// }
const bub = document.querySelector('.bubble');

$(document).ready(function() {

    //ScrollReveal().

    ScrollReveal().reveal('.msg', {
        delay: 500,
        duration: 800,
        reset: true,
    });

    //$('.bubble').css('display', 'none');
    // $('.bubble').delay(650).queue(function (next) {
    //     $(this).css('display', 'none');
    //     next();
    // })

    ScrollReveal().reveal('.bubble', function (next) {
        $(this).css('display', 'none');
        next();
    });

    ScrollReveal().reveal('.msg-1', {
        delay: 600,
        duration: 900,
        reset: true,
    });

    ScrollReveal().reveal('.msg-2', {
        delay: 800,
        duration: 1000,
        reset: true,
    });

    ScrollReveal().reveal('.msg-3', {
        delay: 1000,
        duration: 1300,
        reset: true,
    });

    ScrollReveal().reveal('.msg-4', {
        delay: 1000,
        duration: 1500,
        reset: true,
    });
});

//ScrollReveal().destory()
//console.log(ScrollReveal);

