/*
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //console.log(window_bottom_position);
    //console.log($animation_elements);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        console.log('works?');

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
*/



$(document).ready(function() {

    console.log('he')
    ScrollReveal().reveal('.msg', {
        delay: 500,
        duration: 1500,
        reset: true,
    });
});

//ScrollReveal().destory()





console.log(ScrollReveal);
