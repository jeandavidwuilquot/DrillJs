





document.querySelector('#run').addEventListener('click', () => {
  let template = document.querySelector("#tpl-hero");
  let hero= template.content.querySelector('.hero');
  let target = document.querySelector('#target');
  fetch('http://localhost:3000/heroes')
      .then(function (response) {
          return response.json();
      })
      .then(function (myjson) {
          let list = myjson
          console.log(list)
          for (i = 0; i < list.length; i++) {
          let a = document.importNode(hero, true);
          let name = a.querySelector('.name');
          let alter=a.querySelector('.alter-ego');
          let abili=a.querySelector('.powers');
          
          name.innerHTML=list[i].name
          alter.innerHTML=list[i].alterEgo
          abili.innerHTML=list[i].abilities
          target.appendChild(a)
          }
      });
    })
