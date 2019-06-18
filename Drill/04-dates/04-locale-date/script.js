function dateFr()
{
     // les noms de jours / mois
     let jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
     let mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
     // on recupere la date
     let date = new Date();
     // on construit le message
     let message = jours[date.getDay()] + " ";   // nom du jour
     message += date.getDate() + " ";   // numero du jour
     message += mois[date.getMonth()] + " ";   // mois
     message += date.getFullYear();
     return message;
}
function heure()
{
     var date = new Date();
     var heure = date.getHours();
     var minutes = date.getMinutes();
     if(minutes < 10)
          minutes = "0" + minutes;
     return heure + "h" + minutes;
}
alert(dateFr());
alert(heure());

