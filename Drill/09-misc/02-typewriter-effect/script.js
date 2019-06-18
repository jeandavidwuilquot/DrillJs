let texte = document.querySelector("#target");
texte.innerHTML = "";
let i = 0;
let texte2 = "J'ai réussi, je suis trop content!!! J'ai réussi, je suis trop content!!!"

let speed = 0;




function Machine() {
    if (i < texte2.length) {
        document.getElementById("target").innerHTML += texte2.charAt(i);
        i++;
        speed = Math.floor(Math.random() * (500 - 10)) + 10;;
        setTimeout(Machine, speed);
    }
}

Machine()