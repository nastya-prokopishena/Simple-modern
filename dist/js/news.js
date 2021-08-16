$(document).ready(function(){
  $('.news__slider').slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
          {
              breakpoint: 771,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 600,
              settings: {
                  centerMode: true,
                  variableWidth: true,
                  slidesToShow: 1
              }
          }
      ]
  });


})