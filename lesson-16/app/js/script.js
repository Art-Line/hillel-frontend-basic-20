$('.js-about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    // arrows: false
    prevArrow: '<button type="button" class="about-slider__arrow about-slider__arrow_prev"></button>',
    nextArrow: '<button type="button" class="about-slider__arrow about-slider__arrow_next"></button>',
    dots: true,
    dotsClass: 'about-slider__dots',
    // infinite: false
    // draggable: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});