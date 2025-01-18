/*
using Switch performs

=>Odd / Even
=>Winter(12,1,2) summer(3,4,5)
auto(6,7,8) Spring(9,10,11)
=>Day name (1-7) print
*/


//Odd even
let num=8;
let flag=true;
if(num%2==0){
    flag=true;
}
else{
    flag=false;
}
switch(flag){
    case flag==true:
        console.log("Even");
        break;
    case flag==false:
        console.log("Odd");
        break;
    default:
        console.log("Not a number");
        break;
}


//Seasons
let month=8;
switch(month){
    case month=1:
        console.log("Winter");
        break;
    
    case month=2:
        console.log("Winter");
        break;

    case month=3:
        console.log("Summer");
        break;
    case month=4:
        console.log("Summer");
        break;
    case month=5:
        console.log("Summer");
        break;
    case month=6:
        console.log("Auto");
        break;
    case month=7:
        console.log("Auto");
        break;
        
    case month=8:
        console.log("Auto");
        break;
        
    case month=9:
        console.log("Spring");
        break;
    case month=10:
        console.log("Spring");
        break;
    case month=11:
        console.log("Spring");
        break;
        
    case month=12:
        console.log("Winter");
        break;

        
    default:
        console.log("Not a month");
        break;
}


//Day name
let day=5;
switch(day){
    case day=1:
        console.log("Sunday");
        break;
    case day=2:
        console.log("Monday");
        break;
    case day=3:
        console.log("Tuesday");
        break;
    case day=4:
        console.log("Wednesday");
        break;
    case day=5:
        console.log("Thursday");
        break;
    case day=6:
        console.log("Friday");
        break;
        
    case day=7:
        console.log("Saturday");
        break;
        
    default:
        console.log("Not a day");
        break;
        
}