$(document).ready(function(){

    //내비게이션
    $('.menu>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    })

    //세로 슬라이드


    //레이어 팝업창

});