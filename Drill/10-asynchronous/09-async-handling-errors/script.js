
async function resolve(){
console.log('calling')
    let result = await window.lib.getPersons().then((elem) => {
    if (elem != undefined) {
        console.log(elem);
    } else {
        console.error("erreur")
    }
})}

    document.querySelector('#run').addEventListener('click', () => {
 
        resolve()
    })