$(document).ready(function(){
  $(".clients .owl-carousel").owlCarousel({
  	items: 5,
    loop: true,
    responsive:{
      0:{
          items:2.5,
          nav:false
      },
      785:{
          items:5,
          nav:false
      },
    },
  });

  $(".blog .owl-carousel").owlCarousel({
  	items: 3,
    loop: true,
    responsive:{
      0:{
          items:1.2,
          nav:false
      },
      785:{
          items:3,
          nav:false
      },
    },
  });

  $(".instagram .owl-carousel").owlCarousel({
  	items: 6,
  	loop: true,
  	nav: true,
  	rtl: true,

    responsive:{
      0:{
          items:3,
          nav:false,
      },
      785:{
          items:6,
          nav:true,
      },
    },
  });

  $(".testimonials .owl-carousel").owlCarousel({
  	items: 1.7,
  	center: true,
  	rtl: true,
  	loop: true,
  	nav: true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      785:{
          items:1.7,
          nav:true
      },
    },
  });
});