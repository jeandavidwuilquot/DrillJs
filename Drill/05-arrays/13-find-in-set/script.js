
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

   document.querySelector("#run").addEventListener("click", () =>{

console.log(people.size);
console.log(people.has("Alexandre"));
   })
