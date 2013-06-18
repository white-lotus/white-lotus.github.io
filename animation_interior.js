jQuery("document").ready(function() {
    $('.c1').hover(function(){
        $('img.living').toggle();
    }),
    $('.c2').hover(function(){
        $('img.bedroom').toggle();
    });
    $('.c3').hover(function(){
        $('img.restaurant').toggle();
    });
});