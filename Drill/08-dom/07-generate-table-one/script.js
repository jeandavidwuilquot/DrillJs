let table = document.getElementById("target")
let newElement = document.createElement("table");
target.appendChild(newElement);
newElement.setAttribute("id", "tab")

function creerTableau() {
    let tableau = document.getElementById("tab");
    let header = tableau.createTHead();
    let row = header.insertRow(0);
    for(let i=0;i<10;i++){
        header.insertRow()
    }
    let cell = row.insertCell(0);
}
creerTableau()
console.log(table)