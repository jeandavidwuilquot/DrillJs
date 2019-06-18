/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let nb1=document.querySelector("#op-one")
let nb2=document.querySelector("#op-two")

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let vae = parseInt(nb1.value) + parseInt(nb2.value);
        alert (vae);
        
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let a =parseInt(nb1.value) - parseInt(nb2.value);
        alert (a);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let b =parseInt(nb1.value) * parseInt(nb2.value);
        alert (b);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let d =parseInt(nb1.value) / parseInt(nb2.value);
        alert (d);
    });
