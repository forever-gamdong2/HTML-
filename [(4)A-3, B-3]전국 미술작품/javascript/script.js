$(document).ready(function(){

    //내비게이션
    $('.menu>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    //세로 슬라이드
    setInterval(function(){
        $('.slidelist').delay(1000);
        $('.slidelist').animate({marginTop : -300});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginTop : -600});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginTop : 0});
        $('.slidelist').delay(2000);
    });

    //탭메뉴
    $(function(){
        $('.tabmenu>ul>li>a').click(function(){
            $(this).parent().addClass("active")
            .siblings().removeClass("active");
            return false;
        });
    });

    //레이어 팝업
    $('.notice>ul>li:first').click(function(){
        $("#layer").addClass("active");
    });
    $('button').click(function(){
        $("#layer").removeClass("active");
    });
});