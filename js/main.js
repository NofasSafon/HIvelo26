$(function(){
    $('.bike-slider').slick({
        dots: true,
        arrows:false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
  autoplaySpeed: 2000,
    });
    $('.big-slider').slick({
        dots: true,
        arrows:false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
  autoplaySpeed: 2000,
    });
    $(".menu, .bike__column").on("click", "a", function (event) {
       //отменяем стандартную обработку нажатия по ссылке
        // если в  указанном контейнере есть ссілки на другие страниці 
        // помимо меню , они будут тоже отключені
        event.preventDefault();

        // забираем идентификатор блока с атрибутом href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь    
            top = $(id).offset().top;
        //анимируем перерход на расстояние - top за 1500мс
        $('body,html').animate({scrollTop: top}, 1500);
    });  
});