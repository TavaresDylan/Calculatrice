/*On récupère la variable d'entré dans l'input*/
let output_value = document.getElementById("output").value
let output = document.getElementById("output")
let operator = false
console.log(operator)

/* On récupère l'id du boutton */
function get_id(id=this.id){
    //console.log("get_id : "+id)

    var inputValue = document.getElementById(id).innerHTML
    console.log("inputValue : "+inputValue)

    if (operator == true){
        document.getElementById("output").value = ""
        operator = false
    }
    if (output.value > 9999){
        console.log("!! Erreur de longueur !!")
    }else{
            output.value += inputValue
        }
}
/* Fonction qui récupère la valeur de l'élément par rapport à son id */
function get_value(){
    var first_value = document.getElementById("output").value
    console.log("Première valeur: "+first_value)
}
/* Fonction pour insérer la valeur d'entré dans le cadre d'affichage */
function set_value(id){
    output.value = 
}

function add(){
    console.log("Addition : ")
    operator = true
    log_value1 = document.getElementById("output").value
    console.log("première valeur retenue : "+log_value1)
    console.log("operateur passe à : "+operator)
    
}

function get_result(){
    log_value2 = document.getElementById("output").value
    document.getElementById("output").value = ""
    result = parseInt(log_value1) + parseInt(log_value2)
    console.log(log_value1)
    console.log(log_value2)
    console.log(result)
    document.getElementById("output").value = result
    operator = true
}
