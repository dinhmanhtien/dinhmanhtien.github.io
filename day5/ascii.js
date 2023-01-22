const seperator = '=====\n';
var idx = 0;
var intervalTime = 400;
var interval;
var running = false;

function startAnimation() {
    idx = 0;
    var selectedAnimationOption = document.getElementById('animation').value;
    var fontSize = document.getElementById('fontsize').value;
    // console.log('fontsize '+ fontsize);
    if (selectedAnimationOption == 'Blank') {
        document.getElementById("text-area").value = '';
        stopAnimation();
        return;
    }

    var fontSizeVal;
    switch (fontSize) {
        case 'Tiny':
            fontSizeVal = 'xx-small';
            break;
        case 'Small':
            fontSizeVal = 'smaller';
            break;
        case 'Large':
            fontSizeVal = 'x-large';
            break;
        case 'Extra Large':
            fontSizeVal = 'xx-large';
            break;
        case 'XXL':
            fontSizeVal = 'xxx-large';
            break;
        case 'Medium':
            fontSizeVal = 'large';
            break;
        default:
            fontSizeVal = 'large';
    }
    console.log('fontSizeVal ' + fontSizeVal);
    document.getElementById("text-area").style.fontSize = fontSizeVal;

    var animations = ANIMATIONS[selectedAnimationOption].split(seperator);
    interval = setInterval(showAnimation, intervalTime, animations);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    ;
}

function stopAnimation() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval(interval);

}

function showAnimation(animations) {
    document.getElementById("text-area").value = animations[idx];
    idx = idx + 1;
    if (idx == animations.length) {
        idx = 0;
    }
}

function turboFunction() {
    if (document.getElementById('turbo').checked) {
        intervalTime = 100;
    } else {
        intervalTime = 350;
    }
    if(document.getElementById("start").disabled == true){
        stopAnimation();
        startAnimation();
        }
}

function animationOnChange(){
    if(document.getElementById("start").disabled == true){
        stopAnimation();
        startAnimation();
        }
}