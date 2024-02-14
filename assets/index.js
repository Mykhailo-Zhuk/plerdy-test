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

  // Close form when click on close button or ESC key
  // Close form by clicking on the cross in the top right corner
  $("#close__form, #layout").on("click", function () {
    closeForm();
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      closeForm();
    }
  });

  function closeForm() {
    $("#popup__container").fadeOut();
    $("#layout").hide();
    $("body").css("overflow-y", "auto");
  }

  $(".form__body").submit(function (event) {
    // Validate Name field
    const nameValue = $("#name").val();

    if (nameValue.trim() === "") {
      $("#name").addClass("invalid");
      $("#error__name").html("Name is required");
      event.preventDefault();
    } else {
      $("#name").removeClass("invalid");
      $("#error__name").html("");
    }

    // Validate Phone field
    const phoneNumber = $("#phone").val();
    validatePhoneNumber(phoneNumber);

    function validatePhoneNumber(phoneNumber) {
      const numericPhoneNumber = phoneNumber.replace(/\D/g, "");
      const isValid = numericPhoneNumber.length === 9;

      if (!isValid) {
        $("#phone").addClass("invalid");
        $("#error__phone").html("Please enter a valid 9-digit phone number.");
        event.preventDefault();
      } else {
        $("#phone").removeClass("invalid");
        $("#error__phone").html("");
      }
    }
  });
});
