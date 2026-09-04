/*var swiper = new Swiper('.container5', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
*/

var swiper = new Swiper('.container5', { // 确保选择器与容器类名一致
    // 新版分页器配置
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    
    // 新版导航按钮配置
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    
    // 自动播放配置
    speed: 3000, 
    autoplay: {
        delay: 7000,
        disableOnInteraction: false
    },
    
    // 其他参数
    spaceBetween: 30,
    centeredSlides: true,
    
    // 确保加载最新API
    observer: true,
    observeParents: true
});