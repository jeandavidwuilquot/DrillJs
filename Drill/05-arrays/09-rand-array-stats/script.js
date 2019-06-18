let tab = [];
let a = document.querySelectorAll("table tr td");

document.querySelector("#run").addEventListener("click", () => {

            a.forEach((value) => {
                let rand = Math.round(Math.random() * 100);
                tab.push(rand);
                value.innerText = rand;
            })
            const somme = tab => tab.reduce((a,b) => a + b, 0)
            console.log(somme);
            
            
                document.getElementById("max").innerText = Math.max(...tab);
                document.getElementById("min").innerText = Math.min(...tab);
                document.getElementById("sum").innerText =tab.reduce((a,b) => a + b, 0);
                document.getElementById("average").innerText = tab.reduce((a,b) => a + b, 0) / tab.length;
            })
            