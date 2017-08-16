$(document).ready(function() {
    $('.slideContainer').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoWidth: true,
      responsive:{
          0:{
              items:3
          },
          600:{
              items:5
          },
          1000:{
              items:8
          },
          1500:{
              items:15
          }
      }
    });


    $( "#btonMenuResponsive" ).click(function() {
        $( ".principalNav" ).slideToggle();
    });
});