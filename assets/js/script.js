// When the user scrolls down 30px from the top of the document, add background to navbar
$(window).scroll(function () {
    var scroll = $(window).scrollTop();    
    if (scroll >= 0.1 * $(window).height()) {
        $('.navbar').addClass('bg-light');
    } else {
        $('.navbar').removeClass('bg-light');
    }
});