



let node =  document.querySelectorAll(".field input");
let a=document.querySelectorAll(".field button");
let c=document.querySelector("#target").innerHTML;

c.substring=

console.log(c.substring(1, 3));

function countdown() {
    for(let i = 0; i < node.length;i++){
        let acNode = node[i];
        let dataMin = acNode.getAttribute("data-min")
        let dataMax = acNode.getAttribute("data-max")
        let set=setInterval(() => {
            if(acNode.value >= dataMax){
                acNode.value = dataMin
            }else{
                acNode.value++;
            }
        },10)







        
        a[i].addEventListener("click",()=>{
            if(a[i].innerText == 'Stop'){
                clearInterval(set);
                a[i].innerText = 'Play'
            }else{
                a[i].innerText = 'Stop'
                set=setInterval(() => {
                    if(acNode.value >= dataMax){
                        acNode.value = dataMin
                    }else{
                        acNode.value++;
                    }
                },10)
            }
        })
       
    }
}

countdown();