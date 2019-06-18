function callback(erreur,fonctionne){
for(index in fonctionne)
console.log(fonctionne)

}




document.querySelector("#run").addEventListener("click", ()=>{
    window.lib.getPosts(callback);
})