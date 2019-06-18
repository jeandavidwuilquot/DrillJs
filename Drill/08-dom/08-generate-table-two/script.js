let table = document.getElementById("target")
let newElement = document.createElement("table");
target.appendChild(newElement);
newElement.setAttribute("id", "tab")

function pushTable(table,number){
  let td = document.createElement("td")
  td.innerText = number;
  table.appendChild(td);
}

function createTr(){
  return document.createElement("tr");
}

function getTable() {
  return document.getElementById("tab");
}

function creerTableau() {
  let copy = getTable();
  let row = createTr();
  for (let i = 0; i < 10; i++) {
    pushTable(row,i+1);
  }
  copy.appendChild(row);
}
creerTableau()

let resultat;

function run(){
  let copy = getTable();
  for (let i = 1; i <= 10; i++) {
    let row = createTr();
    for (e = 1; e <= 10; e++){
      resultat= `${e} x ${i} = ${e * i}`;
      pushTable(row,resultat);
    }
    copy.appendChild(row);
  }
}
run();

