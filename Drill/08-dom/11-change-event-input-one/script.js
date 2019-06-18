

let c=document.querySelector("#pass-one").addEventListener("keypress", () => {
let sel=document.querySelector("input");
let max=sel.setAttribute("maxlength", 10);

let b=document.querySelector("#pass-one").value;

let c=b.length;

let a=document.getElementById("counter");
a.innerText=b.length+"/10"




console.log(c)

 

})