/*
4.Kilómetros a millas
Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas.
*/

let kms = prompt("Enter a number of kilometers, please");

let miles = kms * 0.621371;

const kmsToMiles = document.querySelector("#kms").innerHTML =`
Your number of kilometers is: <b>${kms} Kms.</b> and converted to miles is : <span>${miles} Miles</span>
`