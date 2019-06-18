

  document.querySelector("#run").addEventListener("click", ()=>{
    window.lib.getPosts().then((elem) => console.log(elem))
  })