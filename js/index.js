

/*

    Cocktail Data Base (Array of Cocktail Object)


*/
var cocktail_array = [
    
    {
        'letter':'a',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'b',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'c',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':' '
    },
    {
        'letter':'d',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'e',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'f',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
      {
        'letter':'g',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'.g_block_img'
    },
    {
        'letter':'h',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'i',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
      {
        'letter':'j',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'k',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'l',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
      {
        'letter':'m',
        'thumbnail_class':'pink_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'n',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'o',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
      {
        'letter':'p',
        'thumbnail_class':'pink_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'q',
        'thumbnail_class':'pink_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'r',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
       {
        'letter':'s',
        'thumbnail_class':'pink_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'t',
        'thumbnail_class':'pink_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'u',
        'thumbnail_class':'yellow_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
       {
        'letter':'v',
        'thumbnail_class':'pink_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'w',
        'thumbnail_class':'pink_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    },
    {
        'letter':'x',
        'thumbnail_class':'pink_bg',
        'thumbnail_odd':'false',
        'internal_link':'incomplete'
    }
];


for(var i=0; i<cocktail_array.length; i++){
    
    //console.log( cocktail_array[i] );

    /****** Creating HTML for each letter ******/

    $('.row_1').append('<div class="letter_box yellow_hover no_letter" id="letter_'+i+'" data-id="'+i+'"><div class="bg '+ cocktail_array[i].thumbnail_class +'"></div><span>'+ cocktail_array[i].letter.toUpperCase() +'</span></div>');


    /****** Creating link to each letter ******/
    if(cocktail_array[i].internal_link !== "incomplete"){
        
        $("#letter_"+i ).click(function() {

            $('body').stop().animate({
                scrollTop: $('#cocktailbody-'+cocktail_array[$(this).data('id')].letter).offset().top
            }, 500, function(){console.log('animateion finished') });
        });

    }else{
        $("#letter_"+i ).click(function() {
            togglenotAvailable();
        });
    }


}





/********** ALPHABET LETTER HOVER ************/

$('.letter_box span').hover(
	function() {
    	$(this).parent().find('.bg').stop().animate({opacity: 1}, 300);
    }, 
    function() {
        $(this).parent().find('.bg').stop().animate({opacity: 0}, 0);
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

/****** LETTER IS NOT AVAILABLE YET ******/
var notAvailable = false;


$(".not_yet_button").click(function(){
    
    togglenotAvailable();

});

function togglenotAvailable()
{   
    /*console.log(contact)*/

    if (notAvailable === false) {

        $('.not_yet').css({'display':'block', 'opacity':'1'});
        notAvailable = true;

    } else {

         $('.not_yet').css({'display':'none', 'opacity':'0'});
         notAvailable = false;

    }
};

/****** SEARCH BY LETTER BUTTON ******/

$(".bub_1").click(function() {
    $('body').stop().animate({
        scrollTop: $(".alphabet_grid").offset().top
    }, 500, function(){console.log('animateion finished') });
});


/*
*
*   initialize PC
*
*/
function init_pc(){

    /****** WHEN TOP BUTTON APPEARS DISAPPEARS ******/

    $(window).scroll(

        

        function (event) {
            var scroll = $(window).scrollTop();
            // Check the Position

            if(scroll > 800){

                $('.top_pg_button').removeClass('deactivate').addClass('active');

            } else {

                $('.top_pg_button').removeClass('active').addClass('deactivate');

            }


            /****** GREYHOUND COCKTAIL SLIDES FROM RIGHT ******/
            for(var i=0; i<cocktail_array.length; i++){
                if($('#cocktailbody-'+cocktail_array[i].letter).offset() !== undefined){
                    if(scroll > $('#cocktailbody-'+cocktail_array[i].letter).offset().top + 200 && scroll < $('#cocktailbody-'+cocktail_array[i].letter).offset().top + 2400){

                        $('#cocktailbody-'+cocktail_array[i].letter).find('.slideFromTo').removeClass('slideOut');
                        $('#cocktailbody-'+cocktail_array[i].letter).find('.slideFromTo').addClass('slideIn');
                    } else {
                        $('#cocktailbody-'+cocktail_array[i].letter).find('.slideFromTo').removeClass('slideIn');
                        $('#cocktailbody-'+cocktail_array[i].letter).find('.slideFromTo').addClass('slideOut');

                    }
                }
            }

        }
    );

}


/****** POP UP CONTACT ******/

var contact = false;

$(".contact").click(function(){

    toggleContact();

});


$(".mail_button").click(function(){
    
    toggleContact();

});

function toggleContact()
{   
    /*console.log(contact)*/
    if (contact === false) {

        $('.contact_body').animate({'top':'250px'}, 600);
        contact = true;

    } else {

         $('.contact_body').animate({'top':'-550px'}, 200);
         contact = false;

    }
};

/****** SEARCH BY LETTER BUTTON ******/

$(".bub_1").click(function() {
    $('body').stop().animate({
        scrollTop: $(".alphabet_grid").offset().top
    }, 500, function(){console.log('animateion finished') });
});



























