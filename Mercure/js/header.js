$(function(){
	$(".gnb_st").hide();

	$(".gnb_t:first").bind("mouseenter focusin", function(){
		$(".gnb_st").slideUp();
		$(".gnb_st:first").stop().slideDown();
		$(".gnb_t > a:first").css({"color":"#fff"});
		$(".gnb_st:first li").hover(function(){
			$(this).css({"backgroundColor":"rgba(0,0,0,0.2)"});
			$(this).children().css({"color":"red"});
		},function(){
			$(this).css({"backgroundColor":"rgba(0,0,0,0)"});
			$(this).children().css({"color":"#bababa"});
		});
	}).bind("mouseleave focusout", function(){
		$(".gnb_st").hide();
		$(".gnb_t > a:first").css({"color":"#bababa"});
	});

	$(".gnb_t:eq(2)").bind("mouseenter focusin", function(){
		$(".gnb_st").slideUp();
		$(".gnb_st:eq(1)").clearQueue().slideDown();
		$(".gnb_t > a:eq(2)").css({"color":"#fff"});
		$(".gnb_st:eq(1) li").hover(function(){
			$(this).css({"backgroundColor":"rgba(0,0,0,0.2)"});
			$(this).children().css({"color":"red"});
		},function(){
			$(this).css({"backgroundColor":"rgba(0,0,0,0)"});
			$(this).children().css({"color":"#bababa"});
		});
	}).bind("mouseleave focusout", function(){
		$(".gnb_st").hide();
		$(".gnb_t > a:eq(2)").css({"color":"#bababa"});
	});

	$(".gnb_t:last").bind("mouseenter focusin", function(){
		$(".gnb_st").slideUp();
		$(".gnb_st:last").clearQueue().slideDown();
		$(".gnb_t > a:last").css({"color":"#fff"});
		$(".gnb_st:last li").hover(function(){
			$(this).css({"backgroundColor":"rgba(0,0,0,0.2)"});
			$(this).children().css({"color":"red"});
		},function(){
			$(this).css({"backgroundColor":"rgba(0,0,0,0)"});
			$(this).children().css({"color":"#bababa"});
		});
	}).bind("mouseleave focusout", function(){
		$(".gnb_st").hide();
		$(".gnb_t > a:last").css({"color":"#bababa"});
	});
});
// .gnb_st를 클릭하면 해당 url로 이동해야하는데 안댐