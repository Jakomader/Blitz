
$(document).ready(function(){
   $('.slider__inner').slick({
      arrows:false,
      dots:true,
      fade:true,
   });
   $('.header__burger').on('click',function(){
      $('.header__list').toggleClass('menu-ready');
   });

});