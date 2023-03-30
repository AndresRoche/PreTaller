caracteres = [
    "qwertyuiopasdfghjklzxcvbnm",
    "QWERTYUIOPASDFGHJKLZXCVBNM",
    "1234567890",
    ".:,;-_!#$%&/"
]


function aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
}

var opcion = [0,1,2]


var minuscula = false
document.getElementById("minuscula").addEventListener('change', (event) => {
    if(minuscula){
        opcion.push(0)
        minuscula = false
    } else {
        let index = opcion.indexOf(0);
        if (index > -1) { 
            opcion.splice(index, 1); 
        }
        minuscula = true
    }
    console.log(opcion)
})

var mayusculas = false
document.getElementById("mayusculas").addEventListener('change', (event) => {
    if(mayusculas){
        opcion.push(1)
        mayusculas = false
    } else {
        let index = opcion.indexOf(1);
        if (index > -1) { 
            opcion.splice(index, 1); 
        }
        mayusculas = true
    }
    console.log(opcion)
})

var numeros = false
document.getElementById("numeros").addEventListener('change', (event) => {
    if(numeros){
        opcion.push(2)
        numeros = false
    } else {
        let index = opcion.indexOf(2);
        if (index > -1) { 
            opcion.splice(index, 1); 
        }
        numeros = true
    }
    console.log(opcion)
})


var punto = true
document.getElementById("punto").addEventListener('change', (event) => {
    if(punto){
        opcion.push(3)
        punto = false
    } else {
        let index = opcion.indexOf(3);
        if (index > -1) { 
            opcion.splice(index, 1); 
        }
        punto = true
    }
    console.log(opcion)
})



var pass = ""

let largo = document.getElementById("largo")
let text = document.querySelector("#pass")

document.getElementById("generar").addEventListener('click', e => {
    e.preventDefault()
    pass = ""

    for(var i = 0; i < largo.value; i++){
        pass += aleatorioLetras();
    }

    text.textContent = pass;

})

function aleatorioLetras(){
    var ale = aleatorio(0, opcion.length -1)
    var list = caracteres[opcion[ale]]
    var a = aleatorio(0,list.length-1)
    return list.charAt(a)
}

