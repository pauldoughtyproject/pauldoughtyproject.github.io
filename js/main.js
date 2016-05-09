$(document).ready(function(){
	/* affix the navbar after scroll below header */
    $(".navbar").affix({offset: {top: $(".top").outerHeight(true)} });
	
	$(".scrollToTop").click(function() {
		console.log("Button pressed");
		$('html,body').animate({
			scrollTop: $(".content").offset().top},
			'slow');
	});
});

// initialize audio js
audiojs.events.ready(function() {
    var as = audiojs.createAll();
});

