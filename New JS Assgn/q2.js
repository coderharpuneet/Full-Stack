let names=['Harpuneet', 'Hornet', 'Ram','Bob','Raghav'];
for(let i=0;i<names.length;i++){
    for(let j=i+1;j<names.length;j++){
        if(names[i].length>names[j].length){
            let temp=names[i];
            names[i]=names[j];
            names[j]=temp;
        }
    }
}
console.log(names);