//timer
/*$('#clock').countdown('2020/10/10', function(event) {
    var $this = $(this).html(event.strftime(''
        + '<div class="wrapTimerItem"><div class="bgTimer">%H</div><div class="timerTitle">часов</div></div>'
        + '<div class="wrapTimerItem"><div class="bgTimer">%M</div><div class="timerTitle">минут</div></div>'
        + '<div class="wrapTimerItem"><div class="bgTimer">%S</div><div class="timerTitle">секунд</div></div>'));
});*/
//scroll
$(document).ready(function(){
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    new WOW().init();

});