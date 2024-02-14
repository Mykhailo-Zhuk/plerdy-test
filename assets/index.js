$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    initialSlide: 1,
    mobileFirst: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#open_form").on("click", function () {
    $("#layout").show();
    $("body").css("overflow-y", "hidden");
    $("#popup__container").fadeIn();

    $(window).scrollTop(0, 0);
  });

  $("#layout").on("click", function () {
    console.log("click");
    $("#popup__container").fadeOut();
    $("#layout").hide();
    $("body").css("overflow-y", "auto");
  });

  $("#close_form").on("click", function () {
    $("#popup__container").fadeOut();
    $("#layout").hide();
    $("body").css("overflow-y", "auto");
  });
});
