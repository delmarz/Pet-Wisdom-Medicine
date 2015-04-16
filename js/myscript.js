$(function() {

"use strict";



	var topoffset = 50; //Menu Bar height
	var slideQty = $('#featured .item').length;
	var windowHeight = $(window).height();
	var randSlide = Math.floor(Math.random() * slideQty);


	$('#featured .item').eq(randSlide).addClass('active');

	$('.fullheight').css('height', windowHeight);

	$(window).resize(function() {
		windowHeight = $(window).height();
		$('.fullheight').css('height', windowHeight);
	})


	$('#featured .item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image': 'url('+imgSrc+')'});
		$(this).remove();
	});

	var hash = $(this).find('li.active a').attr('href');
	if (hash != '#featured') {
		$('.navbar-fixed-top').addClass('inbody');
	}else {
		$('.navbar-fixed-top').removeClass('inbody');
	}


$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {

	var hash = $(this).find('li.active a').attr('href');
	if (hash != '#featured') {
		$('.navbar-fixed-top').addClass('inbody');
	}else {
		$('.navbar-fixed-top').removeClass('inbody');
	}

});


$('body').scrollspy({
	target: '.navbar-fixed-top',
	offset: topoffset

});



$('.carousel').carousel({
	pause: false
});



$('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      }
    }
  });
	
	for (var i = 0; i < slideQty; i++) {
		var insertText = '<li data-target="#featured" data-slide-to="'+i+'"';

		if (i == randSlide) {
			insertText += 'class="active"';
		}
		insertText += '></li>';

		$('#featured ol').append(insertText);
	}


});