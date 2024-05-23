$(document).ready(function(){

    //menu 동작 구현
    $('.menu>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    });
    $('.menu>li').mouseout(function(){
        $('.submenu').stop().slideUp(500);
    });

    //slide 동작 구현
    $('.slide a:gt(0)').hide();
    setInterval(function(){
        $('.slide a:first-child')
        .fadeOut(1000)     //첫 번째 a 가 서서히 사라지고(1s에 걸쳐)
        .next('a')     //다음 a가
        .fadeIn(1000)     //서서히 나타남(1s에 걸쳐)
        .end()     //재선택된 요소의 이전 요소를 선택
        .appendTo('.slide');
    }, 3000);

    //모달창 동작 구현
    $('.click').click(function(){
        $('#modal').addClass("active");     //#modal 요소에 "active" class 값을 추가
    });
    $('button').click(function(){
        $('#modal').removeClass("active");
    });
});