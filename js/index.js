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

/********** TOP SCROLL BUTTON ************/

$('.top_pg_button').click(
    function() {
        $('html, body').animate(
            { scrollTop: 0 },
            'slow'
        );
    }
);

/****** WHEN TOP BUTTON APPEARS DISAPPEARS ******/

$(window).scroll(
    function (event) {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        // Check the Position

        if(scroll > 800){

            $('.top_pg_button').stop().animate(
                {'bottom':'20px', opacity:1},
                'slow'
            );

        } else {

            $('.top_pg_button').stop().animate(
                {'bottom':'-360px', opacity:0},
                'slow'
            );

        }
    }
);





