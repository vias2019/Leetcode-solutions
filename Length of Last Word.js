
var lengthOfLastWord = function (s) {

    var newArray = s.split(" ");
    console.log(newArray);
    if (s == "" || s == " ") {
        return 0;
    } else {

        for (var i = newArray.length - 1; i >= 0; i--) {
            if (newArray[i] != "") {
                return (newArray[i].toString().length);
            } 

        }return 0;
    }
};
console.log(lengthOfLastWord("  "));    
