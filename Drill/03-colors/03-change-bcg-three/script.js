
let a=document.querySelector("body");
let b=document.querySelector("#run");


b.addEventListener("click", () => {
    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    a.style.backgroundColor=color;
});
