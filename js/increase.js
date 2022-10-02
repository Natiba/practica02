/*
10. Incremento
Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).
*/

let stNumber = parseInt(prompt("Enter the departure number"));
let incNumber = parseInt(prompt("Enter an Increment number"));
const output = document.querySelector("#increase").innerHTML = `
Starting number: ${stNumber}. Increase number: ${incNumber}.<br>`;
const output2 = document.querySelector("#increase2");

function increase(a, b) {
  let counter = 0;
  while (counter < 5) {
    let inc = a += b;
    counter++;
         output2.innerHTML += `
     Increase <b>${counter})</b> Total: <span>${a}</span> <br> 
   `;
    }
  }

increase(stNumber, incNumber);
