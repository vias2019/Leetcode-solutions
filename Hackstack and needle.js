var strStr = function(haystack, needle) {
    var status = false;

    var x;

    var i = 0;
    
    if(haystack=="" || needle==""){
        return 0;}
    else{

    for (var j = 0; j < haystack.length; j++) {

 

        if (haystack.charAt(j) == needle.charAt(i)  ) {

            for (var n = j; n < needle.length+j; n++) {

                if (needle.charAt(i) === haystack.charAt(n)) {

                    status = true;

                    x = j;

                    i++;

                } else {

                    status = false;

                    x = "";

                    i=0;

                    break;

                }

            }

        }

    }

    if (status == false) {

        return("-1");

    } else { return(x); }
    }

};
//strStr("hello","ll");