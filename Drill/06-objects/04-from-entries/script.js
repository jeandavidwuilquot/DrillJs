


  (() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    let regroup = {}
    
    keys.forEach((value, i) => {
        regroup[value] = values[i];
    })
    
    document.querySelector('#run').addEventListener('click', () => {
        let obj = Object.fromEntries(Object.entries(regroup));
        for (let i in obj) {
            console.log(i, obj[i])
        }
    })
    })();
    
    
    
    
    
