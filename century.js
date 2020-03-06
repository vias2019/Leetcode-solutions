// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer year

// A positive integer, designating the year.

// Guaranteed constraints:
// 1 ≤ year ≤ 2005.

// [output] integer

// The number of the century the year is in.
function centuryFromYear(year) {
    var len = year.toString();
    console.log(len);
    console.log(typeof(len));
    console.log(len.length);
    console.log(len.charAt(1));
    if (len.length ==1) {
        console.log( 1);
    } else if (len.length ==2) {
        console.log( 1);
    } else if (len.length ==3 && len.charAt(2) == 0 && len.charAt(3)==0) {
        console.log( parseInt(len.charAt(0)));

    } else if (len.length ==3 && (len.charAt(2) != 0 || len.charAt(3)!=0)) {
        console.log( parseInt(len.charAt(0))+1);
    }
    else if (len.length == 4 && len.charAt(2) == 0 && len.charAt(3) == 0) {
        var comb=len.charAt(0)+len.charAt(1);
        console.log(parseInt(comb));
    } else if (len.length == 4 && (len.charAt(2) != 0 || len.charAt(3) != 0)){
        var comb =len.charAt(0)+len.charAt(1);
        console.log(parseInt(comb)+1);
    }
}
centuryFromYear(1905);