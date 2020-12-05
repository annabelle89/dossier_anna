$(document).ready(function() {
    var $toggleButton = $('.toggle-button');
    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
    });
});
$(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap');

    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
});
$(document).ready(function() {
    $('#img1').mouseover(function() {
        $(this).attr('src', 'asset/img/asia.jpeg');
    }).mouseout(function() {
        $(this).attr('src', 'asset/img/asia.jpeg');
    });
});