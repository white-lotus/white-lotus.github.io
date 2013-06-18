function slideSwitch() {
    var $active = $('#slideshow img.active');

    if ( $active.length == 0 ) $active = $('#slideshow img:first-child');

    var $next =  $active.next().length ? $active.next() : $('#slideshow img:first-child');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1500, function() {
            $active.removeClass('active last-active');
        });
}

jQuery("document").ready(function() {
    setInterval( "slideSwitch()", 5000 );
});