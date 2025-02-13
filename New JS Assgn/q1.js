let names=['Harpuneet', 'Hornet', 'Ram','Bob','Raghav'];
let target='Harpuneet';
for(let i=0;i<names.length;i++){
    if(names[i]==target){
        console.log('Found');
        break;
    }
    else{
        console.log('Not Found');
    }
}