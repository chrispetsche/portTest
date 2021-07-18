$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/bar script
    $('.menu-btn').click(function(){
        $('#side-profile').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing-1", {
        strings: ["Artist", "Designer", "Developer"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Gaming", "Architecture", "Sustainability", "Technology"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                Items: 1,
                nav: false
            },
            600:{
                Items: 2,
                nav: false
            },
            1000:{
                Items: 3,
                nav: false
            }
        }
    });
});