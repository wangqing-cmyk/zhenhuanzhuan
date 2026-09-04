//显示
$(".btn-wrapper").click(function(){
    $(this).find(".video-wrapper").show()
})

//隐藏
$(".close-btn").click(function(){
    $(this).parents(".video-wrapper").hide()
    // 阻止事件冒泡
    return false;
})