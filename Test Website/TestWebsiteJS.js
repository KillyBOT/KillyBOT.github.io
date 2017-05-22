$(document).ready(function() {
  $('#testClass').on('click', function() {
    $(this).fadeOut('slow');
  });
  $('#testClass').hover(function(){
    $(this).toggleClass('onHover');
  });
});
