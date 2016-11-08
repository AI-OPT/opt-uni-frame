//提示弹出框 
jQuery(document).ready(function($) {
	$('#recharge-popo').click(function(){
	$('#eject-mask').fadeIn(100);
	$('#rechargepop').slideDown(100);
	})
	$('#completed').click(function(){
	$('#eject-mask').fadeOut(200);
	$('#rechargepop').slideUp(200);
	})
	$('#close-completed').click(function(){
	$('#eject-mask').fadeOut(200);
	$('#rechargepop').slideUp(200);
	})
})

