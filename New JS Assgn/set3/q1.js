let info=[  { "email": "AMAN@example.com" },  { "email": "NEERAJ@example.com" },
    { "email": "KAMAL@example.com" }, { "email": "ANIL@example.com" },
    { "email": "ARYAN@example.com" } ];
for(let i=0;i<info.length;i++){
    let temp="";
    let str=info[i].email;
    for(let j=0;j<str.length;j++){
        if(str[j]==='@'){
            temp=str.substring(0,j);
            break;
        }
    }
    console.log(temp);
    
}