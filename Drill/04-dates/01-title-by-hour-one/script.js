let texte=document.querySelector("#target");


let now= new Date();
let heure= now.getHours();
if(heure<18){
    
    let texte=document.querySelector("#target").innerHTML="Bonjour";
}
else{
    let texte=document.querySelector("#target").innerHTML="Bonsoir"; 
}
