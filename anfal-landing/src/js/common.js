$(document).ready(function(){

  /* Slider */

  $(".slider").slick({
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        initialSlide: 2,
      }
    },
  ]
  });

  new WOW(
    {
      mobile:false,
    }
  ).init();

  /* popup */

  $("#video-button").on("click", function() {
    $(".overlay").show();
    $("#video-popup").show();
  });

// Закрыть Popup

  $(".popup__close").on("click", function() {
    $(".overlay, #video-popup").hide();
  });

});


