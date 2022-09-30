var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var number = document.getElementById("number");

function add(){
document.getElementById("number").innerHTML ++;
}
function subtract(){
    document.getElementById("number").innerHTML --;
}
function restart(){

    document.getElementById("number").innerHTML = "0"
}
function effects(obj){
obj.style.transform = "scale(0.8)"
}