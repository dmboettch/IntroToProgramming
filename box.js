//$(function(){
//    This is the same thing but is lazy code
//});

//$(document).ready(myApp)({
//    function(myApp)  again same
//});

$(document).ready(function(){
    var box = $('.box');
    //console.log(box);

    //box.click();

    /*box.on('click', function(){
        alert('click');
    });*/

    /*box.on('click', function(event){
        $(this).animate({
        //box.css({
        //box.animate({
            'margin-left': 900,
            'background-color': 'red'
        }, 3000, 'easeOutElastic');
    });*/
    
    box.on('click', function(event){
        var el = $(this);
        el.animate({
            'margin-left': 900,
            'background-color': 'red'
        }, 3000, 'easeOutElastic', function(){
            el.css({
                'margin-left': 20,
                'background-color': 'white'
            });
        });
    });
});

