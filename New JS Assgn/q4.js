// print unique values.
let arr=["a", "b", "c", "d", "e","a","b"];
for(let i=0;i<arr.length;i++){
    let flag=0;
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j] && i!=j){
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(arr[i]);
    }
}