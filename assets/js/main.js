(function($) {


    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      dots:false,
      // mouseDrag:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

 
  var $daud = $(".isotop_slider").isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: ".grid-item"
    }
  });

  // filter items on button click
  $(".filter_item").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $daud.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $(".filter_item").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function() {
      $buttonGroup.find(".active").removeClass("active");
      $(this).addClass("active");
    });
  });

  $('.logo_slider_play').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });






// $('#mobile-menu').meanmenu({
//     meanMenuContainer: ".mobile-menu",
//     meanScreenWidth: "768",
//   });

//   // data - background - img
//   $("[data-background]").each(function () {
//     $(this).css(
//       "background-image",
//       "url(" + $(this).attr("data-background") + ")"
//     );
//   });



})(jQuery);
