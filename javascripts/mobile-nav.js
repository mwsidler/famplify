(function ($) {

  function closeNav(n)
  {
    //change the trigger graphic and close navigation
    $('.nav-trigger').css('background-position', '0 0');
    //animates the wrapper off screen then chains the addClass action to hide the navigation
    n.animate({ 'right': '100%' }, 200)
        .addClass('hidden');
  }

    //VARIABLES
    var $nav = $('.top-bar');
    var $bodyHeight = $(window).height();
    //var $trigger = $('.nav-trigger, .top-bar li a');
    var $window = $(window);

    //RESPONSIVE QUERY
    $window
    .bind('resize', function () {

      var width = $(this).width();

      // Desktop
      if (1024 >= width) {
      //sets the height of the navigation wrapper to the same height of the page content
      //and adds a class of hidden.
        if(!$nav.hasClass('hidden')){
          $nav.css('min-height', $bodyHeight + 'px').addClass('hidden');

      //MOBILE NAVIGATION
      //animates the navigation in and out
      $('.nav-trigger').click(function () {
        if ($nav.hasClass('hidden')) {
          //displays the wrapper - {display: block;}, then animates out
          $nav.css('display', 'block').animate({ 'right': '0%' }, 200, function () {
            //and on animation completion, it changes the trigger graphic
            $('.nav-trigger').css('background-position', '0 -25px');
          //finally takes off the class of hidden so that the next time it is clicked it runs the else{}
          }).removeClass('hidden');
        } else {
          closeNav($nav);
        }

      });
      //CLOSE MOBILE NAVIGATION

            //MOBILE NAVIGATION
        //animates the navigation in and out
        $('.top-bar li a').click(function () {
          closeNav($nav);
        });
        //CLOSE MOBILE NAVIGATION
        }
      }

    })
    .trigger('resize');
    //CLOSE RESPONSIVE QUERIES


})(jQuery);