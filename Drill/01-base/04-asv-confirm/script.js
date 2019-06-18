/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
})();

function toi(){
let age=prompt("Quel est ton âge?");
let sexe=prompt("Quel est ton sexe?");
let ville=prompt("Quel est ta ville?");
if (confirm(`Vous avez ${age} vous êtes un ${sexe} et vous habitez à ${ville}`)){
    alert ("Heureux de vous rencontrer")}
    else{
toi()
    }
}
toi()
