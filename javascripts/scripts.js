$(document).ready(function(){


  //MOVES THE ORBIT BULLETS TO THE TOP RIGHT FROM THE BOTTOM LEFT
  $('.orbit-bullets').insertAfter('.front-title');
  //ADDS/REMOVES THE CLASS OF .ACTIVE FROM THE DOTS WHEN CLICKED
  $('.orbit-prev, .orbit-next, .orbit-bullets li').on('click', function(){
    $('.orbit-bullets li').toggleClass('active');
  });

  //LOCAL SCROLL
  //$.localScroll();

  $.localScroll({
     offset: -86
  });

//VARIABLES
  // var $window = $(window);

//RESPONSIVE QUERIES
  // $window
  //   .bind('resize', function () {

  //     var width = $(this).width();

  //     // Desktop
  //     if (1281 <= width) {
  //       //put code here for desktop
  //       $('.display-meter').text('Display: Desktop');
  //     }
  //     // Tablet Landscape
  //     else if (769 <= width && 1280 > width) {
  //       //put code here for landscape
  //       $('.display-meter').text('Display: Tablet Landscape');
  //     }
  //     // Tablet Portrait
  //     else if (481 <= width && 768 > width) {
  //       //put code here for portrait
  //       $('.display-meter').text('Display: Tablet Portrait');
  //     }
  //     // Mobile
  //     else {
  //       //put code here for mobile
  //       $('.display-meter').text('Display: Mobile');
  //     }

  //   })
  //   .trigger('resize');
 //CLOSE RESPONSIVE QUERIES

});