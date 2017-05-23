$(document).ready(function(){
  $("#MenuPage ul li").hover(function(){
    $(this).animate({
      paddingLeft: '+=10px',
      paddingRight: '+=10px',
      opacity: '0.5'
    });
    //$(this).toggleClass('onHover');
  },function(){
    $(this).animate({
      paddingLeft: '-=10px',
      paddingRight: '-=10px',
      opacity: '1'
    });
    //$(this).toggleClass('onHover');
  });
  //$("button").click(function(){
    $.ajax({
      url: "SAPWebsitePostedStories.txt",
      dataType: "text",
      success: function(data){
        $("#CoolStories").html(data);
      }
    });
  //});
});
