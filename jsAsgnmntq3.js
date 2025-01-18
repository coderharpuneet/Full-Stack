/*
Student Age Per Section ALOT

<12 >90 A
<12 <90 B
>12 --- C
*/ 
let section;
let age=11;
let marks=89;
if(age>12){
    section="C";
}
else{
    if(marks>=90){
        section="A";
    }
    else{
        section="B";
    }
}
console.log(section);