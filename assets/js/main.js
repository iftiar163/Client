// Click Slider

$(document).ready(function(){
	$('#para1').hide();
	$('#para2').hide();
	$('#para3').hide();
	$('#para4').hide();
	$('#para5').hide();

	$('#btn1').click(function(){
		$('#para1').slideToggle();
		$('#para2').hide();
		$('#para3').hide();
		$('#para4').hide();
		$('#para5').hide();
		$('#rotate1').toggleClass('rotate');

	});

	$('#btn2').click(function(){
		$('#para1').hide();
		$('#para2').slideToggle();
		$('#para3').hide();
		$('#para4').hide();
		$('#para5').hide();
		$('#rotate2').toggleClass('rotate');

	});

	$('#btn3').click(function(){
		$('#para1').hide();
		$('#para2').hide();
		$('#para3').slideToggle();
		$('#para4').hide();
		$('#para5').hide();
		$('#rotate3').toggleClass('rotate');

	});

	$('#btn4').click(function(){
		$('#para1').hide();
		$('#para2').hide();
		$('#para3').hide();
		$('#para4').slideToggle();
		$('#para5').hide();
		$('#rotate4').toggleClass('rotate');

	});

	$('#btn5').click(function(){
		$('#para1').hide();
		$('#para2').hide();
		$('#para3').hide();
		$('#para4').hide();
		$('#para5').slideToggle();
		$('#rotate5').toggleClass('rotate');

	});
});