/*
Tax slab
Income Rate
>3 L 7% of Income
>7L 10%
>10 L 13%
*/ 

let salary=1300000;
let tax=0;
if(salary<=300000){
    tax=0;
}
else if(salary>300000 &&salary<=700000){
    tax=0.07*salary;
}
else if(salary>700000 &&salary<=1000000){
    tax=0.1*salary;
}
else if(salary>1000000){
    tax=0.13*salary;
}
console.log(tax);