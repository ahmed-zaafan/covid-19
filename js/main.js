$(window).scroll(function(){
    x = $(window).scrollTop();
    if(x > 550){
        $('.btn5').css("opacity" , "1")
        $('.navbar').css("background" , "#fff")
    }else{
        $('.btn5').css("opacity" , "0")
        $('.navbar').css("background" , "gray")
    }
    console.log(x);
})

