$(document).ready(function () {

    // Shrink navbar if page loads and not at top of screen
    $("nav").toggleClass("shrink", $(window).scrollTop() > 1);

    let windowHeight = $(window).height();
    let windowWidth = $(window).width();

    // fade out splash text as scroll down
    function textScroll() {
        if (windowHeight < 500) {
            $("#splashText").css({ 'top': '20vh', 'opacity': '1' });
        } else if (windowWidth < 425) {
            $("#splashText").css({ 'top': '15vh', 'opacity': '1' });
        } else {
            if ($(window).scrollTop() > windowHeight / 2.4) {
                $("#linkFade").fadeIn(700);
                $("#splashText").css({ 'top': '15vh', 'opacity': '0' });
            } else if ($(window).scrollTop() > windowHeight / 3.75) {
                $("#linkFade").fadeIn(700);
                $("#splashText").css({ 'top': '15vh', 'opacity': '0.5' });
            } else if ($(window).scrollTop() > windowHeight / 10) {
                $("#linkFade").fadeOut(700);
                $("#splashText").css({ 'top': '25vh', 'opacity': '1' });
            } else {
                $("#splashText").css({ 'top': '35vh', 'opacity': '1' });
            };
        };
    };

    textScroll();

    $(window).on("scroll", function () {
        $("nav").toggleClass("shrink", $(this).scrollTop() > $(window).height() / 3.75);
        textScroll();
    });

    // Smooth scroll to internal href
    const root = $('html, body');
    $('a[href^="#"]').click(function () {
        const href = $.attr(this, 'href');
        const hrefFromTop = $(href).offset().top;
        const navHeight = 40
        root.animate({
            scrollTop: (hrefFromTop - navHeight)
        }, 700);
        return false;
    });
});