
//Foundation
$(document).ready(function() {
	$(document).foundation();
});

//Burger Menu
$(document).ready(function() {
	$(".mobile-menu").click(function(){
		$(".top-nav").toggleClass('is-open')
	});
});

//The map modal
$(document).ready(function() {
	$('#map').click(function() {
		$('.map-modal').toggleClass('is-open')
	});
});


//Scroll on click
$(function() {
	$('.top-nav a').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
	event.preventDefault();
	});
})
;
/*
if you don't want to use the easing effects:
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1000);
*/