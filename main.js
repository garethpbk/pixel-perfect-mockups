$(document).ready(function() {
  $(".btn").click(function() {
    var cross = $(this).find(".cross");
    $(this).toggleClass("expanded");
    if ($(this).hasClass("expanded")) {
      cross.html("-");
    } else {
      cross.html("+");
    }
  });

  $(".jumbotron h1").hover(function() {
    $(this).toggleClass("hidden");
    $(".hero").toggleClass("visible");
  });
});
