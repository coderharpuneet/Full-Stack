/*
Score in PCM(out of 100 Each )
Fail if in any one subject score <36, Total,Per
*/
let phy=88;
let chem=95;
let math=89;
if(math<36 || phy<36 || chem<36){
    console.log("Fail");
}
console.log(`Total Score: ${phy+chem+math}`);
console.log(`Percentage: ${((phy+chem+math)/3)}`);