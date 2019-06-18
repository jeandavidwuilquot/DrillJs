/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let a=document.querySelector("body");
    let rouge=document.querySelector("#red");
    let vert=document.querySelector("#green");
    let jaune=document.querySelector("#yellow");
    let bleu=document.querySelector("#blue");

    rouge.addEventListener("click", () =>{
        a.style.backgroundColor="red";
    })
    vert.addEventListener("click", () =>{
        a.style.backgroundColor="green";
    })
    jaune.addEventListener("click", () =>{
        a.style.backgroundColor="yellow";
    })
    bleu.addEventListener("click", () =>{
        a.style.backgroundColor="blue";
    })

    // your code here
})();
