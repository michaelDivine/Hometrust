$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var hashoffset = $(hash).offset().top;

      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
      
      // If on desktop, use jQuery scroll
      // Mobile defaults to native approach (less janky)
      if (!isMobile) {
        // Vary scroll speed so as not to nauseate user
        var totaldistance = Math.abs($(document).scrollTop() - hashoffset);
        var scrolltime = totaldistance / 5 + 400;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, scrolltime, function(){
          window.location.hash = hash;
        });
      } else {
        window.scroll(0, hashoffset)
      }      
    }
  });
});