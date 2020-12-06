/*On récupère la variable d'entré dans l'input*/
let output_value = document.getElementById("output").value
let output = document.getElementById("output")
var input_value = document.getElementById("nb1").innerHTML
//console.log("output value : "+output_value)
//console.log("input value : "+input_value)
var input = document.getElementById("")

/* On récupère l'id du boutton */
function get_id(id=this.id){
    console.log("get_id : "+id)

    var inputValue = document.getElementById(id).innerHTML
    console.log("inputValue : "+inputValue)

    output.value += inputValue
}
/* Fonction qui récupère la valeur de l'élément par rapport à son id */
function get_value(){
    var inputValue = document.getElementById(id).innerHTML
    console.log(inputValue)
}
/* Fonction pour insérer la valeur d'entré dans le cadre d'affichage */
function set_value(id){
    output.innerHTML
}

/* Définition de la classe */
class Calculator{

    constructor( base_number = 0) {
        this.__base_number = document.getElementById(id).innerHTML;
    }

    add(base_number){
        /*this.base_number = */
    }

    result(){

    }

    substract(){

    } 

    /* On récupère l'id du boutton */
    get_id(id=this.id){
    console.log(id)
    }

}