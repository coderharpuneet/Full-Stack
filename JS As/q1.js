// Write code to shift all Zero... in begin (if parameter is 1) in end (if parameter is 2)
// example..
// shift_ZERO(a,1)
// shift_ZERO(a,2)
// if a=[11,0,22,33,0,55,0] then result must be according to function call.
let a=[11,0,22,33,0,55,0];
shift_ZERO(a,1);
console.log(a);
shift_ZERO(a,2);
console.log(a);
function shift_ZERO(a,p){
    let count=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==0){
            count++;
        }
    }
    let n=[];

    if(p==1){
        for(let i=0;i<a.length;i++){
            if(a[i]!=0){
                n.push(a[i]);
            }
        }
        for(let i=0;i<count;i++){
            n.unshift(0);
        }
    }
    else if(p==2){
        for(let i=0;i<a.length;i++){
            if(a[i]!=0){
                n.push(a[i]);
            }
        }
        for(let i=0;i<count;i++){
            n.push(0);
        }
    }
    for(let i=0;i<a.length;i++){
        a[i]=n[i];
    }
}