
document.querySelector("#run").addEventListener("click", ()=>{
    fetch("http://localhost:3000/heroes")
  .then(response => response.json())
  .then(json => console.log(json))
})
