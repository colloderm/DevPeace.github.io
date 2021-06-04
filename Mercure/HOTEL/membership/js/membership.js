$(function(){
	$(".freeBox a").bind("mouseenter focusin",function(){
		$(this).css({"backgroundColor":"#894692","transition":"all .3s"});
	}).bind("mouseleave focusout",function(){
		$(this).css({"backgroundColor":"#222","transition":"all .3s"});
	});
});