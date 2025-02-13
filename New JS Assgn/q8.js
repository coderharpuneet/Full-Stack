// Count words
let str="urwev435i@bw";
let count=0;

for(let i=0;i<str.length;i++){
    if(str[i]>='a' && str[i]<='z' || str[i]>='A' && str[i]<='Z') count++;
}
console.log(count);