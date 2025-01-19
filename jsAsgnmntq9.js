/*
1           3 2 1
12          3 2
123         3

1           1 3 5
0 0         1 3
1 1 1       1

3           123         3 3 3
22          12          2 2
111         1           1

1           1           1
1 0         1 3         2
1 0 1       1 3 6       3 4 5
*/


/*
1
1 2
1 2 3
*/
console.log("Pattern 1");
for(let i=1;i<=3;i++){
    for(let j=1;j<=i;j++){
        console.log(j);
    }
}




/*
3 2 1
3 2
3
*/
console.log("Pattern 2");
for(let i=1;i<=3;i++){
    for(let j=1;j<=3-i+1;j++){
        console.log(3-j+1);
    }
}




/*
1
0 0
1 1 1
*/ 
console.log("Pattern 3");
for(let i=1;i<=3;i++){
    for(let j=1;j<=i;j++){
        if(i%2==0){
            console.log(0);
        }
        else{
            console.log(1);
        }
    }
}




/*
1 3 5 
1 3
1
*/
console.log("Pattern 4");
for(let i=1;i<=3;i++){
    for(let j=1;j<=3-i+1;j++){
        console.log(2*j-1);
    }
}




/*
3
2 2 
1 1 1
*/
console.log("Pattern 5");
for(let i=0;i<3;i++){
    for(let j=0;j<=i;j++){
        console.log(3-i);
    }
}




/*
1 2 3 
1 2 
1
*/
console.log("Pattern 6");
for(let i=0;i<3;i++){
    for(let j=0;j<3-i;j++){
        console.log(j+1);
    }
}




/*
3 3 3
2 2
1
*/
console.log("Pattern 7");
for(let i=0;i<3;i++){
     
}






/*
1
1 0
1 0 1
*/
console.log("Pattern 8");
for(let i=0;i<3;i++){
    for(let j=0;j<=i;j++){
        if(j%2==0){
            console.log(1);
        }
        else{
            console.log(0);
        }
    }
}




/*
1
1 3
1 3 6
*/
console.log("Pattern 9");

for(let i=1;i<=3;i++){
    var sum=0;
    for(let j=1;j<=i;j++){
        sum=sum+j;
        console.log(sum);
}
}





/*
1
2 
3 4 5
*/
console.log("Pattern 10");
let k = 1;
for (let i = 0; i < 3; i++) {
    if (i <= 1) {
        for (let j = 0; j <= 0; j++) {
            console.log(k);
            k++;
        }
    } 
    else {
        for (let j = 0; j <= i; j++) {
            console.log(k);
            k++;
        }
    }
}