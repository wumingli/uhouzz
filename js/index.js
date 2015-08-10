$(function () {
    $('.slide-box').slide({
        mainCell: '.bd',
        autoPlay: true,
        interTime: 4000,
        effect: 'leftLoop'
    });
    //切换
    $('.tab li').on('click', function () {
        var $parent = $(this).parent(),
            $this = $(this),
            idx = $this.index();

        $this.addClass('on')
            .siblings().removeClass('on');
        $parent.nextAll('.tab-container')
            .eq(idx).addClass('active')
            .siblings().removeClass('active');
    });
    //登录
    $('.login a').on('click', function () {
        $('.cover').fadeIn(300);
    });
    //登录框消失
    $('.cover').on('click', function () {
        $(this).fadeOut(300);
    });
    $('.cover .container').on('click', function (e) {
        e.stopPropagation();
    });
    //自动登录
    $('.auto-ck').on('click', function () {
        var isNotChecked = false;
        $(this).toggleClass('no-check');
        isNotChecked = $(this).hasClass('no-check');
        $('[name="autologin"]').val(isNotChecked ? '' : 'on');
    });
});