let d = document.querySelector("#run");

let date = new Date();
let jour = date.getDate();
let mois = date.getMonth();
let annee = date.getFullYear();

d.addEventListener("click", () => {
    let a = parseInt(document.querySelector("#dob-day").value);
    let b = document.querySelector("#dob-month").value;
    let c = document.querySelector("#dob-year").value;
    alert(`Vous avez ${annee-c} ans`)
    
    
    
});

