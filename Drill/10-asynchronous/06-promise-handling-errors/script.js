document.querySelector("#run").addEventListener("click", ()=>{
    window.lib.getPersons().then((elem) =>{
        if(elem != undefined){
            console.log(elem)
        }
        else{
            console.error("erreur")
        }

    })
  })