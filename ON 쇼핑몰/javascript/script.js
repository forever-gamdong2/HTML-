$(document).ready(function(){

    //내비게이션
    $('.menu>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });


    //슬라이드
    $('.slide a:gt(0)').hide();
    setInterval(function(){
        $('.slide a:first-child').fadeOut(1000)
        .next('a').fadeIn(1000)
        .end().appendTo('.slide');
    }, 3000);


    //탭메뉴
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass("active")
        .siblings().removeClass("active");
    return false
    });


    //레이어팝업
    $('.notice li:first').click(function(){
        $("#layer").addClass("active");
    });
    $('button').click(function(){
        $("#layer").removeClass("active");
    });
});