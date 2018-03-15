$(document).ready(function(){
    console.log('1');
    var box1 = $('.box1');
    var btn = $('.btn');

    btn.on('click', function(){
        console.log('ok');
        box1.toggleClass('box-act');
    });
});