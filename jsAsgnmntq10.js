/* Calculate Bill using P,Q Disc 10%, net But Disc can not be more than 550/- */
let p=10000;
let q=3;
let bill=p*q;
let disc=bill*0.1;
if(disc>550){
    disc=550;
}
bill-=disc;
console.log(bill);