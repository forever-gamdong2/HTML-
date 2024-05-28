$(document).ready(function(){

    //내비게이션
    $('.menu>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    //슬라이드
    setInterval(function(){
        $('.slidelist').delay(1000);
        $('.slidelist').animate({marginLeft:'-100%'});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft:'-200%'});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft:0});
        $('.slidelist').delay(2000);
    });

    //모달레이어 팝업
    $('.notice li:first').click(function(){
        $("#modal").addClass("active");
    });
    $('button').click(function(){
        $("#modal").removeClass("active");
    });


});