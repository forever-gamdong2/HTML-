$(document).ready(function(){

    //내비게이션
    $('.menu>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    })

    //슬라이드
    $('.slidelist a:gt(0)').hide();
    setInterval(function(){
        $('.slidelist a:first').fadeOut(1000)
        .next('a').fadeIn(1000)
        .end().appendTo('.slidelist');
    }, 3000);

    //모달 레이어 팝업
    $('.notice li:first').click(function(){
        $("#modal").addClass("active");
    });
    $('button').click(function(){
        $("#modal").removeClass("active");
    });



});