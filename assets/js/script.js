// When the user scrolls down 30px from the top of the document, add background to navbar
$(window).scroll(function () {
    var scroll = $(window).scrollTop();    
    if (scroll >= 0.1 * $(window).height()) {
        $('.navbar').addClass('bg-light');
    } else {
        $('.navbar').removeClass('bg-light');
    }
});

// A Function to add a coloured background to the navbar when the navbar collapses and the burger icon is pressed
window.onload = function () {
    $(".navbar-toggler").click(function () {
        $(".navbar").toggleClass("bg-light-extra");
    });
};