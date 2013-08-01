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
            $(this).find('.icon').stop(true, false).animate({'font-size' : '30px'}, 200);
            $(this).find('p').stop(true, false).animate({'opacity' : '1', 'height' : '70px', 'padding-top' : '8px' }, 200);
          },
          function () {
            $(this).parents('.cta').css('background-position','0px 0px');
            $(this).find('p').stop(true, false).animate({'opacity' : '0', 'height' : '0px', 'padding-top' : '0px' }, 200);
            $(this).find('.icon').stop(true, false).animate({'font-size' : '85px'}, 200);
          }
        );
        //CLOSE CTA HOVER EFFECT

      }

    })
    .trigger('resize');
 //CLOSE RESPONSIVE QUERIES


});