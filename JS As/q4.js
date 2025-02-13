// Find array with Buy(first value) Sell (second value) in sequence... find the Sum of all
// transaction
// Input: prices[] = {100,200,90,80,300,500}
// Output: 290


let prices = [100,200,90,80,300,500];
let buy=0;
let sell=0;
for(let i=0;i<prices.length;i++){
    if(i%2==0){
        buy+=prices[i];
    }
    else{
        sell+=prices[i];
    }
}
let sum=sell-buy;
console.log(sum);