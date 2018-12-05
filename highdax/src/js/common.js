$(document).ready(function(){
  /* Home slider */

  $(".home-slider").not('.slick-initialized').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    initialSlide: 3,
    // autoplay: true,
    // autoplaySpeed: 6000,
  });

  /* Portfolio slider */

  $(".portfolio-slider").not('.slick-initialized').slick({
    infinite: false,
    slidesToShow: 2,
    dots: true,
    arrows: true,
    initialSlide: 3,
    prevArrow: '<div class="portfolio-slider-arrow portfolio-slider-arrow_left"><i class="portfolio-arrow left"></i></div>',
    nextArrow: '<div class="portfolio-slider-arrow portfolio-slider-arrow_right"><i class="portfolio-arrow right"></i></div>',
    responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
  ]
    // autoplay: true,
    // autoplaySpeed: 6000,
  });



  /* Menu */

  var menuBtn = $('.menu-btn'),
      headerMenu = $('.header-menu'),
      menuLink = $('.header-menu__link');

  menuBtn.click(function() {
    menuBtn.toggleClass('active');
    headerMenu.toggleClass('active');
  });

  menuLink.click(function(e) {
    menuBtn.toggleClass('active');
    headerMenu.toggleClass('active');

    // Scrolling
    var linkhref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkhref).offset().top
    }, 1000);

    e.preventDefault();
  });

});