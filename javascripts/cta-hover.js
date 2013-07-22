$(document).ready(function(){
  
  var $window = $(window);
  
//RESPONSIVE QUERIES
  $window
    .bind('resize', function () {

      var width = $(this).width();

      // Desktop
      if (1025 <= width) {

        //CTA HOVER EFFECT
        $('.cta-interact p').css({'opacity' : '0', 'height' : '0px'});
        $('.cta-interact').hover(
          function () {
            $(this).parents('.cta').css('background-position','0px -288px');
            $(this).siblings('h5').stop(true, false).animate({'padding-bottom' : '0px'}, 200);
            $(this).find('img').stop(true, false).animate({'width' : '50px', 'height' : '50px'}, 200);
            $(this).find('p').stop(true, false).animate({'opacity' : '1', 'height' : '70px' }, 200);
          },
          function () {
            $(this).parents('.cta').css('background-position','0px 0px');
            $(this).siblings('h5').stop(true, false).animate({'padding-bottom' : '15px'}, 200);
            $(this).find('p').stop(true, false).animate({'opacity' : '0', 'height' : '0px'}, 200);
            $(this).find('img').stop(true, false).animate({'width' : '95px', 'height' : '95px'}, 200);
          }
        );
        //CLOSE CTA HOVER EFFECT

      }

    })
    .trigger('resize');
 //CLOSE RESPONSIVE QUERIES


});