(() => {
    function resolve() {
    return new Promise(resolve => {
    resolve('resolved');
    
        });
      }
    document.querySelector('#run').addEventListener('click',()=>{
        async function exer (){
            console.log('calling')
            let result = await resolve();
            window.lib.getPosts().then((elem) => console.log(elem))
        }
        exer()
    })
    })();
    
    