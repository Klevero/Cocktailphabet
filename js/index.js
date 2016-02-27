$('.letter_box').hover(
	function() {
    	$(this).find('.bg').animate({opacity: 1}, 1000);
    }, 
    function() {
        $(this).find('.bg').animate({opacity: 0}, 0);
    }
);




