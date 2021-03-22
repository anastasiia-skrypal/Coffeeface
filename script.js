$(document).ready(function(){
  $(".clients .owl-carousel").owlCarousel({
  	items: 5,
    responsive:{
      0:{
          items:2.5,
          nav:true
      },
      785:{
          items:5,
          nav:true
      },
    },
  });

  $(".blog .owl-carousel").owlCarousel({
  	items: 3,
    responsive:{
      0:{
          items:1.2,
          nav:true
      },
      785:{
          items:3,
          nav:true
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