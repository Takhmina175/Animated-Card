$(document).ready(function () {
  $("#gallery").click(function () {
    $("#container").show();
    $("#cards").hide();
  });
  $("#cards").addClass("hide-cards");

  $("#photo-album").click(function () {
    $("#cards").removeClass("hide-cards");
    $("#cards").show();
    $("#container").hide();
  });

});
