const gallery = [
    "../../_shared/img/bell.svg",
    "../../_shared/img/clock.svg",
    "../../_shared/img/compass.svg",
    "../../_shared/img/lemon.svg",
    "../../_shared/img/map.svg",
];

let count = 0;
document.querySelector("#next").addEventListener("click", () => {
    let img = document.querySelector("img");
    img.src = gallery[count];
    count++

   
    if (count == gallery.length) {
        count = 0
    }




})