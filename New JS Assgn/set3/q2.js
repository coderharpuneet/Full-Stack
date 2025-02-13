let arr1=["INR", "GBP", "USD", "AUD"];
let arr2=["GB Kingdom","Australia","India","USA"];
let arr3=[]
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==="INR" && arr2[j]==="India") {
            arr3.push(arr1[i]);
            arr3.push(arr2[j]);
        }
        else if(arr1[i]==="GBP" && arr2[j]==="GB Kingdom") {
            arr3.push(arr1[i]);
            arr3.push(arr2[j]);
        }
        else if(arr1[i]==="USD" && arr2[j]==="USA") {
            arr3.push(arr1[i]);
            arr3.push(arr2[j]);
        }
        else if(arr1[i]==="AUD" && arr2[j]==="Australia") {
            arr3.push(arr1[i]);
            arr3.push(arr2[j]);
        }
    }
}
console.log(arr3);