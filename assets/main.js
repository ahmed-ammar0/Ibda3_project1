"use script";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    rtl: true,
    nav: true,
    margin: 0,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});
