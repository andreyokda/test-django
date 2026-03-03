$(document).ready(function () {
  var slidesData = $("#slider-data").data("slides");

  var fancyboxSlides = [];
  $(".slider-for img").each(function () {
    fancyboxSlides.push({
      src: $(this).attr("src"),
      caption: $(this).attr("alt"),
    });
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: true,
    centerMode: false,
    focusOnSelect: true,
    prevArrow:
      '<button type="button" class="slick-prev custom-prev"><img src="/static/slider/images/move-left.svg" alt="Prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next custom-next"><img src="/static/slider/images/move-right.svg" alt="Next"></button>',
      responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false 
      }
    }
  ]
  });

  $(".slider-for").on("click", "img", function (e) {
    e.preventDefault();

    var currentIndex = $(".slider-for").slick("slickCurrentSlide");

    Fancybox.show(fancyboxSlides, {
      loop: true,
      keyboard: true,
      arrows: true,
      infobar: true,
      thumbs: true,
      startIndex: currentIndex,
    });
  });
});

$("#burgerBtn").on("click", function () {
  $(this).toggleClass("open");
  $("#mobileMenu").toggleClass("show");
});

$(".mobile-nav-link").on("click", function () {
  $("#burgerBtn").removeClass("open");
  $("#mobileMenu").removeClass("show");
});
