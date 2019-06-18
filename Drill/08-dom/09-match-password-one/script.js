

document.querySelector("#run").addEventListener("click", () => {

    let a =document.querySelector("#pass-one").value;
   
    let b =document.querySelector("#pass-two").value;
   



    if(a!==b){
        let c=document.querySelectorAll("input")[0].style.borderColor="red"
        
        let d=document.querySelectorAll("input")[1].style.borderColor="red"
  }
  else{
     
    let c=document.querySelectorAll("input")[0].style.borderColor="silver"
        
    let d=document.querySelectorAll("input")[1].style.borderColor="silver" 
  }
})

