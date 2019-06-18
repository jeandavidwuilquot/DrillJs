let output = document.getElementById("target");
let outputText = output.innerText;
output.innerText = "";
let newElement = document.createElement("span");
newElement.innerText = outputText = "00";
target.appendChild(newElement);
let a=localStorage.getItem("count");

document.getElementById("target").innerHTML=a;

let count=0;
document.querySelector("#increment").addEventListener("click", ()=>{

    if (a < 100) {
        a++;
    }
    document.getElementById("target").innerHTML=a;
    localStorage.setItem("count", a);
})

