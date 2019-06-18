function callback(erreur,articles){
    console.log(articles)
}
 function callback2(erreur, commentaires){
    console.log(commentaires)
 }

 document.querySelector("#run").addEventListener("click", ()=>{

    window.lib.getPosts(callback);
    window.lib.getComments(0,callback2);
 })