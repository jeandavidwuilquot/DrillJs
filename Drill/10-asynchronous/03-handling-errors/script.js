function callback(erreur,tableau){
    console.log(tableau)
    console.error(erreur)
}
 

 document.querySelector("#run").addEventListener("click", ()=>{

    window.lib.getPersons(callback)
    
    
 })