async function resolve() {
    console.log('calling')
    let result = await window.lib.getPosts()
    result.forEach((value) => {
    window.lib.getComments(value.id).then((comment) => {
    value.comment = comment
    });
    })
    console.log(result)
    }
    document.querySelector('#run').addEventListener('click', () => {
    resolve()
    })
    
    
    
    
