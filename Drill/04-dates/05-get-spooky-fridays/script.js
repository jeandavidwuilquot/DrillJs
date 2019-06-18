



function vendredi13(annee) {
    let resultat = [];
    for (let mois=0; mois<12; mois++) {
        let  a= new Date(annee,mois,13);
        if(a.getDay() == 5){
          resultat.push(a.toLocaleString("fr-FR",{
              month:'long'
          }))
       }
    }
    return resultat;                            
}



document.querySelector("#run").addEventListener("click", () => {
    const mois = document.querySelector('#year').value;
        alert(vendredi13(mois));
  })