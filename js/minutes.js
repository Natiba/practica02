/*
3. Minutos a segundos
Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.
*/

let minutes = prompt("Enter some minutes, please");
let seconds = minutes * 60;

let answerMin = document.getElementById("minutes").innerHTML = `
Your number for minutes is <b>${minutes}</b> and passed to seconds is <span>${seconds}</span>
`