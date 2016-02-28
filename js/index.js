$('.letter_box').hover(
	function() {
    	$(this).find('.bg').animate({opacity: 1}, 800);
    }, 
    function() {
        $(this).find('.bg').animate({opacity: 0}, 0);
    }
);

$('.pink_letter_box').hover(
	function() {
    	$(this).find('.pink_bg').animate({opacity: 1}, 800);
    }, 
    function() {
        $(this).find('.pink_bg').animate({opacity: 0}, 0);
    }
);




