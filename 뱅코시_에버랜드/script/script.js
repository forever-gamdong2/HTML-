$(document).ready(function(){

    //메인 슬라이드   
    let i = 0,
    slideCount = $('.boxes li').length;

    function slide (index){
        $('.slidelist').animate({left: -100 * index + '%'}, 300);
        i = index;
    };

    $('.left').click(function(){
        if(i===0){
            slide(slideCount-1);
        } else{
            slide(i-1);
        };
    });

    $('.right').click(function(){
        if(i===slideCount-1){
            slide(0);
        } else{
            slide(i+1);
        }
    });

    //photo 슬라이드
    let currentIndex = 0;
    const totalSlides = $('.photo_slide ul li').length;

    function updateSlides() {
        $('.photo_slide li').removeClass('center-slide left-slide right-slide');
        $('.photo_slide li').css('transform', '');

        // Current, previous, and next slide indices
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        const nextIndex = (currentIndex + 1) % totalSlides;

        // Add classes and positions
        $('.photo_slide li').eq(currentIndex).addClass('center-slide');
        $('.photo_slide li').eq(prevIndex).addClass('left-slide').css('transform', 'translateX(-200px)');
        $('.photo_slide li').eq(nextIndex).addClass('right-slide').css('transform', 'translateX(200px)');
    }

    $('.btn_prev').click(function(e) {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlides();
    });

    $('.btn_next').click(function(e) {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlides();
    });

    // Initial update
    updateSlides();

    //makeup 슬라이드
    let currentMakeupIndex = 0;
    const totalMakeupSlides = $('.makeup_slide ul li').length;

    function updateMakeupSlides() {
        $('.makeup_slide li').removeClass('center-slide left-slide right-slide');
        $('.makeup_slide li').css('transform', '');

        // Current, previous, and next slide indices
        const prevMakeupIndex = (currentMakeupIndex - 1 + totalMakeupSlides) % totalMakeupSlides;
        const nextMakeupIndex = (currentMakeupIndex + 1) % totalMakeupSlides;

        // Add classes and positions
        $('.makeup_slide li').eq(currentMakeupIndex).addClass('center-slide');
        $('.makeup_slide li').eq(prevMakeupIndex).addClass('left-slide').css('transform', 'translateX(-200px) rotate(-150deg)');
        $('.makeup_slide li').eq(nextMakeupIndex).addClass('right-slide').css('transform', 'translateX(200px) rotate(150deg)');
    }

    $('.btn_prev2').click(function(e) {
        e.preventDefault();
        currentMakeupIndex = (currentMakeupIndex - 1 + totalMakeupSlides) % totalMakeupSlides;
        updateMakeupSlides();
    });

    $('.btn_next2').click(function(e) {
        e.preventDefault();
        currentMakeupIndex = (currentMakeupIndex + 1) % totalMakeupSlides;
        updateMakeupSlides();
    });

    updateMakeupSlides();
    
});