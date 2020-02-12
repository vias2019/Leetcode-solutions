//Instructions: Create an algorithm which creates a new array (b-array) where elements are pulled in sequence from front and end of the original array (a-array). Response should be either “true” or “false” checking if b-array is sorted or not.
function alternatingSort(a) {
    var b = [];
    var side = "left";
    var ii=0;
    var jj=a.length-1;
    
    for (var g=0; g<a.length; g++){
    if (side == 'left') {
        for (var i = ii; i < a.length; i++) {
            b.push(a[i]);
            side = "right";
            ii=ii+1;
            break;
        }
    } else if (side == "right") {
        for (var j = jj; j > (a.length/2)-1; j--) {
            b.push(a[j]);
            side="left";
            jj=jj-1;
            break;
        }
    }}
    var sorted=[...b].sort();
    console.log(sorted);
    console.log(b);
    console.log(a);
    if (b==sorted){
        console.log(true);
        return true;
    }else{
        console.log(false);
        return false;}


}
alternatingSort([1,7,8,3,4]);