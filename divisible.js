// Take n-number and put it in array where all numbers divisible by 3 will be substituted by "Fizz", by 5 - "Buzz", by both 3 and 5 - "FizzBuzz".

function fizzBuzz(n) {
    var arr = [];
    if (n > 0) {
        for (var i = 1; i < n; i++) {
            var element;
            if (i % 3 === 0) {
                element = "Fizz";
            } else if (i % 5 === 0) {
                element = "Buzz";
            } else if (i % 3 === 0 && i % 5 === 0) {
                element = "FizzBuzz";
            }else{element=i;}
        
        arr.push(element);
        }


    } else { console.log(0); }
    console.log(arr);
}
fizzBuzz(15);