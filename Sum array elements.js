//Instructions: Calculate sum of array[i-1]+array[i]+array[i+1]. If element is undefined, return 0.
function mutateTheArray(n, a) {
    var b = [];
    for (var i = 0; i < n; i++) {
        let newValue;
        if (a[i - 1] == undefined && a[i + 1] == undefined) {
            newValue = b.push(0 + a[i] + 0);
            
        } else if (a[i - 1] == undefined || a[i + 1] == undefined){
            if (a[i - 1] == undefined) {
                newValue = b.push(0 + a[i] + a[i + 1]);

            } else if(a[i + 1] == undefined) {
                newValue = b.push(a[i - 1] + a[i] + 0);

            }
        }
        else {
            newValue = b.push(a[i - 1] + a[i] + a[i + 1]);

        }
    }
    console.log(b);

}
mutateTheArray(1,[9,1]);
