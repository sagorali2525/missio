$(document).ready(function(){

// Sticky top menu
$(document).ready(function(){
  
    // sticky top menu 
    $(window).scroll(function(){
      var stickyMenu = $(this).scrollTop();
      var stickyTopMenu = $('.sticky-top');
  
      if (stickyMenu >=100) {
        stickyTopMenu.addClass('nav-bg') ;     
      } else {
        stickyTopMenu.removeClass('nav-bg') ;
        
      }
    })
      // scroll to top menu 
      $(window).scroll(function(){
        var scrolToTop = $(this).scrollTop();
        var scroll_now = $('.scroll-top');
    
        if (scrolToTop >=400) {
          scroll_now.addClass('activeScroll').fadeIn() ;     
        } else {
          scroll_now.removeClass('activeScroll').fadeOut() ;
          
        }
      })





    // AOS-plaggin
AOS.init({
    duration:1000, 
});

// counter-up
$('.count-item').counterUp({
    time:2000
});

// progressbar
      $('.circlechart').circlechart()
     
    
})
});