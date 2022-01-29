// inch to feet
/* function inchToFeet(inch) {
    return inch / 12;
}

var result1 = inchToFeet(24);
console.log(result1);
var result2 = inchToFeet(64);
console.log(result2); */


// mile to kilometer
/* function mileToKiloMeter(mile) {
    return mile / 1.60934;
}
var result3 = mileToKiloMeter(30);
console.log(result3);
var result4 = mileToKiloMeter(20);
console.log(result4); */

// even number and odd number
/* function evenOddNumber(number) {
    if (number % 2 == 0) {
        console.log("even number");
    } else {
        console.log("odd nubmer");
    }
}
evenOddNumber(11);

function evenOddNumber(number) {
    if (number % 2 == 0) {
        return "even number";
    } else {
        return "odd nubmer";
    }
}
var result5 = evenOddNumber(11);
console.log(result5);
var result6 = evenOddNumber(12);
console.log(result6); */


// leap year
/* function leapYear(year) {
    return (year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0);
}
var result7 = leapYear(2032);
console.log(result7); */

// factorial Number
/* function factorialNumber(x) {
    var factorial = 1;
    for (let i = 1; i <= x; i++) {
        factorial = factorial * i
    }
    return factorial

}
var total = factorialNumber(5);
console.log(total); */

/* function factorialNumber(x) {
    var factorial = 1;
    var i = 1;
    while (i <= x) {
        factorial *= i;
        i++;
    }
    console.log(factorial);

}
factorialNumber(5); */

/* function factorialNumber(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial *= i;
        i--;
    }
    return factorial;
}
const result = factorialNumber(5);
console.log(result); */

function factorialRecursive(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}
var result = factorialRecursive(5);
console.log(result);