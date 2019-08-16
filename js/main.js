$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.header__menu-nav').toggleClass('header__menu-nav_active');
  $('.header__header-bar').slideToggle(100);
});



$(document).ready(function(){

    $("body").on("click",".header__header-menu__a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html').animate({scrollTop: top}, 1500);

    });

});


$('.popup_call').on('click', function() {
	$('.popup').fadeIn();
	$('.popup__inner').css({
		'margin-top':'5%'
	})
	
	$('html').css({
		'height' : '100vh',
		'overflow' : 'hidden'
	})
})

$('.popup__close').on('click', function() {
	$('.popup').fadeOut();
	$('.popup__inner').css({
		'margin-top' : '-10%'
	})
	$('html').css({
		'height' : '100%',
		'overflow-y' : 'scroll'
	})
})



$('.examples__carousel').slick({
  	slidesToShow: 3,
  	slidesToScroll: 2,
  	infinite: false,
  	responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})



