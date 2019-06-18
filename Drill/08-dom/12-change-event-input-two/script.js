
let a=document.querySelector("#pass-one").addEventListener("keypress", () => {
    
    let compt=0;
    let b=document.querySelector("#pass-one").value;
    
    let d=document.querySelector("input");
    let e=document.querySelector("#validity");

    for(let i=0;i<b.length;i++){
    if(!isNaN(b[i])){
    compt++
    }}
    if(compt>=2){
        if(b.length>=7){
   
    e.innerText="Ok";
    }
    }


    
    
    
    
    
    
    
    
     
    
    })