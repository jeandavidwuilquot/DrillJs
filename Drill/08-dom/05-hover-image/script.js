let img =document.querySelector("img");
let b=img.getAttribute("src");

let c=img.getAttribute("data-hover");

img.addEventListener("mouseover", () =>{

    img.src = c
})
img.addEventListener("mouseout", () =>{

    img.src = b
})