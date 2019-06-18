let output = document.getElementById("target");
let outputText = output.innerText;
output.innerText = "";

let a = document.getElementById("part-one").innerHTML;
let b = document.getElementById("part-two").innerHTML;
let c = document.getElementById("part-three").innerHTML;
let d = document.getElementById("part-four").innerHTML;

let newElement = document.createElement("span");
newElement.innerText = outputText = "460";
target.appendChild(newElement);
newElement.setAttribute("class", "tab1");


let newElement2 = document.createElement("span");
newElement2.innerText = outputText = "00";
target.appendChild(newElement2);
newElement2.setAttribute("class", "tab2");

let newElement3 = document.createElement("span");
newElement3.innerText = outputText = "00";
target.appendChild(newElement3);
newElement3.setAttribute("class", "tab3");

let newElement4 = document.createElement("span");
newElement4.innerText = outputText = "00";
target.appendChild(newElement4);
newElement4.setAttribute("class", "tab4");

document.querySelector("#part-one").addEventListener("click", () => {

    if (a >= 460 && a < 499) {
        a++;
    }
    document.querySelector(".tab1").innerHTML = a;
    document.querySelector("#part-one").innerHTML = a;

})

document.querySelector("#part-two").addEventListener("click", () => {

    if (b >= 0 && b < 99) {
        b++;
    }
    if (b < 10) {
        document.querySelector(".tab2").innerHTML = "0" + b;
        document.querySelector("#part-two").innerHTML = "0"+b;
    } else {
        document.querySelector(".tab2").innerHTML = b;
        document.querySelector("#part-two").innerHTML = b;
    }

})

document.querySelector("#part-three").addEventListener("click", () => {

    if (c >= 0 && c < 99) {
        c++;
    }
    if (c < 10) {
        document.querySelector(".tab3").innerHTML = "0" + c;
        document.querySelector("#part-three").innerHTML = "0"+c;
    } else {
        document.querySelector(".tab3").innerHTML = c;
        document.querySelector("#part-three").innerHTML = c;
    }
})

document.querySelector("#part-four").addEventListener("click", () => {

    if (d >= 0 && d < 99) {
        d++;
    }
    if (d < 10) {
        document.querySelector(".tab4").innerHTML = "0" + d;
        document.querySelector("#part-four").innerHTML = "0"+d;
    } else {
        document.querySelector(".tab4").innerHTML = d;
        document.querySelector("#part-four").innerHTML = d;
    }
})