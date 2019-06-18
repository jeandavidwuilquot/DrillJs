document.querySelector("#run").addEventListener("click", () => {

    let a =document.querySelector("#pass-one").value;
   
    let b =document.querySelector("#pass-two").value;
   



    if(a!==b){
        let c=document.querySelectorAll("input")[0].classList.add("error");
        
        let d=document.querySelectorAll("input")[1].classList.add("error");
  }
  
})
