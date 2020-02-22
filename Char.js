// Take a string and move every letter to +1. For example, "c" will become "d".

function alphabeticShift(inputString) {
    
  
    var result="";
for (var i=0; i<inputString.length;i++){
    var arrNumber=inputString.charCodeAt(i);
    if(inputString[i]=="z"){
        result=result+"a";
    }else{
    result=result+String.fromCharCode(arrNumber+1);}
}


console.log(result);
}
alphabeticShift("crazy");