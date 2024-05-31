$(document).ready(function(){

    //내비게이션
    $('.menu>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    //가로 슬라이드
    setInterval(function(){
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : -800});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : -1600});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : 0});
        $('.slidelist').delay(2000);
    });

    //모달 레이어 팝업
    $('.notice li:first').click(function(){
        $("#modal").addClass("active");
    });
    $('button').click(function(){
        $("#modal").removeClass("active");
    });
});