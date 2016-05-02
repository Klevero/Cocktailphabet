/*
*
*   Check the Device Type
*
*/

var mobile;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('.section_1').addClass('mobile');
    $('.intro_block').addClass('mobile');
    $('.cocktaillist').addClass('mobile');

    mobile = true;

}else{
    $('.section_1').addClass('pc main_image');
    $('.intro_block').addClass('pc');
    $('.cocktaillist').addClass('pc');

    mobile = false;

    init_pc();
}