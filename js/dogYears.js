/*
2.Años perro
Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.
*/

let age = prompt("Enter an age, please");
let dogAge = age * 7;

let ageMessage =  document.getElementById("dog").innerHTML = `
The age you entered is <b>${age} years</b> and in dog years it is <span>${dogAge} years</span>
`