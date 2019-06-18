(() => {
    document.querySelector('#run').addEventListener('click', () => {
        window.lib.getPosts().then((elem) => {
            elem.forEach(element => {
                let id = element.id;
                window.lib.getComments(id).then((comment) => {
                    element.comment = comment;
                })
            });
            console.log(elem)
        })
    })

})()