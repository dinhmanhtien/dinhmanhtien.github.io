function sum(...args) {

    return args.reduce((a, b) => a + b);
}

function multiply(...args) {
    return args.reduce((a, b) => a * b);
}

function reverse(str) {
    return str.split("").reverse().join("");
}


function filterLongWords(a, num) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].length < num) {
            a.splice(i, 1);
        }
    }
    return a;
}