let slider=document.getElementById("slider");
let output=document.getElementById("target");

output.innerHTML = slider.value



slider.oninput = function() {
output.innerHTML = this.value;
}

