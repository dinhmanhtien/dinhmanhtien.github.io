window.onload = function () {
    var start = false;
    $('.boundary').hover(function () {
        if(start){
        console.log('fail');
        
        $('#start').css('background-color', '#88ff88');
        $('.boundary').css('background-color', 'red');
        start = false;
        alert('!!!! FAILED - PLEASE TRY AGAIN !!!!')
        }

    });

    $('#start').click(function(){
        start = true;
        $('.boundary').css('background-color', '#eeeeee');
        $('#start').css('background-color', 'red');
    });

    $('#end').hover(function () {
        if(start){
        console.log('win');
        $('#start').css('background-color', '#88ff88');
        alert('!!!! WIN !!!!')
        start = false;
        }

    });
}