/*Q.1 Prepare Ebill...

Unit consumed Rates
1-200 0
next 300 1.5Rs per
next 400 3.5 Rs per
next -- 7 Rs per

Hint 600 unit (600-200-300-100) bill=0+450+350*/
let units=1100;
let bill=0;
if(units>0){
    bill=0;
    units-=200; //900
}
if(units>0 && units>=300){
    bill+=300*1.5; //450
    units-=300; //600
}
else if(units>0 && units<300){
    bill+=units*1.5;
    units=0;
}
if(units>0 && units>=400){
    bill+=400*3.5; //1850
    units-=400;  //200
}
else if(units>0 && units<400){
    bill+=units*3.5;
    units=0;
}
if(units>0){
    bill+=units*7;
}
console.log(bill);