


document.getElementById('run').addEventListener('click', async function(){;

 const heroes= await fetch('http://localhost:3000/heroes', {
    method: 'POST',
    headers :{"Accept": 'application/json',
    "Content-Type":"application/json"

    },
    body:JSON.stringify({
    name:document.querySelector("#hero-name").value,
    alterEgo:document.querySelector("#hero-alter-ego").value,
    abilities:document.querySelector("#hero-powers").value.split(" , ")


    })
 })
const content=await heroes.json();
console.log(content)
})