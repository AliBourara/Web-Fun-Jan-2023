function alertCity(){
    alert("Loading weather report...")
}

function removeCard(id){
    document.getElementById(id).remove();
}


var celsius = "°C", fahrenheit = "°F"
var tempElements = document.getElementsByName("tempValue");
function chooseUnity(element){
for(var i =0;i<tempElements.length;i++){
    var tempElement = tempElements[i];
    if(element.value == fahrenheit ){
        tempElement.textContent = Math.floor((tempElement.textContent*1.8000) +32.00);
    } else {
        tempElement.textContent = Math.floor((tempElement.textContent-32.00)/1.8000);
    }
}

}