$(document).ready(function() {
  updateSize();
  $(window).on("resize", function(){
      updateSize();
  });
});

function updateSize(){
  var width=$( window ).width();
  var height=$( window ).height();

  $(':root').css('--container-width', width);
  $(":root").css('--container-height', height);
}
