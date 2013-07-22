$(document).ready(function(){

  //VARIABLES
  var $window = $(window);

//RESPONSIVE QUERIES
  $window
    .bind('resize', function () {

      var width = $(this).width();

      if (width >=1025){

      //PARALAX SCROLLING
        $('section[data-type="background"]').each(function(){
          var $bgobj = $(this); // assigning the object
            $window.scroll(function() {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });

          }); // window scroll Ends
        });
        $window.scroll(function() {
          //when the window gets scrolled down to 175px, animate desktop-nav-bg into the screen.
          var scrollTop = $window.scrollTop();
          var navbg = $('.desktop-nav-bg');
          //console.log('scrollTop =' + scrollTop);
          //console.log(navbg.position().top);
          if((scrollTop >= 50) && (navbg.position().top === -65)){
            navbg.stop(true, false).animate({'top':'0px'}, 400);
            //console.log('animate down');
          }else if((scrollTop <= 50) && (navbg.position().top === 0)){
            navbg.stop(true, false).animate({'top':'-65px'}, 200);
            //console.log('animate up');
          }
        });
      //CLOSE PARALAX SCROLLING

      }

    })
    .trigger('resize');
 //CLOSE RESPONSIVE QUERIES


});
/* 
 * Create HTML5 elements for IE's sake
 */
document.createElement("section");
document.createElement("header");