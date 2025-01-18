/*
For /while
1 3 5 7 9...
0 2 4 6 8...
10 8 6 4 ...
1,1,2,3,5,8,13...
1,10,100,1000...
1,3,6,10,15...
1,4,9,16.....
1,2,6,24,120....
1,5,2,6,3,7......
1,0,1,0,1,0...
*/

// 1 3 5 7 9....
console.log("Pattern 1");
for(let i=1;i<10;i+=2){
    console.log(i);
}


// 0 2 4 6 8...
console.log("Pattern 2");
for(let i=0;i<=10;i+=2){
    console.log(i);
}


// 10 8 6 4...
console.log("Pattern 3");
for(let i=10;i>=0;i-=2){
    console.log(i);
}



// 1,1,2,3,5,8,13...
console.log("Pattern 4");
let a=1;
let b=1;
let c;

console.log(a);
console.log(b);
for(let i=0;i<10;i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}



// 1,10,100,1000...
console.log("Pattern 5");
let num=1;
for(let i=0;i<5;i++){
    console.log(num);
    num=num*10;
}




// 1,3,6,10,15...
console.log("Pattern 6");
let n=1;
console.log(n);
for(let i=2;i<6;i++){
    n+=i;
    console.log(n);
}



// 1,4,9,16.....
console.log("Pattern 7");
for(let i=1;i<6;i++){
    console.log(i*i);
}





// 1,2,6,24,120....
console.log("Pattern 8");
let nu=1;
for(let i=1;i<6;i++){
    nu=nu*i;
    console.log(nu);
}






// 1,5,2,6,3,7......
console.log("Pattern 9");
let au=1;
let bu=5
for(let i=1;i<10;i++){
    if(i%2==0){
        console.log(bu);
        bu++;
    }
    else{
        console.log(au);
        au++;
    }
}



// 1,0,1,0,1,0...
for(let i=1;i<10;i++){
    if(i%2==0){
        console.log(0);
    }
    else{
        console.log(1);
    }
}