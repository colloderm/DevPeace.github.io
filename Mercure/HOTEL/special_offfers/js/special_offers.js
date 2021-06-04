$(function(){
	$(".box a").bind("mouseenter focus",function(){
		$(this).css({"backgroundColor":"#000","color":"#fff"});
	}).bind("mouseleave blur",function(){
		$(this).css({"backgroundColor":"#fff","color":"#000"});
	});
});