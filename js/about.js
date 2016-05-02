
/*
    LOCAL STORAGE
    case 1 : about.html -> when the page opens
    case 2 : index.html -> if the page comes from about
*/

function toggleAbout()
{

    /*
        if it's about page convert contents to about page, check if it is already showing the about page last time, keep it.
    */

    if (pageID === 1) {
        $(".section_1").removeClass("main_image");
        
        if(mobile === false){
            $(".section_1").addClass("about_image");
        }else{
            $(".section_1").addClass("about");
            $(".about_body").addClass("mobile");
            $(".about_p").addClass("mobile");
        }

        $('.logo').css({'color':'white'});

        /*
            check if the last page is about. If so, do not animate.
        */
        if(lastPageIsAbout === false && mobile === false){
            $(".section_1").stop().delay(200).animate({'padding-top':'120px'},1300);
            $('.logo').stop().delay(200).animate({'padding-top':'130px'},1600, function(){
                $('.about_p').css({'display':'block'}).addClass('fadein');
            });
        }else{
            if(mobile === false){
                $(".section_1").css({'padding-top':'120px'});
                $('.logo').css({'padding-top':'130px'});
            }
            $('.about_p').css({'display':'block', 'opacity':'1'});
        }

       $('.x_button, .about_body').css({'display':'block', 'opacity':'1'});
       $('.blue_line').css({'border-bottom':'1.5px solid white'});
        $(".us, .nav_ol, .intro_block, .bub_parent, .alphabet_grid, .g_block_img, .cocktail_intro_parent, .cocktail_body").hide();
        
        about = true;

    } 
    /*
        if it's index page animate from about state
    */
    else if(pageID === 0) {
        
        $(".section_1").addClass("main_image");
        $(".section_1").removeClass("about_image about");
        $('.logo').css({'color':'#00004d'});

        if(mobile === false){
            $(".section_1").css({'padding-top':'120px'})
            .stop().delay(400)
                .animate(
                    {'padding-top':'0px'},
                    1300
                );

            $('.logo').css({'padding-top':'130px'})
            .stop().delay(400)
            .animate(
                {'padding-top':'120px'},1600
            );
        }

        $('.blue_line').css({'border-bottom':'1.5px solid #00004d'}); 

        $(".us, .nav_ol, .intro_block, .bub_parent, .alphabet_grid, .g_block_img, .cocktail_intro_parent, .cocktail_body").show();
            

        about = false;
    }

    // -- assign back to local storage
    $storage.setItem('about', about);

}



