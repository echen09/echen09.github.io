jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
      var windowDiff = $(window).height() - ($(window).height() * 0.75);
      var fadeOffset = $(this).offset().top + $(this).height();
      var scrollPos = $(window).scrollTop();
      
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
      else if (fadeOffset < (scrollPos + windowDiff)) {
        console.log("Fade Offset: " + fadeOffset);
        console.log("Fade Position: " + (scrollPos + windowDiff))
        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('bounce-in').addClass('is-hidden');
      }
      /*else {
        console.log("=====================")
        console.log("BlockOne: " + $(this));
        console.log("Top Offset: " + $(this).offset().top);
        console.log("Scroll Top: " + $(window).scrollTop());
        console.log("Window Fade Height: " + $(window).height()*0.75);
        console.log("Element Height: " + $(this).height());
      }*/
		});
	});
});
