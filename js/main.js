let open = document.getElementById('open-icon');



$(document).ready(function(){
    $('.open-icon , .close-icon ,.menu ,.hide').click(function(){
        $('.open-icon').fadeToggle();
        $('.close-icon').fadeToggle();
        $('.menu').fadeToggle();
        $('.hide').fadeToggle();
    })
})

$(window).scroll(function(){
    x = $(window).scrollTop();
    if(x > 550){
        $('.btn5').css("opacity" , "1")
        $('.home').css("background" , "#fff")
    }else{
        $('.btn5').css("opacity" , "0")
        $('.home').css("background" , "#ddd")
    }
    console.log(x);
})

new WOW().init();
var scroll = new SmoothScroll('a[href*="#"]');
 /** $(function() {  
    $("body").niceScroll({
        cursorcolor : "pink"
    });
}); **/
