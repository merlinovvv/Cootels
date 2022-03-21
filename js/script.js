new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination', 
        clickable: true,
        dynamicBullets: true,
    },
});

$(document).ready(function() {
    $('.spoiler__title').click(function(event){
        if ($('.spoiler').hasClass('one')){
            $('.spoiler__title').not($(this)).removeClass('active');
            $('.spoiler__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});