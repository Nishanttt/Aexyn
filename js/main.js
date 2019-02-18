/* ================================================


================================================ */

(function($) {
    'use strict';

    // 1.SCROLLSPY
    $('body').scrollspy({ target: '#navigation' });


    // 2.AUTO HIDING NAVBAR
    // $(".navbar-fixed-top").autoHidingNavbar({
    //     // animationDuration: 50,
    // });




    // 3.SMOOTH SCROLLING
    $(function() {
        $(".navbar-nav a, .scroll-next a, .footer-nav a, .banner-content a, .comments-quantity a").bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1250, 'easeInOutExpo');
            
            event.preventDefault();
        });
    });


    // 4.BACK TO TOP
    $('body').append('<a id="back-to-top" class="back-to-top-btn" href="#"><i class="icofont icofont-thin-up"></i></a>');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1250, 'easeInOutExpo');
        });
    };


    // 5.MAGNIFIC POPUP LIGHTBOX IMAGE GALLERY
    $('.preview-icon').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });


    // 6.HOME 2 HERO CAROUSEL
    $('.hero-slider-area').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });


    // 7.TESTIMONIAL CAROUSEL
    $('.testimonial-carousel').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });


    // 8.FEATURED CLIENTS CAROUSEL
    $('.featured-clients-list').slick({
        dots: false,
        speed: 600,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });


    // 9.ABOUT PAGE CAROUSEL
    $('.about-photos').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });


    // 10.SERVICE PAGE CAROUSEL
    $('.service-photos').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });


    // 11.PORTFOLIO DETAILS PAGE CAROUSEL
    $('.portfolio-details-photos').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });


    // 12.WOW JS
    new WOW().init();

})(jQuery);


// 13.PORTFOLIO SECTION MASONARY
(function($) {
    'use strict';

    // Portfolio activation
    $('#portfolio-section').imagesLoaded(function() {
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
        });

        // Portfolio filtering activation
        $('.portfolio-filter li a').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // Filter menu active class addition  
        $('.portfolio-filter li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // LOAD MORE BUTTON FOR PORTFOLIO
        $('.load-more-btn').on('click', function(event) {
            $('.portfolio-item').removeClass('hidden');
            var $grid = $('.portfolio-grid').isotope();
            $(this).hide();
            $('#portfolio-section .load-more').append('<a class="btn btn-sm" href="javascript:void(0)">No More Items</a>')
            event.preventDefault();
        });
    });

})(jQuery);


// 14.BLOG SECTION MASONARY
(function($) {
    'use strict';

    $('#blog-page').imagesLoaded(function() {
        var $grid = $('.blog-masonary').isotope({
            itemSelector: '.blog-post-item',
            percentPosition: true,
        });
    });

})(jQuery);


// 15.NAVIGATION HIDE ON SCROLL ON MOBILE SCREEN
(function($) {
    'use strict';

    $(window).on('scroll', function() {
        $('.navbar-collapse').collapse('hide')
    });

})(jQuery);


// 16.COUNTER UP
(function($) {
    'use strict';

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

})(jQuery);


// 17.JQUERY SITE PRELOADED ANIMATION
$(window).on('load', function() {
    $('body').imagesLoaded(function() {
        $('.preloader-wave-effect').fadeOut();
        $('.preloader-text').fadeOut();
        $('#preloader-wrapper').delay(200).fadeOut('slow');
    });
});


// 18.YOUTUBE VIDEO BACKGROUND
$('#video-background').YTPlayer({
    fitToBackground: false,
    videoId: 'jKCyFB5LmPo',
    pauseOnScroll: false,
    playerVars: {
        modestbranding: 0,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        wmode: 'transparent',
        branding: 0,
        rel: 0,
        autohide: 0,
        origin: window.location.origin
    }
});
