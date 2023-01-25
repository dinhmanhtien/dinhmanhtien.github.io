function myFunctionTest(expected, found) {
    console.assert(expected === found, "TEST FAILED.  Expected " + expected + " found " + found);
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
    
}

function myFunctionTestArr(expected, found) {
    var result = true;
    if (expected.length !== found.length) {
        result = false;
    } else {
        for (var i = 0; i < expected.length; i++) {
            if (expected[i] !== found[i]) {
                result = false;
                break;
            }
        }
    }




    if (result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log('\n')
/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log('\n')
function isVowel(a) {
    if (a.length != 1) {
        return false;
    }
    a = a.toUpperCase();

    const vowelList = ['A', 'E', 'I', 'O', 'U', 'Y', 'W'];
    if (vowelList.includes(a)) {
        return true;
    } else {
        return false;
    }

}

console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel('d') is false  " + myFunctionTest(false, isVowel('d')));
console.log("Expected output of isVowel('E') is true  " + myFunctionTest(true, isVowel('E')));
console.log('\n')
function sum(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of sum('a') is 0a  " + myFunctionTest('0a', sum('a')));
console.log('\n')
function multiply(a) {
    var multiply = 1;
    for (var i = 0; i < a.length; i++) {
        multiply = multiply * a[i];
    }
    return multiply;
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of multiply([3,7,4,5]) is 420  " + myFunctionTest(420, multiply([3, 7, 4, 5])));
console.log('\n')
function reverse(a) {
    var b = "";
    for (var i = a.length - 1; i >= 0; i--) {
        b = b + a.charAt(i);
    }
    return b;
}

console.log("Expected output of reverse('abcd') is dcba  " + myFunctionTest('dcba', reverse('abcd')));
console.log("Expected output of reverse('jag Testar') is ratseT gaj  " + myFunctionTest('ratseT gaj', reverse('jag Testar')));
console.log('\n')
function findLongestWord(a) {
    var longest = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i].length > longest) {
            longest = a[i].length;
        }
    }
    return longest;
}

console.log("Expected output of findLongestWord(['a','bbb','ascb']) is 4  " + myFunctionTest(4, findLongestWord(['a', 'bbb', 'ascb'])));
console.log("Expected output of findLongestWord(['a','bbb','asddcb']) is 6  " + myFunctionTest(6, findLongestWord(['a', 'bbb', 'addscb'])));
console.log('\n')
function filterLongWords(a, num) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].length < num) {
            a.splice(i, 1);
        }
    }
    return a;
}

console.log("Expected output of filterLongWords(['a','bbb','ascb', 'mmmm'], 3) is ['bbb','ascb','mmmm'],  " + myFunctionTestArr(['bbb', 'ascb', 'mmmm'], filterLongWords(['a', 'bbb', 'ascb', 'mmmm'], 3)));
console.log('\n')


const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
})
console.log('+ multiply each element by 10: '+ b.toString())
document.writeln(b.toString() + "<br/>");


const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log('+ array with all elements equal to 3: ' + c.toString())
document.writeln(c.toString() + "<br/>");


const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log('+ the product of all elements: '+ d)
document.writeln(d + "<br/>");

// const d2 = a.find(function (elem) { return elem > 1; }); //3
// const d3 = a.findIndex(function (elem) { return elem > 1; }); //1
// document.writeln(d2 + "<br/>");
// document.writeln(d3 + "<br/>");