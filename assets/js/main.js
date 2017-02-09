$(document).ready(function() {
	console.log("Hello World from main.js!");



	$('.circle').hover(function(){
		$('.boom').removeClass('blink');
		$('.boom').addClass('blink');
		console.log('fuck');
	});

	$('.circle').hover(function(){
		$('.boom-2').removeClass('blink-2');
		$('.boom-2').addClass('blink-2');
		console.log('fuck');
	});

	$('.circle').hover(function(){
		$('.boom-3').removeClass('blink-3');
		$('.boom-3').addClass('blink-3');
		console.log('fuck');
	});

	$('.circle').hover(function(){
		$('.boom-4').removeClass('blink-4');
		$('.boom-4').addClass('blink-4');
		console.log('fuck');
	});

});