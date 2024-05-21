$(document).ready(function(){

    //슬라이드 쿼리 작성
    //if~ else, setInterval
    var i = 0;     //index(array [사과, 포도, 망고, ...]) 방식으로 슬라이드 순서를 호출해오겠다. 라는 의미로 추가 변수 0을 만듦

    function slide(){     //슬라이드 자동 전환을 위한 함수
        if(i < 2){     //조건식  //if가 참이면 (i(slide index) < 2일 때) i를 1 증가시킴
            i++;
        } else {     //if가 참이 아닌 모든 경우(i > 2일 때, i를 다시 초기값(0)으로 돌려줌)
            i = 0;
        };
        
        $('.slide ul li').fadeOut();     //모든 i(slide index) li는 fade out으로 슈루룩 사라짐 
        $('.slide ul li').eq(i).fadeIn();     //i(slide index) li를 하나씩 fade in으로 슈루룩 호출함
    }

    setInterval(slide, 3000);     //slide 함수를 매 3s 마다 실행   //기본 단위 : ms(milli second)



    //메뉴1 쿼리 작성




    //메뉴2-1depth 쿼리 작성
    $('nav>ul>li').mouseenter(function(){    //mouse enter : 마우스가 nav 영역에 진입(=호버)  //메서드라서 camelCase로 안써도 됨
        $('.sub, .menuBg').stop().slideDown();     //mouse가 한번 enter 되면 동작을 멈추고 slide down 으로 드롭다운되게~
    });  
    $('nav>ul>li').mouseleave(function(){    //mouse leave : 마우스가 nav 영역을 벗어나면  //메서드라서 camelCase로 안써도 됨
        $('.sub, .menuBg').stop().slideUp();     //mouse가 한번 enter 되면 동작을 멈추고 slide down 으로 드롭다운되게~
    }); 



    //팝업 쿼리 작성
    $('.pp').click(function(){     //익명 함수
        $('.popup').show();
        return false;     //return 작성해주는 이유 : 똑딱이 버튼 만들 때
    });
    $('.button').click(function(){     //버튼으로 빠지는 구간을 경로 변경하여 제작
        $('.popup').hide();
    });

});