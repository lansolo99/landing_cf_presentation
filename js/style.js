$(document)
  .ready(function() {


    /*********************
           Sticky
    **********************/

    $('.ui.sticky')
      .sticky({
        context: '.sections',
        silent: true
      })
    ;


    /*********************
          Fixed nav
    **********************/

    function scrollNav() {


      $('.nav a').on('click', function() { // Action

        //Toggle Class
        // $(".active").removeClass("active");
        var target = $(this).attr('href'); // Target
        // $(this).addClass("active");

        //Animate
        $('html, body').animate({scrollTop: $(target).offset().top -90 }, 400); // Go
        return false;
      });
    }
    scrollNav();
    })
    ;



    // Toggle active items on scroll

    // Section 1
    $('#section1')
      .visibility({
        once: false,
        // onBottomPassedReverse: function() {
        //   $('.fixed.menu li .item.active').removeClass("active");
        //   $('.fixed.menu .item.section1').addClass("active");
        // }
      })
    ;


    // Section 1-2
    $('#triggerNavSection2')
      .visibility({
        once: false,
        onTopPassed: function() {
          $('.fixed.menu li .item.active').removeClass("active");
          $('.fixed.menu .item.section2').addClass("active");
        },
        onTopPassedReverse: function() {
          $('.fixed.menu li .item.active').removeClass("active");
          $('.fixed.menu .item.section1').addClass("active");
        }
      })
    ;



    //Section 2-3
    $('#triggerNavSection3')
      .visibility({
        once: false,
        onTopPassed: function() {
          $('.fixed.menu li .item.active').removeClass("active");
          $('.fixed.menu .item.section3').addClass("active");
        },
        onTopPassedReverse: function() {
          $('.fixed.menu li .item.active').removeClass("active");
          $('.fixed.menu .item.section2').addClass("active");
        }

      })
    ;

    //Section 3-4
    $('#triggerNavSection4')
      .visibility({
        once: false,
        onTopPassed: function() {
          $('.fixed.menu li .item.active').removeClass("active");
          $('.fixed.menu .item.section4').addClass("active");
        },
        onTopPassedReverse: function() {
          $('.fixed.menu li .item.active').removeClass("active");
          $('.fixed.menu .item.section3').addClass("active");
        }
      })
    ;
