$(function() {
	$('h1').fadeIn(2000);

	$('.nav-btn').click(function(){
		$('nav ul').animate({width:'show'});
		$('nav ul li span').show();
		$('nav').fadeIn();
	});

	$('nav').click(function(){
		$('nav ul').animate({width:'hide'});
		$('nav ul li span').hide();
		$('nav').fadeOut();
	});
	
});