$(function(){
  $('.bxslider').bxSlider({
	nextText: '<i class="fa fa-angle-right"></i>',
    prevText: '<i class="fa fa-angle-left"></i>',
  	auto: true,
	  speed: 500,
	  touchEnabled: false
  });
});

$(function() {
    $(".menu-mobile .sp-button").click(function() {
    	$(this).toggleClass("active");
        $(".menu-mobile .menu").toggleClass("active");
    });
});

$(function() {
	$(".question-box__ask .answer").hide();
		$(".question-box__ask h2.is-open +.answer").show();
		$(".question-box__ask h2").click(function(e){
			$(this).toggleClass("is-open");
			$("+.answer",this).slideToggle(400);
	});
});
