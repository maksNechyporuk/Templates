$(document).on("scroll", function() {
  if ($(document).scrollTop() > 86) {
    $("#banner").addClass("shrink");
  } else {
    $("#banner").removeClass("shrink");
  }
});

$(".dropdown-toggle").on("click", function() {
  if ($(".dropdown-menu").hasClass("show")) {
    $(".dropdown-menu").removeClass("show");
  } else {
    $(".dropdown-menu").addClass("show");
  }
});
