// Leader Array..
// Input: [9, 170, 4, 3, 51, 20]
// Output: [170 51 20]
// 170 is greater than all the elements to its right , so 17 is a leader.
// 51 is greater than all the elements to its right ,so 51 is a Leader
// 20 has no element to its right, so 20 is a leader.
let arr=[9, 170, 4, 3, 51, 20];
let n=[];
for(let i=0;i<arr.length;i++){
    let flag=new Boolean(true);
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            flag=false;
            break;
        }
    }
    if(flag){
        n.push(arr[i]);
    }
}
console.log(n);