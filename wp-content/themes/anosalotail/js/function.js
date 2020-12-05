$(function() {

    // Width acquisition
    var w = $(window).width();


    /*=======================================
    Smooth scroll
    =========================================*/
    $('a[href^="#"]').click(function() {
        $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'swing');
        return false;
    });

    var gotop = $('.l-pagetop');
    gotop.hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) gotop.fadeIn();
        else gotop.fadeOut();
    });

    var separate;
    if (w > 640) { separate = 30; } else { separate = 10; }

    $(window).on('scroll', function() {
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $('.l-footer').innerHeight();
        //console.log(footHeight);
        if (scrollHeight - scrollPosition <= footHeight) gotop.css({ 'position': 'absolute', 'bottom': footHeight + separate });
        else gotop.css({ 'position': 'fixed', 'bottom': separate + 'px' });
    });





    if (w > 640) { // Processing on PC



    } else { // Processing in SP



    }


});




$(window).on('load', function() { // Process when loading is complete



    // Width acquisition
    var w = $(window).width();


    if (w > 640) { // Processing on PC



    } else { // Processing in SP



    }




});




$(window).on('load resize', function() { // Processing when loading is completed and resizing


    // Width acquisition
    var w = $(window).width();


    if (w > 640) { // Processing on PC



    } else { // Processing in SP



    }


});