/*-----------------------
    Custom scripts
-------------------------*/
$(document).ready(function () {

    //custom navbar toggle
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('active');
    });

    //tabs title
    $('.featured-business-tab .nav-link').click(function () {
        var get_title = ($(this).text());
        $('.featured-business-heading h3').text(get_title);
    });

     //Custom select
     $('.selectpicker').selectpicker();

    //owl carousel
    $('.featured-carousel').owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        stagePadding: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            500: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });


    $('.home-gallery-carousel').owlCarousel({
        items: 5,
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3,
                nav: false
            },
            500: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });


    $('.list-area-carousel').owlCarousel({
        items: 4,
        loop: false,
        margin: 15,
        responsiveClass: true,
        nav: true,
        navText: ["<", ">"],
        rewindNav: true,
        dots: false,
        animateOut: 'fadeOut',
        autoplay: false,
        smartSpeed: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            440: {
                items: 2,
                loop: true
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $('.business-details-carousel').owlCarousel({
        items: 1,
        loop: true,
        responsiveClass: true,
        nav: true,
        navText: ["<", ">"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        thumbs: true,
        thumbsPrerendered: true,
    });

    //lightbox
    $('.gallery-lightbox').simpleLightbox();

    //slick nav
    $('.case-study-slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        focusOnSelect: true,
        autoplaySpeed: 4000,
        asNavFor: '.case-study-slider-control'
    });
    $('.case-study-slider-control').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.case-study-slider',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false
                }
            },
        ]
    });

    //price range
    $("#range-1").ionRangeSlider({
        type: "double",
        min: 0,
        max: 300,
        from: 40,
        to: 250,
        step: 10,
        prefix: "£",
        postfix: "k",
        prettify_enabled: true,
    });

    var availableTags = [
        "Retail",
        "Cafes",
        "Services",
        "Restaurants",
        "Commercial Property",
        "Other Categories"
    ];

    //Homepage search
    $("#industry").autocomplete({
        source: availableTags,
        minLength: 0
    }).focus(function () {
        if (this.value == "") {
            $(this).autocomplete("search");
        }
    });

});