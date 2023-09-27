//arreglo que contiene las respuestas correctas
let correctas = [3,1,2,4,3];

//arreglo donde se guardan las respuestas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma el num de pregunta y el input elegido de esa pregutna
function respuesta(num_pregunta, seleccionada){
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //el siguinte codigo es para poner en color
    //el fondo de los inputs para guando elige otra opcion 
    //armo el id para seleccionar el section correspondiente 
    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    //doy el color a label seleccionad0
    seleccionada.parentNode.style.backgroundColor = "#cec0fc"

}

//function que compara los arreglos para saber cuantas estiveram correctas
function corrigir(){
    cantidad_correctas = 0;
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
                cantidad_correctas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidad_correctas;
}