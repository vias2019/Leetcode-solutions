var divide = function(dividend, divisor) {
    var newArray=[];
    var count=1;
    var calc=0;
    var result=0;
    for (var i=0; i<Math.abs(dividend); i++){
        var x =newArray.push(count);
        count++;
        calc++;
        if (calc===Math.abs(divisor)){
            calc=0;
            result++;
        }
    } if (divisor==0){
        return "";
    }else if(dividend==0){
        return 0;
    }else if (dividend<0 && divisor<0){
        return (result);
    }else if(dividend<0 || divisor<0){
        return ("-"+result);
    }else{return result;}
    
};
console.log(divide(-1000,-1));