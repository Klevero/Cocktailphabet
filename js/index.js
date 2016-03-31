

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
        'internal_link':'incomplete'
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

//console.log(cocktail_array);


for(var i=0; i<cocktail_array.length; i++){
    
    console.log( cocktail_array[i] );

    /****** Creating HTML for each letter ******/

    $('.row_1').append('<div class="letter_box yellow_hover no_letter" id="letter_'+i+'" data-id="'+i+'"><div class="bg '+ cocktail_array[i].thumbnail_class +'"></div><span>'+ cocktail_array[i].letter.toUpperCase() +'</span></div>');


    /****** Creating link to each letter ******/
    if(cocktail_array[i].internal_link !== "incomplete"){
        
        $("#letter_"+i ).click(function() {

            $('body').stop().animate({
                scrollTop: $( cocktail_array[$(this).data('id')].internal_link ).offset().top
            }, 500, function(){console.log('animateion finished') });
        });

    }else{

        togglenotAvailable();
        
    }


}





























/********** ALPHABET LETTER HOVER ************/

$('.letter_box span').hover(
	function() {
    	$(this).parent().find('.bg').stop().animate({opacity: 1}, 800);
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

        $('.not_yet').delay(600).css({'display':'block', 'opacity':'1'});
        notAvailable = true;

    } else {

         $('.not_yet').delay(600).css({'display':'none', 'opacity':'0'});
         notAvailable = false;

    }
};

/****** SEARCH BY LETTER BUTTON ******/

$(".bub_1").click(function() {
    $('body').stop().animate({
        scrollTop: $(".alphabet_grid").offset().top
    }, 500, function(){console.log('animateion finished') });
});


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




/****** GREYHOUND COCKTAIL SLIDES FROM RIGHT ******/

        if(scroll > 5100 && scroll < 6400){

            console.log('aaaa');

            $('.greyhound_cocktail').stop().animate(
                {'margin-left':'0px', opacity:1},
                'slow'
            );

        } else {

            $('.greyhound_cocktail').stop().animate(
                {'margin-left':'400px', opacity:0},
                'slow'
            );

        }
    }
);

/****** ABOUT PAGE CHANGES ******/
var about = false;

$(".about, .us").click(function(){

    toggleAbout();

});


$(".x_button").click(function(){
    
    toggleAbout();

});


function toggleAbout()
{

    if (about === false) {
        $(".section_1").removeClass("main_image");
        $(".section_1").addClass("about_image")
            .stop()
            .animate(
                {'padding-top':'120px'},
                1800
            );

       $('.x_button, .about_body, .about_p').delay(600).css({'display':'block', 'opacity':'1'});

        $('.logo')
            .css(
                {'color':'white'}
            )
            .stop()
            .animate(
                {'padding-top':'180px'},
                2000
            );

        $('.blue_line').css({'border-bottom':'1.5px solid white'});

        about = true;

        $(".us, .nav_ol, .intro_block, .bub_parent, .alphabet_grid, .g_block_img, .cocktail_intro_parent, .cocktail_body").hide();
        

    } else {
        $(".section_1").addClass("main_image");
        $(".section_1").removeClass("about_image").stop()
            .animate(
                {'padding-top':'0px'},
                1800
            );

        $('.x_button, .about_body, .about_p').css({'display':'none', 'opacity':'0'});

         $('.logo')
            .css(
                {'color':'#00004d'}
            )
            .stop()
            .animate(
                {'padding-top':'120px'},
                2000
            );

        $('.blue_line').css({'border-bottom':'1.5px solid #00004d'}); 

            $(".us, .nav_ol, .intro_block, .bub_parent, .alphabet_grid, .g_block_img, .cocktail_intro_parent, .cocktail_body").show();
            

        about = false;
    }

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



























