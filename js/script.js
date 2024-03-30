$(document).ready(function() {
 
    $("a.scroll-to").click(function() {
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
          duration: 500,
          easing: "swing"
       });
       return false;
    });

    $(".burger").click(function() {
      $(".header__menu").toggleClass('show');
    });

    $('.services__slider').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      responsive:{
          0:{
              nav: true,
              items:1
          },
          600:{
              nav: true,
              items:3
          }
      }
    });

    $('.input-file input[type=file]').on('change', function(){
      let file = this.files[0];
      $(this).next().html(file.name);
    });
  
 });