//Numero maximo
var max = 100;

//Numero minimo
var min = 1;

//Numero aleatorio
var numero_secreto = Math.random() * (max-min) + min;

//Pasar valor a int
numero_secreto = parseInt(numero_secreto);

console.log(numero_secreto);

var mensaje  = "Ingresa un número para adivinar el numero magico";

while (true) {
    var numero_usuario = prompt(mensaje,"0");

    numero_usuario = parseInt(numero_usuario);

    if (numero_usuario === numero_secreto) {
        alert("Ganaste! Adivinaste el número secreto.");
        break;      
    }
    else if (numero_usuario === 0) {
        break;
    }
    else if (numero_usuario > numero_secreto) {
        mensaje = "Lo sentimos, el número que ingresaste es mayor al número mágico";
    }
    else if (numero_usuario < numero_secreto) {
        mensaje = "Lo sentimos, el número que ingresaste es menor al número mágico";
    }
};