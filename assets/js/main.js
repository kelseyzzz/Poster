$(document).ready(function() {
	console.log("Hello World from main.js!");



	$('.circle').hover(function(){
		$('.boom').removeClass('blink');
		$('.boom').addClass('blink');
		console.log('fuck');
	});

});