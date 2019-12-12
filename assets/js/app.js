// Check the browser to make sure it supports service workers
// if('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     // Register the path to the service worker file
//     .register('sw.js')
//     .then(function() { console.log("Service Worker Registered"); });
// }

// This build system utilizes the jQuery library for javascript.
// Don't want to use jQuery? Just don't load it on the main pages
// You can also erase this and start writing vanilla JS

$(document).ready(function() {

  //---------------------------------------------------
  // Smooth Scrolling
  //---------------------------------------------------

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')&&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });

    //---------------------------------------------------
    // Reading Plans logic
    //---------------------------------------------------

    // open reading plan form
    $('.reading-plan-trigger').on('click', function() {
      $('#reading-plans').css('display', 'flex');
    });

    // close reading plan form
    $('.modal-close a').on('click', function() {
      $('#reading-plans').css('display', '');
    });

    // get current month from browser
    var date = new Date();
    var month = date.getMonth();
    month = month+1;

    var readingPlanURL;

    // convert to text
    if (month === 9) {
      month = 'September';
      readingPlanURL = 'https://www.paperturn-view.com/us/tyndale-bibles/september-pray-for-america-bible-reading-plan?pid=NjE61790&v=1.14';

    } else if (month === 10) {
      month = 'October';
      readingPlanURL = 'https://www.paperturn-view.com/us/tyndale-bibles/october-pray-for-america-bible-reading-plan?pid=NjE61795&v=1.11';

    } else if (month === 11) {
      month = 'November';
      readingPlanURL = 'https://www.paperturn-view.com/us/tyndale-bibles/november-pray-for-america-bible-reading-plan?pid=NjE61813&v=1.10';

    } else if (month === 12) {
      month = 'December';
      readingPlanURL = 'https://www.paperturn-view.com/us/tyndale-bibles/december-pray-for-america-reading-plan?pid=NjE61814&v=1.11';

    } else if (month === 1) {
      month = 'December';
      readingPlanURL = 'https://www.paperturn-view.com/us/tyndale-bibles/sampler-one-year-pray-for-america-bible?pid=NTc57082&v=2.15';
    }

    $('.thanks-button').attr('href', readingPlanURL);


    //---------------------------------------------------
    // Retailer button
    //---------------------------------------------------

    $('.retailer-button').on('click', function() {
      $(this).toggleClass('active');
      $('.button-dropdown-list').slideToggle(300);
    });

    $('.button-dropdown-list-item').on('click', function() {
      $('.retailer-button').removeClass('active');
      $('.button-dropdown-list').hide();
    });


}); // end jQuery
