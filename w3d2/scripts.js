window.onload = function () {


    var interval = setInterval(increaseCircleSize, 250);

    function increaseCircleSize() {
        var height = $('#circle').height();
        $('#circle').height(height + 10);
        $('#circle').width(height + 10);

    }

    $('#circle').click(removeCircle);

    function removeCircle() {
        console.log('clicked ... ');
        clearInterval(interval);
        $('#circle').css("display","none");

    }
}