/* Swap two numbers without Third */
let a=25;
let b=89;
console.log("Before Swapping:");
console.log(`a: ${a}, b: ${b}`);
a=a+b;
b=a-b;
a=a-b;
console.log("After Swapping:");
console.log(`a: ${a}, b: ${b}`);