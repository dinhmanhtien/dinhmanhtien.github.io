const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var sum = 0;

let askNumber = function (callbackFn) {
    readline.question('what number do you want? ', number => {
        if (!isNaN(number)) {
            console.log(`Number: ${number}`);
            sum += Number(number);
            callbackFn(callbackFn);
        } else {
            if (number.toLowerCase() == 'stop') {
                console.log(`##### sum = ${sum}`);
                readline.close();
            } else {
                console.log('Please enter a valid number!');
                callbackFn(callbackFn);
            }
        }
    });

}

askNumber(askNumber);