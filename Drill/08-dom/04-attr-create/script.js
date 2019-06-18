let a= document.getElementById("source");
let b=source.getAttribute("data-image");


let c=document.getElementById("target");
let newElement=document.createElement("img");
target.appendChild(newElement);
newElement.setAttribute("target",b);

a.removeAttribute("data-image");